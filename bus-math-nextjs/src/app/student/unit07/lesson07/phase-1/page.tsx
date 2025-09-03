'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit07Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, PlayCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const standardsQuiz = [
  {
    id: "u7l7-std-1",
    question: "A stock chart stops updating when a new SKU is added. Likely cause?",
    answers: [
      "Chart references a static range instead of a Table",
      "The workbook was renamed",
      "Too many colors in the chart",
      "The sheet is protected"
    ],
    explanation: "Charts must bind to structured references (Tables) to auto‑expand."
  },
  {
    id: "u7l7-std-2",
    question: "Which lookup pattern builds trust for inventory reconciliation?",
    answers: [
      "XLOOKUP with exact match and IFNA message",
      "Approximate VLOOKUP with range 1",
      "Manual copy‑paste of values",
      "Hide #N/A using white font"
    ],
    explanation: "Exact match + clear error text shows control and quality."
  },
  {
    id: "u7l7-std-3",
    question: "What should replace hard‑coded valuation outputs?",
    answers: [
      "Named ranges and structured references",
      "Merged cells",
      "Hidden columns",
      "More formatting"
    ],
    explanation: "Named ranges and Tables keep formulas reliable as data grows."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎬 Phase 1: Hook</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center gap-2"><PlayCircle className="w-5 h-5" /> Production Kickoff</CardTitle>
                </CardHeader>
                <CardContent className="text-red-900 space-y-3">
                  <p>
                    Sarah is wrapping up TechStart’s <strong>Asset & Inventory Tracker</strong>. An investor wants to see an
                    <strong> audit‑ready model today</strong> that proves the inventory ledger ties to the financial statements.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                    <p className="font-semibold mb-1 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Two failure cases to avoid:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Charts that don’t update because they reference static ranges</li>
                      <li>Lookups that return #N/A with no guidance for the user</li>
                    </ul>
                  </div>
                  <p>
                    Our target: a “ready” example — exact references, clean error messages, and visuals bound to Tables.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Quick Check: Production Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={standardsQuiz as any}
                    title="Audit‑Ready Standards"
                    description="Confirm the quality habits we’ll use all lesson"
                    showExplanations={true}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

