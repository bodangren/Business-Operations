// Data-Driven Café, Lesson 8 - Group Project Kickoff
import type { LessonPhaseName } from "@/types/lesson"

import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson08Data = {
  id: "mds5vu0feh581clfpa",
  title: "Project Kickoff: Team Setup",
  sequence: 8,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Open the assigned group workbook and keep the five rehearsal sheets",
    "Define the decision and state a risk",
    "Verify the raw records and complete Analysis",
  ],
  keyConcepts: [
    "Group workbook continuity",
    "Data source check",
    "Project scope",
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Team‑based project launch with assigned datasets, workbook setup, and milestone acceptance criteria"
  ],
  rationale: "Use the assigned group workbook with synthetic weekend data. Keep this file through Lesson 10.",
  status: "Draft"
}


export const lesson08Phases: { id: string; phaseName: LessonPhaseName; sequence: number; description: string }[] = [
  {
    id: "phase_project_kickoff",
    phaseName: "Project Launch",
    sequence: 1,
    description: "Kickoff the team project with business scenario and data assignment"
  }
]
