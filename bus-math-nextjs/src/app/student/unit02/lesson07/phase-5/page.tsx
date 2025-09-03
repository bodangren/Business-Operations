'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[4]

const auditQuestions = [
  {
    id: 'a1',
    question: 'Which definition best fits “investor‑ready”?',
    answers: [
      'Clear, reliable, auditable with documented assumptions and concise summary',
      'Lots of hidden logic with perfect formatting',
      'Only visuals, no formulas',
      'Manual inputs with no checks'
    ],
    explanation: 'Investor‑ready means trustworthy numbers, transparent logic, and clear communication.'
  },
  {
    id: 'a2',
    question: 'What is the purpose of reconciliation tie‑outs?',
    answers: [
      'Prove totals match across sources and catch integrity issues',
      'Make the sheet look nice',
      'Add complexity for advanced users',
      'Speed up volatile functions'
    ],
    explanation: 'Tie‑outs confirm correctness across systems and prevent hidden errors.'
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🧪 Phase 5: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">QA Review and Peer Audit</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-orange-900">
                  <p>Use the Definition of Done as your audit checklist. Confirm exact matches, validation, reconciliation, and investor‑ready summary.</p>
                </CardContent>
              </Card>

              <ComprehensionCheck 
                questions={auditQuestions}
                title="Audit Decisions & Tradeoffs"
                description="Verify your understanding of investor‑readiness and tie‑outs"
                showExplanations={true}
              />

              <PeerCritiqueForm 
                projectTitle="TechStart Month‑End Dashboard"
                peerName="Your Peer"
                unitNumber={2}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

