'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ClipboardList, Lightbulb } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]

const vocabSentences = [
  { id: 'u6l7-v1', text: 'Use {blank} or INDEX/MATCH with exact match for scenario lookups.', answer: 'XLOOKUP', hint: 'Wrap with IFNA or IFERROR' },
  { id: 'u6l7-v2', text: 'Wrap lookups with {blank} to show friendly messages when not found.', answer: 'IFNA', hint: 'IFERROR works when non‑NA errors are possible', alternativeAnswers: ['IFERROR'] },
  { id: 'u6l7-v3', text: 'Convert ranges to {blank} to get structured references that auto‑expand.', answer: 'Tables', hint: 'Table[#All], Table[Column]' },
  { id: 'u6l7-v4', text: 'Use {blank} ranges for drivers and assumptions to avoid hard‑coding.', answer: 'named', hint: 'Readable names for inputs', alternativeAnswers: ['named range', 'named ranges'] },
  { id: 'u6l7-v5', text: 'A solid {blank} proves totals tie across sources and scenarios.', answer: 'reconciliation', hint: 'Tie‑outs build trust' },
  { id: 'u6l7-v6', text: 'Sensitivity analysis requires {blank} scenario names and a fresh AsOfDate.', answer: 'valid', hint: 'No stale or misspelled scenarios' },
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-green-700" /> Definition of Done (Student Checklist)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-2 text-green-900">
                      <li><strong>Exact references:</strong> No hard‑coded outputs; use named ranges and structured references.</li>
                      <li><strong>Lookups:</strong> XLOOKUP or INDEX/MATCH (exact) + IFNA/IFERROR with clear messages.</li>
                      <li><strong>Tables:</strong> Use structured refs (e.g., Table[#All]) so ranges auto‑expand.</li>
                      <li><strong>Charts:</strong> Bind to tables/structured refs; no static A1:C10 ranges.</li>
                      <li><strong>Validation:</strong> Inputs constrained (no negatives where invalid; ≤100% rates; valid scenario names; fresh AsOfDate).</li>
                      <li><strong>Reconciliation:</strong> Tie‑outs pass (totals across scenarios; balance checks).</li>
                      <li><strong>Performance:</strong> Avoid volatile functions; confirm responsive updates.</li>
                      <li><strong>Auditability:</strong> Assumptions sheet, date/version note, transparent formulas; no hidden logic.</li>
                      <li><strong>Scenario behavior:</strong> KPIs update across Base/Stretch/Downside; thresholds drive executive summary text.</li>
                      <li><strong>Error handling:</strong> Clear user messages; all ErrorCheckingSystem rules pass.</li>
                      <li><strong>Presentation:</strong> Single‑screen dashboard/summary; readable charts; concise executive summary.</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-900 font-semibold mb-2"><Lightbulb className="w-5 h-5" /> Build Plan (Short)</div>
                    <ul className="list-disc list-inside text-blue-900">
                      <li>Drivers/assumptions named and dated</li>
                      <li>Core links: exact‑match lookups and structured refs</li>
                      <li>Outputs: reconciliations and KPI summary</li>
                      <li>Visuals: charts bound to tables</li>
                      <li>QA: validation + ErrorCheckingSystem passes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Vocabulary Check: Standards & QA</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank 
                    sentences={vocabSentences as any}
                    title="Key Terms for Investor‑Ready Pricing Models"
                    description="Fill in the blanks to reinforce exact lookups, structured references, and reconciliation concepts."
                    showWordList={true}
                    randomizeWordOrder={true}
                    showHints={true}
                  />
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

