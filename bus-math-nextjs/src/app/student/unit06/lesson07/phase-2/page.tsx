'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileSpreadsheet, ClipboardList, CheckSquare, AlertCircle } from "lucide-react"
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

const definitionOfDone = [
  { category: 'Structure', items: [
    'All seven sheets present and named correctly (CostSetup, PriceOptions, Feasibility, TargetProfit, PriceSensitivity, ProfitMatrix, Dashboard)',
    'Each sheet has clear labels and no orphaned formulas or blank cells that look like errors',
  ]},
  { category: 'Evidence Chain', items: [
    'CostSetup totals match the numbers used in PriceOptions and Feasibility',
    'The Dashboard recommendation matches the best option shown in PriceOptions',
    'The Dashboard risk note is supported by at least one sensitivity or feasibility sheet',
  ]},
  { category: 'Clarity', items: [
    'A reader can find the recommendation within 10 seconds of opening the Dashboard',
    'Every number on the Dashboard can be traced back to a supporting sheet',
    'No hidden sheets contain critical information that the Dashboard depends on',
  ]},
  { category: 'Communication', items: [
    'One clear recommendation statement in plain language',
    'One risk or limitation statement with a specific workbook reference',
    'No jargon without explanation — an outsider could follow the logic',
  ]},
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Shared Workbook Orientation</Badge>
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
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                    <p className="font-medium text-blue-900 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> Same data, same standard
                    </p>
                    <p className="text-blue-900">
                      The student workbook uses the same data as the teacher workbook. This means everyone can compare
                      reasoning quality directly — there is no &quot;different scenario&quot; excuse for a weak recommendation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><ClipboardList className="w-5 h-5" /> Workbook Map — What Each Sheet Proves</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-blue-900 text-sm">
                  <p className="font-medium">Every sheet has a job in the evidence chain. Know what each one is supposed to prove:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>CostSetup</strong> — proves the fixed and variable cost totals are correct and complete</li>
                    <li><strong>PriceOptions</strong> — proves which candidate price produces the best contribution margin and profit</li>
                    <li><strong>Feasibility</strong> — proves the chosen price beats break-even and fits inside capacity</li>
                    <li><strong>TargetProfit</strong> — proves the volume or price needed to hit the target profit</li>
                    <li><strong>PriceSensitivity</strong> — proves how profit changes across a price range</li>
                    <li><strong>ProfitMatrix</strong> — proves how price and volume interact under different conditions</li>
                    <li><strong>Dashboard</strong> — summarizes one recommendation and one risk for the investor audience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Definition of Done — Project Workbook Quality Standard</CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900 text-sm">
                  <p className="font-medium mb-3">Use this checklist today and carry it into Lessons 8-10:</p>
                  {definitionOfDone.map((section) => (
                    <div key={section.category} className="mb-3">
                      <p className="font-semibold text-amber-800 mb-1">{section.category}</p>
                      <ul className="list-disc list-inside space-y-0.5 ml-2">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><FileSpreadsheet className="w-5 h-5" /> Vocabulary Check: Project Workbook Fluency</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank
                    sentences={vocabSentences}
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
