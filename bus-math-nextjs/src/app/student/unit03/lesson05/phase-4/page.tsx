import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Advanced Link Engine Mastery Challenges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download the dataset and complete the challenges. Your model must update correctly as rows,
              accounts, and scenarios change—without fixing formulas by hand.
            </p>
            <p className="text-base">
              <a className="text-blue-700 underline" href="/resources/unit03-three-statement-advanced-practice.csv" download>
                Download: unit03-three-statement-advanced-practice.csv
              </a>
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Scenarios & Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-orange-900">
              <ol className="list-decimal list-inside space-y-2">
                <li>Add 5 new transactions (Revenue, COGS, OpEx). Model must auto‑update all three statements.</li>
                <li>Flip <span className="font-mono">Scenario</span> among Base/Stretch/Conservative. KPI summary should change with no errors.</li>
                <li>Introduce an unmapped AccountID and verify the model surfaces an <span className="font-mono">"Unknown"</span> warning.</li>
                <li>Confirm A=L+E tie and Cash Flow reconciliation remain true after changes.</li>
                <li>Create a one‑page investor summary: Revenue, Gross Margin %, Net Income, End Cash, and 3 key checks.</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Self‑Assessment Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>All formulas use Tables and structured references.</li>
                <li>XLOOKUPs include <span className="font-mono">if_not_found</span> and map to the correct StatementLine.</li>
                <li>SUMIFS rollups match the three statements exactly.</li>
                <li>Scenario switch impacts the correct drivers and KPIs.</li>
                <li>Validation flags are visible and readable (no hidden errors).</li>
                <li>Summary page communicates assumptions and results clearly.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

