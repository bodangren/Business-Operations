// PayDay Simulator, Lesson 8 data - extracted from MCP curriculum database
export const lesson08Data = {
  id: "mds5w7584llzr6a7rl7",
  title: "Presentation Prep: Tutorial Planning",
  sequence: 8,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Design comprehensive tutorial structure for explaining payroll systems to business audiences",
    "Plan effective screencast demonstrations highlighting key features and edge cases",
    "Organize complex technical content into logical, accessible teaching sequences",
    "Prepare professional documentation and scripts for public YouTube publication"
  ],
  keyConcepts: [
    "Instructional design principles for technical business tutorials",
    "Screencast planning and storyboard development for complex Excel systems",
    "Audience analysis for entrepreneurial and small business users",
    "Professional presentation standards for educational content creation"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Plan comprehensive tutorial explaining payroll system for business audience"
  ],
  rationale: "To prepare students for their final project, which is to create a tutorial for a business audience.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
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
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To guide the creation of the tutorial storyboard.
  },
  {
    id: "phase_independent_practice_8",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To create the tutorial storyboard.
  },
  {
    id: "phase_assessment_8",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Present work to authentic audience and receive feedback on technical and communication skills",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - For peer evaluation of the tutorial plan.
  },
  {
    id: "phase_closing_8",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on presentation experience and identify key learning achievements",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
