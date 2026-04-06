import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit02Data = UNIT_REF_MAP[2]
export const lesson10Data = {
  id: "unit02_lesson10",
  title: "PBL Milestone 3: Final Innovation Fair Demo",
  sequence: 10,
  unitId: "unit02",
  learningObjectives: [
    "Deliver a polished 4-5 minute demo with a clear business storyline",
    "Submit a final workbook with accurate financials, automation, and a defensible recommendation",
    "Reflect on how the team balanced speed, accuracy, and usability"
  ],
  keyConcepts: [
    "Executive communication and audience engagement",
    "Workbook credibility through evidence-backed claims",
    "Professional standards for financial automation demos"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Public presentation, peer assessment, and metacognitive reflection"
  ],
  rationale: "Teams present their completed Month-End Wizard at the Innovation Fair, submit final artifacts, and reflect on what they learned about automation, controls, and usability.",
  status: "Draft"
}


export const lesson10Phases = [
  {
    id: "pbl_m3",
    phaseName: "Assessment" as const,
    sequence: 1,
    description: "PBL Milestone 3 — Final Innovation Fair Demo: polished presentations, workbook submission, and project reflection."
  }
]
