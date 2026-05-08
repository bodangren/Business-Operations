'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

const assetRegisterPreview: SpreadsheetData = [
  [{ value: "Asset" }, { value: "Cost" }, { value: "Salvage Value" }, { value: "Useful Life" }, { value: "Months" }, { value: "Asset Class" }],
  [{ value: "Delivery Van" }, { value: "$30,000" }, { value: "$5,000" }, { value: "5 years" }, { value: 9 }, { value: "Vehicle" }],
  [{ value: "POS & Laptop Package" }, { value: "$12,000" }, { value: "$2,000" }, { value: "4 years" }, { value: 6 }, { value: "Technology" }],
  [{ value: "Server & Security System" }, { value: "$8,000" }, { value: "$800" }, { value: "3 years" }, { value: 3 }, { value: "Technology" }],
  [{ value: "Workshop Equipment" }, { value: "$18,000" }, { value: "$3,000" }, { value: "6 years" }, { value: 10 }, { value: "Equipment" }],
]

const depreciationSchedulePreview: SpreadsheetData = [
  [{ value: "Asset" }, { value: "Months" }, { value: "SL Year 1" }, { value: "DDB Year 1" }, { value: "DDB Higher By" }],
  [{ value: "Delivery Van" }, { value: 9 }, { value: "$3,750" }, { value: "$9,000" }, { value: "$5,250" }],
  [{ value: "POS & Laptop Package" }, { value: 6 }, { value: "$1,250" }, { value: "$3,000" }, { value: "$1,750" }],
  [{ value: "Server & Security System" }, { value: 3 }, { value: "$600" }, { value: "$1,333" }, { value: "$733" }],
  [{ value: "Workshop Equipment" }, { value: 10 }, { value: "$2,083" }, { value: "$5,000" }, { value: "$2,917" }],
]

const entryCategoryPreview: SpreadsheetData = [
  [{ value: "Business Entry" }, { value: "Amount" }, { value: "Report" }, { value: "Statement Line" }],
  [{ value: "Product Sales Revenue" }, { value: "$95,000" }, { value: "Income Statement" }, { value: "Sales Revenue" }],
  [{ value: "Cash in Bank" }, { value: "$24,500" }, { value: "Balance Sheet" }, { value: "Cash" }],
  [{ value: "Bank Loan Payable" }, { value: "$42,000" }, { value: "Balance Sheet" }, { value: "Loan Payable" }],
  [{ value: "Payroll Expense" }, { value: "$17,000" }, { value: "Income Statement" }, { value: "Payroll Expense" }],
]

const statementPreview: SpreadsheetData = [
  [{ value: "Line Item" }, { value: "Straight-Line" }, { value: "DDB" }, { value: "DDB Impact" }],
  [{ value: "Total Revenue" }, { value: "$107,000" }, { value: "$107,000" }, { value: "$0" }],
  [{ value: "Depreciation Expense" }, { value: "$7,683" }, { value: "$18,333" }, { value: "$10,650" }],
  [{ value: "Net Income" }, { value: "$27,317" }, { value: "$16,667" }, { value: "-$10,650" }],
  [{ value: "Balance Check" }, { value: "$0" }, { value: "$0" }, { value: "$0" }],
]

export default function Phase3Page() {
  const auditQuiz = [
    {
      id: 'a1',
      question: 'If the recommendation says "DDB lowers Year 1 net income," which sheet proves this?',
      answers: [
        'Income Statement',
        'Asset Register only',
        'Recommendation sheet only',
        'None of the sheets'
      ],
      explanation: 'The income statement shows depreciation expense and net income under both methods.'
    },
    {
      id: 'a2',
      question: 'What would make this workbook feel untrustworthy?',
      answers: [
        'Hard-coded statement totals that do not link to categories or depreciation',
        'Using both straight-line and DDB methods',
        'Including a recommendation statement',
        'Having four separate sheets'
      ],
      explanation: 'Hard-coded totals break the evidence chain. Statement numbers should trace to entry categories or depreciation formulas.'
    },
    {
      id: 'a3',
      question: 'If the balance sheet check is not zero under one method, what does that mean?',
      answers: [
        'There is a formula or classification error in the statement build',
        'The method is wrong',
        'The asset register needs more assets',
        'Nothing — small differences are normal'
      ],
      explanation: 'Total Assets must equal Total Liabilities + Equity. If the check is not zero, something is missing, misclassified, or hard-coded.'
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
                    connects back to the asset register, the method comparison, and the financial statements.
                    Every number in a good recommendation has a home in an earlier sheet.
                  </p>
                  <p>
                    Follow this chain:
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li><strong>Entry Categories</strong> → Where do basic business entries belong?</li>
                    <li><strong>Asset Register</strong> → What fixed assets exist and what are their key numbers?</li>
                    <li><strong>Partial-Year Depreciation</strong> → How much Year 1 depreciation comes from SLN and DDB?</li>
                    <li><strong>Income Statement and Balance Sheet</strong> → How do the methods change profit and net fixed assets?</li>
                    <li><strong>Recommendation Evidence</strong> → What policy do we recommend and why?</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Entry Category Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                    <p className="mb-3">Start by sorting simple entries into the right report and line item.</p>
                    <SpreadsheetWrapper 
                      initialData={entryCategoryPreview}
                      readOnly
                    />
                  </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Asset Register Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                    <p className="mb-3">The asset register is the source of truth for the depreciation formulas.</p>
                    <SpreadsheetWrapper 
                      initialData={assetRegisterPreview}
                      readOnly
                    />
                  </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Method Comparison Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                    <p className="mb-3">Check that each method uses months in service before it flows to the statements.</p>
                    <SpreadsheetWrapper 
                      initialData={depreciationSchedulePreview}
                      readOnly
                    />
                  </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-900">Statement Impact Preview</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                    <p className="mb-3">A stronger recommendation cites statement effects, not just formula results.</p>
                    <SpreadsheetWrapper 
                      initialData={statementPreview}
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
                    <li>Are basic entries categorized into the correct report and statement line?</li>
                    <li>Are depreciation formulas linked to the asset register, or are any values hard-coded?</li>
                    <li>Does the method comparison clearly show which method front-loads expense?</li>
                    <li>Do the income statement and balance sheet show the same method impact?</li>
                    <li>Does the balance sheet check equal zero under both methods?</li>
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
                    questions={auditQuiz}
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
