// Month-End Wizard, Lesson 08 data - Project Kickoff
export const lesson08Data = {
  id: "unit02_lesson08",
  title: "Project Kickoff: Your Group's Month-End Scenario",
  sequence: 8,
  unitId: "unit02",
  learningObjectives: [
    "Open and organize your group's assigned month-end closing workbook using the Lesson 07 structure",
    "Complete the Data and Adjustments sheets with your group's unique scenario numbers",
    "Write a draft recommendation direction statement supported by early workbook findings",
    "Meet Milestone 1 acceptance criteria before moving to Lesson 09"
  ],
  keyConcepts: [
    "Group-specific datasets with identical workbook architecture",
    "Adjusting entries driven by your scenario's unique transactions",
    "Evidence chain from raw data through recommendation",
    "Milestone-driven project progress with explicit acceptance criteria"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Group-project kickoff with assigned datasets",
    "Milestone 1: workbook setup and early analysis",
    "Evidence-based recommendation drafting"
  ],
  rationale: "Teams transition from the guided Lesson 07 rehearsal into independent project work. Each group receives its own month-end closing scenario while preserving the exact workbook structure practiced during rehearsal.",
  status: "Draft"
}

export const unit02Data = {
  id: "unit02",
  title: "Month-End Wizard",
  sequence: 2
}

// Milestone-style lesson (no six-phase structure)
export const lesson08Phases = [
  {
    id: "milestone_1",
    phaseName: "Milestone 1" as const,
    sequence: 1,
    description: "Project kickoff: receive your group dataset, organize the workbook, complete early sheets, and draft a recommendation direction."
  }
]
