'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5"

const currentPhase = lesson07Phases[4]
const auditMiniQuiz = getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson07"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><Scale className="w-5 h-5" /> Investor‑Ready Standard</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Clarity: One‑screen summary with readable visuals</li>
                    <li>Reliability: Exact references, validations, reconciliation tie‑outs</li>
                    <li>Audit trail: Assumptions documented; formulas transparent</li>
                    <li>Decisions: Summary states risks, thresholds, and a recommendation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Mini Comprehension Check: Audit Decisions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={auditMiniQuiz as any}
                    title="QA & Audit Decisions"
                    description="Common tradeoffs and how to resolve them"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2"><Users className="w-5 h-5" /> Peer Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-emerald-900">
                    Use the Definition of Done checklist to review your partner’s model. Document your
                    feedback below. Focus on standards, not style.
                  </p>
                  <PeerCritiqueForm projectTitle="Unit 04 Café Forecast" peerName="Partner" unitNumber={4} />
                </CardContent>
              </Card>

              <div className="text-sm text-gray-600">
                Career tie: Analyst/consultant workflow — build → validate → insights → recommend.
              </div>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

