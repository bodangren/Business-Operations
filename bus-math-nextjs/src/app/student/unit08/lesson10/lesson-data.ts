// Unit 08 — PBL Lesson 10 (Single Phase)
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit08Data = UNIT_REF_MAP[8]
export const lesson10Data = {
  id: "u08_l10_pbl_m3",
  title: "PBL Milestone 3: Fixed‑Asset Recommendation Presentations",
  sequence: 10,
  unitId: "unit08",
  learningObjectives: [
    "Present a clear depreciation recommendation using workbook evidence",
    "Communicate book value and expense timing logic with confidence",
    "Manage Q&A using asset register and schedule data",
    "Submit final files and reflect on what made the recommendation trustworthy"
  ],
  keyConcepts: [
    "Professional asset tracking communication standards",
    "Rubric‑aligned evaluation of depreciation logic and clarity",
    "Peer review for evidence quality and trustworthiness",
    "Final submission and portfolio readiness"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Live presentation with timeboxing",
    "Audience peer review by rubric category",
    "Reflective practice on evidence credibility"
  ],
  rationale: "Your presentation shows stakeholders they can trust your asset tracking and depreciation choices. Clear delivery, accurate workbook evidence, and thoughtful Q&A make your recommendation credible.",
}


export const lesson10Phases = [
  {
    id: "pbl_m3",
    phaseName: "Assessment" as const,
    sequence: 1,
    description: "Final presentations, audience peer review using rubric categories, and post‑presentation reflection on asset tracking credibility.",
  },
]
