export const lesson03Data = {
  id: "u08l03",
  title: "Straight-Line Depreciation",
  sequence: 3,
  unitId: "u08",
  learningObjectives: [
    "Calculate straight-line depreciation by hand for a single asset",
    "Explain how straight-line depreciation affects the income statement and balance sheet over time"
  ],
  keyConcepts: [
    "Straight-line depreciation formula",
    "Depreciable base (Cost − Salvage Value)",
    "Accumulated depreciation and book value"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Worked examples with visible intermediate values",
    "Algorithmic deliberate practice with mastery target",
    "Partial-year complication in Phase 3"
  ],
  rationale: "Students must master the simplest depreciation method by hand before comparing it to accelerated methods or building Excel schedules.",
  status: "Draft"
}

export const unit08Data = {
  id: "u08",
  title: "Fixed Assets and Depreciation",
  sequence: 8
}

export const lesson03Phases = [
  {
    id: "u08l03-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to Lesson 02's capitalization rule and surface the friction point that makes straight-line depreciation necessary"
  },
  {
    id: "u08l03-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Teach the straight-line method step by step with worked examples and visible intermediate values"
  },
  {
    id: "u08l03-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Add partial-year depreciation as a complication with reduced scaffolding"
  },
  {
    id: "u08l03-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Algorithmic practice on straight-line schedules with mastery target of 5 consecutive correct"
  },
  {
    id: "u08l03-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short MCQ exit ticket on straight-line calculation and statement impact"
  },
  {
    id: "u08l03-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on confidence, connect to the business problem, and preview double-declining balance"
  }
]
