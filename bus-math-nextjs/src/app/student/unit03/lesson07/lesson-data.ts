// Unit 03 - Lesson 07: Project Rehearsal data
import { LessonProgressPhaseName as LessonPhase } from "@/contexts/LessonProgressContext"

import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit03Data = UNIT_REF_MAP[3]
export const lesson07Data = {
  id: "u3l7",
  title: "Project Rehearsal: Three-Statement Workbook Audit",
  sequence: 7,
  unitId: "u3",
  learningObjectives: [
    "Rehearse the exact workbook structure used in the group project",
    "Trace final recommendations back to supporting evidence across all three statements",
    "Apply audit criteria to evaluate workbook quality and completeness",
    "Identify which features must transfer to independent project work"
  ],
  keyConcepts: [
    "Workbook structure and evidence chain",
    "Recommendation, evidence, and risk",
    "Peer audit and quality criteria",
    "Transfer and preparation for independent project"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Guided rehearsal with shared teacher data, audit routine, and peer critique"
  ],
  rationale: "Students rehearse the project workbook structure using shared data before receiving their own business scenario. This guided practice establishes the quality standard and evidence expectations for the independent project.",
  status: "Active"
}


export const lesson07Phases: { id: string; phaseName: LessonPhase; sequence: number; description: string }[] = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as LessonPhase,
    sequence: 1,
    description: "Frame the lesson as guided rehearsal before the independent project"
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as LessonPhase,
    sequence: 2,
    description: "Orient to the shared workbook, structure, and success criteria"
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as LessonPhase,
    sequence: 3,
    description: "Trace the recommendation back through the evidence chain"
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as LessonPhase,
    sequence: 4,
    description: "Complete weak spots and identify what must transfer to the project"
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as LessonPhase,
    sequence: 5,
    description: "Comprehension check and peer audit with explicit criteria"
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as LessonPhase,
    sequence: 6,
    description: "Synthesize learning and preview independent project work"
  }
]
