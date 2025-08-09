// Three-Statement Storyboard, Lesson 4 data - extracted from MCP curriculum database
export const lesson04Data = {
  id: "mds5via5psu7rqxs1h",
  title: "Feedback & Iteration: Income Statement Gallery Walk",
  sequence: 4,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Evaluate Income Statement accuracy and presentation using professional criteria",
    "Provide constructive, specific feedback to improve financial statement quality",
    "Identify and correct common errors in revenue recognition and expense classification",
    "Apply industry standards for Income Statement formatting and disclosure requirements"
  ],
  keyConcepts: [
    "Income Statement structure and GAAP compliance requirements",
    "Revenue recognition principles and matching concept application",
    "Expense classification (operating vs. non-operating)",
    "Professional peer review standards and constructive feedback protocols"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Gallery walk critique of Income Statements with teacher and peer feedback"
  ],
  rationale: "To provide students with constructive feedback from multiple sources and to encourage them to learn from each other.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Set expectations for constructive peer feedback and improvement mindset",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce key concepts and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice giving and receiving constructive feedback using established criteria",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - To guide the peer review process.
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Engage in peer review process providing specific, actionable feedback",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - To guide the peer review process.
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
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
