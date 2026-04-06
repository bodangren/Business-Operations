// Month-End Wizard, Lesson 09 data - Completion and Rehearsal
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit02Data = UNIT_REF_MAP[2]
export const lesson09Data = {
  id: "unit02_lesson09",
  title: "Complete Workbook and Rehearse Demo",
  sequence: 9,
  unitId: "unit02",
  learningObjectives: [
    "Complete all remaining workbook sheets from your group's scenario",
    "Build a recommendation statement with three cited workbook numbers and one risk acknowledgment",
    "Run scenario testing and document checks on your workbook",
    "Conduct peer critique and incorporate at least one revision before final presentation"
  ],
  keyConcepts: [
    "Evidence chain completion from data through financial statements",
    "Recommendation structure: claim, evidence, risk",
    "Peer feedback as revision input, not formality",
    "Milestone 2 acceptance criteria"
  ],
  durationEstimateMinutes: 60,
  pedagogicalApproach: [
    "Group-project milestone: workbook completion and testing",
    "Peer critique with required revision move",
    "Recommendation writing with cited evidence"
  ],
  rationale: "Teams finish their project workbook, test their analysis, write a defensible recommendation, and rehearse their demo with peer feedback. This lesson bridges the kickoff setup from Lesson 08 and the final presentation in Lesson 10.",
  status: "Draft"
}


// Milestone-style lesson (no six-phase structure)
export const lesson09Phases = [
  {
    id: "milestone_2",
    phaseName: "Milestone 2" as const,
    sequence: 1,
    description: "Complete workbook, write recommendation, run peer critique, and rehearse demo."
  }
]
