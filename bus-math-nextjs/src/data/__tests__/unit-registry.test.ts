import { describe, it, expect } from "vitest"
import { UNITS, UNIT_REFS, UNIT_REF_MAP } from "../unit-registry"

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

describe("unit-registry — UNIT_REFS array", () => {
  it("contains exactly 8 entries", () => {
    expect(UNIT_REFS).toHaveLength(8)
  })

  it("each entry has UnitRef shape { id, title, sequence }", () => {
    for (const ref of UNIT_REFS) {
      expect(typeof ref.id).toBe("string")
      expect(ref.id.length).toBeGreaterThan(0)
      expect(typeof ref.title).toBe("string")
      expect(ref.title.length).toBeGreaterThan(0)
      expect(typeof ref.sequence).toBe("number")
      expect(ref.sequence).toBeGreaterThanOrEqual(1)
      expect(ref.sequence).toBeLessThanOrEqual(8)
    }
  })

  it("id values use unitId format (unit01–unit08)", () => {
    for (let i = 0; i < UNIT_REFS.length; i++) {
      expect(UNIT_REFS[i].id).toBe(`unit${String(i + 1).padStart(2, "0")}`)
    }
  })

  it("sequence values match unit number (1–8)", () => {
    for (let i = 0; i < UNIT_REFS.length; i++) {
      expect(UNIT_REFS[i].sequence).toBe(i + 1)
    }
  })

  it("titles match UNITS array titles", () => {
    for (let i = 0; i < UNIT_REFS.length; i++) {
      expect(UNIT_REFS[i].title).toBe(UNITS[i].title)
    }
  })
})

describe("unit-registry — UNIT_REF_MAP lookup", () => {
  it("has keys 1 through 8", () => {
    for (let n = 1; n <= 8; n++) {
      expect(UNIT_REF_MAP[n]).toBeDefined()
    }
  })

  it("maps each number to the matching UNIT_REFS entry", () => {
    for (let n = 1; n <= 8; n++) {
      expect(UNIT_REF_MAP[n]).toBe(UNIT_REFS[n - 1])
    }
  })

  it("does not have extra keys", () => {
    expect(Object.keys(UNIT_REF_MAP)).toHaveLength(8)
  })
})
