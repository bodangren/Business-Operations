'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardCheck, ListChecks } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]

const vocabItems = [
  {
    id: "fib-1",
    text: "Use {blank} or INDEX/MATCH with exact match, wrapped in IFNA or IFERROR.",
    answer: "XLOOKUP",
    hint: "Modern exact‑match lookup that replaces VLOOKUP for many cases."
  },
  {
    id: "fib-2",
    text: "Use XLOOKUP or {blank} with exact match, wrapped in IFNA or IFERROR.",
    answer: "INDEX/MATCH",
    hint: "Classic two‑function lookup combination."
  },
  {
    id: "fib-3",
    text: "Convert ranges to {blank} so structured references auto‑expand for formulas and charts.",
    answer: "Tables",
    hint: "Insert Table → formulas use [Table][#All] style refs."
  },
  {
    id: "fib-4",
    text: "Create a {blank} section that checks totals (e.g., bank vs register).",
    answer: "reconciliation",
    hint: "Tie‑outs that prove numbers match."
  },
  {
    id: "fib-5",
    text: "Executive summary text should change based on {blank} across scenarios.",
    answer: "KPI thresholds",
    hint: "Metrics that trigger different messages."
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">🧭 Phase 2: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><ListChecks className="w-5 h-5" /> Definition of Done (Student Checklist)</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-green-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Exact references: no hard‑coded outputs; use named ranges and structured refs</li>
                    <li>Lookups: XLOOKUP or INDEX/MATCH with exact match; wrap with IFNA/IFERROR and clear messages</li>
                    <li>Tables: ranges converted to Tables so formulas and charts auto‑expand</li>
                    <li>Charts: visuals bound to tables, not static A1:C10 ranges</li>
                    <li>Validation: inputs constrained (no invalid negatives; ≤100% rates; fresh AsOfDate)</li>
                    <li>Reconciliation: tie‑outs pass (totals, bank vs register, accounting equation)</li>
                    <li>Performance: avoid volatile functions; confirm responsive updates</li>
                    <li>Auditability: assumptions sheet, date/version note; no hidden logic</li>
                    <li>Scenario behavior: KPIs update across Base/Stretch/Downside; thresholds drive summary text</li>
                    <li>Error handling: clear messages; all ErrorCheckingSystem rules pass</li>
                    <li>Presentation: single‑screen dashboard + concise executive summary</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><ClipboardCheck className="w-5 h-5" /> Build Plan (Short)</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Finish core links; remove hard‑codes</li>
                    <li>Enforce exact‑match lookups with IFNA/IFERROR</li>
                    <li>Convert ranges to Tables; update chart references</li>
                    <li>Add validation and reconciliation checks</li>
                    <li>Bind dashboard visuals and write executive summary</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Vocabulary Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank
                    sentences={vocabItems as any}
                    title="Production Vocabulary"
                    description="Key terms for exact lookups, structured refs, validation, and reconciliation"
                  />
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
