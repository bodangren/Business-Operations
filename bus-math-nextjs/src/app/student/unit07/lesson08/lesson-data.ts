// Asset & Inventory Tracker, Lesson 8 data - extracted from MCP curriculum database
export const lesson08Data = {
  id: "mds5x9a4tb2lsrj7nu",
  title: "Advisory Brief Draft",
  sequence: 8,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Evaluate method selection based on business strategy",
    "Present financial recommendations to business decision-makers"
  ],
  keyConcepts: [
    "Strategic business writing principles for executive communication",
    "Data-driven recommendation development and evidence-based argumentation",
    "Financial method selection criteria and business impact analysis",
    "Professional advisory brief structure and persuasive writing techniques"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Develop strategic recommendations based on quantitative analysis"
  ],
  rationale: "To provide students with an opportunity to apply their analytical skills to a real-world business problem and to develop a persuasive, data-driven recommendation.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson08Phases = [
  {
    id: "phase_hook_8",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Capture attention and establish relevance for advisory brief draft",
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
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To guide the creation of the advisory brief.
  },
  {
    id: "phase_independent_practice_8",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To create the advisory brief.
  },
  {
    id: "phase_assessment_8",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - For peer evaluation of the advisory brief.
  },
  {
    id: "phase_closing_8",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
