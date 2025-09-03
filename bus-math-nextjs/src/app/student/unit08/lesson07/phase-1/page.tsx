'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FinancialDashboard from "@/components/charts/FinancialDashboard"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[0]

export default function Phase1Page() {
  const quiz = [
    {
      id: 'q1',
      question: 'Which is required for investor-ready models?',
      answers: [
        'Exact-match lookups with IFNA/IFERROR',
        'Hard-coded totals to save time',
        'Volatile functions in all sheets',
        'Static chart ranges like A1:C10'
      ],
      explanation: 'Use exact-match lookups wrapped in IFNA/IFERROR for reliability and clear messages.'
    },
    {
      id: 'q2',
      question: 'Charts should be bound to…',
      answers: [
        'Tables with structured references',
        'Random cell ranges',
        'Manually typed values',
        'Hidden sheets only'
      ],
      explanation: 'Tables expand automatically and keep visuals in sync when rows are added.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎬 Phase 1: Hook</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900">Production Kickoff: Stakes and Standards</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Sarah’s investors want to see her Year‑1 startup model today. They expect a clear
                    dashboard, reliable numbers, and a short story about risk. If anything looks off,
                    trust drops fast.
                  </p>
                  <p>
                    You will finish your model and make it audit‑ready. We will compare two cases:
                    a broken model with hard‑coded totals and static charts, and a “ready” model with
                    exact lookups, Tables, and error messages. Your job is to ship the second one.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-900">Quick Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-3">A polished dashboard helps investors decide quickly.</p>
                  <FinancialDashboard title="Investor Snapshot (Demo)" />
                </CardContent>
              </Card>

              <ComprehensionCheck 
                title="What makes a model trustworthy?"
                description="Check your understanding of investor‑ready standards"
                questions={quiz as any}
                showExplanations
              />

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Turn and Talk</CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>What signals “trust” to an investor reviewing a model under time pressure?</li>
                    <li>Which failure signs are easiest to spot (and fix) today?</li>
                    <li>Which one habit would make your model more reliable this week?</li>
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

