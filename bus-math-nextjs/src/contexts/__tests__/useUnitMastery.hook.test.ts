/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from "vitest"
import { renderHook } from "@testing-library/react"
import React from "react"
import { useUnitMastery, StudyDataProvider } from "../StudyDataContext"
import { createEmptyLocalData, type TermMastery } from "@/lib/study/storage-schema"
import type { UnitId } from "@/types/glossary"

// ---------------------------------------------------------------------------
// Mock storage module
// ---------------------------------------------------------------------------

vi.mock("@/lib/study/storage", () => ({
  loadStudyData: vi.fn(),
  saveStudyData: vi.fn(),
}))

import { loadStudyData } from "@/lib/study/storage"

const mockedLoad = vi.mocked(loadStudyData)

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function wrapper({ children }: { children: React.ReactNode }) {
  return React.createElement(StudyDataProvider, null, children)
}

function makeMastery(slug: string, units: UnitId[], score: number): TermMastery {
  return {
    term_slug: slug,
    units,
    times_seen: 1,
    times_correct: 1,
    times_incorrect: 0,
    last_result: "correct",
    mastery_score: score,
    proficiency_band: score >= 0.85 ? "strong" : score >= 0.6 ? "proficient" : score >= 0.3 ? "developing" : "new",
    last_reviewed_at: "2026-04-01T00:00:00Z",
  }
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("useUnitMastery", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("returns result after synchronous load completes", () => {
    const data = createEmptyLocalData()
    mockedLoad.mockReturnValue(data)

    const { result } = renderHook(() => useUnitMastery("unit01"), { wrapper })

    expect(result.current).not.toBeNull()
    expect(result.current!.termsStudied).toBe(0)
    expect(result.current!.avgMastery).toBe(0)
  })

  it("returns mastery info when data is loaded", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      makeMastery("a", ["unit01"], 0.8),
      makeMastery("b", ["unit01"], 0.6),
    ]
    mockedLoad.mockReturnValue(data)

    const { result } = renderHook(() => useUnitMastery("unit01"), { wrapper })

    expect(result.current).toEqual({
      termsStudied: 2,
      termsTotal: expect.any(Number),
      avgMastery: 70,
    })
  })

  it("returns null for unit with no study data", () => {
    const data = createEmptyLocalData()
    mockedLoad.mockReturnValue(data)

    const { result } = renderHook(() => useUnitMastery("unit01"), { wrapper })

    expect(result.current).not.toBeNull()
    expect(result.current!.termsStudied).toBe(0)
    expect(result.current!.avgMastery).toBe(0)
  })

  it("throws when used outside StudyDataProvider", () => {
    expect(() => {
      renderHook(() => useUnitMastery("unit01"))
    }).toThrow("useStudyData must be used within a StudyDataProvider")
  })

  it("updates reactively when hook is called with different unitId", () => {
    const data = createEmptyLocalData()
    data.study_state.mastery_by_term = [
      makeMastery("a", ["unit01"], 0.9),
      makeMastery("b", ["unit02"], 0.5),
    ]
    mockedLoad.mockReturnValue(data)

    let unit: UnitId = "unit01"
    const { result, rerender } = renderHook(() => useUnitMastery(unit), { wrapper })

    expect(result.current!.avgMastery).toBe(90)

    unit = "unit02"
    rerender()

    expect(result.current!.avgMastery).toBe(50)
  })
})
