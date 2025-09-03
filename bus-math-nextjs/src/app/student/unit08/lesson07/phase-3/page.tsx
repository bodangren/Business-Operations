'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import FinancialDashboard from "@/components/charts/FinancialDashboard"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🧰 Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Production Sprint I: Build Core</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Create driver cells for scenario: Growth, Margin, Churn, Price, OpEx Growth.</li>
                    <li>Use <strong>XLOOKUP with IFNA</strong> to pull drivers by selected scenario (Base, Stretch, Downside).</li>
                    <li>Link outputs (Revenue, COGS, Profit, Cash Flow) to drivers. <strong>No hard‑coded totals.</strong></li>
                    <li>Convert ranges to <strong>Tables</strong>; switch formulas to structured references.</li>
                    <li>Document formula choices with short comments for auditability.</li>
                  </ol>
                </CardContent>
              </Card>

              <FinancialDashboard title="Integrated KPI View (Demo)" />

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Validation Builder</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-3">Design the validation checks your model needs, then build them in Excel.</p>
                  <ErrorCheckingSystem />
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

