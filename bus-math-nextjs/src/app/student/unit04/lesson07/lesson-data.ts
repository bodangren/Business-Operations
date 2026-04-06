import { LessonProgressPhaseName as LessonPhase } from "@/contexts/LessonProgressContext"

// Data-Driven Café, Lesson 7 data - Project Rehearsal
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson07Data = {
  id: "mds5vu0cmuyzd6czgp",
  title: "Project Rehearsal: Café Analysis Walkthrough",
  sequence: 7,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Trace the final recommendation back to supporting data evidence",
    "Identify which workbook structures must carry forward to the real project",
    "Apply the Definition of Done checklist to a complete analysis",
    "Evaluate a peer's work against the project quality standard"
  ],
  keyConcepts: [
    "Evidence chain from data to recommendation",
    "Definition of Done checklist",
    "Peer audit with concrete criteria",
    "Transfer from rehearsal to independent project"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Guided rehearsal with shared teacher data, audit walkthrough, peer critique, and project handoff"
  ],
  rationale:
    "Students rehearse the exact café-analysis project structure with shared data. This guided practice reveals the quality standard before students tackle their own scenarios in Lessons 8-10.",
  status: "Draft"
}


// Lesson phases for project-rehearsal
export const lesson07Phases: { id: string; phaseName: LessonPhase; sequence: number; description: string }[] = [
  {
    id: "phase_rehearsal_purpose",
    phaseName: "Hook" as LessonPhase,
    sequence: 1,
    description: "Frame the lesson as guided rehearsal before independent project work"
  },
  {
    id: "phase_shared_artifact",
    phaseName: "Introduction" as LessonPhase,
    sequence: 2,
    description: "Orient to the shared workbook, evidence blocks, and Definition of Done"
  },
  {
    id: "phase_guided_audit",
    phaseName: "Guided Practice" as LessonPhase,
    sequence: 3,
    description: "Trace the recommendation back to supporting data evidence"
  },
  {
    id: "phase_polish_transfer",
    phaseName: "Independent Practice" as LessonPhase,
    sequence: 4,
    description: "Complete weak spots and identify what must transfer to the project"
  },
  {
    id: "phase_transfer_check",
    phaseName: "Assessment" as LessonPhase,
    sequence: 5,
    description: "Comprehension check and peer critique with Definition of Done criteria"
  },
  {
    id: "phase_reflection_handoff",
    phaseName: "Closing" as LessonPhase,
    sequence: 6,
    description: "Lock in quality standard and preview independent project work"
  }
]
