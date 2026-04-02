export const lesson04Data = {
  id: "u08l04",
  title: "Double-Declining Balance and Method Comparison",
  sequence: 4,
  unitId: "u08",
  learningObjectives: [
    "Calculate double-declining balance depreciation by hand",
    "Compare DDB and straight-line depreciation in business terms",
    "Explain when accelerated depreciation makes more sense than straight-line"
  ],
  keyConcepts: [
    "Double-declining balance formula and rate",
    "Salvage value floor rule",
    "Method comparison and business implications"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Worked examples comparing DDB and straight-line side by side",
    "Algorithmic deliberate practice with mastery target",
    "Salvage value floor complication in Phase 3"
  ],
  rationale: "Students must understand accelerated depreciation and how method choice affects reported profit before building Excel schedules in Lesson 05.",
  status: "Draft"
}

export const unit08Data = {
  id: "u08",
  title: "Fixed Assets and Depreciation",
  sequence: 8
}

export const lesson04Phases = [
  {
    id: "u08l04-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to Lesson 03's straight-line method and surface the friction point that makes DDB necessary"
  },
  {
    id: "u08l04-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Teach DDB method step by step, compare with straight-line in business terms"
  },
  {
    id: "u08l04-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Add salvage value floor complication with reduced scaffolding"
  },
  {
    id: "u08l04-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Algorithmic practice on DDB and method comparison with mastery target"
  },
  {
    id: "u08l04-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short MCQ exit ticket on DDB calculation and method comparison reasoning"
  },
  {
    id: "u08l04-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on confidence, connect to business problem, preview Excel build lesson"
  }
]
