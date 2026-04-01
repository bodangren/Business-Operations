'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, GitBranch, AlertTriangle, CheckCircle } from "lucide-react"

const currentPhase = lesson07Phases[2]

const recommendationTrace = [
  {
    step: 1,
    question: "What is the final recommendation?",
    answer: "The company should pursue the expansion because projected returns exceed the cost of capital.",
    source: "Dashboard sheet - Executive Summary section"
  },
  {
    step: 2,
    question: "What financial evidence supports this?",
    answer: "Projected ROI of 18%, payback in 2.3 years, and positive NPV based on 10% discount rate.",
    source: "Income Statement projections + Assumptions sheet"
  },
  {
    step: 3,
    question: "What are the three-statement links?",
    answer: "Revenue growth drives assets (Balance Sheet) → Cash flow improves (Cash Flow Statement)",
    source: "All three statements are linked via formulas"
  },
  {
    step: 4,
    question: "What could make this recommendation weak?",
    answer: "Key assumptions: 15% revenue growth, 8% cost inflation. If these vary, the conclusion may change.",
    source: "Assumptions sheet - sensitivity table"
  }
]

const weakArtifactSigns = [
  "Recommendation has no numbers attached",
  "Cannot trace a number back to its source",
  "Balance sheet does not balance (A ≠ L + E)",
  "Cash flow does not reconcile to balance sheet changes",
  "No risk or limitation mentioned",
  "Dashboard is empty or has static screenshots",
  "Assumptions are not documented"
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔍 Phase 3: Guided Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Search className="w-5 h-5" /> Trace the Recommendation to Evidence</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-purple-900">
                  <p>
                    A trustworthy project shows <strong>where every number comes from</strong>. Let's trace
                    the final recommendation back through the evidence chain.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Evidence Chain Walkthrough</h4>
                    {recommendationTrace.map((item) => (
                      <div key={item.step} className="mb-4 p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-sm font-bold text-purple-800">
                            {item.step}
                          </span>
                          <div>
                            <p className="font-medium">{item.question}</p>
                            <p className="mt-1">{item.answer}</p>
                            <p className="text-sm text-purple-600 mt-1">
                              <span className="font-semibold">Source:</span> {item.source}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-md p-4 mt-4">
                    <strong>Key insight:</strong> Notice how the recommendation in the Dashboard (step 1) 
                    is supported by numbers from the Income Statement and Assumptions (steps 2-3), 
                    and the whole story is consistent across all three statements (step 4).
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2"><GitBranch className="w-5 h-5" /> Three-Statement Integrity Check</CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900">
                  <p className="mb-3">The three statements must connect logically:</p>
                  <div className="flex flex-wrap justify-center gap-4 my-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-center">
                      <span className="font-semibold">Income Statement</span>
                      <p className="text-sm">Net Income →</p>
                    </div>
                    <div className="text-blue-400 text-2xl">→</div>
                    <div className="p-3 bg-green-100 rounded-lg text-center">
                      <span className="font-semibold">Balance Sheet</span>
                      <p className="text-sm">Retained Earnings</p>
                    </div>
                    <div className="text-green-400 text-2xl">→</div>
                    <div className="p-3 bg-yellow-100 rounded-lg text-center">
                      <span className="font-semibold">Cash Flow</span>
                      <p className="text-sm">Reconciliation</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Net Income from Income Statement → Retained Earnings on Balance Sheet</li>
                    <li>Balance Sheet changes → Cash Flow Statement operating activities</li>
                    <li>All three must be internally consistent</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> What Makes an Artifact Feel Weak?</CardTitle>
                </CardHeader>
                <CardContent className="text-red-900">
                  <p className="mb-3">If you see any of these signs, the project lacks credibility:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {weakArtifactSigns.map((sign, idx) => (
                      <li key={idx}>{sign}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Your Turn: Find the Evidence Chain</CardTitle>
                </CardHeader>
                <CardContent className="text-green-900">
                  <p className="mb-3">
                    In your shared workbook, locate the <strong>executive summary</strong> and trace one 
                    recommendation back to its sources:
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>What is the recommendation? (Dashboard)</li>
                    <li>What numbers support it? (Income Statement, Balance Sheet)</li>
                    <li>What assumptions make it true? (Assumptions sheet)</li>
                    <li>What could go wrong? (Risk/limitation statement)</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

