import { describe, expect, it } from "vitest"
import type { UnitId } from "@/types/glossary"
import type { UnitReviewBankAdapter } from "@/types/unit-review"
import { unit01ReviewAdapter } from "../unit-review-adapters/unit01"
import { unit02ReviewAdapter } from "../unit-review-adapters/unit02"
import { unit03ReviewAdapter } from "../unit-review-adapters/unit03"
import { unit04ReviewAdapter } from "../unit-review-adapters/unit04"
import { unit05ReviewAdapter } from "../unit-review-adapters/unit05"
import { unit06ReviewAdapter } from "../unit-review-adapters/unit06"
import { unit07ReviewAdapter } from "../unit-review-adapters/unit07"
import { unit08ReviewAdapter } from "../unit-review-adapters/unit08"

const ADAPTERS: Array<[UnitId, UnitReviewBankAdapter]> = [
  ["unit01", unit01ReviewAdapter],
  ["unit02", unit02ReviewAdapter],
  ["unit03", unit03ReviewAdapter],
  ["unit04", unit04ReviewAdapter],
  ["unit05", unit05ReviewAdapter],
  ["unit06", unit06ReviewAdapter],
  ["unit07", unit07ReviewAdapter],
  ["unit08", unit08ReviewAdapter],
]

describe("unit-review adapters", () => {
  it("exposes all eight units through the shared contract", () => {
    expect(ADAPTERS).toHaveLength(8)
  })

  it.each(ADAPTERS)("%s matches the shared adapter contract", (unitId, adapter) => {
    expect(adapter.unitId).toBe(unitId)
    expect(adapter.unitLabel).toContain("Unit")
    expect(adapter.lessons.length).toBeGreaterThan(0)
    expect(adapter.getQuestions().length).toBeGreaterThanOrEqual(5)
  })

  it.each(ADAPTERS)("%s reports lesson metadata that matches its questions", (unitId, adapter) => {
    const lessons = adapter.lessons
    const totalFromLessons = lessons.reduce((sum, lesson) => sum + lesson.questionCount, 0)
    expect(totalFromLessons).toBe(adapter.getQuestions().length)

    for (const lesson of lessons) {
      const filtered = adapter.getQuestions({ lessonIds: [lesson.lessonId] })
      expect(filtered).toHaveLength(lesson.questionCount)
      expect(filtered.every((question) => question.lessonId === lesson.lessonId)).toBe(true)
    }
  })
})
