import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { Settings, Workflow, ShieldAlert } from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

export default function Unit01Lesson06Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice — Build the Integration
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Scenario Controls → Linked Outputs → Dashboard
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              You will wire a named driver table to formulas, connect outputs to chart data,
              and add validation for missing names, stale dates, and out‑of‑range rates.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Workflow className="h-5 w-5" />
                Step‑by‑Step Build
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-800 space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create a <strong>Drivers</strong> Table: Scenario, Price, UnitCost, Volume, AR_Days, AP_Days, AsOfDate.</li>
                <li>Add <strong>Settings</strong> Table with a <em>Scenario</em> cell to control the model.</li>
                <li>Pull drivers with <code>=IFNA(XLOOKUP(Settings[@Scenario], Drivers[Scenario], Drivers[Price]), "Missing Scenario")</code> (repeat for each field).</li>
                <li>Calculate outputs (revenue, margin, cashflow). Use structured references and avoid hard‑coded ranges.</li>
                <li>Bind charts to <code>Table[Column]</code> so visuals expand with data.</li>
                <li>Add validation checks: missing scenario, negative or &gt;100% rates, <code>AsOfDate</code> older than 7 days.</li>
                <li>Document each control with a one‑line note: purpose + expected behavior.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Reliability Safeguards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Exact‑match lookups only; never approximate for scenarios</li>
                <li>All lookups wrapped in IFNA/IFERROR with friendly messages</li>
                <li>Charts reference Table columns; no A1:A20 ranges</li>
                <li>Inputs constrained with Data Validation and visual flags</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" />
                Practice: Error Checking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
