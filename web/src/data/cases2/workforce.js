// Time & attendance, rebuilt. Facts from the original case study and Labeeb's answers. No verified metrics: results are directional.
export default {
  key: "workforce",
  num: "03",
  title: "Time & Attendance",
  product: "Zaper · Workforce SaaS",
  status: "Shipped",
  lede: "A selfie check-in, matched to the worker's face and the site's location, that flows into timesheets, overtime and pay. The AI is fast, but it can be wrong. So nobody ever loses a day's attendance because of it.",
  meta: [
    ["Role", "End-to-end Product Designer"],
    ["Team", "AI/ML engineers, developers"],
    ["Platform", "iOS · Android"],
    ["Timeline", "Mar – Nov 2025 · 9 months"],
  ],
  hero: { src: "/work/images-min/iphone-16-pro-msrha3ow-66b2.jpg", w: 1400, h: 823, alt: "The Time & attendance app across several phone screens." },
  summary: [
    { k: "Problem", v: "Punching-machine queues, punch-time manipulation, and paper and Excel passed between HR, supervisors and accounts." },
    { k: "Where AI sits", v: "Face match on a live selfie, combined with a GPS geofence and shift rules. AI also transcribes spoken leave reasons." },
    { k: "Key decision", v: "When the AI is unsure, retry with a hint, then manual capture after 2 tries. A worker is never blocked." },
    { k: "Outcome", v: "No more queues. Workers see their own hours and pay, and HR and supervisors do far less manual attendance work.", src: "Observed, no measured metrics" },
  ],
  pipeline: {
    title: "A selfie, two checks, and a way out when they fail.",
    intro: "Face and location confirm who and where. When either is unsure, the worker still records attendance, and a person reviews it.",
    steps: [
      { kind: "human", t: "Selfie", d: "Live camera only, no gallery uploads. One tap from the home screen." },
      { kind: "ai", t: "Face match", d: "The selfie is matched to the worker's registered face.", risk: "Light, a cap pulled low, a new beard" },
      { kind: "sys", t: "Geofence", d: "GPS checks the worker is inside the assigned site, with a buffer around the boundary.", risk: "Drift on big sites and in basements" },
      { kind: "human", t: "Retry with a hint", d: "“Move to better light” or “remove your cap”. After 2 failed tries, manual capture." },
      { kind: "check", t: "Supervisor verifies", d: "Manual and “location unclear” records go to the team leader to confirm." },
      { kind: "out", t: "Timesheet & pay", d: "Hours, overtime and leave flow into the monthly timesheet and payslip." },
    ],
  },
  stories: [
    {
      t: "Back from leave with a full beard.",
      tag: "AI failure · Fallback",
      problem: "If attendance depends only on face recognition, every recognition error costs a worker paid time.",
      observed: "A worker came back from leave with a full beard and wasn't recognised at the morning check-in.",
      discovered: "Recognition will sometimes fail for honest reasons. Blocking a genuine worker would be a new unfairness.",
      decision: "Never block attendance. Retry with a hint, then offer manual capture after 2 failed tries.",
      change: "He used manual capture after two retries. The photo was tagged as manual for his supervisor to verify, and his face was then re-registered so it wouldn't happen again.",
      outcome: "A recognition failure became a short detour, not lost attendance.",
      before: { src: "/cases/workforce/wf-match-before.png", label: "First approach", cap: "Fully automatic: try again, with no other way in." },
      after: { src: "/work/images-min/workforce-manual-attendance.jpg", w: 680, h: 1408, framed: true, label: "Shipped", cap: "Try again, or complete without face, tagged as manual." },
    },
    {
      t: "Inside the site, but the map said outside.",
      tag: "Technical limits · Context",
      problem: "The geofence is only as good as the phone's GPS.",
      observed: "On large sites and in basements, GPS drift sometimes showed workers outside when they were inside.",
      discovered: "A hard boundary punishes workers for a technical limit they can't control.",
      decision: "Be generous by default and flag instead of reject.",
      change: "We added a buffer around the site boundary. If a worker is still flagged outside, they can check in with a “location unclear” tag for the supervisor.",
      outcome: "Real workers aren't turned away, and supervisors still see every doubtful check-in.",
      before: { src: "/cases/workforce/wf-geo-before.png", cap: "A hard boundary rejects a worker standing in the basement." },
      after: { src: "/cases/workforce/wf-geo-after.png", cap: "A buffer, and “check in anyway” with a tag." },
    },
    {
      t: "“Next Thursday” became the wrong week.",
      tag: "Voice · Multilingual",
      problem: "Workers come from many countries and aren't always comfortable typing a leave reason in English.",
      observed: "Voice leave requests mostly worked, but dates were the main error. “Next Thursday”, or a date said in Malayalam, was sometimes read as the wrong day.",
      discovered: "The reason can be approximate. The dates can't be wrong.",
      decision: "Treat the dates as the thing to confirm, and keep the source.",
      change: "Dates are shown clearly on the confirm screen for the worker to fix before sending. The original voice note is attached, so the supervisor or HR can play it and adjust the application.",
      outcome: "Workers explain in their own language, and wrong dates are caught before approval.",
      before: { src: "/cases/workforce/wf-leave-before.png", cap: "Dates read from speech, easy to miss." },
      after: { src: "/cases/workforce/wf-leave-after.png", cap: "Dates highlighted to check, voice note attached." },
    },
  ],
  fine: "Recreated screens are based on the shipped app. Names and dates are samples. The manual attendance screen is the shipped design.",
  demo: { href: "/#workforce", t: "Try the selfie check-in", d: "A simulated check-in: snap, match, location check, and the result a worker sees." },
  screens: [
    { src: "/work/images-min/workforce-home.jpg", w: 680, h: 1408, framed: true, t: "Home", d: "Check-in on the first screen, with shift and status at a glance." },
    { src: "/work/images-min/workforce-ai-confirm.jpg", w: 680, h: 1408, framed: true, t: "AI confirm", d: "Name, role, time and site, with Wrong or Correct." },
    { src: "/work/images-min/workforce-timesheet.jpg", w: 680, h: 1408, framed: true, t: "Timesheet", d: "Regular hours and overtime kept separate, so workers can spot a wrong record." },
    { src: "/work/images-min/workforce-payslip.jpg", w: 680, h: 1408, framed: true, t: "Payslip", d: "Salary, overtime and deductions, without asking HR." },
    { src: "/work/images-min/workforce-leave-apply.jpg", w: 680, h: 1408, framed: true, t: "Leave by voice", d: "Record the reason in your own language. The voice note travels with the request." },
    { src: "/work/images-min/workforce-team.jpg", w: 680, h: 1408, framed: true, t: "Team (supervisor)", d: "Exceptions show as issues on each card, not buried in a report." },
  ],
  deeper: [
    {
      t: "Context: attendance ran on queues, paper and Excel",
      body: `<p>Sites used punching machines, paper registers and spreadsheets. Workers queued to punch in and out, and some manipulated punch times. HR printed the data, supervisors reviewed it, and accounts processed payroll: slow and manual.</p>
<p>I designed the whole system end to end over 9 months, with the AI/ML engineers and developers: worker app, supervisor tools, and the path from check-in to pay.</p>`,
    },
    {
      t: "What I discovered, beyond the brief",
      body: `<ul>
<li><b>Waiting was part of the problem.</b> Check-in had to take seconds, not create a new queue.</li>
<li><b>Accountability had to be built in.</b> Each record had to tie the right person to the right place and time.</li>
<li><b>Supervisors still needed control.</b> Not every exception can be automated.</li>
<li><b>Workers wanted visibility.</b> “My attendance and working hours affect my salary, so I need to know that the records are correct.”</li>
</ul>`,
    },
    {
      t: "Supervisor control without the old paperwork",
      body: `<p>Full automation removes judgement, but too much manual control recreates the old process. Supervisors get specific, permissioned actions: approve manual attendance and leave, edit timings, change work status, and manage overtime, fines and ratings. Overtime is calculated automatically, then goes supervisor → HR → payroll.</p>`,
    },
    {
      t: "Barriers: AI errors, GPS and language",
      body: `<ul>
<li><b>AI errors:</b> retry hints, manual capture after 2 tries, supervisor verification.</li>
<li><b>GPS drift:</b> a boundary buffer and a “location unclear” tag instead of rejection.</li>
<li><b>Language:</b> voice for leave reasons, transcribed to English, with dates confirmed and the original note attached. Attendance itself is an action, not text.</li>
<li><b>Spoofing:</b> live camera only, no gallery uploads.</li>
</ul>`,
    },
  ],
  results: {
    note: "No measured metrics were available. These are observed outcomes.",
    items: [
      { v: "↓", k: "Queues at punching machines, and dependence on them" },
      { v: "↓", k: "Manual attendance processing and paperwork for HR" },
      { v: "↓", k: "Attendance disputes and correction back-and-forth" },
      { v: "↑", k: "Worker visibility into hours, timesheets and pay" },
      { v: "0", k: "Workers blocked from recording attendance by an AI error" },
      { v: "↑", k: "Speed of the path from attendance to payroll" },
    ],
  },
  learned: [
    { t: "Every AI step needs a way around it.", d: "Face match and GPS both fail for honest reasons. A tagged fallback plus human review kept the system fair without making it slow." },
    { t: "Flag, don't reject.", d: "When the system is unsure, letting the action through with a visible tag worked better than blocking the worker and creating a dispute." },
  ],
  next: { t: "What I'd change: let supervisors set the geofence radius.", d: "Sites differ: a tower with basements isn't a flat compound. Supervisors know their site, so they should be able to tune the boundary instead of everyone getting one fixed buffer." },
};
