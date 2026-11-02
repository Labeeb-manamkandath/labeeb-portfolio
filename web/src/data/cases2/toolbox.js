// AI Toolbox Talk Analyzer, rebuilt. SHIPPED and live on 21 sites (not a concept).
// Facts from the original case study and Labeeb's answers. Screen-watching was a predicted risk, not observed.
export default {
  key: "toolbox",
  num: "04",
  title: "AI Toolbox Talk Analyzer",
  product: "Zaper · Construction safety",
  status: "Shipped · live on 21 sites",
  lede: "The AI listens to the morning safety talk, checks it against the checklist, and tells the supervisor what was missed. It also logs attendance from one group photo. It's designed to coach the supervisor, not grade him in front of his crew.",
  meta: [
    ["Role", "Senior Product Designer"],
    ["Team", "AI/ML engineers, developers"],
    ["Platform", "iOS · Android"],
    ["Timeline", "Nov 2024 · 6 weeks"],
  ],
  hero: { src: "/work/images-min/toolbox-hero.jpg", w: 1400, h: 934, alt: "Phones showing the toolbox talk checklist and live coverage." },
  summary: [
    { k: "Problem", v: "Toolbox talks happen every morning, but nobody could tell if every safety point was covered. Attendance was a paper sheet." },
    { k: "Where AI sits", v: "Listens to the talk and matches it to the checklist: covered, partly covered, not yet covered. Also matches faces in a group photo." },
    { k: "Key decision", v: "No red “missed” and no live score during the talk. The missed list comes in the summary afterwards." },
    { k: "Outcome", v: "Live and used by supervisors on 21 sites.", src: "Deployment" },
  ],
  pipeline: {
    title: "Listen during the talk, judge after it.",
    intro: "The AI works quietly in the background. The supervisor talks to the crew, then gets a summary of what to cover next time.",
    steps: [
      { kind: "human", t: "Pick the topic", d: "The day's checklist of safety points appears. One button: Start & Speak." },
      { kind: "ai", t: "Listen & match", d: "The talk is checked against each point: covered, partly covered (orange), or not yet covered.", risk: "Noise and informal speech" },
      { kind: "ai", t: "Summary", d: "After the talk: what was covered and which points were missed." },
      { kind: "human", t: "Group photo", d: "The supervisor takes one photo of the crew." },
      { kind: "ai", t: "Face match", d: "Faces are matched to the crew list.", risk: "People at the back, helmets pulled low" },
      { kind: "check", t: "Tag unmatched", d: "Anyone not matched shows as unmatched. The supervisor tags them by hand." },
      { kind: "out", t: "Session record", d: "Coverage and attendance in one record for management." },
    ],
  },
  stories: [
    {
      t: "“It's marking me wrong in front of my crew.”",
      tag: "Tone · Trust",
      problem: "Live feedback during a talk is visible, and supervisors give these talks in front of their teams.",
      observed: "In testing, a supervisor saw several red “missed” points and felt the app was marking him wrong in front of his crew.",
      discovered: "Being right isn't enough. Feedback at the wrong moment turns a coaching tool into an audit, and people avoid audits.",
      decision: "Nothing is “missed” while the talk is still going. Judge after, not during.",
      change: "During the talk, points show as “not yet covered”. The missed list only appears in the summary afterwards.",
      outcome: "Supervisors keep their authority during the talk and still get a clear list of gaps.",
      before: { src: "/cases/toolbox/tb-missed-before.png", label: "Tested", cap: "Red “MISSED” labels while he's still talking." },
      after: { src: "/cases/toolbox/tb-missed-after.png", label: "Shipped", cap: "“Not yet covered” during the talk, orange for partly covered." },
    },
    {
      t: "A live score would pull eyes to the screen.",
      tag: "Attention · Predicted risk",
      problem: "The talk is for the crew. The phone should stay in the background.",
      observed: "The early design showed a live percentage climbing as points were covered. I predicted supervisors would start watching the number instead of their workers.",
      discovered: "A live score invites the supervisor to chase it. That defeats the point of the talk.",
      decision: "Hide the live percentage. Show the full result at the end.",
      change: "The shipped version listens without a running score. The supervisor checks the result once the talk is done.",
      outcome: "The supervisor's attention stays on the crew.",
      before: { src: "/work/images-min/toolbox-during.jpg", w: 900, h: 1949, label: "Earlier design", cap: "A live percentage and progress bar." },
      after: { src: "/cases/toolbox/tb-missed-after.png", label: "Shipped", cap: "Listening, with the result after the talk." },
    },
    {
      t: "One group photo, and the people at the back.",
      tag: "Attendance · Human in the loop",
      problem: "Paper sign-in sheets were slow and easy to fake. Signing in one by one takes too long before work.",
      observed: "With one group photo, people at the back or with a helmet pulled low often weren't matched.",
      discovered: "Group photos will never match everyone. The design has to expect gaps, not hide them.",
      decision: "Match automatically, and show the gaps for the supervisor to fill.",
      change: "Unmatched crew members are listed as unmatched, and the supervisor tags them manually.",
      outcome: "Attendance takes one photo plus a couple of taps, and nobody is wrongly marked absent.",
      after: { src: "/cases/toolbox/tb-group.png", label: "Shipped flow", cap: "Matched automatically, unmatched tagged by the supervisor." },
    },
  ],
  fine: "Recreated screens are based on the shipped app. Names are samples. The “Earlier design” screen is from the original design.",
  demo: { href: "/#talk", t: "Try the talk analyzer", d: "A scripted toolbox talk plays as text, and the checklist responds as points are covered." },
  screens: [
    { src: "/work/images-min/toolbox-before.jpg", w: 900, h: 1949, t: "Before the talk", d: "The checklist is the script. One button starts the session, and full content is there if needed." },
    { src: "/cases/toolbox/tb-group.png", w: 780, h: 1688, t: "After the talk · attendance", d: "One group photo, with unmatched people listed for the supervisor to tag." },
  ],
  deeper: [
    {
      t: "Context: the talk with no record",
      body: `<p>Every morning on a construction site, a supervisor runs a 5–10 minute toolbox talk. There was no way to know whether every safety point was covered, and no reliable record of who attended. If something went wrong later, there was no proof of what was said.</p>
<p>I designed the product end to end with the AI/ML team, who built the working version. A project manager signed off before launch.</p>`,
    },
    {
      t: "Research: what I saw before designing",
      body: `<p>I watched five or six toolbox talks at two or three sites before designing. Supervisors and safety officers tested the prototype. After launch, I followed up with supervisors on how they actually used it.</p>
<ul>
<li>Supervisors often thought they'd covered every point but had missed small details.</li>
<li>Workers preferred short, clear talks with fewer, well-explained points.</li>
<li>Attendance on paper was slow and unreliable.</li>
</ul>`,
    },
    {
      t: "How the design evolved",
      body: `<ul>
<li><b>From transcript to guidance.</b> The first direction recorded and transcribed the talk for review afterwards. It felt like surveillance, so the focus moved to helping the supervisor.</li>
<li><b>Three coverage states.</b> Covered, partly covered (orange), not yet covered. A partial state is more honest than forcing a yes or no.</li>
<li><b>Attendance in the same session.</b> Field observation showed attendance was as broken as talk quality, so one session now does both.</li>
</ul>`,
    },
    {
      t: "Barriers: noise, informal speech and three audiences",
      body: `<p>Sites are noisy and supervisors talk informally, so the AI won't always be sure. The partly covered state shows that honestly instead of claiming certainty. The product also serves three groups: supervisors (supported), workers (shorter, clearer talks) and management (a record). The supervisor's flow comes first, and the management record is a by-product of it.</p>`,
    },
  ],
  results: {
    note: "Deployment status and process. No measured metrics were collected.",
    items: [
      { v: "21", k: "Sites where supervisors use it in real toolbox talks" },
      { v: "1", k: "Session covers both the talk record and attendance" },
      { v: "0", k: "Paper sign-in sheets: one group photo plus manual tags" },
    ],
  },
  learned: [
    { t: "When feedback appears matters as much as what it says.", d: "The same “missed” list is useful after the talk and damaging during it." },
    { t: "Design the gaps into the AI's output.", d: "Partly covered and unmatched exist because the AI won't always be sure. Showing that kept people trusting the parts it did get right." },
  ],
  next: { t: "What I'd change: lead with the summary.", d: "Supervisors care most about a quick “you missed these 2 points, cover them tomorrow.” Live tracking during the talk mattered less than we first thought. I'd put the post-talk summary at the centre from day one." },
};
