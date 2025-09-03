import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🧩 Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Production Sprint I: Build Core Links</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-purple-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Enforce exact‑match lookups from your scenario driver to payroll outputs.</li>
                    <li>Convert ranges to Tables; replace A1:C10 with structured references (Table[Column]).</li>
                    <li>Eliminate hard‑coded outputs. If you must, leave a comment and fix it next.</li>
                    <li>Document one formula decision (why XLOOKUP vs INDEX/MATCH; why IFNA vs IFERROR).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Validation Builder (Practice)</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900">
                  <p className="mb-3">Use the ErrorCheckingSystem to rehearse common payroll validation rules:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Hours &gt; 40 flagged for overtime; missing Employee_ID flagged;</li>
                    <li>Gross pay matches Hours × Rate within rounding tolerance;</li>
                    <li>Rates between 0% and 100%; no negative hours or stale dates.</li>
                  </ul>
                </CardContent>
              </Card>

              <ErrorCheckingSystem />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

