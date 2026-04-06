import { describe, it, expect } from "vitest"
import { getUnitMasteryInfo } from "../StudyDataContext"
import { createEmptyLocalData, type TermMastery } from "@/lib/study/storage-schema"
import type { UnitId } from "@/types/glossary"

// ---------------------------------------------------------------------------
// getUnitMasteryInfo
// ---------------------------------------------------------------------------

describe("getUnitMasteryInfo", () => {
  const MOCK_UNIT_TERMS: Record<UnitId, number> = {
    unit01: 5,
    unit02: 3,
    unit03: 4,
    unit04: 2,
    unit05: 3,
    unit06: 2,
    unit07: 1,
    unit08: 2,
  }

  function makeMastery(slug: string, units: UnitId[], score: number, seen = true): TermMastery {
    return {
      term_slug: slug,
      units,
      times_seen: seen ? 1 : 0,
      times_correct: seen ? 1 : 0,
      times_incorrect: 0,
      last_result: seen ? "correct" : "skipped",
      mastery_score: score,
      proficiency_band: score >= 0.85 ? "strong" : score >= 0.6 ? "proficient" : score >= 0.3 ? "developing" : "new",
      last_reviewed_at: "2026-04-01T00:00:00Z",
    }
  }

  it("returns zero studied with correct total for empty data", () => {
    const data = createEmptyLocalData()
    const info = getUnitMasteryInfo("unit01", data, MOCK_UNIT_TERMS)
    expect(info.termsStudied).toBe(0)
    expect(info.termsTotal).toBe(5)
    expect(info.avgMastery).toBe(0)
  })

  it("returns correct mastery for a unit with partial study", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      makeMastery("a", ["unit01"], 0.8),
      makeMastery("b", ["unit01"], 0.6),
      makeMastery("c", ["unit01"], 0.0, false), // not studied
    ]
    const info = getUnitMasteryInfo("unit01", data, MOCK_UNIT_TERMS)
    expect(info.termsStudied).toBe(2)
    expect(info.termsTotal).toBe(5)
    // avg of 0.8 and 0.6 = 0.7 → 70%
    expect(info.avgMastery).toBe(70)
  })

  it("counts only terms belonging to the specified unit", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      makeMastery("a", ["unit01"], 0.9),
      makeMastery("b", ["unit02"], 0.5), // different unit
      makeMastery("c", ["unit01", "unit02"], 0.7), // shared term
    ]
    const info = getUnitMasteryInfo("unit01", data, MOCK_UNIT_TERMS)
    expect(info.termsStudied).toBe(2) // a and c
    expect(info.avgMastery).toBe(80) // (90 + 70) / 2 = 80
  })

  it("ignores terms with times_seen === 0", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      makeMastery("a", ["unit01"], 0.9, false), // not studied
      makeMastery("b", ["unit01"], 0.5, false), // not studied
    ]
    const info = getUnitMasteryInfo("unit01", data, MOCK_UNIT_TERMS)
    expect(info.termsStudied).toBe(0)
    expect(info.avgMastery).toBe(0)
  })

  it("handles unit with no terms in lookup map", () => {
    const data = createEmptyLocalData()
    const emptyMap: Record<UnitId, number> = {
      unit01: 0, unit02: 0, unit03: 0, unit04: 0,
      unit05: 0, unit06: 0, unit07: 0, unit08: 0,
    }
    const info = getUnitMasteryInfo("unit01", data, emptyMap)
    expect(info.termsStudied).toBe(0)
    expect(info.termsTotal).toBe(0)
    expect(info.avgMastery).toBe(0)
  })
})
