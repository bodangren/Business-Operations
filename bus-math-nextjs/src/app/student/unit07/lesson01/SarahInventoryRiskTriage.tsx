'use client'

import { useMemo, useState } from "react"
import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const riskSignals = [
  {
    id: "records",
    title: "Purchase records are incomplete",
    detail: "Some launch-kit purchases are still buried in email threads and supplier messages.",
  },
  {
    id: "late-sales",
    title: "Several sales were recorded late",
    detail: "The shelf count and the sale log do not line up cleanly by date.",
  },
  {
    id: "costs",
    title: "Supplier prices changed during the month",
    detail: "Sarah bought the same kind of kit more than once, but not at the same cost.",
  },
  {
    id: "defense",
    title: "Sarah cannot defend the final number",
    detail: "Her mentor asked how ending inventory was built, and Sarah could not explain it clearly.",
  },
] as const

type RiskId = (typeof riskSignals)[number]["id"]

export default function SarahInventoryRiskTriage() {
  const [selected, setSelected] = useState<RiskId[]>([])
  const [checked, setChecked] = useState(false)

  const strongestTriage = useMemo(() => {
    const hasDefense = selected.includes("defense")
    const hasTrailProblem = selected.includes("records") || selected.includes("late-sales")
    return hasDefense && hasTrailProblem
  }, [selected])

  const toggleSignal = (signalId: RiskId) => {
    setChecked(false)
    setSelected((current) => {
      if (current.includes(signalId)) {
        return current.filter((item) => item !== signalId)
      }

      if (current.length === 2) {
        return [...current.slice(1), signalId]
      }

      return [...current, signalId]
    })
  }

  return (
    <Card className="border-amber-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-amber-900">
          <ShieldAlert className="h-5 w-5" />
          Risk Triage
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2 text-slate-800">
          <p className="font-semibold">Your job:</p>
          <p>
            Imagine you are Sarah&apos;s operations coach. Pick the <strong>two red flags</strong> you would raise first.
            You are not solving the accounting yet. You are deciding what makes this month dangerous.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {riskSignals.map((signal) => {
            const isSelected = selected.includes(signal.id)

            return (
              <button
                key={signal.id}
                type="button"
                onClick={() => toggleSignal(signal.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  isSelected
                    ? "border-amber-500 bg-amber-50 shadow-sm"
                    : "border-slate-200 bg-slate-50 hover:border-amber-300 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{signal.title}</p>
                    <p className="mt-2 text-sm text-slate-700">{signal.detail}</p>
                  </div>
                  {isSelected ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-700" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 shrink-0 text-slate-400" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => setChecked(true)} disabled={selected.length !== 2}>
            Check My Triage
          </Button>
          <p className="text-sm text-slate-600">Selected: {selected.length}/2</p>
        </div>

        {checked ? (
          <div
            className={`rounded-2xl border p-4 ${
              strongestTriage ? "border-emerald-200 bg-emerald-50" : "border-orange-200 bg-orange-50"
            }`}
          >
            {strongestTriage ? (
              <div className="space-y-2 text-emerald-950">
                <p className="font-semibold">Strong founder triage.</p>
                <p>
                  The biggest problem is not just that records are messy. It is that Sarah cannot defend the ending inventory
                  number because the record trail is weak. That is the founder problem this unit will solve.
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-orange-950">
                <p className="font-semibold">You noticed pressure, but tighten the triage.</p>
                <p>
                  Changing costs matter, but the deepest problem is still this: Sarah cannot explain the final ending inventory
                  number with a clean record trail. That is the risk lenders and investors will notice first.
                </p>
              </div>
            )}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
