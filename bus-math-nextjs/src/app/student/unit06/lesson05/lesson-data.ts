// PriceLab Challenge, Lesson 5 data - extracted from MCP curriculum database
export const lesson05Data = {
  id: "mds5wn3rpt1xi5h617a",
  title: "Sprint Retrospective & Milestone Assessment",
  sequence: 5,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Reflect on learning progress in CVP analysis and pricing strategy development",
    "Demonstrate mastery of competitor analysis techniques and market positioning insights",
    "Assess technical proficiency in Excel tools including Power Query and Data Tables",
    "Self-evaluate readiness for pricing recommendation development and presentation"
  ],
  keyConcepts: [
    "Metacognitive reflection strategies for complex financial modeling projects",
    "Competitive analysis methodology and market intelligence gathering",
    "Sprint retrospective techniques for project-based learning assessment",
    "Integration of technical skills with strategic business thinking"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Reflection on learning and formal assessment of competitor analysis milestone"
  ],
  rationale: "To encourage students to reflect on their learning and to assess their understanding of key concepts.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Capture attention and establish relevance for sprint retrospective & milestone assessment",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce key concepts and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying lesson concepts with scaffolded support",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide the retrospective process.
  },
  {
    id: "phase_independent_practice_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice lesson skills independently with minimal teacher support",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide the retrospective process.
  },
  {
    id: "phase_assessment_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment demonstrating understanding of key concepts and skills",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize learning and establish goals for continued growth",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
