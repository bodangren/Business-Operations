'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckSquare, Link2, Users } from "lucide-react"
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper"
import type { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"

const currentPhase = lesson07Phases[2]

function h(value: string) { return { value, readOnly: true } }
function r(value: string | number) { return { value, readOnly: true } }
const E = { value: '', readOnly: true }

const setupPreview: SpreadsheetData = [
  [h('CostSetup'), E, E, h('Project Assumptions'), h('Value')],
  [h('Service van lease'), r(520), h('Fixed'), h('Fixed Costs Total'), r(1200)],
  [h('Business insurance'), r(160), h('Fixed'), h('Variable Cost per Unit'), r(22)],
  [h('Replacement parts kit'), r(10), h('Variable'), h('Monthly Capacity'), r(80)],
  [h('Travel fuel'), r(4), h('Variable'), h('Target Profit'), r(850)],
  [h('Payment processing'), r(2), h('Variable'), h('Base Price'), r(56)],
]

const dashboardPreview: SpreadsheetData = [
  [h('Dashboard'), E, E, E],
  [h('Recommended Option'), r('Commuter Care'), E, E],
  [h('Recommended Price'), r('$56'), h('Forecast Units'), r('62')],
  [h('Projected Profit'), r('$908'), h('Break-Even Units'), r('36')],
  [h('Risk Note'), r('Demand below 60 bikes reduces the cushion quickly.'), E, E],
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice</Badge>
            <div className="max-w-5xl mx-auto space-y-8 text-left">
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Link2 className="w-5 h-5" /> Trace the Recommendation Back to Evidence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-purple-900">
                  <p>
                    A strong project workbook is not just a dashboard. It is a chain of evidence. In guided practice,
                    trace the recommendation from the final dashboard all the way back to the cost totals and analysis sheets.
                  </p>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Check the fixed and variable totals on <strong>CostSetup</strong>.</li>
                    <li>Use those totals to interpret <strong>PriceOptions</strong> and <strong>Feasibility</strong>.</li>
                    <li>Use <strong>TargetProfit</strong>, <strong>PriceSensitivity</strong>, and <strong>ProfitMatrix</strong> to test the recommendation.</li>
                    <li>Confirm that the <strong>Dashboard</strong> says the same thing as the supporting sheets.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Preview 1 - Cost Setup and Assumptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto bg-white p-4 rounded border border-blue-200">
                    <SpreadsheetWrapper initialData={setupPreview} columnLabels={["A", "B", "C", "D", "E"]} readOnly={true} />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">Preview 2 - What the Final Dashboard Should Reveal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto bg-white p-4 rounded border border-green-200">
                    <SpreadsheetWrapper initialData={dashboardPreview} columnLabels={["A", "B", "C", "D"]} readOnly={true} />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Guided Audit Routine</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-orange-900 text-sm space-y-1">
                    <li>Ask: What does the dashboard recommend?</li>
                    <li>Find the exact numbers that support it.</li>
                    <li>Name one sheet that proves the upside and one sheet that reveals the risk.</li>
                    <li>Circle anything that looks confusing, hidden, or unsupported.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-900 flex items-center gap-2"><Users className="w-5 h-5" /> Turn and Talk</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-cyan-900 text-sm space-y-1">
                    <li>If the dashboard says “Commuter Care,” which earlier sheet should convince you that choice is reasonable?</li>
                    <li>What would make the dashboard recommendation feel untrustworthy?</li>
                    <li>What part of this structure should every group copy into the project?</li>
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
