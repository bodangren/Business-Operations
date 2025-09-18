'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightCircle, Beaker, ListChecks, ShieldAlert, Users } from "lucide-react"
import SpreadsheetWrapper from "@/components/spreadsheet/SpreadsheetWrapper"
import { trialBalanceTemplate } from "@/components/spreadsheet/SpreadsheetTemplates"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"

const currentPhase = lesson07Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🛠️ Phase 3: Guided Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2">
                    <Beaker className="w-5 h-5" /> Guided QA Lab: Trial Balance First
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left leading-relaxed">
                  <p className="text-purple-900">
                    Walk through these steps with your teacher. Pause after each step to be sure the numbers react exactly
                    the way you expect. This builds the Tier 1 safety checks from the QA ladder.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-purple-900">
                    <li>Import <strong>unit01-ledger-lesson07-practice.csv</strong> as a Table named <strong>Transactions</strong>.</li>
                    <li>Add a helper column <strong>Status</strong> with <code>=IF([@Debit]=0,"Review","")</code> so zero-amount rows stand out.</li>
                    <li>Drop in this trial balance formula somewhere visible: <code>=SUM(Transactions[Debit]) - SUM(Transactions[Credit])</code>.</li>
                    <li>If the difference is not zero, add a red message: <code>=IF(A1=0,"Balanced","Out of Balance — investigate")</code>.</li>
                    <li>Filter the table to spot invalid accounts or negative liabilities. Add a comment noting what to fix.</li>
                  </ol>
                  <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 text-purple-900 flex gap-3">
                    <Users className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Turn-and-talk moment (2 minutes)</p>
                      <p>Share your balance result with a partner. If you both are balanced, swap filters and hunt for a new error you missed.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <ListChecks className="w-5 h-5" /> Scaffolded Practice: Build Tier 2 Checks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left leading-relaxed">
                  <p className="text-green-900">
                    Try each enhancement below. Check it off when the flag behaves correctly. Use the interactive template to sketch formulas before committing them in Excel.
                  </p>
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Trial Balance Scratch Pad</h4>
                    <SpreadsheetWrapper initialData={trialBalanceTemplate.data} />
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-green-900">
                    <li><strong>Friendly lookup errors:</strong> Wrap an XLOOKUP with <code>IFNA( ... , "Account name not found")</code>.</li>
                    <li><strong>Stale date flag:</strong> Use <code>=IF(TODAY()-[@Date]&gt;90,"Stale","OK")</code> in a new column.</li>
                    <li><strong>Rounding:</strong> Replace any raw totals with <code>ROUND(total,2)</code> so reports show clean cents.</li>
                  </ul>
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4 text-green-900">
                    <p className="font-semibold">Coach tip:</p>
                    <p>If a formula breaks, rebuild it using the scratch pad above. Explain aloud what each function is doing before you copy it into the live file.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5" /> Interactive Simulation: Error Signals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-orange-900 leading-relaxed">
                  <p>
                    Run the Error Checking System to see how professional dashboards highlight bad data. Match each alert to a fix in your workbook: add a validation rule, adjust a formula, or document the issue in your audit note.
                  </p>
                  <ErrorCheckingSystem />
                  <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 text-orange-900 flex items-center gap-2">
                    <ArrowRightCircle className="w-5 h-5" /> Aim to clear at least one alert before moving on to independent practice.
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
