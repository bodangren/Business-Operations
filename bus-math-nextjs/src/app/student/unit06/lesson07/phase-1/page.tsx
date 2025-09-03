'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Target, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const standardsQuiz = [
  {
    id: "u6l7-std-1",
    question: "For scenario pricing, what lookup pattern builds investor trust?",
    answers: [
      "XLOOKUP (or INDEX/MATCH) with exact match wrapped in IFNA",
      "VLOOKUP approximate match because it's faster",
      "Manual copy/paste numbers into outputs",
      "OFFSET() references to auto-shift data"
    ],
    explanation: "Exact-match lookups with clear IFNA/IFERROR messages prevent wrong scenarios and build confidence."
  },
  {
    id: "u6l7-std-2",
    question: "Charts that update with new pricing data should bind to:",
    answers: [
      "Tables with structured references (e.g., SalesTbl[Revenue])",
      "Static ranges like A1:C10",
      "Hidden sheets with pasted values",
      "Manually typed series names"
    ],
    explanation: "Structured references expand automatically so visuals stay accurate as data grows."
  },
  {
    id: "u6l7-std-3",
    question: "What proves the model reconciles correctly before presenting?",
    answers: [
      "Tie-outs that show totals agree across sources and scenarios",
      "Color-coded tabs only",
      "Hiding error cells",
      "Deleting rows until totals match"
    ],
    explanation: "Reconciliation demonstrates integrity: totals tie, sources align, and errors are surfaced—not hidden."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

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
                    Production Kickoff: Investor-Ready Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-red-900">
                    Sarah at TechStart gets a message at 9:00 AM: “We’re reviewing your pricing model at 3 PM. 
                    Please send an audit‑ready file with a one-screen summary. We will test scenarios live.”
                  </p>
                  <p className="text-lg leading-relaxed text-red-900">
                    This is high pressure. In pricing work, trust comes from exact references, structured tables, 
                    clear error messages, and reconciliation. Today, you’ll finish your PriceLab model, harden it 
                    with QA, and prepare decision‑ready outputs.
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border bg-red-50 border-red-200">
                      <h4 className="font-semibold text-red-800 flex items-center gap-2"><XCircle className="w-5 h-5" /> Failure Case</h4>
                      <ul className="list-disc list-inside text-red-900 text-sm">
                        <li>Approximate match returns wrong scenario</li>
                        <li>Charts point to static ranges and miss new rows</li>
                        <li>Hard‑coded outputs break when inputs change</li>
                        <li>No reconciliation of totals across scenarios</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border bg-green-50 border-green-200">
                      <h4 className="font-semibold text-green-800 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Ready Example</h4>
                      <ul className="list-disc list-inside text-green-900 text-sm">
                        <li>Exact‑match XLOOKUP + IFNA("Scenario not found")</li>
                        <li>Named ranges and structured references</li>
                        <li>Charts bound to Tables; auto‑expanding</li>
                        <li>Reconciliation section shows tie‑outs pass</li>
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
                  <p className="text-yellow-900 font-medium mb-2">What makes a pricing model trustworthy under pressure?</p>
                  <ul className="list-disc list-inside text-yellow-900">
                    <li>Which standards give investors confidence fastest?</li>
                    <li>Where does your current model still feel fragile?</li>
                    <li>What would you check first before sending the file?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

