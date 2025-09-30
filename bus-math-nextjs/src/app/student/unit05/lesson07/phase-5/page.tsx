import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Users } from "lucide-react"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"
import { drawUnit05Phase5ComprehensionCheckItems } from "@/data/question-banks/unit05-phase5"

const currentPhase = lesson07Phases[4]
const auditQuestions = drawUnit05Phase5ComprehensionCheckItems(2, { lessonIds: ["lesson07"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">🧪 Phase 5: Assessment & Peer Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900">QA Review and Peer Audit</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900">
                  <p className="mb-2">Use the Definition of Done as your audit checklist. Confirm:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Exact‑match lookups with IFNA/IFERROR guidance</li>
                    <li>Tables and structured references across all links and charts</li>
                    <li>Validation rules and fresh AsOfDate</li>
                    <li>Reconciliation differences explained, not hidden</li>
                    <li>Executive summary changes by scenario</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2"><Users className="w-5 h-5" /> Peer Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <PeerCritiqueForm projectTitle="Unit 05 PayDay – Investor Readiness" peerName="Partner" unitNumber={5} />
                </CardContent>
              </Card>

              <ComprehensionCheck
                title="Audit Decisions & Tradeoffs"
                description="Quick check on quality standards and why they matter."
                questions={auditQuestions}
                showExplanations={true}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

