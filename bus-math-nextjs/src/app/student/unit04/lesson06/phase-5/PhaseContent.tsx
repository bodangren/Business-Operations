import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5"

const questions = getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson06"] })

/** @returns The exit ticket for Lesson 6. */
export default function Phase5Content() {
  return <ComprehensionCheck title="Lesson 6 Exit Ticket" questions={questions} />
}
