// PriceLab Challenge, Lesson 8 data - Group Project Kickoff
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit06Data = UNIT_REF_MAP[6]
export const lesson08Data = {
  id: "mds5wn3z0n0trxywpene",
  title: "Project Kickoff: Group Workbook Setup and First Analysis",
  sequence: 8,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Open and organize your group's assigned pricing workbook with correct naming conventions",
    "Classify each cost item as fixed or variable in the CostSetup sheet",
    "Complete PriceOptions and Feasibility sheets using your group's specific dataset",
    "Write one draft recommendation statement supported by early workbook evidence"
  ],
  keyConcepts: [
    "Group-specific business scenarios vs. shared rehearsal data",
    "Fixed costs, variable costs, and contribution margin in a new context",
    "Workbook architecture continuity from Lesson 07",
    "Evidence chain: CostSetup → PriceOptions → Feasibility → Dashboard",
    "Milestone 1 acceptance criteria and submission standards"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Independent team work on group-specific datasets",
    "Milestone-driven workflow with explicit acceptance criteria",
    "Workbook architecture identical to Lesson 07 rehearsal model"
  ],
  rationale: "Lesson 08 moves teams from guided rehearsal into their own assigned scenario. Each group receives a unique business dataset but uses the exact same workbook structure from Lesson 07. Today's goal is planning the work, classifying costs, completing the first analysis sheets, and writing an early recommendation statement."
}


// Lesson phases aligned to the group-project skill contract
// Phase names follow the milestone-style structure for project lessons
export const lesson08Phases = [
  {
    id: "phase_kickoff_context_8",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Understand your group's business scenario, constraints, and target outcome.",
  },
  {
    id: "phase_workbook_assignment_8",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Download the correct group workbook, rename it, and map each sheet to its job.",
  },
  {
    id: "phase_cost_classification_8",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Sort every cost item into fixed or variable and verify totals update correctly.",
  },
  {
    id: "phase_first_analysis_8",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete PriceOptions and Feasibility sheets using your group's data.",
  },
  {
    id: "phase_milestone_check_8",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Check work against Milestone 1 acceptance criteria and write a draft recommendation.",
  },
  {
    id: "phase_reflection_handoff_8",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on progress, name what must carry into Lesson 9, and preview the next milestone.",
  }
]
