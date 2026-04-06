// Method Comparison and Investor-Ready Summary, Lesson 6 — Unit 08 (Fixed Assets and Depreciation)
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit08Data = UNIT_REF_MAP[8]
export const lesson06Data = {
  id: "u08l06",
  title: "Method Comparison and Investor-Ready Summary",
  sequence: 6,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Compare straight-line and double-declining balance depreciation side by side in Excel",
    "Build workbook checks so accumulated depreciation and book value stay believable",
    "Explain the statement impact of each depreciation method on the income statement and balance sheet",
    "Defend a depreciation policy recommendation using workbook evidence"
  ],
  keyConcepts: [
    "Method comparison: straight-line vs. double-declining balance",
    "Salvage value floor in DDB calculations",
    "Workbook checks: Book Value = Cost − Accumulated Depreciation",
    "Statement impact: expense timing, net income, and asset values",
    "Professional recommendation structure: claim, evidence, risk"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Investor scenario hook where method choice matters",
    "Direct instruction on comparison workbook anatomy and formula patterns",
    "Safe rehearsal of method comparison logic before live Excel build",
    "Guided workbook sprint with verification checkpoints",
    "Technical check and recommendation defense artifact"
  ],
  rationale: "Students extend their asset register workbook from Lesson 05 to compare depreciation methods side by side. They learn how method choice affects expense timing, net income, and book value — then defend a depreciation policy using workbook evidence. This workbook becomes the foundation for the project rehearsal and group project.",
  status: "Draft"
}


export const lesson06Phases = [
  {
    id: "u08l06-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Investors ask Sarah which depreciation method TechStart uses — she needs a side-by-side comparison ready"
  },
  {
    id: "u08l06-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Anatomy of the method comparison workbook: comparison sheet layout, formula patterns, and common traps"
  },
  {
    id: "u08l06-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Rehearse method comparison logic in a safe simulator before touching Excel"
  },
  {
    id: "u08l06-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real method comparison workbook with verification checkpoints and Definition of Done"
  },
  {
    id: "u08l06-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check on workbook logic and a short artifact task defending a depreciation method recommendation"
  },
  {
    id: "u08l06-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on what the comparison workbook added, name what you can now do faster, and preview the project rehearsal"
  }
]
