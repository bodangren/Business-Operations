// Three-Statement Storyboard, Lesson 3 data - Balance Sheet & Retained Earnings
export const lesson03Data = {
  id: "mds5via1qgutbwmfa3s",
  title: "Build the Balance Sheet and Retained Earnings",
  sequence: 3,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Construct a balance sheet that correctly groups assets, liabilities, and equity",
    "Explain how net income flows into retained earnings and connects the income statement to the balance sheet",
    "Verify that assets equal liabilities plus equity after every build"
  ],
  keyConcepts: [
    "The accounting equation: Assets = Liabilities + Equity",
    "Retained earnings as the bridge between periods",
    "Classifying accounts into current vs. long-term categories",
    "How the income statement feeds the balance sheet through net income"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on balance sheet construction from trial balance data",
    "Worked examples showing retained earnings roll-forward",
    "Algorithmic deliberate practice for mastery"
  ],
  rationale: "To equip students with the ability to prepare and interpret a balance sheet and explain how income affects equity, completing the two-statement link before cash flow is introduced.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases following the accounting-principles skill contract
export const lesson03Phases = [
  {
    id: "phase_1_recycle_3",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to Lesson 02 income statement and surface the friction point: profit alone does not tell you what the business owns or owes.",
  },
  {
    id: "phase_2_explicit_3",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Name the method, model the balance sheet step by step, show the retained earnings roll-forward, and walk through a worked example with mini balance-sheet representations.",
  },
  {
    id: "phase_3_deepen_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Add a meaningful complication (retained earnings links, dividends, or ambiguous classifications), reduce prompts, and shift toward authentic accounting notation.",
  },
  {
    id: "phase_4_mastery_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Repeated balance sheet construction practice with varied numbers, automatic checking, feedback after submission, and a mastery target.",
  },
  {
    id: "phase_5_assessment_3",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short MCQ exit ticket on balance sheet construction, retained earnings logic, and common misconceptions.",
  },
  {
    id: "phase_6_reflection_3",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on confidence and understanding, connect to the business problem, identify method signals, and preview the cash flow statement lesson.",
  }
]
