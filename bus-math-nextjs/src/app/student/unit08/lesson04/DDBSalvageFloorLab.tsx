"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"

type Step = 1 | 2 | 3 | 4

const scenario = {
  asset: "Delivery Van",
  cost: 30000,
  salvage: 5000,
  life: 5,
  ddbRate: 0.4,
  straightLineExpense: 5000,
  years: [
    { year: 1, beginBV: 30000, rawExpense: 12000, adjustedExpense: 12000, endBV: 18000, floorHit: false },
    { year: 2, beginBV: 18000, rawExpense: 7200, adjustedExpense: 7200, endBV: 10800, floorHit: false },
    { year: 3, beginBV: 10800, rawExpense: 4320, adjustedExpense: 4320, endBV: 6480, floorHit: false },
    { year: 4, beginBV: 6480, rawExpense: 2592, adjustedExpense: 1480, endBV: 5000, floorHit: true },
    { year: 5, beginBV: 5000, rawExpense: 2000, adjustedExpense: 0, endBV: 5000, floorHit: true }
  ]
}

function formatMoney(value: number) {
  return `$${value.toLocaleString()}`
}

function parseInput(value: string) {
  return Number.parseFloat(value.replace(/,/g, "").trim())
}

function ScenarioHeader() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
        <p className="text-xs uppercase text-slate-500">Cost</p>
        <p className="text-lg font-semibold text-slate-900">{formatMoney(scenario.cost)}</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
        <p className="text-xs uppercase text-slate-500">Salvage</p>
        <p className="text-lg font-semibold text-slate-900">{formatMoney(scenario.salvage)}</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
        <p className="text-xs uppercase text-slate-500">Useful Life</p>
        <p className="text-lg font-semibold text-slate-900">{scenario.life} years</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
        <p className="text-xs uppercase text-slate-500">DDB Rate</p>
        <p className="text-lg font-semibold text-slate-900">{scenario.ddbRate * 100}%</p>
      </div>
    </div>
  )
}

export default function DDBSalvageFloorLab() {
  const [step, setStep] = useState<Step>(1)
  const [year1Answer, setYear1Answer] = useState("")
  const [year1EndBVAnswer, setYear1EndBVAnswer] = useState("")
  const [year2Answer, setYear2Answer] = useState("")
  const [year2EndBVAnswer, setYear2EndBVAnswer] = useState("")
  const [year3Answer, setYear3Answer] = useState("")
  const [year3EndBVAnswer, setYear3EndBVAnswer] = useState("")
  const [year4RawAnswer, setYear4RawAnswer] = useState("")
  const [year4AdjustedAnswer, setYear4AdjustedAnswer] = useState("")
  const [year4EndBVAnswer, setYear4EndBVAnswer] = useState("")
  const [compareAnswer, setCompareAnswer] = useState("")

  const [firstCheck, setFirstCheck] = useState(false)
  const [floorCheck, setFloorCheck] = useState(false)
  const [finalCheck, setFinalCheck] = useState(false)

  const firstCorrect =
    Math.abs(parseInput(year1Answer) - 12000) < 0.01 &&
    Math.abs(parseInput(year1EndBVAnswer) - 18000) < 0.01 &&
    Math.abs(parseInput(year2Answer) - 7200) < 0.01 &&
    Math.abs(parseInput(year2EndBVAnswer) - 10800) < 0.01 &&
    Math.abs(parseInput(year3Answer) - 4320) < 0.01 &&
    Math.abs(parseInput(year3EndBVAnswer) - 6480) < 0.01

  const floorCorrect =
    Math.abs(parseInput(year4RawAnswer) - 2592) < 0.01 &&
    Math.abs(parseInput(year4AdjustedAnswer) - 1480) < 0.01 &&
    Math.abs(parseInput(year4EndBVAnswer) - 5000) < 0.01

  const finalCorrect = Math.abs(parseInput(compareAnswer) - 7000) < 0.01

  const resetLab = () => {
    setStep(1)
    setYear1Answer("")
    setYear1EndBVAnswer("")
    setYear2Answer("")
    setYear2EndBVAnswer("")
    setYear3Answer("")
    setYear3EndBVAnswer("")
    setYear4RawAnswer("")
    setYear4AdjustedAnswer("")
    setYear4EndBVAnswer("")
    setCompareAnswer("")
    setFirstCheck(false)
    setFloorCheck(false)
    setFinalCheck(false)
  }

  if (step === 1) {
    return (
      <Card className="border-orange-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 1: Read the DDB Schedule Frame</CardTitle>
            <Badge className="bg-orange-100 text-orange-800">Step 1 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-orange-900">
            This guided lab focuses on the one DDB rule students usually miss: the salvage-value floor.
          </div>

          <ScenarioHeader />

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Guided path:
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>Calculate normal DDB expense in Years 1-3.</li>
              <li>Test Year 4 against the salvage floor.</li>
              <li>Compare Year 1 DDB expense with straight-line to explain the business effect.</li>
            </ol>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setStep(2)} className="bg-orange-600 hover:bg-orange-700">
              Start Normal DDB Years
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (step === 2) {
    return (
      <Card className="border-orange-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 2: Calculate Normal DDB Years</CardTitle>
            <Badge className="bg-orange-100 text-orange-800">Step 2 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ScenarioHeader />

          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-orange-900">
            Use <strong>Beginning Book Value × 40%</strong> for Years 1-3. Then subtract that expense to get the ending book value for the year. No salvage-floor adjustment is needed yet.
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[scenario.years[0], scenario.years[1], scenario.years[2]].map((row, index) => {
              const value = index === 0 ? year1Answer : index === 1 ? year2Answer : year3Answer
              const setter = index === 0 ? setYear1Answer : index === 1 ? setYear2Answer : setYear3Answer
              const endValue = index === 0 ? year1EndBVAnswer : index === 1 ? year2EndBVAnswer : year3EndBVAnswer
              const endSetter =
                index === 0 ? setYear1EndBVAnswer : index === 1 ? setYear2EndBVAnswer : setYear3EndBVAnswer

              return (
                <div key={row.year} className="rounded-lg border border-slate-200 p-4">
                  <p className="font-medium text-slate-900">Year {row.year}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {row.year === 1
                      ? `Beginning BV = original cost = ${scenario.cost.toLocaleString()}`
                      : "Beginning BV = previous year's ending book value"}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">Expense = Beginning BV × 40%</p>
                  <Input
                    inputMode="decimal"
                    placeholder="Enter expense"
                    value={value}
                    onChange={(event) => setter(event.target.value)}
                    className="mt-3"
                  />
                  <p className="mt-3 text-sm text-slate-600">Ending BV = Beginning BV - expense</p>
                  <Input
                    inputMode="decimal"
                    placeholder="Enter ending BV"
                    value={endValue}
                    onChange={(event) => endSetter(event.target.value)}
                    className="mt-2"
                  />
                </div>
              )
            })}
          </div>

          {firstCheck && (
            <div className={`rounded-lg border p-4 ${firstCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className={firstCorrect ? "text-green-800" : "text-red-800"}>
                {firstCorrect
                  ? "Correct. You built Years 1-3 by carrying ending book value forward each year, with no floor adjustment yet."
                  : "Not quite. Apply 40% to the beginning book value for each year, then subtract the expense to get ending book value."}
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setFirstCheck(true)}>
                Check Answer
              </Button>
              {firstCheck && firstCorrect && (
                <Button onClick={() => setStep(3)} className="bg-orange-600 hover:bg-orange-700">
                  Continue to Salvage Floor
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (step === 3) {
    return (
      <Card className="border-purple-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 3: Apply the Salvage Floor</CardTitle>
            <Badge className="bg-purple-100 text-purple-800">Step 3 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ScenarioHeader />

          <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 text-purple-900">
            Year 4 is where the floor matters. First calculate the raw DDB amount, then cap the expense so book value stops exactly at salvage value.
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700">
            <p className="font-medium text-slate-900">Carry-forward from Step 2</p>
            <p className="mt-1 text-sm">
              Year 3 ending book value becomes Year 4 beginning book value: {formatMoney(scenario.years[2].endBV)}.
            </p>
            <p className="mt-1 text-sm">
              If you took the full raw Year 4 DDB amount, check whether the resulting ending book value would drop below salvage.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="font-medium text-slate-900">Raw Year 4 expense</p>
              <p className="mt-1 text-sm text-slate-600">Year 4 beginning BV × 40%</p>
              <Input
                inputMode="decimal"
                placeholder="Enter raw expense"
                value={year4RawAnswer}
                onChange={(event) => setYear4RawAnswer(event.target.value)}
                className="mt-3"
              />
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="font-medium text-slate-900">Adjusted Year 4 expense</p>
              <p className="mt-1 text-sm text-slate-600">Cap expense so ending BV = salvage</p>
              <Input
                inputMode="decimal"
                placeholder="Enter adjusted expense"
                value={year4AdjustedAnswer}
                onChange={(event) => setYear4AdjustedAnswer(event.target.value)}
                className="mt-3"
              />
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="font-medium text-slate-900">Ending book value after Year 4</p>
              <p className="mt-1 text-sm text-slate-600">Book value cannot go below salvage</p>
              <Input
                inputMode="decimal"
                placeholder="Enter ending BV"
                value={year4EndBVAnswer}
                onChange={(event) => setYear4EndBVAnswer(event.target.value)}
                className="mt-3"
              />
            </div>
          </div>

          {floorCheck && (
            <div className={`rounded-lg border p-4 ${floorCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className={floorCorrect ? "text-green-800" : "text-red-800"}>
                {floorCorrect
                  ? "Correct. The raw Year 4 amount is too large, so the expense must be reduced to stop at the salvage floor."
                  : "Not quite. Find the raw DDB amount first, then replace it with the amount that brings book value exactly to salvage."}
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setFloorCheck(true)}>
                Check Answer
              </Button>
              {floorCheck && floorCorrect && (
                <Button onClick={() => setStep(4)} className="bg-purple-600 hover:bg-purple-700">
                  Continue to Comparison
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-emerald-200 bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-slate-900">Step 4: Explain the Business Difference</CardTitle>
          <Badge className="bg-emerald-100 text-emerald-800">Step 4 of 4</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ScenarioHeader />

        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          Straight-line Year 1 expense for this asset is {formatMoney(scenario.straightLineExpense)}. DDB Year 1 expense is {formatMoney(12000)}.
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <label className="text-sm font-medium text-slate-700">
            How much higher is Year 1 DDB expense than straight-line?
          </label>
          <Input
            inputMode="decimal"
            placeholder="Enter difference"
            value={compareAnswer}
            onChange={(event) => setCompareAnswer(event.target.value)}
            className="mt-2 max-w-xs"
          />
        </div>

        {finalCheck && (
          <div className={`rounded-lg border p-4 ${finalCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            {finalCorrect ? (
              <div className="space-y-3 text-green-800">
                <p className="font-medium">
                  <CheckCircle2 className="mr-2 inline h-5 w-5" />
                  Correct. You can now explain both the salvage-floor mechanics and the early-year profit effect.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Year 1 DDB expense = {formatMoney(12000)}</li>
                  <li>Year 1 straight-line expense = {formatMoney(scenario.straightLineExpense)}</li>
                  <li>DDB records {formatMoney(7000)} more expense in Year 1, which lowers early-year profit.</li>
                </ul>
              </div>
            ) : (
              <p className="text-red-800">
                Not quite. Compare the two Year 1 expenses directly: DDB minus straight-line.
              </p>
            )}
          </div>
        )}

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep(3)}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setFinalCheck(true)}>
              Check Answer
            </Button>
            <Button variant="outline" onClick={resetLab}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset Lab
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
