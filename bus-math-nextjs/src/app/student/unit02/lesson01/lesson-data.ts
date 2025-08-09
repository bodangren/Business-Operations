// Unit 2, Lesson 1 data - extracted from MCP curriculum database
export const lesson01Data = {
  id: "mds5v4twc0o3z3l8ecg",
  title: "Launch & Explore: CFO's Month-End Challenge",
  sequence: 1,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Understand that automation reduces human error and increases efficiency in financial processes",
    "Recognize that GAAP compliance requires systematic tracking of accruals, deferrals, and adjusting entries",
    "Identify how user interface design determines the usability and adoption of financial tools",
    "Explain how time savings through automation creates competitive advantage for businesses"
  ],
  keyConcepts: [
    "Accrual accounting principles and their application to month-end procedures",
    "Straight-line depreciation calculation and recording methods",
    "Closing entries purpose and proper execution",
    "GAAP requirements for adjusting entries and timing differences",
    "Month-end closing process workflow and best practices"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Introduction to month-end closing problems through authentic business perspective"
  ],
  rationale: "To establish the real-world context and business case for the unit's project.",
  status: "Draft"
}

export const unit02Data = {
  id: "mdrhkhm79v8qau43696",
  title: "Unit 2: Month-End Wizard",
  sequence: 2
}

// Lesson phases (standard 6-phase structure)
export const lesson01Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Experience the chaos of manual month-end closing through an interactive CFO crisis scenario",
    // component: "Lesson01Phase1" (id: mdwl1ovg1rb2fimw7zj) - To introduce the month-end challenge with a video and comprehension questions.
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn about month-end closing challenges and the business case for automation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the introductory text.
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Explore GAAP requirements for accruals, deferrals, and adjusting entries",
    // component: "JournalEntry" (id: 1753927405954gyryagjje) - To show examples of adjusting entries.
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Analyze month-end procedures and identify automation opportunities",
    // component: "BusinessTransactionCategorization" (id: 175392755383120ix5iu91) - To practice categorizing transactions that will require adjusting entries.
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on month-end closing concepts and GAAP compliance",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the competitive advantage of automated financial processes",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]