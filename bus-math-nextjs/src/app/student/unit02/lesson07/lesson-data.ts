// Month-End Wizard, Lesson 7 data - Project Rehearsal
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit02Data = UNIT_REF_MAP[2]
export const lesson07Data = {
  id: "mds5v4udik3kb3x51po",
  title: "Project Rehearsal: Guided Practice with Shared Data",
  sequence: 7,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Rehearse the exact workbook structure and quality standard you will use in the group project",
    "Trace a recommendation back to supporting evidence using the shared teacher dataset",
    "Run a peer audit against the Definition of Done and identify one strength and one improvement",
    "Name the structures, checks, and communication moves your team must carry into the real project"
  ],
  keyConcepts: [
    "Shared rehearsal data vs. independent project data",
    "Definition of Done and quality checklist",
    "Evidence chain and recommendation logic",
    "Peer audit with explicit criteria",
    "Transfer of workbook structures to new scenarios"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Guided rehearsal with shared teacher-provided data",
    "Peer audit and evidence-tracing routine",
    "Transfer check and project handoff"
  ],
  rationale: "Students rehearse the exact project workbook structure with shared data so every group sees the same quality bar before working independently in Lessons 08-10.",
  status: "Draft"
}


// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_rehearsal_purpose_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Explain why the class is pausing for one guided rehearsal before independent project work begins",
  },
  {
    id: "phase_shared_artifact_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Orient students to the shared workbook, workbook map, deliverable structure, and success criteria",
  },
  {
    id: "phase_guided_audit_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Model how to inspect the shared artifact and trace the final recommendation back to supporting evidence",
  },
  {
    id: "phase_polish_transfer_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Let students complete or polish the shared artifact and identify what project features they must later recreate independently",
  },
  {
    id: "phase_transfer_audit_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Check that students understand the project standard and can evaluate it in another student's work",
  },
  {
    id: "phase_reflection_handoff_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Lock in the quality standard and preview how students will apply it in their own project scenario",
  }
]
