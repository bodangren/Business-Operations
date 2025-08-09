// Unit 2, Lesson 2 data - extracted from MCP curriculum database
export const lesson02Data = {
  id: "mds5v4txafu1bzizb5q",
  title: "Skill Introduction: Accruals, Deferrals & SLN Depreciation",
  sequence: 2,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Record accruals and deferrals in accordance with GAAP standards",
    "Calculate and post straight-line depreciation entries",
    "Understand the timing principles underlying accrual accounting",
    "Apply depreciation concepts to real business scenarios"
  ],
  keyConcepts: [
    "Accrual accounting principles and their application to month-end procedures",
    "Straight-line depreciation calculation and recording methods",
    "Revenue recognition principles and expense matching",
    "Adjusting entries for accrued revenues and expenses",
    "Depreciation journal entries and accumulated depreciation"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on GAAP-compliant adjusting entries and depreciation calculations"
  ],
  rationale: "To provide the foundational accounting knowledge required for the unit's automation tasks.",
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
    description: "Discover why companies miss earnings estimates due to poor accrual practices",
    // component: "LineChart" (id: 1753927528418ku6yyo9go) - To show a chart of a company's stock price reacting to an earnings miss.
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn GAAP principles for accruals, deferrals, and depreciation timing",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice calculating and recording straight-line depreciation entries",
    // component: "DepreciationMethodBuilder" (id: mdsautabwqbxyzahzfd) - To practice calculating depreciation.
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete accrual and deferral journal entries for various scenarios",
    // component: "JournalEntryBuilding" (id: 1753927672484sg6mzsmy6) - To practice creating adjusting entries.
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate mastery of adjusting entries and depreciation calculations",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Connect adjusting entries to the broader month-end automation goal",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]