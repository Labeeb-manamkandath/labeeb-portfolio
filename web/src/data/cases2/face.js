// AI Face Registration Flow, rebuilt. Facts from the original case study and Labeeb's answers
// (/mnt/project-files/case-studies/answers.md). No liveness check shipped in this version.
export default {
  key: "case",
  num: "02",
  title: "AI Face Registration Flow",
  product: "Zaper · Workforce SaaS",
  status: "Shipped",
  lede: "Workers register their face once, on site, so daily check-ins can work by selfie. The hard part wasn't the AI. It was getting a clear photo from someone in harsh sun, who can't read small text, without making them feel watched.",
  meta: [
    ["Role", "Senior Product Designer"],
    ["Team", "AI/ML engineers, developers"],
    ["Platform", "iOS · Android"],
    ["Timeline", "Jan 2025 · 6 weeks"],
  ],
  hero: { src: "/cases/banners/face.webp", w: 1400, h: 933, alt: "Phones showing the guided face registration steps." },
  summary: [
    { k: "Problem", v: "Face check-in only works if registration photos are good. Workers failed in harsh sun and dim buildings, and many couldn't read the instructions." },
    { k: "Where AI sits", v: "Live checks on the phone (one face, centred, close, well lit), then a server quality and match check after upload." },
    { k: "Key decision", v: "Guide with an outline and short voice prompts. The capture button only works when the photo will pass." },
    { k: "Outcome", v: "20% more successful registrations after launch. Most workers now register on the first or second try.", src: "User survey + observation" },
  ],
  pipeline: {
    title: "Two checks: one live, one after upload.",
    intro: "The phone catches the common problems before the photo is taken, so the server's check rarely has to reject anyone.",
    steps: [
      { kind: "human", t: "Short intro", d: "What's about to happen and why, in plain words and the worker's language." },
      { kind: "ai", t: "Live checks", d: "On the phone: one face, centred, close enough, well lit. All four must pass.", risk: "Harsh sun behind, dim light inside" },
      { kind: "human", t: "Three angles", d: "Straight, slight right, slight left, with an outline and voice prompts.", risk: "Phone held too far away" },
      { kind: "ai", t: "Server check", d: "A second quality and match check after upload.", risk: "Big appearance changes later" },
      { kind: "check", t: "Supervisor present", d: "Registration happens with a supervisor nearby. They also approve any re-registration." },
      { kind: "out", t: "Check-in ready", d: "Daily attendance now works with a selfie." },
    ],
  },
  stories: [
    {
      t: "He held the phone at arm's length and looked down.",
      tag: "Accessibility · Guidance",
      problem: "Registration kept failing for some workers, and text instructions weren't helping.",
      observed: "An older worker kept failing. He held the phone at arm's length and looked down at it, and he couldn't read the instructions well.",
      discovered: "Text can't guide someone who can't read it at that distance. Workers also skipped a long instruction screen we tested earlier.",
      decision: "Guide with the camera itself, not with words: a face outline on screen and short voice prompts.",
      change: "An outline shows where the face goes. Voice says “come closer” and “look straight” in the worker's language.",
      outcome: "After that, most workers registered on the first or second try.",
      before: { src: "/cases/face/face-guide-before.png", cap: "A line of text, a small face, and nothing that says why." },
      after: { src: "/cases/face/face-guide-after.png", cap: "Outline plus voice guidance: “Come closer”." },
    },
    {
      t: "Most failures came from light, not from the AI.",
      tag: "Environment · Error prevention",
      problem: "Photos that looked fine to workers failed the match later.",
      observed: "Most failures came from harsh sun behind the worker and dim light inside unfinished buildings. Distance came next.",
      discovered: "If the phone can tell a photo will fail, the worker should know before taking it, not after an upload.",
      decision: "Check live on the phone, and only enable the capture button when all four checks pass.",
      change: "Live checks for one face, centred, close enough and well lit. Each failing check says what to do, like “turn away from the sun”.",
      outcome: "Problems are fixed in the moment, and the server's second check becomes a safety net, not the first line.",
      after: { src: "/cases/face/face-light-after.png", label: "Shipped", cap: "The button waits until the light is right, and says why." },
    },
    {
      t: "A new beard, a mismatch, and a way back in.",
      tag: "Coverings · Recovery",
      problem: "Registration photos have to match faces for months, but faces change.",
      observed: "Beards were fine at registration. Big changes later, like a new beard or a shaved one, sometimes caused a mismatch at check-in.",
      discovered: "Clear rules about coverings help at registration, but no rule prevents a face from changing.",
      decision: "Set clear covering rules, and make re-registration easy but supervised.",
      change: "At registration: helmets, caps and masks off, explained in the worker's language. At check-in: caps and helmets OK if the face is visible, masks down. After a big change, a supervisor approves a re-registration.",
      outcome: "A changed face is a quick fix with a supervisor, not a daily failure.",
      after: { src: "/cases/face/face-rereg.png", label: "Shipped flow", cap: "Mismatch after a big change, with a way to re-register." },
    },
  ],
  demo: { href: "/#face", t: "Try face registration", d: "Use your camera to see the step-by-step guidance. Face detection runs on your device. Nothing is uploaded." },
  screens: [
    { src: "/work/images-min/face-v51-dark.jpg", w: 1400, h: 3031, t: "Explored · camera style", d: "A dark viewfinder like the native camera. Familiar, but the progress indicator was harder to see." },
    { src: "/work/images-min/face-v53-light.jpg", w: 1400, h: 3031, t: "Carried forward · light", d: "Step and progress first, the instruction above the frame, and an explicit Take Photo button." },
  ],
  deeper: [
    {
      t: "Context: what I was asked to build",
      body: `<p>Zaper needed automated attendance built on daily face check-ins. Registration is the foundation: a bad registration photo means failed check-ins every day after. I designed the registration flow end to end with the AI/ML engineers and developers.</p>
<p>The worry wasn't only accuracy. Scanning your face for a company app can feel like surveillance. The flow had to feel like help, not monitoring.</p>`,
    },
    {
      t: "Three approaches I tested before this one",
      body: `<ul>
<li><b>One long instruction screen.</b> Workers skipped it entirely, which led to mistakes and repeated failed attempts.</li>
<li><b>Photo-booth capture.</b> Several angles at once. Accurate, but it needed space and time a busy site doesn't have.</li>
<li><b>Step-by-step with live feedback (chosen).</b> Small guided steps with cues on the camera view. Low effort, good photos, nothing to read.</li>
</ul>
<p>Research: 30+ in-depth interviews with field workers during their workdays, plus a full day observing on site.</p>`,
    },
    {
      t: "Other decisions: tone, progress and “Do Later”",
      body: `<ul>
<li><b>Calm, plain language.</b> “Detection failed / error code 04” became “Face not centred”. Errors read as guidance, not judgement.</li>
<li><b>Visible progress.</b> 0% → 60% → 80% → 100% across the three angles, so workers know how close they are.</li>
<li><b>Do Later.</b> Registration no longer blocks the app. It can be finished from the profile, and removing the pressure increased voluntary completion.</li>
<li><b>Less visual noise.</b> A neutral layout keeps attention on the face and the feedback.</li>
</ul>`,
    },
    {
      t: "Barriers and what we left out",
      body: `<p><b>Light on site</b> was the biggest barrier, solved by live checks. <b>Distance and reading</b> were solved by the outline and voice prompts. <b>Coverings</b> are handled with clear rules at registration and at check-in.</p>
<p><b>No liveness check shipped in this version.</b> Supervisors were present at registration, which covered most of the risk of someone registering a photo instead of a face.</p>`,
    },
  ],
  results: {
    note: "The percentage is from a user survey. The rest are observations.",
    items: [
      { v: "20%", k: "More successful face registrations after launch" },
      { v: "1–2", k: "Tries for most workers to register after voice guidance was added" },
      { v: "↓", k: "Noticeably fewer “scan not working” support requests" },
      { v: "3", k: "Approaches prototyped and tested before the final flow" },
      { v: "30+", k: "In-depth interviews with field workers on site" },
      { v: "0", k: "Blocking steps: registration can always be done later" },
    ],
  },
  learned: [
    { t: "Prevent the failure before the AI sees it.", d: "Most failed matches were bad photos. Checking light and distance live did more than any server-side tuning could." },
    { t: "Guidance has to work without reading.", d: "The older worker taught us that text instructions exclude people. An outline and a voice prompt include them." },
  ],
  next: { t: "What I'd change: voice guidance from the start.", d: "We added voice prompts after seeing people fail. I'd guide every worker by voice from the first step, not only after things go wrong." },
};
