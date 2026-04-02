// PriceLab Challenge, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "mds5wn3u12hthwufk8jj",
  title: "Data Tables: Sensitivity Analysis",
  sequence: 6,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Build a one-variable Data Table to see how profit changes across a range of prices or volumes",
    "Build a two-variable Data Table to see profit changes across combinations of price and volume",
    "Interpret sensitivity results to identify which inputs matter most",
    "Communicate pricing risk using the sensitivity matrix"
  ],
  keyConcepts: [
    "One-variable Data Table for single-input sensitivity",
    "Two-variable Data Table for dual-input matrix",
    "Data Table setup: row input cell vs. column input cell",
    "Common Data Table errors and troubleshooting",
    "Sensitivity interpretation and pricing risk communication"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Business scenario driving tool necessity",
    "Direct instruction on Data Table mechanics",
    "Safe rehearsal before real workbook build",
    "Independent practice with sensitivity analysis"
  ],
  rationale: "Students learn to use Data Tables to answer 'What-If' questions instantly—seeing how profit changes across many price/volume combinations at once.",
  status: "Draft"
}

export const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "PriceLab Challenge",
  sequence: 6
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Witness the power of 'What-If' analysis: See every pricing outcome at once.",
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Master Data Table mechanics: One-variable and two-variable sensitivity.",
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice the Data Table setup in a safe simulator.",
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the Sensitivity Matrix in your Excel workbook.",
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Verify Data Table mechanics and interpret pricing risk.",
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on sensitivity analysis and prepare for integration.",
  }
]
