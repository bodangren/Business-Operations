import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit03Data}
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
            <h2 className="text-3xl font-bold text-gray-900">Building Sarah’s Three‑Statement Link System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Implement the link engine step‑by‑step with mapping, rollups, a scenario switch, and
              professional validation checks that surface issues instantly.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Step‑by‑Step Build</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-purple-900">
              <ol className="list-decimal list-inside space-y-2">
                <li>Convert transactions and account map to Tables.</li>
                <li>Map <span className="font-mono">AccountID → StatementLine</span> with XLOOKUP (use <span className="font-mono">if_not_found</span>).</li>
                <li>Create rollups with <span className="font-mono">SUMIFS</span> for each statement section.</li>
                <li>Add a control cell <span className="font-mono">Scenario</span> and route logic with <span className="font-mono">SWITCH</span>.</li>
                <li>Wire validations: A=L+E, NI → RE, and Cash Flow Δ matches balance sheet Δ Cash.</li>
              </ol>
              <div className="bg-white p-3 rounded border">
                <div className="font-mono text-sm">
                  =XLOOKUP([@AccountID], Map[AccountID], Map[StatementLine], "Unknown")<br/>
                  =SUMIFS(TransactionTable[Amount], TransactionTable[StatementLine], "Revenue")<br/>
                  =SWITCH(Scenario, "Base",1, "Stretch",1.1, "Conservative",0.9)
                </div>
              </div>
              <p className="text-purple-900 text-sm">
                Tip: Name key ranges (e.g., <span className="font-mono">Scenario</span>) and document assumptions near your summary block.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validation & Error Surfacing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Professionals never hide errors. Use clear flags for:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Balance tie: <span className="font-mono">=ABS(TotalAssets - (TotalLiab + TotalEquity)) &lt; 0.01</span></li>
                <li>Cash reconciliation: <span className="font-mono">=ABS(EndCash - (BegCash + NetCashFlow)) &lt; 0.01</span></li>
                <li>Net income roll‑forward: <span className="font-mono">=ABS(EndingRE - (BeginningRE + NetIncome - Dividends)) &lt; 0.01</span></li>
                <li>Missing keys: any <span className="font-mono">"Unknown"</span> from mapping must highlight.</li>
              </ul>
              <ErrorCheckingSystem />
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

