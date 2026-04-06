"use client"

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import type { LocalStudyData } from "@/lib/study/storage-schema"
import type { UnitId } from "@/types/glossary"
import { loadStudyData, saveStudyData } from "@/lib/study/storage"
import { getDueCountForUnit } from "@/lib/study/derived"
import { glossaryData } from "@/data/glossary"

// ---------------------------------------------------------------------------
// Slug → units lookup (computed once at module level)
// ---------------------------------------------------------------------------

function buildSlugUnitMap(): Record<string, UnitId[]> {
  const map: Record<string, UnitId[]> = {}
  for (const entry of glossaryData) {
    map[entry.slug] = entry.units
  }
  return map
}

const SLUG_UNITS = buildSlugUnitMap()

// ---------------------------------------------------------------------------
// Unit term counts (computed once at module level)
// ---------------------------------------------------------------------------

function buildUnitTermCounts(): Record<UnitId, number> {
  const counts: Record<string, number> = {}
  for (const entry of glossaryData) {
    for (const unit of entry.units) {
      counts[unit] = (counts[unit] ?? 0) + 1
    }
  }
  return counts as Record<UnitId, number>
}

export const UNIT_TERM_COUNTS = buildUnitTermCounts()

// ---------------------------------------------------------------------------
// Pure helpers (exported for testing)
// ---------------------------------------------------------------------------

/**
 * Check whether the user has ever studied any terms.
 */
export function hasAnyStudyHistory(data: LocalStudyData): boolean {
  return data.study_state.mastery_by_term.some((m) => m.times_seen > 0)
}

/**
 * Get the due count and study-history flag for a single unit.
 * Accepts an optional slug-units map for testing; defaults to the real glossary.
 */
export function getDueInfoForUnit(
  unitId: UnitId,
  data: LocalStudyData,
  slugUnits: Record<string, UnitId[]> = SLUG_UNITS,
): { dueCount: number; hasStudied: boolean } {
  const dueCount = getDueCountForUnit(
    unitId,
    data.study_state.due_review_snapshot,
    slugUnits,
  )
  return { dueCount, hasStudied: hasAnyStudyHistory(data) }
}

/**
 * Get per-unit mastery info: terms studied, total terms, and average mastery %.
 * Accepts an optional unit-term-counts map for testing.
 */
export function getUnitMasteryInfo(
  unitId: UnitId,
  data: LocalStudyData,
  unitTermCounts: Record<UnitId, number> = UNIT_TERM_COUNTS,
): { termsStudied: number; termsTotal: number; avgMastery: number } {
  const studied = data.study_state.mastery_by_term.filter(
    (m) => m.units.includes(unitId) && m.times_seen > 0,
  )
  const termsTotal = unitTermCounts[unitId] ?? 0
  const avgMastery =
    studied.length > 0
      ? Math.round(
          (studied.reduce((sum, m) => sum + m.mastery_score, 0) / studied.length) * 100,
        )
      : 0
  return { termsStudied: studied.length, termsTotal, avgMastery }
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface StudyDataContextValue {
  /** Current study data snapshot (null during initial SSR/hydration). */
  data: LocalStudyData | null
  /** Re-read data from localStorage. */
  refresh: () => void
  /** Write data to both context state and localStorage. */
  mutate: (data: LocalStudyData) => void
  /** Whether the initial load has completed. */
  isLoading: boolean
}

const StudyDataContext = createContext<StudyDataContextValue | null>(null)

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface StudyDataProviderProps {
  children: ReactNode
}

export function StudyDataProvider({ children }: StudyDataProviderProps) {
  const [data, setData] = useState<LocalStudyData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const load = useCallback(() => {
    const d = loadStudyData()
    setData(d)
    setIsLoading(false)
  }, [])

  const mutate = useCallback((next: LocalStudyData) => {
    saveStudyData(next)
    setData(next)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return (
    <StudyDataContext.Provider value={{ data, refresh: load, mutate, isLoading }}>
      {children}
    </StudyDataContext.Provider>
  )
}

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

/**
 * Access the shared study data context.
 * Throws if used outside StudyDataProvider.
 */
export function useStudyData(): StudyDataContextValue {
  const ctx = useContext(StudyDataContext)
  if (!ctx) {
    throw new Error("useStudyData must be used within a StudyDataProvider")
  }
  return ctx
}

/**
 * Derived hook: due count and study-history flag for a specific unit.
 * Returns null values while loading.
 */
export function useStudyDueCount(unitId: UnitId): {
  dueCount: number | null
  hasStudied: boolean
} {
  const { data, isLoading } = useStudyData()

  if (isLoading || !data) {
    return { dueCount: null, hasStudied: false }
  }

  return getDueInfoForUnit(unitId, data)
}

/**
 * Derived hook: unit mastery info (terms studied, total, avg %) for a specific unit.
 * Returns null while loading.
 */
export function useUnitMastery(unitId: UnitId): {
  termsStudied: number
  termsTotal: number
  avgMastery: number
} | null {
  const { data, isLoading } = useStudyData()

  if (isLoading || !data) {
    return null
  }

  return getUnitMasteryInfo(unitId, data)
}
