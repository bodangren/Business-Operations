// Unit 1, Lesson 8 — Group Project Kickoff and Workbook Setup
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit01Data = UNIT_REF_MAP[1]
export const lesson08Data = {
  id: "u01l08-pbl-kickoff",
  title: "Project Milestone 1: Kickoff & Workbook Setup",
  sequence: 8,
  unitId: "unit01",
  learningObjectives: [
    "Retrieve your group's assigned startup dataset and starter workbook",
    "Rename, save, and organize your team's project workbook correctly",
    "Complete the first sheets (Transactions and Chart of Accounts) using your group's data",
    "Define your team's first draft claim about the business's financial readiness"
  ],
  keyConcepts: [
    "Group dataset assignment",
    "Workbook structure continuity",
    "Milestone 1 acceptance criteria",
    "Team roles and deliverables"
  ],
  durationEstimateMinutes: 90,
  pedagogicalApproach: ["Group project kickoff", "Workbook setup", "Milestone-driven progress"],
  rationale: "Students move from guided rehearsal to independent team work with their own startup dataset, preserving the exact workbook structure from Lesson 07.",
  status: "Ready"
}


export const lesson08Phases = [
  {
    id: "u01l08-milestone1",
    phaseName: "Milestone 1" as const,
    sequence: 1,
    description: "Kickoff, group dataset assignment, and workbook setup"
  }
]
