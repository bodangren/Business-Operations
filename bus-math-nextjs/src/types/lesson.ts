/**
 * Shared lesson/unit reference types used by PhaseHeader, PhaseFooter,
 * and page-level components. These are intentionally minimal — they capture
 * only the fields that the layout components actually need.
 */

export interface LessonRef {
  id: string
  title: string
  sequence: number
  unitId: string
}

export interface UnitRef {
  id: string
  title: string
  sequence: number
}

export type LessonPhaseName =
  | "Hook"
  | "Introduction"
  | "Guided Practice"
  | "Independent Practice"
  | "Assessment"
  | "Closing"
  | "Project Launch"
  | "Project Milestone"
  | "Project Presentation"

export interface LessonPhase {
  id: string
  phaseName: LessonPhaseName
  sequence: number
  description?: string
}
