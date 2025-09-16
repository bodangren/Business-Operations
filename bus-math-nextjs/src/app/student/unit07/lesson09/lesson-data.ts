export const lesson09Data = {
  id: "u07_l09_pbl_m2",
  title: "PBL Milestone 2: Prototype + Rehearsal",
  sequence: 9,
  unitId: "unit07",
  learningObjectives: [
    "Build a working prototype on realistic data",
    "Implement dynamic method switching (SLN/DDB, FIFO/LIFO)",
    "Add validations and error checks; document test scenarios",
    "Rehearse and incorporate peer feedback"
  ],
  keyConcepts: [
    "Dynamic method switching with INDEX/MATCH and validation",
    "SLN vs. DDB depreciation; FIFO vs. LIFO inventory",
    "Test scenarios, error checks, and documentation",
    "Rehearsal techniques and feedback integration"
  ],
  pedagogicalApproach: [
    "Hands-on prototype build followed by structured rehearsal and critique"
  ],
  rationale: "Working prototypes and rehearsed stories build trust. Validated models and clear explanations show leaders that your recommendations are reliable.",
  durationEstimateMinutes: 80,
  status: "Planned"
}

export const unit07Data = {
  id: "unit07",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

export const lesson09Phases = [
  {
    id: "pbl_m2",
    phaseName: "Assessment" as const,
    sequence: 1,
    description: "Prototype build, testing, and rehearsal with peer critique"
  }
]
