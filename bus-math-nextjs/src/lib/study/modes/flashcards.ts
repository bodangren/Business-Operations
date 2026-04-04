import type { GlossaryEntry, GlossaryField } from "@/types/glossary"

// ---------------------------------------------------------------------------
// Flashcard Study Mode — engine logic
// ---------------------------------------------------------------------------

export interface FlashcardItem {
  slug: string
  term_en: string
  term_zh: string
  def_en: string
  def_zh: string
  result: "unseen" | "correct" | "incorrect"
}

export interface FlashcardSession {
  cards: FlashcardItem[]
  currentIndex: number
  isFlipped: boolean
  promptField: GlossaryField
  answerField: GlossaryField
  correctCount: number
  incorrectCount: number
  requeuedSlugs: Set<string>
  started_at: string
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function createFlashcardSession(
  terms: GlossaryEntry[],
  promptField: GlossaryField,
  answerField: GlossaryField
): FlashcardSession {
  if (terms.length === 0) throw new Error("Cannot create flashcard session with empty term list")

  return {
    cards: shuffle(terms).map((t) => ({
      slug: t.slug,
      term_en: t.term_en,
      term_zh: t.term_zh,
      def_en: t.def_en,
      def_zh: t.def_zh,
      result: "unseen",
    })),
    currentIndex: 0,
    isFlipped: false,
    promptField,
    answerField,
    correctCount: 0,
    incorrectCount: 0,
    requeuedSlugs: new Set(),
    started_at: new Date().toISOString(),
  }
}

export function flipCard(session: FlashcardSession): FlashcardSession {
  return { ...session, isFlipped: !session.isFlipped }
}

function markCurrentCard(
  session: FlashcardSession,
  result: "correct" | "incorrect",
  requeue: boolean
): FlashcardSession {
  const cards = [...session.cards]
  const card = { ...cards[session.currentIndex], result }
  cards[session.currentIndex] = card

  const requeuedSlugs = new Set(session.requeuedSlugs)

  if (requeue && !requeuedSlugs.has(card.slug)) {
    requeuedSlugs.add(card.slug)
    cards.push({
      slug: card.slug,
      term_en: card.term_en,
      term_zh: card.term_zh,
      def_en: card.def_en,
      def_zh: card.def_zh,
      result: "unseen",
    })
  }

  return {
    ...session,
    cards,
    requeuedSlugs,
    correctCount: session.correctCount + (result === "correct" ? 1 : 0),
    incorrectCount: session.incorrectCount + (result === "incorrect" ? 1 : 0),
    isFlipped: false,
  }
}

export function markCorrect(session: FlashcardSession): FlashcardSession {
  return markCurrentCard(session, "correct", false)
}

export function markIncorrect(session: FlashcardSession): FlashcardSession {
  return markCurrentCard(session, "incorrect", true)
}

export function advanceCard(session: FlashcardSession): FlashcardSession {
  const nextIndex = Math.min(session.currentIndex + 1, session.cards.length - 1)
  return { ...session, currentIndex: nextIndex, isFlipped: false }
}

export function isSessionComplete(session: FlashcardSession): boolean {
  // All original cards (before any re-queues) must have been reviewed
  // We track by checking if every card with result !== "unseen" up to the original count
  const originalCount = session.cards.length - session.requeuedSlugs.size
  const reviewedOriginal = session.cards
    .slice(0, originalCount)
    .every((c) => c.result !== "unseen")
  return reviewedOriginal
}

export function getSessionSummary(session: FlashcardSession) {
  const total = session.correctCount + session.incorrectCount
  return {
    total,
    correct: session.correctCount,
    incorrect: session.incorrectCount,
    accuracy: total > 0 ? session.correctCount / total : 0,
  }
}
