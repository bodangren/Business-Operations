'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, HelpCircle } from "lucide-react"

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
})

export type FilingStatus = "single" | "married" | "headOfHousehold"

export interface DeductionScenario {
  id: string
  title: string
  description: string
  payPeriod: string
  taxableWages: number
  filingStatus: FilingStatus
  bracketHint: string
  stateRate?: number
  notes?: string
  expected: {
    socialSecurity: number
    medicare: number
    federalIncome: number
    stateIncome?: number
  }
}

interface CalculateDeductionsProps {
  scenarios: DeductionScenario[]
  mode?: "assisted" | "independent"
}

const tolerance = 0.5

export function CalculateDeductions({
  scenarios,
  mode = "assisted"
}: CalculateDeductionsProps) {
  const [responses, setResponses] = useState<Record<string, Partial<DeductionScenario["expected"]>>>({})
  const [feedback, setFeedback] = useState<Record<string, string>>({})

  const handleInputChange = (scenarioId: string, field: keyof DeductionScenario["expected"], value: string) => {
    const numericValue = value === "" ? undefined : Number(value)
    setResponses(prev => ({
      ...prev,
      [scenarioId]: {
        ...prev[scenarioId],
        [field]: numericValue
      }
    }))
  }

  const evaluateScenario = (scenario: DeductionScenario) => {
    const userResponses = responses[scenario.id] || {}
    const resultMessages: string[] = []
    const fields: Array<keyof DeductionScenario["expected"]> = [
      "socialSecurity",
      "medicare",
      "federalIncome",
      "stateIncome"
    ]

    fields.forEach(field => {
      const expectedValue = scenario.expected[field]
      if (typeof expectedValue !== "number") return
      const userValue = userResponses[field]
      if (!(typeof userValue === "number" && Math.abs(userValue - expectedValue) <= tolerance)) {
        resultMessages.push(
          `${labelMap[field]} should be ${currency.format(expectedValue)}. Double-check your math.`
        )
      }
    })

    if (resultMessages.length === 0) {
      setFeedback(prev => ({
        ...prev,
        [scenario.id]: "Great work! All of your deductions match the table."
      }))
    } else {
      setFeedback(prev => ({
        ...prev,
        [scenario.id]: resultMessages.join(" ")
      }))
    }
  }

  const labelMap: Record<keyof DeductionScenario["expected"], string> = {
    socialSecurity: "Social Security",
    medicare: "Medicare",
    federalIncome: "Federal income tax",
    stateIncome: "State income tax"
  }

  const renderHint = (scenario: DeductionScenario) => (
    <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm text-sky-900 flex gap-2">
      <HelpCircle className="h-4 w-4 text-sky-700 mt-0.5" />
      <div>
        <p className="font-semibold">Scaffolded hints</p>
        <ul className="list-disc list-inside space-y-1 mt-1">
          <li>Social Security = 6.2% of wages (up to $172,800 per year).</li>
          <li>Medicare = 1.45% of wages (no cap for Alex).</li>
          <li>{scenario.bracketHint}</li>
          {typeof scenario.stateRate === "number" && (
            <li>State withholding uses a simplified {scenario.stateRate * 100}% flat rate.</li>
          )}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {scenarios.map(scenario => {
        const userResponses = responses[scenario.id] || {}
        const scenarioFeedback = feedback[scenario.id]

        return (
          <Card key={scenario.id} className="border-purple-200 bg-white/90">
            <CardHeader>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-purple-900">{scenario.title}</CardTitle>
                  <p className="text-sm text-purple-800">{scenario.description}</p>
                </div>
                <Badge className="bg-purple-100 text-purple-800 border border-purple-200">
                  {scenario.payPeriod} · {scenario.filingStatus}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
                Taxable wages for this pay period: <strong>{currency.format(scenario.taxableWages)}</strong>
                {scenario.notes && (
                  <p className="mt-2 text-slate-700">{scenario.notes}</p>
                )}
              </div>

              {mode === "assisted" && renderHint(scenario)}

              <div className="grid gap-4 md:grid-cols-2">
                {(Object.keys(labelMap) as (keyof DeductionScenario["expected"])[])
                  .filter(field => typeof scenario.expected[field] === "number")
                  .map(field => (
                    <label key={field} className="text-sm font-medium text-slate-700 space-y-2">
                      {labelMap[field]}
                      <Input
                        type="number"
                        inputMode="decimal"
                        step="0.01"
                        placeholder="Enter amount"
                        value={userResponses[field] ?? ""}
                        onChange={e => handleInputChange(scenario.id, field, e.target.value)}
                        className="bg-white"
                      />
                    </label>
                  ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button onClick={() => evaluateScenario(scenario)} className="bg-purple-600 hover:bg-purple-700">
                  Check deductions
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setResponses(prev => ({
                      ...prev,
                      [scenario.id]: {}
                    }))
                    setFeedback(prev => ({
                      ...prev,
                      [scenario.id]: ""
                    }))
                  }}
                >
                  Reset
                </Button>
              </div>

              {scenarioFeedback && (
                <div
                  className={`rounded-lg border p-3 text-sm flex gap-2 ${
                    scenarioFeedback.startsWith("Great")
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-rose-200 bg-rose-50 text-rose-900"
                  }`}
                >
                  {scenarioFeedback.startsWith("Great") ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <span>{scenarioFeedback}</span>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
