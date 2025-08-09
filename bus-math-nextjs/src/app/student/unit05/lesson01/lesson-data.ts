// PayDay Simulator, Lesson 1 data - extracted from MCP curriculum database
export const lesson01Data = {
  id: "mds5w745dbcfj0t26jj",
  title: "Launch & Explore: The Payroll Cash Crunch",
  sequence: 1,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Accurate payroll calculations protect both employees and business owners from legal and financial risks",
    "Cash flow timing is critical - payroll commitments must align with revenue cycles",
    "Systematic reconciliation processes prevent costly errors and maintain compliance",
    "Professional payroll systems build employee trust and business credibility"
  ],
  keyConcepts: [
    "Gross and net pay calculations including all standard withholdings",
    "Federal and state tax table interpretation and application",
    "Employer tax contributions and liability calculations",
    "Payroll register reconciliation with bank transactions",
    "Cash flow timing analysis for payroll obligations"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Analyze realistic payroll timing crisis through interactive scenario"
  ],
  rationale: "To establish the real-world context and high stakes of payroll management.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson01Phases = [
  {
    id: "phase_hook_1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to The Payroll Cash Crunch",
    // component: "CashFlowChallenge" (id: 1753927444725skvt2zipj) - To simulate a cash flow crisis.
  },
  {
    id: "phase_introduction_1",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce the unit challenge and establish learning goals and success criteria",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the introductory text.
  },
  {
    id: "phase_guided_practice_1",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Gross and net pay calculations including all standard withholdings with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating payroll in a template.
  },
  {
    id: "phase_independent_practice_1",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Gross and net pay calculations including all standard withholdings independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating payroll in a template.
  },
  {
    id: "phase_assessment_1",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_1",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Preview upcoming learning sequence and build anticipation for next steps",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
