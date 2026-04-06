// Three-Statement Storyboard, Lesson 2 data - Income Statement Construction
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit03Data = UNIT_REF_MAP[3]
export const lesson02Data = {
  id: "mds5via0a28uttjod1",
  title: "Build the Income Statement",
  sequence: 2,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Construct an accurate Income Statement from trial balance or journal data",
    "Group revenue and expense accounts into correct Income Statement categories",
    "Interpret Net Income as the profitability signal for business decisions"
  ],
  keyConcepts: [
    "Income Statement construction from trial balance data",
    "Revenue and expense grouping logic",
    "Net Income calculation and interpretation"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction on building Income Statement from trial balance data",
    "Worked examples with visible intermediate values",
    "Algorithmic deliberate practice for mastery"
  ],
  rationale: "To equip students with the ability to prepare and interpret a basic income statement before automating it in Excel.",
  status: "Draft"
}


// Lesson phases following the accounting-principles skill contract
export const lesson02Phases = [
  {
    id: "phase_1_recycle_2",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to Unit 01 journal entries and surface the friction point: a list of transactions is not a financial statement.",
  },
  {
    id: "phase_2_explicit_2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Name the method, model the procedure step by step, and walk through a worked example with visible intermediate values and grouping logic.",
  },
  {
    id: "phase_3_deepen_2",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Add a meaningful complication (more accounts, rounding, or ambiguous items), reduce prompts, and shift toward authentic accounting notation.",
  },
  {
    id: "phase_4_mastery_2",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Repeated income statement construction practice with varied numbers, automatic checking, feedback after submission, and a mastery target.",
  },
  {
    id: "phase_5_assessment_2",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short MCQ exit ticket on income statement construction, interpretation, and common misconceptions.",
  },
  {
    id: "phase_6_reflection_2",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on confidence and understanding, connect to the business problem, identify method signals, and preview balance sheet effects.",
  }
]
