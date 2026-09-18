import type { UnitId } from "./glossary"
import type { StudentLessonSectionId } from "./student-lesson"

/** Identifiers for the four primary student navigation destinations. */
export type StudentPrimaryNavId = "today" | "units" | "practice" | "resources"

export interface StudentNavItem {
  id: StudentPrimaryNavId
  label: string
  href: string
  description: string
}

/**
 * Deployment-wide current lesson. This is a static configuration value so the
 * hub can open the current lesson without a backend.
 */
export interface CurrentLessonConfig {
  unitId: UnitId
  lessonId: string
  lessonNumber: number
  lessonTitle: string
  /** ISO date the configuration was last updated. */
  updatedAt: string
}

/**
 * Local recent-lesson record written when a student opens a lesson. Stored in
 * localStorage only; never sent to a server.
 */
export interface ContinueRecord {
  unitId: UnitId
  lessonId: string
  lessonNumber: number
  lessonTitle: string
  section: StudentLessonSectionId
  /** ISO timestamp of the most recent visit. */
  lastVisitedAt: string
}

/** A lesson resolved to a concrete route, from local progress or deployment config. */
export interface ResolvedStudentLesson {
  unitId: UnitId
  lessonId: string
  lessonNumber: number
  lessonTitle: string
  unitLabel: string
  href: string
  source: "local" | "deployment"
}

/** Outcome of resolving the Continue surface, including safe fallback reasons. */
export interface ContinueResolution {
  lesson: ResolvedStudentLesson | null
  source: "local" | "deployment" | "none"
  /** Why a local record was ignored, when applicable. */
  reason?: "missing" | "invalid" | "stale" | "unknown-unit"
}
