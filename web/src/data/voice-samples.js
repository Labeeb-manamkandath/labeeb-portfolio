// Scripted samples for the voice demo. They show how the real product behaves;
// they are labelled "Simulated" on the page and never sent to an AI.
export const SAMPLES = [
  {
    id: "site",
    label: "Site update",
    langLabel: "English",
    said: "Level three slab pour is finished. Crane two is leaking hydraulic oil again, so we stopped lifting at ten. We need the mechanic before tomorrow morning, and the rebar for level four still hasn't arrived.",
    result: {
      language: "English",
      english: "Level three slab pour is finished. Crane two is leaking hydraulic oil again, so we stopped lifting at ten. We need the mechanic before tomorrow morning, and the rebar for level four still hasn't arrived.",
      summary: "Slab pour on level 3 is done, but crane 2 is down with a hydraulic leak and level 4 rebar is late.",
      items: [
        { kind: "progress", text: "Level 3 slab pour finished", why: "“slab pour is finished”" },
        { kind: "issue", text: "Crane 2 leaking hydraulic oil again; lifting stopped at 10:00", why: "“leaking … again, so we stopped lifting”" },
        { kind: "issue", text: "Rebar for level 4 has not arrived", why: "“still hasn't arrived”" },
      ],
      actions: [
        { task: "Send a mechanic to crane 2", who: "Not stated", when: "Before tomorrow morning" },
        { task: "Chase the level 4 rebar delivery", who: "Not stated", when: "Not stated" },
      ],
    },
  },
  {
    id: "leave",
    label: "Leave request",
    langLabel: "Hindi",
    said: "मुझे अगले सोमवार से तीन दिन की छुट्टी चाहिए। गाँव में मेरी माँ की तबीयत ठीक नहीं है।",
    result: {
      language: "Hindi",
      english: "I need three days of leave from next Monday. My mother is not well in my village.",
      summary: "A worker is asking for three days' leave from next Monday because his mother is unwell.",
      items: [
        { kind: "request", text: "3 days of leave, starting next Monday", why: "“तीन दिन की छुट्टी चाहिए” (need three days' leave)" },
        { kind: "info", text: "Reason: mother is unwell, back in the village", why: "“माँ की तबीयत ठीक नहीं है” (mother is not well)" },
      ],
      actions: [{ task: "Review and approve the leave request", who: "Supervisor", when: "Before next Monday" }],
    },
  },
  {
    id: "fm",
    label: "Facility issue",
    langLabel: "Malayalam",
    said: "രണ്ടാം നിലയിലെ എസി യൂണിറ്റിൽ നിന്ന് വെള്ളം ചോരുന്നുണ്ട്. ഫിൽട്ടർ ഇന്ന് മാറ്റി, പക്ഷേ ഡ്രെയിൻ പൈപ്പ് പരിശോധിക്കണം.",
    result: {
      language: "Malayalam",
      english: "Water is leaking from the AC unit on the second floor. The filter was changed today, but the drain pipe needs to be checked.",
      summary: "The second-floor AC unit is leaking; the filter was replaced, and the drain pipe still needs checking.",
      items: [
        { kind: "issue", text: "AC unit on the 2nd floor is leaking water", why: "“വെള്ളം ചോരുന്നുണ്ട്” (water is leaking)" },
        { kind: "progress", text: "Filter replaced today", why: "“ഫിൽട്ടർ ഇന്ന് മാറ്റി” (filter changed today)" },
      ],
      actions: [{ task: "Check the drain pipe on the 2nd-floor AC unit", who: "Not stated", when: "Not stated" }],
    },
  },
];

export const LANGS = [
  { code: "en-US", label: "English" },
  { code: "hi-IN", label: "Hindi" },
  { code: "ml-IN", label: "Malayalam" },
  { code: "ta-IN", label: "Tamil" },
  { code: "ar-AE", label: "Arabic" },
  { code: "ur-PK", label: "Urdu" },
  { code: "bn-IN", label: "Bengali" },
  { code: "ne-NP", label: "Nepali" },
  { code: "fil-PH", label: "Filipino" },
];
