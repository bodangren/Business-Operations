// Unit 2, Lesson 5 data - Build First Automation Layer
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit02Data = UNIT_REF_MAP[2]
export const lesson05Data = {
  id: "unit02_lesson05",
  title: "Build First Automation Layer",
  sequence: 5,
  unitId: "unit02",
  learningObjectives: [
    "Explain which manual month-end step the automation replaces",
    "Build named ranges and input areas that feed calculation blocks",
    "Create a button-triggered macro flow that runs the close checklist",
    "Add verification checkpoints to prove the automation ran correctly"
  ],
  keyConcepts: [
    "Named ranges as the bridge between manual steps and automation",
    "Input areas that separate user data from calculation logic",
    "Button-triggered macro flow: one click runs multiple steps in order",
    "Verification checkpoints that prove the automation produced correct results"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Business urgency first: why manual close is too slow and error-prone",
    "Safe rehearsal before touching the live workbook",
    "Workbook sprint with verification checkpoints and Definition of Done"
  ],
  rationale: "Students must build their first automation layer before any wizard polish. This lesson replaces the most painful manual step—running the close checklist—with a clickable button that executes the sequence in order. Students learn named ranges, input areas, and macro triggers as the foundation for everything that follows.",
  status: "Draft"
}


export const lesson05Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Business scenario where manual close speed matters—make automation feel necessary",
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Named ranges, input areas, buttons, and macro trigger flow explained directly",
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Simulator mirroring real workbook logic with immediate feedback",
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build the real automation artifact with verification checkpoints and Definition of Done",
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check plus artifact task: defend the automation's trustworthiness",
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "What the tool added, what students can now do faster, preview next layer",
  }
]

