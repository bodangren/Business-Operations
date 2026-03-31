// Unit 1, Lesson 7 data - Project Rehearsal
export const lesson07Data = {
  id: "lesson07-unit01",
  title: "Project Rehearsal: Shared Data, Shared Standard",
  sequence: 7,
  unitId: "unit01",
  learningObjectives: [
    "Rehearse the exact project workbook structure using shared teacher data",
    "Trace the recommendation back to supporting evidence in the workbook",
    "Complete a peer audit focusing on logic chain, evidence, and clarity",
    "Identify exactly which structures must be transferred to the real project"
  ],
  keyConcepts: [
    "Project workbook structure",
    "Evidence chain tracing",
    "Definition of Done",
    "Peer audit",
    "Transfer to independent project"
  ],
  durationEstimateMinutes: 90,
  pedagogicalApproach: [
    "Guided rehearsal with shared teacher data",
    "Workbook orientation and evidence tracing",
    "Peer audit against concrete criteria",
    "Transfer identification and reflection"
  ],
  rationale: "This lesson is a guided rehearsal with shared teacher data so every student sees the same quality bar before starting their independent group project.",
  status: "Ready"
}

export const unit01Data = {
  id: "unit01",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases for Project Rehearsal
export const lesson07Phases = [
  {
    id: "phase07-rehearsal-purpose",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Explain why we're doing a guided rehearsal with shared teacher data"
  },
  {
    id: "phase07-shared-artifact",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Orient to the shared workbook, workbook map, and success criteria"
  },
  {
    id: "phase07-guided-audit",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Model how to inspect the shared artifact and trace the recommendation"
  },
  {
    id: "phase07-polish-transfer",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Polish the shared artifact and identify what to transfer to the real project"
  },
  {
    id: "phase07-transfer-check",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Check transfer understanding and complete a peer audit"
  },
  {
    id: "phase07-reflection-handoff",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect and preview what changes in the real project"
  }
]
