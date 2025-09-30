import { unit02Data } from "../lesson01/lesson-data"

export const practiceTestLessonData = {
  id: "unit02-practice-test",
  title: "Unit 2 Practice Test: Month-End Wizard Rehearsal",
  sequence: 11,
  unitId: unit02Data.id
}

export const practiceTestPhases = [
  {
    id: "unit02-practice-test-phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Step into Sarah's finance command center and see how month-end automation sets the tone for investor trust."
  },
  {
    id: "unit02-practice-test-phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Dial in the number of questions and lesson filters so your rehearsal targets the automation skills you need most."
  },
  {
    id: "unit02-practice-test-phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Review pacing, error-check habits, and analyst strategies before you launch your custom practice set."
  },
  {
    id: "unit02-practice-test-phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Work through the practice test, track your timing, and note which adjustments keep Sarah's ledger investor-ready."
  },
  {
    id: "unit02-practice-test-phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Score your performance instantly, read detailed explanations, and identify the adjustments you will make before the next sprint check-in."
  },
  {
    id: "unit02-practice-test-phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Capture reflections, celebrate progress, and lock in one automation upgrade for your next rehearsal."
  }
] as const

export type PracticeTestPhase = (typeof practiceTestPhases)[number]

export { unit02Data }
