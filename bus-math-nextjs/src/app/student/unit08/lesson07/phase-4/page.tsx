'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[3]

export default function Phase4Page() {
  const transferQuiz = [
    {
      id: 't1',
      question: 'Which structure must your team recreate independently in the real project?',
      answers: [
        'All four sheets: Asset Register, Depreciation Schedule, Method Comparison, Recommendation',
        'Only the Recommendation sheet',
        'Only the Asset Register',
        'Nothing — the teacher provides everything'
      ],
      explanation: 'The entire four-sheet structure transfers to the real project. Only the dataset changes.'
    },
    {
      id: 't2',
      question: 'What must every recommendation statement include?',
      answers: [
        'A claim, evidence from the workbook, and a risk or limitation',
        'Only the recommended depreciation method name',
        'A list of all assets in the register',
        'The total cost of all assets'
      ],
      explanation: 'A professional recommendation states a claim, cites workbook evidence, and acknowledges risks or limitations.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">✨ Phase 4: Polish and Transfer Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Complete and Polish Your Rehearsal Workbook</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Now it is your turn to complete the shared rehearsal workbook. Your teacher may have
                    left some sections incomplete on purpose so you can practice filling them in.
                  </p>
                  <p>
                    Work through these tasks with your group:
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Verify all asset register entries are complete and accurate</li>
                    <li>Check that depreciation schedule formulas link correctly to the register</li>
                    <li>Confirm the method comparison sheet shows both straight-line and DDB results</li>
                    <li>Write a draft recommendation statement with claim, evidence, and risk</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900">Write Your Recommendation Statement</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Use this template to write your team's draft recommendation:</p>
                  <div className="p-4 bg-white rounded-lg border border-orange-200 space-y-3">
                    <div>
                      <p className="font-semibold text-orange-900">Claim:</p>
                      <p className="text-sm text-slate-600">We recommend using <strong>[method]</strong> for TechStart's fixed assets because...</p>
                    </div>
                    <div>
                      <p className="font-semibold text-orange-900">Evidence:</p>
                      <p className="text-sm text-slate-600">The Method Comparison sheet shows that <strong>[method]</strong> produces <strong>[specific number or pattern]</strong> in the first three years, compared to <strong>[other method]</strong> which produces <strong>[specific number]</strong>.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-orange-900">Risk / Limitation:</p>
                      <p className="text-sm text-slate-600">One limitation of this recommendation is <strong>[risk]</strong>. This matters because <strong>[explanation]</strong>.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">What Must Transfer to the Real Project?</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">List the features or structures from today's rehearsal that your team must recreate independently in the real project:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-2">Workbook Structures</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Four-sheet layout</li>
                        <li>Linked formulas between sheets</li>
                        <li>Book value check column</li>
                        <li>Method comparison table</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-2">Communication Moves</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Claim-evidence-risk recommendation</li>
                        <li>Cited workbook numbers</li>
                        <li>Clear sheet labels and headers</li>
                        <li>Professional formatting</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Transfer Check</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <ComprehensionCheck 
                    title="Transfer Readiness Check"
                    description="Confirm you know what carries into the real project"
                    questions={transferQuiz as any}
                    showExplanations
                  />
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
