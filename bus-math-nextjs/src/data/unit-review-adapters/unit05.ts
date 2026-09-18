import { unit05Phase5QuestionBank } from "@/data/question-banks/unit05-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 5 question bank exposed through the shared unit-review contract. */
export const unit05ReviewAdapter = createUnitReviewAdapter(
  "unit05",
  getUnitMetadata("unit05").label,
  unit05Phase5QuestionBank,
)
