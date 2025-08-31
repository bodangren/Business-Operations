import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson06Data, unit04Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build Sarah’s Integration Dashboard</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Implement scenario controls with a driver table, link outputs to visuals, and install validation
              that catches missing names, stale dates, and out‑of‑range rates.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Professional Reliability Checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 space-y-2">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>No hard‑coded values in outputs; all driven by inputs.</li>
                <li>Scenario switches by exact name; IFNA/IFERROR protects demos.</li>
                <li>Charts bind to outputs that use Table[Column] references.</li>
                <li>Audit panel counts: missing keys, stale AsOfDate, rate bounds.</li>
                <li>Executive summary states the decision and the why.</li>
              </ul>
            </CardContent>
          </Card>

          <FinancialDashboard title="Café Operations Dashboard" className="max-w-4xl mx-auto" />

          <Card>
            <CardHeader>
              <CardTitle>Validation Builder (Practice)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                Use the validation tool to practice writing rules like “Scenario name must not be blank,” “Rates between
                0% and 100%,” and “AsOfDate within 30 days.” Transfer these patterns into your spreadsheet model.
              </p>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

