import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import FinancialDashboard from "@/components/charts/FinancialDashboard"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

export default function Unit07Lesson06Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build Sarah’s Inventory Dashboard</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Implement scenario controls (Base/Stretch/Downside), link method outputs (FIFO/LIFO/WA) to charts and tiles,
              and add visible validation. Explain your formula choices and safeguards.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-white">
            <CardHeader>
              <CardTitle className="text-purple-900">Steps to Implement</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create a Drivers table with Scenario, SalesGrowthPct, Method, and AsOfDate.</li>
                <li>Use exact‑match lookup to pull Method and driver values from the selected Scenario.</li>
                <li>Compute COGS and Ending Inventory by method using structured references.</li>
                <li>Feed dashboard charts/tiles directly from the output Table.</li>
                <li>Add validation: missing scenario name, negative or zero UnitCost, stale AsOfDate, out‑of‑range rates.</li>
              </ol>
            </CardContent>
          </Card>

          <FinancialDashboard title="Inventory Decision Dashboard (Demo Data)" />

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Validation Builder</CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

