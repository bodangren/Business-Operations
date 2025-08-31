import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ListChecks, Shield } from "lucide-react"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🧩 Phase 3: Guided Practice — Build the Integrated Dashboard
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">From Drivers → Outputs → Visuals</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Implement scenario controls using named ranges or a driver table. Link outputs with exact‑match lookups and structured references. Connect charts and add validation so the dashboard is reliable.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <ListChecks className="h-5 w-5" />
                Build Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <ol className="list-decimal list-inside">
                <li>Create <strong>Drivers</strong> table with columns: <em>Scenario</em>, <em>COGS_Pct</em>, <em>OpEx_Pct</em>, <em>AR_Days</em>, <em>AP_Days</em>, <em>AsOfDate</em>.</li>
                <li>Define a named cell <code>SelectedScenario</code>. Use <code>=XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[COGS_Pct], "Missing")</code> to switch inputs.</li>
                <li>Calculate outputs (margin, runway, cash coverage) with <strong>structured references</strong>.</li>
                <li>Point charts and KPI tiles to those outputs. Avoid fixed ranges.</li>
                <li>Add validation: missing scenario, negative/&gt;100% rates, stale dates.</li>
              </ol>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                <strong>Why this matters:</strong> A stable dashboard reduces closing time and builds investor confidence. Your work is judged on clarity and reliability.
              </div>
            </CardContent>
          </Card>

          <FinancialDashboard title="Month‑End Integration Dashboard" />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Validation Exercise
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm">
              Use the builder below to practice business rule checks before wiring them into your spreadsheet model.
            </CardContent>
          </Card>

          <ErrorCheckingSystem />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}

