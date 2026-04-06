// Fixed Assets and Depreciation, Lesson 2 data - accounting-principles skill
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit08Data = UNIT_REF_MAP[8]
export const lesson02Data = {
  id: "mds5xnq5bdjcov1vd1s",
  title: "When Does a Cost Become an Asset? — Capitalization, Useful Life, and Salvage Value",
  sequence: 2,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Decide whether a purchase should be capitalized as an asset or expensed immediately",
    "Estimate useful life and salvage value for common business assets",
    "Calculate the depreciable base (Cost - Salvage Value) for an asset",
    "Explain how accumulated depreciation builds over time"
  ],
  keyConcepts: [
    "Capitalization vs. expense — the matching principle in action",
    "Useful life: how long an asset provides value",
    "Salvage value: what the asset is worth at the end",
    "Depreciable base = Cost - Salvage Value",
    "Accumulated depreciation grows each year as the asset's cost is allocated"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Concrete asset-purchase examples before abstract definitions",
    "Step-by-step classification and depreciable-base calculation",
    "Algorithmic deliberate practice with immediate feedback"
  ],
  rationale: "Lesson 02 teaches the rules for deciding when a cost becomes a long-term asset (capitalization) versus an immediate expense. Students learn to estimate useful life and salvage value, calculate the depreciable base, and understand how accumulated depreciation builds. This is the foundation for all depreciation methods covered in Lessons 03 and 04.",
}


export const lesson02Phases = [
  {
    id: "phase_recycle_2",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to Lesson 01's equipment purchase. Sarah needs to classify three new purchases — which are assets and which are expenses?",
  },
  {
    id: "phase_instruction_2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Explicit instruction: capitalization rules, useful life, salvage value, and depreciable base with worked examples.",
  },
  {
    id: "phase_deepen_2",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Mixed purchase scenarios with reduced scaffolding. Students classify and explain choices, not just compute.",
  },
  {
    id: "phase_mastery_2",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Algorithmic deliberate practice: classify purchases as capitalize or expense with streak tracking and reteach guidance.",
  },
  {
    id: "phase_exit_2",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short MCQ exit ticket on capitalization vocabulary, useful life, salvage value, and reasoning.",
  },
  {
    id: "phase_reflection_2",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on confidence and understanding. Connect to the business problem. Preview straight-line depreciation.",
  }
]
