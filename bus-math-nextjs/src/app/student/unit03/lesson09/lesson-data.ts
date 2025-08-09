// Three-Statement Storyboard, Lesson 9 data - extracted from MCP curriculum database
export const lesson09Data = {
  id: "mds5viaeflqmww41z5v",
  title: "Mock Panel & Revisions: Expert Critique Session",
  sequence: 9,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Receive and incorporate professional feedback from industry experts on financial models",
    "Present integrated financial statements to authentic audience with confidence and clarity",
    "Respond to challenging questions about financial assumptions and methodology",
    "Revise financial models based on professional critique and industry standards"
  ],
  keyConcepts: [
    "Professional presentation standards for financial information",
    "Industry expectations for financial statement accuracy and transparency",
    "Incorporating stakeholder feedback into iterative model improvement",
    "Real-world application of GAAP principles in business communication"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Expert critique from local CPA on workbook and presentation with revision time"
  ],
  rationale: "To provide students with authentic, real-world feedback on their work.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson09Phases = [
  {
    id: "phase_hook_9",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Set expectations for constructive peer feedback and improvement mindset",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_9",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce key concepts and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_9",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice giving and receiving constructive feedback using established criteria",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - To guide the peer review process.
  },
  {
    id: "phase_independent_practice_9",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To create the presentation.
  },
  {
    id: "phase_assessment_9",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Practice presentation skills and receive peer feedback on content and delivery",
    // component: "FeedbackCollector" (id: mdso449cltlcqozjia) - To collect feedback from the audience.
  },
  {
    id: "phase_closing_9",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
