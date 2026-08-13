// Content data for Driver Daily Route Timeline case study.
// Introduces three new optional section types:
//   - research.badgeLegend  (visual language / colour system)
//   - keyFeatures           (2×3 feature grid)
//   - screenDeepDive        (two-col + detail-row annotated screens)
// All optional — existing case studies without them render fine.

const driverDailyRouteTimeline = {
  slug: "driver-daily-route-timeline",
  meta: {
    tag: "Case Study — 03",
    title: ["Driver", "Daily Route", "Timeline"],
    accentWord: "Daily Route",
    bgWord: "ROUTE",
    role: "Senior Product Designer",
    platform: "iOS · Android",
    timeline: "Mar 2024 · 7 Weeks",
    product: "YellowZap — Home Services",
    heroImage: "/images/driver-hero-mockup.jpg",
    heroImageAlt:
      "Driver Daily Route Timeline — Three-phone mockup showing the timeline view, staff check-in modal, and individual staff detail screen",
  },

  impactStrip: [
    { num: "↓", label: "Significant drop in coordination calls between drivers and dispatchers" },
    { num: "1", label: "Single tap to understand the full day — every job, every staff status" },
    { num: "↑", label: "Driver retention improved — reported stress levels dropped noticeably" },
    { num: "0", label: "Paperwork required to fix a check-in mistake — one-tap Undo handles it" },
  ],

  problem: {
    label: "The Real Problem",
    heading: ["Nobody knew who was", "actually in the vehicle."],
    bodyLead:
      "On the surface, the ask was simple: 'show routes in an app.' But the real problem ran deeper. Drivers didn't know who was actually in the vehicle, when the next job started, or how long they had before they needed to leave. Dispatchers were equally blind.",
    bodySecondary:
      "The result was a constant loop of phone calls, WhatsApp messages, missed pickups, and idle time. Drivers were managing routes across three different channels simultaneously — while driving. That's not a productivity problem. That's a safety problem.",
    quote: {
      text: "The deeper problem was uncertainty and friction — drivers didn't know who was actually in the vehicle, when the next job starts, or how long until they must leave.",
      cite: "Problem framing from field observation sessions",
    },
    statCards: [
      {
        num: "3",
        title: "Channels drivers monitored simultaneously",
        body: "Phone calls, WhatsApp groups, and a basic job list app — none of them showing a shared, real-time view of who's in the car.",
      },
      {
        num: "2",
        title: "Core user types with conflicting needs",
        body: "Drivers needed glanceable, one-tap simplicity. Dispatchers needed accurate status visibility and route verification. One product had to serve both.",
      },
      {
        num: "4",
        title: "Critical friction points identified",
        body: "Missed pickups, wrong staff check-ins, no buffer time visibility, and no way to undo a mistake without calling dispatch.",
      },
    ],
  },

  research: {
    label: "Design Thinking",
    heading: ["Three principles for an interface", "used while driving."],
    insights: [
      {
        title: "Glanceability",
        body: "Show the whole day in one view. A driver pulling up to a stop needs to understand their next three hours in under 2 seconds — before they open the car door.",
      },
      {
        title: "Low friction",
        body: "Large touch targets and one-tap actions only. No multi-step confirmations, no navigation to a second screen to complete a core task. If it takes more than one tap, it's too slow.",
      },
      {
        title: "Recoverability",
        body: "Mistakes happen on the road. Every action — check-in, drop-off, pick-up — must be undoable in one tap without calling dispatch, filling a form, or losing any data.",
      },
    ],
    // NEW: visual language badge legend
    badgeLegend: {
      label: "Visual Language",
      heading: "A colour system drivers read without thinking.",
      body: "Every screen element had to be interpretable at a glance. I built a four-state badge system that drivers learn in the first 60 seconds and never have to re-learn.",
      badges: [
        { dotClass: "badgeDotGreen",  label: "Checked-in — staff is in the vehicle" },
        { dotClass: "badgeDotYellow", label: "Pending — not yet confirmed" },
        { dotClass: "badgeDotGray",   label: "Not in car — absent or unassigned" },
        { dotClass: "badgeDotRed",    label: "Declined — staff rejected the job" },
      ],
    },
  },

  principles: null, // principles folded into research section for this case study

  decisionLog: {
    label: "Design Journey",
    heading: ["The pivotal decisions", "that shaped the final product."],
    intro:
      "These weren't just visual choices — each one came from a real finding in field observation or usability testing that forced a rethink.",
    entries: [
      {
        phase: "Information Architecture",
        before:
          "A list view showing jobs sorted by time, similar to a calendar app. Clean, familiar, standard.",
        after:
          "A timeline-centred view where each job is a large card with location map, time window, staff list, and two primary CTA buttons visible without scrolling. Field testing showed that list views forced drivers to mentally reconstruct the day — the timeline made the whole day instantly readable as a sequence.",
      },
      {
        phase: "Staff Visibility",
        before:
          "Staff status shown only inside individual job cards — tap the job to see who's in the vehicle.",
        after:
          "A persistent 'Staffs in my car (N)' button always visible on the main timeline, opening a roster modal with Check-in, Undo, Drop-off, and Pick-up actions. Research showed the most common driver anxiety was not knowing their current passenger count — making it persistent removed that anxiety entirely.",
      },
      {
        phase: "Check-in Action",
        before:
          "Inline check-in within the job card, small tap target, adjacent to other buttons.",
        after:
          "Large full-width green Check-in button as the primary CTA. Red Undo button immediately accessible. Button size was driven by the use context — drivers are often in motion, glancing at the screen for under 3 seconds. Small targets caused mis-taps that required calling dispatch to correct.",
      },
      {
        phase: "Time Buffer Visibility",
        before:
          "No time buffer display — drivers could see job start times but had to mentally calculate travel time themselves.",
        after:
          "Live countdown between jobs: '30 mins to start next job.' This single element reduced late departures significantly in testing — drivers stopped relying on memory and gut instinct for departure timing and trusted the visible countdown instead.",
      },
      {
        phase: "Mistake Recovery",
        before:
          "Wrong check-ins required contacting dispatch to manually correct — treated as an exception, not part of the main flow.",
        after:
          "One-tap Undo built into every action as a first-class feature, not an afterthought. Drivers in testing described the Undo button as 'the most important thing in the app' — knowing they could correct a mistake instantly made them more confident using the app at all.",
      },
      {
        phase: "Contact Actions",
        before:
          "Staff contact details shown as plain text — drivers would copy-paste numbers manually to call or message.",
        after:
          "Quick-contact buttons (Call, WhatsApp) embedded directly in the staff modal, one tap from the timeline. This eliminated the copy-paste friction that was causing drivers to use the wrong channels and miss time-sensitive communication during pickups.",
      },
    ],
  },

  solution: {
    label: "Final Solution",
    heading: ["A timeline that gives drivers", "and dispatchers one shared truth."],
    intro:
      "The shipped concept is a timeline-centred mobile app where each job is a large card showing the job window, location map, and staff list with real-time status badges — all visible without a single tap.",
    layers: [
      {
        badge: "Driver View",
        title: "The full day in one scroll",
        body: "Designed for quick glances between stops. Every piece of information a driver needs is surfaced at the card level — nothing buried in sub-screens.",
        dark: false,
        features: [
          {
            title: "Timeline cards",
            body: "Location, time window, and two primary CTAs (Pick Up / Drop Off) visible on every card",
          },
          {
            title: "Persistent staff counter",
            body: "'Staffs in my car (N)' always visible — opens roster modal with all quick actions",
          },
          {
            title: "Live countdowns",
            body: "'30 mins to start next job' — visual buffer cues prevent late departures",
          },
          {
            title: "One-tap Undo",
            body: "Every check-in, drop-off, and pick-up is instantly reversible — no dispatch call needed",
          },
          {
            title: "Quick contact",
            body: "Call or WhatsApp any staff member in one tap from the staff modal",
          },
        ],
      },
      {
        badge: "Dispatcher / Manager View",
        title: "Full route visibility, no follow-up calls",
        body: "Dispatchers see real-time staff status and route progress without needing to contact the driver directly.",
        dark: true,
        features: [
          {
            title: "Status badges",
            body: "Green / yellow / gray / red — status of every staff member visible at a glance across all jobs",
          },
          {
            title: "Kilometer tracking",
            body: "Start-km input and history lets managers verify routes and approve payments accurately",
          },
          {
            title: "History log",
            body: "Full route history with timestamps — used for route verification and driver payment",
          },
          {
            title: "Vehicle tab",
            body: "Dedicated view for vehicle-level status, separate from job-level timeline",
          },
          {
            title: "Accurate staff presence",
            body: "No more guessing who's in which vehicle — check-in states visible in real time",
          },
        ],
      },
    ],
  },

  screenAnnotations: [], // handled by screenDeepDive instead

  // NEW: key features grid
  keyFeatures: {
    label: "Key Features",
    heading: ["Every feature earned", "its place through testing."],
    intro:
      "Nothing in the final design was added speculatively. Each feature maps to a specific friction point discovered in field observation or usability testing.",
    items: [
      {
        icon: "🗂️",
        title: "Timeline Cards",
        body: "Large job cards with location, time window, and two primary CTAs — PickUp and DropOff — visible without any interaction. Outperformed dense list views in every test.",
      },
      {
        icon: "👥",
        title: "Staff Modal",
        body: "Persistent 'Staffs in my car' counter opens a roster showing every assigned staff member with quick-contact (Call / WhatsApp) and status actions.",
      },
      {
        icon: "🟢",
        title: "Status Badges",
        body: "Four-state colour system: green (checked-in), yellow (pending), gray (not in car), red (declined). Drivers and dispatchers read the same visual language.",
      },
      {
        icon: "⏱️",
        title: "Countdowns & Buffers",
        body: "Live countdown between jobs tells drivers exactly when to leave. Removes the mental calculation that caused late departures and cascading delays.",
      },
      {
        icon: "↩️",
        title: "One-Tap Undo",
        body: "Every action is immediately reversible. Drivers cited Undo as 'the most important thing' in testing — it gave them confidence to act fast without fear of error.",
      },
      {
        icon: "📍",
        title: "Kilometer History",
        body: "Start-km input and route history gives managers what they need for route verification and driver payment — without a separate reporting system.",
      },
    ],
  },

  // NEW: screen deep dive with two-col + detail row
  screenDeepDive: {
    label: "Screen Deep-Dive",
    heading: ["Three screens.", "Every design decision visible."],
    intro:
      "These are the three core screens of the product. Each one maps directly to a design decision made in response to a specific field finding.",
    twoCol: [
      {
        image: "/images/driver-checkin-modal.jpg",
        alt: "Timeline view showing Morning Call Time card with staff check-in status list — Maya Nandini and Sarita Kumari checked in, others showing Check-in buttons. Persistent Staffs in my car (5) button visible at bottom.",
        label: "Timeline View — Staff Check-in Modal",
        title: "The whole roster, one screen",
        body: "Tapping 'Staffs in my car' opens this view — all assigned staff, their current check-in state, and large green Check-in buttons. Starting kilometer and Morning Call Time visible at the top so drivers confirm both before the day begins.",
        annotations: [
          {
            type: "decision",
            text: "Two states side by side (Checked-in outline vs solid green Check-in) — drivers instantly see who still needs action without scanning the whole list",
          },
          {
            type: "decision",
            text: "Persistent 'Staffs in my car (5)' pill stays visible even inside the modal — passenger count never leaves the driver's awareness",
          },
        ],
      },
      {
        image: "/images/driver-timeline-card.jpg",
        alt: "Timeline card view showing Drop Off jobs for International City and Sport City — each card has location name, full address, map thumbnail, staff names with Drop Off buttons, and persistent Staffs in my car button at bottom.",
        label: "Timeline Card View",
        title: "The full day as ordered cards",
        body: "Each job is a large card — location name, time window, inline map thumbnail, and per-staff Drop Off buttons. No tapping into a sub-screen for any of this. The entire route is readable in one scroll.",
        annotations: [
          {
            type: "decision",
            text: "Map thumbnail inline on each card — drivers recognise the area visually before they read the address, saving 2–3 seconds per stop",
          },
          {
            type: "tradeoff",
            text: "Cards are tall, limiting how many fit on screen — accepted this trade-off deliberately; better to read 2 jobs clearly than squint at 6 cramped ones",
          },
        ],
      },
    ],
    detailScreen: {
      image: "/images/driver-staff-detail.png",
      alt: "Individual staff detail screen for Nympha Rivera — showing Checked-In status badge, Coming Up label with Drop Off action, job date/time, Palm Jumeirah location address, map view, and two bottom actions: Check-Out Staff and Undo Check-In.",
      label: "Staff Detail Screen",
      title: "Every key action for one staff member, one screen",
      body: "Tapping a staff member opens their detail view — current status (Checked-In), upcoming job with location map, and two bottom actions: Check-Out Staff and Undo 'Check-In.' This screen was the most debated in design review.",
      annotations: [
        {
          type: "decision",
          text: "'Coming Up' + 'Drop Off' shown prominently above the job details — drivers know what action is coming next without reading anything",
        },
        {
          type: "decision",
          text: "Undo 'Check-In' kept as a bottom action — not hidden in settings. Drivers said knowing it was there made them more confident tapping Check-in in the first place",
        },
        {
          type: "problem",
          text: "Early version showed both Check-Out and Undo as equal-weight buttons — usability testing showed drivers mis-tapped Undo when they meant Check-Out. Final version makes Check-Out the clear primary CTA",
        },
      ],
    },
  },

  humanImpact: {
    label: "The Human Impact",
    heading: [
      "Drivers went from juggling 3 apps",
      "to tapping one timeline.",
    ],
    intro:
      "The biggest shift wasn't operational — it was emotional. Drivers reported feeling calmer and more in control. Staff felt less anxious because check-in and drop-off states were visible and correctable.",
    quotes: [
      {
        text: "I tap one thing and I know the whole day. Before, I was on the phone constantly.",
        cite: "Driver, post-launch feedback session",
      },
      {
        text: "The Undo button. That's the most important thing. Now I'm not scared to tap the wrong thing.",
        cite: "Driver, usability testing session",
      },
    ],
  },

  flow: {
    label: "User Flow",
    heading: ["A driver's morning,", "from first tap to final drop-off."],
    steps: [
      {
        label: "Step 01",
        title: "Open Timeline",
        body: "Full day visible instantly — all jobs as ordered cards with times, locations, staff.",
        accent: false,
      },
      {
        label: "Step 02",
        title: "Check Staff In",
        body: "Tap 'Staffs in my car' → staff modal → big green Check-in. Done in 2 taps.",
        accent: false,
      },
      {
        label: "Step 03 — Live",
        title: "Monitor Countdown",
        body: "Live buffer countdown tells driver exactly when to depart for next job.",
        accent: true,
      },
      {
        label: "Step 04",
        title: "Drop Off & Undo",
        body: "Tap Drop Off on arrival. Made a mistake? One-tap Undo — no call to dispatch.",
        accent: false,
      },
      {
        label: "Step 05",
        title: "Log Kilometers",
        body: "End-of-day km input goes into history — managers verify routes and payments.",
        accent: false,
      },
    ],
  },

  challenges: {
    label: "Challenges I Solved",
    heading: ["The hard design", "problems."],
    items: [
      {
        question: "Designing for a user who can't look at their phone for more than 3 seconds",
        problem:
          "Drivers are in a moving vehicle, managing passengers, watching traffic. A complex UI isn't just bad UX — it's a safety risk.",
        solution:
          "Every core action reduced to one tap. Every status readable in one glance. Large touch targets throughout. Countdowns visible at card level — no drilling in required. The design's success criterion was: does it work at a red light?",
      },
      {
        question: "Two users (driver + dispatcher) with opposing information needs",
        problem:
          "Drivers needed simplicity and speed. Dispatchers needed detailed, accurate status visibility. A single product had to serve both without compromising either.",
        solution:
          "Designed the driver-facing timeline as the primary interface, with status badges that automatically surface the data dispatchers need as a byproduct — no separate dispatcher dashboard required for core monitoring.",
      },
      {
        question: "Making mistake recovery a feature, not an exception",
        problem:
          "Check-in errors were treated as edge cases — fixed by calling dispatch. This created anxiety and slowed drivers down, since they were afraid to tap the wrong action.",
        solution:
          "Elevated Undo to a first-class feature visible immediately after every action. Designed the system to treat errors as expected, not exceptional — which paradoxically reduced errors by removing fear of tapping.",
      },
      {
        question: "Replacing a multi-channel communication habit with a single interface",
        problem:
          "Drivers had been managing routes across calls, WhatsApp, and a basic job list for months. Getting them to trust one app meant the app had to visibly do more than all three channels combined.",
        solution:
          "Embedded Call and WhatsApp quick-contact directly in the staff modal — the app didn't replace other channels by removing them, it replaced them by making them faster inside the timeline. Drivers adopted it because it was strictly better, not because they were forced to switch.",
      },
    ],
  },

  outcomes: {
    label: "Measured Impact",
    heading: ["Results after", "launch."],
    items: [
      {
        num: "↓",
        label: "Coordination calls — dispatchers stopped chasing drivers for status updates",
      },
      {
        num: "↑",
        label: "Route utilization — faster handovers and less idle time between jobs",
      },
      {
        num: "↑",
        label: "Driver retention — lower stress and higher satisfaction post-launch",
      },
      {
        num: "1",
        label: "Tap to see full-day status — entire route visible without scrolling or tapping",
      },
      {
        num: "0",
        label: "Dispatch calls needed to fix a check-in error — Undo handles it instantly",
      },
      {
        num: "4",
        label: "Status states (checked-in, pending, not in car, declined) — all readable at a glance",
      },
    ],
  },

  reflections: {
    label: "Reflections",
    heading: ["What this project", "taught me."],
    items: [
      {
        icon: "🚗",
        title: "Context of use changes everything",
        body: "Designing for a moving vehicle isn't just 'make it mobile-friendly.' It requires a complete rethink of interaction model, touch target size, information density, and what 'good UX' means when a user has 3 seconds.",
      },
      {
        icon: "↩️",
        title: "Undo is underrated as a design principle",
        body: "Recoverability isn't a nice-to-have — it's what gives users the confidence to act at all. When drivers knew they could undo, they stopped double-checking everything and started trusting the interface.",
      },
      {
        icon: "📡",
        title: "A shared source of truth is itself a product feature",
        body: "The most impactful thing the timeline did wasn't the countdown or the Undo button — it was giving drivers and dispatchers the same view of reality. Coordination calls dropped because both sides finally agreed on what was happening.",
      },
    ],
  },
};

export default driverDailyRouteTimeline;
