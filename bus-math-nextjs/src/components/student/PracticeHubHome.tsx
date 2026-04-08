"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Layers,
  Shuffle,
  Zap,
  Clock,
  TrendingDown,
  Download,
  BarChart3,
} from "lucide-react"
import type { UnitId } from "@/types/glossary"
import { glossaryData } from "@/data/glossary"
import {
  deriveStats,
  formatRelativeDate,
  masteryColor,
} from "@/lib/study/derived"
import { useStudyData, UNIT_TERM_COUNTS } from "@/contexts/StudyDataContext"

const UNITS: { id: UnitId; label: string }[] = [
  { id: "unit01", label: "Unit 01" },
  { id: "unit02", label: "Unit 02" },
  { id: "unit03", label: "Unit 03" },
  { id: "unit04", label: "Unit 04" },
  { id: "unit05", label: "Unit 05" },
  { id: "unit06", label: "Unit 06" },
  { id: "unit07", label: "Unit 07" },
  { id: "unit08", label: "Unit 08" },
]

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

function unitLabel(unitId: string): string {
  const u = UNITS.find((u) => u.id === unitId)
  return u ? u.label : unitId
}

export default function PracticeHubHome() {
  const searchParams = useSearchParams()
  const initialUnit = searchParams.get("unit") as UnitId | null
  const [activeUnit, setActiveUnit] = useState<UnitId | null>(initialUnit)
  const { data, isLoading } = useStudyData()

  if (isLoading || !data) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const stats = deriveStats(data, TOTAL_TERMS, UNIT_TERM_COUNTS)

  const unitQuery = activeUnit ? `?unit=${activeUnit}` : ""
  const weakTermsFiltered = activeUnit
    ? stats.weakTerms.filter((m) => m.units.includes(activeUnit))
    : stats.weakTerms

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-3">
            Practice Hub
          </Badge>
          <h1 className="text-3xl font-bold mb-2">Practice Hub</h1>
          <p className="text-muted-foreground">
            Study vocabulary, track your progress, and export your results.
          </p>
        </div>

        {/* Unit Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveUnit(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !activeUnit
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All Units
          </button>
          {UNITS.map((u) => (
            <button
              key={u.id}
              onClick={() => setActiveUnit(u.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeUnit === u.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>

        {/* Due Review */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Due Review</h2>
            <Link
              href={`/student/practice-hub/progress${unitQuery}`}
              className="text-sm text-primary hover:text-primary/80"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card className={stats.totalDueNow > 0 ? "border-red-300 bg-red-50" : ""}>
              <CardContent className="pt-4 pb-3 text-center">
                <div className={`text-3xl font-bold ${stats.totalDueNow > 0 ? "text-red-600" : "text-foreground"}`}>
                  {stats.totalDueNow}
                </div>
                <div className="text-xs text-muted-foreground mt-1">terms due today</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-3 text-center">
                <div className="text-3xl font-bold">{stats.totalDueThisWeek}</div>
                <div className="text-xs text-muted-foreground mt-1">terms this week</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-3 text-center">
                <div className="text-3xl font-bold">{stats.termsStudied}</div>
                <div className="text-xs text-muted-foreground mt-1">total studied</div>
              </CardContent>
            </Card>
          </div>
          <Button asChild>
            <Link href={`/student/practice-hub/review`}>
              Start Review Session
            </Link>
          </Button>
        </section>

        {/* Vocabulary Study Modes */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Vocabulary Study</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href={`/student/practice-hub/flashcards${unitQuery}`}>
              <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                <CardContent className="pt-6 pb-4 text-center">
                  <Layers className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold text-sm">Flashcards</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Flip through terms one at a time
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href={`/student/practice-hub/matching${unitQuery}`}>
              <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                <CardContent className="pt-6 pb-4 text-center">
                  <Shuffle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="font-semibold text-sm">Matching Game</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Match terms to their definitions
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href={`/student/practice-hub/speed-round${unitQuery}`}>
              <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                <CardContent className="pt-6 pb-4 text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                  <div className="font-semibold text-sm">Speed Round</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Race the clock — how fast can you go?
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Card className="border-dashed opacity-60">
              <CardContent className="pt-6 pb-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <div className="font-semibold text-sm">Team Activity</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Printable cards for class play
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Two-column: Recent Practice + Weak Topics */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Recent Practice */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Recent Practice</h2>
              <Link
                href={`/student/practice-hub/progress${unitQuery}`}
                className="text-sm text-primary hover:text-primary/80"
              >
                See all →
              </Link>
            </div>
            <Card>
              <CardContent className="pt-2">
                {stats.recentSessions.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    No sessions yet. Start studying to see your progress here.
                  </p>
                ) : (
                  stats.recentSessions.slice(0, 5).map((session) => (
                    <div
                      key={session.session_id}
                      className="flex items-center justify-between py-2.5 border-b last:border-0"
                    >
                      <div>
                        <div className="text-sm font-medium">
                          {activityLabel(session.activity.activity_type)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {unitLabel(session.curriculum.unit_id)} ·{" "}
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
                {weakTermsFiltered.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    No weak topics yet. Keep studying!
                  </p>
                ) : (
                  weakTermsFiltered.map((term) => (
                    <div
                      key={term.term_slug}
                      className="flex items-center justify-between py-2.5 border-b last:border-0"
                    >
                      <div>
                        <div className="text-sm font-medium capitalize">
                          {term.term_slug.replace(/-/g, " ")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {term.units.map(unitLabel).join(", ")} ·{" "}
                          {term.times_seen} attempts
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
            {weakTermsFiltered.length > 0 && (
              <Button
                asChild
                size="sm"
                className="mt-3 bg-amber-600 hover:bg-amber-700"
              >
                <Link href={`/student/practice-hub/flashcards?mode=weak${activeUnit ? `&unit=${activeUnit}` : ""}`}>
                  <TrendingDown className="h-3.5 w-3.5 mr-1.5" />
                  Practice Weak Topics
                </Link>
              </Button>
            )}
          </section>
        </div>

        {/* Export & History */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Export & History</h2>
            <Link
              href="/student/practice-hub/export"
              className="text-sm text-primary hover:text-primary/80"
            >
              Export Progress →
            </Link>
          </div>
          <Card>
            <CardContent className="pt-2">
              {stats.exportHistory.length === 0 ? (
                <p className="text-sm text-muted-foreground py-4 text-center">
                  No exports yet. Export your progress to submit results or back up your data.
                </p>
              ) : (
                stats.exportHistory.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between py-2.5 border-b last:border-0"
                  >
                    <div>
                      <div className="text-sm font-medium">{entry.filename}</div>
                      <div className="text-xs text-muted-foreground">
                        {formatRelativeDate(entry.date)}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      .{entry.type}
                    </Badge>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </section>

        {/* Footer nav */}
        <div className="flex gap-3 justify-center pt-4">
          <Button asChild variant="outline">
            <Link href="/student/practice-hub/progress">
              <BarChart3 className="h-4 w-4 mr-2" />
              Progress Dashboard
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/student/practice-hub/export">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
