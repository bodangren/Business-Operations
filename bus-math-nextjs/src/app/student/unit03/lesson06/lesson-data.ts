// Three-Statement Storyboard, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "mds5via91pq5u8xbug5",
  title: "New Skill Focus: Balance Sheet Linking & Retained Earnings",
  sequence: 6,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Link Balance Sheet accounts with proper Retained Earnings reconciliation",
    "Use INDEX/MATCH functions for dynamic cross-sheet data retrieval"
  ],
  keyConcepts: [
    "Balance Sheet account linking and Retained Earnings reconciliation",
    "Cross-sheet linking with INDEX/MATCH and named ranges"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on Balance Sheet construction with cross-sheet linking"
  ],
  rationale: "To teach students the critical skill of linking financial statements, a key concept in financial modeling.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Present real-world problem requiring the skills to be learned in this lesson",
    // component: "BalanceSheetSimple" (id: 1753927706188pvbgh0paz) - To show a simple balance sheet with an obvious error.
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Systematic introduction of Balance Sheet account linking and Retained Earnings reconciliation with step-by-step demonstrations",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Balance Sheet account linking and Retained Earnings reconciliation with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building a balance sheet in a template.
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Balance Sheet account linking and Retained Earnings reconciliation independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building a balance sheet in a template.
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
