'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, CheckCircle2, Flag, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const hookQuestions = [
  {
    id: 'u6l7-hook-1',
    question: 'Why is Lesson 07 useful before the group project begins?',
    answers: [
      'It lets everyone rehearse the exact workbook structure and quality standard before working more independently.',
      'It replaces the group project so Lessons 8-10 are optional.',
      'It gives every group a different business scenario to keep secret.',
      'It is only for practicing chart colors and slide design.',
    ],
    explanation: 'Lesson 07 is a shared rehearsal. Everyone sees the same workbook expectations before teams move into different project scenarios.'
  },
  {
    id: 'u6l7-hook-2',
    question: 'What should students learn from the shared PedalFast workbook?',
    answers: [
      'How the final project workbook should be organized, checked, and explained.',
      'How to memorize one perfect recommendation and use it for every business.',
      'How to avoid using supporting sheets once a dashboard exists.',
      'How to skip cost sorting because the dashboard matters more.',
    ],
    explanation: 'The point is transfer. Students practice the structure, workflow, and evidence standard they will later apply to a new scenario.'
  },
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Flag className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    One Last Guided Rehearsal Before the Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-red-900">
                    Lessons 1-6 taught you the pricing logic. Lesson 07 shows what a complete, project-ready workbook
                    should look like before your team starts building its own scenario in Lessons 8-10.
                  </p>
                  <p className="text-lg leading-relaxed text-red-900">
                    Today, the whole class uses the same business case: <strong>PedalFast Bike Repair</strong>.
                    That means everyone can focus on the real goal: understanding the structure, evidence, and
                    quality standard for the project workbook.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-lg border bg-red-50 border-red-200">
                      <h4 className="font-semibold text-red-800 flex items-center gap-2"><Briefcase className="w-5 h-5" /> What today is</h4>
                      <ul className="list-disc list-inside text-red-900 text-sm">
                        <li>A guided rehearsal with one shared workbook</li>
                        <li>A model of what the project should include</li>
                        <li>A chance to practice auditing and explaining your results</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border bg-green-50 border-green-200">
                      <h4 className="font-semibold text-green-800 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> What comes next</h4>
                      <ul className="list-disc list-inside text-green-900 text-sm">
                        <li>Lessons 8-10 give each group a different scenario</li>
                        <li>Teams reuse this workbook structure independently</li>
                        <li>The final project adds presentation and defense</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ComprehensionCheck
                questions={hookQuestions as any}
                title="Why Rehearse the Project?"
                description="Check that you understand the purpose of Lesson 07 before building."
                showExplanations={true}
              />

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Turn and Talk (3 minutes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900 font-medium mb-2">If a teacher or investor opened your workbook for only 30 seconds, what would they need to understand immediately?</p>
                  <ul className="list-disc list-inside text-blue-900 text-sm space-y-1">
                    <li>Where would they look first?</li>
                    <li>What numbers would prove your recommendation?</li>
                    <li>What would make the workbook feel confusing or weak?</li>
                  </ul>
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
