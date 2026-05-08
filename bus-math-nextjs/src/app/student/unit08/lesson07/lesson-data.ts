import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit08Data = UNIT_REF_MAP[8]
export const lesson07Data = {
  id: "u08l07",
  title: "Project Rehearsal: Depreciation Workbook with Shared Data",
  sequence: 7,
  unitId: "unit08",
  learningObjectives: [
    "Rehearse the exact workbook structure required for the depreciation project",
    "Categorize basic business entries into simple income statement and balance sheet lines",
    "Trace depreciation from the asset register into full but simple financial statements",
    "Apply the Definition of Done to evaluate workbook quality",
    "Practice peer audit focused on logic chain, method fit, and clarity"
  ],
  keyConcepts: [
    "Shared teacher dataset: every group uses the same data today",
    "Workbook map: Entry Categories, Asset Register, Partial-Year Depreciation, Method Comparison, Income Statement, Balance Sheet, Recommendation Evidence",
    "Evidence chain: depreciation expense and net book value must trace to register entries",
    "Statement connection: depreciation lowers net income and accumulated depreciation lowers net fixed assets",
    "Definition of Done: complete categories, linked formulas, balanced statements, defensible recommendation"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Guided rehearsal: shared data → entry categorization → statement build → audit → peer critique → handoff"
  ],
  rationale: "Students practice with one shared dataset so every group sees the same quality bar before the real project. Today is rehearsal — not the real project. Students categorize basic entries, connect depreciation to full but simple statements, trace recommendations to evidence, and identify what they must recreate independently next lesson.",
  status: "Ready"
}


export const lesson07Phases = [
  {
    id: "u08l07-phase1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Frame the lesson as a final guided rehearsal before independent project work begins",
  },
  {
    id: "u08l07-phase2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Orient to the shared workbook, name each sheet and statement evidence block, define success",
  },
  {
    id: "u08l07-phase3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Categorize basic entries and trace depreciation into the income statement and balance sheet",
  },
  {
    id: "u08l07-phase4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete statements, write recommendation and risk statements, identify transfer features",
  },
  {
    id: "u08l07-phase5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Comprehension check and peer critique tied to the Definition of Done",
  },
  {
    id: "u08l07-phase6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on rehearsal, name what carries into the project, preview next lesson changes",
  }
]
