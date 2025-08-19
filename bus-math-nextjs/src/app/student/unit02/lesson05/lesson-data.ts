// Unit 2, Lesson 5 data - Advanced Month-End Automation: Scenario Engine & Validation
export const lesson05Data = {
  id: "unit02_lesson05",
  title: "Advanced Month-End Automation: Scenario Engine & Validation",
  sequence: 5,
  unitId: "unit02",
  learningObjectives: [
    "Build a scenario-driven adjusting entry engine using structured references",
    "Use XLOOKUP with error handling to map accounts to methods",
    "Implement SWITCH/IF logic for dynamic method selection",
    "Add robust data validation and audit checks for investor-ready reliability"
  ],
  keyConcepts: [
    "XLOOKUP with if_not_found for safer lookups",
    "SWITCH/IFS for dynamic method routing",
    "SUMIFS/SUMPRODUCT for multi-criteria aggregation",
    "Data validation and audit flags for month-end controls"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Hands-on scenario engine construction with TechStart cases",
    "Progressively enhance reliability with validation rules",
    "Professional standards: documentation, auditability, and investor trust"
  ],
  rationale: "Students deepen their Excel automation by building a dynamic month-end engine that adapts to new scenarios without breaking. They practice professional controls that build investor confidence.",
  status: "Draft"
}

export const unit02Data = {
  id: "unit02",
  title: "Unit 2: Month-End Wizard",
  sequence: 2
}

export const lesson05Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Stress test Sarah's month-end model: fragile vs robust under growth",
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Advanced automation: XLOOKUP + SWITCH + validation for professional reliability",
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build the scenario engine and validation system step-by-step",
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Advanced mastery challenges with dynamic updates and investor outputs",
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Professional mastery assessment: automation, validation, and judgment",
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis, CAP reflection, and preview of integration/dashboards",
  }
]

