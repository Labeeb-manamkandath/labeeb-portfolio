// Content data for Zaper.ai Website Design case study.
// Introduces four new optional section types:
//   - designProcess       (5-phase process strip)
//   - research.insightCards (6-card user expectations grid)
//   - uniqueContribution  (dark feature callout block)
//   - infoArchitecture    (menu / IA grid)
// All optional — existing case studies without them render fine.

const zaperAiWebsiteDesign = {
  slug: "zaper-ai-website-design",
  meta: {
    tag: "Case Study — 04",
    title: ["Website", "Design", "Zaper.ai"],
    accentWord: "Design",
    bgWord: "ZAPER",
    role: "Senior Product Designer",
    platform: "Web — Desktop & Mobile",
    timeline: "Jul 2024 · 6 Weeks",
    product: "Zaper.ai — AI Workforce SaaS",
    heroImage: null, // add when mockup image available
    heroImageAlt: "Zaper.ai website design — full desktop and mobile views",
  },

  impactStrip: [
    { num: "40%", label: "Increase in average session duration after launch" },
    { num: "↑",   label: "Demo sign-ups increased — quality leads generated directly from the site" },
    { num: "1",   label: "Unique voice interaction demo — built to make AI tangible, not theoretical" },
    { num: "5",   label: "Full UX phases completed — Empathise, Define, Ideate, Design, Test" },
  ],

  problem: {
    label: "The Real Problem",
    heading: ["AI that nobody could explain —", "including the website."],
    bodyLead:
      "Zaper.ai had a powerful AI-driven workforce management platform — but a website that failed to communicate it. The construction industry users it was built for found the messaging too technical, the features too abstract, and the call to action too buried.",
    bodySecondary:
      "The challenge wasn't branding. It was clarity. How do you take genuinely complex AI capabilities — voice recognition, automated reporting, biometric attendance — and turn them into a website that a site supervisor or facilities manager immediately understands and wants to try?",
    quote: {
      text: "The challenge was to simplify complex features, cater to diverse users with varying needs, and drive demo sign-ups — without dumbing down what the product actually does.",
      cite: "Problem definition, stakeholder briefing",
    },
    statCards: [
      {
        num: "3",
        title: "Industry sectors researched",
        body: "Construction, MEP (Mechanical, Electrical, Plumbing), and Facility Management — each with different vocabulary, pain points, and digital comfort levels.",
      },
      {
        num: "2",
        title: "Conversion goals designed for",
        body: "Demo sign-ups for enterprise prospects and general enquiries for SME clients — each needed a different journey, both served from one site.",
      },
      {
        num: "5",
        title: "UX phases completed end-to-end",
        body: "Empathise → Define → Ideate → Design → Test. Full research-backed design process, not a visual-first solution.",
      },
    ],
  },

  research: {
    label: "User Research & Insights",
    heading: ["What users actually expected", "from a B2B AI website."],
    insights: [
      {
        title: "User interviews",
        body: "Conducted with construction, MEP, and facility management professionals to identify real pain points and mental models before any design work began.",
      },
      {
        title: "Competitive analysis",
        body: "Reviewed similar AI workforce platforms to identify visual and structural gaps — areas where Zaper could differentiate in clarity and conversion design.",
      },
      {
        title: "Usability testing",
        body: "Low-fidelity wireframes tested with real users to validate navigation, layout clarity, and CTA placements before committing to visual design.",
      },
    ],
    // Optional insight cards grid (Zaper-specific)
    insightCards: {
      label: "Website Expectations",
      heading: ["What users actually expected", "from a B2B AI website."],
      intro:
        "Five user expectations consistently emerged across all three industry sectors through interviews and usability testing.",
      items: [
        {
          icon: "💬",
          title: "Clear Value Proposition",
          body: "Users expected a concise, jargon-free explanation of what Zaper AI does in the first 5 seconds of landing. Technical language without context caused immediate drop-off.",
        },
        {
          icon: "📋",
          title: "Use Cases & Case Studies",
          body: "Real-world examples of AI applications and their measured impact were highly valued — users couldn't assess relevance without seeing the product in a context similar to their own.",
        },
        {
          icon: "🎮",
          title: "Interactive Demos",
          body: "Users strongly preferred interactive product demos over static screenshots. Experiencing the product — even briefly — dramatically increased trust and time on page.",
        },
        {
          icon: "🧭",
          title: "Easy Navigation",
          body: "Intuitive layout with fast access to features, pricing, and contact. On-site professionals often browsed on mobile between tasks — navigation had to work in 30-second visits.",
        },
        {
          icon: "📱",
          title: "Responsive Design",
          body: "Mobile-first access was non-negotiable. Construction site professionals discovered the site on their phones — a desktop-only experience would have lost the majority of the target audience.",
        },
        {
          icon: "🔒",
          title: "Trust & Transparency",
          body: "Enterprise buyers needed to see data security commitments, company credibility, and team information before they'd consider booking a demo or sharing contact details.",
        },
      ],
    },
  },

  // NEW: design process 5-phase strip
  designProcess: {
    label: "Design Process",
    heading: ["Five phases.", "Research first, visuals last."],
    intro:
      "I ran the full double-diamond design process — not because it's standard, but because building a marketing website for a product most users don't yet understand requires evidence, not assumptions.",
    phases: [
      {
        num: "Phase 01",
        title: "Empathise",
        body: "User research and user interviews with construction, MEP, and facility management professionals to identify real pain points and mental models.",
        active: false,
      },
      {
        num: "Phase 02",
        title: "Define",
        body: "User personas and goal statements. Identified three distinct visitor types — each needing a different message but landing on the same site.",
        active: false,
      },
      {
        num: "Phase 03",
        title: "Ideate",
        body: "Brainstorming, card sorting, and user flow mapping. Explored how to structure the site so each visitor type finds their way to the right CTA.",
        active: false,
      },
      {
        num: "Phase 04",
        title: "Design",
        body: "Paper wireframes → visual design → interactive prototype. Every section validated against the original user research findings before moving forward.",
        active: true,
      },
      {
        num: "Phase 05",
        title: "Test",
        body: "Usability testing on low-fidelity wireframes, survey insights, and iterative improvements before final handoff.",
        active: false,
      },
    ],
  },

  principles: null, // not used — replaced by designProcess for this case study

  experiments: null, // not applicable to this case study

  decisionLog: {
    label: "Design Journey",
    heading: ["The decisions that turned", "a complex product into a clear website."],
    intro:
      "Each of these pivots came directly from user research or usability testing — not preference, not trend-following.",
    entries: [
      {
        phase: "Hero Messaging",
        before:
          "Feature-led hero: 'AI-Powered Attendance, Workforce Management, and Voice Reporting' — a list of capabilities.",
        after:
          "'Deep Vertical AI Agent for Construction' — a single positioning statement that speaks to industry identity, not feature inventory. Research showed construction professionals responded to specificity about their industry, not generic AI language. The headline became the clearest differentiator from competitors.",
      },
      {
        phase: "Product Demo Approach",
        before:
          "Embedded product screenshots with caption text explaining features — standard B2B SaaS approach.",
        after:
          "Interactive voice demo that lets visitors actually experience the core AI capability. Usability testing showed screenshots produced low recall — users couldn't articulate what the product did even after reading the captions. Live interaction produced immediate understanding and dramatically increased demo sign-up intent.",
      },
      {
        phase: "Navigation Architecture",
        before:
          "A full navigation menu with dropdowns for Features, Pricing, Industries, Resources, Company — maximising content access.",
        after:
          "Streamlined to five core sections with a persistent 'Book Demo' CTA always visible. Card sorting revealed users found deep navigation confusing — they wanted to reach product information in one click, not two. Simplifying the nav increased CTA visibility and reduced bounce from the top of the page.",
      },
      {
        phase: "User Journey Design",
        before:
          "One generic page flow for all visitors — same content sequence for everyone.",
        after:
          "Goal-driven flows designed for three distinct visitor types: enterprise decision-makers (directed towards demo booking), operations teams (directed toward feature detail), and technical evaluators (directed toward integrations and security). Each arrived at their relevant CTA naturally through content hierarchy, not forced redirection.",
      },
      {
        phase: "Mobile Experience",
        before:
          "Desktop-first design adapted for mobile — a standard responsive breakpoint approach.",
        after:
          "Mobile-first design from the first wireframe. Research confirmed that construction site professionals discovered and browsed the site primarily on phones — often between tasks with limited time. Every section had to work as a standalone 30-second experience before being extended for desktop.",
      },
    ],
  },

  solution: {
    label: "Final Solution",
    heading: ["A business-ready website that", "converts curiosity into demos."],
    intro:
      "The final site balances simplicity, performance, and persuasion — designed so that any visitor type understands the product and knows exactly what to do next, within 60 seconds of landing.",
    layers: [
      {
        badge: "For Visitors",
        title: "Clarity at every scroll depth",
        body: "Designed so that a visitor who only sees the hero still understands the product — and a visitor who reads every section arrives at the CTA already convinced.",
        dark: false,
        features: [
          {
            title: "Clear value messaging",
            body: "'Deep Vertical AI Agent for Construction' — industry-specific positioning, not generic AI language",
          },
          {
            title: "Interactive voice demo",
            body: "Live AI capability demonstration below the hero — users experience the product before reading about it",
          },
          {
            title: "Interactive walkthroughs",
            body: "Embedded demos and animations let users explore AI capabilities at their own pace",
          },
          {
            title: "Streamlined navigation",
            body: "Five-section menu — Home, Safety & Security, About, Blogs, Book Demo — always accessible",
          },
          {
            title: "Mobile-first design",
            body: "Every section built for 30-second phone browsing before being extended for desktop",
          },
        ],
      },
      {
        badge: "For the Business",
        title: "Lead generation built into the experience",
        body: "Every design decision traces back to one business goal: qualified demo sign-ups. The site doesn't just inform — it converts.",
        dark: true,
        features: [
          {
            title: "Persistent Book Demo CTA",
            body: "Always visible in navigation — zero friction between decision and action",
          },
          {
            title: "Optimised user journeys",
            body: "Goal-driven flows for enterprise buyers, operations teams, and technical evaluators — each pathway leads to the right CTA",
          },
          {
            title: "Trust signals throughout",
            body: "Safety & Security section, About Company, and team content address enterprise buyer concerns before they surface",
          },
          {
            title: "Blog & thought leadership",
            body: "Regular content builds authority and drives returning organic traffic from industry searches",
          },
          {
            title: "40% session duration increase",
            body: "The live demo became the highest-engagement element — users stayed to explore, not just read",
          },
        ],
      },
    ],
  },

  screenAnnotations: [],
  screenDeepDive: null,
  keyFeatures: null,

  // NEW: unique contribution dark block
  uniqueContribution: {
    label: "Unique Contribution",
    heading: [
      "The Voice Interaction Demo —",
      "turning abstract AI into something you can feel.",
    ],
    intro:
      "The standard B2B SaaS approach is to describe the product. I made users experience it. Right below the hero section, I introduced a live voice interaction demo that let any visitor feel Zaper's core capability firsthand — no account, no onboarding, no friction.",
    feature: {
      tag: "Unique Feature",
      title: "Voice Interaction Demo",
      body: "A live AI-powered microphone experience embedded directly in the marketing website — turning abstract capability claims into a 30-second personal demonstration. This became the highest-engagement element on the page.",
      items: [
        {
          title: "Click to Record",
          body: "Microphone icon opens a voice recording interface — no sign-up, no setup, no barrier to entry",
        },
        {
          title: "AI Bullet Summary",
          body: "User speaks freely; AI instantly converts the input into a structured bullet-point summary — demonstrating the core product value in real time",
        },
        {
          title: "Retry / Cancel",
          body: "Users can re-record as many times as they like — encouraging exploration and extending time on page significantly",
        },
      ],
    },
  },

  // NEW: info architecture / menu grid
  infoArchitecture: {
    label: "Information Architecture",
    heading: ["Five sections. Each one", "earns its place in the nav."],
    intro:
      "Card sorting revealed that users wanted fast access to three things: what the product does, whether the company is trustworthy, and how to try it. The final five-section structure maps directly to those three needs.",
    sections: [
      {
        label: "01 — Home Page",
        title: "The full picture, fast",
        body: "Overview of Zaper.ai's AI-driven workforce management capabilities. Designed to communicate the core value proposition within the first viewport — before any scrolling.",
        dark: false,
      },
      {
        label: "02 — Safety & Security",
        title: "The enterprise trust layer",
        body: "Data protection measures, compliance standards, and transparency about how workforce data is handled. Positioned early — research showed enterprise buyers checked this before any other section.",
        dark: false,
      },
      {
        label: "03 — About Company",
        title: "The human behind the AI",
        body: "Vision, mission, and team story. Addresses the credibility gap that all AI-first companies face — buyers need to trust the team, not just the technology.",
        dark: false,
      },
      {
        label: "04 — Blogs",
        title: "Thought leadership at scale",
        body: "Industry insights, product updates, and AI workforce articles. Builds organic search authority and gives returning visitors a reason to come back between evaluation stages.",
        dark: false,
      },
      {
        label: "05 — Book Demo",
        title: "The single conversion goal",
        body: "A persistent call-to-action throughout the site. Clicking it from anywhere leads to a streamlined demo-booking flow — no forms that ask for information the sales team doesn't need.",
        dark: false,
      },
      {
        label: "Design Principle",
        title: "Every section serves either trust or conversion",
        body: "If a section didn't build credibility or drive a demo sign-up, it didn't make the final navigation. This principle cut the initial 8-section structure down to five without losing any critical content.",
        dark: true,
      },
    ],
  },

  humanImpact: null,

  flow: {
    label: "Optimised User Journeys",
    heading: ["Three visitor types.", "One site. Three clear paths."],
    steps: [
      {
        label: "Land",
        title: "Hero Section",
        body: "Industry-specific headline sets context in under 3 seconds. All visitor types start here.",
        accent: false,
      },
      {
        label: "Experience",
        title: "Voice Demo",
        body: "Visitor interacts with live AI demo — converts abstract claims into personal experience.",
        accent: true,
      },
      {
        label: "Explore",
        title: "Features & Use Cases",
        body: "Relevant content for each visitor type — operations, enterprise, or technical evaluator.",
        accent: false,
      },
      {
        label: "Trust",
        title: "Security & About",
        body: "Enterprise buyers check credentials. Team and compliance content addresses objections.",
        accent: false,
      },
      {
        label: "Convert",
        title: "Book Demo CTA",
        body: "Persistent CTA available from any point. No re-navigation needed to take action.",
        accent: false,
      },
    ],
  },

  challenges: {
    label: "Challenges I Solved",
    heading: ["The hard design", "problems."],
    items: [
      {
        question: "Making AI feel real to people who've never used it",
        problem:
          "Construction industry professionals are pragmatic, not tech-forward. Describing AI capabilities in text produced low comprehension and zero emotional connection to the product.",
        solution:
          "The live voice interaction demo — visitors experience the AI summarising their own words in real time. This turned a conceptual claim into a personal proof point in under 30 seconds, producing the highest demo sign-up intent of any element on the page.",
      },
      {
        question: "One website serving three different decision-makers",
        problem:
          "Enterprise buyers, operations managers, and technical evaluators all landed on the same homepage — but each needed different information to move forward. Generic messaging served none of them well.",
        solution:
          "Designed goal-driven content flows mapped to each visitor type. Content hierarchy — not separate pages — guided each persona toward their relevant CTA naturally. User testing validated that all three types found their path without confusion.",
      },
      {
        question: "Building trust for an AI product in a traditionally offline industry",
        problem:
          "Construction is one of the least digitised industries. AI-powered workforce tools face a trust gap that tech-first industries don't — users are sceptical, not curious.",
        solution:
          "Embedded trust signals throughout — not just in a dedicated 'Security' section. Social proof, team transparency, compliance language, and industry-specific use cases appeared across every scroll depth, so credibility built progressively rather than being asked for upfront.",
      },
      {
        question: "Driving demo conversions without hard-sell tactics",
        problem:
          "B2B SaaS websites often rely on aggressive pop-ups, gated content, and forced form fills. Research showed construction professionals actively avoided these — and closed the tab.",
        solution:
          "Made the demo CTA persistent and low-friction — always visible, never intrusive. Removed all gated content barriers before the booking form. Users who reached the Book Demo page had already self-qualified through the content journey, resulting in higher-quality leads with less friction.",
      },
    ],
  },

  outcomes: {
    label: "Measured Impact",
    heading: ["Results after", "launch."],
    items: [
      { num: "40%",  label: "Increase in average session duration — driven by the live voice demo" },
      { num: "↑",    label: "Demo sign-ups — quality leads generated directly from the website experience" },
      { num: "1",    label: "Live AI interaction embedded in a marketing site — a first for the product" },
      { num: "3",    label: "Distinct visitor journeys designed — enterprise, operations, and technical evaluators" },
      { num: "5",    label: "Navigation sections — down from an initial 8, without losing any critical content" },
      { num: "↓",    label: "Bounce rate reduced — users stayed longer and explored deeper after the demo interaction" },
    ],
  },

  reflections: {
    label: "Reflections",
    heading: ["What this project", "taught me."],
    items: [
      {
        icon: "🎙️",
        title: "Showing beats telling — especially for AI products",
        body: "The voice demo generated more comprehension in 30 seconds than any copy I could have written. For complex or unfamiliar technology, the most powerful page element is one that eliminates the need to explain.",
      },
      {
        icon: "🏗️",
        title: "Industry specificity is a design decision",
        body: "'Deep Vertical AI Agent for Construction' outperformed every generic AI headline we tested. Knowing your audience well enough to name their industry in the hero is not a marketing decision — it's a UX decision that affects every conversion metric downstream.",
      },
      {
        icon: "🎯",
        title: "Less navigation means more conversion",
        body: "Reducing from 8 sections to 5 felt like losing content. It was actually gaining clarity. The best navigation is the one that makes every decision obvious — not the one that covers every possible option.",
      },
    ],
  },
};

export default zaperAiWebsiteDesign;
