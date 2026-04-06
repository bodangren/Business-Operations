// Unit 1, Lesson 10 — Final Presentation and Submission
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit01Data = UNIT_REF_MAP[1]
export const lesson10Data = {
  id: "u01l10-pbl-final",
  title: "Project Milestone 3: Final Presentation & Submission",
  sequence: 10,
  unitId: "unit01",
  learningObjectives: [
    "Present your team's Smart Ledger and recommendation to the class",
    "Submit your final workbook and presentation notes",
    "Reflect on what you learned about clean books and investor trust"
  ],
  keyConcepts: [
    "Final presentation",
    "Workbook submission",
    "Investor readiness",
    "Reflection on trust and control"
  ],
  durationEstimateMinutes: 90,
  pedagogicalApproach: ["Final presentations", "Submission", "Reflection"],
  rationale: "Students present their final Smart Ledger, submit their work, and reflect on the unit's core lessons about clean books and investor trust.",
  status: "Ready"
}


export const lesson10Phases = [
  {
    id: "u01l10-milestone3",
    phaseName: "Independent Practice" as const,
    sequence: 1,
    description: "Final presentation, submission, and reflection"
  }
]
