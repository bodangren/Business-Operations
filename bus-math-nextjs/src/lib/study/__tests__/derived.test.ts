import { describe, it, expect } from "vitest"
import { getDueCountByUnit, getDueCountForUnit, masteryColor } from "../derived"
import { scheduleNewTerm } from "../srs"
import type { UnitId } from "@/types/glossary"
import type { DueReviewEntry } from "../storage-schema"

// ---------------------------------------------------------------------------
// Per-Unit Due Count Tests
// ---------------------------------------------------------------------------

const NOW = new Date("2026-04-04T12:00:00Z")
const PAST = new Date(NOW.getTime() - 1000).toISOString()
const FUTURE = new Date(NOW.getTime() + 86400000).toISOString()

const EMPTY_MAP: Record<string, UnitId[]> = {}

function makeEntry(slug: string, scheduledFor: string): DueReviewEntry {
  return { ...scheduleNewTerm(slug), scheduled_for: scheduledFor }
}

describe("getDueCountByUnit", () => {
  it("returns zero counts for all units with empty data", () => {
    const counts = getDueCountByUnit([], EMPTY_MAP, NOW)
    expect(counts.unit01).toBe(0)
    expect(counts.unit02).toBe(0)
    expect(counts.unit08).toBe(0)
  })

  it("counts a due term in its unit", () => {
    const entries = [makeEntry("assets", PAST)]
    const slugUnits: Record<string, UnitId[]> = { assets: ["unit01"] }

    const counts = getDueCountByUnit(entries, slugUnits, NOW)
    expect(counts.unit01).toBe(1)
    expect(counts.unit02).toBe(0)
  })

  it("ignores terms not yet due", () => {
    const entries = [makeEntry("assets", FUTURE)]
    const slugUnits: Record<string, UnitId[]> = { assets: ["unit01"] }

    const counts = getDueCountByUnit(entries, slugUnits, NOW)
    expect(counts.unit01).toBe(0)
  })

  it("counts terms belonging to multiple units in each", () => {
    const entries = [makeEntry("cogs", PAST)]
    const slugUnits: Record<string, UnitId[]> = { cogs: ["unit07", "unit08"] }

    const counts = getDueCountByUnit(entries, slugUnits, NOW)
    expect(counts.unit07).toBe(1)
    expect(counts.unit08).toBe(1)
  })

  it("handles mixed due and not-due terms across units", () => {
    const entries = [
      makeEntry("assets", PAST),
      makeEntry("liabilities", PAST),
      makeEntry("equity", FUTURE),
      makeEntry("depreciation", PAST),
    ]
    const slugUnits: Record<string, UnitId[]> = {
      assets: ["unit01"],
      liabilities: ["unit01"],
      equity: ["unit01"],
      depreciation: ["unit08"],
    }

    const counts = getDueCountByUnit(entries, slugUnits, NOW)
    expect(counts.unit01).toBe(2) // assets + liabilities (equity not due)
    expect(counts.unit08).toBe(1) // depreciation
  })

  it("ignores slugs not in the map", () => {
    const entries = [makeEntry("unknown-term", PAST)]
    const slugUnits: Record<string, UnitId[]> = {}

    const counts = getDueCountByUnit(entries, slugUnits, NOW)
    expect(counts.unit01).toBe(0)
    expect(counts.unit08).toBe(0)
  })

  it("returns Record with all 8 unit keys", () => {
    const counts = getDueCountByUnit([], EMPTY_MAP, NOW)
    const keys = Object.keys(counts)
    expect(keys).toHaveLength(8)
    expect(keys).toContain("unit01")
    expect(keys).toContain("unit08")
  })
})

describe("getDueCountForUnit", () => {
  it("returns 0 for unit with no due terms", () => {
    const entries = [makeEntry("assets", FUTURE)]
    const slugUnits: Record<string, UnitId[]> = { assets: ["unit01"] }

    const count = getDueCountForUnit("unit01", entries, slugUnits, NOW)
    expect(count).toBe(0)
  })

  it("returns count for a specific unit", () => {
    const entries = [
      makeEntry("assets", PAST),
      makeEntry("liabilities", PAST),
      makeEntry("depreciation", PAST),
    ]
    const slugUnits: Record<string, UnitId[]> = {
      assets: ["unit01"],
      liabilities: ["unit01"],
      depreciation: ["unit08"],
    }

    expect(getDueCountForUnit("unit01", entries, slugUnits, NOW)).toBe(2)
    expect(getDueCountForUnit("unit08", entries, slugUnits, NOW)).toBe(1)
    expect(getDueCountForUnit("unit02", entries, slugUnits, NOW)).toBe(0)
  })

  it("returns 0 when no study data exists", () => {
    const count = getDueCountForUnit("unit01", [], EMPTY_MAP, NOW)
    expect(count).toBe(0)
  })
})

// ---------------------------------------------------------------------------
// masteryColor Tests — aligned with proficiencyBand thresholds (85/60/30)
// ---------------------------------------------------------------------------

describe("masteryColor", () => {
  it("returns green for score >= 85 (strong)", () => {
    expect(masteryColor(85)).toBe("bg-green-500")
    expect(masteryColor(100)).toBe("bg-green-500")
    expect(masteryColor(90)).toBe("bg-green-500")
  })

  it("returns amber for score >= 60 and < 85 (proficient)", () => {
    expect(masteryColor(60)).toBe("bg-amber-500")
    expect(masteryColor(75)).toBe("bg-amber-500")
    expect(masteryColor(84)).toBe("bg-amber-500")
  })

  it("returns orange for score >= 30 and < 60 (developing)", () => {
    expect(masteryColor(30)).toBe("bg-orange-500")
    expect(masteryColor(45)).toBe("bg-orange-500")
    expect(masteryColor(59)).toBe("bg-orange-500")
  })

  it("returns red for score < 30 (new)", () => {
    expect(masteryColor(0)).toBe("bg-red-500")
    expect(masteryColor(15)).toBe("bg-red-500")
    expect(masteryColor(29)).toBe("bg-red-500")
  })
})
