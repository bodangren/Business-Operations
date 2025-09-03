'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, BarChart3, CheckSquare } from "lucide-react"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🧭 Phase 4: Independent Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><Download className="w-5 h-5" /> Practice Dataset (Lesson 07)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-900 mb-3">
                    Download the dataset with edge cases for QA, reconciliation, and stress tests. Import into your 
                    PriceLab model and ensure your validations and reconciliations handle each case.
                  </p>
                  <a href="/resources/unit06-pricing-lesson07-practice.csv" download className="underline text-orange-800 font-medium">
                    Download: unit06-pricing-lesson07-practice.csv
                  </a>
                  <div className="mt-4 text-sm text-gray-700">
                    Includes: invalid scenario names, stale dates, rounding near thresholds, negative/invalid rates, 
                    and near‑threshold KPIs to test executive summary logic.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Visuals Bound to Tables</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-blue-900">
                    Bind charts to structured references (Table columns) so visuals auto‑update when data expands. 
                    Avoid static ranges. Check that titles, labels, and number formats are investor‑ready.
                  </p>
                  <FinancialDashboard title="Demo Dashboard (Bind your charts to Tables)" />
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Self‑Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-green-900">
                    <li>Exact lookups + IFNA/IFERROR everywhere</li>
                    <li>Tables and named ranges replace static references</li>
                    <li>All reconciliations pass; no hidden logic</li>
                    <li>Charts bound to tables; executive summary reads cleanly</li>
                    <li>Performance is responsive; no volatile functions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

