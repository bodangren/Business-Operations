'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { getUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5"

const currentPhase = lesson07Phases[4]

export default function Phase5Page() {
  const assessmentQuestions = getUnit06Phase5ComprehensionCheckItems({ lessonIds: ["lesson07"] })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><Scale className="w-5 h-5" /> Project Transfer Check</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900 text-sm">
                  This assessment is not just about PedalFast. It checks whether you understand what the upcoming project workbook must contain and how it should behave.
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Mini Comprehension Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={assessmentQuestions}
                    title="Workbook Quality and Audit Decisions"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><Users className="w-5 h-5" /> Peer Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-900 mb-3 text-sm">
                    Review your partner&apos;s rehearsal workbook as if you were checking whether they are ready for the group project.
                    Confirm the logic chain, the dashboard evidence, and the clarity of the final recommendation.
                  </p>
                  <p className="text-green-900 mb-3 text-sm">
                    Before you submit the form, tell your partner one clear strength, one confusing area, and one improvement they should carry into Lessons 8-10.
                  </p>
                  <PeerCritiqueForm projectTitle="Unit 06 Lesson 07 Rehearsal Workbook" peerName="Partner" unitNumber={6} />
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
