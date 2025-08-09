// PayDay Simulator, Lesson 2 data - extracted from MCP curriculum database
export const lesson02Data = {
  id: "mds5w74cwao6n27wmz",
  title: "Skill Introduction: Gross to Net Calculations",
  sequence: 2,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Calculate accurate gross-to-net pay for hourly, salaried, and tipped employees",
    "Apply federal and state tax tables to determine withholdings"
  ],
  keyConcepts: [
    "Gross and net pay calculations including all standard withholdings",
    "Federal and state tax table interpretation and application"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Master fundamental payroll mathematics with realistic scenarios"
  ],
  rationale: "To build the foundational mathematical skills required for accurate payroll processing.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson02Phases = [
  {
    id: "phase_hook_2",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to Gross to Net Calculations",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To show a simple payroll calculation.
  },
  {
    id: "phase_introduction_2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Direct instruction on Gross and net pay calculations including all standard withholdings with clear examples and business context",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_2",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Gross and net pay calculations including all standard withholdings with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating payroll in a template.
  },
  {
    id: "phase_independent_practice_2",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Gross and net pay calculations including all standard withholdings independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating payroll in a template.
  },
  {
    id: "phase_assessment_2",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_2",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Preview upcoming learning sequence and build anticipation for next steps",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
