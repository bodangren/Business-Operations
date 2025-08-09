// PayDay Simulator, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5w754qfq7uvh9icq",
  title: "Model Completion: 10-Employee System & Reconciliation",
  sequence: 7,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Reconcile payroll registers against bank statements to identify timing issues",
    "Apply SUMIFS for sophisticated payroll reporting and analysis",
    "Create visual alerts for reconciliation discrepancies"
  ],
  keyConcepts: [
    "Payroll register reconciliation with bank transactions",
    "SUMIFS functions for multi-criteria payroll analysis",
    "Conditional formatting for reconciliation alerts"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Complete full payroll system with bank reconciliation capabilities"
  ],
  rationale: "To teach students how to reconcile their payroll register with bank statements, a critical step in ensuring accuracy.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Capture attention and establish relevance for model completion: 10-employee system & reconciliation",
    // component: "TrialBalance" (id: 1753927426859mh078t2dd) - To show a trial balance with a reconciliation error.
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Payroll register reconciliation with bank transactions and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Payroll register reconciliation with bank transactions with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice reconciling a payroll register in a template.
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete model construction demonstrating mastery of technical skills",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice reconciling a payroll register in a template.
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
