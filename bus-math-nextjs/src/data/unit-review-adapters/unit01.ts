import { unit01Phase5QuestionBank } from "@/data/question-banks/unit01-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 1 question bank exposed through the shared unit-review contract. */
export const unit01ReviewAdapter = createUnitReviewAdapter(
  "unit01",
  getUnitMetadata("unit01").label,
  unit01Phase5QuestionBank,
)
