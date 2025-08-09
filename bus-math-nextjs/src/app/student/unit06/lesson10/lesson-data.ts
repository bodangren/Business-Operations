// PriceLab Challenge, Lesson 10 data - extracted from MCP curriculum database
export const lesson10Data = {
  id: "mds5wn45ehaor48xp9",
  title: "Town Hall Pricing Debate & Reflection",
  sequence: 10,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Participate effectively in town hall debate defending pricing strategy with evidence and logic",
    "Demonstrate comprehensive understanding of CVP analysis and competitive positioning",
    "Engage professionally with diverse stakeholder perspectives and challenging questions",
    "Reflect on learning achievements and strategic thinking development throughout the unit"
  ],
  keyConcepts: [
    "Public debate and civic engagement skills in business decision-making contexts",
    "Stakeholder communication and multi-perspective analysis in pricing strategy",
    "Professional presentation and argumentation in authentic business scenarios",
    "Integration of technical analysis with strategic business communication"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Final presentations in town hall format with comprehensive unit reflection"
  ],
  rationale: "To provide a culminating, authentic assessment of student learning and to give them an opportunity to share their work with a real-world audience.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases from MCP curriculum database
export const lesson10Phases = [
  {
    id: "phase_hook_10",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Activate prior knowledge and prepare for metacognitive reflection",
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
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their debate.
  },
  {
    id: "phase_independent_practice_10",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their debate.
  },
  {
    id: "phase_assessment_10",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Self-assess learning progress and identify areas for improvement",
    // component: "FeedbackCollector" (id: mdso449cltlcqozjia) - To collect feedback from the professional panel.
  },
  {
    id: "phase_closing_10",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize learning and establish goals for continued growth",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the unit.
  }
]
