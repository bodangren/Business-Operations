// Asset & Inventory Tracker, Lesson 9 data - extracted from MCP curriculum database
export const lesson09Data = {
  id: "mds5x9a766tkljhgnco",
  title: "Mock Board Presentation",
  sequence: 9,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Rehearse board presentation skills for strategic financial recommendations",
    "Practice 5-minute pitch delivery with confidence and executive-level communication",
    "Incorporate peer feedback to improve presentation clarity and persuasiveness",
    "Prepare responses to anticipated board questions about financial method implications"
  ],
  keyConcepts: [
    "Executive presentation standards and board communication protocols",
    "Peer review and feedback integration for professional presentation improvement",
    "Time management strategies for concise, impactful business presentations",
    "Q&A preparation and strategic response development for board-level interactions"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Presentation rehearsal with peer feedback and refinement"
  ],
  rationale: "To prepare students for their final presentations and to give them an opportunity to practice their communication and presentation skills.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson09Phases = [
  {
    id: "phase_hook_9",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Build excitement for sharing work and connecting with authentic audience",
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
    description: "Collaborative practice applying lesson concepts with scaffolded support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To practice the presentation.
  },
  {
    id: "phase_independent_practice_9",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To practice the presentation.
  },
  {
    id: "phase_assessment_9",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Present work to authentic audience and receive feedback on technical and communication skills",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - For peer evaluation of the presentation.
  },
  {
    id: "phase_closing_9",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on presentation experience and identify key learning achievements",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
