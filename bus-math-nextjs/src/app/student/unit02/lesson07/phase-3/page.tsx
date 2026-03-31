'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Search, AlertTriangle, CheckCircle } from "lucide-react"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

const auditQuestions = [
  {
    id: 'audit-q1',
    question: 'The Recommendation sheet says "TechStart should freeze hiring this quarter." Which sheet provides the strongest evidence for this claim?',
    answers: [
      'Financial Statements — specifically the income statement showing rising expenses outpacing revenue',
      'The Assumptions sheet because it lists the date the workbook was created',
      'The Closing Entries sheet because it shows dividends were paid',
      'None of the sheets support this claim'
    ],
    explanation: 'A recommendation must be backed by numbers. The income statement on the Financial Statements sheet shows whether expenses are growing faster than revenue, which directly supports or contradicts a hiring freeze recommendation.'
  },
  {
    id: 'audit-q2',
    question: 'You notice the Recommendation sheet cites a net income figure, but the Financial Statements sheet shows a different number. What does this tell you?',
    answers: [
      'The evidence chain is broken — the recommendation does not match its source data',
      'The recommendation is probably still correct if the numbers are close',
      'This is normal — rounding differences always occur between sheets',
      'You should check the Assumptions sheet for an explanation'
    ],
    explanation: 'If a recommendation cites numbers that do not match the source sheet, the evidence chain is broken. Even small differences matter — they suggest the recommendation was written from outdated or incorrect data.'
  },
  {
    id: 'audit-q3',
    question: 'What would make this shared workbook feel weak or untrustworthy to a reader?',
    answers: [
      'A recommendation with no specific numbers cited as evidence',
      'All formulas using structured references instead of cell addresses',
      'An Assumptions sheet with the date and version clearly labeled',
      'The trial balance showing debits equal credits exactly'
    ],
    explanation: 'A recommendation without specific numbers is just an opinion. Trustworthy workbooks cite exact figures from specific sheets so the reader can verify the claim independently.'
  },
  {
    id: 'audit-q4',
    question: 'The Adjustments sheet shows $5,500 of supplies used, but the Financial Statements sheet does not include Supplies Expense. What type of error is this?',
    answers: [
      'A missing link — the adjustment was recorded but never flowed into the statements',
      'A rounding error — the difference is too small to matter',
      'A closing entry error — the accounts were closed in the wrong order',
      'This is correct — supplies used should not appear on the income statement'
    ],
    explanation: 'This is a missing link error. The adjustment exists on the Adjustments sheet but was never connected to the Financial Statements sheet. The income statement is incomplete without this expense.'
  }
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Phase 3: Guided Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8">

              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    How to Audit a Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-green-900">
                  <p>
                    Auditing a workbook means tracing every claim back to its source. A recommendation is only as strong as the evidence that supports it. Follow this routine:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><strong>Read the recommendation first.</strong> What is the workbook claiming?</li>
                    <li><strong>Find the cited numbers.</strong> Which sheet do they come from? Do they match?</li>
                    <li><strong>Check the logic chain.</strong> Does the evidence actually support the claim, or is there a gap?</li>
                    <li><strong>Look for red flags.</strong> Missing links, stale dates, hard-coded outputs, or unexplained assumptions.</li>
                    <li><strong>Ask: would I trust this?</strong> If a manager or investor read this workbook, would they feel confident in the recommendation?</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Audit the Shared Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-900 space-y-4">
                  <p>
                    Open the shared rehearsal workbook you downloaded in Phase 2. Work through each sheet using the audit routine above. Then answer the questions below to confirm your understanding.
                  </p>
                  <ComprehensionCheck
                    questions={auditQuestions}
                    title="Guided Audit Check"
                    description="Test your ability to trace recommendations back to evidence and spot broken logic chains"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    What Makes an Artifact Weak?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900 space-y-3">
                  <p className="font-medium">Discuss with your group. Which of these would make a workbook feel weak, confusing, or untrustworthy?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {[
                      { text: "Recommendation cites numbers that do not appear on any sheet", weak: true },
                      { text: "All formulas use structured references that auto-expand", weak: false },
                      { text: "The Assumptions sheet has no date or version number", weak: true },
                      { text: "Trial balance debits and credits match exactly", weak: false },
                      { text: "A chart is based on a static A1:C10 range that will not update", weak: true },
                      { text: "Each adjusting entry has a clear reason written next to it", weak: false },
                    ].map((item, i) => (
                      <div key={i} className={`p-3 rounded-lg border ${item.weak ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
                        <div className="flex items-start gap-2">
                          {item.weak ? (
                            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span className="text-sm">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
