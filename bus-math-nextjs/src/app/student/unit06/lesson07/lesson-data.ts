// PriceLab Challenge, Lesson 7 data - Project Rehearsal
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit06Data = UNIT_REF_MAP[6]
export const lesson07Data = {
  id: "mds5wn3xm9hisij8jqf",
  title: "Project Rehearsal: Shared Workbook, Evidence Chain, and Quality Standard",
  sequence: 7,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Rehearse the exact seven-sheet workbook structure that every group will reuse in the Unit 06 project",
    "Trace a pricing recommendation back through the evidence chain from Dashboard to CostSetup",
    "Use a Definition of Done checklist to audit workbook accuracy, clarity, and investor readiness",
    "Identify which structures, checks, and communication moves must transfer into Lessons 8-10"
  ],
  keyConcepts: [
    "Shared rehearsal data vs. independent project data",
    "Evidence chain: CostSetup → PriceOptions → Feasibility → TargetProfit → PriceSensitivity → ProfitMatrix → Dashboard",
    "Definition of Done for investor-ready workbooks",
    "Peer audit focused on logic chain, evidence, and clarity",
    "Transfer: what stays the same and what changes in the real project"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Guided rehearsal with one shared teacher-provided dataset for the whole class",
    "Audit-first workflow: inspect → trace → evaluate → polish",
    "Peer critique using explicit criteria tied to the Definition of Done"
  ],
  rationale: "Lesson 07 is a guided-practice version of the upcoming group project. Every student sees the same workbook structure, quality standard, and evidence chain before teams receive different scenarios in Lessons 8-10."
}


// Lesson phases aligned to the project-rehearsal skill contract
// Phase names follow the standard six-phase contract; descriptions reflect rehearsal focus
export const lesson07Phases = [
  {
    id: "phase_rehearsal_purpose_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Understand why the whole class rehearses with the same data before the independent project begins.",
  },
  {
    id: "phase_artifact_orientation_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Download the shared workbook, map every sheet to its job in the evidence chain, and define success.",
  },
  {
    id: "phase_guided_audit_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Trace the recommendation from Dashboard back to CostSetup using guided audit routines.",
  },
  {
    id: "phase_polish_transfer_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete weak spots, write recommendation and risk statements, and name what to carry into the project.",
  },
  {
    id: "phase_transfer_check_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate project-readiness through a comprehension check and peer critique.",
  },
  {
    id: "phase_reflection_handoff_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Lock in the quality standard and preview what changes when groups get their own scenarios.",
  }
]
