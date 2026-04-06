// Data-Driven Café, Lesson 9 data - extracted from MCP curriculum database
import { LessonProgressPhaseName } from "@/contexts/LessonProgressContext"

import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson09Data = {
  id: "mds5vu0j0lk9gw4jkfkj",
  title: "Mock Panel & Revision: Presentation Rehearsal",
  sequence: 9,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Build a working prototype with forecast logic and error validations",
    "Document test scenarios and results",
    "Rehearse a 4-5 minute presentation and incorporate peer feedback",
    "Refine the recommendation based on critique"
  ],
  keyConcepts: [
    "Prototype testing and validation",
    "Test scenario documentation",
    "Peer feedback and iterative revision",
    "Presentation rehearsal"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Team-based prototype completion with peer critique and rehearsal"
  ],
  rationale: "Build a working prototype that uses your dataset and forecast logic. Add validations to catch errors. Rehearse your 4-5 minute story and gather peer feedback to make your message clear and convincing.",
  status: "Revised"
}


export const lesson09Phases: { id: string; phaseName: LessonProgressPhaseName; sequence: number; description: string }[] = [
  {
    id: "phase_project_milestone",
    phaseName: "Project Milestone",
    sequence: 1,
    description: "Prototype completion and presentation rehearsal"
  }
]
