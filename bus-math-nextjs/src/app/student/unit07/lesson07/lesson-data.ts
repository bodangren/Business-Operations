// Unit 07, Lesson 7 — Project Rehearsal: Shared Inventory Dataset
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit07Data = UNIT_REF_MAP[7]
export const lesson07Data = {
  id: "u07_l07_project_rehearsal",
  title: "Project Rehearsal: One Shared Dataset, One Shared Workbook",
  sequence: 7,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Trace a method recommendation back to specific workbook evidence (COGS, turnover, days-on-hand)",
    "Apply the Definition of Done checklist to evaluate workbook quality",
    "Identify weak spots in an inventory workbook: missing evidence, unclear logic chain, absent risk statements",
    "Name the exact structures and habits you must carry into the independent project in Lessons 08-10"
  ],
  keyConcepts: [
    "Shared rehearsal dataset: everyone uses the same numbers to compare reasoning quality",
    "Workbook map: Inputs → Purchases → Sales → Valuation → MethodCompare → Checks → Dashboard → Recommendation",
    "Evidence chain: every recommendation statement must cite specific workbook numbers",
    "Definition of Done: method logic, validation, reconciliation, and communication quality",
    "Transfer checklist: what changes in the real project (own dataset, own team, own recommendation)"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Guided rehearsal with shared teacher data, audit routine, peer critique, and transfer check"
  ],
  rationale: "This lesson is a dress rehearsal before the independent project. Every student works with the same shared dataset and the same workbook structure. The goal is not to learn new content but to practice the exact project workflow: build the workbook, trace the recommendation to evidence, audit quality, and identify what must transfer into Lessons 08-10 when each group gets its own business scenario.",
  status: "Draft"
}


// Lesson phases
export const lesson07Phases = [
  {
    id: "phase_rehearsal_purpose_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Frame the lesson as a guided rehearsal before the independent project"
  },
  {
    id: "phase_shared_artifact_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Orient to the shared workbook: sheet map, evidence blocks, and success criteria"
  },
  {
    id: "phase_guided_audit_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Trace the recommendation back to evidence; identify what makes a workbook weak or trustworthy"
  },
  {
    id: "phase_polish_transfer_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete weak spots, write recommendation and risk statements, name transfer features"
  },
  {
    id: "phase_peer_audit_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Transfer check comprehension and peer audit tied to the Definition of Done"
  },
  {
    id: "phase_handoff_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on what the rehearsal clarified and what changes in the real project"
  }
]
