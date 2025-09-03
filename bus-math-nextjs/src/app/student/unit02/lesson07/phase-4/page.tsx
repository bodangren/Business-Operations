'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🎛️ Phase 4: Independent Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Production Sprint II: QA + Visuals</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-purple-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Finalize validation and <strong>reconciliation tie‑outs</strong> (totals, bank vs register, balance checks).</li>
                    <li>Bind all visuals to <strong>structured references</strong>; confirm charts update on new rows.</li>
                    <li>Draft a short <strong>executive summary</strong> driven by KPI thresholds (Base/Stretch/Downside).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Practice Data (Download)</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900">
                  <p className="mb-3">Use this CSV with edge cases to test validation, reconciliation, and threshold logic:</p>
                  <a href="/resources/unit02-month-end-lesson07-practice.csv" download className="underline text-purple-700">
                    Download: unit02-month-end-lesson07-practice.csv
                  </a>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Executive Summary Logic (Example)</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Runway & Cash:</strong> If runway &lt; 8 weeks → “Focus: extend cash runway via collections and spend freeze.”</li>
                    <li><strong>Gross Margin:</strong> If margin &lt; 35% → “Priority: pricing update or cost reduction to restore margin.”</li>
                    <li><strong>Receivables:</strong> If AR &gt; 45 days → “Action: tighten terms and automate reminders.”</li>
                  </ul>
                </CardContent>
              </Card>

              <FinancialDashboard title="Month‑End Snapshot" />

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Self‑Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900">
                  <p className="mb-2">Check your model against each item. Note any remaining gaps.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Exact match lookups + IFNA/IFERROR messages</li>
                    <li>Tables + structured references for all ranges and charts</li>
                    <li>Validation rules; no invalid inputs or stale dates</li>
                    <li>Reconciliation tie‑outs pass</li>
                    <li>Executive summary updates by scenario</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

