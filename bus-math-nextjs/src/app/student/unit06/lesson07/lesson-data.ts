// PriceLab Challenge, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5wn3xm9hisij8jqf",
  title: "Production Studio: Completion, QA, and Presentation Readiness",
  sequence: 7,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Complete the pricing model with exact-match lookups and structured references",
    "Implement validation, reconciliation, and clear error handling for reliability",
    "Prepare an investor-ready summary tied to KPI thresholds and scenarios"
  ],
  keyConcepts: [
    "Exact-match lookups with IFNA/IFERROR",
    "Named ranges, Tables, and structured references",
    "Validation rules and reconciliation tie-outs",
    "Sensitivity scenarios and decision-ready summaries"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Production sprint flow: build → validate → visualize → present",
    "Peer audit using a Definition of Done checklist"
  ],
  rationale: "Students finish and harden their Unit 06 PriceLab model with professional QA, then prepare concise, decision-ready outputs for investors.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Capture attention and establish relevance for data tables for sensitivity analysis",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - To show a scenario where multiple variables are changing.
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Data Tables (one- and two-variable) for what-if analysis and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Data Tables (one- and two-variable) for what-if analysis with scaffolded support",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - To practice using data tables.
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Data Tables (one- and two-variable) for what-if analysis independently with minimal teacher support",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - To practice using data tables.
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
