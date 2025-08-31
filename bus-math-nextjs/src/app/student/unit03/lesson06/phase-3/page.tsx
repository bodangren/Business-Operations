import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Shield, LineChart } from "lucide-react"
import FinancialDashboard from "@/components/charts/FinancialDashboard"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson06Data, unit03Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Build Sarah’s Scenario‑Driven Dashboard</h2>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Implement the scenario control, link drivers to outputs, connect visuals, and add validation.
                Use safe, exact‑match lookups and visible flags so investors trust what they see.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2"><Wrench className="h-5 w-5"/>Build Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside text-purple-900 space-y-1 text-sm">
                <li>Create a Driver table with names: Base, Stretch, Downside</li>
                <li>Name key ranges (e.g., Driver_Scenario, Driver_RevenueGrowth)</li>
                <li>Switch outputs using XLOOKUP/INDEX‑MATCH with IFNA guards</li>
                <li>Connect charts to Table columns for auto‑expanding visuals</li>
                <li>Surface validation: missing scenario, stale AsOfDate, out‑of‑range rates</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800"><LineChart className="h-5 w-5"/>Dashboard Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <FinancialDashboard title="Three‑Statement Dashboard" />
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2"><Shield className="h-5 w-5"/>Validation Workshop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-900 text-sm mb-3">Use error checks to catch common integration issues before the meeting:</p>
              <ul className="list-disc list-inside text-green-900 space-y-1 text-sm">
                <li>Missing scenario name → show friendly message, not #N/A</li>
                <li>Negative or &gt;100% growth rates → flag out‑of‑range</li>
                <li>Stale AsOfDate (older than 30 days) → highlight update needed</li>
                <li>Charts pointing to static ranges → warn about non‑expanding links</li>
              </ul>
              <div className="mt-4">
                <ErrorCheckingSystem />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

