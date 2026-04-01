// PriceLab Challenge, Lesson 4 data - Scenario Comparison & Sensitivity Analysis
export const lesson04Data = {
  id: "mds5wn3okuxm9d9w5ip", 
  title: "Scenario Comparison & Sensitivity Reasoning",
  sequence: 4,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Compare multiple pricing scenarios using CVP reasoning",
    "Analyze how changes in price, volume, and costs affect profitability",
    "Defend a pricing recommendation using contribution margin analysis",
    "Identify which variables matter most in pricing decisions"
  ],
  keyConcepts: [
    "Scenario comparison using contribution margin",
    "Sensitivity reasoning: which inputs shift break-even most",
    "Trade-offs between pricing strategies",
    "Structured tables for comparing multiple pricing options"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Concrete scenario analysis with TechStart data",
    "Structured comparison tables showing price/volume/cost trade-offs",
    "Manual calculation practice before Excel automation"
  ],
  rationale: "Before building automated Excel tools, students must understand how to compare scenarios manually. This builds intuition for what Goal Seek and Data Tables will automate in Lesson 05.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases - Scenario Comparison Focus
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Compare two pricing paths and see which one actually works.",
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Build structured comparison tables to analyze multiple scenarios.",
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Add a meaningful complication: competitor response and market constraints.",
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Compare scenarios algorithmically with varied numbers and automatic checking.",
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Exit ticket on scenario comparison and sensitivity reasoning.",
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the best path forward and preview Goal Seek automation.",
  }
]
