// Fixed Assets and Depreciation, Lesson 1 data - Launch lesson
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit08Data = UNIT_REF_MAP[8]
export const lesson01Data = {
  id: "mds5xnq0hosguvwljqw",
  title: "Sarah's Equipment Purchase — Why Long-Term Assets Are Different",
  sequence: 1,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Explain why long-term asset costs are not treated like everyday expenses",
    "Identify the three parts of the depreciation scoreboard: cost, accumulated depreciation, and book value",
    "Predict how a major equipment purchase affects a business over time",
    "Connect professional asset tracking to investor credibility"
  ],
  keyConcepts: [
    "Long-term assets vs. everyday expenses",
    "Book Value = Cost - Accumulated Depreciation",
    "Why investors expect professional asset tracking",
    "The difference between buying an asset and expensing a cost"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Launch with Sarah's new-equipment purchase problem and investor expectations",
    "Use video, prediction, and one bounded interactive to build tension before formal rules"
  ],
  rationale: "Lesson 01 launches the fixed-asset problem by showing Sarah facing a real equipment purchase decision. Students see why long-term assets cannot be treated like regular expenses, learn the core scoreboard (cost, accumulated depreciation, book value), and feel the tension between spending money now and tracking value over time. No formulas or workbook builds yet — just the problem that makes depreciation necessary."
}


// Lesson phases aligned to the launch-lesson skill contract
export const lesson01Phases = [
  {
    id: "phase_hook_fixed_asset_1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Sarah's interview: TechStart is expanding and needs new equipment. Why can't she just expense it?",
  },
  {
    id: "phase_scoreboard_1",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Name the scoreboard: cost, accumulated depreciation, and book value. Scan the system.",
  },
  {
    id: "phase_simulation_1",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Predict what happens to book value over time before the formal reveal.",
  },
  {
    id: "phase_choice_1",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Make 1-2 choices about how to track an asset purchase and see the consequences.",
  },
  {
    id: "phase_exit_1",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short MCQ exit ticket on the founder problem, scoreboard, and core distinctions.",
  },
  {
    id: "phase_reflection_1",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Restate Book Value = Cost - Accumulated Depreciation. Preview capitalization and depreciation logic.",
  }
]
