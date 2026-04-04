import type { GlossaryEntry } from "@/types/glossary"

// ---------------------------------------------------------------------------
// Speed Round Study Mode — engine logic
// ---------------------------------------------------------------------------

export interface SpeedQuestion {
  slug: string
  term_en: string
  term_zh: string
  correctDefEn: string
  options: string[]
}

export interface SpeedRoundSession {
  questions: SpeedQuestion[]
  currentIndex: number
  timeRemaining: number
  lives: number
  maxLives: number
  score: number
  streak: number
  bestStreak: number
  totalAnswered: number
  correctCount: number
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

function buildQuestions(terms: GlossaryEntry[]): SpeedQuestion[] {
  return shuffle(terms).map((term) => {
    const distractors = shuffle(terms.filter((t) => t.slug !== term.slug))
      .slice(0, 3)
      .map((t) => t.def_en)

    return {
      slug: term.slug,
      term_en: term.term_en,
      term_zh: term.term_zh,
      correctDefEn: term.def_en,
      options: shuffle([term.def_en, ...distractors]),
    }
  })
}

export function createSpeedRoundSession(
  terms: GlossaryEntry[]
): SpeedRoundSession {
  if (terms.length < 4) throw new Error("Speed round requires at least 4 terms")

  return {
    questions: buildQuestions(terms),
    currentIndex: 0,
    timeRemaining: 90,
    lives: 3,
    maxLives: 3,
    score: 0,
    streak: 0,
    bestStreak: 0,
    totalAnswered: 0,
    correctCount: 0,
    started_at: new Date().toISOString(),
  }
}

export function answerQuestion(
  session: SpeedRoundSession,
  answer: string
): { correct: boolean; session: SpeedRoundSession } {
  const q = session.questions[session.currentIndex]
  const isCorrect = answer === q.correctDefEn

  let nextIndex = session.currentIndex + 1
  // Wrap around if we exhaust the question pool
  if (nextIndex >= session.questions.length) {
    nextIndex = 0
  }

  const newStreak = isCorrect ? session.streak + 1 : 0
  const newBest = Math.max(session.bestStreak, newStreak)

  return {
    correct: isCorrect,
    session: {
      ...session,
      currentIndex: nextIndex,
      score: isCorrect ? session.score + 1 : session.score,
      streak: newStreak,
      bestStreak: newBest,
      lives: isCorrect ? session.lives : session.lives - 1,
      timeRemaining: isCorrect ? session.timeRemaining + 2 : session.timeRemaining,
      totalAnswered: session.totalAnswered + 1,
      correctCount: session.correctCount + (isCorrect ? 1 : 0),
    },
  }
}

export function tickTimer(session: SpeedRoundSession): SpeedRoundSession {
  return {
    ...session,
    timeRemaining: Math.max(0, session.timeRemaining - 1),
  }
}

export function isGameOver(session: SpeedRoundSession): boolean {
  return session.lives <= 0 || session.timeRemaining <= 0
}

export function getSpeedRoundSummary(session: SpeedRoundSession) {
  return {
    totalAnswered: session.totalAnswered,
    correctCount: session.correctCount,
    accuracy: session.totalAnswered > 0 ? session.correctCount / session.totalAnswered : 0,
    bestStreak: session.bestStreak,
    timeRemaining: session.timeRemaining,
    livesRemaining: session.lives,
  }
}
