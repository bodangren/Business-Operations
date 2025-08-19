import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit02Data}
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
            <h1 className="text-3xl font-bold text-gray-900">Building Sarah’s Scenario Engine</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Construct the month-end engine step-by-step: map accounts to methods, route logic with SWITCH, and install visible validation to catch errors early.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Step-by-Step Build
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-green-900">
              <ol className="list-decimal list-inside space-y-2">
                <li>Create <strong>TransactionTable</strong> with columns: <em>TxnID, Date, AccountID, Type, Amount</em>.</li>
                <li>Create <strong>Map</strong> with columns: <em>AccountID, Method</em> (e.g., Accrual, Deferral).</li>
                <li>In TransactionTable, add a <em>Method</em> column using: <code>=XLOOKUP([@AccountID], Map[AccountID], Map[Method], "Unknown")</code>.</li>
                <li>Add <em>AdjValue</em> using: <code>=SWITCH([@Method], "Accrual", [@Amount], "Deferral", -[@Amount], 0)</code>.</li>
                <li>Aggregate with <code>=SUMIFS(TransactionTable[AdjValue], TransactionTable[Type], "Revenue")</code> or use <code>SUMPRODUCT</code> for multi-criteria.</li>
                <li>Install validation: flag <em>Unknown</em> methods, dates outside the period, negative amounts where not allowed, and duplicate TxnIDs.</li>
              </ol>
              <div className="bg-white p-4 rounded border border-green-200">
                <p className="font-semibold mb-1">Professional Tip:</p>
                <p>Place a small <strong>Audit Panel</strong> at the top: number of flags, list of latest issues, and links to fix. Investors love fast, transparent checks.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validation Logic Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

