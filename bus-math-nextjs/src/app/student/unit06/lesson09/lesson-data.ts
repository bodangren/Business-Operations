// PriceLab Challenge, Lesson 9 data - Group Project: Workbook Completion and Rehearsal
export const lesson09Data = {
  id: "mds5wn42nspfb8vlsea",
  title: "Complete the Workbook and Rehearse the Recommendation",
  sequence: 9,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Complete the remaining workbook sheets (TargetProfit, PriceSensitivity, ProfitMatrix, Dashboard) using your group's data",
    "Test your pricing recommendation under different price and volume conditions",
    "Write a clear recommendation statement using claim, evidence, and risk structure",
    "Use peer feedback to strengthen both the workbook model and the presentation"
  ],
  keyConcepts: [
    "Independent application of CVP analysis to a group-specific scenario",
    "Scenario testing and workbook quality control before presentation",
    "Claim-evidence-reasoning structure for business recommendations",
    "Peer critique as revision input, not a formality",
    "Milestone 2 acceptance criteria and submission standards"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Independent team work on group-specific datasets",
    "Milestone-driven workflow with explicit acceptance criteria",
    "Peer critique tied to revision before final presentation",
    "Workbook architecture identical to Lesson 07 rehearsal model"
  ],
  rationale: "Lesson 09 moves teams from early analysis into a complete workbook and rehearsed recommendation. Each group continues the same workbook from Lesson 08, finishes the remaining evidence sheets, tests their recommendation under different conditions, and practices explaining their reasoning with peer feedback. This rehearsal ensures teams enter Lesson 10 with a defensible model and a clear presentation."
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases aligned to the group-project skill contract
// Phase names follow the milestone-style structure for project lessons
export const lesson09Phases = [
  {
    id: "phase_continue_workbook_9",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reopen your group workbook from Lesson 08 and understand Milestone 2 goals.",
  },
  {
    id: "phase_complete_sheets_9",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Complete TargetProfit and PriceSensitivity sheets using your group's data.",
  },
  {
    id: "phase_dashboard_testing_9",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build the ProfitMatrix and Dashboard, then test your recommendation under different conditions.",
  },
  {
    id: "phase_recommendation_9",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Write your team's recommendation using claim, evidence, and risk structure.",
  },
  {
    id: "phase_peer_critique_9",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Exchange workbooks with another team, run peer critique, and revise based on feedback.",
  },
  {
    id: "phase_reflection_handoff_9",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on Milestone 2 progress, name what must carry into Lesson 10, and preview the final presentation.",
  }
]
