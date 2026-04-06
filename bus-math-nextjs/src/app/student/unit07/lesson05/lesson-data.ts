import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit07Data = UNIT_REF_MAP[7]
export const lesson05Data = {
  id: "u07l05",
  title: "Build the Inventory Method Workbook",
  sequence: 5,
  unitId: "u07",
  learningObjectives: [
    "Build a workbook that computes COGS and ending inventory for FIFO, LIFO, Specific ID, and Weighted Average",
    "Use Excel Tables and structured references so the model scales as transactions grow",
    "Implement method-specific Excel algorithms (layer consumption, lot lookup, and pooled-rate logic) with clear helper blocks",
    "Document assumptions so an investor can audit the method comparison"
  ],
  keyConcepts: [
    "Dynamic method selector drives all four methods from one control cell",
    "Tables + structured references replace fixed ranges",
    "Algorithm correctness is method-specific: FIFO/LIFO order, Specific ID lot matching, WA pooled rate",
    "Professional workbooks explain choices beside the outputs"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Business pressure hook",
    "Tool anatomy with failure modes",
    "Safe rehearsal simulator",
    "Real workbook build with verification checkpoints"
  ],
  rationale: "Students move from correct hand calculations to a working method-comparison workbook. The same logic they learned by hand in Lessons 2-4 now lives in one file that switches methods, scales with data, and earns trust.",
  status: "Complete"
}


export const lesson05Phases = [
  {
    id: "u07l05-p1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Open with a business scenario where Sarah needs to compare methods fast under investor scrutiny",
  },
  {
    id: "u07l05-p2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Teach the Excel algorithms for FIFO, LIFO, Specific ID, and Weighted Average",
  },
  {
    id: "u07l05-p3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Rehearse each workbook sheet with guided formula decoding before touching the real workbook",
  },
  {
    id: "u07l05-p4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real method-comparison workbook and verify all four algorithms",
  },
  {
    id: "u07l05-p5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check plus a brief artifact task: defend your method recommendation",
  },
  {
    id: "u07l05-p6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on what the tool added and preview the dashboard integration in Lesson 06",
  }
]
