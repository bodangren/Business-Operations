import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5"

const questions = getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson07"] })

/** @returns The exit ticket for Lesson 7. */
export default function Phase5Content() {
  return <ComprehensionCheck title="Lesson 7 Exit Ticket" questions={questions} />
}
