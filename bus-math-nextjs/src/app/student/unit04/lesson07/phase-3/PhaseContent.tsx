'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  Eye, AlertTriangle, ArrowRight } from "lucide-react"

export default function Phase3Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-purple-50">

      <div className="space-y-8">
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

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}