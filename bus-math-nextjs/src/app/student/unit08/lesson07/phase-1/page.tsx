'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[0]

export default function Phase1Page() {
  const quiz = [
    {
      id: 'q1',
      question: 'Why does every group use the same dataset today?',
      answers: [
        'So we can compare workbook quality and reasoning directly',
        'Because there is only one dataset available',
        'So everyone gets the same grade',
        'To make the project easier'
      ],
      explanation: 'Shared data means every group sees the same quality bar. You can compare how different teams reason about the same numbers.'
    },
    {
      id: 'q2',
      question: 'What is the main purpose of today\'s rehearsal?',
      answers: [
        'Practice the exact workbook structure before the real project',
        'Learn a new depreciation method',
        'Build a brand-new workbook from scratch',
        'Present final results to the class'
      ],
      explanation: 'Today is guided practice. You rehearse the structure, evidence chain, and quality standard so you know exactly what to do when you get your own dataset next lesson.'
    },
    {
      id: 'q3',
      question: 'What changes in the real project compared to today?',
      answers: [
        'Each group gets its own dataset and works more independently',
        'Nothing changes — today is the project',
        'You work alone instead of in groups',
        'The depreciation methods change completely'
      ],
      explanation: 'Next lesson each group receives a unique fixed-asset scenario. The workbook structure stays the same, but you will own the analysis.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Rehearsal Purpose</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900">Why We Rehearse Before the Real Project</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Today is your final guided rehearsal before the real depreciation project.
                    Every group in the class is working with the <strong>same shared dataset</strong> —
                    and that is intentional.
                  </p>
                  <p>
                    When everyone uses the same numbers, you can compare workbook quality,
                    reasoning, and clarity directly. You will see what a strong recommendation
                    looks like, trace it back to the asset register and schedule, and practice
                    the peer-audit routine you will need next lesson.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Today vs. The Real Project</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">Today — Rehearsal</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Shared teacher dataset</li>
                        <li>High teacher guidance</li>
                        <li>Practice the workbook structure</li>
                        <li>Learn the Definition of Done</li>
                        <li>Peer audit with same data</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">Next Lesson — Real Project</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Group-specific dataset</li>
                        <li>Independent group work</li>
                        <li>Apply the same structure</li>
                        <li>Meet the same quality standard</li>
                        <li>Defend your own recommendation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-900">Check Your Understanding</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Make sure you understand why today looks different from the real project.</p>
                  <ComprehensionCheck 
                    title="Rehearsal vs. Project"
                    description="Confirm you understand today's purpose and what changes next lesson"
                    questions={quiz as any}
                    showExplanations
                  />
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Turn and Talk</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>What would make a depreciation workbook feel weak or untrustworthy to a manager?</li>
                    <li>Which part of the workbook structure do you feel least confident about right now?</li>
                    <li>What does &quot;tracing a recommendation back to evidence&quot; mean in your own words?</li>
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
