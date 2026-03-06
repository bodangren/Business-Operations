// PriceLab Challenge, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "mds5wn3u12hthwufk8jj",
  title: "Integration Dashboard: Scenario Runner + Investor Summary",
  sequence: 6,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Integrate CVP model into a single decision-ready dashboard",
    "Build a simple scenario summary table from prior lesson outputs and connect it with XLOOKUP",
    "Link drivers to charts/tables with structured references",
    "Add validation (IFNA/IFERROR) and audit cues for reliability",
    "Communicate KPI insights with an executive summary"
  ],
  keyConcepts: [
    "Scenario summary table built from prior analysis sheets",
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
    description: "Witness the power of the 'Steering Wheel': Instant scenario switching for investors.",
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Master the mechanics of Dynamic Lookups: Connecting the dashboard to the engine.",
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice the XLOOKUP logic that allows Sarah to answer any 'What-If' instantly.",
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the PriceLab Integration Dashboard: Your final professional steering wheel.",
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Defend your dashboard: Prove your integration logic is investor-ready.",
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on how integrated models build authority and professional trust.",
  }
]
