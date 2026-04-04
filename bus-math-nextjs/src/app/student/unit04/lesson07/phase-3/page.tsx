'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Eye, AlertTriangle, ArrowRight } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson07Phases[2]

const evidenceTraceQuestions = [
  {
    id: "u4l7-audit-1",
    question: "Where does the final recommendation on the Recommendation sheet come from?",
    answers: [
      "It traces back through the Dashboard → Forecasting → Analysis → Data sheets",
      "It was written first and the rest was filled in to support it",
      "It comes from a separate file we didn't see",
      "It uses a magic formula that pulls the answer automatically"
    ],
    explanation: "The recommendation must trace back through every sheet to the raw data."
  },
  {
    id: "u4l7-audit-2",
    question: "What would make this workbook feel weak or untrustworthy to an investor?",
    answers: [
      "A recommendation with no numbers to support it, or charts that don't update with data",
      "Too many colors in the dashboard",
      "A misspelled sheet name",
      "Using the default Excel font"
    ],
    explanation: "Weak evidence (no numbers) or broken visuals (static ranges) destroy trust."
  },
  {
    id: "u4l7-audit-3",
    question: "The forecast shows a clear upward trend. What should you check before trusting it?",
    answers: [
      "Are there outliers in the data that might be skewing the trend?",
      "Is the trend line pretty?",
      "Does the forecast go up indefinitely?",
      "Did you use the right font size?"
    ],
    explanation: "Outliers can distort trends — always check data quality before trusting forecasts."
  }
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔍 Phase 3: Guided Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><Eye className="w-5 h-5" /> Trace the Evidence Chain — Guided Walkthrough</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900 space-y-6">
                  <p className="text-lg">
                    Since every group has the same data, we can all trace the same evidence chain together. 
                    Let's walk through where the final recommendation comes from.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <p className="font-semibold">Data Sheet → Analysis Sheet</p>
                        <p>Raw weekend sales become descriptive stats (average, median, spread). <span className="font-semibold">What this proves:</span> What does a "normal" café weekend look like?</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <p className="font-semibold">Analysis Sheet → Forecasting Sheet</p>
                        <p>Stats feed the regression model. <span className="font-semibold">What this proves:</span> What will the next quarter likely look like, and what are its limits?</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <p className="font-semibold">Forecasting Sheet → Dashboard Sheet</p>
                        <p>Trend and predictions become visuals. <span className="font-semibold">What this proves:</span> The data story in a decision-ready format.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <p className="font-semibold">Dashboard Sheet → Recommendation Sheet</p>
                        <p>Visuals support the final claim. <span className="font-semibold">What this proves:</span> The investor-ready recommendation with evidence and risk.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>

                  <div className="bg-purple-100 border border-purple-300 p-4 rounded-lg text-center">
                    <p className="font-semibold text-purple-900">The evidence chain is complete when you can trace any number in the Recommendation sheet back to the raw Data sheet.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-rose-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-rose-900 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> What Makes an Artifact Feel Weak?</CardTitle>
                </CardHeader>
                <CardContent className="text-rose-900 space-y-4">
                  <p>
                    Investors and decision-makers trust analysis that has clear evidence. Here are the warning signs that 
                    would make a workbook feel weak or untrustworthy:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                      <p className="font-semibold">❌ Recommendation with no numbers</p>
                      <p className="text-sm">Claim without data support — "we should expand" with no sales figures</p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                      <p className="font-semibold">❌ Charts that don't update</p>
                      <p className="text-sm">Static ranges (A1:C10) instead of table references</p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                      <p className="font-semibold">❌ Forecast without limits</p>
                      <p className="text-sm">Presenting regression as certainty without stating confidence limits</p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg border border-rose-200">
                      <p className="font-semibold">❌ Missing risk statement</p>
                      <p className="text-sm">No acknowledgment of what could go wrong</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><Search className="w-5 h-5" /> Evidence Chain Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensionCheck
                    questions={evidenceTraceQuestions}
                    title="Can You Trace the Evidence?"
                    description="Verify you can follow the logic chain from data to recommendation"
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