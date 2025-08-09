// PayDay Simulator, Lesson 4 data - extracted from MCP curriculum database
export const lesson04Data = {
  id: "mds5w74rp4icpe60td",
  title: "Feedback & Iteration: Calculator Refinement",
  sequence: 4,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Implement data validation for error-free payroll entry",
    "Create visual alerts for reconciliation discrepancies"
  ],
  keyConcepts: [
    "Data validation for bilingual pay stub formatting",
    "Conditional formatting for reconciliation alerts"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Refine calculators based on testing and add error-checking features"
  ],
  rationale: "To teach students the importance of error-checking and to introduce them to more advanced Excel features.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Set expectations for constructive peer feedback and improvement mindset",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Data validation for bilingual pay stub formatting and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice giving and receiving constructive feedback using established criteria",
    // component: "ErrorCheckingSystem" (id: mdsjne6632yk82ynnc5) - To guide the creation of data validation rules.
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Data validation for bilingual pay stub formatting independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice adding data validation to the payroll calculator.
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
