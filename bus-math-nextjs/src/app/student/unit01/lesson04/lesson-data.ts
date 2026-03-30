// Unit 1, Lesson 4 data
export const lesson04Data = {
  id: "mds5t7qs1o7y0k5y45z",
  title: "Excel Model: Move Manual Ledger to Excel Table",
  sequence: 4,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Create a professional Excel Table from manual transaction data",
    "Apply professional formatting and structure to transaction data",
    "Build a clean, readable Excel workbook structure ready for formulas",
    "Define and verify workbook completion standards"
  ],
  keyConcepts: [
    "Excel Table structure and properties",
    "Professional ledger formatting standards",
    "Excel Table naming conventions",
    "Workbook organization best practices",
    "Professional data presentation"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Business-pressure hook",
    "Tool anatomy explanation",
    "Safe simulator rehearsal",
    "Workbook build sprint",
    "Brief artifact task"
  ],
  rationale: "This lesson moves Sarah's manual transaction data into a professional Excel Table structure, establishing the foundation for automated formulas in the next lesson.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases - aligned with excel-lessons skill
export const lesson04Phases = [
  {
    id: "phase04-tool-pressure",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Business scenario showing why professional Excel structure matters for investor trust",
  },
  {
    id: "phase04-tool-anatomy",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Excel Table structure, formatting, and common failure modes",
  },
  {
    id: "phase04-safe-rehearsal",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Rehearse table structure and professional formatting before real workbook build",
  },
  {
    id: "phase04-workbook-sprint",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real Excel workbook with clean table structure and professional formatting",
  },
  {
    id: "phase04-audit-explain",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short technical check and brief artifact explaining workbook structure choices",
  },
  {
    id: "phase04-reflection-handoff",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on tool use and preview self-auditing formulas in next lesson",
  }
]