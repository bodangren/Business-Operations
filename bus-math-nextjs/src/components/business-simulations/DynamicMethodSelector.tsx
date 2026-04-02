"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Lightbulb, Table2 } from "lucide-react"

interface DriverRow {
  scenario: "Base" | "Stretch" | "Downside"
  unitsSold: number
  defaultMethod: "FIFO" | "LIFO" | "Weighted Average"
}

interface MethodSummaryRow {
  key: string
  scenario: DriverRow["scenario"]
  method: DriverRow["defaultMethod"]
  cogs: number
  endingInventory: number
}

interface FormulaRow {
  step: string
  formula: string
  plainEnglish: string
}

interface RehearsalStage {
  id: "controls" | "lookups" | "kpis" | "checks"
  title: string
  sheet: string
  output: string
  rows: FormulaRow[]
  references: Array<{ token: string; meaning: string }>
  commonTrap: string
  auditCheck: string
  prompt: string
  modelResponse: string
}

const drivers: DriverRow[] = [
  { scenario: "Base", unitsSold: 35, defaultMethod: "FIFO" },
  { scenario: "Stretch", unitsSold: 39, defaultMethod: "LIFO" },
  { scenario: "Downside", unitsSold: 32, defaultMethod: "Weighted Average" }
]

const methodSummary: MethodSummaryRow[] = [
  { key: "Base|FIFO", scenario: "Base", method: "FIFO", cogs: 690, endingInventory: 460 },
  { key: "Base|LIFO", scenario: "Base", method: "LIFO", cogs: 770, endingInventory: 380 },
  { key: "Base|Weighted Average", scenario: "Base", method: "Weighted Average", cogs: 731.82, endingInventory: 418.18 },
  { key: "Stretch|FIFO", scenario: "Stretch", method: "FIFO", cogs: 778, endingInventory: 372 },
  { key: "Stretch|LIFO", scenario: "Stretch", method: "LIFO", cogs: 850, endingInventory: 300 },
  { key: "Stretch|Weighted Average", scenario: "Stretch", method: "Weighted Average", cogs: 815.45, endingInventory: 334.55 },
  { key: "Downside|FIFO", scenario: "Downside", method: "FIFO", cogs: 624, endingInventory: 526 },
  { key: "Downside|LIFO", scenario: "Downside", method: "LIFO", cogs: 710, endingInventory: 440 },
  { key: "Downside|Weighted Average", scenario: "Downside", method: "Weighted Average", cogs: 669.09, endingInventory: 480.91 }
]

const sellingPrice = 40
const beginningInventory = 180
const gafs = 1150

const stages: RehearsalStage[] = [
  {
    id: "controls",
    title: "Controls Rehearsal",
    sheet: "Inputs",
    output: "SelectedScenario, SelectedMethod, and SelectedKey",
    rows: [
      {
        step: "Scenario selector",
        formula: "Data validation list: Base, Stretch, Downside",
        plainEnglish: "User chooses which market situation to evaluate."
      },
      {
        step: "Method selector",
        formula: "Data validation list: FIFO, LIFO, Weighted Average",
        plainEnglish: "User chooses which costing method to evaluate."
      },
      {
        step: "Composite key",
        formula: "=SelectedScenario&\"|\"&SelectedMethod",
        plainEnglish: "Builds one exact key so downstream lookups return one row."
      }
    ],
    references: [
      { token: "SelectedScenario", meaning: "Current scenario dropdown value." },
      { token: "SelectedMethod", meaning: "Current method dropdown value." },
      { token: "SelectedKey", meaning: "Exact row key for MethodSummary lookups." }
    ],
    commonTrap: "Scenario or method labels must match table text exactly.",
    auditCheck: "Changing either selector updates SelectedKey instantly.",
    prompt: "Why is a composite key safer than long nested IF logic here?",
    modelResponse:
      "A key-based lookup scales cleanly as rows grow and is easier to audit than nested IF branches."
  },
  {
    id: "lookups",
    title: "Lookup Chain Rehearsal",
    sheet: "Outputs",
    output: "SelectedUnitsSold, SelectedCOGS, and SelectedEndingInventory",
    rows: [
      {
        step: "Units sold by scenario",
        formula: "=XLOOKUP(SelectedScenario,Drivers[Scenario],Drivers[UnitsSold])",
        plainEnglish: "Pulls demand assumption for the selected scenario."
      },
      {
        step: "COGS by key",
        formula: "=XLOOKUP(SelectedKey,MethodSummary[Key],MethodSummary[COGS])",
        plainEnglish: "Returns COGS for this exact scenario+method pair."
      },
      {
        step: "Ending inventory by key",
        formula: "=XLOOKUP(SelectedKey,MethodSummary[Key],MethodSummary[EndingInventory])",
        plainEnglish: "Returns ending inventory from the same output row."
      }
    ],
    references: [
      { token: "Drivers[UnitsSold]", meaning: "Scenario-specific sales quantity column." },
      { token: "MethodSummary[Key]", meaning: "Scenario|Method row keys." },
      { token: "MethodSummary[EndingInventory]", meaning: "Ending inventory output column." }
    ],
    commonTrap: "If MethodSummary key values are inconsistent, both COGS and EI fail together.",
    auditCheck: "Selected scenario/method pair always returns exactly one row.",
    prompt: "What does MethodSummary[COGS] represent versus [@COGS]?",
    modelResponse:
      "MethodSummary[COGS] is the full column; [@COGS] means only this row's COGS value."
  },
  {
    id: "kpis",
    title: "KPI Rehearsal",
    sheet: "KPI",
    output: "Revenue, Gross Margin, Turnover, and Days on Hand",
    rows: [
      {
        step: "Revenue",
        formula: "=SelectedUnitsSold*UnitSellingPrice",
        plainEnglish: "Converts selected sales volume into dollars."
      },
      {
        step: "Average inventory",
        formula: "=(BeginningInventory+SelectedEndingInventory)/2",
        plainEnglish: "Averages starting and ending inventory balances."
      },
      {
        step: "Turnover and days",
        formula: "Turnover = SelectedCOGS/AvgInventory; Days = 365/Turnover",
        plainEnglish: "Measures inventory velocity and holding time."
      }
    ],
    references: [
      { token: "SelectedCOGS", meaning: "Lookup output feeding all KPI math." },
      { token: "SelectedEndingInventory", meaning: "Used in average inventory denominator." },
      { token: "BeginningInventory", meaning: "Starting inventory value for the period." }
    ],
    commonTrap: "Using ending inventory only can overstate turnover.",
    auditCheck: "Turnover and days-on-hand should move in opposite directions.",
    prompt: "Why does turnover matter in addition to gross margin?",
    modelResponse:
      "Turnover shows capital efficiency in inventory, while margin shows profitability per sale."
  },
  {
    id: "checks",
    title: "Checks Rehearsal",
    sheet: "Checks",
    output: "Balance and quality flags",
    rows: [
      {
        step: "GAFS conservation check",
        formula: "=IF(ABS((SelectedCOGS+SelectedEndingInventory)-GAFS)<0.01,\"Balanced\",\"Check\")",
        plainEnglish: "Confirms cost is conserved for the selected output row."
      },
      {
        step: "Lookup fallback check",
        formula: "=IFNA(XLOOKUP(SelectedKey,MethodSummary[Key],MethodSummary[COGS]),\"Missing Key\")",
        plainEnglish: "Prevents raw errors and shows missing-key issue explicitly."
      },
      {
        step: "Units sold presence",
        formula: "=IF(SelectedUnitsSold>0,\"OK\",\"Check Drivers\")",
        plainEnglish: "Flags scenario configuration issues early."
      }
    ],
    references: [
      { token: "GAFS", meaning: "Total cost available for sale from source inventory layers." },
      { token: "IFNA(...)", meaning: "Friendly not-found fallback for lookups." },
      { token: "SelectedUnitsSold", meaning: "Scenario assumption required by KPI chain." }
    ],
    commonTrap: "Checks hidden below visuals are often skipped during demo.",
    auditCheck: "Checks should be visible near selectors and KPI header.",
    prompt: "Why should checks be visible before discussing recommendations?",
    modelResponse:
      "Because recommendation quality depends on trusted outputs; checks prove outputs are reliable first."
  }
]

const stageBadgeStyles: Record<RehearsalStage["id"], string> = {
  controls: "bg-blue-100 text-blue-800",
  lookups: "bg-emerald-100 text-emerald-800",
  kpis: "bg-purple-100 text-purple-800",
  checks: "bg-amber-100 text-amber-900"
}

const formatCurrency = (value: number) => `$${value.toFixed(2)}`

export default function DynamicMethodSelector() {
  const [selectedScenario, setSelectedScenario] = useState<DriverRow["scenario"]>("Base")
  const [selectedMethod, setSelectedMethod] = useState<DriverRow["defaultMethod"]>("FIFO")
  const [stageIndex, setStageIndex] = useState(0)
  const [showModel, setShowModel] = useState(false)
  const [notesByStage, setNotesByStage] = useState<Record<string, string>>({})

  const selectedKey = `${selectedScenario}|${selectedMethod}`
  const stage = stages[stageIndex]
  const notes = notesByStage[stage.id] ?? ""

  const selectedDriver = useMemo(
    () => drivers.find((row) => row.scenario === selectedScenario) ?? drivers[0],
    [selectedScenario]
  )

  const selectedOutput = useMemo(
    () => methodSummary.find((row) => row.key === selectedKey) ?? methodSummary[0],
    [selectedKey]
  )

  const kpi = useMemo(() => {
    const revenue = selectedDriver.unitsSold * sellingPrice
    const grossMarginPct = revenue > 0 ? ((revenue - selectedOutput.cogs) / revenue) * 100 : 0
    const avgInventory = (beginningInventory + selectedOutput.endingInventory) / 2
    const turnover = avgInventory > 0 ? selectedOutput.cogs / avgInventory : 0
    const daysOnHand = turnover > 0 ? 365 / turnover : 0
    const balanceOk = Math.abs(selectedOutput.cogs + selectedOutput.endingInventory - gafs) < 0.01
    return {
      revenue,
      grossMarginPct,
      avgInventory,
      turnover,
      daysOnHand,
      balanceOk
    }
  }, [selectedDriver.unitsSold, selectedOutput.cogs, selectedOutput.endingInventory])

  const goToStage = (index: number) => {
    setStageIndex(index)
    setShowModel(false)
  }

  return (
    <div className="space-y-4">
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900">Live Control Rehearsal</CardTitle>
          <CardDescription className="text-blue-900/80">
            Use these controls first. Everything below should update from these two inputs only.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-blue-900 mb-1">Scenario</p>
              <div className="flex gap-2 flex-wrap">
                {drivers.map((row) => (
                  <Button
                    key={row.scenario}
                    type="button"
                    variant={selectedScenario === row.scenario ? "default" : "outline"}
                    className={selectedScenario === row.scenario ? "bg-blue-700 hover:bg-blue-800" : ""}
                    onClick={() => setSelectedScenario(row.scenario)}
                  >
                    {row.scenario}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-blue-900 mb-1">Method</p>
              <div className="flex gap-2 flex-wrap">
                {(["FIFO", "LIFO", "Weighted Average"] as const).map((method) => (
                  <Button
                    key={method}
                    type="button"
                    variant={selectedMethod === method ? "default" : "outline"}
                    className={selectedMethod === method ? "bg-blue-700 hover:bg-blue-800" : ""}
                    onClick={() => setSelectedMethod(method)}
                  >
                    {method}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-sm text-blue-900 bg-white border border-blue-200 rounded p-3">
            <strong>SelectedKey:</strong> <code>{selectedKey}</code> | <strong>Units Sold:</strong>{" "}
            {selectedDriver.unitsSold}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded border bg-white p-3">
              <p className="text-xs uppercase text-slate-500">COGS</p>
              <p className="text-lg font-semibold text-red-700">{formatCurrency(selectedOutput.cogs)}</p>
            </div>
            <div className="rounded border bg-white p-3">
              <p className="text-xs uppercase text-slate-500">Ending Inventory</p>
              <p className="text-lg font-semibold text-green-700">{formatCurrency(selectedOutput.endingInventory)}</p>
            </div>
            <div className="rounded border bg-white p-3">
              <p className="text-xs uppercase text-slate-500">Turnover</p>
              <p className="text-lg font-semibold text-purple-700">{kpi.turnover.toFixed(2)}x</p>
            </div>
            <div className="rounded border bg-white p-3">
              <p className="text-xs uppercase text-slate-500">Days on Hand</p>
              <p className="text-lg font-semibold text-orange-700">{kpi.daysOnHand.toFixed(1)}</p>
            </div>
          </div>

          <div className="text-sm text-blue-900 bg-white border border-blue-200 rounded p-3">
            Revenue: <strong>{formatCurrency(kpi.revenue)}</strong> | Gross Margin:{" "}
            <strong>{kpi.grossMarginPct.toFixed(1)}%</strong> | GAFS Check:{" "}
            <strong>{kpi.balanceOk ? "Balanced" : "Check"}</strong>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200 bg-white">
        <CardHeader>
          <CardTitle className="text-indigo-900">Guided Rehearsal Navigator</CardTitle>
          <CardDescription className="text-indigo-900/80">
            Rehearse the workbook in build order: Inputs → Outputs → KPI → Checks.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((item, index) => (
            <Button
              key={item.id}
              type="button"
              variant={index === stageIndex ? "default" : "outline"}
              className={index === stageIndex ? "bg-indigo-600 hover:bg-indigo-700" : ""}
              onClick={() => goToStage(index)}
            >
              {index + 1}. {item.sheet}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-purple-50">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <CardTitle className="text-purple-900">{stage.title}</CardTitle>
            <Badge className={stageBadgeStyles[stage.id]}>Sheet: {stage.sheet}</Badge>
          </div>
          <CardDescription className="text-purple-800">
            Target output: <strong>{stage.output}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto rounded border border-purple-200 bg-white">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-100 text-purple-950">
                  <th className="p-2 border border-purple-200 text-left">Build Step</th>
                  <th className="p-2 border border-purple-200 text-left">Formula / Pattern</th>
                  <th className="p-2 border border-purple-200 text-left">What It Means</th>
                </tr>
              </thead>
              <tbody>
                {stage.rows.map((row) => (
                  <tr key={`${stage.id}-${row.step}`} className="text-slate-800">
                    <td className="p-2 border border-purple-100 font-medium">{row.step}</td>
                    <td className="p-2 border border-purple-100">
                      <code className="text-xs sm:text-sm break-all">{row.formula}</code>
                    </td>
                    <td className="p-2 border border-purple-100">{row.plainEnglish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded border border-cyan-200 bg-cyan-50 p-3">
            <p className="font-semibold text-cyan-900 flex items-center gap-2 mb-2">
              <Table2 className="h-4 w-4" />
              Reference Decoder
            </p>
            <ul className="text-sm text-cyan-900 space-y-1">
              {stage.references.map((reference) => (
                <li key={`${stage.id}-${reference.token}`}>
                  <code>{reference.token}</code>: {reference.meaning}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 space-y-1">
            <p>
              <strong>Common trap:</strong> {stage.commonTrap}
            </p>
            <p>
              <strong>Audit check:</strong> {stage.auditCheck}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-900 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Talk-Through Practice (Not Graded)
          </CardTitle>
          <CardDescription className="text-green-900/80">{stage.prompt}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <textarea
            value={notes}
            onChange={(event) => {
              setNotesByStage((prev) => ({
                ...prev,
                [stage.id]: event.target.value
              }))
            }}
            placeholder="Write your explanation in plain language."
            className="w-full min-h-24 rounded border border-green-300 bg-white p-3 text-sm text-slate-900"
          />
          <div className="flex gap-2 flex-wrap">
            <Button type="button" variant="outline" onClick={() => setShowModel((prev) => !prev)}>
              {showModel ? "Hide Model Response" : "Reveal Model Response"}
            </Button>
            {stageIndex < stages.length - 1 ? (
              <Button
                type="button"
                className="bg-green-700 hover:bg-green-800"
                onClick={() => goToStage(stageIndex + 1)}
              >
                Next Sheet Rehearsal <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Badge className="bg-green-100 text-green-800 flex items-center gap-1 py-1 px-2">
                <CheckCircle2 className="h-4 w-4" /> Ready for Phase 4 workbook sprint
              </Badge>
            )}
          </div>
          {showModel && (
            <div className="rounded border border-green-300 bg-white p-3 text-sm text-green-900">
              <strong>Model response:</strong> {stage.modelResponse}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
