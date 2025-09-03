'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3 } from "lucide-react"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🏗️ Phase 4: Independent Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Production Sprint II (QA + Visuals)</CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 space-y-4">
                  <p>
                    Finalize validation and reconciliation. Bind visuals to structured references and write a
                    short executive summary that triggers on KPI thresholds.
                  </p>
                  <p>
                    Practice dataset (with edge cases) — download and test:
                    {' '}
                    <a className="underline text-blue-700" href="/resources/unit04-forecasting-lesson07-practice.csv" download>
                      unit04-forecasting-lesson07-practice.csv
                    </a>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Includes invalid scenario names and stale AsOfDate rows</li>
                    <li>Contains negative and &gt;100% rate stress cases</li>
                    <li>Near‑threshold KPIs to test executive summary text</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Dashboard Bind Test</CardTitle>
                </CardHeader>
                <CardContent>
                  <FinancialDashboard title="Café KPI Dashboard" />
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Self‑Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>All lookups exact‑match with IFNA/IFERROR text</li>
                    <li>No static ranges in charts; all visuals follow tables</li>
                    <li>Validation panel shows zero outstanding issues</li>
                    <li>Reconciliation tie‑outs pass; totals cross‑check</li>
                    <li>Executive summary updates with scenario toggles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

