export const lesson08Data = {
  id: "u08l08",
  title: "Project Kickoff: Group Fixed-Asset Datasets",
  sequence: 8,
  unitId: "unit08",
  learningObjectives: [
    "Open and name the correct group-specific fixed-asset workbook",
    "Begin the asset register sheet with cost, useful life, salvage value, and method for each asset",
    "Start the depreciation schedule with linked formulas for the first asset class",
    "Write one draft claim about which depreciation method best fits your group's scenario"
  ],
  keyConcepts: [
    "Each group receives its own fixed-asset dataset — use only your assigned file",
    "Workbook architecture is identical to Lesson 07: Asset Register, Depreciation Schedule, Method Comparison, Recommendation",
    "Book Value = Cost − Accumulated Depreciation — this formula must hold on every sheet",
    "Milestone 1: correct workbook opened and named, early asset-register rows complete, one draft direction statement"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Team-based kickoff with assigned datasets",
    "Guided workbook setup matching rehearsal structure",
    "Independent asset-register build with teacher check-ins"
  ],
  rationale: "Today your team moves from rehearsal into your own project. You will receive a group-specific fixed-asset dataset, set up your workbook using the exact same structure from Lesson 07, and begin entering assets. The goal is not a finished model — it is a clean start with the right file, the right sheets, and your first rows of asset data entered correctly.",
  status: "Ready"
}

export const unit08Data = {
  id: "unit08",
  title: "Fixed Assets and Depreciation",
  sequence: 8
}

export const lesson08Phases = [
  {
    id: "u08l08-phase1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Receive your group's fixed-asset scenario and understand the project goal",
  },
  {
    id: "u08l08-phase2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Open the correct group workbook, rename it, and verify sheet structure matches Lesson 07",
  },
  {
    id: "u08l08-phase3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Begin the asset register: enter cost, useful life, salvage value, and method for each asset",
  },
  {
    id: "u08l08-phase4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Start the depreciation schedule with linked formulas and write one draft method claim",
  },
  {
    id: "u08l08-phase5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Teacher check-in against Milestone 1 acceptance criteria",
  },
  {
    id: "u08l08-phase6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Save, name, and preview what must be complete by Lesson 09",
  }
]
