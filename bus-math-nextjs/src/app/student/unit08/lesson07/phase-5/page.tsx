'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[4]

const transferQuiz = [
  {
    id: 'tc1',
    question: 'When auditing a partner\'s workbook, what should you focus on first?',
    answers: [
      'Whether the recommendation traces back to the asset register and schedule',
      'Whether the formatting looks colorful',
      'Whether they used the same group name as you',
      'Whether the file is saved in the right folder'
    ],
    explanation: 'The logic chain is the most important thing. A recommendation without traceable evidence is not trustworthy.'
  },
  {
    id: 'tc2',
    question: 'A good peer critique must include:',
    answers: [
      'One clear strength, one confusion point, and one specific improvement',
      'Only positive feedback',
      'A grade out of 100',
      'A list of every formula in the workbook'
    ],
    explanation: 'Peer critique should be balanced and specific. One strength, one confusion, and one improvement gives actionable feedback.'
  },
  {
    id: 'tc3',
    question: 'If a workbook\'s book value does not equal cost minus accumulated depreciation, what should you note in your audit?',
    answers: [
      'A formula error or hard-coded value that breaks the evidence chain',
      'Nothing — small differences are acceptable',
      'That the group used the wrong depreciation method',
      'That the workbook needs more sheets'
    ],
    explanation: 'Book Value = Cost − Accumulated Depreciation must always hold. If it does not, flag it as a formula or data integrity issue.'
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Transfer Check and Peer Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900">Peer Audit Against the Definition of Done</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Swap workbooks with another group. Use the Definition of Done checklist below to
                    evaluate their rehearsal workbook. Your job is to be a quality reviewer — the same
                    role you will play in the real project.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-900">Definition of Done Checklist</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Check each item. Mark Yes, Partial, or No with a brief note.</p>
                  <div className="space-y-2">
                    {[
                      'Asset Register has all required fields (name, cost, useful life, salvage value, method, purchase date)',
                      'Depreciation Schedule formulas link to the Asset Register (no hard-coded values)',
                      'Book Value = Cost − Accumulated Depreciation holds for every row',
                      'Method Comparison sheet shows at least two methods side by side',
                      'Recommendation includes a clear claim, workbook evidence, and risk/limitation',
                      'Every number in the recommendation cites a specific workbook source',
                      'Sheets are clearly labeled and professionally formatted'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white rounded border border-yellow-200">
                        <span className="text-yellow-700 font-mono text-sm mt-0.5">{i + 1}.</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <PeerCritiqueForm 
                projectTitle="Unit 08 Depreciation Rehearsal Workbook" 
                peerName="Partner Group" 
                unitNumber={8} 
              />

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Transfer Comprehension Check</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <ComprehensionCheck 
                    title="Audit and Transfer Readiness"
                    description="Confirm you understand the quality standard and peer audit process"
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
