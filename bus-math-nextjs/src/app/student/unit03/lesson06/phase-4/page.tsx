import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Download } from "lucide-react"
import FinancialDashboard from "@/components/charts/FinancialDashboard"
import { lesson06Data, unit03Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🎯 Phase 4: Independent Practice</Badge>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Integration Mastery Challenges</h2>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Download the integration dataset and build a scenario‑driven dashboard. Your visuals and KPIs must
                update live when you switch scenarios. Include an executive summary box that flips messages based on thresholds.
              </p>
              <div className="mt-3">
                <a className="inline-flex items-center gap-2 underline text-orange-700" href="/resources/unit03-three-statement-integration-practice.csv" download>
                  <Download className="h-4 w-4"/> unit03-three-statement-integration-practice.csv
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800"><Target className="h-5 w-5"/>Your Build Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>Scenario switch by name (Base, Stretch, Downside)</li>
                <li>Charts linked to Table columns (auto‑expanding)</li>
                <li>Exact‑match lookups with IFNA/IFERROR guards</li>
                <li>Exec summary tied to thresholds: runway, margin, break‑even, cash coverage</li>
                <li>Validation flags: stale date, missing driver, out‑of‑range rates</li>
              </ul>
            </CardContent>
          </Card>

          <FinancialDashboard title="Three‑Statement Dashboard (Student Build Preview)" />

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Self‑Assessment Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
                <li>Scenario toggle changes KPIs and charts instantly</li>
                <li>Charts still work after adding 10 new rows</li>
                <li>No #N/A errors; friendly messages appear for missing names</li>
                <li>Exec summary communicates a clear decision in one sentence</li>
                <li>Validation flags are visible without clicking into cells</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

