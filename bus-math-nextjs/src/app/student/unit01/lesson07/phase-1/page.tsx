'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Target, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const standardsQuiz = [
  {
    id: "std-1",
    question: "In an investor-ready model, which lookup approach is correct?",
    answers: [
      "Use XLOOKUP (or INDEX/MATCH) with exact match and wrap with IFNA",
      "Use VLOOKUP with approximate match for speed",
      "Type values by hand to avoid formula errors",
      "Use OFFSET with volatile recalculation"
    ],
    explanation: "Professional models require exact-match lookups and clear error handling (IFNA/IFERROR)."
  },
  {
    id: "std-2",
    question: "Charts should reference which kind of ranges?",
    answers: [
      "Tables/structured references so visuals auto-expand",
      "Static ranges (A1:C10) for stability",
      "Hidden sheets with copied numbers",
      "Manual values entered into the chart"
    ],
    explanation: "Charts bound to structured references update as data grows and reduce maintenance risk."
  },
  {
    id: "std-3",
    question: "Which is the best definition of reconciliation?",
    answers: [
      "Tie-outs that prove totals match across sources (e.g., bank vs ledger)",
      "A colorful status page",
      "Deleting rows until the totals agree",
      "Hiding formulas to make the model cleaner"
    ],
    explanation: "Reconciliation creates trust by showing totals agree and errors are surfaced—not hidden."
  },
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    Production Kickoff: Investor-Ready by Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-red-900">
                    Sarah Chen’s morning starts with a message from a potential investor:
                    “We’re reviewing your model at 3 PM. Please send an audit‑ready version with
                    a one‑screen summary. We’ll ask follow‑up questions live.”
                  </p>
                  <p className="text-lg leading-relaxed text-red-900">
                    This is high‑pressure and very real. Investors trust models that are built
                    with exact references, clear error handling, and reconciliation checks. Today,
                    you’ll finish your Smart Ledger, harden it with QA, and prepare decision‑ready
                    outputs.
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border bg-red-50 border-red-200">
                      <h4 className="font-semibold text-red-800 flex items-center gap-2"><XCircle className="w-5 h-5" /> Failure Case</h4>
                      <ul className="list-disc list-inside text-red-900 text-sm">
                        <li>Hard‑coded numbers overwrite formulas</li>
                        <li>VLOOKUP approximate match returns wrong client</li>
                        <li>Charts point to A1:C10 and miss new rows</li>
                        <li>No tie‑out to prove totals match</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border bg-green-50 border-green-200">
                      <h4 className="font-semibold text-green-800 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Ready Example</h4>
                      <ul className="list-disc list-inside text-green-900 text-sm">
                        <li>XLOOKUP with exact match + IFNA("Not found")</li>
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
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <Target className="w-5 h-5" /> Do you know the standards?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={standardsQuiz as any}
                    title="Production Standards Check"
                    description="Confirm your understanding of exact lookups, structured refs, and reconciliation."
                    showExplanations={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Turn & Talk (3 minutes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-900 font-medium mb-2">What makes a model trustworthy under pressure?</p>
                  <ul className="list-disc list-inside text-yellow-900">
                    <li>Which standards give investors confidence most quickly?</li>
                    <li>Where does your current model still feel fragile?</li>
                    <li>What would you check first before sending the file?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

