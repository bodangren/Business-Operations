"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Download,
  TrendingDown,
  ArrowRight,
} from "lucide-react"
import type { UnitId } from "@/types/glossary"
import { glossaryData } from "@/data/glossary"
import { filterByUnit } from "@/lib/glossary/index"
import {
  deriveStats,
  formatRelativeDate,
  masteryColor,
} from "@/lib/study/derived"
import { useStudyData } from "@/contexts/StudyDataContext"

const UNITS: { id: UnitId; title: string }[] = [
  { id: "unit01", title: "Smart Ledger Launch" },
  { id: "unit02", title: "Month-End Wizard" },
  { id: "unit03", title: "Three-Statement Storyboard" },
  { id: "unit04", title: "Data-Driven Café" },
  { id: "unit05", title: "PayDay Simulator" },
  { id: "unit06", title: "PriceLab Challenge" },
  { id: "unit07", title: "Inventory Accounting" },
  { id: "unit08", title: "Fixed Assets & Depreciation" },
]

const UNIT_TERM_COUNTS: Record<UnitId, number> = {} as Record<UnitId, number>
for (const u of UNITS) {
  UNIT_TERM_COUNTS[u.id] = filterByUnit(glossaryData, u.id).length
}
const TOTAL_TERMS = glossaryData.length

function activityLabel(type: string): string {
  switch (type) {
    case "flashcards": return "Flashcards"
    case "matching": return "Matching Game"
    case "speed-round": return "Speed Round"
    case "review": return "Review Session"
    default: return type
  }
}

export default function ProgressDashboard() {
  const { data, isLoading } = useStudyData()

  if (isLoading || !data) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const stats = deriveStats(data, TOTAL_TERMS, UNIT_TERM_COUNTS)

  const avgMastery =
    stats.unitMastery.length > 0
      ? Math.round(
          stats.unitMastery.reduce((s, u) => s + u.avgMastery, 0) /
            stats.unitMastery.filter((u) => u.termsStudied > 0).length || 0
        )
      : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-4">
          <Link href="/student/practice-hub" className="hover:text-foreground">
            Practice Hub
          </Link>{" "}
          › <span className="font-medium text-foreground">Progress Dashboard</span>
        </div>

        <div className="mb-6">
          <Badge variant="outline" className="mb-2">Progress</Badge>
          <h1 className="text-2xl font-bold">Progress Dashboard</h1>
          <p className="text-muted-foreground">
            Track your vocabulary mastery and practice across all units.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-3xl font-bold text-blue-700">{stats.termsStudied}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                Terms Studied
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-3xl font-bold">{avgMastery}%</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                Avg Mastery
              </div>
            </CardContent>
          </Card>
          <Card className={stats.totalDueNow > 0 ? "bg-red-50 border-red-200" : ""}>
            <CardContent className="pt-4 pb-3 text-center">
              <div className={`text-3xl font-bold ${stats.totalDueNow > 0 ? "text-red-600" : ""}`}>
                {stats.totalDueNow}
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                Due Today
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3 text-center">
              <div className="text-3xl font-bold">{stats.totalSessions}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                Sessions
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mastery by Unit */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Mastery by Unit</h2>
            <Button asChild size="sm" variant="outline">
              <Link href="/student/practice-hub/export">
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Export Progress
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="pt-2 px-0">
              {stats.unitMastery.map((um) => {
                const unit = UNITS.find((u) => u.id === um.unitId)
                return (
                  <Link
                    key={um.unitId}
                    href={`/student/practice-hub?unit=${um.unitId}`}
                    className="flex items-center gap-3 px-5 py-3 border-b last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-bold text-sm w-16 shrink-0">
                      {um.unitId.replace("unit", "Unit ")}
                    </div>
                    <div className="text-sm text-muted-foreground flex-1 truncate">
                      {unit?.title}
                    </div>
                    <div className="w-28 shrink-0">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${masteryColor(um.avgMastery)}`}
                          style={{ width: `${um.avgMastery}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-sm font-semibold w-10 text-right">
                      {um.avgMastery}%
                    </div>
                    <div className="text-xs text-muted-foreground w-16 text-right">
                      {um.termsStudied}/{um.termsTotal}
                    </div>
                  </Link>
                )
              })}
            </CardContent>
          </Card>
        </section>

        {/* Two column: Recent Practice + Weak Topics */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Recent Practice */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Recent Practice Sessions</h2>
            <Card>
              <CardContent className="pt-2">
                {stats.recentSessions.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    No sessions yet.
                  </p>
                ) : (
                  stats.recentSessions.map((session) => (
                    <div
                      key={session.session_id}
                      className="flex items-center justify-between py-2.5 border-b last:border-0"
                    >
                      <div>
                        <div className="text-sm font-medium">
                          {activityLabel(session.activity.activity_type)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {session.curriculum.unit_id.replace("unit", "Unit ")} ·{" "}
                          {session.results.items_answered} terms ·{" "}
                          {formatRelativeDate(session.started_at)}
                        </div>
                      </div>
                      <div
                        className={`text-sm font-semibold ${
                          session.results.accuracy >= 0.8
                            ? "text-green-600"
                            : session.results.accuracy >= 0.6
                              ? "text-amber-600"
                              : "text-red-600"
                        }`}
                      >
                        {Math.round(session.results.accuracy * 100)}%
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </section>

          {/* Weak Topics */}
          <section>
            <h2 className="text-lg font-semibold mb-3">Weak Topics</h2>
            <Card>
              <CardContent className="pt-2">
                {stats.weakTerms.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    No weak topics yet. Keep studying!
                  </p>
                ) : (
                  stats.weakTerms.map((term) => (
                    <div
                      key={term.term_slug}
                      className="flex items-center justify-between py-2.5 border-b last:border-0"
                    >
                      <div>
                        <div className="text-sm font-medium capitalize">
                          {term.term_slug.replace(/-/g, " ")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {term.units.map((u) => u.replace("unit", "Unit ")).join(", ")} ·{" "}
                          {term.times_seen} attempts
                        </div>
                      </div>
                      <div className="w-20 shrink-0">
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${masteryColor(term.mastery_score * 100)}`}
                            style={{ width: `${Math.round(term.mastery_score * 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
            {stats.weakTerms.length > 0 && (
              <Button asChild size="sm" className="mt-3 bg-amber-600 hover:bg-amber-700">
                <Link href="/student/practice-hub/flashcards?mode=weak">
                  <TrendingDown className="h-3.5 w-3.5 mr-1.5" />
                  Practice Weak Topics
                </Link>
              </Button>
            )}
          </section>
        </div>

        {/* Back to hub */}
        <div className="text-center pt-4">
          <Button asChild variant="outline">
            <Link href="/student/practice-hub">
              Back to Practice Hub <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
