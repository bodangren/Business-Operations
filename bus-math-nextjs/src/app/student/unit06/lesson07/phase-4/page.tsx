'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileSpreadsheet, CheckSquare, Presentation } from "lucide-react"
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
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🧭 Phase 4: Independent Practice</Badge>
            <div className="max-w-5xl mx-auto space-y-8 text-left">
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><Download className="w-5 h-5" /> Continue the Shared Rehearsal Workbook</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-orange-900">
                  <p>
                    Open the shared workbook and save your class copy with a clear name. This is your simplified guided practice for the project.
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
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Your Work Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-green-900 text-sm space-y-1">
                    <li>Finish any incomplete sheet in the rehearsal workbook.</li>
                    <li>Check that the recommendation on the dashboard matches the supporting sheets.</li>
                    <li>Write one recommendation statement and one risk statement in plain language.</li>
                    <li>Mark the three workbook features your group must recreate in Lessons 8-10.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Presentation className="w-5 h-5" /> Mini Handoff Prompt</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900 text-sm">
                  Before class ends, be ready to answer:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Which sheet starts the logic chain?</li>
                    <li>Which sheet proves the recommendation is realistic?</li>
                    <li>What must appear on the dashboard for the project to feel complete?</li>
                  </ul>
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
