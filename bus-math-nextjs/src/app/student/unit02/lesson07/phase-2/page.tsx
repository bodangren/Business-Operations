'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[1]

const vocabSentences = [
  { id: 's1', text: 'Use {blank} or INDEX/MATCH with exact match to prevent mismatches.', answer: 'XLOOKUP', hint: 'Exact match is required', alternativeAnswers: ['INDEX/MATCH'] },
  { id: 's2', text: 'Wrap lookups with {blank} or IFERROR to show friendly messages.', answer: 'IFNA', alternativeAnswers: ['IFERROR'], hint: 'Error handling' },
  { id: 's3', text: 'Convert ranges to {blank} so formulas expand automatically.', answer: 'Tables', hint: 'Structured references' },
  { id: 's4', text: 'Bind charts to {blank} rather than A1:C10.', answer: 'structured references', alternativeAnswers: ['Tables', 'table references'], hint: 'Dynamic charts' },
  { id: 's5', text: 'Create an {blank} sheet for assumptions, date/version, and notes.', answer: 'Assumptions', hint: 'Auditability' },
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">📘 Phase 2: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Definition of Done (Student Checklist)</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-blue-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Exact references:</strong> No hard‑coded outputs; use named ranges and structured references.</li>
                    <li><strong>Lookups:</strong> XLOOKUP or INDEX/MATCH exact; wrap with IFNA/IFERROR and clear messages.</li>
                    <li><strong>Tables:</strong> Use structured refs (Table[#All]); ranges auto‑expand.</li>
                    <li><strong>Charts:</strong> Bind to tables/structured refs; no static A1:C10 ranges.</li>
                    <li><strong>Validation:</strong> Inputs constrained (no invalid negatives; ≤100% rates; valid scenario names; fresh AsOfDate).</li>
                    <li><strong>Reconciliation:</strong> Tie‑outs pass (totals, bank vs register, balance checks).</li>
                    <li><strong>Performance:</strong> Avoid volatile functions; confirm responsive updates.</li>
                    <li><strong>Auditability:</strong> Assumptions sheet, date/version, transparent formulas; avoid hidden logic.</li>
                    <li><strong>Scenario behavior:</strong> KPIs update across Base/Stretch/Downside; thresholds drive summary text.</li>
                    <li><strong>Error handling:</strong> Clear user messages; all ErrorCheckingSystem rules pass.</li>
                    <li><strong>Presentation:</strong> One‑screen dashboard, readable charts, concise executive summary.</li>
                  </ul>
                </CardContent>
              </Card>

              <FillInTheBlank 
                sentences={vocabSentences as any}
                title="Vocabulary: Standards for Reliable Automation"
                description="Complete the key terms that make month‑end models stable and investor‑ready."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

