import { UNIT_REF_MAP } from "@/data/unit-registry"
const unit07Data = UNIT_REF_MAP[7]

export const practiceTestLessonData = {
  id: "unit07-practice-test",
  title: "Unit 7 Practice Test: Inventory Accounting Mastery",
  sequence: 11,
  unitId: unit07Data.id
}

export const practiceTestPhases = [
  {
    id: "unit07-practice-test-phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Set the scene for the board presentation and preview how this practice test sharpens your inventory strategy instincts."
  },
  {
    id: "unit07-practice-test-phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Review the practice-test format, adjust lesson filters, and lock in a question mix that targets the inventory skills you need most."
  },
  {
    id: "unit07-practice-test-phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Warm up with strategy tips and checkpoints that mirror the prep Sarah uses before the Board Q&A on FIFO, LIFO, weighted average, and specific identification trade-offs."
  },
  {
    id: "unit07-practice-test-phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Work through your personalized practice set. Track timing, flag tough items, and act like the strategic advisor defending TechStart's accounting choices."
  },
  {
    id: "unit07-practice-test-phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Score your performance instantly, read explanations, and pull insights that keep TechStart board-ready and audit-confident."
  },
  {
    id: "unit07-practice-test-phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Capture reflections, celebrate progress, and set a next-step focus before the board presentation or advisory brief."
  }
] as const

export type PracticeTestPhase = (typeof practiceTestPhases)[number]

export { unit07Data }
