// Unit 2, Lesson 2 data - Accruals and Deferrals
export const lesson02Data = {
  id: "mds5v4txafu1bzizb5q",
  title: "Accruals and Deferrals: Timing Is Everything",
  sequence: 2,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Identify when revenue or expense timing is wrong under cash vs. accrual accounting",
    "Record adjusting entries for accrued revenues and accrued expenses",
    "Record adjusting entries for deferred revenues and deferred expenses",
    "Explain how adjustments change the income statement and balance sheet"
  ],
  keyConcepts: [
    "Accrual accounting records revenue when earned and expenses when incurred, not when cash moves",
    "Accrued revenue: work done but not yet billed or paid",
    "Accrued expense: cost incurred but not yet paid or billed",
    "Deferred revenue: cash received before the work is done",
    "Deferred expense (prepaid): cash paid before the cost is incurred",
    "Adjusting entries fix timing so financial statements reflect the true period"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on accrual vs. cash timing",
    "Worked examples with visible before/after statement changes",
    "Algorithmic deliberate practice on identifying and recording adjustments"
  ],
  rationale: "Students must understand why timing adjustments exist before they can automate them. This lesson isolates accruals and deferrals as the core month-end friction that Sarah faces every closing.",
  status: "Draft"
}

export const unit02Data = {
  id: "mdrhkhm79v8qau43696",
  title: "Unit 2: Month-End Wizard",
  sequence: 2
}

// Lesson phases (standard 6-phase structure)
export const lesson02Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to Lesson 01 and surface the timing problem that accruals solve",
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn the four adjustment types with step-by-step worked examples",
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Apply adjustments to messier scenarios with reduced scaffolding",
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Algorithmic practice identifying and recording adjustments until mastery",
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "MCQ exit ticket on accruals and deferrals reasoning",
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on confidence, connect to business problem, preview closing entries",
  }
]
