export const lesson05Data = {
  id: "u07l05",
  title: "Build the Inventory Method Workbook",
  sequence: 5,
  unitId: "u07",
  learningObjectives: [
    "Build a workbook that computes COGS and ending inventory for FIFO, LIFO, and Weighted Average",
    "Use Excel Tables and structured references so the model scales as transactions grow",
    "Add validation rules that block bad inputs before they reach COGS",
    "Document assumptions so an investor can audit the method comparison"
  ],
  keyConcepts: [
    "Dynamic method selector drives all three methods from one control cell",
    "Tables + structured references replace fixed ranges",
    "Validation catches missing SKUs, negative costs, and stale dates",
    "Professional workbooks explain choices beside the outputs"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Business pressure hook",
    "Tool anatomy with failure modes",
    "Safe rehearsal simulator",
    "Real workbook build with verification checkpoints"
  ],
  rationale: "Students move from correct hand calculations to a working method-comparison workbook. The same logic they learned by hand in Lessons 2-4 now lives in one file that switches methods, scales with data, and earns trust.",
  status: "Complete"
}

export const unit07Data = {
  id: "u07",
  title: "Inventory Accounting",
  sequence: 7
}

export const lesson05Phases = [
  {
    id: "u07l05-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Open with a business scenario where Sarah needs to compare methods fast under investor scrutiny",
  },
  {
    id: "u07l05-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Name the workbook pattern: Tables, method selector, helper columns, and common failure modes",
  },
  {
    id: "u07l05-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice method-comparison logic in a bounded simulator before touching the real workbook",
  },
  {
    id: "u07l05-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real method-comparison workbook with verification checkpoints",
  },
  {
    id: "u07l05-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check plus a brief artifact task: defend your method recommendation",
  },
  {
    id: "u07l05-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on what the tool added and preview the dashboard integration in Lesson 06",
  }
]
