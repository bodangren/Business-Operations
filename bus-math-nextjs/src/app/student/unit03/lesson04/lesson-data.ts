// Three-Statement Storyboard, Lesson 4 data - Indirect Cash Flow and Ratios
export const lesson04Data = {
  id: "mds5via5psu7rqxs1h",
  title: "Indirect Cash Flow Statement and Ratio Interpretation",
  sequence: 4,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Explain why net income differs from cash flow from operations",
    "Prepare an indirect-method cash flow statement from income statement and balance sheet data",
    "Classify cash movements into operating, investing, and financing activities",
    "Interpret basic ratios (current ratio, return on assets) to assess business health"
  ],
  keyConcepts: [
    "Profit is not the same as cash — accrual vs. cash timing differences",
    "Indirect method: start with net income and adjust for non-cash items and working capital changes",
    "Operating, investing, and financing activity categories",
    "Current ratio and return on assets as signals of liquidity and efficiency"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on the indirect cash flow method with worked examples",
    "Scaffolded practice classifying cash movements and adjusting net income",
    "Algorithmic deliberate practice for mastery",
    "Ratio interpretation tied to the TechStart business story"
  ],
  rationale: "To equip students with the ability to prepare and interpret an indirect-method cash flow statement and connect all three financial statements conceptually before moving to Excel-based workbook construction.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases following the accounting-principles skill contract
export const lesson04Phases = [
  {
    id: "phase_1_recycle_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to Lessons 02–03. Sarah shows profit and a balanced balance sheet — but her bank account is empty. Surface the friction point: profit does not equal cash.",
  },
  {
    id: "phase_2_explicit_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Name the indirect method, model the cash flow statement step by step, show operating/investing/financing categories, and walk through a worked example.",
  },
  {
    id: "phase_3_deepen_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Add ratio interpretation as a meaningful complication, reduce prompts, shift toward authentic accounting notation, and ask students to explain choices.",
  },
  {
    id: "phase_4_mastery_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Repeated cash flow statement construction practice with varied numbers, automatic checking, feedback after submission, and a mastery target.",
  },
  {
    id: "phase_5_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short MCQ exit ticket on cash flow statement construction, ratio interpretation, and common misconceptions.",
  },
  {
    id: "phase_6_reflection_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on confidence and understanding, connect to the business problem, identify method signals, and preview the first Excel build lesson.",
  }
]
