import { describe, it, expect, beforeEach, vi } from "vitest"
import {
  recordFlashcardSession,
  recordMatchingSession,
  recordSpeedRoundSession,
  recordReviewSession,
} from "../record-session"
import { createFlashcardSession, markCorrect, markIncorrect } from "../flashcards"
import { createMatchingSession, selectTerm, selectDefinition, checkMatch } from "../matching"
import { createSpeedRoundSession, answerQuestion } from "../speed-round"
import { loadStudyData } from "../../storage"
import type { GlossaryEntry } from "@/types/glossary"

// ---------------------------------------------------------------------------
// localStorage mock
// ---------------------------------------------------------------------------

function createLocalStorageMock() {
  const store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      for (const k of Object.keys(store)) delete store[k]
    }),
    get length() {
      return Object.keys(store).length
    },
    key: vi.fn((index: number) => Object.keys(store)[index] ?? null),
  }
}

beforeEach(() => {
  const mock = createLocalStorageMock()
  vi.stubGlobal("window", { localStorage: mock })
  vi.stubGlobal("localStorage", mock)
})

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

import type { TopicTag } from "@/types/glossary"

const baseOptions = {
  unit_id: "unit01" as const,
  lesson_id: "unit01-lesson01",
  topic_tags: ["accounting"] as TopicTag[],
  mode: "solo" as const,
}

describe("recordFlashcardSession", () => {
  it("persists session to localStorage", () => {
    let session = createFlashcardSession(mockTerms.slice(0, 3), "term_en", "def_en")
    session = markCorrect(session)
    session = { ...session, currentIndex: 1 }
    session = markIncorrect(session)

    const record = recordFlashcardSession(session, baseOptions)
    expect(record.session_id).toBeTruthy()
    expect(record.activity.activity_type).toBe("flashcards")
    expect(record.results.items_answered).toBe(2)
  })

  it("updates mastery records in local storage", () => {
    let session = createFlashcardSession(mockTerms.slice(0, 3), "term_en", "def_en")
    session = markCorrect(session)

    recordFlashcardSession(session, baseOptions)
    const data = loadStudyData()
    expect(data.study_state.mastery_by_term.length).toBeGreaterThan(0)
  })

  it("creates due review entries", () => {
    let session = createFlashcardSession(mockTerms.slice(0, 3), "term_en", "def_en")
    session = markCorrect(session)

    recordFlashcardSession(session, baseOptions)
    const data = loadStudyData()
    expect(data.study_state.due_review_snapshot.length).toBeGreaterThan(0)
  })

  it("increments aggregate stats", () => {
    let session = createFlashcardSession(mockTerms.slice(0, 3), "term_en", "def_en")
    session = markCorrect(session)

    recordFlashcardSession(session, baseOptions)
    const data = loadStudyData()
    expect(data.study_state.aggregate_stats.total_sessions).toBe(1)
    expect(data.study_state.aggregate_stats.total_questions_answered).toBe(1)
  })
})

describe("recordMatchingSession", () => {
  it("persists matching session to localStorage", () => {
    let session = createMatchingSession(mockTerms)
    session = selectTerm(session, session.pairs[0].slug)
    session = selectDefinition(session, session.pairs[0].slug)
    session = checkMatch(session).session

    const record = recordMatchingSession(session, baseOptions)
    expect(record.activity.activity_type).toBe("matching")
    expect(record.results.items_correct).toBe(1)
  })

  it("records matched pairs as responses", () => {
    let session = createMatchingSession(mockTerms)
    session = selectTerm(session, session.pairs[0].slug)
    session = selectDefinition(session, session.pairs[0].slug)
    session = checkMatch(session).session

    const record = recordMatchingSession(session, baseOptions)
    expect(record.responses.length).toBe(1)
    expect(record.responses[0].is_correct).toBe(true)
  })
})

describe("recordSpeedRoundSession", () => {
  it("persists speed round session to localStorage", () => {
    let session = createSpeedRoundSession(mockTerms)
    const q = session.questions[session.currentIndex]
    session = answerQuestion(session, q.correctDefEn).session

    const record = recordSpeedRoundSession(session, baseOptions)
    expect(record.activity.activity_type).toBe("speed-round")
    expect(record.results.items_answered).toBe(1)
  })

  it("creates session with correct duration", () => {
    let session = createSpeedRoundSession(mockTerms)
    const q = session.questions[session.currentIndex]
    session = answerQuestion(session, q.correctDefEn).session

    const record = recordSpeedRoundSession(session, baseOptions)
    expect(record.duration_seconds).toBeGreaterThanOrEqual(0)
  })
})

// ---------------------------------------------------------------------------
// Review Session Recording Tests
// ---------------------------------------------------------------------------

import type { ReviewRating } from "@/lib/study/srs"
import { createEmptyLocalData } from "@/lib/study/storage-schema"

interface ReviewResponse {
  term_slug: string
  rating: ReviewRating
}

interface ReviewSession {
  started_at: string
  responses: ReviewResponse[]
}

function createReviewSession(startedAt: string, responses: ReviewResponse[]): ReviewSession {
  return { started_at: startedAt, responses }
}

describe("recordReviewSession", () => {
  it("records review session and updates data", () => {
    const startedAt = new Date().toISOString()
    const session = createReviewSession(startedAt, [
      { term_slug: "accounting-equation", rating: "good" },
      { term_slug: "assets", rating: "again" },
    ])
    const data = createEmptyLocalData()

    const record = recordReviewSession(session, baseOptions, data)
    expect(record.session_id).toBeTruthy()
    expect(record.activity.activity_type).toBe("review")
    expect(record.results.items_answered).toBe(2)
    expect(record.results.items_correct).toBe(1)
    expect(record.results.items_incorrect).toBe(1)
    expect(data.sessions).toHaveLength(1)
  })

  it("updates mastery records in data", () => {
    const startedAt = new Date().toISOString()
    const session = createReviewSession(startedAt, [
      { term_slug: "accounting-equation", rating: "good" },
    ])
    const data = createEmptyLocalData()

    recordReviewSession(session, baseOptions, data)
    expect(data.study_state.mastery_by_term.length).toBeGreaterThan(0)
  })

  it("creates due review entries in data", () => {
    const startedAt = new Date().toISOString()
    const session = createReviewSession(startedAt, [
      { term_slug: "accounting-equation", rating: "good" },
    ])
    const data = createEmptyLocalData()

    recordReviewSession(session, baseOptions, data)
    expect(data.study_state.due_review_snapshot.length).toBeGreaterThan(0)
  })

  it("increments aggregate stats in data", () => {
    const startedAt = new Date().toISOString()
    const session = createReviewSession(startedAt, [
      { term_slug: "accounting-equation", rating: "good" },
    ])
    const data = createEmptyLocalData()

    recordReviewSession(session, baseOptions, data)
    expect(data.study_state.aggregate_stats.total_sessions).toBe(1)
    expect(data.study_state.aggregate_stats.total_questions_answered).toBe(1)
  })
})
