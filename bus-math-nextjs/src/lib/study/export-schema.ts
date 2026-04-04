import type { GlossaryField, UnitId, TopicTag } from "@/types/glossary"
import type {
  ActivityType,
  SessionMode,
  SelfRating,
  ItemType,
  ReviewOutcome,
  LastResult,
  ProficiencyBand,
} from "./storage-schema"

// ---------------------------------------------------------------------------
// Export Schema v1 — matches export-schema.md
// ---------------------------------------------------------------------------

export const EXPORT_SCHEMA_NAME = "mbo-study-export"
export const EXPORT_SCHEMA_VERSION = "1.0.0"

// -- Top-level session.json shape ------------------------------------------

export interface ExportApp {
  product: string
  app_version: string
  static_build_id?: string
}

export interface ExportStudent {
  student_id?: string
  student_name?: string
  class_name?: string
  teacher_name?: string
  school_year?: string
}

export interface ExportPreferences {
  glossary_prompt_field: GlossaryField
  glossary_answer_field: GlossaryField
  study_language_mode: string
  font_size: string
  high_contrast: boolean
}

export interface ExportContentScope {
  units_seen: UnitId[]
  lessons_seen: string[]
  topics_seen: TopicTag[]
  terms_seen: string[]
}

export interface ExportMasteryByTerm {
  term_slug: string
  units: UnitId[]
  times_seen: number
  times_correct: number
  times_incorrect: number
  last_result: LastResult
  mastery_score: number
  proficiency_band: ProficiencyBand
  last_reviewed_at: string
}

export interface ExportSchedulerState {
  engine: "fsrs" | "simple_srs"
  engine_version?: string
  state: {
    stability: number
    difficulty: number
    elapsed_days: number
    scheduled_days: number
    reps: number
    lapses: number
  }
}

export interface ExportDueReviewSnapshot {
  term_slug: string
  scheduled_for: string
  is_due: boolean
  scheduler: ExportSchedulerState
}

export interface ExportAggregateStats {
  total_terms_tracked: number
  total_due_now: number
  total_sessions: number
  total_questions_answered: number
  overall_accuracy: number
  total_study_seconds: number
}

export interface ExportStudyState {
  mastery_by_term: ExportMasteryByTerm[]
  due_review_snapshot: ExportDueReviewSnapshot[]
  aggregate_stats: ExportAggregateStats
}

export interface ExportSessionActivity {
  activity_id: string
  activity_type: ActivityType
  mode: SessionMode
  route: string
  title: string
}

export interface ExportSessionCurriculum {
  unit_id: UnitId
  lesson_id: string
  topic_tags: TopicTag[]
  term_slugs: string[]
}

export interface ExportSessionResults {
  items_seen: number
  items_answered: number
  items_correct: number
  items_incorrect: number
  accuracy: number
  retry_count: number
  score: number
  mastery_delta: number
}

export interface ExportResponse {
  item_id: string
  item_type: ItemType
  term_slug: string
  prompt_field: GlossaryField
  answer_field: GlossaryField
  prompt_value: string
  expected_answer: string
  student_answer?: string
  is_correct: boolean
  attempt_number: number
  response_time_ms: number
  review_outcome: ReviewOutcome
}

export interface ExportSessionNotes {
  self_rating: SelfRating
  student_note?: string
}

export interface ExportSession {
  session_id: string
  started_at: string
  ended_at: string
  duration_seconds: number
  activity: ExportSessionActivity
  curriculum: ExportSessionCurriculum
  results: ExportSessionResults
  responses: ExportResponse[]
  notes: ExportSessionNotes
}

export interface ExportReflection {
  reflection_id: string
  created_at: string
  unit_id: UnitId
  lesson_id: string
  source: string
  prompt: string
  response: string
}

export interface ExportRestorePayload {
  preferences: ExportPreferences
  mastery_by_term: ExportMasteryByTerm[]
  due_review_snapshot: ExportDueReviewSnapshot[]
  session_ids_included: string[]
}

export interface SessionExport {
  schema_name: typeof EXPORT_SCHEMA_NAME
  schema_version: typeof EXPORT_SCHEMA_VERSION
  exported_at: string
  app: ExportApp
  student: ExportStudent
  preferences: ExportPreferences
  content_scope: ExportContentScope
  study_state: ExportStudyState
  sessions: ExportSession[]
  reflections: ExportReflection[]
  restore_payload: ExportRestorePayload
}

// -- summary.csv row shape -------------------------------------------------

export interface SummaryCsvRow {
  schema_version: string
  exported_at: string
  student_name: string
  class_name: string
  session_id: string
  activity_type: ActivityType
  mode: SessionMode
  unit_id: UnitId
  lesson_id: string
  topic_tags: string
  term_count: number
  items_seen: number
  items_answered: number
  items_correct: number
  items_incorrect: number
  accuracy: number
  retry_count: number
  score: number
  duration_seconds: number
  started_at: string
  ended_at: string
  prompt_field: GlossaryField
  answer_field: GlossaryField
  self_rating: SelfRating
  // optional
  teacher_name?: string
  school_year?: string
  student_note?: string
  mastery_delta?: number
  due_count_at_export?: number
}

// -- CSV column order -------------------------------------------------------

export const SUMMARY_CSV_REQUIRED_COLUMNS = [
  "schema_version",
  "exported_at",
  "student_name",
  "class_name",
  "session_id",
  "activity_type",
  "mode",
  "unit_id",
  "lesson_id",
  "topic_tags",
  "term_count",
  "items_seen",
  "items_answered",
  "items_correct",
  "items_incorrect",
  "accuracy",
  "retry_count",
  "score",
  "duration_seconds",
  "started_at",
  "ended_at",
  "prompt_field",
  "answer_field",
  "self_rating",
] as const

export const SUMMARY_CSV_OPTIONAL_COLUMNS = [
  "teacher_name",
  "school_year",
  "student_note",
  "mastery_delta",
  "due_count_at_export",
] as const
