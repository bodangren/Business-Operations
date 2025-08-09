// Asset & Inventory Tracker, Lesson 4 data - extracted from MCP curriculum database
export const lesson04Data = {
  id: "mds5x99o393t4h40nm3",
  title: "Technical Application",
  sequence: 4,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Implement complex inventory layer calculations using array formulas"
  ],
  keyConcepts: [
    "Array formulas for FIFO and LIFO layer calculations"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Build Excel array formulas for FIFO and LIFO layer calculations"
  ],
  rationale: "To teach students how to use array formulas to perform complex inventory calculations, a valuable skill for any aspiring financial analyst.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Review previous learning and connect to today's application activities",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Array formulas for FIFO and LIFO layer calculations and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Work through structured examples applying Array formulas for FIFO and LIFO layer calculations with teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using array formulas in a template.
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Apply Array formulas for FIFO and LIFO layer calculations independently to solve authentic business problems",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using array formulas in a template.
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
    description: "Consolidate learning and connect to broader unit goals and real-world applications",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
