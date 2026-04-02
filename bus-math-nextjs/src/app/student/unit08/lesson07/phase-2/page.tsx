'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[1]

export default function Phase2Page() {
  const vocabQuiz = [
    {
      id: 'v1',
      question: 'Which sheet lists each asset with cost, useful life, salvage value, and depreciation method?',
      answers: [
        'Asset Register',
        'Depreciation Schedule',
        'Method Comparison',
        'Recommendation'
      ],
      explanation: 'The Asset Register is the source of truth. Every asset starts here with its key details.'
    },
    {
      id: 'v2',
      question: 'Which sheet shows annual depreciation expense, accumulated depreciation, and book value over time?',
      answers: [
        'Depreciation Schedule',
        'Asset Register',
        'Method Comparison',
        'Recommendation'
      ],
      explanation: 'The Depreciation Schedule tracks how each asset loses value year by year.'
    },
    {
      id: 'v3',
      question: 'What is the purpose of the Method Comparison sheet?',
      answers: [
        'Show side-by-side results of different depreciation methods for the same assets',
        'List all assets and their purchase dates',
        'Calculate total company revenue',
        'Store the final recommendation text only'
      ],
      explanation: 'The Method Comparison sheet lets you see how straight-line and DDB produce different expense timing and book values.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">📋 Phase 2: Shared Artifact Orientation</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Your Shared Rehearsal Workbook</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Download the shared rehearsal workbook now. Every group in the class uses this
                    exact same file and dataset today. The numbers belong to TechStart Solutions —
                    Sarah's company as it expands and buys long-term assets.
                  </p>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 my-4">
                    <p className="mb-2 font-semibold text-blue-900">Download:</p>
                    <a href="/resources/unit08-rehearsal-workbook.xlsx" download className="text-blue-700 underline">
                      unit08-rehearsal-workbook.xlsx
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      This is the teacher-controlled dataset. Save a copy with your group name so you can
                      annotate it during today's rehearsal.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Workbook Map — What Each Sheet Proves</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Each sheet has a specific job in the evidence chain. Know what each one proves.</p>
                  <div className="space-y-3">
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900">1. Asset Register</h4>
                      <p className="text-sm">
                        <strong>Proves:</strong> What assets the company owns, what each cost, and how each is classified.
                        This is the source of truth. Every depreciation calculation traces back to entries here.
                      </p>
                      <p className="text-sm mt-1 text-slate-600">Key fields: Asset name, cost, useful life, salvage value, depreciation method, purchase date.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900">2. Depreciation Schedule</h4>
                      <p className="text-sm">
                        <strong>Proves:</strong> How each asset loses value year by year. Shows annual depreciation expense,
                        accumulated depreciation, and ending book value for every year of each asset's life.
                      </p>
                      <p className="text-sm mt-1 text-slate-600">Key check: Book Value = Cost − Accumulated Depreciation must hold every year.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900">3. Method Comparison</h4>
                      <p className="text-sm">
                        <strong>Proves:</strong> How different methods (straight-line vs. DDB) change expense timing and book value.
                        This sheet supports the method-choice recommendation.
                      </p>
                      <p className="text-sm mt-1 text-slate-600">Key output: side-by-side totals showing which method front-loads expense.</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900">4. Recommendation</h4>
                      <p className="text-sm">
                        <strong>Proves:</strong> Your team's depreciation policy decision with claim, evidence from the workbook,
                        and risk/limitation analysis. This is the final deliverable.
                      </p>
                      <p className="text-sm mt-1 text-slate-600">Key rule: Every number in the recommendation must cite a specific workbook cell or sheet.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">What Success Looks Like Today</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Shared workbook is open and saved with your group name</li>
                    <li>You can name all four sheets and explain what each one proves</li>
                    <li>You can trace one recommendation number back to the asset register</li>
                    <li>You understand the Definition of Done checklist</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Vocabulary and Structure Check</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Confirm you know the workbook structure before moving to the audit.</p>
                  <ComprehensionCheck 
                    title="Workbook Structure Check"
                    description="Quick check on sheet names and their roles in the evidence chain"
                    questions={vocabQuiz as any}
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
