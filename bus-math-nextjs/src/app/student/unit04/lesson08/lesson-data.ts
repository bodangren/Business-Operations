// Data-Driven Café, Lesson 8 - Group Project Kickoff
import { LessonProgressPhaseName as LessonPhase } from "@/contexts/LessonProgressContext"

export const lesson08Data = {
  id: "mds5vu0feh581clfpa",
  title: "Project Kickoff: Team Setup",
  sequence: 8,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Define the project scope, stakeholders, and success metrics for the weekend‑ops analysis",
    "Set up the Excel workbook skeleton matching the rehearsal structure",
    "Import and organize the group‑specific dataset for analysis"
  ],
  keyConcepts: [
    "Project definition and scope planning",
    "Excel workbook structure and tab organization",
    "Data inventory and file management"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Team‑based project launch with assigned datasets, workbook setup, and milestone acceptance criteria"
  ],
  rationale: "Students launch their team project with a clear problem definition, workbook skeleton, and their group's assigned dataset. The structure mirrors the rehearsal lesson exactly so teams can focus on their specific business scenario.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

export const lesson08Phases: { id: string; phaseName: LessonPhase; sequence: number; description: string }[] = [
  {
    id: "phase_project_kickoff",
    phaseName: "Project Launch" as LessonPhase,
    sequence: 1,
    description: "Kickoff the team project with business scenario and data assignment"
  }
]
