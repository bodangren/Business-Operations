export const lesson09Data = {
  id: "unit05_lesson09_pbl_m2",
  title: "PBL Milestone 2: Prototype + Rehearsal (PayDay Simulator)",
  sequence: 9,
  unitId: "unit05",
  learningObjectives: [
    "Build a working payroll prototype using XLOOKUP and IF logic",
    "Implement validations and conditional formatting error checks",
    "Document test scenarios and results; resolve defects",
    "Rehearse the demo and incorporate peer feedback"
  ],
  keyConcepts: [
    "Prototype development with realistic data",
    "Data validation and error checking",
    "Test design and change logs",
    "Presentation rehearsal and feedback"
  ],
  durationEstimateMinutes: 80,
  pedagogicalApproach: [
    "Hands-on prototype build with realistic data",
    "Validation and error-checking with documented tests",
    "Peer feedback using rubric and iterative revision",
  ],
  rationale: "Working prototypes and rehearsals prove business readiness. Validations, test notes, and peer feedback raise the quality before the final presentation.",
}

export const unit05Data = {
  id: "unit05",
  title: "PayDay Simulator",
  sequence: 5,
}

export const lesson09Phases = [
  {
    id: "pbl_m2",
    phaseName: "Assessment" as const,
    sequence: 1,
    description: "Build a working prototype implementing payroll logic and validations; rehearse presentation and incorporate peer feedback.",
  },
]
