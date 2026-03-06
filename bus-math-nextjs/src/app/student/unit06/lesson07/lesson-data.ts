// PriceLab Challenge, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5wn3xm9hisij8jqf",
  title: "Production Studio: Completion, QA, and Presentation Readiness",
  sequence: 7,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Audit the Lesson 06 dashboard workbook for accuracy, clarity, and investor readiness",
    "Use a Definition of Done checklist to verify scenario switching, summary tables, charts, and notes",
    "Prepare a polished workbook that models the standard students will apply in the Unit 06 project"
  ],
  keyConcepts: [
    "Exact-match lookups with IFNA or IFERROR",
    "Scenario summary tables and dashboard tie-outs",
    "Validation checks, reconciliation, and visible assumptions",
    "Peer audit and presentation readiness"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Production sprint flow: audit -> fix -> polish -> rehearse",
    "Peer audit using a Definition of Done checklist and concrete workbook evidence"
  ],
  rationale: "Students use this final guided lesson to harden their TechStart workbook before they begin the more independent group project in Lessons 8-10.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "See what investors notice first when a workbook is polished versus fragile.",
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn the Definition of Done for the final TechStart workbook before the capstone project begins.",
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Run a guided audit on scenario toggles, summary tie-outs, and visible error checks.",
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete the final QA sprint and polish the workbook for presentation and project handoff.",
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate readiness through a short audit check and peer review.",
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on workbook quality and preview the independent group project in Lessons 8-10.",
  }
]
