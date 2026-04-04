"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Table2 } from "lucide-react"

interface AssetInput {
  id: string
  name: string
  cost: number
  usefulLife: number
  salvageValue: number
  method: "SL" | "DDB"
}

interface ScheduleRow {
  year: number
  annualExpense: number
  accumulatedDepreciation: number
  bookValue: number
}

const sampleAssets: AssetInput[] = [
  { id: "A-001", name: "Delivery Van", cost: 30000, usefulLife: 5, salvageValue: 5000, method: "SL" },
  { id: "A-002", name: "3D Printer", cost: 15000, usefulLife: 4, salvageValue: 1500, method: "SL" },
  { id: "A-003", name: "Server Rack", cost: 8000, usefulLife: 3, salvageValue: 800, method: "DDB" },
]

function calculateSL(cost: number, salvageValue: number, usefulLife: number): ScheduleRow[] {
  const annualExpense = (cost - salvageValue) / usefulLife
  const rows: ScheduleRow[] = []
  let accumulatedDepreciation = 0
  for (let year = 1; year <= usefulLife; year++) {
    accumulatedDepreciation += annualExpense
    rows.push({
      year,
      annualExpense: Math.round(annualExpense * 100) / 100,
      accumulatedDepreciation: Math.round(accumulatedDepreciation * 100) / 100,
      bookValue: Math.round((cost - accumulatedDepreciation) * 100) / 100,
    })
  }
  return rows
}

function calculateDDB(cost: number, salvageValue: number, usefulLife: number): ScheduleRow[] {
  const rate = 2 / usefulLife
  const rows: ScheduleRow[] = []
  let accumulatedDepreciation = 0
  let bookValue = cost
  for (let year = 1; year <= usefulLife; year++) {
    let expense = bookValue * rate
    if (bookValue - expense < salvageValue) {
      expense = bookValue - salvageValue
    }
    accumulatedDepreciation += expense
    bookValue -= expense
    rows.push({
      year,
      annualExpense: Math.round(expense * 100) / 100,
      accumulatedDepreciation: Math.round(accumulatedDepreciation * 100) / 100,
      bookValue: Math.round(bookValue * 100) / 100,
    })
  }
  return rows
}

export default function AssetRegisterSimulator() {
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0)
  const [userAnnualExpense, setUserAnnualExpense] = useState("")
  const [userYear3BV, setUserYear3BV] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showReveal, setShowReveal] = useState(false)
  const [stage, setStage] = useState<"predict" | "calculate" | "audit">("predict")

  const asset = sampleAssets[selectedAssetIndex]
  const correctSchedule = asset.method === "SL"
    ? calculateSL(asset.cost, asset.salvageValue, asset.usefulLife)
    : calculateDDB(asset.cost, asset.salvageValue, asset.usefulLife)

  const correctAnnualExpense = correctSchedule[0]?.annualExpense ?? 0
  const correctYear3BV = correctSchedule[2]?.bookValue ?? 0

  const annualExpenseCorrect = Math.abs(parseFloat(userAnnualExpense) - correctAnnualExpense) < 1
  const year3BVCorrect = Math.abs(parseFloat(userYear3BV) - correctYear3BV) < 1

  const handlePredictSubmit = () => {
    setSubmitted(true)
  }

  const handleReset = () => {
    setUserAnnualExpense("")
    setUserYear3BV("")
    setSubmitted(false)
    setShowReveal(false)
  }

  const _handleNextAsset = () => {
    setSelectedAssetIndex((prev) => (prev + 1) % sampleAssets.length)
    handleReset()
  }

  return (
    <div className="space-y-6">
      {/* Asset Selector */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900 flex items-center gap-2">
            <Table2 className="h-5 w-5" />
            Step 1: Choose an Asset
          </CardTitle>
          <CardDescription className="text-blue-700">
            Pick an asset from TechStart&apos;s register. You will predict its depreciation schedule before building it in Excel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {sampleAssets.map((a, i) => (
              <Button
                key={a.id}
                variant={i === selectedAssetIndex ? "default" : "outline"}
                onClick={() => { setSelectedAssetIndex(i); handleReset() }}
                className={i === selectedAssetIndex ? "bg-blue-700" : ""}
              >
                {a.name} ({a.method})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Asset Details */}
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-slate-900">Asset Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div>
              <Label className="text-slate-500">Asset ID</Label>
              <p className="font-semibold">{asset.id}</p>
            </div>
            <div>
              <Label className="text-slate-500">Cost</Label>
              <p className="font-semibold">${asset.cost.toLocaleString()}</p>
            </div>
            <div>
              <Label className="text-slate-500">Useful Life</Label>
              <p className="font-semibold">{asset.usefulLife} years</p>
            </div>
            <div>
              <Label className="text-slate-500">Salvage Value</Label>
              <p className="font-semibold">${asset.salvageValue.toLocaleString()}</p>
            </div>
            <div>
              <Label className="text-slate-500">Method</Label>
              <Badge variant={asset.method === "SL" ? "default" : "secondary"}>{asset.method === "SL" ? "Straight-Line" : "Double-Declining"}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stage 1: Predict */}
      {stage === "predict" && (
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Step 2: Predict Before You Build
            </CardTitle>
            <CardDescription className="text-amber-700">
              Calculate by hand. Enter your answers below. Do not use a calculator yet — think through the logic.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="annual-expense">
                  Year 1 Annual Depreciation Expense ($)
                </Label>
                <Input
                  id="annual-expense"
                  type="number"
                  placeholder="Enter your prediction"
                  value={userAnnualExpense}
                  onChange={(e) => setUserAnnualExpense(e.target.value)}
                  disabled={submitted}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year3-bv">
                  End of Year 3 Book Value ($)
                </Label>
                <Input
                  id="year3-bv"
                  type="number"
                  placeholder="Enter your prediction"
                  value={userYear3BV}
                  onChange={(e) => setUserYear3BV(e.target.value)}
                  disabled={submitted}
                />
              </div>
            </div>

            {!submitted ? (
              <Button onClick={handlePredictSubmit} className="bg-amber-700 hover:bg-amber-800">
                Submit Predictions
              </Button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  {annualExpenseCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={annualExpenseCorrect ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                    Year 1 Expense: {annualExpenseCorrect ? "Correct!" : `Your answer: $${userAnnualExpense} → Correct: $${correctAnnualExpense}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {year3BVCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={year3BVCorrect ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                    Year 3 Book Value: {year3BVCorrect ? "Correct!" : `Your answer: $${userYear3BV} → Correct: $${correctYear3BV}`}
                  </span>
                </div>

                {!annualExpenseCorrect && (
                  <div className="bg-white p-3 rounded border border-amber-200 text-sm text-slate-700">
                    <strong>Reteach:</strong> For {asset.method === "SL" ? "straight-line" : "double-declining balance"}, the depreciable base is Cost minus Salvage Value.
                    {asset.method === "SL"
                      ? ` Divide by useful life: ($${asset.cost.toLocaleString()} - $${asset.salvageValue.toLocaleString()}) / ${asset.usefulLife} = $${correctAnnualExpense}/year.`
                      : ` The rate is 2 / ${asset.usefulLife} = ${(2 / asset.usefulLife * 100).toFixed(0)}%. Year 1 expense = $${asset.cost.toLocaleString()} × ${(2 / asset.usefulLife).toFixed(2)} = $${correctAnnualExpense}.`}
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleReset}>Try Again</Button>
                  <Button onClick={() => { setShowReveal(true); setStage("calculate") }} className="bg-blue-700">
                    See Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Stage 2: Full Schedule Reveal */}
      {stage === "calculate" && showReveal && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Step 3: Full Depreciation Schedule
            </CardTitle>
            <CardDescription className="text-green-700">
              This is what your Excel depreciation schedule should produce. Check that your workbook matches.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-green-300 px-3 py-2 text-left font-semibold">Year</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Annual Expense</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Accumulated Depreciation</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Book Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-green-300 px-3 py-2">Start</td>
                    <td className="border border-green-300 px-3 py-2 text-right">—</td>
                    <td className="border border-green-300 px-3 py-2 text-right">—</td>
                    <td className="border border-green-300 px-3 py-2 text-right font-semibold">${asset.cost.toLocaleString()}</td>
                  </tr>
                  {correctSchedule.map((row) => (
                    <tr key={row.year} className={row.year % 2 === 0 ? "bg-green-50" : "bg-white"}>
                      <td className="border border-green-300 px-3 py-2">{row.year}</td>
                      <td className="border border-green-300 px-3 py-2 text-right">${row.annualExpense.toLocaleString()}</td>
                      <td className="border border-green-300 px-3 py-2 text-right">${row.accumulatedDepreciation.toLocaleString()}</td>
                      <td className="border border-green-300 px-3 py-2 text-right font-semibold">${row.bookValue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-white p-3 rounded border border-green-200 text-sm text-slate-700">
              <strong>Verify:</strong> Book Value = Cost − Accumulated Depreciation. Check the final row:
              ${asset.cost.toLocaleString()} − ${correctSchedule[correctSchedule.length - 1]?.accumulatedDepreciation.toLocaleString()} = ${correctSchedule[correctSchedule.length - 1]?.bookValue.toLocaleString()}. ✓
            </div>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={() => { setStage("predict"); handleReset() }}>
                Try Another Asset
              </Button>
              <Button onClick={() => setStage("audit")} className="bg-purple-700">
                Audit Check <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stage 3: Audit Check */}
      {stage === "audit" && (
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Step 4: Audit Check — What Could Go Wrong?
            </CardTitle>
            <CardDescription className="text-purple-700">
              Before you build in Excel, think about what makes a depreciation schedule untrustworthy.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Common Setup Errors</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Forgetting salvage value floor:</strong> DDB can drive book value below salvage if you do not cap the final year&apos;s expense.</li>
                <li><strong>Hard-coding annual expense:</strong> If you type the number instead of using a formula, the schedule breaks when cost or life changes.</li>
                <li><strong>Wrong column references:</strong> Accumulated depreciation should reference the prior year&apos;s accumulated total, not the current year&apos;s expense alone.</li>
                <li><strong>Book value formula reversed:</strong> Book Value = Cost − Accumulated Depreciation, not Accumulated Depreciation − Cost.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Handoff to Phase 4</h4>
              <p>
                You now understand the logic: each row calculates annual expense from cost, life, salvage, and method.
                Accumulated depreciation sums all prior years. Book value is cost minus accumulated depreciation.
              </p>
              <p className="mt-2 font-medium text-purple-800">
                In Phase 4, you will build this exact structure in Excel using the asset register starter workbook.
              </p>
            </div>

            <Button variant="outline" onClick={() => { setStage("predict"); handleReset() }}>
              Practice Another Asset
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
