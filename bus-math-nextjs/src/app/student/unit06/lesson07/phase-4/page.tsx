'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileSpreadsheet, CheckSquare, Presentation, AlertTriangle, Lightbulb } from "lucide-react"
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper"
import type { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"

const currentPhase = lesson07Phases[3]
const workbookPath = "/resources/unit06-lesson07-student.xlsx"

function h(value: string) { return { value, readOnly: true } }
function r(value: string | number) { return { value, readOnly: true } }
const E = { value: '', readOnly: true }

const dashboardPreview: SpreadsheetData = [
  [h('PedalFast Dashboard'), E, E, E, E],
  [h('Select Scenario'), r('Base Case'), E, h('Monthly Profit'), r('$908')],
  [h('Recommended Price'), r('$56'), E, h('Volume'), r('62')],
  [h('Break-Even Units'), r('36'), E, h('Risk Note'), r('Demand below 60 bikes lowers the cushion')],
  [E, E, E, E, E],
  [h('Scenario Summary'), h('Price'), h('Volume'), h('Profit'), h('Break-Even')],
  [h('Base Case'), r('$56'), r('62'), r('$908'), r('36')],
  [h('Price Hike'), r('$64'), r('50'), r('$900'), r('29')],
  [h('High Volume'), r('$56'), r('70'), r('$1,180'), r('36')],
  [h('Downside'), r('$48'), r('50'), r('$100'), r('47')],
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🧭 Phase 4: Polish and Transfer Practice</Badge>
            <div className="max-w-5xl mx-auto space-y-8 text-left">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><Download className="w-5 h-5" /> Continue the Shared Rehearsal Workbook</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-orange-900">
                  <p>
                    Open the shared workbook and save your class copy with a clear name. This is your guided practice
                    for the project — not open-ended production. You are rehearsing the structure, not inventing a new one.
                  </p>
                  <a href={workbookPath} download className="underline font-medium text-sm">Download again: unit06-lesson07-student.xlsx</a>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><FileSpreadsheet className="w-5 h-5" /> Build Expectations You Can Copy Into the Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto bg-white p-4 rounded border border-blue-200">
                    <SpreadsheetWrapper initialData={dashboardPreview} columnLabels={["A", "B", "C", "D", "E"]} readOnly={true} />
                  </div>
                  <p className="text-blue-900 text-sm mt-3">
                    This dashboard shows the standard. Your project dashboard should look just as clear: one recommendation,
                    one risk note, and scenario summary numbers that tie back to supporting sheets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Your Required Work Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-900 text-sm mb-3 font-medium">Complete these four items before class ends. Each one maps directly to a project requirement:</p>
                  <ol className="list-decimal list-inside text-green-900 text-sm space-y-2">
                    <li>
                      <span className="font-medium">Finish any incomplete sheet</span> in the rehearsal workbook.
                      If a sheet is partially filled, complete it so the evidence chain is unbroken.
                    </li>
                    <li>
                      <span className="font-medium">Check alignment.</span> Confirm that the recommendation on the Dashboard matches
                      the best option in PriceOptions and that the risk note is supported by Feasibility or PriceSensitivity.
                    </li>
                    <li>
                      <span className="font-medium">Write two statements in plain language:</span>
                      <div className="ml-4 mt-2 space-y-2">
                        <div className="bg-white border border-green-200 rounded p-3">
                          <p className="font-semibold text-green-800 flex items-center gap-1 text-xs">
                            <Lightbulb className="w-3 h-3" /> Recommendation Statement
                          </p>
                          <p className="text-green-900 text-xs italic mt-1">
                            &quot;Based on our CVP analysis, we recommend [price/option] because it produces [profit] at [volume],
                            which is [above/below] break-even by [number] units. This is supported by the [sheet name] sheet.&quot;
                          </p>
                        </div>
                        <div className="bg-white border border-red-200 rounded p-3">
                          <p className="font-semibold text-red-800 flex items-center gap-1 text-xs">
                            <AlertTriangle className="w-3 h-3" /> Risk Statement
                          </p>
                          <p className="text-green-900 text-xs italic mt-1">
                            &quot;Our recommendation is at risk if [specific condition, e.g., volume drops below X].
                            The [sheet name] sheet shows that under this scenario, profit would fall to [number].&quot;
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span className="font-medium">Name the three features to carry into Lessons 8-10.</span>
                      Which structures, checks, or communication moves from today&apos;s workbook must your team recreate
                      when you get your own business scenario?
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Presentation className="w-5 h-5" /> Transfer Check — What Stays, What Changes</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900 text-sm">
                  <p className="font-medium mb-2">Before class ends, be ready to answer:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 border border-purple-200 rounded p-3">
                      <p className="font-semibold text-purple-800 mb-1">What stays the same in the project?</p>
                      <ul className="list-disc list-inside text-xs space-y-0.5">
                        <li>The seven-sheet structure</li>
                        <li>The evidence chain logic</li>
                        <li>The Definition of Done checklist</li>
                        <li>The recommendation + risk statement format</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded p-3">
                      <p className="font-semibold text-amber-800 mb-1">What changes in the project?</p>
                      <ul className="list-disc list-inside text-xs space-y-0.5">
                        <li>The business scenario and data</li>
                        <li>The specific numbers and recommendations</li>
                        <li>Less teacher scaffolding — your team owns quality</li>
                        <li>Presentation and defense to a panel</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
