// Data-Driven Café, Lesson 1 data - Launch lesson for weekend-profit vs waste problem
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson01Data = {
  id: "u4-l1-launch",
  title: "Launch: Weekend Profit vs. Waste",
  sequence: 1,
  unitId: "u4-data-cafe",
  learningObjectives: [
    "Explain the café's weekend profit and waste dilemma in business terms",
    "Identify the key metrics on the unit scoreboard (profit, waste %, inventory, staffing)",
    "Predict which factors most influence weekend outcomes before formal analysis",
    "Recognize why data-driven decisions beat gut feelings for operational planning"
  ],
  keyConcepts: [
    "Weekend profit optimization",
    "Food waste percentage tracking",
    "Inventory vs. demand balancing",
    "Data-driven vs. intuition-based decisions"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Launch with founder problem video",
    "Establish scoreboard and decision frame",
    "Shared simulation for noticing business effects"
  ],
  rationale: "Launch the weekend-profit vs waste problem. Students should leave understanding the business tension before any statistical procedures.",
  status: "Draft"
}


export const lesson01Phases = [
  {
    id: "u4-l1-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Launch with Sarah's interview introducing the weekend-profit vs waste problem"
  },
  {
    id: "u4-l1-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Establish the unit scoreboard and weekend decision frame"
  },
  {
    id: "u4-l1-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Use shared data to notice business effects before formal calculation"
  },
  {
    id: "u4-l1-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Make bounded decisions within the launch scenario"
  },
  {
    id: "u4-l1-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Exit ticket on founder problem and scoreboard"
  },
  {
    id: "u4-l1-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Restate scoreboard and preview descriptive statistics"
  }
]
