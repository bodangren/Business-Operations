import type { GlossaryEntry } from "@/types/glossary"

// ---------------------------------------------------------------------------
// Matching Study Mode — engine logic
// ---------------------------------------------------------------------------

export interface MatchPair {
  slug: string
  term_en: string
  def_en: string
  def_zh: string
}

export interface MatchingSession {
  pairs: MatchPair[]
  shuffledDefinitions: MatchPair[]
  matchedPairs: string[]
  selectedTermSlug: string | null
  selectedDefSlug: string | null
  wrongFlashSlug: string | null
  correctCount: number
  incorrectCount: number
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

export function createMatchingSession(terms: GlossaryEntry[]): MatchingSession {
  if (terms.length < 6) throw new Error("Matching requires at least 6 terms")

  const sampled = shuffle(terms).slice(0, 6)
  const pairs: MatchPair[] = sampled.map((t) => ({
    slug: t.slug,
    term_en: t.term_en,
    def_en: t.def_en,
    def_zh: t.def_zh,
  }))

  return {
    pairs: shuffle(pairs),
    shuffledDefinitions: shuffle(pairs),
    matchedPairs: [],
    selectedTermSlug: null,
    selectedDefSlug: null,
    wrongFlashSlug: null,
    correctCount: 0,
    incorrectCount: 0,
    started_at: new Date().toISOString(),
  }
}

export function selectTerm(
  session: MatchingSession,
  slug: string
): MatchingSession {
  if (session.matchedPairs.includes(slug)) return session
  return {
    ...session,
    selectedTermSlug: session.selectedTermSlug === slug ? null : slug,
    wrongFlashSlug: null,
  }
}

export function selectDefinition(
  session: MatchingSession,
  slug: string
): MatchingSession {
  if (session.matchedPairs.includes(slug)) return session
  return {
    ...session,
    selectedDefSlug: session.selectedDefSlug === slug ? null : slug,
    wrongFlashSlug: null,
  }
}

export function checkMatch(session: MatchingSession): {
  matched: boolean
  session: MatchingSession
} {
  const { selectedTermSlug, selectedDefSlug, matchedPairs } = session

  if (!selectedTermSlug || !selectedDefSlug) {
    return { matched: false, session }
  }

  if (matchedPairs.includes(selectedTermSlug)) {
    return {
      matched: false,
      session: { ...session, selectedTermSlug: null, selectedDefSlug: null },
    }
  }

  const isCorrect = selectedTermSlug === selectedDefSlug

  if (isCorrect) {
    return {
      matched: true,
      session: {
        ...session,
        matchedPairs: [...matchedPairs, selectedTermSlug],
        selectedTermSlug: null,
        selectedDefSlug: null,
        wrongFlashSlug: null,
        correctCount: session.correctCount + 1,
      },
    }
  }

  return {
    matched: false,
    session: {
      ...session,
      selectedTermSlug: null,
      selectedDefSlug: null,
      wrongFlashSlug: selectedTermSlug,
      incorrectCount: session.incorrectCount + 1,
    },
  }
}

export function clearSelection(session: MatchingSession): MatchingSession {
  return { ...session, selectedTermSlug: null, selectedDefSlug: null }
}

export function isSessionComplete(session: MatchingSession): boolean {
  return session.matchedPairs.length === session.pairs.length
}

export function getMatchingSummary(session: MatchingSession) {
  const startTime = new Date(session.started_at).getTime()
  const elapsedSeconds = Math.round((Date.now() - startTime) / 1000)

  return {
    matchedCount: session.matchedPairs.length,
    totalPairs: session.pairs.length,
    correctCount: session.correctCount,
    incorrectAttempts: session.incorrectCount,
    elapsedSeconds: Math.max(0, elapsedSeconds),
  }
}
