'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Target } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const purposeQuiz = [
  {
    id: "u4l7-purp-1",
    question: "Why are we using the same data as the teacher today?",
    answers: [
      "So every group sees the same quality bar and can compare reasoning directly",
      "Because the computer lab only has one dataset",
      "To save time copying files",
      "Because the lesson wasn't finished last year"
    ],
    explanation: "Shared data lets the class compare the quality of reasoning and evidence directly."
  },
  {
    id: "u4l7-purp-2",
    question: "What's the difference between today's rehearsal and the real project?",
    answers: [
      "Today we practice with shared data; next lesson each team gets its own scenario",
      "Today's work is graded; the real project is extra credit",
      "Today uses Excel; the project uses Google Sheets",
      "Today has fewer requirements than the project"
    ],
    explanation: "Rehearsal uses shared data for guided practice; the project lets each team tackle its own scenario."
  },
  {
    id: "u4l7-purp-3",
    question: "What should you learn from this rehearsal?",
    answers: [
      "What a complete project workbook must include and how to trace evidence to a recommendation",
      "How to use a new Excel function",
      "How to speed up data entry",
      "How to format charts prettily"
    ],
    explanation: "You should learn the project structure and evidence chain you must recreate in your own project."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎬 Phase 1: Rehearsal Purpose</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center gap-2"><Play className="w-5 h-5" /> Why This Rehearsal?</CardTitle>
                </CardHeader>
                <CardContent className="text-red-900 space-y-4">
                  <p className="text-lg">
                    Before you tackle your own café analysis project in Lessons 8-10, we're pausing for one 
                    guided rehearsal with <span className="font-semibold">shared teacher data</span>.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Same data, today</p>
                        <p>Every group works with the exact same café weekend dataset. This isn't accidental — it's so you can compare your reasoning and evidence quality directly with classmates.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Guided practice for your project</p>
                        <p>Today reveals exactly what a complete project workbook must contain — the evidence chain, the Definition of Done, and how to trace a recommendation back to data.</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    <span className="font-semibold">Next lesson:</span> Each team gets its own café scenario and dataset. 
                    The structure you learn today is what you'll carry forward into the real project.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Quick Check: Understanding the Rehearsal</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={purposeQuiz}
                    title="Why This Matters"
                    description="Confirm you understand the purpose of today's shared practice"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}