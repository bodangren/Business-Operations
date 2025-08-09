// Three-Statement Storyboard, Lesson 2 data - extracted from MCP curriculum database
export const lesson02Data = {
  id: "mds5via0a28uttjod1",
  title: "Skill Introduction: Income Statement Construction",
  sequence: 2,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Construct accurate Income Statement from trial balance data",
    "Use INDEX/MATCH functions for dynamic cross-sheet data retrieval"
  ],
  keyConcepts: [
    "Income Statement construction from journal entry data",
    "Cross-sheet linking with INDEX/MATCH and named ranges"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on building Income Statement from trial balance data"
  ],
  rationale: "To equip students with the technical skills needed to build dynamic financial statements.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson02Phases = [
  {
    id: "phase_hook_2",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to Income Statement Construction",
    // component: "IncomeStatementDetailed" (id: 1753927745716dmlfuxuab) - To show a detailed, professional income statement.
  },
  {
    id: "phase_introduction_2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Direct instruction on Income Statement construction from journal entry data with clear examples and business context",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_2",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Step-by-step construction of models with guided coaching and error correction",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building an income statement in a template.
  },
  {
    id: "phase_independent_practice_2",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Income Statement construction from journal entry data independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building an income statement in a template.
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
