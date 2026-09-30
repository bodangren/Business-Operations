import { unit08Phase5QuestionBank } from "@/data/question-banks/unit08-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 8 question bank exposed through the shared unit-review contract. */
export const unit08ReviewAdapter = createUnitReviewAdapter(
  "unit08",
  getUnitMetadata("unit08").label,
  unit08Phase5QuestionBank,
)
