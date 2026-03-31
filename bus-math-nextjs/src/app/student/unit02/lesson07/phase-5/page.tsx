'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { ClipboardCheck, Users } from "lucide-react"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson07Phases[4]

const transferQuestions = toComprehensionCheckFormat(
  getQuestionsForLesson("lesson07")
)

const auditCriteria = [
  {
    criterion: "Evidence Chain",
    question: "Does every claim on the Recommendation sheet cite specific numbers from another sheet?",
    strength: "Claims are backed by exact figures I can verify on the source sheet",
    improvement: "Claims reference vague concepts like 'low revenue' without citing numbers"
  },
  {
    criterion: "Logic Chain",
    question: "Do the numbers on the Recommendation sheet match the numbers on the Financial Statements sheet?",
    strength: "All cited numbers match their source sheets exactly",
    improvement: "Numbers on the Recommendation sheet do not match the Financial Statements sheet"
  },
  {
    criterion: "Risk Statement",
    question: "Is the risk statement specific and tied to the data, or is it a generic disclaimer?",
    strength: "Names a specific uncertainty with measurable impact (e.g., 'If client X delays payment, cash drops below 4 weeks')",
    improvement: "Uses vague language like 'there may be risks we did not consider'"
  },
  {
    criterion: "Auditability",
    question: "Does the Assumptions sheet include date, version, and data source?",
    strength: "Assumptions sheet is complete and clearly labeled",
    improvement: "Assumptions sheet is missing, has no date, or does not name the data source"
  },
  {
    criterion: "Clarity",
    question: "Could someone who did not build this workbook understand the recommendation in under 30 seconds?",
    strength: "The recommendation is one clear sentence with evidence listed below it",
    improvement: "The recommendation is buried in a long paragraph with no clear claim"
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 5: Transfer Check and Peer Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8">

              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5" />
                    Transfer Check: Do You Understand the Project Standard?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-900 mb-4">
                    Answer these questions to confirm you understand what a complete project workbook looks like and how to evaluate one.
                  </p>
                  <ComprehensionCheck
                    questions={transferQuestions}
                    title="Project Standard Transfer Check"
                    description="Verify your understanding of the Definition of Done, evidence chains, and peer audit criteria"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Peer Audit Routine
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-orange-900">
                  <p>
                    Exchange your recommendation statement (from Phase 4) with another group. Use the criteria below to evaluate their work. For each criterion, identify <strong>one clear strength</strong> and <strong>one clear improvement</strong>.
                  </p>
                  <div className="space-y-4 mt-6 not-prose">
                    {auditCriteria.map((row) => (
                      <div key={row.criterion} className="p-4 bg-white rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900">{row.criterion}</h4>
                        <p className="text-sm text-orange-700 mt-1">{row.question}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                          <div className="p-2 bg-green-50 border border-green-200 rounded text-sm">
                            <span className="font-medium text-green-800">Strength looks like:</span>
                            <p className="text-green-700 mt-1">{row.strength}</p>
                          </div>
                          <div className="p-2 bg-red-50 border border-red-200 rounded text-sm">
                            <span className="font-medium text-red-800">Improvement needed when:</span>
                            <p className="text-red-700 mt-1">{row.improvement}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Submit Your Peer Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-900 mb-4">
                    Use the form below to record your audit findings. Be specific — cite exact phrases or numbers from the workbook you reviewed.
                  </p>
                  <PeerCritiqueForm
                    projectTitle="TechStart Month-End Rehearsal Workbook"
                    peerName="Peer Group"
                    unitNumber={2}
                  />
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
