// Build Asset Register and Depreciation Schedule, Lesson 5 — Unit 08 (Fixed Assets and Depreciation)
export const lesson05Data = {
  id: "u08l05",
  title: "Build Asset Register and Depreciation Schedule",
  sequence: 5,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Build a professional asset register with all required fields in Excel",
    "Create a linked depreciation schedule that calculates annual expense, accumulated depreciation, and book value",
    "Add workbook checks so accumulated depreciation and book value stay believable",
    "Explain how the asset register connects to the income statement and balance sheet"
  ],
  keyConcepts: [
    "Asset register anatomy: Asset ID, description, cost, useful life, salvage value, method, purchase date",
    "Depreciation schedule: annual expense, accumulated depreciation, ending book value by year",
    "Formula linking between register and schedule sheets",
    "Workbook checks: Book Value = Cost - Accumulated Depreciation",
    "Professional formatting and documentation standards"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Business pressure hook: investor needs clean asset tracking",
    "Direct instruction on workbook anatomy and formula architecture",
    "Safe rehearsal of depreciation logic before live Excel build",
    "Guided workbook sprint with verification checkpoints",
    "Technical audit and recommendation defense"
  ],
  rationale: "Students move from manual depreciation calculations to a professional Excel asset register and depreciation schedule. This workbook becomes the evidence base for all future depreciation decisions and the group project.",
  status: "Draft"
}

export const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Fixed Assets and Depreciation",
  sequence: 8
}

export const lesson05Phases = [
  {
    id: "u08l05-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Sarah needs an investor-ready asset register before the board meeting — fragile lists won't work"
  },
  {
    id: "u08l05-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Anatomy of the asset register and depreciation schedule: sheets, columns, formulas, and common traps"
  },
  {
    id: "u08l05-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Rehearse depreciation schedule logic in a safe simulator before touching Excel"
  },
  {
    id: "u08l05-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real asset register and depreciation schedule workbook with verification checkpoints"
  },
  {
    id: "u08l05-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check on workbook logic and a short artifact task defending the register's trustworthiness"
  },
  {
    id: "u08l05-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on what the workbook added, name what you can now do faster, and preview method comparison"
  }
]
