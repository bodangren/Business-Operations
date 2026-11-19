// Data-Driven Café, Lesson 5: Data Cleaning and Analysis
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson05Data = {
  id: "u04_l05_data_cleaning",
  title: "Data Cleaning and Analysis",
  sequence: 5,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Identify exact duplicate records",
    "Clean day labels with TRIM and PROPER",
    "Summarize the eight clean weekend records",
  ],
  keyConcepts: [
    "Point-of-sale records",
    "Exact duplicates",
    "Historical waste rate",
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Use excel-lessons skill: business pressure first, then tool mechanics, safe rehearsal, workbook sprint"
  ],
  rationale: "Clean records support reliable forecasts.",
  status: "Revised"
}


// Excel-lessons skill uses standard six-phase names
export const lesson05Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Business scenario where data cleaning matters for investor decisions"
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Data cleaning patterns, Excel tool locations, common failure modes"
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice cleaning logic before touching the real workbook"
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the cleaned dataset with verification checkpoints"
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check and business communication artifact"
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize cleaning work, preview statistical analysis"
  }
]
