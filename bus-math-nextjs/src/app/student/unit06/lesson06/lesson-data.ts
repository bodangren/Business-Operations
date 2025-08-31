// PriceLab Challenge, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "mds5wn3u12hthwufk8jj",
  title: "Integration Dashboard: Scenario Runner + Investor Summary",
  sequence: 6,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Integrate CVP model into a single decision-ready dashboard",
    "Build scenario switching (Base/Stretch/Downside) using named ranges or XLOOKUP",
    "Link drivers to charts/tables with structured references",
    "Add validation (IFNA/IFERROR) and audit cues for reliability",
    "Communicate KPI insights with an executive summary"
  ],
  keyConcepts: [
    "Scenario Manager or driver table with named ranges",
    "Exact-match lookups (XLOOKUP / INDEX-MATCH) for scenario switching",
    "Structured references and chart data binding",
    "Validation rules: stale dates, out-of-range rates, missing names",
    "Investor-ready communication and auditability"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Textbook-first explanations with integrated dashboard build",
    "Formative checks on integration pitfalls and best practices",
    "Scenario-driven analysis leading to clear recommendations"
  ],
  rationale: "Students convert their CVP work into a decision-ready system with scenario toggles, linked visuals, validations, and an investor-focused summary.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Live demo: one dashboard with Base/Stretch/Downside and instant decision cues",
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "From model to decision: named driver table, XLOOKUP switching, KPI selection",
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s integration dashboard with validation and linked charts",
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Integration mastery: scenario toggles, live visuals, and exec summary text",
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Integration & dashboard mastery check with technical and judgment questions",
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis: reliability, decision readiness, and preview of next lesson",
  }
]
