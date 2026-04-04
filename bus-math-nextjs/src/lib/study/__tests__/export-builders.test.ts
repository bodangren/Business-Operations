import { describe, it, expect } from "vitest"
import {
  buildSessionExport,
  generateSessionJson,
  generateSummaryCsv,
  exportFilename,
  importSessionJson,
} from "../export"
import {
  EXPORT_SCHEMA_NAME,
  EXPORT_SCHEMA_VERSION,
  SUMMARY_CSV_REQUIRED_COLUMNS,
} from "../export-schema"
import {
  createEmptyLocalData,
  type LocalStudyData,
  type SessionRecord,
  type TermMastery,
  type DueReviewEntry,
  type Reflection,
} from "../storage-schema"

// ---------------------------------------------------------------------------
// Test fixtures
// ---------------------------------------------------------------------------

function sampleSession(overrides: Partial<SessionRecord> = {}): SessionRecord {
  return {
    session_id: "sess-001",
    started_at: "2026-04-01T10:00:00Z",
    ended_at: "2026-04-01T10:05:00Z",
    duration_seconds: 300,
    activity: {
      activity_id: "act-001",
      activity_type: "flashcards",
      mode: "solo",
      route: "/student/practice-hub/flashcards",
      title: "flashcards session",
    },
    curriculum: {
      unit_id: "unit01",
      lesson_id: "unit01-lesson01",
      topic_tags: ["accounting"],
      term_slugs: ["accounting-equation"],
    },
    results: {
      items_seen: 3,
      items_answered: 3,
      items_correct: 2,
      items_incorrect: 1,
      accuracy: 2 / 3,
      retry_count: 0,
      score: 2,
      mastery_delta: 0.0,
    },
    responses: [
      {
        item_id: "fc-0",
        item_type: "glossary-card",
        term_slug: "accounting-equation",
        prompt_field: "term_en",
        answer_field: "def_en",
        prompt_value: "Accounting Equation",
        expected_answer: "Assets = Liabilities + Equity",
        student_answer: "Assets = Liabilities + Equity",
        is_correct: true,
        attempt_number: 1,
        response_time_ms: 3200,
        review_outcome: "good",
      },
    ],
    notes: { self_rating: "okay" },
    ...overrides,
  }
}

function sampleMastery(): TermMastery {
  return {
    term_slug: "accounting-equation",
    units: ["unit01"],
    times_seen: 3,
    times_correct: 2,
    times_incorrect: 1,
    last_result: "correct",
    mastery_score: 0.65,
    proficiency_band: "proficient",
    last_reviewed_at: "2026-04-01T10:05:00Z",
  }
}

function sampleDueReview(): DueReviewEntry {
  return {
    term_slug: "accounting-equation",
    scheduled_for: "2026-04-02T10:00:00Z",
    is_due: false,
    scheduler: {
      engine: "fsrs",
      state: {
        stability: 2.5,
        difficulty: 5.0,
        elapsed_days: 0,
        scheduled_days: 1,
        reps: 1,
        lapses: 0,
      },
    },
  }
}

function sampleReflection(): Reflection {
  return {
    reflection_id: "ref-001",
    created_at: "2026-04-01T10:06:00Z",
    unit_id: "unit01",
    lesson_id: "unit01-lesson01",
    source: "practice-hub",
    prompt: "Which term is still confusing?",
    response: "Assets vs equity — still fuzzy.",
  }
}

function populatedLocalData(): LocalStudyData {
  const data = createEmptyLocalData()
  data.student = { student_name: "Test Student", class_name: "Period 3" }
  data.sessions = [sampleSession()]
  data.study_state.mastery_by_term = [sampleMastery()]
  data.study_state.due_review_snapshot = [sampleDueReview()]
  data.study_state.aggregate_stats = {
    total_terms_tracked: 1,
    total_due_now: 0,
    total_sessions: 1,
    total_questions_answered: 3,
    overall_accuracy: 2 / 3,
    total_study_seconds: 300,
  }
  data.reflections = [sampleReflection()]
  return data
}

// ---------------------------------------------------------------------------
// buildSessionExport
// ---------------------------------------------------------------------------

describe("buildSessionExport", () => {
  it("returns valid SessionExport shape from empty data", () => {
    const data = createEmptyLocalData()
    const exp = buildSessionExport(data)

    expect(exp.schema_name).toBe(EXPORT_SCHEMA_NAME)
    expect(exp.schema_version).toBe(EXPORT_SCHEMA_VERSION)
    expect(exp.exported_at).toBeTruthy()
    expect(exp.app.product).toBe("Math for Business Operations")
    expect(exp.sessions).toEqual([])
    expect(exp.reflections).toEqual([])
    expect(exp.restore_payload.session_ids_included).toEqual([])
  })

  it("maps student metadata", () => {
    const data = createEmptyLocalData()
    data.student = { student_name: "Alice", class_name: "Period 1", teacher_name: "Mr. Lee" }
    const exp = buildSessionExport(data)

    expect(exp.student.student_name).toBe("Alice")
    expect(exp.student.class_name).toBe("Period 1")
    expect(exp.student.teacher_name).toBe("Mr. Lee")
  })

  it("maps preferences", () => {
    const data = createEmptyLocalData()
    data.preferences.glossary_prompt_field = "term_zh"
    data.preferences.glossary_answer_field = "def_zh"
    const exp = buildSessionExport(data)

    expect(exp.preferences.glossary_prompt_field).toBe("term_zh")
    expect(exp.preferences.glossary_answer_field).toBe("def_zh")
  })

  it("derives content scope from sessions", () => {
    const data = populatedLocalData()
    const exp = buildSessionExport(data)

    expect(exp.content_scope.units_seen).toContain("unit01")
    expect(exp.content_scope.lessons_seen).toContain("unit01-lesson01")
    expect(exp.content_scope.terms_seen).toContain("accounting-equation")
    expect(exp.content_scope.topics_seen).toContain("accounting")
  })

  it("maps study state mastery and due review", () => {
    const data = populatedLocalData()
    const exp = buildSessionExport(data)

    expect(exp.study_state.mastery_by_term).toHaveLength(1)
    expect(exp.study_state.mastery_by_term[0].term_slug).toBe("accounting-equation")
    expect(exp.study_state.due_review_snapshot).toHaveLength(1)
    expect(exp.study_state.aggregate_stats.total_sessions).toBe(1)
  })

  it("maps sessions with responses", () => {
    const data = populatedLocalData()
    const exp = buildSessionExport(data)

    expect(exp.sessions).toHaveLength(1)
    expect(exp.sessions[0].session_id).toBe("sess-001")
    expect(exp.sessions[0].responses).toHaveLength(1)
    expect(exp.sessions[0].results.accuracy).toBeCloseTo(2 / 3)
  })

  it("maps reflections", () => {
    const data = populatedLocalData()
    const exp = buildSessionExport(data)

    expect(exp.reflections).toHaveLength(1)
    expect(exp.reflections[0].reflection_id).toBe("ref-001")
  })

  it("builds restore_payload with session IDs and preferences", () => {
    const data = populatedLocalData()
    const exp = buildSessionExport(data)

    expect(exp.restore_payload.session_ids_included).toContain("sess-001")
    expect(exp.restore_payload.preferences.glossary_prompt_field).toBe("term_en")
    expect(exp.restore_payload.mastery_by_term).toHaveLength(1)
  })
})

// ---------------------------------------------------------------------------
// generateSessionJson
// ---------------------------------------------------------------------------

describe("generateSessionJson", () => {
  it("produces parseable JSON", () => {
    const data = populatedLocalData()
    const json = generateSessionJson(data)
    const parsed = JSON.parse(json)

    expect(parsed.schema_name).toBe(EXPORT_SCHEMA_NAME)
    expect(parsed.schema_version).toBe(EXPORT_SCHEMA_VERSION)
  })

  it("includes all sessions", () => {
    const data = populatedLocalData()
    const json = generateSessionJson(data)
    const parsed = JSON.parse(json)

    expect(parsed.sessions).toHaveLength(1)
  })
})

// ---------------------------------------------------------------------------
// generateSummaryCsv
// ---------------------------------------------------------------------------

describe("generateSummaryCsv", () => {
  it("returns header row with required columns", () => {
    const data = createEmptyLocalData()
    const csv = generateSummaryCsv(data)
    const lines = csv.trim().split("\n")

    expect(lines).toHaveLength(1) // header only, no sessions
    const headers = lines[0].split(",")
    for (const col of SUMMARY_CSV_REQUIRED_COLUMNS) {
      expect(headers).toContain(col)
    }
  })

  it("includes one data row per session", () => {
    const data = populatedLocalData()
    const csv = generateSummaryCsv(data)
    const lines = csv.trim().split("\n")

    expect(lines).toHaveLength(2) // header + 1 session
  })

  it("pipes join topic_tags", () => {
    const data = populatedLocalData()
    data.sessions[0].curriculum.topic_tags = ["accounting", "finance"]
    const csv = generateSummaryCsv(data)
    const lines = csv.trim().split("\n")
    const row = lines[1]

    // topic_tags should be pipe-delimited
    expect(row).toContain("accounting|finance")
  })

  it("uses empty string for missing optional fields", () => {
    const data = populatedLocalData()
    const csv = generateSummaryCsv(data)
    const lines = csv.trim().split("\n")
    const headers = lines[0].split(",")
    const values = lines[1].split(",")

    const teacherIdx = headers.indexOf("teacher_name")
    expect(teacherIdx).toBeGreaterThanOrEqual(0)
    // student has no teacher_name set, so value should be empty
    expect(values[teacherIdx]).toBe("")
  })

  it("rounds accuracy to 2 decimal places", () => {
    const data = populatedLocalData()
    const csv = generateSummaryCsv(data)
    const lines = csv.trim().split("\n")
    const headers = lines[0].split(",")
    const values = lines[1].split(",")
    const accIdx = headers.indexOf("accuracy")

    const acc = parseFloat(values[accIdx])
    expect(acc).toBeCloseTo(0.67, 1)
  })

  it("handles multiple sessions", () => {
    const data = populatedLocalData()
    data.sessions.push(
      sampleSession({
        session_id: "sess-002",
        activity: { ...sampleSession().activity, activity_type: "matching" },
      })
    )
    const csv = generateSummaryCsv(data)
    const lines = csv.trim().split("\n")

    expect(lines).toHaveLength(3) // header + 2 sessions
  })
})

// ---------------------------------------------------------------------------
// exportFilename
// ---------------------------------------------------------------------------

describe("exportFilename", () => {
  it("generates csv filename with timestamp", () => {
    const fn = exportFilename("csv")
    expect(fn).toMatch(/^mbo-study-summary-\d{8}-\d{6}\.csv$/)
  })

  it("generates json filename with timestamp", () => {
    const fn = exportFilename("json")
    expect(fn).toMatch(/^mbo-study-session-\d{8}-\d{6}\.json$/)
  })
})

// ---------------------------------------------------------------------------
// importSessionJson
// ---------------------------------------------------------------------------

describe("importSessionJson", () => {
  it("rejects invalid JSON", () => {
    const result = importSessionJson("not json")
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toContain("Invalid JSON")
    }
  })

  it("rejects wrong schema name", () => {
    const bad = JSON.stringify({ schema_name: "wrong", schema_version: "1.0.0" })
    const result = importSessionJson(bad)
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toContain("schema")
    }
  })

  it("rejects unsupported major version", () => {
    const bad = JSON.stringify({ schema_name: EXPORT_SCHEMA_NAME, schema_version: "2.0.0" })
    const result = importSessionJson(bad)
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error).toContain("version")
    }
  })

  it("accepts valid export and returns merged data", () => {
    const data = populatedLocalData()
    const json = generateSessionJson(data)
    const result = importSessionJson(json)

    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.data.sessions).toHaveLength(1)
      expect(result.data.sessions[0].session_id).toBe("sess-001")
      expect(result.data.study_state.mastery_by_term).toHaveLength(1)
      expect(result.data.reflections).toHaveLength(1)
      expect(result.mergedSessionCount).toBe(1)
    }
  })

  it("deduplicates sessions by session_id", () => {
    const data = populatedLocalData()
    const json = generateSessionJson(data)

    // Import into data that already has the same session
    const existing = populatedLocalData()
    const result = importSessionJson(json, existing)

    expect(result.ok).toBe(true)
    if (result.ok) {
      // Should not duplicate
      expect(result.data.sessions).toHaveLength(1)
      expect(result.mergedSessionCount).toBe(0)
    }
  })

  it("merges new sessions into existing data", () => {
    const data = populatedLocalData()
    const json = generateSessionJson(data)

    const existing = createEmptyLocalData()
    existing.sessions = [sampleSession({ session_id: "existing-sess" })]
    const result = importSessionJson(json, existing)

    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.data.sessions).toHaveLength(2)
      expect(result.mergedSessionCount).toBe(1)
    }
  })

  it("deduplicates reflections by reflection_id", () => {
    const data = populatedLocalData()
    const json = generateSessionJson(data)

    const existing = populatedLocalData()
    const result = importSessionJson(json, existing)

    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.data.reflections).toHaveLength(1)
    }
  })

  it("merges mastery by term (keeps latest)", () => {
    const data = populatedLocalData()
    data.study_state.mastery_by_term[0].mastery_score = 0.9
    const json = generateSessionJson(data)

    const existing = populatedLocalData()
    existing.study_state.mastery_by_term[0].mastery_score = 0.3
    const result = importSessionJson(json, existing)

    expect(result.ok).toBe(true)
    if (result.ok) {
      const mastery = result.data.study_state.mastery_by_term.find(
        (m) => m.term_slug === "accounting-equation"
      )
      // Import should overwrite with the imported value
      expect(mastery?.mastery_score).toBe(0.9)
    }
  })
})
