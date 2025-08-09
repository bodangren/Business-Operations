// Data-Driven Café, Lesson 2 data - extracted from MCP curriculum database
export const lesson02Data = {
  id: "mds5vtztsax7pn96bi",
  title: "Skill Introduction: Data Cleaning Fundamentals",
  sequence: 2,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Clean and prepare raw POS data for statistical analysis"
  ],
  keyConcepts: [
    "Data cleaning: Text-to-Columns, TRIM, duplicate removal, advanced filters"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Master essential data preparation techniques using café POS data"
  ],
  rationale: "To equip students with the fundamental skills of data cleaning, which is a critical first step in any data analysis project.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases from MCP curriculum database
export const lesson02Phases = [
  {
    id: "phase_hook_2",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to Data Cleaning Fundamentals",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To show a messy, uncleaned data set.
  },
  {
    id: "phase_introduction_2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Direct instruction on Data cleaning: Text-to-Columns, TRIM, duplicate removal, advanced filters with clear examples and business context",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_2",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Data cleaning: Text-to-Columns, TRIM, duplicate removal, advanced filters with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice data cleaning in a template.
  },
  {
    id: "phase_independent_practice_2",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Data cleaning: Text-to-Columns, TRIM, duplicate removal, advanced filters independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice data cleaning in a template.
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
