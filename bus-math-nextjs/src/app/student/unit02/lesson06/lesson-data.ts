// Unit 2, Lesson 6 — Polish Wizard Interface: Validation, Controls, and Auditability
export const lesson06Data = {
  id: "unit02_lesson06",
  title: "Polish Wizard Interface: Validation, Controls, and Auditability",
  sequence: 6,
  unitId: "unit02",
  learningObjectives: [
    "Add visible validation rules that catch bad inputs before the close runs",
    "Build user-facing controls that let scenarios change without touching formulas",
    "Create an audit panel that shows what changed and why",
    "Explain how the polished tool maintains GAAP accuracy"
  ],
  keyConcepts: [
    "Validation rules as the first line of defense against bad data",
    "User-facing controls (dropdowns, toggle cells) that drive scenario changes",
    "Audit panel: a visible summary of inputs, outputs, and change history",
    "GAAP accuracy: how validation and documentation make the workbook trustworthy"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Business pressure: why a prototype pile is not usable by a real accountant",
    "Safe rehearsal of validation logic before touching the live workbook",
    "Workbook sprint with verification checkpoints and Definition of Done"
  ],
  rationale: "Students have a working automation layer from Lesson 5. Now they must make it usable, trustworthy, and professional. This lesson adds validation rules, user-facing controls, and an audit panel so the workbook feels like a usable month-end tool—not a prototype.",
  status: "Draft"
}

export const unit02Data = {
  id: "unit02",
  title: "Unit 2: Month-End Wizard",
  sequence: 2
}

export const lesson06Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Business scenario where a polished interface matters—make tool feel necessary",
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Validation rules, user-facing controls, and audit panel explained directly",
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Simulator mirroring real workbook validation logic with immediate feedback",
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the polished wizard with verification checkpoints and Definition of Done",
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check plus artifact task: defend trustworthiness and explain GAAP accuracy",
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "What the tool added, what students can now do faster, preview project rehearsal",
  }
]
