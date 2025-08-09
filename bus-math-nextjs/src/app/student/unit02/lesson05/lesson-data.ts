// Month-End Wizard, Lesson 5 data - extracted from MCP curriculum database
export const lesson05Data = {
  id: "mds5v4u7x4qkztwi6g",
  title: "Reflection Checkpoint: Sprint Retrospective",
  sequence: 5,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Reflect on learning progress and identify areas for improvement in month-end procedures",
    "Analyze what worked well and what challenged during the adjusting entries process",
    "Set strategic goals for the Excel automation phase of the project",
    "Practice metacognitive thinking to enhance future learning"
  ],
  keyConcepts: [
    "Sprint retrospective methodology for continuous improvement",
    "Metacognitive reflection strategies for deeper learning",
    "Goal setting techniques for academic and professional development",
    "Growth mindset principles applied to financial learning challenges"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Learning analysis and strategic planning for automation phase"
  ],
  rationale: "To encourage metacognition and strategic planning, preparing students for the next phase of the project.",
  status: "Draft"
}

export const unit02Data = {
  id: "mdrhkhm79v8qau43696",
  title: "Month-End Wizard",
  sequence: 2
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Activate prior knowledge and prepare for metacognitive reflection",
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
