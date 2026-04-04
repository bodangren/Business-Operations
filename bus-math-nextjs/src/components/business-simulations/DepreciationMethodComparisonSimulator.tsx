"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Table2 } from "lucide-react"

interface AssetScenario {
  id: string
  name: string
  cost: number
  usefulLife: number
  salvageValue: number
}

interface ScheduleRow {
  year: number
  slExpense: number
  slAccumDep: number
  slBookValue: number
  ddbExpense: number
  ddbAccumDep: number
  ddbBookValue: number
}

const scenarios: AssetScenario[] = [
  { id: "A-001", name: "Delivery Van", cost: 30000, usefulLife: 5, salvageValue: 5000 },
  { id: "A-002", name: "3D Printer", cost: 15000, usefulLife: 4, salvageValue: 1500 },
  { id: "A-003", name: "Server Rack", cost: 8000, usefulLife: 3, salvageValue: 800 },
]

function calculateComparison(asset: AssetScenario): ScheduleRow[] {
  const slAnnual = (asset.cost - asset.salvageValue) / asset.usefulLife
  const ddbRate = 2 / asset.usefulLife
  const rows: ScheduleRow[] = []
  let slAccum = 0
  let ddbAccum = 0
  let ddbBV = asset.cost

  for (let year = 1; year <= asset.usefulLife; year++) {
    slAccum += slAnnual
    let ddbExpense = ddbBV * ddbRate
    if (ddbBV - ddbExpense < asset.salvageValue) {
      ddbExpense = ddbBV - asset.salvageValue
    }
    ddbAccum += ddbExpense
    ddbBV -= ddbExpense

    rows.push({
      year,
      slExpense: Math.round(slAnnual * 100) / 100,
      slAccumDep: Math.round(slAccum * 100) / 100,
      slBookValue: Math.round((asset.cost - slAccum) * 100) / 100,
      ddbExpense: Math.round(ddbExpense * 100) / 100,
      ddbAccumDep: Math.round(ddbAccum * 100) / 100,
      ddbBookValue: Math.round(ddbBV * 100) / 100,
    })
  }
  return rows
}

export default function DepreciationMethodComparisonSimulator() {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [userYear1SL, setUserYear1SL] = useState("")
  const [userYear1DDB, setUserYear1DDB] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showReveal, setShowReveal] = useState(false)
  const [stage, setStage] = useState<"predict" | "compare" | "audit">("predict")

  const asset = scenarios[scenarioIndex]
  const schedule = calculateComparison(asset)
  const correctSL = schedule[0]?.slExpense ?? 0
  const correctDDB = schedule[0]?.ddbExpense ?? 0

  const slCorrect = Math.abs(parseFloat(userYear1SL) - correctSL) < 1
  const ddbCorrect = Math.abs(parseFloat(userYear1DDB) - correctDDB) < 1

  const handleReset = () => {
    setUserYear1SL("")
    setUserYear1DDB("")
    setSubmitted(false)
    setShowReveal(false)
  }

  const _handleNextAsset = () => {
    setScenarioIndex((prev) => (prev + 1) % scenarios.length)
    handleReset()
  }

  return (
    <div className="space-y-6">
      {/* Asset Selector */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900 flex items-center gap-2">
            <Table2 className="h-5 w-5" />
            Step 1: Choose an Asset to Compare
          </CardTitle>
          <CardDescription className="text-blue-700">
            Pick an asset from TechStart&apos;s register. You will compare SL and DDB depreciation before building it in Excel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {scenarios.map((a, i) => (
              <Button
                key={a.id}
                variant={i === scenarioIndex ? "default" : "outline"}
                onClick={() => { setScenarioIndex(i); handleReset() }}
                className={i === scenarioIndex ? "bg-blue-700" : ""}
              >
                {a.name}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
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
          </div>
        </CardContent>
      </Card>

      {/* Stage 1: Predict */}
      {stage === "predict" && (
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Step 2: Predict Year 1 Expense for Both Methods
            </CardTitle>
            <CardDescription className="text-amber-700">
              Calculate Year 1 depreciation by hand for both straight-line and double-declining balance. Then check your answers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sl-expense">
                  Straight-Line Year 1 Expense ($)
                </Label>
                <p className="text-xs text-slate-500">Formula: (Cost − Salvage) / Life</p>
                <Input
                  id="sl-expense"
                  type="number"
                  placeholder="Enter your prediction"
                  value={userYear1SL}
                  onChange={(e) => setUserYear1SL(e.target.value)}
                  disabled={submitted}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ddb-expense">
                  DDB Year 1 Expense ($)
                </Label>
                <p className="text-xs text-slate-500">Formula: Cost × (2 / Life)</p>
                <Input
                  id="ddb-expense"
                  type="number"
                  placeholder="Enter your prediction"
                  value={userYear1DDB}
                  onChange={(e) => setUserYear1DDB(e.target.value)}
                  disabled={submitted}
                />
              </div>
            </div>

            {!submitted ? (
              <Button onClick={() => setSubmitted(true)} className="bg-amber-700 hover:bg-amber-800">
                Submit Predictions
              </Button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  {slCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={slCorrect ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                    SL Year 1: {slCorrect ? "Correct!" : `Your answer: $${userYear1SL} → Correct: $${correctSL}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {ddbCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={ddbCorrect ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                    DDB Year 1: {ddbCorrect ? "Correct!" : `Your answer: $${userYear1DDB} → Correct: $${correctDDB}`}
                  </span>
                </div>

                {(!slCorrect || !ddbCorrect) && (
                  <div className="bg-white p-3 rounded border border-amber-200 text-sm text-slate-700 space-y-1">
                    <strong>Reteach:</strong>
                    <p>SL: (${asset.cost.toLocaleString()} − ${asset.salvageValue.toLocaleString()}) / {asset.usefulLife} = ${correctSL}/year</p>
                    <p>DDB: ${asset.cost.toLocaleString()} × (2 / {asset.usefulLife}) = ${correctDDB} in Year 1</p>
                    <p className="font-medium">Notice: DDB expense is higher in Year 1. This is the &quot;accelerated&quot; effect.</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleReset}>Try Again</Button>
                  <Button onClick={() => { setShowReveal(true); setStage("compare") }} className="bg-blue-700">
                    See Full Comparison <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Stage 2: Full Comparison Reveal */}
      {stage === "compare" && showReveal && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Step 3: Side-by-Side Comparison Schedule
            </CardTitle>
            <CardDescription className="text-green-700">
              Both methods end at the same salvage value. The difference is in the timing of the expense.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-green-300 px-3 py-2 text-left font-semibold" rowSpan={2}>Year</th>
                    <th className="border border-green-300 px-3 py-2 text-center font-semibold" colSpan={3}>Straight-Line</th>
                    <th className="border border-green-300 px-3 py-2 text-center font-semibold" colSpan={3}>Double-Declining Balance</th>
                  </tr>
                  <tr className="bg-green-50">
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Expense</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Accum Dep</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Book Value</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Expense</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Accum Dep</th>
                    <th className="border border-green-300 px-3 py-2 text-right font-semibold">Book Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-green-300 px-3 py-2">Start</td>
                    <td className="border border-green-300 px-3 py-2 text-right">—</td>
                    <td className="border border-green-300 px-3 py-2 text-right">—</td>
                    <td className="border border-green-300 px-3 py-2 text-right font-semibold">${asset.cost.toLocaleString()}</td>
                    <td className="border border-green-300 px-3 py-2 text-right">—</td>
                    <td className="border border-green-300 px-3 py-2 text-right">—</td>
                    <td className="border border-green-300 px-3 py-2 text-right font-semibold">${asset.cost.toLocaleString()}</td>
                  </tr>
                  {schedule.map((row) => (
                    <tr key={row.year} className={row.year % 2 === 0 ? "bg-green-50" : "bg-white"}>
                      <td className="border border-green-300 px-3 py-2">{row.year}</td>
                      <td className="border border-green-300 px-3 py-2 text-right">${row.slExpense.toLocaleString()}</td>
                      <td className="border border-green-300 px-3 py-2 text-right">${row.slAccumDep.toLocaleString()}</td>
                      <td className="border border-green-300 px-3 py-2 text-right font-semibold">${row.slBookValue.toLocaleString()}</td>
                      <td className="border border-green-300 px-3 py-2 text-right">${row.ddbExpense.toLocaleString()}</td>
                      <td className="border border-green-300 px-3 py-2 text-right">${row.ddbAccumDep.toLocaleString()}</td>
                      <td className="border border-green-300 px-3 py-2 text-right font-semibold">${row.ddbBookValue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-white p-3 rounded border border-green-200 text-sm text-slate-700 space-y-1">
              <p><strong>Verify:</strong> Both methods end at salvage value = ${asset.salvageValue.toLocaleString()}. ✓</p>
              <p><strong>Total depreciation:</strong> ${asset.cost.toLocaleString()} − ${asset.salvageValue.toLocaleString()} = ${(asset.cost - asset.salvageValue).toLocaleString()} for both methods. ✓</p>
              <p className="font-medium text-green-800">The difference is timing: DDB expenses more early, SL expenses evenly.</p>
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
              Before you build the comparison in Excel, think about what makes a method comparison untrustworthy.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-700">
            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Common Setup Errors</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Missing salvage floor in DDB:</strong> Without MIN(BookValue × Rate, BookValue − Salvage), the final year can push book value below salvage.</li>
                <li><strong>DDB uses depreciable base instead of book value:</strong> DDB applies the rate to book value at the start of each year, not to (Cost − Salvage).</li>
                <li><strong>Check column not linked:</strong> If your verification formula references the wrong cells, it will always say &quot;OK&quot; even when wrong.</li>
                <li><strong>Statement impact not calculated:</strong> The comparison is incomplete without showing how each method changes net income and asset values.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Statement Impact Summary</h4>
              <p>
                When you build the comparison in Excel, add a summary section that shows:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Year 1 net income difference:</strong> DDB expense is higher → net income is lower in Year 1</li>
                <li><strong>Year 1 book value difference:</strong> DDB book value is lower → assets look smaller on the balance sheet</li>
                <li><strong>Total depreciation:</strong> Same for both methods — only timing differs</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Handoff to Phase 4</h4>
              <p>
                You now understand the comparison logic: both methods depreciate the same total amount, but DDB front-loads expense.
                Your Excel comparison sheet will show this side by side with a check column and statement impact summary.
              </p>
              <p className="mt-2 font-medium text-purple-800">
                In Phase 4, you will extend your Lesson 05 asset register workbook with this comparison sheet.
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
