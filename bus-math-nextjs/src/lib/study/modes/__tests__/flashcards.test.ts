import { describe, it, expect } from "vitest"
import {
  createFlashcardSession,
  flipCard,
  markCorrect,
  markIncorrect,
  advanceCard,
  isSessionComplete,
  getSessionSummary,
} from "../flashcards"
import type { GlossaryEntry } from "@/types/glossary"

const mockTerms: GlossaryEntry[] = [
  {
    id: "g-001",
    slug: "accounting-equation",
    term_en: "Accounting Equation",
    term_zh: "会计方程式",
    def_en: "The fundamental relationship Assets = Liabilities + Equity.",
    def_zh: "资产 = 负债 + 权益的基本关系。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "g-002",
    slug: "assets",
    term_en: "Assets",
    term_zh: "资产",
    def_en: "Resources owned by a business.",
    def_zh: "企业拥有的资源。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "g-003",
    slug: "liabilities",
    term_en: "Liabilities",
    term_zh: "负债",
    def_en: "Amounts a business owes.",
    def_zh: "企业欠的金额。",
    units: ["unit01"],
    topics: ["accounting"],
  },
]

describe("createFlashcardSession", () => {
  it("creates a session with all terms", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    expect(session.cards).toHaveLength(3)
    expect(session.currentIndex).toBe(0)
    expect(session.isFlipped).toBe(false)
  })

  it("uses selected prompt and answer fields", () => {
    const session = createFlashcardSession(mockTerms, "term_zh", "def_zh")
    expect(session.promptField).toBe("term_zh")
    expect(session.answerField).toBe("def_zh")
  })

  it("sets started_at timestamp", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    expect(session.started_at).toBeTruthy()
    expect(new Date(session.started_at).getTime()).toBeGreaterThan(0)
  })

  it("throws on empty term list", () => {
    expect(() => createFlashcardSession([], "term_en", "def_en")).toThrow()
  })
})

describe("flipCard", () => {
  it("toggles isFlipped state", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    expect(session.isFlipped).toBe(false)
    const flipped = flipCard(session)
    expect(flipped.isFlipped).toBe(true)
    const unflipped = flipCard(flipped)
    expect(unflipped.isFlipped).toBe(false)
  })

  it("does not mutate the original session", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    flipCard(session)
    expect(session.isFlipped).toBe(false)
  })
})

describe("markCorrect / markIncorrect", () => {
  it("increments correct count on markCorrect", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    const updated = markCorrect(session)
    expect(updated.correctCount).toBe(1)
    expect(updated.cards[0].result).toBe("correct")
  })

  it("increments incorrect count on markIncorrect", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    const updated = markIncorrect(session)
    expect(updated.incorrectCount).toBe(1)
    expect(updated.cards[0].result).toBe("incorrect")
  })

  it("tracks re-queue for incorrect cards", () => {
    let session = createFlashcardSession(mockTerms, "term_en", "def_en")
    const firstSlug = session.cards[0].slug
    session = markIncorrect(session)
    expect(session.requeuedSlugs.has(firstSlug)).toBe(true)
  })

  it("re-queued cards appear later in the queue", () => {
    let session = createFlashcardSession(mockTerms, "term_en", "def_en")
    const firstSlug = session.cards[0].slug
    session = markIncorrect(session)
    // The re-queued term should appear at the end
    const lastCard = session.cards[session.cards.length - 1]
    expect(lastCard.slug).toBe(firstSlug)
    expect(session.cards.length).toBe(4) // 3 original + 1 re-queue
  })

  it("does not re-queue a card more than once", () => {
    let session = createFlashcardSession(mockTerms, "term_en", "def_en")
    session = markIncorrect(session)
    expect(session.cards.length).toBe(4) // first card re-queued
    // The re-queued card at the end has the same slug — mark it incorrect too
    session = { ...session, currentIndex: 3 }
    session = markIncorrect(session)
    // Should NOT add another re-queue for the same slug
    expect(session.cards.length).toBe(4)
  })
})

describe("advanceCard", () => {
  it("moves to the next card", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    const advanced = advanceCard(session)
    expect(advanced.currentIndex).toBe(1)
    expect(advanced.isFlipped).toBe(false)
  })

  it("stays at the last card when already at end", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    const last = { ...session, currentIndex: session.cards.length - 1 }
    const advanced = advanceCard(last)
    expect(advanced.currentIndex).toBe(session.cards.length - 1)
  })
})

describe("isSessionComplete", () => {
  it("returns false when cards remain", () => {
    const session = createFlashcardSession(mockTerms, "term_en", "def_en")
    expect(isSessionComplete(session)).toBe(false)
  })

  it("returns true when all cards reviewed", () => {
    let session = createFlashcardSession(mockTerms, "term_en", "def_en")
    // Review each card in sequence
    for (let i = 0; i < session.cards.length; i++) {
      session = { ...session, currentIndex: i }
      session = markCorrect(session)
    }
    expect(isSessionComplete(session)).toBe(true)
  })
})

describe("getSessionSummary", () => {
  it("computes accuracy and counts", () => {
    let session = createFlashcardSession(mockTerms, "term_en", "def_en")
    session = markCorrect(session)
    session = { ...session, currentIndex: 1 }
    session = markIncorrect(session)
    session = { ...session, currentIndex: 2 }
    session = markCorrect(session)

    const summary = getSessionSummary(session)
    expect(summary.total).toBe(3)
    expect(summary.correct).toBe(2)
    expect(summary.incorrect).toBe(1)
    expect(summary.accuracy).toBeCloseTo(0.667, 2)
  })
})
