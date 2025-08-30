import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet"

const currentPhase = lesson05Phases[2]

export default function Phase3Page() {
  const tableSpecData: SpreadsheetData = [
    [
      { value: "Field", readOnly: true },
      { value: "Type", readOnly: true },
      { value: "Example", readOnly: true },
      { value: "Validation / Formula", readOnly: true },
    ],
    [
      { value: "Date", readOnly: true },
      { value: "Date", readOnly: true },
      { value: "2024-05-19", readOnly: false },
      { value: "=TODAY()-[@Date]>30  → Stale?", readOnly: false },
    ],
    [
      { value: "Week", readOnly: true },
      { value: "Number", readOnly: true },
      { value: 20, readOnly: false },
      { value: ">=1 integer", readOnly: false },
    ],
    [
      { value: "Units", readOnly: true },
      { value: "Number", readOnly: true },
      { value: 265, readOnly: false },
      { value: "=[@Units]<0 → Flag negative", readOnly: false },
    ],
    [
      { value: "Price", readOnly: true },
      { value: "Currency", readOnly: true },
      { value: 4.7, readOnly: false },
      { value: "=[@Price]<=0 → Invalid", readOnly: false },
    ],
    [
      { value: "PromoFlag", readOnly: true },
      { value: "0/1", readOnly: true },
      { value: 1, readOnly: false },
      { value: "Must be 0 or 1", readOnly: false },
    ],
    [
      { value: "HolidayFlag", readOnly: true },
      { value: "0/1", readOnly: true },
      { value: 0, readOnly: false },
      { value: "Must be 0 or 1", readOnly: false },
    ],
    [
      { value: "MenuID", readOnly: true },
      { value: "Text", readOnly: true },
      { value: "DRK001", readOnly: false },
      { value: "=XLOOKUP([@MenuID],Menu[MenuID],Menu[Type],\"Unknown\")", readOnly: false },
    ],
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔧 Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Building Sarah’s Forecast System</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Implement method switching, structured references, and a visible Audit Panel. Then practice validation logic
              to safeguard forecasts before investor meetings.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Step‑by‑Step Build
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-green-900">
              <ol className="list-decimal list-inside space-y-2">
                <li>Convert history to a Table named <strong>Sales</strong> with columns: <em>Week, Units, PromoFlag, Type</em>.</li>
                <li>Add <em>Scenario</em> input cell with choices: <strong>Baseline</strong>, <strong>PromoAdjusted</strong>.</li>
                <li>Create <em>Forecast</em> Table with columns: <em>Week, Scenario, Units_Forecast</em>.</li>
                <li>In <em>Units_Forecast</em>, use structured reference formula:
                  <code>{` =SWITCH([@Scenario],
  "Baseline", FORECAST.LINEAR([@Week], Sales[Units], Sales[Week]),
  "PromoAdjusted", FORECAST.LINEAR([@Week], FILTER(Sales[Units], Sales[PromoFlag]=0), FILTER(Sales[Week], Sales[PromoFlag]=0)),
  NA())`}</code>
                </li>
                <li>Build an <strong>Audit Panel</strong> with counts: missing MenuID, outliers, stale dates, negatives. Use <code>COUNTIF/COUNTIFS</code> and helper flags.</li>
                <li>Wrap lookups with <code>IFERROR(…, "Check Inputs")</code> and set default <code>XLOOKUP(..., "Unknown")</code>.</li>
              </ol>
              <div className="bg-white p-4 rounded border border-green-200">
                <p className="font-semibold mb-1">Professional Tip</p>
                <p>Place inputs and assumptions at the top with labels. Keep formulas readable and comment key cells. Investors
                   should understand what changes drive results in under 60 seconds.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validation Logic Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Try It: Table Spec & Flags (Interactive)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                This mini‑sheet mirrors your Sales table and common validations. Edit cells to see how the spec holds up.
              </p>
              <SpreadsheetWrapper initialData={tableSpecData} className="bg-white p-2 rounded border" />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
