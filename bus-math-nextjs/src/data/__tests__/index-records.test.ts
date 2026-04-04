import { describe, it, expect } from "vitest"
import { indexRecords } from "../index-records"

describe("indexRecords — lesson entries", () => {
  const lessonRecords = indexRecords.filter((r) => r.category === "lesson")

  it("contains exactly 80 lesson records (8 units × 10 lessons)", () => {
    expect(lessonRecords).toHaveLength(80)
  })

  it("each lesson record has a href matching /student/unitXX/lessonYY", () => {
    for (const record of lessonRecords) {
      expect(record.href).toMatch(/^\/student\/unit\d{2}\/lesson\d{2}$/)
    }
  })

  it("each lesson record has a unitId", () => {
    for (const record of lessonRecords) {
      expect(record.unitId).toBeDefined()
      expect(record.unitId).toMatch(/^unit\d{2}$/)
    }
  })

  it("covers all 8 units", () => {
    const units = new Set(lessonRecords.map((r) => r.unitId))
    expect(units.size).toBe(8)
    for (let i = 1; i <= 8; i++) {
      expect(units.has(`unit${String(i).padStart(2, "0")}`)).toBe(true)
    }
  })

  it("each unit has exactly 10 lessons", () => {
    const byUnit: Record<string, number> = {}
    for (const record of lessonRecords) {
      const uid = record.unitId!
      byUnit[uid] = (byUnit[uid] ?? 0) + 1
    }
    for (let i = 1; i <= 8; i++) {
      const uid = `unit${String(i).padStart(2, "0")}`
      expect(byUnit[uid]).toBe(10)
    }
  })

  it("lesson slugs are unique", () => {
    const slugs = lessonRecords.map((r) => r.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})
