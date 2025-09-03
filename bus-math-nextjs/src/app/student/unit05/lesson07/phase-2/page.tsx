import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[1]

const vocabSentences = [
  {
    id: 'u05l07-v1',
    text: 'Use {blank} or INDEX/MATCH with exact match to avoid wrong scenario picks.',
    answer: 'XLOOKUP',
    hint: 'Exact-match lookup function'
  },
  {
    id: 'u05l07-v2',
    text: 'Wrap lookups with {blank} or IFNA to provide clear user messages on errors.',
    answer: 'IFERROR',
    hint: 'Error handling wrapper'
  },
  {
    id: 'u05l07-v3',
    text: 'Convert ranges to {blank} and use structured references so charts auto-expand.',
    answer: 'Tables',
    hint: 'Excel feature that auto-expands'
  },
  {
    id: 'u05l07-v4',
    text: 'Name important inputs with {blank} to eliminate hard-coded references.',
    answer: 'named ranges',
    hint: 'Friendly names for key cells'
  },
  {
    id: 'u05l07-v5',
    text: 'Perform {blank} between payroll register totals and bank statements to explain differences.',
    answer: 'reconciliation',
    hint: 'Tie-out process'
  },
  {
    id: 'u05l07-v6',
    text: 'Write a short {blank} that changes when KPI thresholds are crossed.',
    answer: 'executive summary',
    hint: 'Investor-ready narrative'
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📋 Phase 2: Standards & Plan</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900">Professional Standards & Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-green-900">
                  <p>
                    Today you’ll finish the payroll system so it’s investor‑ready. Follow this checklist and keep your
                    explanations simple and direct. Your goal is fast, confident decisions.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Exact references: no hard‑coded outputs; use named ranges and structured refs</li>
                    <li>Lookups: XLOOKUP or INDEX/MATCH with exact match; wrap with IFNA/IFERROR</li>
                    <li>Tables: convert ranges to Tables; charts bind to structured references</li>
                    <li>Validation: inputs constrained; rates ≤ 100%; no negatives where invalid; fresh AsOfDate</li>
                    <li>Reconciliation: tie‑outs pass (register vs bank); timing differences explained</li>
                    <li>Performance: avoid volatile functions that slow recalculation</li>
                    <li>Auditability: assumptions tab, version/date note, transparent formulas</li>
                    <li>Scenario behavior: KPIs update by Base/Stretch/Downside; thresholds drive summary text</li>
                    <li>Error handling: clear user messages; all ErrorCheckingSystem rules pass</li>
                    <li>Presentation: single‑screen dashboard or summary readout that’s easy to read</li>
                  </ul>
                </CardContent>
              </Card>

              <FillInTheBlank 
                sentences={vocabSentences}
                title="Vocabulary for Production Standards"
                description="Lock in the key terms you’ll use while finishing the model."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

