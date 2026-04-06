import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit07Data = UNIT_REF_MAP[7]
export const lesson10Data = {
  id: "u07_l10_pbl_m3",
  title: "Final Presentation: Defend Ending Inventory, Method Choice, and Business Recommendation",
  sequence: 10,
  unitId: "unit07",
  learningObjectives: [
    "Present a clear inventory valuation story backed by accurate workbook evidence",
    "Demonstrate method comparison and defend your recommended inventory method",
    "Address risks and assumptions with confident Q&A using cited workbook numbers",
    "Submit final deliverables and reflect on what made your recommendation believable"
  ],
  keyConcepts: [
    "Executive presentation: Problem → Analysis → Recommendation",
    "Every claim must cite exact numbers from your group's workbook",
    "Inventory method choice affects COGS, ending inventory, and reported profit",
    "Rubric-aligned peer critique and structured reflection",
    "Timeboxing and Q&A readiness for an authentic business audience"
  ],
  pedagogicalApproach: [
    "Public presentation with authentic audience and rubric-aligned feedback",
    "Reflection on method choice, evidence quality, and reporting credibility"
  ],
  rationale: "Clear, concise presentations translate inventory analysis into business action. Sharing your model and reasoning earns trust and helps leaders make confident decisions about inventory valuation.",
  durationEstimateMinutes: 45,
  status: "Planned"
}


export const lesson10Phases = [
  {
    id: "pbl_m3",
    phaseName: "Assessment" as const,
    sequence: 1,
    description: "Final presentations, submission, and reflection on method choice and evidence"
  }
]
