import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit02Data}
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
            <h1 className="text-3xl font-bold text-gray-900">Advanced Scenario Mastery Challenges</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download Sarah’s practice data with edge cases. Your engine must adapt as rows and inputs change—while keeping validation tight and outputs investor-ready.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Advanced Practice Dataset
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-blue-900">
              <p>Use this dataset to stress-test your model:</p>
              <a className="underline text-blue-700" href="/resources/unit02-month-end-advanced-practice.csv" download>
                Download: unit02-month-end-advanced-practice.csv
              </a>
              <p className="text-sm text-blue-800">Includes: missing AccountID, duplicate TxnID, negative amounts, stale dates, and new categories.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Escalating Challenges</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-purple-900">
              <ol className="list-decimal list-inside space-y-2">
                <li>Add 20 new rows across categories. All totals should update automatically.</li>
                <li>Introduce a new method type “Accrual-Spread” and update the Map. Engine should handle without refactoring.</li>
                <li>Change period dates. Validation flags should catch any out-of-range transactions.</li>
                <li>Break an AccountID on purpose. Ensure XLOOKUP surfaces “Unknown” and flags the row.</li>
                <li>Create a one-page investor summary: key totals, recent flags, and time-saved vs manual process.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Self-Assessment: Investor-Ready Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                <li>Structured references only (no fixed A1:A200 ranges)</li>
                <li>XLOOKUPs include if_not_found and map all active accounts</li>
                <li>SWITCH/IFS logic covers all method types clearly</li>
                <li>Validation flags for missing IDs, duplicates, negatives, stale dates</li>
                <li>Audit panel summarizes flags and links to fixes</li>
                <li>Summary page communicates results and reliability to investors</li>
                <li>All new rows and categories flow through without edits</li>
              </ul>
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

