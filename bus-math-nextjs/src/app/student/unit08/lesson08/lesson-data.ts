// Year‑1 Startup Model, Lesson 8 data - extracted from MCP curriculum database
export const lesson08Data = {
  id: "mds5xnqip0dbejpgqd",
  title: "Examples: Presentation Prep & Mock Panel",
  sequence: 8,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Develop compelling 8-slide VC pitch presentations with clear narrative structure and professional visuals",
    "Practice live Excel model demonstrations showcasing scenario analysis and financial model integrity",
    "Prepare strategic responses to anticipated investor questions about assumptions and risk factors",
    "Incorporate feedback from mock panel sessions to refine presentation quality and impact"
  ],
  keyConcepts: [
    "Venture capital pitch presentation structure and investor communication best practices",
    "Live financial model demonstration techniques and technology integration",
    "Q&A preparation strategies for defending startup assumptions and methodology",
    "Iterative improvement process for high-stakes investor presentations"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Prepare pitch presentations and conduct trial investor presentations"
  ],
  rationale: "To prepare students for their final presentations and to give them an opportunity to practice their communication and presentation skills.",
  status: "Draft"
}

export const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Year‑1 Startup Model",
  sequence: 8
}

// Lesson phases from MCP curriculum database
export const lesson08Phases = [
  {
    id: "phase_hook_8",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Build excitement for sharing work and connecting with authentic audience",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_8",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce key concepts and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_8",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying lesson concepts with scaffolded support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To guide the creation of the pitch deck.
  },
  {
    id: "phase_independent_practice_8",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To create the pitch deck.
  },
  {
    id: "phase_assessment_8",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Present work to authentic audience and receive feedback on technical and communication skills",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - For peer evaluation of the pitch deck.
  },
  {
    id: "phase_closing_8",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on presentation experience and identify key learning achievements",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
