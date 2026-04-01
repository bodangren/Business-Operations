import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Users, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[4]

const transferQuestions = [
  {
    id: "u05l07-transfer-1",
    question:
      "When your team gets its own dataset in Lesson 08, which part of today's structure stays the same?",
    answers: [
      "The workbook tabs and calculation logic",
      "The exact employee names and hours",
      "The teacher's grading rubric",
      "Nothing stays the same"
    ],
    explanation:
      "The workbook structure (tabs, formulas, validation rules) stays the same. Only the data changes - your team gets its own payroll scenario."
  },
  {
    id: "u05l07-transfer-2",
    question:
      "What should your team's recommendation in Lesson 08 be based on?",
    answers: [
      "Evidence from your team's own calculations",
      "Whatever the teacher recommends",
      "Guessing without checking the workbook",
      "Copying today's recommendation"
    ],
    explanation:
      "Every team must trace their recommendation back to evidence in their own workbook. That's the core skill this unit builds."
  },
  {
    id: "u05l07-transfer-3",
    question:
      "What is the most important thing to check before submitting your project workbook?",
    answers: [
      "That calculations tie together and evidence supports the recommendation",
      "That the font looks professional",
      "That you used the same colors as the teacher",
      "That every cell has a different formula"
    ],
    explanation:
      "The Definition of Done focuses on accuracy and evidence. If calculations tie and evidence supports the recommendation, the workbook is ready."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">Phase 5: Transfer Check & Peer Audit</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Verify Your Readiness for the Project</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              First, confirm you understand what must transfer to your team's independent work. Then conduct
              a peer audit using the Definition of Done.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Transfer Check"
            description="Confirm you understand what changes and what stays the same in Lessons 08–10."
            questions={transferQuestions}
            showExplanations={true}
          />

          <Card className="border-yellow-200 bg-white">
            <CardHeader>
              <CardTitle className="text-yellow-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Peer Audit: Definition of Done
              </CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-900 space-y-4">
              <p>
                Swap workbooks with a partner. Review their completed work and check each item below.
                Provide one specific strength and one specific improvement.
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-semibold mb-2">Audit Checklist:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Payroll calculations accurate for all employees</li>
                  <li>Reconciliation tie‑outs pass (register = bank within $0.01)</li>
                  <li>Executive summary has one clear recommendation with evidence</li>
                  <li>Validation rules catch invalid inputs</li>
                  <li>Charts use structured references (not fixed ranges)</li>
                  <li>Error messages guide users on lookup failures</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Peer Critique Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PeerCritiqueForm 
                projectTitle="Unit 05 PayDay Rehearsal" 
                peerName="Partner" 
                unitNumber={5} 
              />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
