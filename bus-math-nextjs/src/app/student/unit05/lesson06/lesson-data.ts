// PayDay Simulator, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "mds5w750z2mfpi7ehte",
  title: "New Skill Focus: XLOOKUP & Multi-Employee Systems",
  sequence: 6,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Use XLOOKUP to retrieve employee rates and tax information dynamically",
    "Create professional bilingual pay stubs for diverse workforces"
  ],
  keyConcepts: [
    "XLOOKUP function for employee data and tax table retrieval",
    "Data validation for bilingual pay stub formatting"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Master XLOOKUP for employee data management and payroll register creation"
  ],
  rationale: "To introduce students to the powerful XLOOKUP function and to teach them how to create a multi-employee payroll register.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Present real-world problem requiring the skills to be learned in this lesson",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To show a payroll register with missing information.
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce XLOOKUP function for employee data and tax table retrieval and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying XLOOKUP function for employee data and tax table retrieval with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using XLOOKUP in a template.
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice XLOOKUP function for employee data and tax table retrieval independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using XLOOKUP in a template.
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
