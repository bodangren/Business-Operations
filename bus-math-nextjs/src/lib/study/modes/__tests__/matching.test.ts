import { describe, it, expect } from "vitest"
import {
  createMatchingSession,
  selectTerm,
  selectDefinition,
  checkMatch,
  clearSelection,
  isSessionComplete,
  getMatchingSummary,
} from "../matching"
import type { GlossaryEntry } from "@/types/glossary"

const mockTerms: GlossaryEntry[] = [
  {
    id: "accounting-equation",
    slug: "accounting-equation",
    term_en: "Accounting Equation",
    term_zh: "会计方程式",
    def_en: "Assets = Liabilities + Equity.",
    def_zh: "资产 = 负债 + 权益。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "assets",
    slug: "assets",
    term_en: "Assets",
    term_zh: "资产",
    def_en: "Resources owned by a business.",
    def_zh: "企业拥有的资源。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "liabilities",
    slug: "liabilities",
    term_en: "Liabilities",
    term_zh: "负债",
    def_en: "Amounts a business owes.",
    def_zh: "企业欠的金额。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "equity",
    slug: "equity",
    term_en: "Owner's Equity",
    term_zh: "所有者权益",
    def_en: "Residual claim on assets.",
    def_zh: "对资产的剩余索取权。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "debits-and-credits",
    slug: "debits-and-credits",
    term_en: "Debits and Credits",
    term_zh: "借方和贷方",
    def_en: "Two sides of every journal entry.",
    def_zh: "每笔日记账分录的两个方面。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "journal-entry",
    slug: "journal-entry",
    term_en: "Journal Entry",
    term_zh: "日记账分录",
    def_en: "A record of a transaction.",
    def_zh: "交易记录。",
    units: ["unit01"],
    topics: ["accounting"],
  },
]

describe("createMatchingSession", () => {
  it("creates a session with 6 pairs by default", () => {
    const session = createMatchingSession(mockTerms)
    expect(session.pairs).toHaveLength(6)
    expect(session.matchedPairs).toHaveLength(0)
  })

  it("shuffles terms and definitions independently", () => {
    const session = createMatchingSession(mockTerms)
    const termOrder = session.pairs.map((p) => p.slug)
    expect(termOrder).toHaveLength(6)
  })

  it("uses bilingual definition display", () => {
    const session = createMatchingSession(mockTerms)
    const def = session.shuffledDefinitions[0]
    expect(def.def_en).toBeTruthy()
    expect(def.def_zh).toBeTruthy()
  })

  it("throws with fewer than 6 terms", () => {
    expect(() => createMatchingSession(mockTerms.slice(0, 5))).toThrow()
  })

  it("records start time", () => {
    const session = createMatchingSession(mockTerms)
    expect(session.started_at).toBeTruthy()
  })
})

describe("selectTerm / selectDefinition", () => {
  it("selects a term", () => {
    const session = createMatchingSession(mockTerms)
    const updated = selectTerm(session, "accounting-equation")
    expect(updated.selectedTermSlug).toBe("accounting-equation")
  })

  it("selects a definition", () => {
    const session = createMatchingSession(mockTerms)
    const updated = selectDefinition(session, "assets")
    expect(updated.selectedDefSlug).toBe("assets")
  })

  it("deselects term on second click", () => {
    const session = createMatchingSession(mockTerms)
    const updated = selectTerm(selectTerm(session, "assets"), "assets")
    expect(updated.selectedTermSlug).toBeNull()
  })
})

describe("checkMatch", () => {
  it("matches correct term-definition pair", () => {
    let session = createMatchingSession(mockTerms)
    session = selectTerm(session, "accounting-equation")
    session = selectDefinition(session, "accounting-equation")
    const result = checkMatch(session)
    expect(result.matched).toBe(true)
    expect(result.session.matchedPairs).toContain("accounting-equation")
    expect(result.session.correctCount).toBe(1)
    expect(result.session.selectedTermSlug).toBeNull()
    expect(result.session.selectedDefSlug).toBeNull()
  })

  it("rejects incorrect pair", () => {
    let session = createMatchingSession(mockTerms)
    session = selectTerm(session, "accounting-equation")
    session = selectDefinition(session, "assets")
    const result = checkMatch(session)
    expect(result.matched).toBe(false)
    expect(result.session.wrongFlashSlug).toBe("accounting-equation")
    expect(result.session.incorrectCount).toBe(1)
  })

  it("clears selection after wrong match", () => {
    let session = createMatchingSession(mockTerms)
    session = selectTerm(session, "accounting-equation")
    session = selectDefinition(session, "assets")
    const result = checkMatch(session)
    expect(result.session.selectedTermSlug).toBeNull()
    expect(result.session.selectedDefSlug).toBeNull()
  })

  it("ignores already matched pairs", () => {
    let session = createMatchingSession(mockTerms)
    session = selectTerm(session, "accounting-equation")
    session = selectDefinition(session, "accounting-equation")
    session = checkMatch(session).session
    // Try to match again
    session = selectTerm(session, "accounting-equation")
    session = selectDefinition(session, "accounting-equation")
    const result = checkMatch(session)
    expect(result.matched).toBe(false)
  })
})

describe("clearSelection", () => {
  it("clears both term and definition selection", () => {
    let session = createMatchingSession(mockTerms)
    session = selectTerm(session, "assets")
    session = selectDefinition(session, "liabilities")
    const cleared = clearSelection(session)
    expect(cleared.selectedTermSlug).toBeNull()
    expect(cleared.selectedDefSlug).toBeNull()
  })
})

describe("isSessionComplete", () => {
  it("returns false when pairs remain", () => {
    const session = createMatchingSession(mockTerms)
    expect(isSessionComplete(session)).toBe(false)
  })

  it("returns true when all pairs matched", () => {
    let session = createMatchingSession(mockTerms)
    for (const pair of session.pairs) {
      session = selectTerm(session, pair.slug)
      session = selectDefinition(session, pair.slug)
      session = checkMatch(session).session
    }
    expect(isSessionComplete(session)).toBe(true)
  })
})

describe("getMatchingSummary", () => {
  it("computes score, accuracy, and elapsed time", () => {
    let session = createMatchingSession(mockTerms)
    session = { ...session, started_at: new Date(Date.now() - 60000).toISOString() }
    session = selectTerm(session, "accounting-equation")
    session = selectDefinition(session, "accounting-equation")
    session = checkMatch(session).session
    session = selectTerm(session, "assets")
    session = selectDefinition(session, "liabilities")
    session = checkMatch(session).session

    const summary = getMatchingSummary(session)
    expect(summary.matchedCount).toBe(1)
    expect(summary.totalPairs).toBe(6)
    expect(summary.incorrectAttempts).toBe(1)
    expect(summary.elapsedSeconds).toBeGreaterThanOrEqual(0)
  })
})
