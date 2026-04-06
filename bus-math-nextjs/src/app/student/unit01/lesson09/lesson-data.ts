// Unit 1, Lesson 9 — Group Project Completion and Rehearsal
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit01Data = UNIT_REF_MAP[1]
export const lesson09Data = {
  id: "u01l09-pbl-completion",
  title: "Project Milestone 2: Complete Workbook & Rehearse",
  sequence: 9,
  unitId: "unit01",
  learningObjectives: [
    "Complete all remaining sheets in your group's Smart Ledger workbook",
    "Verify all error checks and trial balance totals are working correctly",
    "Draft a recommendation using claim-evidence-risk structure",
    "Participate in peer critique and revise your work",
    "Rehearse your explanation with your team"
  ],
  keyConcepts: [
    "Workbook completeness",
    "Error check validation",
    "Claim-evidence-risk recommendation",
    "Peer critique and revision",
    "Presentation rehearsal"
  ],
  durationEstimateMinutes: 90,
  pedagogicalApproach: ["Group project completion", "Recommendation writing", "Peer feedback", "Rehearsal"],
  rationale: "Students finish their group's Smart Ledger workbook, write a structured recommendation, get peer feedback, and rehearse their explanation for the final presentation.",
  status: "Ready"
}


export const lesson09Phases = [
  {
    id: "u01l09-milestone2",
    phaseName: "Independent Practice" as const,
    sequence: 1,
    description: "Complete workbook, write recommendation, peer critique, and rehearsal"
  }
]
