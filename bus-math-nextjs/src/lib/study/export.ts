import type { UnitId, TopicTag } from "@/types/glossary"
import type {
  SessionExport,
  ExportSession,
  ExportReflection,
  ExportMasteryByTerm,
  ExportDueReviewSnapshot,
  SummaryCsvRow,
} from "./export-schema"
import {
  EXPORT_SCHEMA_NAME,
  EXPORT_SCHEMA_VERSION,
  SUMMARY_CSV_REQUIRED_COLUMNS,
  SUMMARY_CSV_OPTIONAL_COLUMNS,
} from "./export-schema"
import type {
  LocalStudyData,
  SessionRecord,
  TermMastery,
  DueReviewEntry,
  Reflection,
} from "./storage-schema"
import { createEmptyLocalData } from "./storage-schema"
import { loadStudyData, saveStudyData } from "./storage"

// ---------------------------------------------------------------------------
// Export Builders — convert local study data to downloadable formats
// ---------------------------------------------------------------------------

/**
 * Build a full SessionExport from local study data.
 */
export function buildSessionExport(data: LocalStudyData): SessionExport {
  const now = new Date().toISOString()
  const { sessions, reflections, study_state, preferences, student } = data

  // Derive content scope from sessions
  const unitsSeen = new Set<UnitId>()
  const lessonsSeen = new Set<string>()
  const topicsSeen = new Set<TopicTag>()
  const termsSeen = new Set<string>()

  for (const s of sessions) {
    unitsSeen.add(s.curriculum.unit_id)
    lessonsSeen.add(s.curriculum.lesson_id)
    for (const t of s.curriculum.topic_tags) topicsSeen.add(t)
    for (const slug of s.curriculum.term_slugs) termsSeen.add(slug)
  }

  const exportSessions: ExportSession[] = sessions.map((s) => ({
    session_id: s.session_id,
    started_at: s.started_at,
    ended_at: s.ended_at,
    duration_seconds: s.duration_seconds,
    activity: {
      activity_id: s.activity.activity_id,
      activity_type: s.activity.activity_type,
      mode: s.activity.mode,
      route: s.activity.route,
      title: s.activity.title,
    },
    curriculum: {
      unit_id: s.curriculum.unit_id,
      lesson_id: s.curriculum.lesson_id,
      topic_tags: s.curriculum.topic_tags,
      term_slugs: s.curriculum.term_slugs,
    },
    results: {
      items_seen: s.results.items_seen,
      items_answered: s.results.items_answered,
      items_correct: s.results.items_correct,
      items_incorrect: s.results.items_incorrect,
      accuracy: s.results.accuracy,
      retry_count: s.results.retry_count,
      score: s.results.score,
      mastery_delta: s.results.mastery_delta,
    },
    responses: s.responses.map((r) => ({
      item_id: r.item_id,
      item_type: r.item_type,
      term_slug: r.term_slug,
      prompt_field: r.prompt_field,
      answer_field: r.answer_field,
      prompt_value: r.prompt_value,
      expected_answer: r.expected_answer,
      student_answer: r.student_answer,
      is_correct: r.is_correct,
      attempt_number: r.attempt_number,
      response_time_ms: r.response_time_ms,
      review_outcome: r.review_outcome,
    })),
    notes: {
      self_rating: s.notes.self_rating,
      student_note: s.notes.student_note,
    },
  }))

  const exportReflections: ExportReflection[] = reflections.map((r) => ({
    reflection_id: r.reflection_id,
    created_at: r.created_at,
    unit_id: r.unit_id,
    lesson_id: r.lesson_id,
    source: r.source,
    prompt: r.prompt,
    response: r.response,
  }))

  const masteryByTerm: ExportMasteryByTerm[] = study_state.mastery_by_term.map((m) => ({
    term_slug: m.term_slug,
    units: m.units,
    times_seen: m.times_seen,
    times_correct: m.times_correct,
    times_incorrect: m.times_incorrect,
    last_result: m.last_result,
    mastery_score: m.mastery_score,
    proficiency_band: m.proficiency_band,
    last_reviewed_at: m.last_reviewed_at,
  }))

  const dueReviewSnapshot: ExportDueReviewSnapshot[] = study_state.due_review_snapshot.map((d) => ({
    term_slug: d.term_slug,
    scheduled_for: d.scheduled_for,
    is_due: d.is_due,
    scheduler: {
      engine: d.scheduler.engine,
      engine_version: d.scheduler.engine_version,
      state: { ...d.scheduler.state },
    },
  }))

  return {
    schema_name: EXPORT_SCHEMA_NAME,
    schema_version: EXPORT_SCHEMA_VERSION,
    exported_at: now,
    app: {
      product: "Math for Business Operations",
      app_version: "0.1.0",
    },
    student: {
      student_id: student.student_id,
      student_name: student.student_name,
      class_name: student.class_name,
      teacher_name: student.teacher_name,
      school_year: student.school_year,
    },
    preferences: {
      glossary_prompt_field: preferences.glossary_prompt_field,
      glossary_answer_field: preferences.glossary_answer_field,
      study_language_mode: preferences.study_language_mode,
      font_size: preferences.font_size,
      high_contrast: preferences.high_contrast,
    },
    content_scope: {
      units_seen: [...unitsSeen],
      lessons_seen: [...lessonsSeen],
      topics_seen: [...topicsSeen],
      terms_seen: [...termsSeen],
    },
    study_state: {
      mastery_by_term: masteryByTerm,
      due_review_snapshot: dueReviewSnapshot,
      aggregate_stats: {
        total_terms_tracked: study_state.aggregate_stats.total_terms_tracked,
        total_due_now: study_state.aggregate_stats.total_due_now,
        total_sessions: study_state.aggregate_stats.total_sessions,
        total_questions_answered: study_state.aggregate_stats.total_questions_answered,
        overall_accuracy: study_state.aggregate_stats.overall_accuracy,
        total_study_seconds: study_state.aggregate_stats.total_study_seconds,
      },
    },
    sessions: exportSessions,
    reflections: exportReflections,
    restore_payload: {
      preferences: {
        glossary_prompt_field: preferences.glossary_prompt_field,
        glossary_answer_field: preferences.glossary_answer_field,
        study_language_mode: preferences.study_language_mode,
        font_size: preferences.font_size,
        high_contrast: preferences.high_contrast,
      },
      mastery_by_term: masteryByTerm,
      due_review_snapshot: dueReviewSnapshot,
      session_ids_included: sessions.map((s) => s.session_id),
    },
  }
}

/**
 * Generate a JSON string for session.json export.
 */
export function generateSessionJson(data: LocalStudyData): string {
  const exp = buildSessionExport(data)
  return JSON.stringify(exp, null, 2)
}

/**
 * Escape a CSV value — wrap in quotes if it contains commas, quotes, or newlines.
 */
function csvEscape(value: string | number | boolean | undefined): string {
  if (value === undefined || value === null) return ""
  const str = String(value)
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

/**
 * Build a SummaryCsvRow from a session + export metadata.
 */
function sessionToCsvRow(
  session: SessionRecord,
  data: LocalStudyData
): SummaryCsvRow {
  return {
    schema_version: EXPORT_SCHEMA_VERSION,
    exported_at: new Date().toISOString(),
    student_name: data.student.student_name ?? "",
    class_name: data.student.class_name ?? "",
    session_id: session.session_id,
    activity_type: session.activity.activity_type,
    mode: session.activity.mode,
    unit_id: session.curriculum.unit_id,
    lesson_id: session.curriculum.lesson_id,
    topic_tags: session.curriculum.topic_tags.join("|"),
    term_count: session.curriculum.term_slugs.length,
    items_seen: session.results.items_seen,
    items_answered: session.results.items_answered,
    items_correct: session.results.items_correct,
    items_incorrect: session.results.items_incorrect,
    accuracy: Math.round(session.results.accuracy * 100) / 100,
    retry_count: session.results.retry_count,
    score: session.results.score,
    duration_seconds: session.duration_seconds,
    started_at: session.started_at,
    ended_at: session.ended_at,
    prompt_field: session.responses[0]?.prompt_field ?? data.preferences.glossary_prompt_field,
    answer_field: session.responses[0]?.answer_field ?? data.preferences.glossary_answer_field,
    self_rating: session.notes.self_rating,
    // optional
    teacher_name: data.student.teacher_name,
    school_year: data.student.school_year,
    student_note: session.notes.student_note,
    mastery_delta: session.results.mastery_delta,
    due_count_at_export: data.study_state.due_review_snapshot.filter((e) => e.is_due).length,
  }
}

/**
 * Generate a CSV string for summary.csv export.
 */
export function generateSummaryCsv(data: LocalStudyData): string {
  const allColumns = [
    ...SUMMARY_CSV_REQUIRED_COLUMNS,
    ...SUMMARY_CSV_OPTIONAL_COLUMNS,
  ]

  const header = allColumns.join(",")
  const rows = data.sessions.map((session) => {
    const row = sessionToCsvRow(session, data)
    return allColumns.map((col) => csvEscape(row[col as keyof SummaryCsvRow])).join(",")
  })

  return [header, ...rows].join("\n")
}

/**
 * Generate a timestamped filename for export.
 */
export function exportFilename(type: "csv" | "json"): string {
  const now = new Date()
  const pad = (n: number) => String(n).padStart(2, "0")
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`
  const prefix = type === "csv" ? "mbo-study-summary" : "mbo-study-session"
  return `${prefix}-${stamp}.${type}`
}

/**
 * Trigger a browser download of content as a file.
 * No-op on server.
 */
export function downloadFile(content: string, filename: string, mimeType: string): void {
  if (typeof window === "undefined") return

  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/**
 * Export summary.csv and trigger download.
 * Returns the filename used.
 */
export function exportSummaryCsv(data: LocalStudyData): string {
  const csv = generateSummaryCsv(data)
  const filename = exportFilename("csv")
  downloadFile(csv, filename, "text/csv")
  recordExportInHistory(data, "csv", filename, csv.length)
  return filename
}

/**
 * Export session.json and trigger download.
 * Returns the filename used.
 */
export function exportSessionJsonFile(data: LocalStudyData): string {
  const json = generateSessionJson(data)
  const filename = exportFilename("json")
  downloadFile(json, filename, "application/json")
  recordExportInHistory(data, "json", filename, json.length)
  return filename
}

function recordExportInHistory(
  data: LocalStudyData,
  type: "csv" | "json",
  filename: string,
  contentLength: number
): void {
  data.export_history.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type,
    filename,
    date: new Date().toISOString(),
    size_bytes: contentLength,
  })
  saveStudyData(data)
}

// ---------------------------------------------------------------------------
// Import / Restore
// ---------------------------------------------------------------------------

export interface ImportSuccess {
  ok: true
  data: LocalStudyData
  mergedSessionCount: number
  mergedReflectionCount: number
}

export interface ImportFailure {
  ok: false
  error: string
}

export type ImportResult = ImportSuccess | ImportFailure

/**
 * Parse a session.json string and merge into existing local study data.
 * If no existing data is provided, merges into a fresh payload.
 */
export function importSessionJson(
  jsonString: string,
  existing?: LocalStudyData
): ImportResult {
  let parsed: SessionExport
  try {
    parsed = JSON.parse(jsonString) as SessionExport
  } catch {
    return { ok: false, error: "Invalid JSON — file could not be parsed." }
  }

  if (parsed.schema_name !== EXPORT_SCHEMA_NAME) {
    return { ok: false, error: `Unexpected schema: expected "${EXPORT_SCHEMA_NAME}", got "${parsed.schema_name}".` }
  }

  if (!parsed.schema_version) {
    return { ok: false, error: "Missing schema_version in export file." }
  }

  const [major] = parsed.schema_version.split(".")
  if (major !== "1") {
    return { ok: false, error: `Unsupported schema version: ${parsed.schema_version}. Only v1.x imports are supported.` }
  }

  const target = existing ?? createEmptyLocalData()

  // Deduplicate sessions by session_id
  const existingSessionIds = new Set(target.sessions.map((s) => s.session_id))
  const newSessions: SessionRecord[] = []
  for (const s of parsed.sessions) {
    if (!existingSessionIds.has(s.session_id)) {
      newSessions.push(s as SessionRecord)
      existingSessionIds.add(s.session_id)
    }
  }

  // Deduplicate reflections by reflection_id
  const existingReflectionIds = new Set(target.reflections.map((r) => r.reflection_id))
  const newReflections: Reflection[] = []
  for (const r of parsed.reflections) {
    if (!existingReflectionIds.has(r.reflection_id)) {
      newReflections.push(r as Reflection)
      existingReflectionIds.add(r.reflection_id)
    }
  }

  // Merge mastery — overwrite with imported values (latest wins)
  const masteryMap = new Map(target.study_state.mastery_by_term.map((m) => [m.term_slug, m]))
  for (const m of parsed.study_state.mastery_by_term) {
    masteryMap.set(m.term_slug, m as TermMastery)
  }

  // Merge due review — overwrite with imported values
  const dueMap = new Map(target.study_state.due_review_snapshot.map((d) => [d.term_slug, d]))
  for (const d of parsed.study_state.due_review_snapshot) {
    dueMap.set(d.term_slug, d as DueReviewEntry)
  }

  const merged: LocalStudyData = {
    ...target,
    sessions: [...target.sessions, ...newSessions],
    reflections: [...target.reflections, ...newReflections],
    study_state: {
      ...target.study_state,
      mastery_by_term: [...masteryMap.values()],
      due_review_snapshot: [...dueMap.values()],
    },
    last_updated_at: new Date().toISOString(),
  }

  return {
    ok: true,
    data: merged,
    mergedSessionCount: newSessions.length,
    mergedReflectionCount: newReflections.length,
  }
}

/**
 * Import from a JSON string and persist to localStorage.
 */
export function importAndSave(jsonString: string): ImportResult {
  const existing = loadStudyData()
  const result = importSessionJson(jsonString, existing)
  if (result.ok) {
    saveStudyData(result.data)
  }
  return result
}
