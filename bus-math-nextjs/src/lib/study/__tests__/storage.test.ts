import { describe, it, expect, beforeEach, vi } from "vitest"
import {
  loadStudyData,
  saveStudyData,
  resetStudyData,
  clearStudyData,
  migrate,
  getLastUpdated,
} from "../storage"
import {
  STORAGE_ROOT_KEY,
  STORAGE_SCHEMA_VERSION,
  createEmptyLocalData,
  type SessionRecord,
} from "../storage-schema"

// ---------------------------------------------------------------------------
// localStorage mock
// ---------------------------------------------------------------------------

function createLocalStorageMock() {
  const store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      for (const k of Object.keys(store)) delete store[k]
    }),
    get length() {
      return Object.keys(store).length
    },
    key: vi.fn((index: number) => Object.keys(store)[index] ?? null),
  }
}

beforeEach(() => {
  const mock = createLocalStorageMock()
  vi.stubGlobal("window", { localStorage: mock })
  vi.stubGlobal("localStorage", mock)
})

// ---------------------------------------------------------------------------
// loadStudyData
// ---------------------------------------------------------------------------

describe("loadStudyData", () => {
  it("returns empty data when localStorage is empty", () => {
    const data = loadStudyData()
    expect(data.schema_version).toBe(STORAGE_SCHEMA_VERSION)
    expect(data.sessions).toEqual([])
    expect(data.reflections).toEqual([])
    expect(data.study_state.mastery_by_term).toEqual([])
    expect(data.study_state.due_review_snapshot).toEqual([])
  })

  it("returns empty data when stored JSON is corrupted", () => {
    localStorage.setItem(STORAGE_ROOT_KEY, "not-json{{{")
    const data = loadStudyData()
    expect(data.schema_version).toBe(STORAGE_SCHEMA_VERSION)
    expect(data.sessions).toEqual([])
  })

  it("returns stored data when schema version matches", () => {
    const stored = createEmptyLocalData()
    stored.sessions = [
      {
        session_id: "s1",
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
        responses: [],
        notes: { self_rating: "easy" },
      },
    ]
    localStorage.setItem(STORAGE_ROOT_KEY, JSON.stringify(stored))
    const data = loadStudyData()
    expect(data.sessions).toHaveLength(1)
    expect(data.sessions[0].session_id).toBe("s1")
  })

  it("handles major version mismatch by returning fresh data", () => {
    localStorage.setItem(
      STORAGE_ROOT_KEY,
      JSON.stringify({ schema_version: "2.0.0" })
    )
    const data = loadStudyData()
    expect(data.schema_version).toBe(STORAGE_SCHEMA_VERSION)
    expect(data.sessions).toEqual([])
  })
})

// ---------------------------------------------------------------------------
// saveStudyData
// ---------------------------------------------------------------------------

describe("saveStudyData", () => {
  it("persists data to localStorage", () => {
    const data = createEmptyLocalData()
    data.student = { student_name: "Test Student" }
    const ok = saveStudyData(data)
    expect(ok).toBe(true)

    const raw = localStorage.getItem(STORAGE_ROOT_KEY)
    expect(raw).toBeTruthy()
    const parsed = JSON.parse(raw!)
    expect(parsed.student.student_name).toBe("Test Student")
  })

  it("updates last_updated_at on save", () => {
    const data = createEmptyLocalData()
    // Force an old timestamp so it definitely changes on save
    data.last_updated_at = "2020-01-01T00:00:00.000Z"
    saveStudyData(data)
    const parsed = JSON.parse(localStorage.getItem(STORAGE_ROOT_KEY)!)
    expect(parsed.last_updated_at).not.toBe("2020-01-01T00:00:00.000Z")
  })
})

// ---------------------------------------------------------------------------
// resetStudyData / clearStudyData
// ---------------------------------------------------------------------------

describe("resetStudyData", () => {
  it("overwrites existing data with defaults", () => {
    const existing = createEmptyLocalData()
    existing.sessions = [{ session_id: "old" }] as unknown as SessionRecord[]
    localStorage.setItem(STORAGE_ROOT_KEY, JSON.stringify(existing))

    const fresh = resetStudyData()
    expect(fresh.sessions).toEqual([])

    const stored = JSON.parse(localStorage.getItem(STORAGE_ROOT_KEY)!)
    expect(stored.sessions).toEqual([])
  })
})

describe("clearStudyData", () => {
  it("removes the key from localStorage", () => {
    localStorage.setItem(STORAGE_ROOT_KEY, "{}")
    clearStudyData()
    expect(localStorage.getItem(STORAGE_ROOT_KEY)).toBeNull()
  })
})

// ---------------------------------------------------------------------------
// migrate
// ---------------------------------------------------------------------------

describe("migrate", () => {
  it("returns null for data without schema_version", () => {
    expect(migrate({})).toBeNull()
  })

  it("returns null for major version 2+", () => {
    expect(migrate({ schema_version: "2.0.0" })).toBeNull()
  })

  it("migrates v1.0.x data forward", () => {
    const result = migrate({
      schema_version: "1.0.0",
      student: { student_name: "Alice" },
      sessions: [],
    })
    expect(result).not.toBeNull()
    expect(result!.schema_version).toBe(STORAGE_SCHEMA_VERSION)
    expect(result!.student.student_name).toBe("Alice")
  })
})

// ---------------------------------------------------------------------------
// getLastUpdated
// ---------------------------------------------------------------------------

describe("getLastUpdated", () => {
  it("returns null when nothing is stored", () => {
    expect(getLastUpdated()).toBeNull()
  })

  it("returns ISO timestamp after save", () => {
    saveStudyData(createEmptyLocalData())
    const ts = getLastUpdated()
    expect(ts).toBeTruthy()
    expect(new Date(ts!).getTime()).not.toBeNaN()
  })
})
