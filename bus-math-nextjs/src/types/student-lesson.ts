import type { LessonPhaseName } from "./lesson"

/**
 * The four visible student lesson sections. Teacher plans and lesson metadata
 * keep the six teaching phases; these identifiers describe the student-facing
 * presentation only.
 */
export type StudentLessonSectionId = "start" | "learn" | "do" | "check"

export interface StudentLessonSectionDefinition {
  id: StudentLessonSectionId
  label: string
  heading: string
  description: string
  /** Stable anchor id used for direct teacher links. */
  anchor: string
  /** Canonical 1-based presentation order. */
  sequence: number
}

/** Maps one legacy numbered phase onto the four-section student presentation. */
export interface LegacyPhaseSectionMapping {
  phaseNumber: number
  phaseName: LessonPhaseName
  sectionId: StudentLessonSectionId
}

/** Result of resolving a legacy `/phase-N` URL to its student section. */
export interface LegacyPhaseTarget {
  /** Lesson route without an anchor, including any trailing slash. */
  lessonHref: string
  sectionId: StudentLessonSectionId
  sectionAnchor: string
}
