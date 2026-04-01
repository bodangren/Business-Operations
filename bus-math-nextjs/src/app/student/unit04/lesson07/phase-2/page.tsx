'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, CheckCircle, MapPin, Download } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]

const workbookMapSentences = [
  {
    id: "1",
    text: "The {blank} sheet contains the raw café weekend sales data.",
    answer: "Data",
    hint: "Where the numbers live before analysis"
  },
  {
    id: "2",
    text: "The {blank} sheet calculates descriptive statistics (average, median, spread).",
    answer: "Analysis",
    hint: "Where you apply the statistics from Lessons 2-3"
  },
  {
    id: "3",
    text: "The {blank} sheet holds the trend line and forecast for the next quarter.",
    answer: "Forecasting",
    hint: "Where Lesson 4 regression lives"
  },
  {
    id: "4",
    text: "The {blank} sheet shows clean visualizations that tell the data story.",
    answer: "Dashboard",
    hint: "Where charts and visuals live"
  },
  {
    id: "5",
    text: "The {blank} sheet states the final recommendation with evidence and risk.",
    answer: "Recommendation",
    hint: "Where claim + evidence + risk lives"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Shared Artifact Orientation</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2"><Download className="w-5 h-5" /> Shared Workbook — Same Data</CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900 space-y-4">
                  <p className="text-lg">
                    Download and open the rehearsal workbook. Every group in class has the <span className="font-semibold">exact same café data</span>.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Download:</p>
                    <a 
                      className="inline-flex items-center gap-2 text-blue-700 underline hover:text-blue-900" 
                      href="/resources/unit04-cafe-rehearsal.xlsx" 
                      download
                    >
                      <Download className="w-4 h-4" />
                      unit04-cafe-rehearsal.xlsx
                    </a>
                  </div>
                  <p>
                    The student workbook uses the same data as the teacher workbook. When we compare 
                    work today, we're comparing the <span className="font-semibold">quality of reasoning</span>, not different datasets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><MapPin className="w-5 h-5" /> Workbook Map — What Each Sheet Proves</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900 space-y-4">
                  <p>
                    Every sheet in this workbook serves a specific job in the <span className="font-semibold">evidence chain</span>. 
                    Here's what each one proves:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                      <div>
                        <p className="font-semibold">Data Sheet</p>
                        <p>Raw café weekend sales data — the foundation. Without clean data, nothing else is trustworthy.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                      <div>
                        <p className="font-semibold">Analysis Sheet</p>
                        <p>Descriptive statistics (average, median, spread) that describe what a "normal" café weekend looks like.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                      <div>
                        <p className="font-semibold">Forecasting Sheet</p>
                        <p>Trend line and regression that predicts the next quarter — with clear limits on what it promises.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                      <div>
                        <p className="font-semibold">Dashboard Sheet</p>
                        <p>Visuals that tell the data story — clean, bound to tables, and decision-ready.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600" />
                      <div>
                        <p className="font-semibold">Recommendation Sheet</p>
                        <p>Final claim + evidence + risk. This is what the investor sees — and what must trace back to every sheet above.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2"><FileSpreadsheet className="w-5 h-5" /> Definition of Done — What Success Looks Like Today</CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900">
                  <p className="mb-4">A complete project workbook must include:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold">Data sheet:</span> Clean, analysis-ready data with documented source</li>
                    <li><span className="font-semibold">Analysis sheet:</span> Descriptive stats that describe the "normal" pattern</li>
                    <li><span className="font-semibold">Forecasting sheet:</span> Trend + regression with clear limits stated</li>
                    <li><span className="font-semibold">Dashboard sheet:</span> At least two visuals that support the recommendation</li>
                    <li><span className="font-semibold">Recommendation sheet:</span> One clear claim, evidence from data, and one risk or limitation</li>
                    <li><span className="font-semibold">Evidence trace:</span> The recommendation can be traced back through all sheets to the raw data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Vocabulary Check: Workbook Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank
                    sentences={workbookMapSentences}
                    title="Workbook Map Vocabulary"
                    description="Complete each sentence to reinforce the evidence-chain structure."
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