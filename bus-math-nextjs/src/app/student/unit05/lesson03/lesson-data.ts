// PayDay Simulator, Lesson 3 data - extracted from MCP curriculum database
export const lesson03Data = {
  id: "mds5w74hmc97u06iej",
  title: "Application Practice: Building the Prototype Calculator",
  sequence: 3,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Calculate accurate gross-to-net pay for hourly, salaried, and tipped employees",
    "Apply federal and state tax tables to determine withholdings",
    "Build complex IF statements for conditional payroll logic"
  ],
  keyConcepts: [
    "Gross and net pay calculations including all standard withholdings",
    "Federal and state tax table interpretation and application",
    "IF logic for conditional deductions and calculations"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Students build single-employee payroll calculator with guided support"
  ],
  rationale: "To provide a hands-on opportunity to apply payroll calculation skills in a practical tool.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson03Phases = [
  {
    id: "phase_hook_3",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Review previous learning and connect to today's application activities",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_3",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Gross and net pay calculations including all standard withholdings and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Work through structured examples applying Gross and net pay calculations including all standard withholdings with teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building a payroll calculator in a template.
  },
  {
    id: "phase_independent_practice_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Apply Gross and net pay calculations including all standard withholdings independently to solve authentic business problems",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building a payroll calculator in a template.
  },
  {
    id: "phase_assessment_3",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - For peer evaluation of the payroll calculator.
  },
  {
    id: "phase_closing_3",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Consolidate learning and connect to broader unit goals and real-world applications",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
