import { describe, it, expect } from "vitest"
import { UNITS } from "../unit-registry"

describe("unit-registry — UNITS array", () => {
  it("contains exactly 8 entries", () => {
    expect(UNITS).toHaveLength(8)
  })

  it("entries are ordered unit01 through unit08", () => {
    for (let i = 0; i < UNITS.length; i++) {
      expect(UNITS[i].unitId).toBe(`unit${String(i + 1).padStart(2, "0")}`)
      expect(UNITS[i].number).toBe(i + 1)
    }
  })

  it("each entry has required fields", () => {
    for (const unit of UNITS) {
      expect(unit.unitId).toMatch(/^unit\d{2}$/)
      expect(typeof unit.number).toBe("number")
      expect(unit.title.length).toBeGreaterThan(0)
      expect(unit.description.length).toBeGreaterThan(0)
      expect(unit.studentHref).toMatch(/^\/student\/unit\d{2}$/)
      expect(unit.teacherHref).toMatch(/^\/teacher\/unit\d{2}$/)
      expect(unit.label).toMatch(/^Unit \d+: .+/)
    }
  })

  it("label format is 'Unit N: <title>'", () => {
    for (const unit of UNITS) {
      expect(unit.label).toBe(`Unit ${unit.number}: ${unit.title}`)
    }
  })

  it("studentHref and teacherHref correspond to unitId", () => {
    for (const unit of UNITS) {
      expect(unit.studentHref).toBe(`/student/${unit.unitId}`)
      expect(unit.teacherHref).toBe(`/teacher/${unit.unitId}`)
    }
  })

  it("titles match canonical unitXX.ts data", () => {
    const expectedTitles = [
      "Smart Ledger Launch",
      "Month-End Wizard",
      "Three-Statement Storyboard",
      "Data-Driven Café",
      "PayDay Simulator",
      "PriceLab Challenge",
      "Inventory Accounting",
      "Fixed Assets and Depreciation",
    ]
    for (let i = 0; i < UNITS.length; i++) {
      expect(UNITS[i].title).toBe(expectedTitles[i])
    }
  })
})
