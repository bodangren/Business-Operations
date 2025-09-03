'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FinancialDashboard from "@/components/charts/FinancialDashboard"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🎛️ Phase 4: Independent Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Production Sprint II: QA + Visuals</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Finalize <strong>validation</strong> (no invalid negatives, ≤100% rates, fresh AsOfDate).</li>
                    <li>Complete <strong>reconciliation</strong> (totals tie, cash vs. bank, accounting balance checks).</li>
                    <li>Bind visuals to <strong>structured references</strong>; confirm charts update with new rows.</li>
                    <li>Draft a short <strong>executive summary</strong> driven by KPI thresholds (runway, margin, growth).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900">Practice Data (Download)</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-3">Use this CSV with edge cases to test validation, reconciliation, and threshold logic:</p>
                  <a href="/resources/unit08-financial-model-lesson07-practice.csv" download className="underline text-orange-700">
                    Download: unit08-financial-model-lesson07-practice.csv
                  </a>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Executive Summary Logic (Example)</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Runway:</strong> If cash runway &lt; 6 months → “Urgent: reduce burn; extend runway.”</li>
                    <li><strong>Gross Margin:</strong> If margin &lt; 35% → “Focus: pricing and COGS controls.”</li>
                    <li><strong>Growth:</strong> If M/M growth &lt; 3% → “Action: pipeline push and retention.”</li>
                  </ul>
                </CardContent>
              </Card>

              <FinancialDashboard title="Investor Snapshot (Bind charts to Tables)" />

              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Self‑Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
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

      <PhaseFooter unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

