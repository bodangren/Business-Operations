import { unit04Phase5QuestionBank } from "@/data/question-banks/unit04-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 4 question bank exposed through the shared unit-review contract. */
export const unit04ReviewAdapter = createUnitReviewAdapter(
  "unit04",
  getUnitMetadata("unit04").label,
  unit04Phase5QuestionBank,
)
