import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson06Data, unit03Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[1]

const vocabSentences = [
  {
    id: "s1",
    text: "Use {blank} or named driver tables to switch Base/Stretch/Downside without breaking formulas.",
    answer: "Scenario Manager",
    alternativeAnswers: ["driver table"]
  },
  {
    id: "s2",
    text: "Prefer exact‑match switching: {blank} / INDEX‑MATCH wrapped with IFNA/IFERROR to avoid #N/A.",
    answer: "XLOOKUP",
    alternativeAnswers: ["INDEX-MATCH"]
  },
  {
    id: "s3",
    text: "Tables enable {blank} so charts and ranges expand as rows grow.",
    answer: "structured references",
    alternativeAnswers: ["structured reference"]
  },
  {
    id: "s4",
    text: "Name key ranges (e.g., Driver_Scenario) to improve readability and {blank}.",
    answer: "auditability",
    alternativeAnswers: ["auditing"]
  },
  {
    id: "s5",
    text: "Guard lookups with {blank} to show friendly messages when a driver name is missing.",
    answer: "IFNA",
    alternativeAnswers: ["IFERROR"]
  },
  {
    id: "s6",
    text: "Choose KPIs tied to decisions: margin, runway, current ratio, and cash {blank} months.",
    answer: "coverage",
    alternativeAnswers: ["coverage months"]
  },
  {
    id: "s7",
    text: "A good dashboard highlights validation states (A=L+E, NI→RE, stale dates) using clear {blank}.",
    answer: "flags",
    alternativeAnswers: ["alerts"]
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: From Model to Decision</Badge>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Integrate Drivers, Links, and KPIs</h2>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Sarah upgrades her workbook so scenario names drive all outputs. She uses a <strong>driver table</strong>
                (Base/Stretch/Downside), <strong>named ranges</strong> for clarity, and exact‑match lookups to avoid surprises.
                Charts connect to <strong>Tables</strong> so visuals auto‑expand. KPIs (margin, runway, current ratio) update live.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2"><BookOpen className="h-5 w-5"/>Professional Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-green-900 space-y-1 text-sm">
                <li>Use exact‑match switching (XLOOKUP/INDEX‑MATCH) with IFNA/IFERROR</li>
                <li>Link charts to Table columns; avoid static ranges</li>
                <li>Name critical inputs and outputs for auditability</li>
                <li>Surface validation states where investors can see them</li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank
            title="Vocabulary Check: Integration & Dashboards"
            description="Fill in key terms used to build stable, decision‑ready dashboards."
            sentences={vocabSentences}
            showWordList={true}
            randomizeWordOrder={true}
          />
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
