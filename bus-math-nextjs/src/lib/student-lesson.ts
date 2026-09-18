import type { LessonPhaseName } from "@/types/lesson"
import type {
  LegacyPhaseSectionMapping,
  LegacyPhaseTarget,
  StudentLessonSectionDefinition,
  StudentLessonSectionId,
} from "@/types/student-lesson"

/**
 * Canonical student lesson sections, in presentation order. Each definition
 * carries the stable anchor used by direct teacher links and legacy phase
 * redirects.
 */
export const STUDENT_LESSON_SECTIONS: readonly StudentLessonSectionDefinition[] = [
  {
    id: "start",
    label: "Start",
    heading: "Start",
    description: "Hook and one short processing move.",
    anchor: "start",
    sequence: 1,
  },
  {
    id: "learn",
    label: "Learn",
    heading: "Learn",
    description: "Direct instruction and worked context.",
    anchor: "learn",
    sequence: 2,
  },
  {
    id: "do",
    label: "Do",
    heading: "Do",
    description: "Guided practice, then independent or authentic practice.",
    anchor: "do",
    sequence: 3,
  },
  {
    id: "check",
    label: "Check",
    heading: "Check",
    description: "Exit ticket, concise summary, and the next-lesson handoff.",
    anchor: "check",
    sequence: 4,
  },
]

/** Student-facing sections keyed by their canonical id. */
export const STUDENT_LESSON_SECTION_MAP: Record<
  StudentLessonSectionId,
  StudentLessonSectionDefinition
> = {
  start: STUDENT_LESSON_SECTIONS[0],
  learn: STUDENT_LESSON_SECTIONS[1],
  do: STUDENT_LESSON_SECTIONS[2],
  check: STUDENT_LESSON_SECTIONS[3],
}

/**
 * Teacher phase name to student section. The six teaching phases collapse into
 * four student sections: Hook → Start; Introduction → Learn; Guided and
 * Independent Practice → Do; Assessment and Closing → Check.
 */
const PHASE_NAME_TO_SECTION: Record<LessonPhaseName, StudentLessonSectionId> = {
  Hook: "start",
  Introduction: "learn",
  "Guided Practice": "do",
  "Independent Practice": "do",
  Assessment: "check",
  Closing: "check",
  "Project Launch": "start",
  "Project Milestone": "do",
  "Project Presentation": "check",
}

/**
 * Legacy numbered phase to student section, per the compatibility contract:
 * phase 1 → Start, phase 2 → Learn, phases 3 and 4 → Do, phases 5 and 6 →
 * Check.
 */
export const LEGACY_PHASE_SECTION_MAPPINGS: readonly LegacyPhaseSectionMapping[] = [
  { phaseNumber: 1, phaseName: "Hook", sectionId: "start" },
  { phaseNumber: 2, phaseName: "Introduction", sectionId: "learn" },
  { phaseNumber: 3, phaseName: "Guided Practice", sectionId: "do" },
  { phaseNumber: 4, phaseName: "Independent Practice", sectionId: "do" },
  { phaseNumber: 5, phaseName: "Assessment", sectionId: "check" },
  { phaseNumber: 6, phaseName: "Closing", sectionId: "check" },
]

const LEGACY_PHASE_TO_SECTION: Record<number, StudentLessonSectionId> = Object.fromEntries(
  LEGACY_PHASE_SECTION_MAPPINGS.map((mapping) => [mapping.phaseNumber, mapping.sectionId]),
) as Record<number, StudentLessonSectionId>

const LEGACY_PHASE_PATH = /^(.*)\/phase-(\d+)\/?$/

/**
 * Get the definition for one student section.
 */
export function getStudentLessonSection(
  id: StudentLessonSectionId,
): StudentLessonSectionDefinition {
  return STUDENT_LESSON_SECTION_MAP[id]
}

/**
 * Get the 1-based presentation order for a student section.
 */
export function getStudentSectionSequence(id: StudentLessonSectionId): number {
  return getStudentLessonSection(id).sequence
}

/**
 * Map a teacher phase name to its student section. Unknown names fall back to
 * Start so legacy data cannot crash the shell.
 */
export function getSectionForPhaseName(name: string): StudentLessonSectionId {
  return (PHASE_NAME_TO_SECTION as Record<string, StudentLessonSectionId>)[name] ?? "start"
}

/**
 * Map a legacy 1-6 phase number to its student section, or null when the
 * number is outside the six-phase model.
 */
export function getSectionForLegacyPhase(phaseNumber: number): StudentLessonSectionId | null {
  return LEGACY_PHASE_TO_SECTION[phaseNumber] ?? null
}

/**
 * Get the next section in presentation order, or null for Check.
 */
export function getNextStudentSection(
  id: StudentLessonSectionId,
): StudentLessonSectionId | null {
  const next = STUDENT_LESSON_SECTIONS.find(
    (section) => section.sequence === getStudentSectionSequence(id) + 1,
  )
  return next ? next.id : null
}

/**
 * Get the previous section in presentation order, or null for Start.
 */
export function getPreviousStudentSection(
  id: StudentLessonSectionId,
): StudentLessonSectionId | null {
  const previous = STUDENT_LESSON_SECTIONS.find(
    (section) => section.sequence === getStudentSectionSequence(id) - 1,
  )
  return previous ? previous.id : null
}

/**
 * Get the stable anchor id for a student section.
 */
export function getStudentSectionAnchor(id: StudentLessonSectionId): string {
  return getStudentLessonSection(id).anchor
}

/**
 * Narrow a string to a student section id. Used to validate URL anchors before
 * writing local progress.
 */
export function isStudentLessonSectionId(value: string): value is StudentLessonSectionId {
  return STUDENT_LESSON_SECTIONS.some((section) => section.id === value)
}

/**
 * Build a lesson-section href by appending the section anchor to a lesson
 * route, replacing any existing hash.
 */
export function getStudentSectionHref(
  lessonHref: string,
  id: StudentLessonSectionId,
): string {
  const base = lessonHref.split("#")[0]
  return `${base}#${getStudentSectionAnchor(id)}`
}

/**
 * Resolve a legacy `/phase-N` path to its lesson route and student section.
 * Returns null when the path is not a numbered phase route.
 */
export function resolveLegacyPhaseTarget(path: string): LegacyPhaseTarget | null {
  const match = LEGACY_PHASE_PATH.exec(path.split("#")[0])
  if (!match) return null

  const [, lessonHref, phaseNumber] = match
  if (!lessonHref) return null

  const sectionId = getSectionForLegacyPhase(Number(phaseNumber))
  if (!sectionId) return null

  return {
    lessonHref,
    sectionId,
    sectionAnchor: getStudentSectionAnchor(sectionId),
  }
}

/**
 * Resolve a legacy `/phase-N` path to the modern section href, or null when the
 * path is not a numbered phase route. Used by the static compatibility pages.
 */
export function resolveLegacyPhaseHref(path: string): string | null {
  const target = resolveLegacyPhaseTarget(path)
  if (!target) return null
  return `${target.lessonHref}#${target.sectionAnchor}`
}
