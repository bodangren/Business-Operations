'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileSpreadsheet, ClipboardList, Target } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]
const workbookPath = "/resources/unit06-lesson07-student.xlsx"
const tutorialPath = "/resources/unit06-lesson07-tutorial.md"

const vocabSentences = [
  { id: 'u6l7-v1', text: 'The {blank} sheet is where students sort every raw cost into Fixed or Variable.', answer: 'CostSetup', hint: 'This is the first tab in the rehearsal workbook' },
  { id: 'u6l7-v2', text: 'The {blank} sheet compares candidate prices using contribution margin and projected profit.', answer: 'PriceOptions', hint: 'This tab helps choose among the listed options' },
  { id: 'u6l7-v3', text: 'The {blank} sheet tests whether a price choice beats break-even and still fits inside capacity.', answer: 'Feasibility', hint: 'This tab checks realism' },
  { id: 'u6l7-v4', text: 'The {blank} sheet scans profit across a range of prices while holding units constant.', answer: 'PriceSensitivity', hint: 'A one-variable view' },
  { id: 'u6l7-v5', text: 'The {blank} sheet is the investor-facing summary that names one recommendation and one risk.', answer: 'Dashboard', hint: 'The final tab' },
  { id: 'u6l7-v6', text: 'A good project workbook uses the same {blank} across sheets so the recommendation is easy to defend.', answer: 'logic', hint: 'The math story should stay consistent' },
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-900 flex items-center gap-2">
                    <Download className="w-5 h-5" /> Download the Shared Rehearsal Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-green-900">
                  <p>
                    Everyone uses the same workbook today. This is a guided practice version of the project workbook structure.
                    In Lessons 8-10, your group will use the same structure with a different business scenario.
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    <a href={workbookPath} download className="underline font-medium">Download: unit06-lesson07-student.xlsx</a>
                    <a href={tutorialPath} download className="underline font-medium">Download: unit06-lesson07-tutorial.md</a>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
                    <p><strong>Shared scenario:</strong> PedalFast Bike Repair</p>
                    <p><strong>Capacity:</strong> 80 bike services per month</p>
                    <p><strong>Target profit:</strong> $850 per month</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><ClipboardList className="w-5 h-5" /> Workbook Map for the Upcoming Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-blue-900 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>CostSetup</strong> - sort raw costs and confirm the totals</li>
                    <li><strong>PriceOptions</strong> - compare 3 candidate prices</li>
                    <li><strong>Feasibility</strong> - test break-even and capacity</li>
                    <li><strong>TargetProfit</strong> - reverse-solve for the target</li>
                    <li><strong>PriceSensitivity</strong> - test a range of prices</li>
                    <li><strong>ProfitMatrix</strong> - test price and volume together</li>
                    <li><strong>Dashboard</strong> - summarize one recommendation and one risk</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2"><Target className="w-5 h-5" /> What counts as success today?</CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900 text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>You understand what each sheet is supposed to prove.</li>
                    <li>You can trace the dashboard recommendation back to evidence.</li>
                    <li>You can explain what parts of this structure your team must recreate in Lessons 8-10.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><FileSpreadsheet className="w-5 h-5" /> Vocabulary Check: Project Workbook Fluency</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank
                    sentences={vocabSentences as any}
                    title="Workbook Structure Practice"
                    description="Learn the sheet names and what each one does before you build."
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

      <PhaseFooter unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
