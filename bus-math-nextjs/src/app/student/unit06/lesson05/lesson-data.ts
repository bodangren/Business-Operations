// PriceLab Challenge, Lesson 5 — Advanced Excel Automation for Unit 06 (CVP)
export const lesson05Data = {
  id: "u06_l05_advanced_cvp_automation",
  title: "Advanced CVP Automation: Scenario Runner & Data Tables",
  sequence: 5,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Build professional one- and two-variable Data Tables for CVP sensitivity analysis",
    "Implement dynamic method switching (price, units, fixed, variable) to hit profit targets",
    "Add robust validation checks for out-of-range values, missing IDs, and stale dates",
    "Document formulas with structured references and error handling for investor-ready models",
    "Communicate results with a concise executive summary that informs pricing decisions"
  ],
  keyConcepts: [
    "Data Table (one- and two-variable) what-if analysis",
    "Goal Seek vs. Scenario analysis in pricing models",
    "Contribution margin, operating leverage, and margin of safety",
    "Structured references (Table[Column]) and IFERROR safeguards",
    "Professional standards: validation, auditability, documentation"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Direct instruction on advanced Excel automation",
    "Guided build with validation rules and error handling",
    "Independent mastery challenges with edge-case data"
  ],
  rationale: "Students deepen CVP automation by building a scenario runner with Data Tables and strong validation to produce investor-ready insights.",
  status: "Ready"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Discover why Sarah needs a 'Pricing Map' to survive a competitor's price war.",
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Master the mechanics of Data Tables: Mapping 50 scenarios in 5 seconds.",
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Manually bridge the gap between simple math and complex Excel automation.",
  },
  {
    id: "phase_independent_practice_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the 'Sensitivity Engine' of Sarah's PriceLab workbook in Excel.",
  },
  {
    id: "phase_assessment_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Stress-test your workbook: Can your pricing map handle real-world pressure?",
  },
  {
    id: "phase_closing_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on how automation transforms you from a calculator to a strategic advisor.",
  }
]
