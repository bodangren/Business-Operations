'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardCheck, BookOpen } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]

const vocabSentences = [
  {
    id: "1",
    text: "Use Excel Tables and {blank} so formulas expand when data grows.",
    answer: "structured references",
    hint: "Like Sales[Units] instead of A2:A100"
  },
  {
    id: "2",
    text: "Always force exact matches: XLOOKUP(…, {blank}, …).",
    answer: "0",
    alternativeAnswers: ["FALSE", "false"],
    hint: "No approximate match allowed"
  },
  {
    id: "3",
    text: "Wrap lookups with {blank}(…, \"Scenario not found — check name\").",
    answer: "IFNA",
    alternativeAnswers: ["IFERROR"],
    hint: "Clear message builds user trust"
  },
  {
    id: "4",
    text: "Charts must point at tables — never {blank} like A1:C10.",
    answer: "static ranges",
    hint: "They won’t auto‑expand"
  },
  {
    id: "5",
    text: "A good model includes visible {blank}: stale dates, missing keys, negatives where invalid.",
    answer: "validation",
    alternativeAnswers: ["checks", "rules", "audit panel"],
    hint: "Think ErrorCheckingSystem"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2"><ClipboardCheck className="w-5 h-5" /> Definition of Done (Checklist)</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Exact references: no hard‑coded outputs; use named ranges and Tables.</li>
                    <li>Lookups: XLOOKUP or INDEX/MATCH (exact match) + IFNA/IFERROR with clear text.</li>
                    <li>Tables: Structured refs (e.g., Sales[Units]) so ranges auto‑expand.</li>
                    <li>Charts: Bind to tables; avoid static A1:C10 ranges.</li>
                    <li>Validation: Constrain inputs (no negatives where invalid; ≤100% rates; valid scenario names; fresh AsOfDate).</li>
                    <li>Reconciliation: Tie‑outs pass (totals, accounting checks, balance comparisons).</li>
                    <li>Performance: Avoid volatile functions; confirm responsive updates.</li>
                    <li>Auditability: Assumptions sheet, date/version note, transparent formulas.</li>
                    <li>Scenario behavior: KPIs update across Base/Promo/Downside; thresholds drive summary text.</li>
                    <li>Error handling: Clear user‑facing messages; all rules pass.</li>
                    <li>Presentation: One‑screen dashboard + concise executive summary.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><BookOpen className="w-5 h-5" /> Vocabulary Lock‑In</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank
                    sentences={vocabSentences}
                    title="Production Standards Vocabulary"
                    description="Complete each sentence to reinforce professional habits that build investor trust."
                    showWordList={true}
                    randomizeWordOrder={true}
                    showHints={true}
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

