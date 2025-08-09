// Unit 1, Lesson 10 data - extracted from MCP curriculum database
export const lesson10Data = {
  id: "mds5t7r3spquhkd3u9",
  title: "Presentations: Investor Showcase & Reflection",
  sequence: 10,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Deliver a professional 4-minute investor pitch to an authentic business audience",
    "Demonstrate live Excel features with confidence and technical accuracy",
    "Respond professionally to panel questions and investor feedback",
    "Reflect critically on learning journey and identify areas for future skill development"
  ],
  keyConcepts: [
    "Professional presentation delivery",
    "Authentic audience engagement",
    "Technical demonstration mastery",
    "Learning reflection and analysis",
    "Future skill application planning"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Authentic assessment with real business professionals",
    "Live demonstration and Q&A sessions",
    "Reflective writing and analysis",
    "Portfolio documentation"
  ],
  rationale: "This culminating lesson provides authentic assessment through real-world presentations and supports metacognitive reflection on the learning process.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson10Phases = [
  {
    id: "phase10-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Welcome professional business panel and set stage for authentic investor showcase presentations"
    // No component needed for this phase.
  },
  {
    id: "phase10-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Review presentation format and introduce business professional panel members"
    // No component needed for this phase.
  },
  {
    id: "phase10-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Support students through investor presentations with professional audience feedback"
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their pitch.
  },
  {
    id: "phase10-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete individual presentations and respond to investor panel questions"
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students present their pitch.
  },
  {
    id: "phase10-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete summative presentation assessment and receive professional panel feedback",
    // component: "FeedbackCollector" (id: mdso449cltlcqozjia) - To collect feedback from the professional panel.
  },
  {
    id: "phase10-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on learning journey, celebrate achievements, and plan for next unit applications",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the unit.
  }
]