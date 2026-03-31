// Unit 07, Lesson 6 — Dynamic Method Selection and Turnover Analysis
export const lesson06Data = {
  id: "u07_l06_dynamic_method_turnover",
  title: "Dynamic Method Selection and Turnover Analysis",
  sequence: 6,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Build a scenario-controlled workbook that switches between FIFO, LIFO, and Weighted Average with one selection",
    "Calculate and compare inventory turnover and days-on-hand across methods",
    "Link KPI tiles and charts to structured Table outputs so visuals update automatically",
    "Add validation flags for missing SKU, negative/zero UnitCost, stale AsOfDate, and out-of-range rates",
    "Write a short recommendation defending the best inventory method using workbook evidence"
  ],
  keyConcepts: [
    "Scenario driver table with named assumptions (Base/Stretch/Downside)",
    "Exact-match lookup switching (XLOOKUP or INDEX-MATCH) with IFNA/IFERROR",
    "Structured references (Table[Column]) for auto-expanding chart ranges",
    "Inventory turnover = COGS ÷ Average Inventory; Days on Hand = 365 ÷ Turnover",
    "Validation-before-totals pattern for investor-ready workbooks"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Build a dynamic method-switching workbook with turnover KPIs and investor-ready outputs"
  ],
  rationale: "Students extend their method-comparison workbook from Lesson 05 into a live, scenario-driven system. One dropdown controls the inventory method and scenario assumptions. KPI tiles and charts update automatically. Students practice defending their method choice with evidence from turnover, margin, and cash-flow impact.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Investor scenario: one screen must show Base/Stretch/Downside results and method impact in seconds"
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Anatomy of dynamic method switching, turnover KPIs, and the validation-before-totals pattern"
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Safe rehearsal: method-switching simulator with instant feedback before the real workbook build"
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Workbook sprint: build the dynamic method-selection and turnover-analysis workbook with verification checkpoints"
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check and a short written defense of the recommended inventory method"
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflection on tool fluency, what the dashboard now proves, and preview of Lesson 07 project rehearsal"
  }
]
