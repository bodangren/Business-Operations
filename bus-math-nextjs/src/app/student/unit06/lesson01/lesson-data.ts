import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit06Data = UNIT_REF_MAP[6]
export const lesson01Data = {
  id: "u6-l1",
  title: "Launch: The Pricing Problem",
  sequence: 1,
  unitId: "u6",
  learningObjectives: [
    "Identify Sarah's pricing problem and why profit margins dropped despite higher revenue",
    "Explain why price is both a math decision and a market decision",
    "Recognize the three pillars of strategic pricing: profitable, competitive, defensible"
  ],
  keyConcepts: [
    "Profit paradox",
    "Target-profit pricing",
    "Market-competitive pricing",
    "Pricing scoreboard"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Launch with founder problem narrative",
    "Establish pricing scoreboard",
    "Preview the full unit journey"
  ],
  rationale: "Launch the PriceLab Challenge by making Sarah's pricing problem feel real and urgent. Establish the pricing scoreboard (profitable, competitive, defensible) as the unit's north star.",
  status: "Published"
}


export const lesson01Phases = [
  {
    id: "phase_hook_1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Meet Sarah and discover why her growing business is making less money",
  },
  {
    id: "phase_introduction_1",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Establish the pricing scoreboard and unit question",
  },
  {
    id: "phase_guided_practice_1",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Explore what happens when pricing decisions change",
  },
  {
    id: "phase_independent_practice_1",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Make bounded pricing decisions and see consequences",
  },
  {
    id: "phase_assessment_1",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Exit ticket on founder problem and pricing scoreboard",
  },
  {
    id: "phase_closing_1",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Restate unit question and preview what's next",
  }
]
