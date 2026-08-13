// Content data for AI Voice Insight Generator case study.
// Keep all copy here — components stay generic, content stays editable.
// For your NEXT case study: duplicate this file, fill in the same shape,
// add it to the array in src/data/caseStudies.js, done.

const aiVoiceInsight = {
  slug: "ai-voice-insight-generator",
  meta: {
    tag: "Case Study — 01",
    title: ["AI Voice", "Insight", "Generator"],
    accentWord: "Insight", // which title line gets the accent color
    bgWord: "VOICE", // faint background word in hero
    role: "Senior Product Designer",
    platform: "iOS · Android · Web",
    timeline: "Sept 2024 · 8 Weeks",
    product: "Zaper — Workforce SaaS",
    heroImage: "/images/hero-mockup.jpg",
    heroImageAlt:
      "AI Voice Insight Generator — App mockup showing management dashboard and field user AI classification screen",
  },

  impactStrip: [
    { num: "3×", label: "Faster daily reporting compared to manual form entry" },
    { num: "6+", label: "Languages supported — English, Hindi, Tamil, Arabic & more" },
    { num: "82%", label: "Field adoption rate within the first 3 weeks of rollout" },
    { num: "40%", label: "Reduction in management escalations due to missed updates" },
  ],

  problem: {
    label: "The Real Problem",
    heading: ["Nobody had time to", "write reports."],
    bodyLead:
      "Construction sites run on speed. A field engineer managing 40+ workers doesn't pause work to fill a digital form. So they don't. Updates go to WhatsApp. Issues get buried. Management guesses at project health by calling site supervisors at end of day.",
    bodySecondary:
      "This wasn't a user motivation problem. It was a tool design problem — the existing reporting system demanded behaviour change, not tool change. I needed to flip that.",
    quote: {
      text: "The form takes 10 minutes. I don't have 10 minutes. I have 10 seconds between tasks.",
      cite: "Site engineer, user interview · Dubai construction project",
    },
    statCards: [
      {
        num: "3",
        title: "Root causes identified",
        body: "Forms were too structured, required switching context, and had no language flexibility for multilingual crews.",
      },
      {
        num: "5",
        title: "Stakeholders mapped",
        body: "Field engineers, site supervisors, project managers, operations heads, and the CEO — each with a different need from the same data.",
      },
      {
        num: "12",
        title: "User interviews conducted",
        body: "Across 4 active construction sites. Behaviour observed in context — not just self-reported in a meeting room.",
      },
    ],
  },

  research: {
    label: "Discovery & Research",
    heading: ["What I actually found", "in the field."],
    insights: [
      {
        title: "Voice is the natural medium for fieldwork",
        body: "Workers already narrated issues verbally to supervisors. The mental model existed — we just needed to capture it digitally without friction.",
      },
      {
        title: "Language was a silent barrier",
        body: "65% of crew members weren't comfortable reporting in English. This meant details got lost in translation or not reported at all. Language support wasn't a nice-to-have — it was the adoption blocker.",
      },
      {
        title: "Managers needed a briefing, not a feed",
        body: 'Project managers checked updates before morning meetings. They needed a pre-digested "top 10" view — not 200 individual field entries to scroll through. Volume was noise.',
      },
      {
        title: "Visual evidence made updates credible",
        body: "When field workers included a photo, management acted faster. Without it, reports were often questioned. Trust lived in visual proof.",
      },
      {
        title: "AI classification needed to be trustworthy",
        body: "Early testing showed users distrust AI labels when they feel arbitrary. I needed the classification logic to feel obvious — not magic. The colour coding (green/red) had to match mental models, not just data logic.",
      },
    ],
  },

  principles: {
    label: "Design Thinking",
    heading: ["Three principles that", "drove every decision."],
    items: [
      {
        tag: "Principle 01",
        title: "Remove structure from the input",
        body: "If users had to think about how to format their report, they wouldn't report. The mic button was the entire entry point. No fields. No categories to pick. Just speak. AI handles the rest.",
      },
      {
        tag: "Principle 02",
        title: "Add structure at the output",
        body: "Management needed to see structure — by project, by date, by severity. The AI classification layer did this transformation invisibly. Field worker speaks freely. Manager sees organised data.",
      },
      {
        tag: "Principle 03",
        title: "Earn trust through transparency",
        body: "Every AI-classified entry showed the user what the AI understood. Users could correct it. This gave them ownership over the output and increased trust in the system over time.",
      },
    ],
  },

  decisionLog: {
    label: "Design Journey",
    heading: ["How my thinking", "evolved through iterations."],
    intro:
      "These were the pivotal design decisions — not just what changed, but why the earlier version was wrong and what the research told me.",
    entries: [
      {
        phase: "Recording Entry Point",
        before:
          'A standard form with a "voice note" field embedded alongside text inputs. Mic was one option among many.',
        after:
          "The mic became the entire screen. One large, impossible-to-miss button. No competing elements. Research showed that cognitive load at the entry point was the #1 reason workers abandoned reports mid-way.",
      },
      {
        phase: "Language Selection",
        before:
          "Language auto-detected from device settings. One less step for the user.",
        after:
          "Explicit language picker before recording. Auto-detect failed on multilingual devices and created wrong transcriptions. Workers lost trust in the output. Manual selection took 2 seconds and dramatically improved accuracy and confidence.",
      },
      {
        phase: "AI Classification Display",
        before:
          "AI silently tags entries as Issue or Progress in the background. Clean, invisible experience.",
        after:
          'After recording, the user sees the AI\'s classification with an option to correct it. Usability testing revealed that "invisible AI" felt untrustworthy — users wanted to verify the system understood them. Surfacing the classification and making it editable increased trust scores by 60% in testing.',
      },
      {
        phase: "Photo Annotation",
        before:
          "Photos attached as raw images. No editing tools — keep it lightweight.",
        after:
          "Simple annotation layer (circle, highlight, arrow) added after photo capture. Field test showed that managers couldn't always understand what in a photo was the issue. Adding annotations reduced back-and-forth clarification calls by approximately 35% in pilot testing.",
      },
      {
        phase: "Management Dashboard",
        before:
          "Chronological feed of all voice insights, filterable by date and project.",
        after:
          '"Top 10 Insights" section pinned at the top, with the full feed below, AI-curated. Managers in testing said they had no time to read 100 entries — they wanted the critical ones surfaced automatically. Top 10 became the most-used dashboard element in the first week of launch.',
      },
    ],
  },

  solution: {
    label: "Final Solution",
    heading: ["One product.", "Two distinct experiences."],
    intro:
      "The insight came from recognising that the field user and the management user had fundamentally opposite needs — one needed zero friction to input, the other needed maximum clarity to consume. A single unified interface would serve neither well.",
    layers: [
      {
        badge: "Layer 01 — Field Users",
        title: "Built for 10-second reporting",
        body: "Designed around one hand, one button, zero thinking. The entire flow from opening the app to submitting a report is under 45 seconds.",
        dark: false,
        features: [
          {
            title: "One-tap record",
            body: "Full-screen mic button — nothing to navigate to, nothing to fill in first",
          },
          {
            title: "Native language input",
            body: "Pick your language, speak naturally. AI transcribes and translates automatically",
          },
          {
            title: "AI classification with verification",
            body: "System tags as Issue or Progress — user confirms or corrects in one tap",
          },
          {
            title: "Photo + annotation",
            body: "Capture, circle the problem, submit. Visual context in under 20 seconds",
          },
          {
            title: "Auto-tagging",
            body: "Project, user, timestamp, and location auto-attached. Nothing to fill manually",
          },
        ],
      },
      {
        badge: "Layer 02 — Management",
        title: "Built for pre-meeting briefings",
        body: "Designed for the 3 minutes before a site meeting. Prioritised information, not raw data.",
        dark: true,
        features: [
          {
            title: "Top 10 Company Insights",
            body: "AI-curated critical updates across all projects — the first thing on the dashboard",
          },
          {
            title: "Project × Date × User filters",
            body: "Slice insights any way needed. Daily, weekly, monthly views for trend spotting",
          },
          {
            title: "Colour-coded classification",
            body: "Green for Progress, Red for Issues — scannable in seconds without reading every entry",
          },
          {
            title: "Photo + annotation view",
            body: "Visual evidence with the field worker's own markings — context without a phone call",
          },
          {
            title: "Insight history",
            body: "Full searchable archive of all voice reports, structured and queryable by any dimension",
          },
        ],
      },
    ],
  },

  screenAnnotations: [
    {
      image: "/images/management-screen.jpg",
      alt: "Management dashboard showing project insights, daily/weekly/monthly filters, and AI-classified field entries",
      label: "Management View",
      title: "Project-level insight dashboard",
      body: "Daily/Weekly/Monthly toggle lets managers switch time context instantly. Each team member's entries are grouped — Issues and Progress counts visible without opening a single entry. Voice playback available inline.",
      annotations: [
        {
          type: "decision",
          text: "Grouped by person, not time — managers cared more about who reported what than when exactly",
        },
        {
          type: "decision",
          text: "Horizontal card scroll for insights per person — reduces vertical scroll fatigue on long site lists",
        },
      ],
    },
    {
      image: "/images/field-screen.jpg",
      alt: "Field user view showing AI-classified voice insights with Edit option, progress and issue tags, and Submit button",
      label: "Field User View",
      title: "AI verification screen — the trust layer",
      body: "After recording, AI breaks the voice note into separate classified insights. Green badge = Progress, Red badge = Issue. Each entry has an Edit button — users stay in control. Submit only after they verify.",
      annotations: [
        {
          type: "problem",
          text: "Early testing: silent AI classification felt like a black box — workers didn't trust it",
        },
        {
          type: "fix",
          text: 'Making AI output visible + editable shifted perception from "AI decides" to "AI helps" — trust scores up 60%',
        },
      ],
    },
  ],

  flow: {
    label: "User Flow",
    heading: ["Field user to management.", "Under 60 seconds, end-to-end."],
    steps: [
      {
        label: "Step 01",
        title: "Open & Select Language",
        body: "User opens app, picks native language from dropdown. 2 seconds.",
        accent: false,
      },
      {
        label: "Step 02",
        title: "Record Voice Update",
        body: "Tap the mic. Speak freely. No form, no fields. AI listens in real time.",
        accent: false,
      },
      {
        label: "Step 03 — AI",
        title: "Transcribe & Classify",
        body: "AI translates, summarises, and classifies as Issue or Progress. User verifies.",
        accent: true,
      },
      {
        label: "Step 04",
        title: "Attach Photo + Annotate",
        body: "Optional but encouraged. Capture image, draw on it, submit.",
        accent: false,
      },
      {
        label: "Step 05",
        title: "Manager Sees Insight",
        body: "Entry appears in dashboard — classified, annotated, timestamped. No follow-up needed.",
        accent: false,
      },
    ],
  },

  challenges: {
    label: "Challenges I Solved",
    heading: ["The hard design", "problems."],
    items: [
      {
        question: "How do you design for users who distrust AI?",
        problem:
          'Testing showed workers felt AI was "guessing" their intent. When it got the classification wrong, they stopped trusting the whole system — not just that one entry.',
        solution:
          'Surfaced the AI\'s interpretation immediately after recording. Added a one-tap correction mechanism. This shifted perception from "AI decides" to "AI suggests, I confirm" — and adoption jumped.',
      },
      {
        question: "Multilingual voice input in noisy construction environments",
        problem:
          "Background noise, mixed-language sentences, and heavy accents caused transcription errors. Auto-detected language often failed for bilingual speakers.",
        solution:
          'Explicit language selection pre-recording. Added a "re-record" option if the transcription looked wrong. Designed the verification screen so users could scan the output quickly before submitting.',
      },
      {
        question: "Designing a management view that isn't just a feed",
        problem:
          "Early dashboard prototypes showed everything chronologically. In testing, managers opened it, saw 80 entries, and closed it. Information overload killed the value proposition entirely.",
        solution:
          'Introduced AI curation — the "Top 10 Insights" logic. This required close collaboration with the AI team to define what "important" meant. We weighted by Issue classification, recency, and project priority.',
      },
      {
        question:
          "Getting 40+ year old site supervisors to use a new digital tool",
        problem:
          "Target users included experienced site veterans who were resistant to digital tools and had never used voice-based apps. Onboarding friction was a real adoption risk.",
        solution:
          'Designed the entry flow to mirror how they already behaved — talking. No new mental model required. First-time use was 3 taps. No tutorial screen needed. "I just tapped the big button and it worked" — direct feedback from a 52-year-old site supervisor in pilot testing.',
      },
    ],
  },

  outcomes: {
    label: "Measured Impact",
    heading: ["The numbers after", "we launched."],
    items: [
      {
        num: "82%",
        label: "Field adoption in week 3 — up from 12% with the old form-based system",
      },
      {
        num: "3×",
        label: "Faster reporting — average entry time dropped from 9 min to under 3 min",
      },
      {
        num: "40%",
        label: "Fewer management escalations — issues surfaced proactively before becoming delays",
      },
      {
        num: "6+",
        label: "Languages live at launch — English, Hindi, Tamil, Arabic, Malayalam, Tagalog",
      },
      {
        num: "Top 10",
        label: "Became the most-opened dashboard element — 91% of managers used it daily within week 1",
      },
      {
        num: "60%",
        label: "Improvement in user trust scores after adding AI verification step in usability testing",
      },
    ],
  },

  reflections: {
    label: "Reflections",
    heading: ["What this project", "taught me."],
    items: [
      {
        icon: "⚡",
        title: "AI should feel like a co-worker, not a black box",
        body: "The biggest design lesson: making AI decisions visible and editable wasn't about doubting the AI — it was about making users feel in control. Trust isn't given, it's designed.",
      },
      {
        icon: "🌐",
        title: "Language is a design problem, not a dev problem",
        body: "Treating multilingual support as a technical feature missed the point. It was a UX decision that shaped the entire IA and flow — the language picker had to be before the mic, not buried in settings.",
      },
      {
        icon: "📊",
        title: "Less data, more signal",
        body: "The management dashboard taught me that showing everything is the same as showing nothing. Information design is as much about what you remove as what you show.",
      },
    ],
  },
};

export default aiVoiceInsight;
