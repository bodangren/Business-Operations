// Data-Driven Café, Lesson 10 data - extracted from MCP curriculum database
export const lesson10Data = {
  id: "mds5vu0m46dubjfe22",
  title: "Public Presentation: Café Management Showcase",
  sequence: 10,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Present comprehensive statistical analysis and business recommendations to café management",
    "Demonstrate mastery of data-driven decision making through professional presentation",
    "Justify inventory and staffing recommendations using statistical evidence and business logic",
    "Respond to stakeholder questions about methodology, assumptions, and implementation"
  ],
  keyConcepts: [
    "Professional communication of statistical analysis to business stakeholders",
    "Data-driven decision making in operations management",
    "Evidence-based business recommendations with risk assessment",
    "Stakeholder engagement and authentic audience communication"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Deliver presentations to authentic stakeholders and reflect on learning"
  ],
  rationale: "To provide a culminating, authentic assessment of student learning and to give them an opportunity to receive feedback from real-world stakeholders.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
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
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their pitch.
  },
  {
    id: "phase_independent_practice_10",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their pitch.
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
