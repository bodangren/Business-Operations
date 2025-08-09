// Asset & Inventory Tracker, Lesson 2 data - extracted from MCP curriculum database
export const lesson02Data = {
  id: "mds5x99kx7ah9f1wjde",
  title: "Depreciation Techniques",
  sequence: 2,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Calculate depreciation schedules using multiple methods",
    "Build automated depreciation schedules with Excel functions"
  ],
  keyConcepts: [
    "Straight-Line (SLN) and Double-Declining Balance (DDB) depreciation methods and applications",
    "Excel SLN and DDB functions syntax and implementation"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on SLN and DDB methods with Excel implementation"
  ],
  rationale: "To equip students with the foundational knowledge and technical skills to calculate depreciation using two common methods.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson02Phases = [
  {
    id: "phase_hook_2",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Capture attention and establish relevance for depreciation techniques",
    // component: "DepreciationMethodBuilder" (id: mdsautabwqbxyzahzfd) - To show the difference between depreciation methods.
  },
  {
    id: "phase_introduction_2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Systematic introduction of Straight-Line (SLN) and Double-Declining Balance (DDB) depreciation methods and applications with step-by-step demonstrations",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_2",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Straight-Line (SLN) and Double-Declining Balance (DDB) depreciation methods and applications with scaffolded support",
    // component: "DepreciationMethodBuilder" (id: mdsautabwqbxyzahzfd) - To practice calculating depreciation.
  },
  {
    id: "phase_independent_practice_2",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Straight-Line (SLN) and Double-Declining Balance (DDB) depreciation methods and applications independently with minimal teacher support",
    // component: "DepreciationMethodBuilder" (id: mdsautabwqbxyzahzfd) - To practice calculating depreciation.
  },
  {
    id: "phase_assessment_2",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_2",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
