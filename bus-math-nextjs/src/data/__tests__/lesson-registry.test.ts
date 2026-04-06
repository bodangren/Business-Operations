import { describe, it, expect } from "vitest"
import { LESSON_PAGES } from "../lesson-registry"
import type { UnitId } from "@/types/glossary"

describe("LESSON_PAGES — derived from lesson-data files", () => {
  it("exports exactly 80 lesson page records (8 units × 10 lessons)", () => {
    expect(LESSON_PAGES).toHaveLength(80)
  })

  it("each record has a non-empty title string", () => {
    for (const page of LESSON_PAGES) {
      expect(typeof page.title).toBe("string")
      expect(page.title.length).toBeGreaterThan(0)
    }
  })

  it("each record has a href matching /student/unitXX/lessonYY", () => {
    for (const page of LESSON_PAGES) {
      expect(page.href).toMatch(/^\/student\/unit\d{2}\/lesson\d{2}$/)
    }
  })

  it("each record has a unitId matching unitXX", () => {
    for (const page of LESSON_PAGES) {
      expect(page.unitId).toBeDefined()
      expect(page.unitId).toMatch(/^unit\d{2}$/)
    }
  })

  it("covers all 8 units", () => {
    const units = new Set(LESSON_PAGES.map((p) => p.unitId))
    expect(units.size).toBe(8)
    for (let i = 1; i <= 8; i++) {
      expect(units.has(`unit${String(i).padStart(2, "0")}` as UnitId)).toBe(true)
    }
  })

  it("each unit has exactly 10 lessons", () => {
    const byUnit: Record<string, number> = {}
    for (const page of LESSON_PAGES) {
      const uid = page.unitId!
      byUnit[uid] = (byUnit[uid] ?? 0) + 1
    }
    for (let i = 1; i <= 8; i++) {
      const uid = `unit${String(i).padStart(2, "0")}`
      expect(byUnit[uid]).toBe(10)
    }
  })

  it("entries are ordered by unit then lesson", () => {
    for (let i = 1; i < LESSON_PAGES.length; i++) {
      const prev = LESSON_PAGES[i - 1]
      const curr = LESSON_PAGES[i]
      expect(prev.href <= curr.href).toBe(true)
    }
  })

  it("spot-checks titles from lesson-data files", () => {
    const byHref = Object.fromEntries(LESSON_PAGES.map((p) => [p.href, p.title]))
    expect(byHref["/student/unit01/lesson01"]).toBe("Introduction: Sarah's Challenge")
    expect(byHref["/student/unit04/lesson01"]).toMatch(/Launch|Weekend Profit/)
    expect(byHref["/student/unit08/lesson10"]).toMatch(/Fixed-Asset|Presentations/)
  })
})
