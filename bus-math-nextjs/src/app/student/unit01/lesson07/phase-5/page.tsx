'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CheckCircle, Target } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"

const currentPhase = lesson07Phases[4]

const transferQuestions = [
  {
    id: "t1",
    question: "What's the main reason we used shared data today?",
    answers: [
      "So everyone could compare the same quality bar directly",
      "Because the teacher couldn't find more datasets",
      "To make the project easier",
      "To save paper"
    ],
    explanation: "Shared data lets the whole class compare reasoning and quality standards directly."
  },
  {
    id: "t2",
    question: "What should your group reuse from today's rehearsal?",
    answers: [
      "The sheet structure, error checks, and recommendation format",
      "Nothing—start completely from scratch",
      "Only the colors and fonts",
      "Only the exact numbers"
    ],
    explanation: "Reuse the structure, checks, and format—you'll use your own data in the real project!"
  },
  {
    id: "t3",
    question: "What should a peer audit focus on?",
    answers: [
      "Logic chain, evidence, and clarity",
      "How pretty the colors are",
      "How fast someone finished",
      "How many sheets there are"
    ],
    explanation: "Peer audits should focus on whether the logic makes sense, evidence supports the claim, and everything is clear."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-rose-100 text-rose-800 text-lg px-4 py-2">🔄 Phase 5: Transfer Check and Peer Audit</Badge>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-rose-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Target className="w-6 h-6 text-rose-700" /> Transfer Check
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={transferQuestions as any}
                    title="Transfer Check"
                    description="Confirm you understand what to carry forward to the real project."
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <Users className="w-6 h-6" /> Peer Audit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-900">
                    Swap workbooks with a partner. Use the criteria below to give feedback:
                  </p>
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Peer Audit Criteria:</h4>
                    <ul className="list-disc list-inside text-gray-800 space-y-1">
                      <li><strong>Evidence:</strong> Can you trace the recommendation back to numbers in the workbook?</li>
                      <li><strong>Logic:</strong> Does the trial balance show "Balanced" when it should?</li>
                      <li><strong>Clarity:</strong> Is the recommendation easy to understand?</li>
                      <li><strong>Risk:</strong> Is there at least one clear limitation or risk mentioned?</li>
                    </ul>
                  </div>
                  <PeerCritiqueForm
                    projectTitle="Project Rehearsal Audit"
                    peerName="Partner"
                    unitNumber={1}
                  />
                  <div className="flex items-center gap-2 text-green-900 mt-2">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                    <span>Write at least one clear strength and one clear improvement.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
