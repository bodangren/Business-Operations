'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Target, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const standardsQuiz = [
  {
    id: "u3l7-std-1",
    question: "Which lookup approach is investor‑ready?",
    answers: [
      "XLOOKUP (or INDEX/MATCH) with exact match, wrapped in IFNA/IFERROR",
      "VLOOKUP approximate match for faster results",
      "Manual copy/paste values into the output",
      "OFFSET with volatile recalculation"
    ],
    explanation: "Professional models require exact matches and clear error handling to prevent silent failures."
  },
  {
    id: "u3l7-std-2",
    question: "Charts should reference…",
    answers: [
      "Tables/structured references so visuals auto‑expand",
      "Static ranges (A1:C10) to ‘lock in’ data",
      "Hidden helper sheets with pasted numbers",
      "A single cell with a screenshot"
    ],
    explanation: "Binding visuals to tables ensures they grow with data and reduce maintenance risk."
  },
  {
    id: "u3l7-std-3",
    question: "Reconciliation means…",
    answers: [
      "Tie‑outs that prove totals match across sources",
      "Adding more colors to the dashboard",
      "Deleting rows until numbers agree",
      "Hiding complex formulas from viewers"
    ],
    explanation: "Reconciliation builds trust by showing where numbers come from and that totals truly match."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎬 Phase 1: Hook</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">Production Kickoff: Investor Review at 3 PM</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-red-900">
                  <p>
                    Sarah Chen gets a message from a potential investor: “Please send an
                    audit‑ready version of your model and a one‑screen summary by 3 PM. We will
                    ask follow‑up questions live.”
                  </p>
                  <p>
                    Pressure is real. Trust comes from exact references, clear error messages,
                    and visible reconciliation. Today you will finish your Unit 03 model, harden
                    it with QA, and package insights for fast decisions.
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border bg-red-50 border-red-200 text-left">
                      <h4 className="font-semibold text-red-800 flex items-center gap-2"><XCircle className="w-5 h-5" /> Failure Case</h4>
                      <ul className="list-disc list-inside text-sm">
                        <li>Hard‑coded numbers overwrite formulas</li>
                        <li>Approximate lookups return wrong clients</li>
                        <li>Charts point to A1:C10 and miss new rows</li>
                        <li>No tie‑out to prove totals match</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border bg-green-50 border-green-200 text-left">
                      <h4 className="font-semibold text-green-800 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Ready Example</h4>
                      <ul className="list-disc list-inside text-sm text-green-900">
                        <li>XLOOKUP exact match + IFNA("Not found")</li>
                        <li>Named ranges and structured references</li>
                        <li>Charts bound to tables; auto‑expanding</li>
                        <li>Reconciliation section shows balance checks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><Target className="w-5 h-5" /> Standards Quick Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={standardsQuiz as any}
                    title="Production Standards Check"
                    description="Confirm exact lookups, structured refs, and reconciliation."
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><Users className="w-5 h-5" /> Turn & Talk (3 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-yellow-900">
                  <p className="font-medium mb-2">What makes a model trustworthy under pressure?</p>
                  <ul className="list-disc list-inside">
                    <li>Which standards give investors confidence fastest?</li>
                    <li>Where does your model still feel fragile?</li>
                    <li>What is the first check you would run?</li>
                  </ul>
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

