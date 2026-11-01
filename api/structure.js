// Live structuring for the voice demo: turns a short transcript (any language)
// into English structured notes. Needs ANTHROPIC_API_KEY in the Vercel project.
// Without the key it answers 503 and the page falls back to its sample data.
import Anthropic from "@anthropic-ai/sdk";
import { reasonFor, logError } from "./_errors.js";

const MAX_CHARS = 1200;
const PER_IP_PER_HOUR = 12;
const hits = new Map(); // best-effort limit; resets when the function instance recycles

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["language", "english", "summary", "items", "actions"],
  properties: {
    language: { type: "string" },
    english: { type: "string" },
    summary: { type: "string" },
    items: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["kind", "text", "why"],
        properties: {
          kind: { type: "string", enum: ["progress", "issue", "request", "info"] },
          text: { type: "string" },
          why: { type: "string" },
        },
      },
    },
    actions: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["task", "who", "when"],
        properties: {
          task: { type: "string" },
          who: { type: "string" },
          when: { type: "string" },
        },
      },
    },
  },
};

const SYSTEM = `You turn a short spoken note from a worker, supervisor or manager into structured information.
The note may be in any language. Write every output field in plain, simple English.
- language: the language the note was spoken in.
- english: a faithful English rendering of the note.
- summary: one sentence.
- items: each distinct point, classified as progress (work done), issue (a problem or risk), request (something the speaker asks for, such as leave or materials) or info. "why" is a few words on why you chose that classification, quoting the speaker's words where possible.
- actions: concrete follow-ups that the note implies. Use "Not stated" for who or when if the speaker didn't say.
Only use what the speaker said. Never add details, names, numbers or dates they didn't mention.`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: "live AI is not configured" });

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "anon";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3600_000);
  if (recent.length >= PER_IP_PER_HOUR) return res.status(429).json({ error: "Too many tries for now. Try a sample instead." });
  hits.set(ip, [...recent, now]);

  const text = String((req.body && req.body.text) || "").trim();
  if (text.length < 4) return res.status(400).json({ error: "Say a little more first." });
  if (text.length > MAX_CHARS) return res.status(413).json({ error: "That's longer than this demo handles." });

  const client = new Anthropic();
  try {
    const response = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 4000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
      system: SYSTEM,
      messages: [{ role: "user", content: `Spoken note:\n"""${text}"""` }],
    });
    if (response.stop_reason === "refusal") return res.status(422).json({ error: "The AI declined this one. Try a different note." });
    const block = response.content.find((b) => b.type === "text");
    if (!block) return res.status(502).json({ error: "No result came back." });
    return res.status(200).json({ ...JSON.parse(block.text), model: response.model });
  } catch (err) {
    logError("structure", err);
    const reason = reasonFor(err);
    if (reason === "busy") return res.status(429).json({ error: "The AI is busy right now. Try a sample instead.", reason });
    return res.status(502).json({ error: "The live AI isn't available right now. Try a sample to see the result.", reason });
  }
}
