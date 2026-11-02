// AI Voice Insight Generator, rebuilt case study.
// Every fact here comes from the original case study or from Labeeb's answers
// (/mnt/project-files/case-studies/answers.md). Metrics are from a user survey and are labelled that way.
export default {
  key: "voice",
  num: "01",
  title: "AI Voice Insight Generator",
  product: "Zaper · Workforce SaaS",
  status: "Shipped",
  lede: "Site workers speak an update in their own language. The AI turns it into structured reports, and the worker checks them before anything is sent.",
  meta: [
    ["Role", "Senior Product Designer"],
    ["Team", "AI/ML engineers, developers"],
    ["Platform", "iOS · Android"],
    ["Timeline", "Sept 2024 · 8 weeks"],
  ],
  hero: { src: "/cases/banners/voice.webp", w: 1400, h: 974, alt: "Two phones: the manager's insight dashboard and the worker's AI confirm screen." },
  summary: [
    { k: "Problem", v: "Daily reporting forms took about 10 minutes. Field engineers didn't have them, so updates went to WhatsApp or nowhere." },
    { k: "Where AI sits", v: "Speech-to-text, translation, splitting one note into updates, and labelling each as Issue or Progress." },
    { k: "Key decision", v: "The AI suggests and the worker confirms. The AI may only mark something urgent if the worker said it." },
    { k: "Outcome", v: "82% field adoption by week 3, up from 12% with forms. Reporting about 3× faster.", src: "User survey" },
  ],
  pipeline: {
    title: "What happens after someone speaks.",
    intro: "Several steps, not one model. The AI does the heavy lifting in the middle. The worker has the last word before anything reaches a manager.",
    steps: [
      { kind: "human", t: "Record", d: "The worker picks a language and speaks. Usually Malayalam, Hindi or Tamil." },
      { kind: "ai", t: "Speech to text", d: "The voice note becomes text in the spoken language.", risk: "Can mishear on noisy sites" },
      { kind: "ai", t: "Translate", d: "The text is translated to English for managers.", risk: "Can lose tone, like how serious something is" },
      { kind: "ai", t: "Split", d: "One note often covers two or three things, so it is split into separate updates.", risk: "Can merge two updates into one" },
      { kind: "ai", t: "Label & link", d: "Each update is labelled Issue or Progress and linked to the right project or task.", risk: "Can sound more certain than the worker was" },
      { kind: "check", t: "Worker confirms", d: "A confirm screen shows what the AI understood. The worker fixes anything, then sends." },
      { kind: "out", t: "Report", d: "Managers get structured updates, with the original voice note attached to every one." },
    ],
  },
  stories: [
    {
      t: "“Dripping a little” became “Major leak, urgent”.",
      tag: "Trust · AI overconfidence",
      problem: "The AI filled in how serious an issue was, even when the worker never said.",
      observed: "In testing, a worker said in Malayalam that a tap was “dripping a little”. The AI wrote “Major leak, urgent”.",
      discovered: "This is the “sounds certain” problem. Supervisors would have sent someone out for nothing, and they'd stop trusting urgent flags.",
      decision: "The confirm screen caught it: the worker saw “Urgent” and changed it before sending. So the AI may only set urgency when the worker actually says it is urgent.",
      change: "Urgency is “not stated” unless spoken. The original voice note stays attached so supervisors can listen for themselves.",
      outcome: "Urgent flags mean what workers meant, and the confirm step proved its value in a real case.",
      before: { src: "/cases/voice/urgency-before.png", cap: "The AI adds “Urgent” that the worker never said." },
      after: { src: "/cases/voice/urgency-after.png", cap: "Urgency “not stated”, voice note attached." },
    },
    {
      t: "Two updates in one sentence, one got lost.",
      tag: "AI output structure",
      problem: "Workers rarely report one thing at a time. A single note often mixes good news and a problem.",
      observed: "“Room 2 wiring is done, but the pipe in Room 3 is blocked” came out as a single Progress item.",
      discovered: "When the AI merges updates, the issue hides inside a green Progress card. Managers scanning for red would never see the blocked pipe.",
      decision: "Fix it in two places: the AI team improved the split step, and I gave workers control on the confirm screen.",
      change: "Workers can split or merge items before sending, so a wrong grouping is a one-tap fix, not a lost issue.",
      outcome: "Issues stay visible as their own red items, even when the AI groups them badly.",
      before: { src: "/cases/voice/merge-before.png", cap: "The issue is buried inside a Progress item." },
      after: { src: "/cases/voice/merge-after.png", cap: "Split into Progress and Issue. Workers can split or merge." },
    },
    {
      t: "Managers didn't trust a translated summary.",
      tag: "Transparency · Multilingual",
      problem: "Managers read English summaries of notes spoken in Malayalam, Hindi or Tamil.",
      observed: "Managers told us they couldn't fully trust a translated summary to say what the worker meant.",
      discovered: "Translation is a second layer of interpretation on top of transcription. A summary with no source asks managers to trust the AI twice.",
      decision: "Never show the AI's version without the source.",
      change: "The original voice note is attached to every report, so a manager can check it in seconds.",
      outcome: "The summary saves time, and the voice note settles doubts without a phone call.",
      before: { src: "/cases/voice/trust-before.png", cap: "A translated summary only." },
      after: { src: "/cases/voice/trust-after.png", cap: "The original voice note travels with every report." },
    },
  ],
  demo: { href: "/#voice", t: "Try the voice demo", d: "Speak or type a site update and watch it become structured notes you can review. Runs in your browser." },
  deeper: [
    {
      t: "Context: what I was asked to build",
      body: `<p>Zaper is a workforce platform for construction and facility management. The brief was a faster way for field teams to report daily progress and issues to management. My role: end-to-end product design for the field app and the manager view, working with AI/ML engineers and developers.</p>
<p>AI made sense because the input was already speech. Workers narrated problems to supervisors all day. What was missing was a way to capture that without a form.</p>`,
    },
    {
      t: "What I discovered, beyond the brief",
      body: `<ul>
<li><b>It was a tool problem, not a motivation problem.</b> “The form takes 10 minutes. I don't have 10 minutes. I have 10 seconds between tasks.” (site engineer).</li>
<li><b>Language was the adoption blocker.</b> 65% of crew members said they weren't comfortable reporting in English (survey).</li>
<li><b>Managers needed a briefing, not a feed.</b> They checked updates before morning meetings and closed the app when faced with 80 entries.</li>
<li><b>Photos made updates credible.</b> Reports with a photo were acted on faster.</li>
</ul>
<p>Research: 12 interviews across 4 active sites, with behaviour observed on site.</p>`,
    },
    {
      t: "Other decisions that shaped the product",
      body: `<ul>
<li><b>The mic is the whole entry screen.</b> The first version put a voice field inside a form. Load at the entry point was the main reason people dropped reports, so the mic became one big button.</li>
<li><b>Pick the language first.</b> Auto-detect failed on bilingual workers and multilingual phones, and wrong transcripts cost trust. A 2-second picker before recording fixed it.</li>
<li><b>Annotate photos.</b> Managers couldn't always see what in a photo was the problem, so workers can circle or arrow it.</li>
<li><b>Top 10 Insights.</b> Rules set the order: issues before progress, urgent first (only when said), then recent, then high-priority projects. The AI groups similar reports so one problem doesn't fill five slots.</li>
</ul>`,
    },
    {
      t: "Barriers: noise, accents and mixed languages",
      body: `<p>Construction sites are loud, and workers mix languages in one sentence. Transcription errors were inevitable, so the design assumes them. The language is chosen up front, the worker can re-record, and the confirm screen is built to be scanned in seconds. The original voice note is the final fallback for anyone reading the report.</p>`,
    },
  ],
  screens: [
    { src: "/work/images-min/voice-management-screen.jpg", w: 1400, h: 3031, t: "Worker · confirm screen", d: "The AI splits the note into labelled insights. Each has Edit, the worker can record again, and nothing is sent until they submit." },
    { src: "/work/images-min/voice-field-screen.jpg", w: 1400, h: 3031, t: "Manager · project insights", d: "Grouped by person, not time, with issue and progress counts and the voice note inline." },
  ],
  results: {
    note: "From a user survey after launch. The other outcomes are observations.",
    items: [
      { v: "82%", k: "Field adoption by week 3, up from 12% with forms" },
      { v: "3×", k: "Faster reporting, about 9 min to under 3 min" },
      { v: "40%", k: "Fewer management escalations from missed updates" },
      { v: "60%", k: "Higher trust scores after adding the confirm step" },
      { v: "91%", k: "Of managers used Top 10 daily in week 1" },
      { v: "6+", k: "Languages at launch, including Malayalam, Hindi, Tamil, Arabic" },
    ],
  },
  learned: [
    { t: "Design for the AI being wrong, not just right.", d: "Every story here was caught by the confirm screen. It earned its place as the core of the product, not a formality." },
    { t: "Show the source next to the AI's version.", d: "A summary saves time. The original voice note is what makes people believe it." },
  ],
  next: { t: "What I'd change: make the AI ask instead of guess.", d: "Most of our errors came from the AI filling gaps with confident guesses. When a note is unclear, like whether something is urgent or which site the worker means, the AI should ask one quick question at the moment of recording. A short question is cheaper than a wrong report later." },
};
