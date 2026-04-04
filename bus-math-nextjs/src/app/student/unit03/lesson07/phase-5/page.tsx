'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, CheckCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"

const currentPhase = lesson07Phases[4]

const transferQuiz = [
  {
    id: "u3l7-tfr-1",
    question: "What are the five sheets every project workbook must have?",
    answers: [
      "Income Statement, Balance Sheet, Cash Flow Statement, Assumptions, Dashboard",
      "Cover page, Instructions, Data, Analysis, Conclusion",
      "Revenue, Expenses, Assets, Liabilities, Equity",
      "Input, Calculation, Output, Charts, Summary"
    ],
    explanation: "The standard structure is Income Statement → Balance Sheet → Cash Flow Statement → Assumptions → Dashboard."
  },
  {
    id: "u3l7-tfr-2",
    question: "What makes a recommendation trustworthy?",
    answers: [
      "Numbers from the statements back it up, and a risk is stated",
      "It sounds confident and positive",
      "It uses large fonts and bold colors",
      "It matches what everyone else recommends"
    ],
    explanation: "A trustworthy recommendation connects to evidence from the three statements and acknowledges limitations."
  },
  {
    id: "u3l7-tfr-3",
    question: "What is the evidence chain?",
    answers: [
      "The path from recommendation → supporting numbers → source sheets",
      "A chain of emails between team members",
      "The order of sheets in the workbook",
      "A list of all formulas used"
    ],
    explanation: "The evidence chain traces every number in the recommendation back to its source in the statements."
  }
]

const auditCriteria = [
  { criterion: "Structure", check: "All five sheets present and named correctly" },
  { criterion: "Balance", check: "Balance sheet balances (A = L + E)" },
  { criterion: "Links", check: "Three statements are linked via formulas" },
  { criterion: "Evidence", check: "Recommendation has numbers from statements" },
  { criterion: "Risk", check: "At least one limitation or risk stated" },
  { criterion: "Clarity", check: "Dashboard shows KPIs with labels" }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Transfer Check and Peer Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><Scale className="w-5 h-5" /> Transfer Check: What Must Be in Every Project</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900">
                  <p className="mb-3">Answer these questions to confirm you understand the project standard:</p>
                  <ComprehensionCheck
                    questions={transferQuiz}
                    title="Project Standards Transfer Check"
                    description="Confirm you can name the structure and explain what makes it trustworthy"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><Users className="w-5 h-5" /> Peer Audit with Explicit Criteria</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  <p className="mb-4">
                    Exchange workbooks with a partner. Use the criteria below to evaluate their work.
                    Focus on the evidence chain, not just formatting.
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="text-left p-2 border border-blue-200">Criterion</th>
                          <th className="text-left p-2 border border-blue-200">What to Check</th>
                        </tr>
                      </thead>
                      <tbody>
                        {auditCriteria.map((item, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                            <td className="p-2 border border-blue-100 font-medium">{item.criterion}</td>
                            <td className="p-2 border border-blue-100">{item.check}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <PeerCritiqueForm projectTitle="Unit 03 Project Rehearsal" peerName="Partner" unitNumber={3} />
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Audit Requirements</CardTitle>
                </CardHeader>
                <CardContent className="text-green-900">
                  <p className="mb-3">Your peer audit must identify:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800">One Strength</h5>
                      <p className="text-sm">What does this workbook do well? Give a specific example.</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800">One Improvement</h5>
                      <p className="text-sm">What would make this more trustworthy? Be specific.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-sm text-gray-600">
                Career tie: This audit routine mirrors what analysts do in consulting - quality control before client delivery.
              </div>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

