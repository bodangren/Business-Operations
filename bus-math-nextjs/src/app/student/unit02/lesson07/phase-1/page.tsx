'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[0]

const rehearsalQuestions = [
  {
    id: 'q1',
    question: 'Why is every group using the same data today?',
    answers: [
      'So the whole class can compare reasoning and quality directly',
      'Because there is only one dataset available',
      'To make grading easier for the teacher',
      'So groups can copy each other\'s work'
    ],
    explanation: 'Shared rehearsal data lets every group see the same quality bar and compare how they trace evidence to recommendations.'
  },
  {
    id: 'q2',
    question: 'What is the main difference between today\'s rehearsal and the real project?',
    answers: [
      'Today is teacher-guided practice; the project requires independent work with your own scenario',
      'Today uses Excel; the project uses Google Sheets',
      'Today has no deadline; the project has a strict deadline',
      'There is no difference—they are the same'
    ],
    explanation: 'Today you rehearse with shared data and high guidance. In the project, your team works independently with a unique scenario.'
  },
  {
    id: 'q3',
    question: 'What should a strong project workbook include that today\'s rehearsal models?',
    answers: [
      'A clear evidence chain linking data to the final recommendation',
      'As many charts as possible',
      'Hidden formulas to protect intellectual property',
      'A long narrative summary with no numbers'
    ],
    explanation: 'The rehearsal models an evidence chain—each sheet or section proves something that supports the final recommendation.'
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">Phase 1: Rehearsal Purpose</Badge>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900">Why We Rehearse Before the Real Project</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-red-900">
                  <p>
                    Today is a <strong>guided rehearsal</strong>—not the real project. Every group in this class is working with the same data on purpose. This means you can compare your reasoning, your evidence chain, and your workbook quality directly with other teams.
                  </p>
                  <p className="mt-4">
                    In Lessons 08–10, your team will receive its own unique scenario and dataset. You will work more independently. Today's rehearsal exists so you can see exactly what a complete project workbook looks like before you build your own.
                  </p>
                  <p className="mt-4"><strong>What you should learn from today:</strong></p>
                  <ul className="list-disc list-inside">
                    <li>The exact structure every project workbook must follow</li>
                    <li>How to trace a recommendation back to supporting evidence</li>
                    <li>What the Definition of Done looks like in practice</li>
                    <li>Which checks and communication moves your team must carry into the real project</li>
                  </ul>
                  <p className="mt-4">
                    Sarah at TechStart Solutions needs a reliable month-end close system. Today you rehearse the quality standard. In the project, you will own it.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-900">Quick Check: Rehearsal vs. Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-900 mb-4">Answer these questions to confirm you understand today's purpose.</p>
                  <ComprehensionCheck 
                    questions={rehearsalQuestions}
                    title="Rehearsal Purpose Check"
                    description="Confirm you understand why we rehearse with shared data before the independent project"
                    showExplanations={true}
                  />
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
