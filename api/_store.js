// Tiny Upstash Redis REST client (no dependency). Vercel's Upstash Redis integration
// injects KV_REST_API_URL / KV_REST_API_TOKEN (older ones use UPSTASH_REDIS_REST_*).
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

export const storeReady = () => Boolean(URL_ && TOKEN);

// Runs several commands in one round trip. Returns an array of results (or throws).
export async function pipeline(commands) {
  const r = await fetch(URL_.replace(/\/$/, "") + "/pipeline", {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!r.ok) throw new Error(`store ${r.status}`);
  const out = await r.json();
  return out.map((x) => {
    if (x.error) throw new Error(`store: ${x.error}`);
    return x.result;
  });
}

// Days are counted in Dubai time, where Labeeb is.
export const TZ = "Asia/Dubai";
export const dayKey = (d = new Date()) => d.toLocaleDateString("en-CA", { timeZone: TZ }); // YYYY-MM-DD
