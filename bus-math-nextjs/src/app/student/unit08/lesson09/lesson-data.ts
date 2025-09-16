// Unit 08 — PBL Lesson 09 (Single Phase)
export const lesson09Data = {
  id: "u08_l09_pbl_m2",
  title: "PBL Milestone 2: Prototype + Rehearsal",
  sequence: 9,
  unitId: "unit08",
  learningObjectives: [
    "Build a working prototype with scenario switching",
    "Create one- and two-variable sensitivity tables",
    "Demonstrate validation and error checks using test scenarios",
    "Rehearse and incorporate structured peer feedback"
  ],
  keyConcepts: [
    "Scenario Manager and driver selection",
    "Sensitivity analysis with data tables",
    "Validation rules and test planning",
    "Iterative improvement through peer critique"
  ],
  durationEstimateMinutes: 80,
  pedagogicalApproach: [
    "Guided build of core features",
    "Peer critique using structured rubric",
    "Timed rehearsal with improvement cycle"
  ],
  rationale: "A working prototype proves your ideas. Rehearsal and peer feedback make your model clearer, more accurate, and presentation‑ready.",
}

export const unit08Data = {
  id: "unit08",
  title: "Year‑1 Startup Model",
  sequence: 8,
}

export const lesson09Phases = [
  {
    id: "pbl_m2",
    phaseName: "Assessment" as const,
    sequence: 1,
    description: "Build a working prototype implementing scenario and sensitivity features. Rehearse, collect peer feedback, and improve.",
  },
]
