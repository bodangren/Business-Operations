import { LESSON_PAGES } from "@/data/lesson-registry"

/** Minimal lesson link used by the one-route lesson shell handoff. */
export interface LessonSequenceLink {
  title: string
  href: string
}

/**
 * Get the next lesson in course order after the given lesson route, or null at
 * the end of the course.
 */
export function getNextLessonLink(lessonHref: string): LessonSequenceLink | null {
  const index = LESSON_PAGES.findIndex((lesson) => lesson.href === lessonHref)
  if (index < 0 || index === LESSON_PAGES.length - 1) return null

  const next = LESSON_PAGES[index + 1]
  return { title: next.title, href: next.href }
}
