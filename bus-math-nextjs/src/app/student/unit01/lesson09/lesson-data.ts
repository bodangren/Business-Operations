// Unit 1, Lesson 9 — Single-phase PBL milestone setup
export const lesson09Data = {
  id: "u01l09-pbl-proto",
  title: "PBL Milestone 2: Prototype + Rehearsal",
  sequence: 9,
  unitId: "unit01",
  learningObjectives: [
    "Build a working prototype that implements the planned Excel controls",
    "Test validations and scenarios; document fixes and changes",
    "Rehearse presentation flow and incorporate peer feedback"
  ],
  keyConcepts: [
    "Prototype completeness against acceptance criteria",
    "Validation, error-checks, and test documentation",
    "Rehearsal and peer feedback integration"
  ],
  durationEstimateMinutes: 60,
  pedagogicalApproach: ["Rapid prototyping", "Peer feedback", "Structured rehearsal"],
  rationale: "Students demonstrate a functional build and strengthen it through testing and rehearsal.",
  status: "Planned"
}

export const unit01Data = {
  id: "unit01",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

export const lesson09Phases = [
  {
    id: "u01l09-p1",
    phaseName: "Assessment" as const,
    sequence: 1,
    description: "Complete a working prototype and rehearse with peer feedback"
  }
]

