"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Lightbulb, Table2 } from "lucide-react"

interface FormulaRow {
  step: string
  formula: string
  plainEnglish: string
}

interface RehearsalStage {
  id: string
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

const stages: RehearsalStage[] = [
  {
    id: "fifo",
    title: "FIFO Build Rehearsal",
    sheet: "FIFO",
    output: "FIFO COGS and FIFO Ending Inventory",
    rows: [
      {
        step: "Cumulative quantity",
        formula: "SUM($B$2:B2)",
        plainEnglish: "Adds lot quantities from the first FIFO row through this row."
      },
      {
        step: "Units consumed in this lot",
        formula: "MAX(0, MIN([@Qty], UnitsSold - ([@[FIFO CumQty]] - [@Qty])))",
        plainEnglish: "Consumes only the units still needed after older lots have already been used."
      },
      {
        step: "Lot cost used",
        formula: "=[@[FIFO Used]]*[@UnitCost]",
        plainEnglish: "Converts consumed units from this lot into cost."
      }
    ],
    references: [
      { token: "[@Qty]", meaning: "Qty value in this FIFO row only." },
      { token: "[@[FIFO CumQty]]", meaning: "Running total quantity in this FIFO row." },
      { token: "UnitsSold", meaning: "Named cell holding total sold units." }
    ],
    commonTrap: "Using cumulative quantity from a different sort order gives wrong lot consumption.",
    auditCheck: "FIFO COGS + FIFO EI must equal GAFS.",
    prompt: "Explain why the consume formula uses MAX and MIN together.",
    modelResponse:
      "MIN caps usage at the lot quantity and remaining units needed. MAX prevents negative usage once UnitsSold is already satisfied."
  },
  {
    id: "lifo",
    title: "LIFO Build Rehearsal",
    sheet: "LIFO",
    output: "LIFO COGS and LIFO Ending Inventory",
    rows: [
      {
        step: "Reverse lot order",
        formula: "Helper table sorted newest lot to oldest lot",
        plainEnglish: "This is the method switch that makes LIFO different from FIFO."
      },
      {
        step: "Units consumed in this lot",
        formula: "MAX(0, MIN([@Qty], UnitsSold - ([@[LIFO CumQty]] - [@Qty])))",
        plainEnglish: "Same consume pattern, but applied to reversed lot order."
      },
      {
        step: "Lot cost used",
        formula: "=[@[LIFO Used]]*[@UnitCost]",
        plainEnglish: "Calculates the cost assigned from each newest-first lot."
      }
    ],
    references: [
      { token: "LIFO helper table", meaning: "Copy of lots in newest-to-oldest order." },
      { token: "[@[LIFO CumQty]]", meaning: "Running total in reversed order." },
      { token: "UnitsSold", meaning: "Same named total used in FIFO." }
    ],
    commonTrap: "If lots are not reversed first, LIFO will accidentally behave like FIFO.",
    auditCheck: "LIFO COGS + LIFO EI must equal GAFS.",
    prompt: "What changes between FIFO and LIFO: formula math, sort order, or both?",
    modelResponse:
      "The consume math stays the same. The critical change is the lot order in the helper table."
  },
  {
    id: "specific-id",
    title: "Specific ID Build Rehearsal",
    sheet: "SpecificID",
    output: "Specific ID COGS and Specific ID Ending Inventory",
    rows: [
      {
        step: "Pull lot cost on each sale row",
        formula: "XLOOKUP([@LotID], Purchases[LotID], Purchases[UnitCost])",
        plainEnglish: "Finds the exact purchase cost for the lot tagged on this sale row."
      },
      {
        step: "Compute sale-line cost",
        formula: "=[@Qty]*[@[SpecificID UnitCost]]",
        plainEnglish: "Calculates cost for this specific sale line."
      },
      {
        step: "Compute remaining lot qty",
        formula: "=[@Qty]-SUMIFS(Sales[Qty], Sales[LotID], [@LotID])",
        plainEnglish: "Subtracts sold quantity tagged to the same lot."
      }
    ],
    references: [
      { token: "Sales[LotID]", meaning: "Lot assignment entered on sales rows." },
      { token: "Purchases[LotID]", meaning: "Lot key list used for lookup." },
      { token: "SUMIFS(..., [@LotID])", meaning: "Totals sold units for this lot only." }
    ],
    commonTrap: "Blank or mismatched LotID values break the traceability chain.",
    auditCheck: "Specific ID COGS + Specific ID EI must equal GAFS.",
    prompt: "Why is lot-level tagging required for Specific ID but not for FIFO/LIFO?",
    modelResponse:
      "Specific ID assigns exact historical cost per sold lot. FIFO/LIFO can infer cost from order; Specific ID cannot."
  },
  {
    id: "weighted-average",
    title: "Weighted Average Build Rehearsal",
    sheet: "WeightedAverage",
    output: "Weighted Average COGS and Ending Inventory",
    rows: [
      {
        step: "Compute weighted-average rate",
        formula: "=GAFS/TotalUnits",
        plainEnglish: "Creates one blended period cost per unit."
      },
      {
        step: "Compute COGS",
        formula: "=UnitsSold*WA_Rate",
        plainEnglish: "Assigns blended cost to sold units."
      },
      {
        step: "Compute ending inventory",
        formula: "=(TotalUnits-UnitsSold)*WA_Rate",
        plainEnglish: "Assigns blended cost to remaining units."
      }
    ],
    references: [
      { token: "GAFS", meaning: "Total purchase cost available for sale." },
      { token: "TotalUnits", meaning: "Total units available for sale." },
      { token: "UnitsSold", meaning: "Units sold this period." }
    ],
    commonTrap: "Mixing periodic WA with moving-average logic causes inconsistent results.",
    auditCheck: "WA COGS + WA EI must equal GAFS.",
    prompt: "What does the WA rate represent in one sentence?",
    modelResponse: "It is the blended cost per unit for all available units in the period."
  },
  {
    id: "outputs",
    title: "Selector Output Rehearsal",
    sheet: "Outputs",
    output: "Display COGS and EI for the selected method",
    rows: [
      {
        step: "Build summary rows",
        formula: "Method | COGS | Ending Inventory",
        plainEnglish: "Stores one audited result row for each method."
      },
      {
        step: "Display selected COGS",
        formula: "XLOOKUP(SelectedMethod, Summary[Method], Summary[COGS])",
        plainEnglish: "Returns COGS from the method row chosen in the selector cell."
      },
      {
        step: "Display selected EI",
        formula: "XLOOKUP(SelectedMethod, Summary[Method], Summary[EndingInventory])",
        plainEnglish: "Returns ending inventory for the selected method."
      }
    ],
    references: [
      { token: "SelectedMethod", meaning: "Input dropdown value (FIFO/LIFO/Specific ID/WA)." },
      { token: "Summary[Method]", meaning: "Method names column in output summary." },
      { token: "Summary[COGS]", meaning: "COGS values mapped to each method row." }
    ],
    commonTrap: "Hardcoding method outputs bypasses selector logic and hides formula errors.",
    auditCheck: "Changing selector should update display outputs without editing formulas.",
    prompt: "Why use lookup-driven outputs instead of nested IF formulas?",
    modelResponse:
      "A summary table keeps outputs auditable, easier to extend, and less error-prone when method rows change."
  }
]

const stageBadgeStyles: Record<string, string> = {
  fifo: "bg-blue-100 text-blue-800",
  lifo: "bg-red-100 text-red-800",
  "specific-id": "bg-emerald-100 text-emerald-800",
  "weighted-average": "bg-purple-100 text-purple-800",
  outputs: "bg-amber-100 text-amber-900"
}

export default function MethodComparisonSimulator() {
  const [stageIndex, setStageIndex] = useState(0)
  const [showModel, setShowModel] = useState(false)
  const [notesByStage, setNotesByStage] = useState<Record<string, string>>({})

  const stage = stages[stageIndex]
  const notes = notesByStage[stage.id] ?? ""

  const goToStage = (index: number) => {
    setStageIndex(index)
    setShowModel(false)
  }

  return (
    <div className="space-y-4">
      <Card className="border-indigo-200 bg-white">
        <CardHeader>
          <CardTitle className="text-indigo-900">Guided Rehearsal Navigator</CardTitle>
          <CardDescription className="text-indigo-900/80">
            Move sheet-by-sheet in the same order you will build in Excel.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
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
