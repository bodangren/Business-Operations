// Three-Statement Storyboard, Lesson 3 data - extracted from MCP curriculum database
export const lesson03Data = {
  id: "mds5via1qgutbwmfa3s",
  title: "Application Practice: Income Statement Independent Build",
  sequence: 3,
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
    "Students independently build Income Statement with peer debugging support"
  ],
  rationale: "To provide students with hands-on practice and to develop their problem-solving and collaboration skills.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
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
    description: "Introduce Income Statement construction from journal entry data and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Work through structured examples applying Income Statement construction from journal entry data with teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building an income statement in a template.
  },
  {
    id: "phase_independent_practice_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Apply Income Statement construction from journal entry data independently to solve authentic business problems",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building an income statement in a template.
  },
  {
    id: "phase_assessment_3",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - For peer evaluation of the income statement.
  },
  {
    id: "phase_closing_3",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Consolidate learning and connect to broader unit goals and real-world applications",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
