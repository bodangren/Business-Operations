// Data-Driven Café, Lesson 9 data - extracted from MCP curriculum database
export const lesson09Data = {
  id: "mds5vu0j0lk9gw4jkfkj",
  title: "Mock Panel & Revision: Presentation Rehearsal",
  sequence: 9,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Rehearse statistical analysis presentations with focus on clarity and persuasiveness",
    "Incorporate peer feedback to improve data visualization and business recommendations",
    "Practice delivering 90-second elevator pitches with confidence and precision",
    "Refine infographic designs based on audience feedback and professional standards"
  ],
  keyConcepts: [
    "Effective presentation techniques for statistical data and business insights",
    "Peer review protocols for constructive feedback on analytical work",
    "Time management strategies for concise business communication",
    "Iterative improvement process for professional presentation development"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Practice presentations with peer feedback and final refinements"
  ],
  rationale: "To prepare students for their final presentations and to give them an opportunity to receive feedback from their peers.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
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
