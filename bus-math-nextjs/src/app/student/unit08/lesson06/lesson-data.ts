// Partial-Year Depreciation and Statement Impact, Lesson 6 - Unit 08 (Fixed Assets and Depreciation)
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit08Data = UNIT_REF_MAP[8]
export const lesson06Data = {
  id: "u08l06",
  title: "Partial-Year Depreciation and Statement Impact",
  sequence: 6,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Calculate partial-year depreciation in Excel using months in service",
    "Use SLN and DDB functions to compare Year 1 depreciation methods",
    "Connect depreciation expense to a mini income statement and net book value to a mini balance sheet",
    "Defend a depreciation policy recommendation using workbook evidence"
  ],
  keyConcepts: [
    "Partial-year rule: annual depreciation times months in service divided by 12",
    "Excel functions: SLN(cost, salvage, life) and DDB(cost, salvage, life, period)",
    "Method comparison: straight-line vs. double-declining balance in Year 1",
    "Income statement impact: depreciation expense reduces operating income",
    "Balance sheet impact: accumulated depreciation reduces net book value",
    "Professional recommendation structure: claim, evidence, risk"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Investor scenario hook where timing and financial statement impact matter",
    "Direct instruction on partial-year workbook anatomy and built-in Excel functions",
    "Safe rehearsal of partial-year method comparison before live Excel build",
    "Guided workbook sprint with mini financial statement checkpoints",
    "Technical check and recommendation defense artifact"
  ],
  rationale: "Students build a fresh partial-year depreciation workbook instead of reusing the Lesson 05 asset register. They use SLN and DDB, apply months-in-service proration, connect the resulting expense to mini income statements and mini balance sheets, and defend a depreciation policy with evidence from the workbook.",
  status: "Draft"
}

export const lesson06Phases = [
  {
    id: "u08l06-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Investors ask Sarah how mid-year asset purchases change profit and book value under different depreciation methods"
  },
  {
    id: "u08l06-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Anatomy of the partial-year depreciation workbook: asset register, SLN/DDB functions, and statement links"
  },
  {
    id: "u08l06-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Rehearse partial-year method comparison logic before touching Excel"
  },
  {
    id: "u08l06-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real partial-year workbook with method comparison, mini income statement, and mini balance sheet"
  },
  {
    id: "u08l06-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check on partial-year workbook logic and a short recommendation using statement evidence"
  },
  {
    id: "u08l06-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on how partial-year depreciation and method choice flow into financial statements"
  }
]
