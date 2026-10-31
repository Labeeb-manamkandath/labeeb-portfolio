// Scripted toolbox talk for the Talk Analyzer demo. Labelled "Simulated" on the page.
// Each line of the talk says which checklist points it covers, and how well.
export const TOPIC = "Working at height";

export const POINTS = [
  { id: "harness", text: "Inspect your harness before use" },
  { id: "anchor", text: "Clip to an approved anchor point" },
  { id: "ladder", text: "Keep three points of contact on ladders" },
  { id: "edge", text: "Check guardrails and edge protection" },
  { id: "tools", text: "Tether tools when working above people" },
  { id: "weather", text: "Stop work in strong wind" },
  { id: "rescue", text: "Know the rescue plan if someone falls" },
];

// level: "full" = fully covered, "part" = partly mentioned
export const LINES = [
  { t: "Morning everyone. Today we're on level six, so this one is about working at height.", hits: [] },
  { t: "Before you go up, check your harness. Webbing, buckles, stitching. If anything is frayed, it goes back to the store.", hits: [["harness", "full"]] },
  { t: "You clip on to the yellow anchor points only. Not the handrail, not a pipe. Yellow points.", hits: [["anchor", "full"]] },
  { t: "On ladders, two feet and one hand at all times. Carry tools in your belt, not in your hand.", hits: [["ladder", "full"]] },
  { t: "Guys on the east side, the guardrail there was moved yesterday, so have a look before you start.", hits: [["edge", "part"]] },
  { t: "And there are people working under you on level five, so lanyards on your tools today.", hits: [["tools", "full"]] },
  { t: "If the wind picks up after lunch, we stop. Don't wait for me to tell you.", hits: [["weather", "full"]] },
  { t: "Okay, any questions? No? Let's go.", hits: [] },
];

// Small, honest summary text: written as coaching, not as an audit.
export const PHOTO_PEOPLE = 9;
