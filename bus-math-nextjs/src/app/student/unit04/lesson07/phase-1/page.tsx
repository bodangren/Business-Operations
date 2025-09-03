'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, PlayCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[0]

const standardsQuiz = [
  {
    id: "u4l7-std-1",
    question: "A chart stops updating when new rows are added. What likely failed?",
    answers: [
      "Chart points to a static A1:C10 range instead of a Table",
      "The workbook name changed",
      "Too many colors on the chart",
      "The sheet tab was renamed"
    ],
    explanation: "Charts must bind to structured references (Tables) so they auto‑expand."
  },
  {
    id: "u4l7-std-2",
    question: "Which lookup pattern builds trust in investor demos?",
    answers: [
      "XLOOKUP with exact match and IFNA message",
      "Approximate VLOOKUP with range 1",
      "Manual copy‑paste of values",
      "Hiding #N/A with white font"
    ],
    explanation: "Exact match + clear error text shows control and quality."
  },
  {
    id: "u4l7-std-3",
    question: "What should replace hard‑coded outputs?",
    answers: [
      "Named ranges and structured references",
      "More formatting",
      "Merged cells",
      "Hidden columns"
    ],
    explanation: "Named ranges and Tables keep formulas reliable as data grows."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

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
                    Sarah is advising a local café that wants a clear, reliable forecast for the next quarter.
                    Their investor meeting is today. The model must be audit‑ready and easy to trust.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                    <p className="font-semibold mb-1 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Two failure cases we must avoid:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Charts that don’t update because they reference static ranges</li>
                      <li>Lookups that return #N/A with no guidance for the user</li>
                    </ul>
                  </div>
                  <p>
                    Our goal: a “ready” example — exact references, clean error messages, and visuals tied to Tables.
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

      <PhaseFooter unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

