import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit07Data = UNIT_REF_MAP[7]
export const lesson08Data = {
  id: "u07_l08_pbl_m1",
  title: "Group Project Kickoff: New Business, New Starter Workbook, Same Workbook Logic",
  sequence: 8,
  unitId: "unit07",
  learningObjectives: [
    "Define the inventory problem, scope, stakeholders, and success metrics for your assigned business",
    "Open and organize your group's assigned starter workbook using correct file conventions",
    "Confirm that the project workbook preserves the same sheet structure used in Lesson 07 rehearsal",
    "Review your group's beginning inventory, purchases, sales, and method assumptions inside the starter workbook",
    "Identify risks and assumptions with mitigation strategies"
  ],
  keyConcepts: [
    "Clear project definition aligned to business goals and inventory method selection",
    "Starter workbook assignment: each group works only with its assigned inventory workbook",
    "Workbook skeleton matches Lesson 07: ReadMe → Inputs → BeginningInventory → Purchases → Sales → Valuation → MethodCompare → Checks → Dashboard → Recommendation",
    "Evidence chain: every claim must cite specific workbook numbers",
    "Risk and assumption tracking with mitigation plans"
  ],
  pedagogicalApproach: [
    "Plan-first approach with a professional brief and workbook skeleton",
    "Milestone-driven progress with clear acceptance criteria"
  ],
  rationale: "A precise project definition and clean workbook structure help teams build faster, avoid mistakes, and communicate clearly to an executive audience. Each group now applies the inventory methods learned in Lessons 1-7 to a new business scenario.",
  durationEstimateMinutes: 55,
  status: "Planned"
}


export const lesson08Phases = [
  {
    id: "pbl_m1",
    phaseName: "Introduction" as const,
    sequence: 1,
    description: "Project definition, starter workbook assignment, workbook setup, and initial inventory analysis"
  }
]
