'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckSquare, ArrowRight, FileText, AlertCircle } from "lucide-react"

const currentPhase = lesson07Phases[3]

const polishTasks = [
  {
    area: "Recommendation",
    task: "Ensure the executive summary states a clear recommendation with supporting numbers",
    check: "Can you point to one sentence that says what to do and why?"
  },
  {
    area: "Evidence",
    task: "Verify all numbers in the recommendation trace back to a source sheet",
    check: "Can you click any number and trace it to its origin?"
  },
  {
    area: "Risk",
    task: "Add at least one limitation or risk factor (e.g., 'based on X% growth assumption')",
    check: "Is there a statement that acknowledges what could go wrong?"
  },
  {
    area: "Links",
    task: "Confirm cross-sheet formulas are working (change an input, watch the output update)",
    check: "Does changing a growth rate update the Dashboard KPIs?"
  },
  {
    area: "Balance",
    task: "Verify the balance sheet balances (Assets = Liabilities + Equity)",
    check: "Is the accounting equation satisfied?"
  }
]

const transferFeatures = [
  "All five sheet names and their purposes",
  "The recommendation → evidence → risk structure",
  "The Definition of Done checklist",
  "The three-statement linking logic (income → retained earnings → cash flow)",
  "The dashboard layout and KPI display",
  "The peer audit criteria"
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🛠️ Phase 4: Polish and Transfer Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2"><CheckSquare className="w-5 h-5" /> Complete and Polish the Shared Workbook</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-orange-900">
                  <p>
                    With teacher guidance, complete the remaining weak spots in your rehearsal workbook.
                    This is not open-ended - you are practicing the structure that your project will use.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3">Polish Checklist</h4>
                    {polishTasks.map((item, idx) => (
                      <div key={idx} className="mb-3 p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-20 font-medium text-orange-800">{item.area}</div>
                          <div>
                            <p className="text-sm">{item.task}</p>
                            <p className="text-xs text-orange-600 mt-1">
                              <span className="font-semibold">Check:</span> {item.check}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Require Both: Recommendation AND Risk</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900">
                  <p className="mb-3">
                    A complete project includes both a recommendation and a limitation. You cannot have one without the other.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-1">Recommendation</h5>
                      <p className="text-sm">"We should expand because ROI exceeds 15%..."</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-1">Risk/Limitation</h5>
                      <p className="text-sm">"...if revenue growth stays above 10%. If growth slows to 5%, the project breaks even."</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> What Must Transfer to Your Project</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  <p className="mb-3">
                    Next lesson, your team gets its own business scenario. You must recreate these features:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {transferFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Question to answer:</strong> Which feature from today's rehearsal will be hardest to recreate with your own data? Why?
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><FileText className="w-5 h-5" /> Self-Assessment: Definition of Done</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-green-900">
                    <li>All five sheets present with correct names</li>
                    <li>Executive summary has one clear recommendation</li>
                    <li>At least one risk or limitation stated</li>
                    <li>Balance sheet balances (A = L + E)</li>
                    <li>Three statements are linked via formulas</li>
                    <li>Dashboard shows at least 3 KPIs with labels</li>
                  </ul>
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

