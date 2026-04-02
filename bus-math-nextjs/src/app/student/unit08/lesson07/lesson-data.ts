export const lesson07Data = {
  id: "u08l07",
  title: "Project Rehearsal: Depreciation Workbook with Shared Data",
  sequence: 7,
  unitId: "unit08",
  learningObjectives: [
    "Rehearse the exact workbook structure required for the depreciation project",
    "Trace a depreciation recommendation back to asset register and schedule evidence",
    "Apply the Definition of Done to evaluate workbook quality",
    "Practice peer audit focused on logic chain, method fit, and clarity"
  ],
  keyConcepts: [
    "Shared teacher dataset: every group uses the same data today",
    "Workbook map: Asset Register, Depreciation Schedule, Method Comparison, Recommendation",
    "Evidence chain: book value and expense timing must trace to register entries",
    "Definition of Done: complete sheets, linked formulas, defensible recommendation"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Guided rehearsal: shared data → audit → polish → transfer check → peer critique → handoff"
  ],
  rationale: "Students practice with one shared dataset so every group sees the same quality bar before the real project. Today is rehearsal — not the real project. Students learn what a complete workbook looks like, how to trace recommendations to evidence, and what they must recreate independently next lesson.",
  status: "Ready"
}

export const unit08Data = {
  id: "unit08",
  title: "Fixed Assets and Depreciation",
  sequence: 8
}

export const lesson07Phases = [
  {
    id: "u08l07-phase1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Frame the lesson as a final guided rehearsal before independent project work begins",
  },
  {
    id: "u08l07-phase2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Orient to the shared workbook, name each sheet and evidence block, define success",
  },
  {
    id: "u08l07-phase3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Trace the logic chain from asset register to recommendation with shared data",
  },
  {
    id: "u08l07-phase4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete weak spots, write recommendation and risk statements, identify transfer features",
  },
  {
    id: "u08l07-phase5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Comprehension check and peer critique tied to the Definition of Done",
  },
  {
    id: "u08l07-phase6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on rehearsal, name what carries into the project, preview next lesson changes",
  }
]
