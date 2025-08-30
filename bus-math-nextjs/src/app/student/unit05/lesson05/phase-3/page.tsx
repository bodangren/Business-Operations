import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Building Sarah’s Payroll Automation System</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these steps to implement safe lookups, overtime logic, and strong validation. Your goal
              is a system that stays correct as TechStart grows.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step‑by‑Step Build (Spreadsheet)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-800">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create tables: <span className="font-mono">Emp</span> (EmployeeID, PayRate, State, Status) and <span className="font-mono">Payroll</span> (EmployeeID, Hours, Bonus, PayDate).</li>
                <li>Map rate: <span className="font-mono">=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate], "Missing ID")</span>.</li>
                <li>Overtime: compute base hours vs overtime using <span className="font-mono">LET</span> and <span className="font-mono">SUMPRODUCT</span>.</li>
                <li>Taxes: use bracket table or % for demo; always <span className="font-mono">ROUND( , 2)</span>.</li>
                <li>Validation: block negative hours; require EmployeeID; dropdowns for State and Pay Frequency.</li>
                <li>Audit flags: highlight missing IDs, stale dates (&gt;30 days old), and gross ≠ hours×rate.</li>
                <li>Documentation: add a notes panel explaining each formula choice and its safeguard.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Try the Validation Sandbox</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-blue-900">
              <p>
                Use the tool below to explore common rules (missing EmployeeID, negative hours, mismatch checks).
                Translate any useful rule into your spreadsheet with Data Validation or helper columns.
              </p>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

