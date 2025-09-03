'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[1]

export default function Phase2Page() {
  const vocab = [
    { id: '1', text: 'Use {blank} or INDEX/MATCH with match_mode = 0 (exact).', answer: 'XLOOKUP', hint: 'Exact match only' },
    { id: '2', text: '{blank} wrap lookups to show clear messages on errors.', answer: 'IFNA/IFERROR', hint: 'User-friendly errors' },
    { id: '3', text: 'Convert ranges to Excel {blank} so references auto‑expand.', answer: 'Tables', hint: 'Structured references' },
    { id: '4', text: 'Charts should bind to {blank} references, not A1:C10.', answer: 'structured', alternativeAnswers: ['Structured'], hint: 'Table[#All]' },
    { id: '5', text: 'Use {blank} ranges and avoid hard‑coded outputs.', answer: 'named', alternativeAnswers: ['Named'], hint: 'Driver cells, KPI outputs' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">📋 Phase 2: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Standards + Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Exact references:</strong> No hard‑coded outputs. Use named ranges and Tables.</li>
                    <li><strong>Lookups:</strong> XLOOKUP (or INDEX/MATCH) with exact match, wrapped in IFNA/IFERROR.</li>
                    <li><strong>Tables:</strong> Use structured refs so ranges and charts auto‑expand.</li>
                    <li><strong>Validation:</strong> Constrain inputs (no negatives if invalid, ≤100% rates, fresh AsOfDate).</li>
                    <li><strong>Reconciliation:</strong> Tie‑outs pass (totals, cash vs. bank, accounting equation).</li>
                    <li><strong>Performance:</strong> Avoid volatile functions; confirm responsive updates.</li>
                    <li><strong>Auditability:</strong> Assumptions sheet, version/date note, transparent formulas.</li>
                    <li><strong>Scenario behavior:</strong> KPIs update across Base/Stretch/Downside; thresholds drive summary text.</li>
                    <li><strong>Error handling:</strong> Clear user messages; all checks pass.</li>
                    <li><strong>Presentation:</strong> Single‑screen dashboard, readable charts, concise summary.</li>
                  </ul>
                </CardContent>
              </Card>

              <FillInTheBlank 
                title="Vocabulary: QA + Audit Standards"
                description="Fill in key terms for investor‑ready spreadsheet automation."
                sentences={vocab as any}
                showWordList
                randomizeWordOrder
                showHints
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

