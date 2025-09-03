import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🎛️ Phase 4: Independent Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Production Sprint II: QA + Visuals</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-orange-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Finalize validation and <strong>reconciliation tie‑outs</strong> (register vs bank; totals; balance checks).</li>
                    <li>Bind all visuals to <strong>structured references</strong>; confirm charts update on new rows.</li>
                    <li>Draft a short <strong>executive summary</strong> driven by KPI thresholds (Base/Stretch/Downside).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900">Practice Data (Download)</CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900">
                  <p className="mb-3">Use this CSV with edge cases to test validation, reconciliation, and summary logic:</p>
                  <a href="/resources/unit05-payroll-lesson07-practice.csv" download className="underline text-orange-700">
                    Download: unit05-payroll-lesson07-practice.csv
                  </a>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Executive Summary Logic (Example)</CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Cash Impact:</strong> If bank vs register difference &gt; $0 → “Explain timing/fees; confirm by date.”</li>
                    <li><strong>Labor % of Revenue:</strong> If labor% &gt; 40% → “Action: staffing review or rate update.”</li>
                    <li><strong>Overtime Rate:</strong> If OT hours &gt; 10% of total → “Plan: scheduling fixes to reduce OT.”</li>
                  </ul>
                </CardContent>
              </Card>

              <FinancialDashboard title="Payroll Snapshot Dashboard" />

              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Self‑Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900">
                  <p className="mb-2">Check your model against each item. Note any remaining gaps.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Exact‑match lookups + IFNA/IFERROR messages</li>
                    <li>Tables + structured references for ranges and charts</li>
                    <li>Validation rules; no invalid inputs or stale dates</li>
                    <li>Reconciliation tie‑outs pass; differences documented</li>
                    <li>Executive summary updates by scenario</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

