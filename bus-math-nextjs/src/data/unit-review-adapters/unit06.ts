import { unit06Phase5QuestionBank } from "@/data/question-banks/unit06-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 6 question bank exposed through the shared unit-review contract. */
export const unit06ReviewAdapter = createUnitReviewAdapter(
  "unit06",
  getUnitMetadata("unit06").label,
  unit06Phase5QuestionBank,
)
