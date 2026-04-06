import type { UnitId } from "@/types/glossary"
import type {
  LocalStudyData,
  TermMastery,
  SessionRecord,
  DueReviewEntry,
  ExportHistoryEntry,
} from "./storage-schema"
import { getDueTerms } from "./srs"

export interface UnitMastery {
  unitId: UnitId
  termsStudied: number
  termsTotal: number
  avgMastery: number
}

export interface DerivedStats {
  termsStudied: number
  totalDueNow: number
  totalDueThisWeek: number
  totalSessions: number
  avgAccuracy: number
  weakTerms: TermMastery[]
  recentSessions: SessionRecord[]
  unitMastery: UnitMastery[]
  exportHistory: ExportHistoryEntry[]
  dueTerms: DueReviewEntry[]
}

const UNIT_IDS: UnitId[] = [
  "unit01", "unit02", "unit03", "unit04",
  "unit05", "unit06", "unit07", "unit08",
]

export function deriveStats(
  data: LocalStudyData,
  glossaryTermCount: number,
  unitTermCounts: Record<UnitId, number>,
): DerivedStats {
  const now = new Date()
  const oneWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

  const { study_state, sessions, export_history } = data
  const mastery = study_state.mastery_by_term
  const dueAll = study_state.due_review_snapshot

  const dueNow = getDueTerms(dueAll, now)
  const dueWeek = dueAll.filter((e) => new Date(e.scheduled_for) <= oneWeek)

  const termsStudied = mastery.filter((m) => m.times_seen > 0).length

  const totalAnswered = sessions.reduce(
    (sum, s) => sum + s.results.items_answered,
    0,
  )
  const totalCorrect = sessions.reduce(
    (sum, s) => sum + s.results.items_correct,
    0,
  )
  const avgAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  const weakTerms = [...mastery]
    .filter((m) => m.times_seen > 0 && m.mastery_score < 0.6)
    .sort((a, b) => a.mastery_score - b.mastery_score)
    .slice(0, 8)

  const recentSessions = [...sessions]
    .sort((a, b) => new Date(b.started_at).getTime() - new Date(a.started_at).getTime())
    .slice(0, 10)

  const unitMastery: UnitMastery[] = UNIT_IDS.map((unitId) => {
    const unitTerms = mastery.filter((m) => m.units.includes(unitId) && m.times_seen > 0)
    const totalForUnit = unitTermCounts[unitId] ?? 0
    const avg =
      unitTerms.length > 0
        ? unitTerms.reduce((sum, m) => sum + m.mastery_score, 0) / unitTerms.length
        : 0
    return {
      unitId,
      termsStudied: unitTerms.length,
      termsTotal: totalForUnit,
      avgMastery: Math.round(avg * 100),
    }
  })

  return {
    termsStudied,
    totalDueNow: dueNow.length,
    totalDueThisWeek: dueWeek.length,
    totalSessions: sessions.length,
    avgAccuracy,
    weakTerms,
    recentSessions,
    unitMastery,
    exportHistory: export_history,
    dueTerms: dueNow,
  }
}

/**
 * Compute per-unit due term counts from a due review snapshot.
 * Maps each DueReviewEntry to units via a slug→units lookup map.
 */
export function getDueCountByUnit(
  dueEntries: DueReviewEntry[],
  slugUnits: Record<string, UnitId[]>,
  now: Date = new Date(),
): Record<UnitId, number> {
  const counts = {} as Record<UnitId, number>
  for (const id of UNIT_IDS) counts[id] = 0

  const dueNow = getDueTerms(dueEntries, now)
  for (const entry of dueNow) {
    const units = slugUnits[entry.term_slug]
    if (!units) continue
    for (const unit of units) {
      counts[unit] = (counts[unit] ?? 0) + 1
    }
  }

  return counts
}

/**
 * Get the due count for a single unit.
 */
export function getDueCountForUnit(
  unitId: UnitId,
  dueEntries: DueReviewEntry[],
  slugUnits: Record<string, UnitId[]>,
  now: Date = new Date(),
): number {
  const dueNow = getDueTerms(dueEntries, now)
  let count = 0
  for (const entry of dueNow) {
    const units = slugUnits[entry.term_slug]
    if (units && units.includes(unitId)) count++
  }
  return count
}

export function formatRelativeDate(iso: string): string {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  const mins = Math.floor(seconds / 60)
  return `${mins}m`
}

export function masteryColor(score: number): string {
  if (score >= 85) return "bg-green-500"
  if (score >= 60) return "bg-amber-500"
  if (score >= 30) return "bg-orange-500"
  return "bg-red-500"
}
