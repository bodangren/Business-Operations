import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle2, AlertCircle, BookOpen, Target } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"
import { withBasePath } from "@/lib/paths"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson05Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Workbook Sprint Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 4: Workbook Sprint
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Build Self-Auditing Formulas in Sarah's Ledger
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Now you'll add SUMIF formulas, balance checks, and red flags to your Lesson 04 workbook. 
              Follow the build sequence and produce a self-auditing ledger that catches errors automatically.
            </p>
          </div>
        </section>

        {/* Starting Workbook */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Starting Point: Your Lesson 04 Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-blue-800">
                <strong>Open your Lesson 04 workbook</strong> (the one where you created the Excel Table). 
                You should have a table named "LedgerTable" with Sarah's transactions.
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">If you need a fresh copy, download:</h4>
                <div className="flex flex-wrap items-center gap gap-3">
                  <a
                    href={withBasePath('/resources/unit01-lesson04-student.xlsx')}
                    download="unit01-lesson04-student.xlsx"
                    className="inline-flex"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Download: unit01-lesson04-student.xlsx
                    </Button>
                  </a>
                </div>
                <p className="text-xs text-blue-700 mt-2">
                  This workbook contains the table structure you built in Lesson 04.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Build Sequence */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-600" />
            Build Sequence (by Sarah's Audit Trail)
          </h2>

          {/* Build Block 1 */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">Block 1</span>
                Create Account Summary Section
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-purple-800 space-y-2">
                <p><strong>1.1 Insert new sheet:</strong> Right-click sheet tab → Insert → Blank sheet. Name it "Account Summary".</p>
                <p><strong>1.2 Set up structure:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Column A: Account Name (list: Cash, Accounts Receivable, Service Revenue, Supplies Expense, etc.)</li>
                  <li>Column B: Total Debits</li>
                  <li>Column C: Total Credits</li>
                  <li>Column D: Balance (Debit - Credit)</li>
                </ul>
                <p><strong>1.3 Apply professional formatting:</strong> Bold headers, currency on B:C, borders around summary.</p>
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Verification Checkpoint 1</p>
                    <p className="text-sm text-purple-800">
                      Before continuing: Confirm Account Summary sheet exists with 4 columns, 
                      all account names listed, and currency formatting applied to totals columns.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Build Block 2 */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Block 2</span>
                Build SUMIF Formulas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-green-800 space-y-2">
                <p><strong>2.1 Total Debits formula (Column B):</strong></p>
                <p className="ml-4 bg-green-50 p-2 rounded font-mono text-sm">
                  =SUMIF(LedgerTable[Account], A2, LedgerTable[Debit])
                </p>
                <p className="text-xs text-green-700 ml-4">
                  <em>Change A2 to match your first account cell reference.</em>
                </p>
                
                <p className="mt-3"><strong>2.2 Total Credits formula (Column C):</strong></p>
                <p className="ml-4 bg-green-50 p-2 rounded font-mono text-sm">
                  =SUMIF(LedgerTable[Account], A2, LedgerTable[Credit])
                </p>
                
                <p className="mt-3"><strong>2.3 Fill formulas down:</strong> Select both formulas and drag down to all accounts.</p>
                
                <p className="mt-3"><strong>2.4 Balance formula (Column D):</strong> <code>=B2-C2</code></p>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">Verification Checkpoint 2</p>
                    <p className="text-sm text-green-800">
                      Before continuing: Confirm each account shows correct totals, formulas reference 
                      LedgerTable columns (not fixed ranges), and all accounts are calculated.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Build Block 3 */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Block 3</span>
                Create Trial Balance Check
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-blue-800 space-y-2">
                <p><strong>3.1 Add trial balance section (below accounts):</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Row below last account: Label "Total Debits"</li>
                  <li>Row below that: Label "Total Credits"</li>
                  <li>Row below that: Label "Trial Balance Status"</li>
                </ul>
                
                <p className="mt-3"><strong>3.2 Total Debits formula:</strong> <code>=SUM(B2:B[last_account_row])</code></p>
                <p className="mt-3"><strong>3.3 Total Credits formula:</strong> <code>=SUM(C2:C[last_account_row])</code></p>
                
                <p className="mt-3"><strong>3.4 Trial Balance Status formula:</strong></p>
                <p className="ml-4 bg-blue-50 p-2 rounded font-mono text-sm">
                  =IF(total_debits_cell = total_credits_cell, "Balanced", "Out of Balance")
                </p>
                <p className="text-xs text-blue-700 ml-4">
                  <em>Replace cell references with your actual formula cell locations.</em>
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-900">Verification Checkpoint 3</p>
                    <p className="text-sm text-blue-800">
                      Before continuing: Confirm total debits and credits are calculated correctly, 
                      and Trial Balance Status shows "Balanced" (since your data should balance).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Build Block 4 */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">Block 4</span>
                Add Red Flags with Conditional Formatting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-red-800 space-y-2">
                <p><strong>4.1 Flag trial balance errors:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Select Trial Balance Status cell</li>
                  <li>Home → Conditional Formatting → New Rule</li>
                  <li>Rule type: "Use a formula to determine which cells to format"</li>
                  <li>Formula: <code>=status_cell="Out of Balance"</code></li>
                  <li>Format: Red background, bold white text</li>
                </ul>
                
                <p className="mt-3"><strong>4.2 Flag negative balances (optional but recommended):</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Select Balance column (Column D)</li>
                  <li>Conditional Formatting → Highlight Cells Rules → Less Than</li>
                  <li>Value: 0</li>
                  <li>Format: Red text</li>
                </ul>
                
                <p className="mt-3"><strong>4.3 Add documentation notes:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Add a comment to Trial Balance cell: "Checks if ledger is balanced"</li>
                  <li>Add a note to Account Summary sheet explaining purpose</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-900">Verification Checkpoint 4</p>
                    <p className="text-sm text-red-800">
                      Before finishing: Test conditional formatting by temporarily changing a value 
                      in LedgerTable. Confirm red flags appear when trial balance is off.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reference Model */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Reference Model: Account Summary Layout
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-indigo-200">
                      <th className="p-2 text-left border border-indigo-300">Account Name</th>
                      <th className="p-2 text-right border border-indigo-300">Total Debits</th>
                      <th className="p-2 text-right border border-indigo-300">Total Credits</th>
                      <th className="p-2 text-right border border-indigo-300">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-2 border border-indigo-300">Cash</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=B2-C2</td>
                    </tr>
                    <tr className="bg-indigo-50">
                      <td className="p-2 border border-indigo-300">Accounts Receivable</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=B3-C3</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border border-indigo-300">Service Revenue</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=B4-C4</td>
                    </tr>
                    <tr className="bg-indigo-50">
                      <td className="p-2 border border-indigo-300">Supplies Expense</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=SUMIF(...)</td>
                      <td className="p-2 border border-indigo-300 text-right font-mono text-xs">=B5-C5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-indigo-800 mt-2">
                <strong>Note:</strong> Your Account Summary should include all accounts from Sarah's ledger. 
                Formulas use structured references (LedgerTable[Account]) to automatically update when new transactions are added.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Definition of Done */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Definition of Done: Lesson 05 Complete When...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Technical Requirements</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Account Summary sheet exists with 4 columns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>SUMIF formulas use LedgerTable structured references</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>All accounts show correct debit/credit totals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Trial balance check formulas in place</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Conditional formatting highlights "Out of Balance"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Documentation notes explain each audit control</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Verification Tests</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Trial balance shows "Balanced" for current data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Test: Change a value → status turns "Out of Balance"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Test: Add new row to LedgerTable → formulas update</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Workbook saved with clear filename</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-green-900">What You'll Produce</p>
                    <p className="text-sm text-green-800 mt-2">
                      By end of Phase 4, you'll have a self-auditing ledger that automatically 
                      totals debits/credits by account, verifies trial balance, and highlights errors 
                      with red flags. Sarah can now prove her books are accurate to any investor.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Troubleshooting */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">Troubleshooting: If Something Goes Wrong</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Problem: SUMIF returns #VALUE!</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Mixing text and numbers in range</p>
                  <p className="text-red-800"><strong>Fix:</strong> Check for blank cells or text in Debit/Credit columns</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Problem: Formulas don't update for new rows</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Used fixed range like A2:A100</p>
                  <p className="text-red-800"><strong>Fix:</strong> Use LedgerTable[Column] structured references</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Problem: Conditional formatting doesn't trigger</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Formula references wrong cell</p>
                  <p className="text-red-800"><strong>Fix:</strong> Check cell reference in conditional formatting rule</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Problem: Trial balance always shows "Out of Balance"</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Typos in account names or missing data</p>
                  <p className="text-red-800"><strong>Fix:</strong> Check Account column for consistent spelling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ready for Phase 5 */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-900">Ready for Phase 5!</h3>
            </div>
            <p className="text-purple-800 text-lg mb-4">
              Once your workbook meets all Definition of Done criteria, you're ready for 
              the assessment phase. In Phase 5, you'll complete a short technical check 
              and explain which audit control matters most for Sarah's investor presentation.
            </p>
          </div>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
