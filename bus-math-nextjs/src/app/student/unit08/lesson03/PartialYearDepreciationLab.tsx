"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"

type Step = 1 | 2 | 3 | 4

interface AssetCase {
  id: string
  name: string
  cost: number
  salvage: number
  life: number
  purchaseDate: string
  monthsInService: number
}

const assets: AssetCase[] = [
  {
    id: "van",
    name: "Delivery Van",
    cost: 30000,
    salvage: 5000,
    life: 5,
    purchaseDate: "April 1",
    monthsInService: 9
  },
  {
    id: "laptops",
    name: "Laptop Set",
    cost: 12000,
    salvage: 2000,
    life: 4,
    purchaseDate: "July 1",
    monthsInService: 6
  }
]

function formatMoney(value: number) {
  return `$${value.toLocaleString()}`
}

function parseInput(value: string) {
  return Number.parseFloat(value.replace(/,/g, "").trim())
}

function AssetSnapshot() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {assets.map((asset) => (
        <div key={asset.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="font-medium text-slate-900">{asset.name}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-slate-500">Cost</p>
              <p className="text-sm font-semibold text-slate-900">{formatMoney(asset.cost)}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500">Salvage</p>
              <p className="text-sm font-semibold text-slate-900">{formatMoney(asset.salvage)}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500">Useful Life</p>
              <p className="text-sm font-semibold text-slate-900">{asset.life} years</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500">Months in Service</p>
              <p className="text-sm font-semibold text-slate-900">{asset.monthsInService} months</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function PartialYearDepreciationLab() {
  const [step, setStep] = useState<Step>(1)
  const [annualAnswers, setAnnualAnswers] = useState<Record<string, string>>({})
  const [partialAnswers, setPartialAnswers] = useState<Record<string, string>>({})
  const [totalAnswer, setTotalAnswer] = useState("")
  const [bookValueAnswer, setBookValueAnswer] = useState("")

  const [annualChecked, setAnnualChecked] = useState(false)
  const [partialChecked, setPartialChecked] = useState(false)
  const [finalChecked, setFinalChecked] = useState(false)

  const expectedAnnual: Record<string, number> = {
    van: (30000 - 5000) / 5,
    laptops: (12000 - 2000) / 4
  }

  const expectedPartial: Record<string, number> = {
    van: expectedAnnual.van * (9 / 12),
    laptops: expectedAnnual.laptops * (6 / 12)
  }

  const expectedTotal = expectedPartial.van + expectedPartial.laptops
  const expectedBookValue = 30000 - expectedPartial.van

  const annualCorrect = assets.every(
    (asset) => Math.abs(parseInput(annualAnswers[asset.id] ?? "") - expectedAnnual[asset.id]) < 0.01
  )

  const partialCorrect = assets.every(
    (asset) => Math.abs(parseInput(partialAnswers[asset.id] ?? "") - expectedPartial[asset.id]) < 0.01
  )

  const finalCorrect =
    Math.abs(parseInput(totalAnswer) - expectedTotal) < 0.01 &&
    Math.abs(parseInput(bookValueAnswer) - expectedBookValue) < 0.01

  const resetLab = () => {
    setStep(1)
    setAnnualAnswers({})
    setPartialAnswers({})
    setTotalAnswer("")
    setBookValueAnswer("")
    setAnnualChecked(false)
    setPartialChecked(false)
    setFinalChecked(false)
  }

  if (step === 1) {
    return (
      <Card className="border-indigo-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 1: Read the Asset Schedule</CardTitle>
            <Badge className="bg-indigo-100 text-indigo-800">Step 1 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 text-indigo-900">
            Sarah bought two assets during the year, not on January 1. Your job is to calculate the
            straight-line depreciation that belongs in Year 1 for each asset.
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-2 text-left">Asset</th>
                  <th className="px-3 py-2 text-right">Cost</th>
                  <th className="px-3 py-2 text-right">Salvage</th>
                  <th className="px-3 py-2 text-right">Life</th>
                  <th className="px-3 py-2 text-center">Purchase Date</th>
                  <th className="px-3 py-2 text-center">Months in Service</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id} className="border-b border-slate-100">
                    <td className="px-3 py-3 font-medium text-slate-900">{asset.name}</td>
                    <td className="px-3 py-3 text-right">{formatMoney(asset.cost)}</td>
                    <td className="px-3 py-3 text-right">{formatMoney(asset.salvage)}</td>
                    <td className="px-3 py-3 text-right">{asset.life} years</td>
                    <td className="px-3 py-3 text-center">{asset.purchaseDate}</td>
                    <td className="px-3 py-3 text-center">{asset.monthsInService}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Guided path:
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>Find the full annual straight-line expense for each asset.</li>
              <li>Prorate that annual amount by months in service.</li>
              <li>Total Year 1 depreciation and update book value.</li>
            </ol>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setStep(2)} className="bg-indigo-600 hover:bg-indigo-700">
              Start the Annual Expense Step
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (step === 2) {
    return (
      <Card className="border-indigo-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 2: Full-Year Straight-Line Expense</CardTitle>
            <Badge className="bg-indigo-100 text-indigo-800">Step 2 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <AssetSnapshot />

          <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 text-indigo-900">
            Before you handle months in service, compute the normal full-year straight-line expense for each asset.
          </div>

          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.id} className="rounded-lg border border-slate-200 p-4">
                <p className="font-medium text-slate-900">{asset.name}</p>
                <p className="mt-1 text-sm text-slate-600">
                  ({formatMoney(asset.cost)} - {formatMoney(asset.salvage)}) ÷ {asset.life}
                </p>
                <div className="mt-3 max-w-xs">
                  <Input
                    inputMode="decimal"
                    placeholder="Enter annual expense"
                    value={annualAnswers[asset.id] ?? ""}
                    onChange={(event) =>
                      setAnnualAnswers((current) => ({ ...current, [asset.id]: event.target.value }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {annualChecked && (
            <div className={`rounded-lg border p-4 ${annualCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className={annualCorrect ? "text-green-800" : "text-red-800"}>
                {annualCorrect
                  ? "Correct. You now have the full-year straight-line amount for each asset."
                  : "Not quite. Recheck depreciable base first, then divide by useful life."}
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setAnnualChecked(true)}>
                Check Answer
              </Button>
              {annualChecked && annualCorrect && (
                <Button onClick={() => setStep(3)} className="bg-indigo-600 hover:bg-indigo-700">
                  Continue to Proration
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
            <CardTitle className="text-xl text-slate-900">Step 3: Prorate for Months in Service</CardTitle>
            <Badge className="bg-purple-100 text-purple-800">Step 3 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <AssetSnapshot />

          <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 text-purple-900">
            Use the full-year amount you already found, then multiply by months in service ÷ 12.
          </div>

          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.id} className="rounded-lg border border-slate-200 p-4">
                <p className="font-medium text-slate-900">{asset.name}</p>
                <p className="mt-1 text-sm text-slate-600">
                  Full-year expense × ({asset.monthsInService} ÷ 12)
                </p>
                <div className="mt-3 max-w-xs">
                  <Input
                    inputMode="decimal"
                    placeholder="Enter Year 1 expense"
                    value={partialAnswers[asset.id] ?? ""}
                    onChange={(event) =>
                      setPartialAnswers((current) => ({ ...current, [asset.id]: event.target.value }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {partialChecked && (
            <div className={`rounded-lg border p-4 ${partialCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className={partialCorrect ? "text-green-800" : "text-red-800"}>
                {partialCorrect
                  ? "Correct. You prorated both assets by time in service."
                  : "Not quite. Multiply the annual amount by the fraction of the year the asset was actually in service."}
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setPartialChecked(true)}>
                Check Answer
              </Button>
              {partialChecked && partialCorrect && (
                <Button onClick={() => setStep(4)} className="bg-purple-600 hover:bg-purple-700">
                  Continue to Final Check
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
          <CardTitle className="text-xl text-slate-900">Step 4: Final Check</CardTitle>
          <Badge className="bg-emerald-100 text-emerald-800">Step 4 of 4</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <AssetSnapshot />

        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          Finish the schedule by finding total Year 1 depreciation and the van&apos;s ending book value after partial-year depreciation.
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <label className="text-sm font-medium text-slate-700">Total Year 1 depreciation for both assets</label>
            <Input
              inputMode="decimal"
              placeholder="Enter total depreciation"
              value={totalAnswer}
              onChange={(event) => setTotalAnswer(event.target.value)}
              className="mt-2"
            />
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <label className="text-sm font-medium text-slate-700">Van book value at end of Year 1</label>
            <Input
              inputMode="decimal"
              placeholder="Enter van book value"
              value={bookValueAnswer}
              onChange={(event) => setBookValueAnswer(event.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        {finalChecked && (
          <div className={`rounded-lg border p-4 ${finalCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            {finalCorrect ? (
              <div className="space-y-3 text-green-800">
                <p className="font-medium">
                  <CheckCircle2 className="mr-2 inline h-5 w-5" />
                  Correct. You completed the partial-year schedule accurately.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Van full-year expense = {formatMoney(expectedAnnual.van)}, Year 1 partial = {formatMoney(expectedPartial.van)}</li>
                  <li>Laptop full-year expense = {formatMoney(expectedAnnual.laptops)}, Year 1 partial = {formatMoney(expectedPartial.laptops)}</li>
                  <li>Total Year 1 depreciation = {formatMoney(expectedTotal)}</li>
                  <li>Van ending book value = {formatMoney(expectedBookValue)}</li>
                </ul>
              </div>
            ) : (
              <p className="text-red-800">
                Not quite. Add the two partial-year expenses for total depreciation, then subtract the van&apos;s Year 1 depreciation from its original cost to get ending book value.
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
            <Button variant="outline" onClick={() => setFinalChecked(true)}>
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
