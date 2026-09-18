import { UNITS } from "@/data/unit-registry"
import { LESSON_PAGES } from "@/data/lesson-registry"
import type { UnitMetadata } from "@/data/unit-registry"
import type { UnitId } from "@/types/glossary"
import type { StudentLessonSectionId } from "@/types/student-lesson"
import type {
  ContinueRecord,
  ContinueResolution,
  CurrentLessonConfig,
  ResolvedStudentLesson,
  StudentNavItem,
} from "@/types/student-navigation"
import { STUDENT_LESSON_SECTION_MAP } from "@/lib/student-lesson"

const UNIT_BY_ID = new Map<UnitId, UnitMetadata>(UNITS.map((unit) => [unit.unitId, unit]))

const KNOWN_LESSON_KEYS = new Set<string>(
  LESSON_PAGES.map((lesson) => `${lesson.unitId}/${lesson.href.split("/").pop() ?? ""}`),
)

const STUDENT_SECTION_IDS = new Set<StudentLessonSectionId>(
  Object.keys(STUDENT_LESSON_SECTION_MAP) as StudentLessonSectionId[],
)

/** localStorage key for the local Continue record. */
export const CONTINUE_STORAGE_KEY = "student_continue_v1"

/** Default number of days a local Continue record stays usable. */
export const CONTINUE_MAX_AGE_DAYS = 30

/**
 * Primary student navigation. Teacher resources are intentionally excluded;
 * this is the student-only surface described by the track spec.
 */
export const STUDENT_PRIMARY_NAV: readonly StudentNavItem[] = [
  {
    id: "today",
    label: "Today",
    href: "/student",
    description: "Your current lesson and this week's focus.",
  },
  {
    id: "units",
    label: "Units",
    href: "/student#units",
    description: "All eight units and their lessons.",
  },
  {
    id: "practice",
    label: "Practice",
    href: "/student/practice-hub",
    description: "Flashcards, matching, review, and progress.",
  },
  {
    id: "resources",
    label: "Resources",
    href: "/student#resources",
    description: "Glossary, index, and reference materials.",
  },
]

/** Minimal storage surface so the Continue record can be tested without a DOM. */
export interface StorageLike {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}

/**
 * Get canonical unit metadata from the unit registry.
 */
export function getUnitMetadata(unitId: UnitId): UnitMetadata {
  const unit = UNIT_BY_ID.get(unitId)
  if (!unit) {
    throw new Error(`Unknown unit: ${unitId}`)
  }
  return unit
}

/**
 * Build a unit route from the canonical unit registry.
 */
export function getUnitHref(unitId: UnitId): string {
  return getUnitMetadata(unitId).studentHref
}

/**
 * Build a lesson route from the canonical unit registry and lesson id.
 */
export function getLessonHref(unitId: UnitId, lessonId: string): string {
  return `${getUnitHref(unitId)}/${lessonId}`
}

/**
 * Check whether a value is a known unit id.
 */
export function isUnitId(value: unknown): value is UnitId {
  return typeof value === "string" && UNIT_BY_ID.has(value as UnitId)
}

/**
 * Check whether a unit/lesson pair exists in the canonical lesson registry.
 */
export function isKnownLesson(unitId: unknown, lessonId: unknown): boolean {
  return (
    typeof unitId === "string" &&
    typeof lessonId === "string" &&
    KNOWN_LESSON_KEYS.has(`${unitId}/${lessonId}`)
  )
}

/**
 * Resolve the deployment-wide current lesson to a concrete route.
 */
export function resolveCurrentLesson(config: CurrentLessonConfig): ResolvedStudentLesson {
  const unit = getUnitMetadata(config.unitId)
  return {
    unitId: config.unitId,
    lessonId: config.lessonId,
    lessonNumber: config.lessonNumber,
    lessonTitle: config.lessonTitle,
    unitLabel: unit.label,
    href: getLessonHref(config.unitId, config.lessonId),
    source: "deployment",
  }
}

/**
 * Build a Continue record for a lesson visit. Defaults the section to Start and
 * the timestamp to now.
 */
export function createContinueRecord(
  input: {
    unitId: UnitId
    lessonId: string
    lessonNumber: number
    lessonTitle: string
    section?: StudentLessonSectionId
  },
  visitedAt: Date = new Date(),
): ContinueRecord {
  return {
    unitId: input.unitId,
    lessonId: input.lessonId,
    lessonNumber: input.lessonNumber,
    lessonTitle: input.lessonTitle,
    section: input.section ?? "start",
    lastVisitedAt: visitedAt.toISOString(),
  }
}

/**
 * Validate an untrusted value as a Continue record. Returns null when required
 * fields are missing, malformed, or reference an unknown unit or lesson in the
 * canonical lesson registry.
 */
export function parseContinueRecord(value: unknown): ContinueRecord | null {
  if (typeof value !== "object" || value === null) return null
  const record = value as Record<string, unknown>

  if (!isUnitId(record.unitId)) return null
  if (typeof record.lessonId !== "string" || record.lessonId.length === 0) return null
  if (!isKnownLesson(record.unitId, record.lessonId)) return null
  if (typeof record.lessonNumber !== "number" || !Number.isInteger(record.lessonNumber)) return null
  if (typeof record.lessonTitle !== "string" || record.lessonTitle.length === 0) return null
  if (!STUDENT_SECTION_IDS.has(record.section as StudentLessonSectionId)) return null
  if (typeof record.lastVisitedAt !== "string") return null
  if (Number.isNaN(Date.parse(record.lastVisitedAt))) return null

  return {
    unitId: record.unitId,
    lessonId: record.lessonId,
    lessonNumber: record.lessonNumber,
    lessonTitle: record.lessonTitle,
    section: record.section as StudentLessonSectionId,
    lastVisitedAt: record.lastVisitedAt,
  }
}

/**
 * Check whether a Continue record is recent enough to use.
 */
export function isContinueRecordFresh(
  record: ContinueRecord,
  now: Date = new Date(),
  maxAgeDays: number = CONTINUE_MAX_AGE_DAYS,
): boolean {
  const visitedAt = Date.parse(record.lastVisitedAt)
  if (Number.isNaN(visitedAt)) return false
  const ageMs = now.getTime() - visitedAt
  return ageMs <= maxAgeDays * 24 * 60 * 60 * 1000
}

/**
 * Resolve the Continue surface. A fresh local record wins; otherwise the
 * deployment-wide current lesson is used as a safe fallback.
 */
export function resolveContinueLesson(
  config: CurrentLessonConfig | null,
  record: ContinueRecord | null,
  options: { now?: Date; maxAgeDays?: number } = {},
): ContinueResolution {
  const fallback = config ? resolveCurrentLesson(config) : null

  if (!record) {
    return fallback
      ? { lesson: fallback, source: "deployment", reason: "missing" }
      : { lesson: null, source: "none", reason: "missing" }
  }

  if (!isUnitId(record.unitId)) {
    return fallback
      ? { lesson: fallback, source: "deployment", reason: "unknown-unit" }
      : { lesson: null, source: "none", reason: "unknown-unit" }
  }

  if (!isKnownLesson(record.unitId, record.lessonId)) {
    return fallback
      ? { lesson: fallback, source: "deployment", reason: "invalid" }
      : { lesson: null, source: "none", reason: "invalid" }
  }

  if (!isContinueRecordFresh(record, options.now, options.maxAgeDays)) {
    return fallback
      ? { lesson: fallback, source: "deployment", reason: "stale" }
      : { lesson: null, source: "none", reason: "stale" }
  }

  const unit = getUnitMetadata(record.unitId)
  return {
    lesson: {
      unitId: record.unitId,
      lessonId: record.lessonId,
      lessonNumber: record.lessonNumber,
      lessonTitle: record.lessonTitle,
      unitLabel: unit.label,
      href: `${getLessonHref(record.unitId, record.lessonId)}#${record.section}`,
      source: "local",
    },
    source: "local",
  }
}

/**
 * Get the browser's localStorage, or null when unavailable (SSR, privacy mode).
 */
export function getDefaultStorage(): StorageLike | null {
  if (typeof window === "undefined" || !window.localStorage) return null
  return window.localStorage
}

/**
 * Read and validate the local Continue record. Corrupt data is ignored.
 */
export function readContinueRecord(storage: StorageLike | null = getDefaultStorage()): ContinueRecord | null {
  if (!storage) return null
  try {
    const raw = storage.getItem(CONTINUE_STORAGE_KEY)
    if (!raw) return null
    return parseContinueRecord(JSON.parse(raw))
  } catch {
    return null
  }
}

/**
 * Persist the local Continue record. Returns false when storage is unavailable
 * or the write fails.
 */
export function writeContinueRecord(
  record: ContinueRecord,
  storage: StorageLike | null = getDefaultStorage(),
): boolean {
  if (!storage) return false
  try {
    storage.setItem(CONTINUE_STORAGE_KEY, JSON.stringify(record))
    return true
  } catch {
    return false
  }
}

/**
 * Remove the local Continue record.
 */
export function clearContinueRecord(storage: StorageLike | null = getDefaultStorage()): void {
  if (!storage) return
  try {
    storage.removeItem(CONTINUE_STORAGE_KEY)
  } catch {
    // Ignore storage failures.
  }
}
