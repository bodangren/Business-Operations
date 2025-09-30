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
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><Scale className="w-5 h-5" /> Investor‑Ready Standards</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900">
                  Clarity, reliability, audit trail, and documented assumptions. A pricing model should tell a clean story 
                  and make decision‑making fast. If an input changes, every linked output must update with no manual edits.
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Mini Comprehension Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={assessmentQuestions}
                    title="Audit Decisions & Tradeoffs"
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
                    Use the Definition of Done checklist while completing this peer review. Confirm exact lookups, 
                    structured references, reconciliation, chart bindings, and error handling.
                  </p>
                  <PeerCritiqueForm projectTitle="Unit 06 PriceLab – Investor Readiness" peerName="Partner" unitNumber={6} />
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
