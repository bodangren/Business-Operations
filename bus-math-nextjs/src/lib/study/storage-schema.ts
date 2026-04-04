import type { GlossaryField, UnitId, TopicTag } from "@/types/glossary"

// ---------------------------------------------------------------------------
// Local Storage Schema v1
// ---------------------------------------------------------------------------

export const STORAGE_SCHEMA_VERSION = "1.0.0"
export const STORAGE_ROOT_KEY = "mbo-study"

// -- Student metadata (optional at capture time) ---------------------------

export interface StudentProfile {
  student_id: string
  student_name: string
  class_name: string
  teacher_name: string
  school_year: string
}

// -- Study preferences -----------------------------------------------------

export type LanguageMode =
  | "en_to_en"
  | "en_to_zh"
  | "zh_to_en"
  | "zh_to_zh"

export interface StudyPreferences {
  glossary_prompt_field: GlossaryField
  glossary_answer_field: GlossaryField
  study_language_mode: LanguageMode
  font_size: "small" | "medium" | "large"
  high_contrast: boolean
}

// -- Mastery tracking per glossary term ------------------------------------

export type LastResult = "correct" | "incorrect" | "skipped"
export type ProficiencyBand = "new" | "developing" | "proficient" | "strong"

export interface TermMastery {
  term_slug: string
  units: UnitId[]
  times_seen: number
  times_correct: number
  times_incorrect: number
  last_result: LastResult
  mastery_score: number
  proficiency_band: ProficiencyBand
  last_reviewed_at: string // ISO 8601
}

// -- Spaced-review scheduler snapshot --------------------------------------

export interface SchedulerState {
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

export interface DueReviewEntry {
  term_slug: string
  scheduled_for: string // ISO 8601
  is_due: boolean
  scheduler: SchedulerState
}

// -- Aggregate study stats -------------------------------------------------

export interface AggregateStats {
  total_terms_tracked: number
  total_due_now: number
  total_sessions: number
  total_questions_answered: number
  overall_accuracy: number
  total_study_seconds: number
}

// -- Study state (analysis-facing snapshot) --------------------------------

export interface StudyState {
  mastery_by_term: TermMastery[]
  due_review_snapshot: DueReviewEntry[]
  aggregate_stats: AggregateStats
}

// -- Session-level records -------------------------------------------------

export type ActivityType =
  | "flashcards"
  | "matching"
  | "sorting"
  | "speed-round"
  | "mcq"
  | "cloze"
  | "review"

export type SessionMode = "solo" | "pass-and-play" | "team-single-device"
export type SelfRating = "easy" | "okay" | "hard"

export interface SessionActivity {
  activity_id: string
  activity_type: ActivityType
  mode: SessionMode
  route: string
  title: string
}

export interface SessionCurriculum {
  unit_id: UnitId
  lesson_id: string
  topic_tags: TopicTag[]
  term_slugs: string[]
}

export interface SessionResults {
  items_seen: number
  items_answered: number
  items_correct: number
  items_incorrect: number
  accuracy: number
  retry_count: number
  score: number
  mastery_delta: number
}

export type ItemType = "glossary-card" | "mcq" | "match-pair" | "sort-token" | "cloze"
export type ReviewOutcome = "again" | "hard" | "good" | "easy" | "correct" | "incorrect"

export interface SessionResponse {
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

export interface SessionNotes {
  self_rating: SelfRating
  student_note?: string
}

export interface SessionRecord {
  session_id: string
  started_at: string // ISO 8601
  ended_at: string
  duration_seconds: number
  activity: SessionActivity
  curriculum: SessionCurriculum
  results: SessionResults
  responses: SessionResponse[]
  notes: SessionNotes
}

// -- Reflections -----------------------------------------------------------

export interface Reflection {
  reflection_id: string
  created_at: string
  unit_id: UnitId
  lesson_id: string
  source: string
  prompt: string
  response: string
}

// -- Export history entry --------------------------------------------------

export interface ExportHistoryEntry {
  id: string
  type: "csv" | "json"
  filename: string
  date: string
  size_bytes: number
}

// -- Root local storage payload --------------------------------------------

export interface LocalStudyData {
  schema_version: typeof STORAGE_SCHEMA_VERSION
  student: Partial<StudentProfile>
  preferences: StudyPreferences
  study_state: StudyState
  sessions: SessionRecord[]
  reflections: Reflection[]
  export_history: ExportHistoryEntry[]
  last_updated_at: string
}

// -- Defaults --------------------------------------------------------------

export function defaultPreferences(): StudyPreferences {
  return {
    glossary_prompt_field: "term_en",
    glossary_answer_field: "def_en",
    study_language_mode: "en_to_en",
    font_size: "medium",
    high_contrast: false,
  }
}

export function defaultAggregateStats(): AggregateStats {
  return {
    total_terms_tracked: 0,
    total_due_now: 0,
    total_sessions: 0,
    total_questions_answered: 0,
    overall_accuracy: 0,
    total_study_seconds: 0,
  }
}

export function defaultStudyState(): StudyState {
  return {
    mastery_by_term: [],
    due_review_snapshot: [],
    aggregate_stats: defaultAggregateStats(),
  }
}

export function createEmptyLocalData(): LocalStudyData {
  return {
    schema_version: STORAGE_SCHEMA_VERSION,
    student: {},
    preferences: defaultPreferences(),
    study_state: defaultStudyState(),
    sessions: [],
    reflections: [],
    export_history: [],
    last_updated_at: new Date().toISOString(),
  }
}
