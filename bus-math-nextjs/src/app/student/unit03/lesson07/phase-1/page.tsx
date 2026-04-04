'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Target, MessageSquare } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const standardsQuiz = [
  {
    id: "u3l7-std-1",
    question: "Which lookup approach is investor‑ready?",
    answers: [
      "XLOOKUP (or INDEX/MATCH) with exact match, wrapped in IFNA/IFERROR",
      "VLOOKUP approximate match for faster results",
      "Manual copy/paste values into the output",
      "OFFSET with volatile recalculation"
    ],
    explanation: "Professional models require exact matches and clear error handling to prevent silent failures."
  },
  {
    id: "u3l7-std-2",
    question: "Charts should reference…",
    answers: [
      "Tables/structured references so visuals auto‑expand",
      "Static ranges (A1:C10) to 'lock in' data",
      "Hidden helper sheets with pasted numbers",
      "A single cell with a screenshot"
    ],
    explanation: "Binding visuals to tables ensures they grow with data and reduce maintenance risk."
  },
  {
    id: "u3l7-std-3",
    question: "Reconciliation means…",
    answers: [
      "Tie‑outs that prove totals match across sources",
      "Adding more colors to the dashboard",
      "Deleting rows until numbers agree",
      "Hiding complex formulas from viewers"
    ],
    explanation: "Reconciliation builds trust by showing where numbers come from and that totals truly match."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎬 Phase 1: Rehearsal Purpose</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Play className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">Project Rehearsal: Why We Practice First</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-red-900">
                  <p>
                    Today is not the real project. Today you rehearse with the same data your teacher uses
                    so you can see exactly what a quality project looks like before you build your own.
                  </p>
                  <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Why We Use the Same Data</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Everyone sees the same quality bar - no confusion about what "good" looks like</li>
                      <li>You can compare your reasoning with classmates directly</li>
                      <li>The teacher can model exactly where evidence comes from</li>
                      <li>You practice the structure once, then apply it to your own scenario next lesson</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-md p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Today vs. Next Lesson</h4>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-blue-200">
                          <th className="text-left py-2 pr-4">Today (Rehearsal)</th>
                          <th className="text-left py-2">Next Lesson (Project)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-blue-100">
                          <td className="py-2 pr-4">Same data as teacher</td>
                          <td className="py-2">Your team's own business scenario</td>
                        </tr>
                        <tr className="border-b border-blue-100">
                          <td className="py-2 pr-4">Teacher guides the structure</td>
                          <td className="py-2">You apply what you practiced</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Focus on audit and evidence</td>
                          <td className="py-2">Focus on your specific business story</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><Target className="w-5 h-5" /> What You Will Learn Today</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>What a complete project workbook must contain</li>
                    <li>How to trace a recommendation back to evidence across all three statements</li>
                    <li>What makes an artifact feel trustworthy vs. weak</li>
                    <li>Which features you must recreate in your own project</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><Users className="w-5 h-5" /> Standards Quick Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={standardsQuiz}
                    title="Project Standards Check"
                    description="Confirm your understanding of what makes a workbook trustworthy."
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><MessageSquare className="w-5 h-5" /> Turn & Talk (3 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-purple-900">
                  <p className="font-medium mb-2">What does "rehearsal" mean for a business project?</p>
                  <ul className="list-disc list-inside">
                    <li>Why would a musician or actor rehearse before the real performance?</li>
                    <li>What is the risk of skipping rehearsal and going straight to "the real thing"?</li>
                    <li>What do you want to be sure you can do confidently before your team gets its own data?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}