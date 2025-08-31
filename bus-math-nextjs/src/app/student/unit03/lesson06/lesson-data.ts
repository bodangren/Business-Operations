// Three-Statement Storyboard, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "mds5via91pq5u8xbug5",
  title: "Integration & Dashboard: Decision-Ready Three‑Statement Model",
  sequence: 6,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Build scenario toggles (Base/Stretch/Downside) that safely switch model drivers",
    "Link outputs to charts and KPI cards using structured references and named ranges",
    "Add validation for exact-match lookups, stale dates, and out-of-range rates",
    "Compose an investor-ready one‑page summary with clear decision cues"
  ],
  keyConcepts: [
    "Scenario Manager or driver‑table with named ranges",
    "XLOOKUP/INDEX‑MATCH with IFNA/IFERROR for exact‑match switching",
    "Chart/link stability with Tables and expanding ranges",
    "KPI selection: margin, runway, current ratio, cash coverage",
    "Executive summaries that frame decisions"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Textbook-first explanation, then integrated practice",
    "Iterative build with validation and professional standards"
  ],
  rationale: "Students convert their three‑statement links into a decision‑ready dashboard with scenarios, live visuals, and a concise executive summary that builds investor trust.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Sarah demos an investor dashboard request: one page, scenario toggles, clear decision cues",
    // component: "ComprehensionCheck" – integration pitfalls and dashboard best practices
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "From model to decision: driver tables, exact‑match switching, named ranges, and KPI linkage",
    // component: "FillInTheBlank" – vocabulary on scenarios, slicers/filters, structured refs, IFNA/IFERROR
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s scenario controls, link to outputs and visuals, add validation flags",
    // component: "ErrorCheckingSystem" – business rule checks; charts/FinancialDashboard for visuals
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Integration mastery using dataset with Base/Stretch/Downside scenarios and KPI targets",
    // feature: download integration dataset; build live‑updating dashboard and exec summary
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Integration & dashboard mastery check: switching logic, stable links, KPI judgment",
    // component: "ComprehensionCheck" – 8–10 questions
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize wins and preview Lesson 07 stakeholder review / worked examples",
    // component: "ReflectionJournal" – CAP prompts
  }
]
