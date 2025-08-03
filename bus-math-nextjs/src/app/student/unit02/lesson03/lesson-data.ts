// Unit 2, Lesson 3 data - extracted from MCP curriculum database
export const lesson03Data = {
  id: "mds5v4u1inmd8zoj1fi",
  title: "Guided Practice: Four Scenarios into Ledger",
  sequence: 3,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Record accruals and deferrals in accordance with GAAP standards",
    "Calculate and post straight-line depreciation entries",
    "Execute proper closing entries to zero temporary accounts"
  ],
  keyConcepts: [
    "Accrual accounting principles and their application to month-end procedures",
    "Straight-line depreciation calculation and recording methods",
    "Closing entries purpose and proper execution"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Application of adjusting entry knowledge to systematic ledger recording"
  ],
  rationale: "To ensure students can apply theoretical knowledge to practical scenarios.",
  status: "Draft"
}

export const unit02Data = {
  id: "mdrhkhm79v8qau43696",
  title: "Unit 2: Month-End Wizard",
  sequence: 2
}

// Lesson phases (standard 6-phase structure)
export const lesson03Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Discover real adjusting entry scenarios from actual business month-end procedures"
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Review GAAP principles for accruals, deferrals, and depreciation calculations"
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Work through four practice scenarios with instructor guidance and peer collaboration"
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete additional adjusting entry scenarios independently with self-checking"
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate mastery of adjusting entry recording through practical application"
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the systematic approach to month-end adjusting entries"
  }
]