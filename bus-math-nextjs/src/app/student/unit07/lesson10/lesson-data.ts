// Asset & Inventory Tracker, Lesson 10 data - extracted from MCP curriculum database
export const lesson10Data = {
  id: "mds5x9aaehnruhxnq4k",
  title: "Public Presentation",
  sequence: 10,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Present strategic financial recommendations to Board of Directors panel with professional confidence",
    "Demonstrate mastery of depreciation and inventory valuation through comprehensive advisory brief",
    "Engage effectively with board-level questions about cash flow and tax implications",
    "Reflect on learning achievements in financial analysis and strategic business communication"
  ],
  keyConcepts: [
    "Board of Directors presentation standards and corporate governance communication",
    "Strategic financial decision-making and method selection in business contexts",
    "Professional advisory services and client engagement best practices",
    "Integration of technical financial analysis with executive-level strategic thinking"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Final Board presentation and unit reflection"
  ],
  rationale: "To provide a culminating, authentic assessment of student learning and to give them an opportunity to share their work with a real-world audience.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson10Phases = [
  {
    id: "phase_hook_10",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Build excitement for sharing work and connecting with authentic audience",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_10",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce key concepts and connect to business applications",
    // No component needed for this phase.
  },
  {
    id: "phase_guided_practice_10",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying lesson concepts with scaffolded support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their advisory brief.
  },
  {
    id: "phase_independent_practice_10",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their advisory brief.
  },
  {
    id: "phase_assessment_10",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Present work to authentic audience and receive feedback on technical and communication skills",
    // component: "FeedbackCollector" (id: mdso449cltlcqozjia) - To collect feedback from the professional panel.
  },
  {
    id: "phase_closing_10",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on presentation experience and identify key learning achievements",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the unit.
  }
]
