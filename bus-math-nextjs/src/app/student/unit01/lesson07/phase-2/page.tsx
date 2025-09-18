'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightCircle, ClipboardList, Lightbulb, Target } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]

const vocabSentences = [
  { id: 'v1', text: 'Use {blank} to catch lookup errors and show friendly messages.', answer: 'IFNA', hint: 'Also IFERROR works when non-NA errors are possible', alternativeAnswers: ['IFERROR'] },
  { id: 'v2', text: 'Excel Tables use {blank} references like Table1[Amount] that auto-expand.', answer: 'structured', hint: 'Not A1:C10' },
  { id: 'v3', text: 'Switching from approximate matches to exact matches means setting match mode to {blank}.', answer: '0', hint: 'In XLOOKUP this is exact-match; in MATCH use 0', alternativeAnswers: ['exact'] },
  { id: 'v4', text: 'A {blank} range gives a readable name to a cell or region.', answer: 'named', hint: 'Useful for drivers and assumptions', alternativeAnswers: ['named range'] },
  { id: 'v5', text: 'A good {blank} proves totals agree across sources and flags mismatches.', answer: 'reconciliation', hint: 'Bank vs register; debits vs credits' },
  { id: 'v6', text: 'Scenario behavior should update KPIs and the {blank} summary automatically.', answer: 'executive', hint: 'Short, decision-ready communication', alternativeAnswers: ['executive summary'] },
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-green-700" /> QA Ladder for Lesson 07
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg space-y-3">
                    <p className="text-green-900 leading-relaxed">
                      Lesson 07 is a guided QA lab. You will climb a ladder of quality checks one rung at a time. Everyone
                      starts with clean trial balance basics. When that feels steady, you can explore the stretch checks that
                      professional analysts use every day.
                    </p>
                    <div className="bg-white border border-green-200 rounded-lg p-4 space-y-2">
                      <h3 className="font-semibold text-green-900 flex items-center gap-2"><ArrowRightCircle className="w-5 h-5" /> Tier 1 — Core Safety Checks</h3>
                      <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Import the ledger data as a Table named <strong>Transactions</strong>.</li>
                        <li>Run a trial balance test: <code>=SUM(Table[Debit]) - SUM(Table[Credit])</code>.</li>
                        <li>Highlight at least two obvious errors (bad account name, negative liability, zero amount).</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-blue-200 rounded-lg p-4 space-y-2">
                      <h3 className="font-semibold text-blue-900 flex items-center gap-2"><ArrowRightCircle className="w-5 h-5" /> Tier 2 — Pro Moves</h3>
                      <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Wrap lookups with <code>IFNA</code>/<code>IFERROR</code> so typos show friendly messages.</li>
                        <li>Flag stale dates older than 90 days.</li>
                        <li>Use <code>ROUND</code> so values like 199.995 display as 200.00.</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-purple-200 rounded-lg p-4 space-y-2">
                      <h3 className="font-semibold text-purple-900 flex items-center gap-2"><ArrowRightCircle className="w-5 h-5" /> Tier 3 — Analyst Stretch</h3>
                      <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Build a mini QA dashboard (error counts + traffic-light status).</li>
                        <li>Replace any static ranges with structured references or named tables.</li>
                        <li>Write a one-sentence audit note that ties errors to next steps.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg space-y-2">
                    <div className="flex items-center gap-2 text-blue-900 font-semibold"><Lightbulb className="w-5 h-5" /> Why this ladder matters</div>
                    <p className="text-blue-900 leading-relaxed">
                      Sarah’s investors do not expect perfection in week three. They expect a ledger that shows problems fast
                      and explains what to do about them. Each tier gives you another way to earn that trust.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <Target className="w-5 h-5" /> Lesson 07 Learning Targets
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-amber-900">
                  <p>
                    By the end of this lesson you will be able to explain how a trial balance proves ledger integrity, use
                    validation formulas to catch messy data, and communicate findings in a short audit note.
                  </p>
                  <p>
                    Keep these goals visible as you practice. They help you decide which tier to work on and when to push for the stretch challenge.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Vocabulary Check: Standards & QA</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank 
                    sentences={vocabSentences as any}
                    title="Key Terms for Investor-Ready Models"
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

      <PhaseFooter unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
