'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link2, FileDown, Layout } from "lucide-react"
import FinancialDashboard from "@/components/charts/FinancialDashboard"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🚀 Phase 4: Independent Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><Link2 className="w-5 h-5" /> Production Sprint II: QA + Visuals</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-orange-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Finalize validation and reconciliation; all tie‑outs pass</li>
                    <li>Bind all visuals to structured references (Tables), not static ranges</li>
                    <li>Draft an executive summary driven by KPI thresholds and scenarios</li>
                    <li>Confirm performance (no volatile functions) and clear error messages</li>
                  </ul>
                  <div className="mt-4">
                    <a href="/resources/unit03-kpi-dashboard-lesson07-practice.csv" download className="inline-flex items-center gap-2 text-orange-800 underline">
                      <FileDown className="w-4 h-4" /> Download practice data: unit03-kpi-dashboard-lesson07-practice.csv
                    </a>
                    <p className="text-sm mt-2">Includes invalid scenario names, stale dates, rate extremes, rounding stress, and near‑threshold KPIs for summary logic.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><Layout className="w-5 h-5" /> Visual Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <FinancialDashboard title="Investor Dashboard (Unit 03)" />
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">Self‑Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-green-900">
                    <li>All lookups exact + IFNA/IFERROR</li>
                    <li>Charts connected to Tables; auto‑expand confirmed</li>
                    <li>Validation prevents invalid entries; freshness checks pass</li>
                    <li>Reconciliation tie‑outs show “OK” with clear math</li>
                    <li>Executive summary reads clearly across scenarios</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

