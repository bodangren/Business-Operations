import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Download } from "lucide-react"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Unit07Lesson05Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🚀 Phase 4: Independent Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Automation Mastery Challenges</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Download the advanced dataset with edge cases. Build a clean method switch and controls that keep the model stable as
              rows and dates change. Produce investor‑ready outputs with clear notes.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Download className="h-5 w-5" /> Practice Data
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-2">
              <p>
                <a className="underline text-orange-700" href="/resources/unit07-inventory-valuation-advanced-practice.csv" download>
                  Download unit07-inventory-valuation-advanced-practice.csv
                </a>
              </p>
              <p className="text-sm text-slate-600">
                Includes: same‑date purchases with different lots, returns (negative qty), missing SKU rows,
                zero/negative UnitCost traps, stale dates, and out‑of‑order transactions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Target className="h-5 w-5" /> Challenges (build in order)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Implement a <strong>Method</strong> selector and compute COGS/Ending Inventory for all three methods.</li>
                <li>Add validation rules and error flags for missing SKU, negative/zero UnitCost, and stale dates.</li>
                <li>Stress test: insert 50 new sales rows and re‑sort by date. Results must stay correct.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Self‑Assessment: Investor‑Ready Checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900">
              <ul className="list-disc list-inside space-y-1">
                <li>Tables + structured references only; no fixed ranges</li>
                <li>Method notes explain business impact (profit, tax, cash flow)</li>
                <li>Validation flags catch issues before totals</li>
                <li>Outputs show COGS and Ending Inventory clearly with dates and units</li>
                <li>Formulas documented in plain language near the results</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

