import { describe, it, expect } from "vitest"
import {
  createSpeedRoundSession,
  answerQuestion,
  tickTimer,
  isGameOver,
  getSpeedRoundSummary,
} from "../speed-round"
import type { GlossaryEntry } from "@/types/glossary"

const mockTerms: GlossaryEntry[] = [
  {
    id: "g-001",
    slug: "accounting-equation",
    term_en: "Accounting Equation",
    term_zh: "会计方程式",
    def_en: "Assets = Liabilities + Equity.",
    def_zh: "资产 = 负债 + 权益。",
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
  {
    id: "g-004",
    slug: "equity",
    term_en: "Owner's Equity",
    term_zh: "所有者权益",
    def_en: "Residual claim on assets.",
    def_zh: "对资产的剩余索取权。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "g-005",
    slug: "debits-and-credits",
    term_en: "Debits and Credits",
    term_zh: "借方和贷方",
    def_en: "Two sides of every journal entry.",
    def_zh: "每笔日记账分录的两个方面。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "g-006",
    slug: "journal-entry",
    term_en: "Journal Entry",
    term_zh: "日记账分录",
    def_en: "A record of a transaction.",
    def_zh: "交易记录。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "g-007",
    slug: "double-entry-bookkeeping",
    term_en: "Double-Entry Bookkeeping",
    term_zh: "复式记账法",
    def_en: "Every transaction has equal debits and credits.",
    def_zh: "每笔交易都有相等的借方和贷方。",
    units: ["unit01"],
    topics: ["accounting"],
  },
  {
    id: "g-008",
    slug: "trial-balance",
    term_en: "Trial Balance",
    term_zh: "试算平衡表",
    def_en: "A list of all account balances.",
    def_zh: "所有账户余额的列表。",
    units: ["unit01"],
    topics: ["accounting"],
  },
]

describe("createSpeedRoundSession", () => {
  it("creates a session with 90 second timer and 3 lives", () => {
    const session = createSpeedRoundSession(mockTerms)
    expect(session.timeRemaining).toBe(90)
    expect(session.lives).toBe(3)
    expect(session.maxLives).toBe(3)
  })

  it("generates a question pool from the term list", () => {
    const session = createSpeedRoundSession(mockTerms)
    expect(session.questions.length).toBeGreaterThan(0)
  })

  it("each question has 4 options including the correct one", () => {
    const session = createSpeedRoundSession(mockTerms)
    const q = session.questions[0]
    expect(q.options).toHaveLength(4)
    expect(q.options).toContain(q.correctDefEn)
  })

  it("distractors come from other terms in the pool", () => {
    const session = createSpeedRoundSession(mockTerms)
    const q = session.questions[0]
    const otherDefs = mockTerms
      .filter((t) => t.slug !== q.slug)
      .map((t) => t.def_en)
    for (const opt of q.options) {
      if (opt !== q.correctDefEn) {
        expect(otherDefs).toContain(opt)
      }
    }
  })

  it("throws with fewer than 4 terms", () => {
    expect(() => createSpeedRoundSession(mockTerms.slice(0, 3))).toThrow()
  })

  it("initializes score, streak at zero", () => {
    const session = createSpeedRoundSession(mockTerms)
    expect(session.score).toBe(0)
    expect(session.streak).toBe(0)
    expect(session.bestStreak).toBe(0)
    expect(session.totalAnswered).toBe(0)
  })
})

describe("answerQuestion", () => {
  it("increments score and streak on correct answer", () => {
    const session = createSpeedRoundSession(mockTerms)
    const q = session.questions[session.currentIndex]
    const result = answerQuestion(session, q.correctDefEn)
    expect(result.correct).toBe(true)
    expect(result.session.score).toBe(1)
    expect(result.session.streak).toBe(1)
    expect(result.session.totalAnswered).toBe(1)
  })

  it("adds +2 seconds on correct answer", () => {
    const session = createSpeedRoundSession(mockTerms)
    const q = session.questions[session.currentIndex]
    const result = answerQuestion(session, q.correctDefEn)
    expect(result.session.timeRemaining).toBe(92) // 90 + 2
  })

  it("resets streak and loses a life on wrong answer", () => {
    const session = createSpeedRoundSession(mockTerms)
    const q = session.questions[session.currentIndex]
    const wrongAnswer = q.options.find((o) => o !== q.correctDefEn)!
    const result = answerQuestion(session, wrongAnswer)
    expect(result.correct).toBe(false)
    expect(result.session.streak).toBe(0)
    expect(result.session.lives).toBe(2)
    expect(result.session.score).toBe(0)
  })

  it("advances to next question after answering", () => {
    const session = createSpeedRoundSession(mockTerms)
    const q = session.questions[session.currentIndex]
    const result = answerQuestion(session, q.correctDefEn)
    expect(result.session.currentIndex).toBe(1)
  })

  it("tracks best streak", () => {
    let session = createSpeedRoundSession(mockTerms)
    // Answer 3 correctly
    for (let i = 0; i < 3; i++) {
      const q = session.questions[session.currentIndex]
      session = answerQuestion(session, q.correctDefEn).session
    }
    expect(session.bestStreak).toBe(3)
    // Now get one wrong
    const q = session.questions[session.currentIndex]
    const wrong = q.options.find((o) => o !== q.correctDefEn)!
    session = answerQuestion(session, wrong).session
    expect(session.bestStreak).toBe(3) // best streak preserved
  })

  it("wraps around question pool when reaching the end", () => {
    let session = createSpeedRoundSession(mockTerms)
    // Answer all questions
    for (let i = 0; i < session.questions.length; i++) {
      const q = session.questions[session.currentIndex]
      session = answerQuestion(session, q.correctDefEn).session
    }
    // Should wrap to beginning
    expect(session.currentIndex).toBeLessThan(session.questions.length)
  })
})

describe("tickTimer", () => {
  it("decrements time by 1 second", () => {
    const session = createSpeedRoundSession(mockTerms)
    const updated = tickTimer(session)
    expect(updated.timeRemaining).toBe(89)
  })

  it("does not go below zero", () => {
    let session = createSpeedRoundSession(mockTerms)
    session = { ...session, timeRemaining: 0 }
    const updated = tickTimer(session)
    expect(updated.timeRemaining).toBe(0)
  })
})

describe("isGameOver", () => {
  it("returns false when lives and time remain", () => {
    const session = createSpeedRoundSession(mockTerms)
    expect(isGameOver(session)).toBe(false)
  })

  it("returns true when lives reach zero", () => {
    const session = createSpeedRoundSession(mockTerms)
    expect(isGameOver({ ...session, lives: 0 })).toBe(true)
  })

  it("returns true when time reaches zero", () => {
    const session = createSpeedRoundSession(mockTerms)
    expect(isGameOver({ ...session, timeRemaining: 0 })).toBe(true)
  })
})

describe("getSpeedRoundSummary", () => {
  it("computes accuracy and stats", () => {
    let session = createSpeedRoundSession(mockTerms)
    // Answer 3 correct, 1 wrong
    for (let i = 0; i < 3; i++) {
      const q = session.questions[session.currentIndex]
      session = answerQuestion(session, q.correctDefEn).session
    }
    const q = session.questions[session.currentIndex]
    const wrong = q.options.find((o) => o !== q.correctDefEn)!
    session = answerQuestion(session, wrong).session

    const summary = getSpeedRoundSummary(session)
    expect(summary.totalAnswered).toBe(4)
    expect(summary.correctCount).toBe(3)
    expect(summary.accuracy).toBe(0.75)
    expect(summary.bestStreak).toBe(3)
  })
})
