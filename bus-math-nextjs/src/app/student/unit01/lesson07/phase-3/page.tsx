'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Users, FileSpreadsheet } from "lucide-react"
import SpreadsheetWrapper from "@/components/spreadsheet/SpreadsheetWrapper"

const currentPhase = lesson07Phases[2]

const sampleSummaryData = [
  [{ value: "Metric" }, { value: "Value" }],
  [{ value: "Total Revenue" }, { value: "$15,420" }],
  [{ value: "Total Expenses" }, { value: "$8,950" }],
  [{ value: "Net Profit" }, { value: "$6,470" }],
  [{ value: "Trial Balance Status" }, { value: "✅ Balanced" }]
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-100 text-violet-800 text-lg px-4 py-2">🔍 Phase 3: Guided Audit</Badge>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-violet-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Search className="w-6 h-6 text-violet-700" /> Trace the Evidence Chain
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-left">
                  <p className="text-gray-800 leading-relaxed">
                    Let's walk through the shared workbook together. We'll trace the recommendation back to the numbers that prove it.
                  </p>

                  <div className="bg-violet-50 border border-violet-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-violet-900 mb-3">Step 1: Start at the Executive Summary</h3>
                    <p className="text-violet-900 mb-2">Open the "Executive Summary" sheet. What is the main recommendation?</p>
                    <div className="bg-white border rounded-lg p-3">
                      <p className="font-medium text-gray-800">Example recommendation:</p>
                      <p className="text-gray-700 italic">"TechStart should invest in more inventory because revenue is growing 15% month-over-month and profit margins are healthy at 42%."</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Step 2: Find the Evidence</h3>
                    <p className="text-blue-900 mb-2">Now trace those numbers back to their source sheets:</p>
                    <ul className="list-disc list-inside text-blue-900 space-y-1">
                      <li>Where does "Total Revenue" come from?</li>
                      <li>Which sheet proves "profit margins are healthy"?</li>
                      <li>Where is the "15% month-over-month" growth shown?</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-3">Step 3: Check for Weak Spots</h3>
                    <p className="text-orange-900 mb-2">What would make this recommendation feel untrustworthy?</p>
                    <ul className="list-disc list-inside text-orange-900 space-y-1">
                      <li>Numbers that don't link back to source data</li>
                      <li>Trial balance showing "Out of Balance"</li>
                      <li>No risk or limitation mentioned</li>
                      <li>Typos in account names that break formulas</li>
                    </ul>
                  </div>

                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <FileSpreadsheet className="w-5 h-5" /> Executive Summary Preview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <SpreadsheetWrapper initialData={sampleSummaryData} />
                    </CardContent>
                  </Card>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                    <Users className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-900">Turn & Talk (5 minutes)</p>
                      <p className="text-yellow-900">Share with a partner: What's one number in the summary you traced back, and one weak spot you might fix?</p>
                    </div>
                  </div>
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
