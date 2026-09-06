import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle2, AlertCircle, FileText } from "lucide-react"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson05Data} 
        phase={currentPhase}
        phases={lesson05Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 4: Workbook Sprint
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Build the Formula-Driven Close
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Open the starter workbook and build a linked close model with visible checks.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Starting Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800">
                Download the starter workbook. It contains TechStart's March unadjusted trial balance and blank sections for you to build.
              </p>
              <div className="flex items-center gap-4">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  href="/resources/unit02-lesson05-student.xlsx"
                  download
                >
                  <Download className="h-4 w-4" />
                  Download: unit02-lesson05-student.xlsx
                </a>
              </div>
              <p className="text-sm text-orange-700">
                <strong>Required incoming state:</strong> The workbook has an Inputs sheet, a Close Model sheet, and a Control Panel sheet. You will complete the blank formulas and checks in the same file.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Reference Model: Layout Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">
                Your finished workbook should have this structure. Use the teacher workbook as a reference if you get stuck.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-blue-300 bg-white rounded">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Section</th>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Location</th>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-800 text-sm">
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Input Area</td>
                      <td className="border border-blue-300 px-3 py-2">Inputs sheet, rows 4-9</td>
                      <td className="border border-blue-300 px-3 py-2">Five month-end adjustment amounts and their limits</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Named Ranges</td>
                      <td className="border border-blue-300 px-3 py-2">Formula tab → Name Manager</td>
                      <td className="border border-blue-300 px-3 py-2">SuppliesUsed, InsuranceExpired, DepreciationExpense, WagesAccrued, RevenueEarned</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Adjusting Entries Block</td>
                      <td className="border border-blue-300 px-3 py-2">Close Model sheet, rows 3-15</td>
                      <td className="border border-blue-300 px-3 py-2">Computes each adjustment amount from named ranges</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Verification Checkpoint</td>
                      <td className="border border-blue-300 px-3 py-2">Close Model sheet, row 15</td>
                      <td className="border border-blue-300 px-3 py-2">Checks total debits = total credits</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Adjusted TB Block</td>
                      <td className="border border-blue-300 px-3 py-2">Close Model sheet, rows 18-35</td>
                      <td className="border border-blue-300 px-3 py-2">Unadjusted + adjustments = adjusted balances</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">CloseStatus Formula</td>
                      <td className="border border-blue-300 px-3 py-2">Control Panel sheet, cell B9</td>
                      <td className="border border-blue-300 px-3 py-2">Shows Complete only when both differences are zero</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  href="/resources/unit02-lesson05-teacher.xlsx"
                  download
                >
                  <Download className="h-4 w-4" />
                  Teacher Reference: unit02-lesson05-teacher.xlsx
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Build Sequence with Verification Checkpoints
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Define Named Ranges</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Select each input cell and define a name: SuppliesUsed, InsuranceExpired, DepreciationExpense, WagesAccrued, RevenueEarned. Verify each name in the Name Manager.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Type each name in the Name Box (left of formula bar). Each should jump to the correct cell.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Build Adjusting Entries Block</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Complete the Debit and Credit formulas in the adjustment journal. Use the named inputs instead of fixed cell addresses.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Change a named range value. The adjustment should update automatically.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Add Verification Checkpoint</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        In <code>Close Model!B15</code>, subtract total adjustment credits from total adjustment debits. A balanced journal has a zero difference.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Intentionally enter a wrong adjustment. The checkpoint should show "ERROR".
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Build Adjusted Trial Balance Block</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Below the adjusting entries, create the Adjusted TB: each account's unadjusted balance plus its adjustment. Total both columns.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> The Adjusted TB totals must match. If they do not, trace back to the adjusting entries.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Build the CloseStatus Formula</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        In <code>Control Panel!B9</code>, add an IF formula that reads the adjustment difference and adjusted trial balance difference. Return "Complete" only when both values equal zero.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Change one adjustment amount. CloseStatus must change to "Review flagged items" until the entry balances again.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Definition of Done
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-green-800">
                Your workbook is complete when all of the following are true:
              </p>
              <ul className="text-sm text-green-800 space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Five named inputs work: SuppliesUsed, InsuranceExpired, DepreciationExpense, WagesAccrued, and RevenueEarned</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Input area is color-coded and physically separate from calculation blocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Adjusting entries block computes all 5 adjustments using named ranges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Verification checkpoint cell shows "OK" or "ERROR" based on debits vs credits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Adjusted TB block produces correct balances and totals match</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>CloseStatus responds to both verification differences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Workbook saved as <code>.xlsx</code> and opens in Excel for the web</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                If You Get Stuck
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-red-800">
                <strong>Named range not working?</strong> Check the Name Manager (Formula tab → Name Manager). Make sure the range reference is correct and not pointing to a blank cell.
              </p>
              <p className="text-red-800">
                <strong>Status does not change?</strong> Select the CloseStatus cell. Confirm that its formula refers to both difference cells and that workbook calculation is automatic.
              </p>
              <p className="text-red-800">
                <strong>Verification always shows ERROR?</strong> Check that your adjusting entry debits and credits are equal. Each adjustment should have one debit and one credit of the same amount.
              </p>
              <p className="text-red-800">
                If none of these help, open the teacher reference workbook and compare your layout step by step.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
