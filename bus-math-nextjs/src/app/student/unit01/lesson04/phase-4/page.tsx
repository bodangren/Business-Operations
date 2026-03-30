import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, CheckCircle2, AlertCircle, BookOpen, Target } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"
import { withBasePath } from "@/lib/paths"

const currentPhase = lesson04Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        lesson={lesson04Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Independent Practice Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Workbook Sprint
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Build Sarah's Professional Ledger Table
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Now you'll build Sarah's real Excel ledger table. Download the starter workbook, 
              follow the build sequence, and produce a professional table structure ready for 
              automated formulas in the next lesson.
            </p>
          </div>
        </section>

        {/* Starter Workbook Download */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Step 1: Download Starter Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={withBasePath('/resources/unit01-ledger-basic-practice.xlsx')}
                  download="unit01-ledger-basic-practice.xlsx"
                  className="inline-flex"
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Download: unit01-ledger-basic-practice.xlsx
                  </Button>
                </a>
              </div>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-emerald-900 mb-3">Workbook Contents</h4>
                <ul className="text-sm text-emerald-800 space-y-2">
                  <li>• <strong>Sheet 1:</strong> Raw transaction data (Sarah's TechStart transactions)</li>
                  <li>• <strong>Data includes:</strong> Date, Description, Account, Type, Debit, Credit columns</li>
                  <li>• <strong>Pre-loaded:</strong> 12 sample transactions from Sarah's business</li>
                  <li>• <strong>Your job:</strong> Convert to professional Excel Table with proper formatting</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-900">
                    <strong>Important:</strong> Save the downloaded file to your computer with a clear name 
                    like "Sarah_Ledger_Table_YourName.xlsx" before you begin.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Build Sequence */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-600" />
            Step 2: Build Sequence (Follow in Order)
          </h2>

          {/* Build Block 1 */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Block 1</span>
                Inspect and Format Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">1.1 Check Data Quality</h4>
                  <ul className="text-blue-800 space-y-1 list-disc list-inside">
                    <li>Review the 12 pre-loaded transactions</li>
                    <li>Confirm all cells have values (no blanks)</li>
                    <li>Verify Debit/Credit columns have numbers (not text)</li>
                    <li>Check that Account column has proper account names</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">1.2 Apply Number Formatting</h4>
                  <ul className="text-blue-800 space-y-1 list-disc list-inside">
                    <li>Select columns E and F (Debit and Credit)</li>
                    <li>Apply Currency format: Ctrl+Shift+$ (Windows)</li>
                    <li>Verify: 2 decimal places, comma separators, $ signs</li>
                    <li>Format negatives as red text: $(500.00)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-900">Verification Checkpoint 1</p>
                    <p className="text-sm text-blue-800">
                      Before continuing: Confirm that all monetary values show "$" and 2 decimal places. 
                      No plain numbers should remain in Debit/Credit columns.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Build Block 2 */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">Block 2</span>
                Create Excel Table
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">2.1 Select Data Range</h4>
                  <ul className="text-purple-800 space-y-1 list-disc list-inside">
                    <li>Click any cell in the transaction data (A1:F13)</li>
                    <li>Excel will automatically detect your data range</li>
                    <li>Confirm the selection includes all 6 columns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">2.2 Create Table</h4>
                  <ul className="text-purple-800 space-y-1 list-disc list-inside">
                    <li>Press Ctrl+T (Windows) or Cmd+T (Mac)</li>
                    <li><strong>CRITICAL:</strong> Check "My table has headers"</li>
                    <li>Click OK to create the table</li>
                    <li>Observe: Table gets blue banding and filter arrows</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Verification Checkpoint 2</p>
                    <p className="text-sm text-purple-800">
                      Before continuing: Confirm that you see blue/white row banding, filter arrows 
                      in all headers, and the Table Design tab appears in the ribbon.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Build Block 3 */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Block 3</span>
                Name Table and Verify Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">3.1 Rename Table</h4>
                  <ul className="text-green-800 space-y-1 list-disc list-inside">
                    <li>Go to Table Design tab in the ribbon</li>
                    <li>Find "Table Name" box (default: Table1)</li>
                    <li>Type: <code className="bg-gray-100 px-1 rounded">LedgerTable</code></li>
                    <li>Press Enter to apply the name</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">3.2 Test Table Features</h4>
                  <ul className="text-green-800 space-y-1 list-disc list-inside">
                    <li>Click filter arrow on Account column</li>
                    <li>Select "Cash" to see only cash transactions</li>
                    <li>Clear filter to show all transactions</li>
                    <li>Click in last row, add a test transaction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900">Verification Checkpoint 3</p>
                    <p className="text-sm text-green-800">
                      Before continuing: Confirm table name is "LedgerTable" in Table Design, 
                      filter buttons work on all columns, and new rows automatically format 
                      with currency when you add them.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Build Block 4 */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">Block 4</span>
                Final Polish and Save
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">4.1 Apply Professional Styling</h4>
                  <ul className="text-orange-800 space-y-1 list-disc list-inside">
                    <li>In Table Design, choose a professional table style</li>
                    <li>Adjust font size to 11 or 12 for readability</li>
                    <li>Ensure column headers are bold and clear</li>
                    <li>Check that banding colors are professional (not garish)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">4.2 Save Final Workbook</h4>
                  <ul className="text-orange-800 space-y-1 list-disc list-inside">
                    <li>Save your workbook (Ctrl+S or Cmd+S)</li>
                    <li>Name it clearly: "TechStart_LedgerTable_YourName.xlsx"</li>
                    <li>Keep this file—you'll use it in Lesson 05</li>
                    <li>Take a screenshot for your records</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-orange-900">Verification Checkpoint 4</p>
                    <p className="text-sm text-orange-800">
                      Before finishing: Save your file, reopen it to confirm table persists, 
                      and verify that all 12 original transactions plus any new ones are 
                      properly formatted.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Reference Model */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Reference Model: What Your Table Should Look Like
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="p-2 text-left border border-blue-300">Date</th>
                      <th className="p-2 text-left border border-blue-300">Description</th>
                      <th className="p-2 text-left border border-blue-300">Account</th>
                      <th className="p-2 text-left border border-blue-300">Type</th>
                      <th className="p-2 text-right border border-blue-300">Debit</th>
                      <th className="p-2 text-right border border-blue-300">Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-2 border border-blue-300">2/2/2025</td>
                      <td className="p-2 border border-blue-300">Bakery website billed</td>
                      <td className="p-2 border border-blue-300">Accounts Receivable</td>
                      <td className="p-2 border border-blue-300">Asset</td>
                      <td className="p-2 border border-blue-300 text-right">$2,200.00</td>
                      <td className="p-2 border border-blue-300 text-right">$0.00</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="p-2 border border-blue-300">2/2/2025</td>
                      <td className="p-2 border border-blue-300">Bakery website billed</td>
                      <td className="p-2 border border-blue-300">Service Revenue</td>
                      <td className="p-2 border border-blue-300">Revenue</td>
                      <td className="p-2 border border-blue-300 text-right">$0.00</td>
                      <td className="p-2 border border-blue-300 text-right">$2,200.00</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border border-blue-300">2/4/2025</td>
                      <td className="p-2 border border-blue-300">Supplies purchased</td>
                      <td className="p-2 border border-blue-300">Supplies Expense</td>
                      <td className="p-2 border border-blue-300">Expense</td>
                      <td className="p-2 border border-blue-300 text-right">$150.00</td>
                      <td className="p-2 border border-blue-300 text-right">$0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-blue-800 mt-2">
                <strong>Note:</strong> This is just the first 3 transactions. Your table should include 
                all 12 transactions with consistent formatting, blue/white banding, and filter arrows.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Definition of Done */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Definition of Done: Lesson 04 Complete When...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Technical Requirements</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Excel Table created from data range (Ctrl+T applied)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Table named "LedgerTable" (or similar clear name)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>6 columns: Date, Description, Account, Type, Debit, Credit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Currency formatting on Debit and Credit columns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Filter arrows visible on all column headers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Professional table styling applied</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Verification Tests</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Filter by Account works (shows subset of transactions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>New row automatically applies currency formatting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Workbook saved with clear filename</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Table persists when file is reopened</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>All 12 transactions present and formatted correctly</span>
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
                      By the end of Phase 4, you'll have a professional Excel Table containing 
                      Sarah's TechStart transaction data, properly formatted and structured for 
                      automated formulas in Lesson 05. This table is the foundation of Sarah's 
                      investor-ready smart ledger system.
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
                  <h4 className="font-semibold text-red-900 mb-2">Problem: Can't create table</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Data not in contiguous range</p>
                  <p className="text-red-800"><strong>Fix:</strong> Delete blank rows/columns between data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Problem: First row becomes header</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Forgot "My table has headers" checkbox</p>
                  <p className="text-red-800"><strong>Fix:</strong> Delete table, start over, check box</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Problem: Formatting lost on new rows</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Applied format before creating table</p>
                  <p className="text-red-800"><strong>Fix:</strong> Select table column, re-apply format</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Problem: Filter buttons missing</h4>
                  <p className="text-red-800 mb-1"><strong>Cause:</strong> Filter options turned off</p>
                  <p className="text-red-800"><strong>Fix:</strong> Table Design → Filter Button → On</p>
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
              Once your Excel Table meets all Definition of Done criteria, you're ready for 
              the assessment phase. In Phase 5, you'll demonstrate your understanding of 
              table structure and complete a brief artifact task.
            </p>
            <div className="bg-white p-4 rounded border border-purple-300 inline-block text-left max-w-lg">
              <p className="text-sm text-purple-900 font-medium mb-2">Next Phase Preview:</p>
              <p className="text-sm text-purple-800">
                Phase 5 includes a short technical check on Excel Tables and a brief 
                artifact task where you'll explain why your table structure decisions 
                matter for Sarah's investor presentation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson04Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}
