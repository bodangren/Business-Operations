'use client'

import { useState } from "react"
import { ArrowRightLeft, CheckCircle2, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { guidedEvents } from "./inventory-simulation"

type PressureChoice = "cash" | "shelf" | "margin"

const expectedChoices: Record<string, PressureChoice> = {
  "event-1": "cash",
  "event-2": "margin",
  "event-3": "shelf",
  "event-4": "margin",
}

const optionLabels: Record<PressureChoice, string> = {
  cash: "Cash pressure",
  shelf: "Shelf value pressure",
  margin: "Margin pressure",
}

export default function InventoryPressureMap() {
  const [answers, setAnswers] = useState<Record<string, PressureChoice | undefined>>({})
  const [checked, setChecked] = useState(false)

  const allAnswered = guidedEvents.every((event) => answers[event.id])
  const totalCorrect = guidedEvents.filter((event) => answers[event.id] === expectedChoices[event.id]).length

  return (
    <Card className="border-blue-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900">
          <ArrowRightLeft className="h-5 w-5" />
          Month Scanner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2 text-slate-800">
          <p className="font-semibold">Your job:</p>
          <p>
            Before you run the month, scan each event and decide what Sarah is probably feeling first:
            cash pressure, shelf-value pressure, or margin pressure.
          </p>
        </div>

        <div className="space-y-4">
          {guidedEvents.map((event) => (
            <div key={event.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900">{event.label}</p>
                  <p className="mt-1 text-sm text-slate-700">{event.details}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(["cash", "shelf", "margin"] as const).map((choice) => (
                    <Button
                      key={choice}
                      variant={answers[event.id] === choice ? "default" : "outline"}
                      onClick={() => {
                        setChecked(false)
                        setAnswers((current) => ({ ...current, [event.id]: choice }))
                      }}
                    >
                      {optionLabels[choice]}
                    </Button>
                  ))}
                </div>

                {checked ? (
                  <div
                    className={`rounded-xl border p-3 text-sm ${
                      answers[event.id] === expectedChoices[event.id]
                        ? "border-emerald-200 bg-emerald-50 text-emerald-950"
                        : "border-orange-200 bg-orange-50 text-orange-950"
                    }`}
                  >
                    {answers[event.id] === expectedChoices[event.id] ? (
                      <p>
                        Good read. This moment is mainly about <strong>{optionLabels[expectedChoices[event.id]].toLowerCase()}</strong>.
                      </p>
                    ) : (
                      <p>
                        Closer look: this event is mainly about <strong>{optionLabels[expectedChoices[event.id]].toLowerCase()}</strong>.
                        That is the pressure Sarah is likely to notice first here.
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => setChecked(true)} disabled={!allAnswered}>
            Check My Reads
          </Button>
          {checked ? (
            <p className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              {totalCorrect}/4 pressure reads matched the model.
            </p>
          ) : null}
        </div>

        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sky-950">
          <div className="flex items-start gap-3">
            <Wallet className="mt-0.5 h-5 w-5" />
            <div className="space-y-2">
              <p className="font-semibold">Why this matters before the lesson gets technical</p>
              <p className="text-sm">
                Sarah is not feeling "inventory theory" right now. She is feeling pressure in real time:
                cash getting tied up, margin being tested, and shelf value becoming harder to explain.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
