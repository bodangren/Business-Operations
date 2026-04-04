import { describe, it, expect } from "vitest"
import { hasAnyStudyHistory, getDueInfoForUnit } from "../StudyDataContext"
import { createEmptyLocalData, type DueReviewEntry } from "@/lib/study/storage-schema"
import type { UnitId } from "@/types/glossary"

// ---------------------------------------------------------------------------
// hasAnyStudyHistory
// ---------------------------------------------------------------------------

describe("hasAnyStudyHistory", () => {
  it("returns false for empty data", () => {
    const data = createEmptyLocalData()
    expect(hasAnyStudyHistory(data)).toBe(false)
  })

  it("returns true when at least one term has been seen", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      {
        term_slug: "accounting-equation",
        units: ["unit01"],
        times_seen: 1,
        times_correct: 1,
        times_incorrect: 0,
        last_result: "correct",
        mastery_score: 1,
        proficiency_band: "developing",
        last_reviewed_at: "2026-04-01T00:00:00Z",
      },
    ]
    expect(hasAnyStudyHistory(data)).toBe(true)
  })

  it("returns false when terms exist but times_seen is 0", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      {
        term_slug: "accounting-equation",
        units: ["unit01"],
        times_seen: 0,
        times_correct: 0,
        times_incorrect: 0,
        last_result: "skipped",
        mastery_score: 0,
        proficiency_band: "new",
        last_reviewed_at: "2026-04-01T00:00:00Z",
      },
    ]
    expect(hasAnyStudyHistory(data)).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// getDueInfoForUnit
// ---------------------------------------------------------------------------

describe("getDueInfoForUnit", () => {
  const MOCK_SLUG_UNITS: Record<string, UnitId[]> = {
    "accounting-equation": ["unit01", "unit03"],
    assets: ["unit01", "unit03", "unit08"],
    revenue: ["unit02"],
  }

  function makeDueEntry(slug: string, scheduledFor: string, isDue = true): DueReviewEntry {
    return {
      term_slug: slug,
      scheduled_for: scheduledFor,
      is_due: isDue,
      scheduler: {
        engine: "fsrs",
        state: {
          stability: 1,
          difficulty: 1,
          elapsed_days: 0,
          scheduled_days: 0,
          reps: 0,
          lapses: 0,
        },
      },
    }
  }

  it("returns zero due count and hasStudied false for empty data", () => {
    const data = createEmptyLocalData()
    const info = getDueInfoForUnit("unit01", data, MOCK_SLUG_UNITS)
    expect(info.dueCount).toBe(0)
    expect(info.hasStudied).toBe(false)
  })

  it("counts due terms for the specified unit", () => {
    const data = createEmptyLocalData()
    const now = new Date().toISOString()
    data.study_state.due_review_snapshot = [
      makeDueEntry("accounting-equation", now),
      makeDueEntry("assets", now),
      makeDueEntry("revenue", now),
    ]
    // unit01 has accounting-equation and assets (2 terms), not revenue
    const info = getDueInfoForUnit("unit01", data, MOCK_SLUG_UNITS)
    expect(info.dueCount).toBe(2)
  })

  it("returns hasStudied true when terms have been seen", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      {
        term_slug: "revenue",
        units: ["unit02"],
        times_seen: 3,
        times_correct: 2,
        times_incorrect: 1,
        last_result: "correct",
        mastery_score: 0.67,
        proficiency_band: "developing",
        last_reviewed_at: "2026-04-01T00:00:00Z",
      },
    ]
    const info = getDueInfoForUnit("unit01", data, MOCK_SLUG_UNITS)
    expect(info.hasStudied).toBe(true)
  })

  it("does not count terms not belonging to the unit", () => {
    const data = createEmptyLocalData()
    const now = new Date().toISOString()
    data.study_state.due_review_snapshot = [
      makeDueEntry("revenue", now), // only in unit02
    ]
    const info = getDueInfoForUnit("unit01", data, MOCK_SLUG_UNITS)
    expect(info.dueCount).toBe(0)
  })
})
