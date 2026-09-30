import { unit03Phase5QuestionBank } from "@/data/question-banks/unit03-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 3 question bank exposed through the shared unit-review contract. */
export const unit03ReviewAdapter = createUnitReviewAdapter(
  "unit03",
  getUnitMetadata("unit03").label,
  unit03Phase5QuestionBank,
)
