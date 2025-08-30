// Year‑1 Startup Model, Lesson 5 — Advanced Excel Automation for Unit 08 (Integrated Model)
export const lesson05Data = {
  id: "u08_l05_advanced_sensitivity_automation",
  title: "Advanced Sensitivity & Scenario Automation",
  sequence: 5,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Build one- and two-variable Data Tables that drive integrated model outputs",
    "Implement dynamic scenario switching with XLOOKUP and structured references",
    "Add robust validation for stale dates, missing IDs, and out-of-range growth",
    "Document formulas with IFERROR/IFNA and named ranges for auditability",
    "Summarize investor-facing insights from sensitivity results"
  ],
  keyConcepts: [
    "Data Tables (one-/two-variable) and sensitivity design",
    "Scenario driver tables with XLOOKUP/IFNA",
    "Structured references (Table[Column]) and named ranges",
    "Validation checks for professional reliability",
    "Executive summaries and decision framing"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Direct instruction on advanced automation",
    "Guided build with validation rules",
    "Independent mastery challenges with edge-case data"
  ],
  rationale: "Students deepen Unit 08 by automating scenario and sensitivity analysis with professional validation so the three-statement model withstands investor Q&A.",
  status: "Ready"
}

export const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Year‑1 Startup Model",
  sequence: 8
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Stress test Sarah’s integrated model: fragile vs. robust sensitivity automation",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - To show a sensitivity analysis table.
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Professional-grade automation: Data Tables, XLOOKUP, structured refs, and standards",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s scenario runner with validation and safeguards",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - To practice building sensitivity tables.
  },
  {
    id: "phase_independent_practice_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Advanced mastery challenges using edge-case dataset and self-checklist",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - To practice building sensitivity tables.
  },
  {
    id: "phase_assessment_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Professional mastery assessment: technical knowledge + applied judgment",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis and CAP reflection; preview integration and dashboards in Lesson 06",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
