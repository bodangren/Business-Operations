'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, ListChecks, BookOpen } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]

const vocabItems = [
  {
    id: "fib-1",
    text: "The {blank} proves Assets = Liabilities + Equity at any point in time.",
    answer: "balance sheet",
    hint: "The snapshot statement showing financial position."
  },
  {
    id: "fib-2",
    text: "The {blank} shows revenue, expenses, and net income over a period.",
    answer: "income statement",
    hint: "The flow statement showing profitability."
  },
  {
    id: "fib-3",
    text: "The {blank} explains how cash changed - operating, investing, and financing activities.",
    answer: "cash flow statement",
    hint: "The flow statement showing cash movement."
  },
  {
    id: "fib-4",
    text: "Retained earnings links the income statement to the balance sheet through {blank}.",
    answer: "net income",
    hint: "The bottom line of the income statement."
  },
  {
    id: "fib-5",
    text: "Cross‑sheet {blank} ensure numbers stay in sync when inputs change.",
    answer: "links",
    hint: "Formulas that reference cells in other sheets."
  }
]

const workbookStructure = [
  {
    sheet: "Income Statement",
    purpose: "Shows revenue, expenses, and net income. Links to balance sheet via retained earnings.",
    evidence: "Revenue growth rate, expense ratios, net profit margin"
  },
  {
    sheet: "Balance Sheet",
    purpose: "Shows assets, liabilities, and equity at a point in time. Balances (A = L + E).",
    evidence: "Current ratio, debt-to-equity, working capital"
  },
  {
    sheet: "Cash Flow Statement",
    purpose: "Reconciles net income to cash. Shows operating, investing, and financing flows.",
    evidence: "Operating cash flow, free cash flow, cash burn rate"
  },
  {
    sheet: "Assumptions",
    purpose: "Documents all inputs, rates, and drivers used in the model.",
    evidence: "Growth rates, cost assumptions, scenario parameters"
  },
  {
    sheet: "Dashboard",
    purpose: "One‑screen summary with key KPIs and executive summary text.",
    evidence: "Visual charts, KPI table, recommendation statement"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">🧭 Phase 2: Shared Artifact Orientation</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><FileSpreadsheet className="w-5 h-5" /> Shared Workbook Structure</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-green-900">
                  <p className="mb-4">
                    The shared workbook contains the same data your teacher uses. Every group in class
                    is working with identical numbers today. This lets us compare reasoning and quality directly.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="text-left p-2 border border-green-200">Sheet</th>
                          <th className="text-left p-2 border border-green-200">What It Shows</th>
                          <th className="text-left p-2 border border-green-200">Evidence It Provides</th>
                        </tr>
                      </thead>
                      <tbody>
                        {workbookStructure.map((item, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-green-50"}>
                            <td className="p-2 border border-green-100 font-medium">{item.sheet}</td>
                            <td className="p-2 border border-green-100">{item.purpose}</td>
                            <td className="p-2 border border-green-100">{item.evidence}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><ListChecks className="w-5 h-5" /> Definition of Done (Quality Checklist)</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-blue-900">
                  <p className="mb-3">Your completed rehearsal workbook must meet these standards:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Structure</h5>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>All five sheets present and named correctly</li>
                        <li>Income Statement → Balance Sheet → Cash Flow linked</li>
                        <li>Assumptions documented with sources</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Accuracy</h5>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Balance sheet balances (A = L + E)</li>
                        <li>Cash flow ties to balance sheet changes</li>
                        <li>All cross‑sheet links are formulas, not values</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Communication</h5>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Dashboard shows KPIs with clear labels</li>
                        <li>Executive summary includes a recommendation</li>
                        <li>At least one risk or limitation stated</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Audit</h5>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Reconciliation checks visible and passing</li>
                        <li>No hidden sheets or hard‑coded outputs</li>
                        <li>Assumptions have date/version</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2"><BookOpen className="w-5 h-5" /> Vocabulary Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank
                    sentences={vocabItems}
                    title="Three-Statement Vocabulary"
                    description="Key terms for understanding the evidence chain"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
