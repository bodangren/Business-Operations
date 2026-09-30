import type { CurrentLessonConfig } from "@/types/student-navigation"

/**
 * Deployment-wide current lesson shown on the student hub. This is the single
 * place to update the class-wide "Today" lesson; it requires no backend.
 */
export const CURRENT_LESSON: CurrentLessonConfig = {
  unitId: "unit01",
  lessonId: "lesson01",
  lessonNumber: 1,
  lessonTitle: "Introduction: Sarah's Challenge",
  updatedAt: "2026-09-15",
}
