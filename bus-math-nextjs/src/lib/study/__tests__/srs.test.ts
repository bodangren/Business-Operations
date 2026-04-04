import { describe, it, expect } from "vitest"
import {
  scheduleNewTerm,
  processReview,
  getDueTerms,
  proficiencyBand,
  updateMastery,
  createMastery,
} from "../srs"
import type { DueReviewEntry, TermMastery } from "../storage-schema"

// ---------------------------------------------------------------------------
// SRS Engine Tests
// ---------------------------------------------------------------------------

describe("scheduleNewTerm", () => {
  it("creates a due review entry for a new term", () => {
    const entry = scheduleNewTerm("accounting-equation")
    expect(entry.term_slug).toBe("accounting-equation")
    expect(entry.is_due).toBe(true)
    expect(entry.scheduler.engine).toBe("fsrs")
    expect(entry.scheduled_for).toBeTruthy()
    expect(typeof entry.scheduled_for).toBe("string")
  })

  it("new term is immediately due", () => {
    const entry = scheduleNewTerm("assets")
    expect(entry.is_due).toBe(true)
  })

  it("scheduler state has expected fields", () => {
    const entry = scheduleNewTerm("liabilities")
    const s = entry.scheduler.state
    expect(typeof s.stability).toBe("number")
    expect(typeof s.difficulty).toBe("number")
    expect(typeof s.elapsed_days).toBe("number")
    expect(typeof s.scheduled_days).toBe("number")
    expect(typeof s.reps).toBe("number")
    expect(typeof s.lapses).toBe("number")
  })
})

describe("processReview", () => {
  it("advances the due date for a Good rating", () => {
    const entry = scheduleNewTerm("depreciation")
    const before = new Date(entry.scheduled_for).getTime()

    const { entry: updated } = processReview(entry, "good", new Date())
    const after = new Date(updated.scheduled_for).getTime()

    // Good review should push the due date forward
    expect(after).toBeGreaterThanOrEqual(before)
  })

  it("resets due date soon for Again rating", () => {
    const entry = scheduleNewTerm("equity")
    // Give the card some history first with a good review
    const { entry: afterGood } = processReview(entry, "good", new Date())

    const now = new Date()
    const { entry: afterAgain } = processReview(afterGood, "again", now)

    // After "again", the card should be due again soon
    const dueTime = new Date(afterAgain.scheduled_for).getTime()
    const oneHour = 60 * 60 * 1000
    expect(dueTime - now.getTime()).toBeLessThanOrEqual(oneHour)
  })

  it("returns negative masteryDelta for again", () => {
    const entry = scheduleNewTerm("fifo")
    const { masteryDelta } = processReview(entry, "again", new Date())
    expect(masteryDelta).toBeLessThan(0)
  })

  it("returns positive masteryDelta for easy", () => {
    const entry = scheduleNewTerm("cogs")
    const { masteryDelta } = processReview(entry, "easy", new Date())
    expect(masteryDelta).toBeGreaterThan(0)
  })

  it("increments reps count after review", () => {
    const entry = scheduleNewTerm("wip")
    const beforeReps = entry.scheduler.state.reps
    const { entry: updated } = processReview(entry, "good", new Date())
    expect(updated.scheduler.state.reps).toBe(beforeReps + 1)
  })
})

describe("getDueTerms", () => {
  it("returns only terms due at or before the given time", () => {
    const now = new Date()
    const past = new Date(now.getTime() - 1000).toISOString()
    const future = new Date(now.getTime() + 86400000).toISOString()

    const entries: DueReviewEntry[] = [
      { ...scheduleNewTerm("a"), scheduled_for: past },
      { ...scheduleNewTerm("b"), scheduled_for: future },
    ]

    const due = getDueTerms(entries, now)
    expect(due).toHaveLength(1)
    expect(due[0].term_slug).toBe("a")
  })

  it("returns empty when nothing is due", () => {
    const future = new Date(Date.now() + 86400000).toISOString()
    const entries: DueReviewEntry[] = [
      { ...scheduleNewTerm("x"), scheduled_for: future },
    ]
    expect(getDueTerms(entries)).toHaveLength(0)
  })
})

describe("proficiencyBand", () => {
  it("returns 'new' for 0", () => {
    expect(proficiencyBand(0)).toBe("new")
  })

  it("returns 'developing' for 0.4", () => {
    expect(proficiencyBand(0.4)).toBe("developing")
  })

  it("returns 'proficient' for 0.7", () => {
    expect(proficiencyBand(0.7)).toBe("proficient")
  })

  it("returns 'strong' for 0.9", () => {
    expect(proficiencyBand(0.9)).toBe("strong")
  })

  it("boundary: 0.3 is developing", () => {
    expect(proficiencyBand(0.3)).toBe("developing")
  })

  it("boundary: 0.6 is proficient", () => {
    expect(proficiencyBand(0.6)).toBe("proficient")
  })

  it("boundary: 0.85 is strong", () => {
    expect(proficiencyBand(0.85)).toBe("strong")
  })
})

describe("updateMastery", () => {
  const fresh: TermMastery = createMastery("test-term", ["unit01"])

  it("increments times_seen", () => {
    const updated = updateMastery(fresh, true, 0.1)
    expect(updated.times_seen).toBe(1)
  })

  it("increments times_correct for correct answer", () => {
    const updated = updateMastery(fresh, true, 0.1)
    expect(updated.times_correct).toBe(1)
    expect(updated.times_incorrect).toBe(0)
    expect(updated.last_result).toBe("correct")
  })

  it("increments times_incorrect for incorrect answer", () => {
    const updated = updateMastery(fresh, false, -0.1)
    expect(updated.times_incorrect).toBe(1)
    expect(updated.times_correct).toBe(0)
    expect(updated.last_result).toBe("incorrect")
  })

  it("clamps mastery_score between 0 and 1", () => {
    const low: TermMastery = { ...fresh, mastery_score: 0.05 }
    const updated = updateMastery(low, false, -0.5)
    expect(updated.mastery_score).toBe(0)

    const high: TermMastery = { ...fresh, mastery_score: 0.95 }
    const updated2 = updateMastery(high, true, 0.5)
    expect(updated2.mastery_score).toBe(1)
  })

  it("updates proficiency_band based on new score", () => {
    const developing: TermMastery = { ...fresh, mastery_score: 0.4 }
    const updated = updateMastery(developing, true, 0.25)
    expect(updated.proficiency_band).toBe("proficient")
    expect(updated.mastery_score).toBeCloseTo(0.65, 2)
  })

  it("updates last_reviewed_at", () => {
    const old: TermMastery = {
      ...fresh,
      last_reviewed_at: "2020-01-01T00:00:00Z",
    }
    const updated = updateMastery(old, true, 0.1)
    expect(updated.last_reviewed_at).not.toBe("2020-01-01T00:00:00Z")
  })
})

describe("createMastery", () => {
  it("creates a new mastery record with defaults", () => {
    const m = createMastery("book-value", ["unit08"])
    expect(m.term_slug).toBe("book-value")
    expect(m.units).toEqual(["unit08"])
    expect(m.times_seen).toBe(0)
    expect(m.mastery_score).toBe(0)
    expect(m.proficiency_band).toBe("new")
    expect(m.last_result).toBe("skipped")
  })
})
