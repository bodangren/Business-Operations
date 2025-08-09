// PriceLab Challenge, Lesson 4 data - extracted from MCP curriculum database
export const lesson04Data = {
  id: "mds5wn3okuxm9d9w5ip",
  title: "Peer Critique & Model Refinement",
  sequence: 4,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Evaluate peer CVP models using professional criteria for accuracy and business relevance",
    "Provide specific, constructive feedback to improve pricing model quality and insights",
    "Incorporate peer feedback to refine break-even calculations and sensitivity analysis",
    "Identify and correct common errors in Cost-Volume-Profit model construction"
  ],
  keyConcepts: [
    "Professional peer review standards for financial modeling and pricing analysis",
    "CVP model validation techniques and error detection strategies",
    "Constructive feedback protocols for collaborative improvement",
    "Quality assurance principles for business decision-making models"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Structured peer feedback on CVP models and collaborative improvement"
  ],
  rationale: "To provide students with an opportunity to receive feedback on their CVP models and to learn from their peers.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
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
    description: "Complete model construction demonstrating mastery of technical skills",
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
