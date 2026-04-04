'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users, CheckCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"

const currentPhase = lesson07Phases[4]

const transferCheckQuestions = [
  {
    id: "u4l7-xfer-1",
    question: "What is the evidence chain?",
    answers: [
      "The path from raw data → analysis → forecast → dashboard → recommendation",
      "The process of printing the workbook",
      "The way Excel calculates formulas",
      "The order of sheet tabs in the workbook"
    ],
    explanation: "The evidence chain is the path every number takes from raw data to the final recommendation."
  },
  {
    id: "u4l7-xfer-2",
    question: "A peer's recommendation says 'expand the café'. What evidence should you look for?",
    answers: [
      "A claim backed by specific numbers from the Dashboard/Analysis/Forecasting sheets",
      "Pretty charts with lots of colors",
      "A long paragraph without numbers",
      "A recommendation that matches what you would say"
    ],
    explanation: "Look for specific numbers that can be traced back to the raw data."
  },
  {
    id: "u4l7-xfer-3",
    question: "What makes a peer audit useful?",
    answers: [
      "Specific feedback on evidence, logic, and clarity — not just 'looks good'",
      "Compliments about the font choice",
      "A quick glance and 'this is fine'",
      "Completing it without reading the work"
    ],
    explanation: "A useful audit gives specific feedback on evidence quality and logic clarity."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Transfer Check and Peer Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-yellow-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><Scale className="w-5 h-5" /> Comprehension Check: Evidence and Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={transferCheckQuestions as any}
                    title="Transfer Check"
                    description="Confirm you understand the evidence chain and audit criteria"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2"><Users className="w-5 h-5" /> Peer Audit — Focus on Evidence and Clarity</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900 space-y-4">
                  <p className="text-lg">
                    Exchange work with a partner. Use the Definition of Done to evaluate their workbook. 
                    This is about quality control, not grading.
                  </p>

                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                    <p className="font-semibold mb-3">Audit Criteria (Definition of Done):</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                        <span>Data sheet is clean and analysis-ready</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                        <span>Analysis sheet shows descriptive stats (average, median, spread)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                        <span>Forecasting sheet has trend + regression with limits stated</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                        <span>Dashboard has at least 2 decision-ready visuals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                        <span>Recommendation has claim + evidence + risk</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                        <span>Evidence trace works: every number can go back to raw data</span>
                      </div>
                    </div>
                  </div>

                  <PeerCritiqueForm 
                    projectTitle="Unit 04 Café Analysis Rehearsal" 
                    peerName="Partner" 
                    unitNumber={4}
                  />
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Audit Focus — Strengths and Improvements</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900 space-y-4">
                  <p>After completing the audit, write down:</p>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg space-y-4">
                    <div>
                      <p className="font-semibold mb-2">One clear strength (give specific evidence):</p>
                      <p className="text-sm text-gray-600">Example: "The recommendation includes the exact 15% growth number from the forecast sheet"</p>
                      <div className="border-b border-blue-300 mt-2" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2">One clear improvement (give specific evidence):</p>
                      <p className="text-sm text-gray-600">Example: "The risk statement is missing — add what could go wrong"</p>
                      <div className="border-b border-blue-300 mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700 font-medium">
                  <span className="font-semibold">Career connection:</span> Analyst workflow — build → validate → recommend
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}