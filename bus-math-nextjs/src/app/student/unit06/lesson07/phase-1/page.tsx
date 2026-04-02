'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, CheckCircle2, Flag, Users, Target, AlertTriangle } from "lucide-react"
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
  {
    id: 'u6l7-hook-3',
    question: 'What changes when your group starts the real project in Lesson 08?',
    answers: [
      'Your team gets a different business scenario, but the workbook structure and evidence chain stay the same.',
      'Your team gets a completely new workbook format that you have never seen before.',
      'Nothing changes — the project uses the exact same PedalFast data.',
      'The project has no workbook — only a slide presentation.',
    ],
    explanation: 'The business case changes, but the seven-sheet structure, the Definition of Done, and the evidence-tracing routine all carry forward.'
  },
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Rehearsal Purpose</Badge>
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
                    Lessons 1-6 taught you the pricing logic — markup, margin, break-even, Goal Seek, and sensitivity tables.
                    Lesson 07 shows what a complete, project-ready workbook should look like before your team starts building
                    its own scenario in Lessons 8-10.
                  </p>
                  <p className="text-lg leading-relaxed text-red-900">
                    Today, the whole class uses the same business case: <strong>PedalFast Bike Repair</strong>.
                    That is intentional. When everyone works from the same data, you can compare reasoning quality,
                    evidence chains, and workbook clarity directly — instead of wondering whether a different scenario
                    explains a weak recommendation.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-amber-900 font-medium flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-4 h-4" /> This is rehearsal, not the real project
                    </p>
                    <p className="text-amber-900 text-sm">
                      Today&apos;s workbook is a guided-practice version. In Lessons 8-10, your group will receive a different
                      business scenario and its own starter workbook. The structure stays the same — only the data changes.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-lg border bg-red-50 border-red-200">
                      <h4 className="font-semibold text-red-800 flex items-center gap-2"><Briefcase className="w-5 h-5" /> What today is</h4>
                      <ul className="list-disc list-inside text-red-900 text-sm">
                        <li>A guided rehearsal with one shared workbook</li>
                        <li>A model of what the project should include</li>
                        <li>A chance to practice auditing and explaining your results</li>
                        <li>High teacher guidance — you are practicing the standard, not inventing it</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border bg-green-50 border-green-200">
                      <h4 className="font-semibold text-green-800 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> What comes next</h4>
                      <ul className="list-disc list-inside text-green-900 text-sm">
                        <li>Lessons 8-10 give each group a different scenario</li>
                        <li>Teams reuse this workbook structure independently</li>
                        <li>The final project adds presentation and defense</li>
                        <li>Teacher guidance drops — your team owns the quality</li>
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

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2">
                    <Target className="w-5 h-5" /> What You Must Carry Into the Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 text-sm space-y-2">
                  <p className="font-medium">By the end of today, you should be able to answer:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>What must every project workbook include?</li>
                    <li>Where does the recommendation come from?</li>
                    <li>What evidence proves the recommendation is reasonable?</li>
                    <li>What would make this artifact feel weak or untrustworthy?</li>
                    <li>What parts of today&apos;s structure must my team recreate independently?</li>
                  </ol>
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
