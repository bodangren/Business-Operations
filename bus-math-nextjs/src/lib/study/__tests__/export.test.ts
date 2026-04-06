import { describe, it, expect } from "vitest"
import type { SessionExport, ExportSession } from "../export-schema"
import {
  EXPORT_SCHEMA_NAME,
  EXPORT_SCHEMA_VERSION,
  SUMMARY_CSV_REQUIRED_COLUMNS,
  SUMMARY_CSV_OPTIONAL_COLUMNS,
} from "../export-schema"
import { createEmptyLocalData } from "../storage-schema"

// ---------------------------------------------------------------------------
// Export schema types — structural validation helpers
// ---------------------------------------------------------------------------

function isValidSessionExport(obj: unknown): obj is SessionExport {
  if (typeof obj !== "object" || obj === null) return false
  const e = obj as Record<string, unknown>
  return (
    e.schema_name === EXPORT_SCHEMA_NAME &&
    e.schema_version === EXPORT_SCHEMA_VERSION &&
    typeof e.exported_at === "string" &&
    typeof e.app === "object" &&
    typeof e.student === "object" &&
    typeof e.preferences === "object" &&
    typeof e.content_scope === "object" &&
    typeof e.study_state === "object" &&
    Array.isArray(e.sessions) &&
    Array.isArray(e.reflections) &&
    typeof e.restore_payload === "object" &&
    e.restore_payload !== null
  )
}

function buildMinimalExport(): SessionExport {
  return {
    schema_name: EXPORT_SCHEMA_NAME,
    schema_version: EXPORT_SCHEMA_VERSION,
    exported_at: new Date().toISOString(),
    app: {
      product: "Math for Business Operations",
      app_version: "0.1.0",
    },
    student: {},
    preferences: {
      glossary_prompt_field: "term_en",
      glossary_answer_field: "def_en",
      study_language_mode: "en_to_en",
      font_size: "medium",
      high_contrast: false,
    },
    content_scope: {
      units_seen: [],
      lessons_seen: [],
      topics_seen: [],
      terms_seen: [],
    },
    study_state: {
      mastery_by_term: [],
      due_review_snapshot: [],
      aggregate_stats: {
        total_terms_tracked: 0,
        total_due_now: 0,
        total_sessions: 0,
        total_questions_answered: 0,
        overall_accuracy: 0,
        total_study_seconds: 0,
      },
    },
    sessions: [],
    reflections: [],
    restore_payload: {
      preferences: {
        glossary_prompt_field: "term_en",
        glossary_answer_field: "def_en",
        study_language_mode: "en_to_en",
        font_size: "medium",
        high_contrast: false,
      },
      mastery_by_term: [],
      due_review_snapshot: [],
      session_ids_included: [],
    },
  }
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("export schema constants", () => {
  it("has correct schema name", () => {
    expect(EXPORT_SCHEMA_NAME).toBe("mbo-study-export")
  })

  it("has correct schema version", () => {
    expect(EXPORT_SCHEMA_VERSION).toBe("1.0.0")
  })
})

describe("SessionExport structural validation", () => {
  it("validates a minimal valid export", () => {
    const minimal = buildMinimalExport()
    expect(isValidSessionExport(minimal)).toBe(true)
  })

  it("rejects null", () => {
    expect(isValidSessionExport(null)).toBe(false)
  })

  it("rejects missing schema_name", () => {
    const bad = { ...buildMinimalExport(), schema_name: undefined }
    expect(isValidSessionExport(bad)).toBe(false)
  })

  it("rejects wrong schema version", () => {
    const bad = { ...buildMinimalExport(), schema_version: "2.0.0" }
    expect(isValidSessionExport(bad)).toBe(false)
  })

  it("requires sessions array", () => {
    const bad = { ...buildMinimalExport(), sessions: "not-array" }
    expect(isValidSessionExport(bad)).toBe(false)
  })

  it("requires reflections array", () => {
    const bad = { ...buildMinimalExport(), reflections: "not-array" }
    expect(isValidSessionExport(bad)).toBe(false)
  })

  it("requires restore_payload object", () => {
    const bad = { ...buildMinimalExport(), restore_payload: null }
    expect(isValidSessionExport(bad)).toBe(false)
  })
})

describe("session export with data", () => {
  it("accepts export with sessions", () => {
    const exp = buildMinimalExport()
    exp.sessions = [
      {
        session_id: "sess-1",
        started_at: "2026-04-01T00:00:00Z",
        ended_at: "2026-04-01T00:05:00Z",
        duration_seconds: 300,
        activity: {
          activity_id: "flash-1",
          activity_type: "flashcards",
          mode: "solo",
          route: "/practice/flashcards",
          title: "Flashcards",
        },
        curriculum: {
          unit_id: "unit01",
          lesson_id: "unit01-lesson01",
          topic_tags: ["accounting"],
          term_slugs: ["accounting-equation"],
        },
        results: {
          items_seen: 5,
          items_answered: 5,
          items_correct: 4,
          items_incorrect: 1,
          accuracy: 0.8,
          retry_count: 0,
          score: 80,
          mastery_delta: 0.1,
        },
        responses: [
          {
            item_id: "accounting-equation::term_en->def_en",
            item_type: "glossary-card",
            term_slug: "accounting-equation",
            prompt_field: "term_en",
            answer_field: "def_en",
            prompt_value: "Accounting Equation",
            expected_answer: "Assets = Liabilities + Equity",
            is_correct: true,
            attempt_number: 1,
            response_time_ms: 3000,
            review_outcome: "good",
          },
        ],
        notes: { self_rating: "easy" },
      },
    ]
    expect(isValidSessionExport(exp)).toBe(true)
    expect(exp.sessions[0].responses).toHaveLength(1)
  })

  it("accepts export with reflections", () => {
    const exp = buildMinimalExport()
    exp.reflections = [
      {
        reflection_id: "r1",
        created_at: "2026-04-01T00:06:00Z",
        unit_id: "unit01",
        lesson_id: "unit01-lesson01",
        source: "practice-hub",
        prompt: "Which term is still confusing?",
        response: "Assets vs equity.",
      },
    ]
    expect(isValidSessionExport(exp)).toBe(true)
  })

  it("restore_payload contains session IDs", () => {
    const exp = buildMinimalExport()
    exp.sessions = [{ session_id: "s1" }] as unknown as ExportSession[]
    exp.restore_payload.session_ids_included = ["s1"]
    expect(exp.restore_payload.session_ids_included).toContain("s1")
  })
})

describe("summary.csv column definitions", () => {
  it("has exactly 24 required columns", () => {
    expect(SUMMARY_CSV_REQUIRED_COLUMNS).toHaveLength(24)
  })

  it("includes session_id in required columns", () => {
    expect(SUMMARY_CSV_REQUIRED_COLUMNS).toContain("session_id")
  })

  it("includes accuracy in required columns", () => {
    expect(SUMMARY_CSV_REQUIRED_COLUMNS).toContain("accuracy")
  })

  it("has 5 optional columns", () => {
    expect(SUMMARY_CSV_OPTIONAL_COLUMNS).toHaveLength(5)
  })

  it("no overlap between required and optional columns", () => {
    const requiredSet = new Set<string>(SUMMARY_CSV_REQUIRED_COLUMNS)
    for (const col of SUMMARY_CSV_OPTIONAL_COLUMNS) {
      expect(requiredSet.has(col)).toBe(false)
    }
  })
})

describe("local study data to export conversion", () => {
  it("createEmptyLocalData produces valid export source", () => {
    const local = createEmptyLocalData()
    // Verify the local data has the fields we need to derive an export
    expect(local.study_state.mastery_by_term).toEqual([])
    expect(local.study_state.due_review_snapshot).toEqual([])
    expect(local.study_state.aggregate_stats.total_sessions).toBe(0)
    expect(local.sessions).toEqual([])
    expect(local.reflections).toEqual([])
    expect(local.preferences.glossary_prompt_field).toBe("term_en")
  })
})
