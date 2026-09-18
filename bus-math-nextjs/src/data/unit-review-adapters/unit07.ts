import { unit07Phase5QuestionBank } from "@/data/question-banks/unit07-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 7 question bank exposed through the shared unit-review contract. */
export const unit07ReviewAdapter = createUnitReviewAdapter(
  "unit07",
  getUnitMetadata("unit07").label,
  unit07Phase5QuestionBank,
)
