// Content data for AI Face Registration Flow case study.
// Same shape as aiVoiceInsight.js, plus two optional new section types
// this case study introduces: `experiments` and `humanImpact`.
// Both are optional — CaseStudy.jsx only renders them if present.

const aiFaceRegistration = {
  slug: "ai-face-registration-flow",
  meta: {
    tag: "Case Study — 02",
    title: ["AI Face", "Registration", "Flow"],
    accentWord: "Registration",
    bgWord: "FACE",
    role: "Senior Product Designer",
    platform: "iOS · Android",
    timeline: "Jan 2025 · 6 Weeks",
    product: "Zaper — Workforce SaaS",
    heroImage: "/images/face-hero-mockup.jpg",
    heroImageAlt:
      "AI Face Registration Flow — App mockup showing the guided face verification capture screen on light and dark themes",
  },

  impactStrip: [
    { num: "20%", label: "Increase in successful face registrations after launch" },
    { num: "3", label: "Distinct design approaches tested before landing on the final flow" },
    { num: "30+", label: "In-depth interviews with field workers across active sites" },
    { num: "↓", label: '"Scan not working" support tickets dropped noticeably post-launch' },
  ],

  problem: {
    label: "The Real Problem",
    heading: ["A biometric scan that feels", "like surveillance, not service."],
    bodyLead:
      "Zaper needed an automated attendance system built on daily face check-ins. But asking a construction worker to scan their face for a company app carries baggage — it can feel invasive, especially without context.",
    bodySecondary:
      "The real design challenge wasn't computer vision accuracy. It was emotional: how do you make someone feel guided by a tool, not monitored by one? Get that wrong, and adoption fails before the tech even matters.",
    quote: {
      text: "I focused on three filters for every decision: Keep it simple. Respect the user. Focus on essentials.",
      cite: "My working principle throughout this project",
    },
    statCards: [
      {
        num: "30+",
        title: "In-depth interviews",
        body: "One-on-one conversations with field workers conducted during their actual workdays — not in a conference room.",
      },
      {
        num: "1",
        title: "Full-day survey session",
        body: "Spent a day on-site observing real work-tracking behaviour, not just asking people to describe it after the fact.",
      },
      {
        num: "3",
        title: "Core anxieties identified",
        body: 'Fear of being "watched," confusion about what the scan was for, and worry about failing the scan in front of coworkers.',
      },
    ],
  },

  research: {
    label: "Design Thinking",
    heading: ["Three ideas that", "shaped every pixel."],
    insights: [
      {
        title: "Clarity first",
        body: "People should always know what's happening and what's expected of them. No ambiguity about why the scan exists or what happens to the data.",
      },
      {
        title: "Trust through transparency",
        body: "A simple, plain-English privacy note builds more confidence than a long legal policy nobody reads. Brevity itself became a trust signal.",
      },
      {
        title: "Guided confidence",
        body: "Subtle, real-time feedback reassures users they're doing it right — without ever feeling like they're being graded or judged by a machine.",
      },
    ],
  },

  // NEW SECTION TYPE — experiments & trade-offs, with embedded screen comparisons
  experiments: {
    label: "Experiments & Trade-offs",
    heading: ["I tried three approaches", "before this one felt right."],
    intro:
      "Rather than committing to the first idea, I prototyped three fundamentally different flows and tested each with real field workers before deciding.",
    items: [
      {
        winner: false,
        title: "One long instruction screen",
        body: "A single screen explaining the entire process upfront, then capture. Workers skipped reading it entirely, which caused mistakes and repeated failed attempts.",
      },
      {
        winner: false,
        title: "Photo-booth style capture",
        body: "Multiple simultaneous angle captures, like a photo booth strip. Accurate results, but needed extra physical space and time — not practical for a busy site.",
      },
      {
        winner: true,
        title: "Step-by-step guided flow with live feedback",
        body: "Breaking registration into small guided steps with real-time visual cues. This finally felt right — low cognitive load, high accuracy, no instructions to read.",
      },
    ],
    screenComparisons: [
      {
        image: "/images/face-v53-light.jpg",
        alt: "Light theme version of face verification screen showing progress bar, step label, and guided instruction text above the capture frame",
        label: "Version 53 — Light Theme",
        title: "Instruction-forward, progress-led",
        body: 'Step label and percentage shown upfront. Instruction text sits above the capture frame so it\'s read before the camera engages, not during. A full-width "Take Photo" CTA keeps the action explicit rather than automatic.',
        annotations: [
          {
            type: "decision",
            text: "Progress bar placed above the frame, not below — workers see how far along they are before they even position their face",
          },
        ],
      },
      {
        image: "/images/face-v51-dark.jpg",
        alt: "Dark theme version of face verification screen styled like a native camera viewfinder, with corner brackets and a circular capture shutter button",
        label: "Version 51 — Camera Theme",
        title: "Native camera mental model",
        body: "Explored a darker, viewfinder-style theme with corner brackets and a circular shutter button — mimicking the native iOS camera app that every user already knows how to use intuitively.",
        annotations: [
          {
            type: "tradeoff",
            text: "Felt more familiar, but the darker UI reduced visibility of the progress indicator — clarity took priority, so the lighter theme was carried forward",
          },
        ],
      },
    ],
  },

  decisionLog: {
    label: "Design Journey",
    heading: ["Turning the winning direction", "into a real flow."],
    intro:
      "Once the step-by-step approach won, these were the specific decisions that shaped the final experience.",
    entries: [
      {
        phase: "Face Alignment Guidance",
        before:
          'Text instructions like "Position your face within the frame" with no visual aid.',
        after:
          "A soft face-outline overlay with directional arrows and a subtle green highlight when aligned correctly. Users could feel correct positioning without reading anything.",
      },
      {
        phase: "Feedback Tone",
        before:
          'Technical error states: "Face detection failed" / "Alignment error code 04".',
        after:
          'Plain-English, conversational prompts: "Good lighting!" or "Face not centered." Avoided sudden warnings or cold technical language entirely — the tone needed to feel like guidance, not judgment.',
      },
      {
        phase: "Progress Visibility",
        before:
          "No progress indication — users didn't know how many steps remained or if they were close to done.",
        after:
          "Added a clear progress indicator (0% → 60% → 80% → 100%) across the straight, slight-right, and slight-left captures. This single addition reduced abandonment mid-flow significantly in testing.",
      },
      {
        phase: "Flexibility to Exit",
        before:
          "Registration was mandatory and blocking — users couldn't proceed into the app without completing it immediately.",
        after:
          'Added a "Do Later" option during onboarding, with a clear path to complete registration later from the profile screen. Removing forced urgency actually increased voluntary completion rates.',
      },
      {
        phase: "Visual Noise",
        before:
          "Branded UI with colour accents, icons, and decorative elements around the capture frame.",
        after:
          "Stripped to a neutral palette and minimalist layout, keeping all visual attention on the user's face and the live feedback. Every element not essential to the task was removed.",
      },
    ],
  },

  solution: {
    label: "Final Solution",
    heading: ["A guided, multi-step", "face registration flow."],
    intro:
      "The final flow walks users through three head positions — straight, slight right, slight left — using visual cues instead of instructions, with full flexibility to pause and resume.",
    layers: [
      {
        badge: "During Registration",
        title: "Guided capture, zero reading required",
        body: "Every step communicates through visuals first, words second — designed for workers who don't have time to read instructions mid-task.",
        dark: false,
        features: [
          {
            title: "Face-outline overlay",
            body: "Soft visual guide shows exactly where to position the face — no text needed",
          },
          {
            title: "Real-time alignment feedback",
            body: "Subtle green highlight confirms correct positioning the instant it's achieved",
          },
          {
            title: "Plain-English prompts",
            body: '"Look straight," "Turn slightly left" — conversational, never technical',
          },
          {
            title: "Progress indicator",
            body: "Visible 0% → 100% progress across all three head positions",
          },
          {
            title: "Skip / Do Later option",
            body: "Flexible onboarding — registration never blocks app access",
          },
        ],
      },
      {
        badge: "After Registration",
        title: "Clear outcomes, easy recovery",
        body: "Success or incomplete — either way, users always know exactly where they stand and what to do next.",
        dark: true,
        features: [
          {
            title: "Success confirmation screen",
            body: "Clear, calm visual confirmation — no ambiguity about completion",
          },
          {
            title: "Incomplete state recovery",
            body: "Friendly nudge to complete remaining steps, never framed as a failure",
          },
          {
            title: "Resume from profile",
            body: "If skipped during onboarding, registration is one tap away from the profile screen",
          },
          {
            title: '"Redo" from settings',
            body: "Users can re-register anytime — lighting changes, appearance changes, no friction to update",
          },
          {
            title: "Calm error states",
            body: "Red feedback states use the same conversational tone as success — never alarming",
          },
        ],
      },
    ],
  },

  // No screenAnnotations for this case study (mockups already shown in experiments section)
  screenAnnotations: [],

  // NEW SECTION TYPE — emotional quote pair
  humanImpact: {
    label: "The Human Impact",
    heading: [
      "What changed wasn't just completion rate —",
      "it was the emotion behind it.",
    ],
    intro:
      "In testing, users smiled when they saw live feedback for the first time. The biometric moment shifted from tense to cooperative.",
    quotes: [
      {
        text: "It feels like the app is helping me, not watching me.",
        cite: "Field worker, usability testing session",
      },
      {
        text: "Now I know exactly what's happening.",
        cite: "Field worker, usability testing session",
      },
    ],
  },

  flow: {
    label: "Registration Flow",
    heading: ["From first launch to", "a confident \"done.\""],
    steps: [
      {
        label: "Step 01",
        title: "Guided Intro",
        body: "Short, plain-English explanation of what's about to happen and why.",
        accent: false,
      },
      {
        label: "Step 02",
        title: "Look Straight",
        body: "Face-outline overlay guides positioning. Green highlight confirms alignment.",
        accent: false,
      },
      {
        label: "Step 03 — Progress",
        title: "Slight Right / Left",
        body: "Directional arrows guide head turns. Progress indicator climbs 60% → 80%.",
        accent: true,
      },
      {
        label: "Step 04",
        title: "Success or Retry",
        body: "Calm confirmation screen, or a friendly retry prompt — never a hard failure.",
        accent: false,
      },
      {
        label: "Step 05",
        title: "Daily Check-in Ready",
        body: "Face registered — daily photo check-in/check-out now active for attendance.",
        accent: false,
      },
    ],
  },

  challenges: {
    label: "Challenges I Solved",
    heading: ["The hard design", "problems."],
    items: [
      {
        question: "Designing for a moment people are naturally suspicious of",
        problem:
          'Biometric capture inherently feels invasive. Workers worried about surveillance, data misuse, or simply "looking bad" on camera in front of coworkers.',
        solution:
          "Replaced clinical language with conversational guidance, added a short plain-English privacy note instead of legal text, and made every interaction feel like the app was assisting rather than judging.",
      },
      {
        question: "Workers skipping instructions entirely",
        problem:
          "The first prototype relied on a single instruction screen. Almost nobody read it fully, leading directly to failed scans and frustration.",
        solution:
          "Moved all guidance into the live capture screen itself — visual overlays and short contextual prompts replaced the need to read anything upfront.",
      },
      {
        question: "Balancing accuracy with practicality on a job site",
        problem:
          "The photo-booth style approach captured more angles accurately, but required physical space and time that didn't fit real construction site conditions.",
        solution:
          "Narrowed capture to three essential angles — straight, slight right, slight left — enough for reliable recognition without demanding a studio-like setup.",
      },
      {
        question: "Designing for failure without it feeling like failure",
        problem:
          "Early error states used technical, alarming language that made users feel like they'd done something wrong, increasing anxiety around retries.",
        solution:
          'Rewrote every error and incomplete state in calm, conversational language — "Face not centered" instead of "Detection failed" — and made retrying feel like a normal part of the flow, not a penalty.',
      },
    ],
  },

  outcomes: {
    label: "Measured Impact",
    heading: ["The numbers after", "we launched."],
    items: [
      {
        num: "20%",
        label: "Increase in successful face registrations after launch",
      },
      {
        num: "↓",
        label: 'Noticeable drop in "scan not working" support requests',
      },
      {
        num: "3",
        label: "Head positions captured per registration — straight, slight right, slight left",
      },
      {
        num: "3",
        label: "Full design approaches prototyped and tested before final direction",
      },
      {
        num: "30+",
        label: "In-depth interviews informing every major design decision",
      },
      {
        num: "0",
        label: "Mandatory blocking steps — registration always remained skippable and flexible",
      },
    ],
  },

  reflections: {
    label: "Reflections",
    heading: ["What this project", "taught me."],
    items: [
      {
        icon: "🪞",
        title: "Trust is a design outcome, not a feature",
        body: "Trust isn't something you bolt on with a privacy policy link. It's built pixel by pixel, through tone, pacing, and how a system responds when someone makes a mistake.",
      },
      {
        icon: "🎯",
        title: "Micro-decisions shape perception",
        body: 'The difference between "Detection failed" and "Face not centered" seems small. In practice, it\'s the difference between a user feeling judged and a user feeling guided.',
      },
      {
        icon: "♿",
        title: "Accessibility deserves earlier thought",
        body: "Biometric systems need real consideration for users with facial coverings or challenging lighting conditions — this is a design responsibility, not an edge case to defer.",
      },
    ],
  },
};

export default aiFaceRegistration;
