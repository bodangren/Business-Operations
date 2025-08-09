// Month-End Wizard, Lesson 4 data - extracted from MCP curriculum database
export const lesson04Data = {
  id: "mds5v4u3rd68v5ozg1",
  title: "Peer Critique & Revision: Gallery Walk Feedback",
  sequence: 4,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Apply structured peer review criteria to evaluate adjusting entry accuracy and completeness",
    "Provide constructive feedback on month-end procedures and GAAP compliance",
    "Identify opportunities for improvement in financial closing processes",
    "Demonstrate professional communication skills through gallery walk format"
  ],
  keyConcepts: [
    "Peer review protocols and constructive feedback techniques",
    "Quality criteria for adjusting entries and month-end procedures",
    "Gallery walk methodology for collaborative learning",
    "Professional communication standards in business contexts"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Structured peer review and revision of adjusting entry work"
  ],
  rationale: "To foster collaborative learning and improve the quality of student work through peer feedback.",
  status: "Draft"
}

export const unit02Data = {
  id: "mdrhkhm79v8qau43696",
  title: "Month-End Wizard",
  sequence: 2
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
