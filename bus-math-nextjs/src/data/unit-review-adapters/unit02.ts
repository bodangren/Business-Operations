import { allUnit02Phase5Questions } from "@/data/question-banks/unit02-phase5"
import { getUnitMetadata } from "@/lib/student-navigation"
import { createUnitReviewAdapter } from "@/lib/unit-review"

/** Unit 2 question bank exposed through the shared unit-review contract. */
export const unit02ReviewAdapter = createUnitReviewAdapter(
  "unit02",
  getUnitMetadata("unit02").label,
  allUnit02Phase5Questions,
)
