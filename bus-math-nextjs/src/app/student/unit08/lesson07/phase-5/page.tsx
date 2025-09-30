'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { getUnit08Phase5ComprehensionCheckItems } from "@/data/question-banks/unit08-phase5"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[4]

export default function Phase5Page() {
  const auditQuiz = getUnit08Phase5ComprehensionCheckItems({ lessonIds: ["lesson07"] })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900">QA Review & Peer Audit</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    With a partner, use the Definition of Done checklist to audit the model. Confirm exact
                    lookups, structured references, validations, and reconciliation. Write clear notes and
                    decide if the model is investor‑ready today.
                  </p>
                </CardContent>
              </Card>

              <PeerCritiqueForm projectTitle="Unit 08 Year‑1 Startup Model" peerName="Partner" unitNumber={8} />

              <ComprehensionCheck 
                title="Audit Decisions & Tradeoffs"
                description="Quick check: quality standards and review decisions"
                questions={auditQuiz}
                showExplanations
              />

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Career Tie‑In</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p>
                    This is the analyst/consultant workflow: build → validate → insights → recommend. Your
                    model and audit notes show clients you can be trusted with decisions.
                  </p>
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
