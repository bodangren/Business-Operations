// PriceLab Challenge, Lesson 5 — Goal Seek for Target-Profit Pricing
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit06Data = UNIT_REF_MAP[6]
export const lesson05Data = {
  id: "u06_l05_goal_seek_target_profit",
  title: "Goal Seek: Hit Your Profit Target",
  sequence: 5,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Use Goal Seek to find the price or volume needed to hit a target profit",
    "Set up a CVP model with input cells for price, volume, fixed costs, and variable cost per unit",
    "Run Goal Seek with correct parameters (Set Cell, To Value, By Changing Cell)",
    "Interpret Goal Seek results in business context",
    "Apply Goal Seek to test pricing scenarios for Sarah's PriceLab"
  ],
  keyConcepts: [
    "Goal Seek: reverse-engineering profit targets",
    "CVP model inputs: Price, Volume, Fixed Costs, Variable Cost",
    "Set Cell, To Value, By Changing Cell dialog parameters",
    "Common Goal Seek errors and troubleshooting",
    "Target-profit pricing strategy"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Business scenario driving tool necessity",
    "Direct instruction on Goal Seek mechanics",
    "Safe rehearsal before real workbook build",
    "Independent practice with CVP workbook"
  ],
  rationale: "Students learn to use Goal Seek to reverse-engineer pricing decisions—finding what price or volume they need to hit their profit goals.",
  status: "In Progress"
}


// Lesson phases
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Discover why Sarah needs Goal Seek to find her target price.",
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Master Goal Seek mechanics: Set Cell, To Value, By Changing Cell.",
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice the Goal Seek workflow in a safe simulator.",
  },
  {
    id: "phase_independent_practice_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the CVP model and use Goal Seek in Excel.",
  },
  {
    id: "phase_assessment_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Verify Goal Seek mechanics and interpret results.",
  },
  {
    id: "phase_closing_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on reverse-engineering profit targets.",
  }
]
