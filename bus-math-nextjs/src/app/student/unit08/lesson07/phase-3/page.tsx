'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SpreadsheetWrapper, type SpreadsheetData, type SpreadsheetCell } from "@/components/spreadsheet/SpreadsheetWrapper"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

const assetRegisterPreview: SpreadsheetData = [
  [{ value: "Asset" }, { value: "Cost" }, { value: "Useful Life" }, { value: "Salvage Value" }, { value: "Method" }, { value: "Purchase Date" }],
  [{ value: "Delivery Van" }, { value: "$35,000" }, { value: "5 years" }, { value: "$5,000" }, { value: "Straight-Line" }, { value: "Jan 2024" }],
  [{ value: "CNC Machine" }, { value: "$85,000" }, { value: "10 years" }, { value: "$10,000" }, { value: "DDB" }, { value: "Mar 2024" }],
  [{ value: "Office Furniture" }, { value: "$12,000" }, { value: "7 years" }, { value: "$2,000" }, { value: "Straight-Line" }, { value: "Jun 2024" }],
  [{ value: "Server Equipment" }, { value: "$22,000" }, { value: "4 years" }, { value: "$3,000" }, { value: "DDB" }, { value: "Sep 2024" }],
]

const depreciationSchedulePreview: SpreadsheetData = [
  [{ value: "Asset" }, { value: "Year" }, { value: "Depreciation Expense" }, { value: "Accum. Depreciation" }, { value: "Book Value" }],
  [{ value: "Delivery Van" }, { value: "2024" }, { value: "$6,000" }, { value: "$6,000" }, { value: "$29,000" }],
  [{ value: "Delivery Van" }, { value: "2025" }, { value: "$6,000" }, { value: "$12,000" }, { value: "$23,000" }],
  [{ value: "CNC Machine" }, { value: "2024" }, { value: "$17,000" }, { value: "$17,000" }, { value: "$68,000" }],
  [{ value: "CNC Machine" }, { value: "2025" }, { value: "$13,600" }, { value: "$30,600" }, { value: "$54,400" }],
]

export default function Phase3Page() {
  const auditQuiz = [
    {
      id: 'a1',
      question: 'If the recommendation says "DDB reduces book value faster in early years," which sheet proves this?',
      answers: [
        'Method Comparison sheet',
        'Asset Register only',
        'Recommendation sheet only',
        'None of the sheets'
      ],
      explanation: 'The Method Comparison sheet shows side-by-side results. You can see DDB front-loads expense compared to straight-line.'
    },
    {
      id: 'a2',
      question: 'What would make this workbook feel untrustworthy?',
      answers: [
        'Hard-coded totals that do not link to the asset register',
        'Using both straight-line and DDB methods',
        'Including a recommendation statement',
        'Having four separate sheets'
      ],
      explanation: 'Hard-coded totals break the evidence chain. Every number should trace back to the asset register through formulas.'
    },
    {
      id: 'a3',
      question: 'If book value in year 3 does not equal cost minus accumulated depreciation, what does that mean?',
      answers: [
        'There is a formula error in the depreciation schedule',
        'The method is wrong',
        'The asset register needs more assets',
        'Nothing — small differences are normal'
      ],
      explanation: 'Book Value = Cost − Accumulated Depreciation must always hold. If it does not, a formula is broken or a value is hard-coded.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔍 Phase 3: Guided Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">Trace the Logic Chain</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Open your shared rehearsal workbook. We will trace how a depreciation recommendation
                    connects back to the asset register and schedule. Every number in a good recommendation
                    has a home in an earlier sheet.
                  </p>
                  <p>
                    Follow this chain:
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li><strong>Asset Register</strong> → What assets exist and what are their key numbers?</li>
                    <li><strong>Depreciation Schedule</strong> → How does each asset lose value each year?</li>
                    <li><strong>Method Comparison</strong> → How do methods differ in expense timing?</li>
                    <li><strong>Recommendation</strong> → What policy do we recommend and why?</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Asset Register Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                    <p className="mb-3">The asset register is the source of truth. Every calculation traces back here.</p>
                    <SpreadsheetWrapper 
                      initialData={assetRegisterPreview}
                      readOnly
                    />
                  </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Depreciation Schedule Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                    <p className="mb-3">Check that Book Value = Cost − Accumulated Depreciation for every row.</p>
                    <SpreadsheetWrapper 
                      initialData={depreciationSchedulePreview}
                      readOnly
                    />
                  </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Audit Questions</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-3">Look at your workbook and answer these questions:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Where does the recommendation get its book value numbers? Can you point to the exact cells?</li>
                    <li>Are all depreciation formulas linked to the asset register, or are any values hard-coded?</li>
                    <li>Does the method comparison sheet clearly show which method front-loads expense?</li>
                    <li>What would make this workbook feel weak, confusing, or untrustworthy to a manager?</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Audit Comprehension Check</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <ComprehensionCheck 
                    title="Evidence Chain Check"
                    description="Confirm you can trace recommendations back to workbook evidence"
                    questions={auditQuiz as any}
                    showExplanations
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
