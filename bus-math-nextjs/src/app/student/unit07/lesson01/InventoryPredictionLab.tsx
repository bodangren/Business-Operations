'use client'

import { useMemo, useState } from "react"
import { CheckCircle2, Eye, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buildGuidedSnapshot, guidedEvents } from "./inventory-simulation"

type MetricPick = "cash" | "units" | "inventoryValue" | "revenue" | "grossProfit"
type DirectionPick = "up" | "down" | "same"

const metricLabels: Record<MetricPick, string> = {
  cash: "Cash",
  units: "Units on shelf",
  inventoryValue: "Inventory value",
  revenue: "Sales revenue",
  grossProfit: "Gross profit",
}

export default function InventoryPredictionLab() {
  const [stepIndex, setStepIndex] = useState(0)
  const [pickedMetrics, setPickedMetrics] = useState<MetricPick[]>([])
  const [shelfDirection, setShelfDirection] = useState<DirectionPick | null>(null)
  const [profitDirection, setProfitDirection] = useState<DirectionPick | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [eventScores, setEventScores] = useState<number[]>([])

  const activeEvent = guidedEvents[stepIndex]
  const beforeSnapshot = buildGuidedSnapshot(stepIndex)
  const afterSnapshot = buildGuidedSnapshot(stepIndex + 1)

  const actualProfitDirection: DirectionPick = activeEvent.metricMoves.includes("grossProfit") ? "up" : "same"

  const metricScore = useMemo(() => {
    const actualMetricSet = new Set(activeEvent.metricMoves)
    let score = 0
    ;(["cash", "units", "inventoryValue", "revenue", "grossProfit"] as MetricPick[]).forEach((metric) => {
      const picked = pickedMetrics.includes(metric)
      const actual = actualMetricSet.has(metric)
      if (picked === actual) {
        score += 1
      }
    })
    return score
  }, [activeEvent.metricMoves, pickedMetrics])

  const directionScore =
    (shelfDirection === activeEvent.shelfDirection ? 1 : 0) + (profitDirection === actualProfitDirection ? 1 : 0)

  const totalScore = metricScore + directionScore
  const scoreLabel = eventScores.reduce((sum, score) => sum + score, 0) + (revealed ? totalScore : 0)

  const toggleMetric = (metric: MetricPick) => {
    setPickedMetrics((current) =>
      current.includes(metric) ? current.filter((item) => item !== metric) : [...current, metric]
    )
  }

  const goToNextEvent = () => {
    const nextScores = [...eventScores]
    nextScores[stepIndex] = totalScore
    setEventScores(nextScores)
    setStepIndex((current) => Math.min(current + 1, guidedEvents.length - 1))
    setPickedMetrics([])
    setShelfDirection(null)
    setProfitDirection(null)
    setRevealed(false)
  }

  const resetLab = () => {
    setStepIndex(0)
    setPickedMetrics([])
    setShelfDirection(null)
    setProfitDirection(null)
    setRevealed(false)
    setEventScores([])
  }

  return (
    <Card className="border-emerald-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-900">
          <LineChart className="h-5 w-5" />
          Prediction Lab
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2 text-slate-800">
          <p className="font-semibold">Your job:</p>
          <p>
            Before you reveal each event, predict what moves. This is the core launch-lesson habit: do not memorize rules yet.
            Watch how the business changes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-600">
                Event {stepIndex + 1} of {guidedEvents.length}
              </p>
              <p className="mt-1 font-semibold text-slate-900">{activeEvent.label}</p>
              <p className="mt-2 text-sm text-slate-700">{activeEvent.details}</p>
            </div>
            <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-900">
              Score so far: {scoreLabel}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-slate-900">1. Which business numbers change in this event?</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["cash", "units", "inventoryValue", "revenue", "grossProfit"] as MetricPick[]).map((metric) => (
                <Button
                  key={metric}
                  variant={pickedMetrics.includes(metric) ? "default" : "outline"}
                  onClick={() => {
                    if (revealed) return
                    toggleMetric(metric)
                  }}
                >
                  {metricLabels[metric]}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">2. What happens to the shelf?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(["up", "down", "same"] as DirectionPick[]).map((choice) => (
                  <Button
                    key={choice}
                    variant={shelfDirection === choice ? "default" : "outline"}
                    onClick={() => {
                      if (revealed) return
                      setShelfDirection(choice)
                    }}
                  >
                    {choice}
                  </Button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">3. What happens to gross profit right now?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(["up", "down", "same"] as DirectionPick[]).map((choice) => (
                  <Button
                    key={choice}
                    variant={profitDirection === choice ? "default" : "outline"}
                    onClick={() => {
                      if (revealed) return
                      setProfitDirection(choice)
                    }}
                  >
                    {choice}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {!revealed ? (
            <Button
              onClick={() => setRevealed(true)}
              disabled={pickedMetrics.length === 0 || !shelfDirection || !profitDirection}
            >
              <Eye className="h-4 w-4" />
              Reveal Result
            </Button>
          ) : (
            <Button onClick={stepIndex === guidedEvents.length - 1 ? resetLab : goToNextEvent}>
              {stepIndex === guidedEvents.length - 1 ? "Run the Lab Again" : "Next Event"}
            </Button>
          )}
        </div>

        {revealed ? (
          <div className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-center gap-2 text-emerald-950">
              <CheckCircle2 className="h-5 w-5" />
              <p className="font-semibold">
                You scored {totalScore}/7 on this event.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SnapshotCard
                title="Before the event"
                cash={beforeSnapshot.cash}
                inventoryValue={beforeSnapshot.endingInventoryValue}
                units={beforeSnapshot.endingUnits}
                revenue={beforeSnapshot.revenue}
                grossProfit={beforeSnapshot.grossProfit}
              />
              <SnapshotCard
                title="After the event"
                cash={afterSnapshot.cash}
                inventoryValue={afterSnapshot.endingInventoryValue}
                units={afterSnapshot.endingUnits}
                revenue={afterSnapshot.revenue}
                grossProfit={afterSnapshot.grossProfit}
              />
            </div>

            <div className="rounded-2xl border border-white/70 bg-white p-4 text-slate-900">
              <p className="font-semibold">What moved in this event</p>
              <p className="mt-2 text-sm">
                Actual changes:{" "}
                {activeEvent.metricMoves.map((metric) => metricLabels[metric]).join(", ")}.
                The shelf moved <strong>{activeEvent.shelfDirection}</strong>, and gross profit moved{" "}
                <strong>{actualProfitDirection}</strong>.
              </p>
              <p className="mt-2 text-sm">{activeEvent.studentTakeaway}</p>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

function SnapshotCard({
  title,
  cash,
  inventoryValue,
  units,
  revenue,
  grossProfit,
}: {
  title: string
  cash: number
  inventoryValue: number
  units: number
  revenue: number
  grossProfit: number
}) {
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="font-semibold text-slate-900">{title}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <MetricLine label="Cash" value={formatCurrency(cash)} />
        <MetricLine label="Inventory value" value={formatCurrency(inventoryValue)} />
        <MetricLine label="Units on shelf" value={`${units} kits`} />
        <MetricLine label="Sales revenue" value={formatCurrency(revenue)} />
        <MetricLine label="Gross profit" value={formatCurrency(grossProfit)} />
      </div>
    </div>
  )
}

function MetricLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  )
}
