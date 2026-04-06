// Data-Driven Café, Lesson 10 data - extracted from MCP curriculum database
import { LessonProgressPhaseName as LessonPhase } from "@/contexts/LessonProgressContext"

import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson10Data = {
  id: "mds5vu0m46dubjfe22",
  title: "Public Presentation: Café Management Showcase",
  sequence: 10,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Deliver a 4-5 minute presentation with confidence and clarity",
    "Defend the recommendation using evidence from the workbook",
    "Respond to audience questions about methodology and assumptions",
    "Reflect on what made the recommendation believable"
  ],
  keyConcepts: [
    "Professional presentation delivery",
    "Evidence-based business recommendations",
    "Stakeholder communication and Q&A",
    "Project reflection and learning synthesis"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Final presentation with peer review and reflection"
  ],
  rationale: "Deliver your 4-5 minute presentation to the class. Show that your model is accurate and your plan is realistic. Review other teams using the rubric, and reflect on your performance.",
  status: "Revised"
}


export const lesson10Phases: { id: string; phaseName: LessonPhase; sequence: number; description: string }[] = [
  {
    id: "phase_project_presentation",
    phaseName: "Project Presentation" as LessonPhase,
    sequence: 1,
    description: "Final presentations and peer review"
  }
]
