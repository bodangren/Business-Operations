// PriceLab Challenge, Lesson 3 data - extracted from MCP curriculum database
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit06Data = UNIT_REF_MAP[6]
export const lesson03Data = {
  id: "mds5wn3l9qqkyg5py7l",
  title: "CVP Model Construction",
  sequence: 3,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Compare contribution margin dollars and ratios across multiple price options",
    "Calculate and rank break-even points using a shared fixed-cost baseline",
    "Make feasibility and target-profit decisions using capacity constraints and reverse solving"
  ],
  keyConcepts: [
    "Contribution margin ($ and %) as a pricing decision signal",
    "Break-even ladder analysis under shared fixed costs",
    "Capacity feasibility and target-profit reverse solving"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Decision-first CVP flow that moves from pricing options to investor-ready recommendations"
  ],
  rationale: "To move students from cost classification into defensible pricing decisions by connecting contribution margin, break-even, capacity, and target-profit reasoning.",
  status: "Draft"
}


// Lesson phases from MCP curriculum database
export const lesson03Phases = [
  {
    id: "phase_hook_3",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Capture attention with a pricing puzzle that requires CVP decision making",
    // component: "BreakEvenChart" (id: 17539274978052ynfhvoci) - To show an interactive break-even chart.
  },
  {
    id: "phase_introduction_3",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Refresh CVP fundamentals and bridge directly into pricing decisions",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Run contribution margin sprint, break-even ladder, capacity check, and reverse solve sequence",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - Used for CVP decision support and target solving.
  },
  {
    id: "phase_independent_practice_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build an Excel workbook that documents feasible pricing and target-profit recommendations",
    // component: "BreakEvenAnalysisCalculator" (id: mdsa6j3qdvl0zd3h4ll) - Supports independent CVP decision practice.
  },
  {
    id: "phase_assessment_3",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_3",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
