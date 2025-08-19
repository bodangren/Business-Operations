import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Users, AlertTriangle, CheckCircle2 } from "lucide-react"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Building Sarah's Excel Tables System
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Step-by-step construction of a professional Excel Tables system for automated month-end procedures.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Step-by-Step Instructions Card */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Settings className="h-6 w-6" />
                Building Your Month-End Excel Tables System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-blue-800">
                <p>
                  Now we'll build Sarah's Excel Tables system step-by-step. Follow these instructions carefully 
                  to create a professional automation foundation that will support your Month-End Wizard.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-100 p-6 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-4 text-lg">Step 1: Create the Transaction Table</h4>
                  <ol className="list-decimal list-inside space-y-3 text-blue-800">
                    <li><strong>Open Excel and create headers:</strong> Date, Description, Account, Type, Amount</li>
                    <li><strong>Add sample transactions:</strong> Include at least 10 sample business transactions</li>
                    <li><strong>Select all data (Ctrl+A)</strong> and press <kbd className="bg-blue-200 px-2 py-1 rounded">Ctrl+T</kbd></li>
                    <li><strong>Name your table:</strong> Go to Table Design → Table Name and enter "TransactionTable"</li>
                    <li><strong>Test auto-expansion:</strong> Add a new row below the table and watch it expand automatically</li>
                  </ol>
                </div>

                <div className="bg-blue-100 p-6 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-4 text-lg">Step 2: Build SUMIF Functions</h4>
                  <ol className="list-decimal list-inside space-y-3 text-blue-800">
                    <li><strong>Revenue Total:</strong> <code className="bg-blue-200 px-2 py-1 rounded text-sm">=SUMIF(TransactionTable[Type],"Revenue",TransactionTable[Amount])</code></li>
                    <li><strong>Expense Total:</strong> <code className="bg-blue-200 px-2 py-1 rounded text-sm">=SUMIF(TransactionTable[Type],"Expense",TransactionTable[Amount])</code></li>
                    <li><strong>Accrual Total:</strong> <code className="bg-blue-200 px-2 py-1 rounded text-sm">=SUMIF(TransactionTable[Type],"Accrual",TransactionTable[Amount])</code></li>
                    <li><strong>Test formulas:</strong> Add new transactions and verify formulas update automatically</li>
                  </ol>
                </div>

                <div className="bg-blue-100 p-6 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-900 mb-4 text-lg">Step 3: Create Named Ranges</h4>
                  <ol className="list-decimal list-inside space-y-3 text-blue-800">
                    <li><strong>Go to Formulas tab → Name Manager</strong></li>
                    <li><strong>Create "MonthlyRevenue":</strong> Link to your revenue SUMIF formula</li>
                    <li><strong>Create "MonthlyExpenses":</strong> Link to your expense SUMIF formula</li>
                    <li><strong>Create "NetIncome":</strong> =MonthlyRevenue-MonthlyExpenses</li>
                    <li><strong>Test references:</strong> Use these names in other formulas</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Practice Component */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Interactive Practice: TechStart Solutions Example</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  Let's practice with Sarah's actual TechStart Solutions data. Use the following sample transactions 
                  to build your Excel Tables system:
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border border-green-300 bg-white rounded">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="border border-green-300 px-3 py-2 text-left text-green-900">Date</th>
                      <th className="border border-green-300 px-3 py-2 text-left text-green-900">Description</th>
                      <th className="border border-green-300 px-3 py-2 text-left text-green-900">Account</th>
                      <th className="border border-green-300 px-3 py-2 text-left text-green-900">Type</th>
                      <th className="border border-green-300 px-3 py-2 text-left text-green-900">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-green-800 text-sm">
                    <tr>
                      <td className="border border-green-300 px-3 py-2">3/1/2024</td>
                      <td className="border border-green-300 px-3 py-2">Website design - Fitness Studio</td>
                      <td className="border border-green-300 px-3 py-2">Service Revenue</td>
                      <td className="border border-green-300 px-3 py-2">Revenue</td>
                      <td className="border border-green-300 px-3 py-2">$1,200</td>
                    </tr>
                    <tr>
                      <td className="border border-green-300 px-3 py-2">3/5/2024</td>
                      <td className="border border-green-300 px-3 py-2">Office supplies</td>
                      <td className="border border-green-300 px-3 py-2">Office Expenses</td>
                      <td className="border border-green-300 px-3 py-2">Expense</td>
                      <td className="border border-green-300 px-3 py-2">$150</td>
                    </tr>
                    <tr>
                      <td className="border border-green-300 px-3 py-2">3/15/2024</td>
                      <td className="border border-green-300 px-3 py-2">SEO consulting - earned</td>
                      <td className="border border-green-300 px-3 py-2">Accounts Receivable</td>
                      <td className="border border-green-300 px-3 py-2">Accrual</td>
                      <td className="border border-green-300 px-3 py-2">$500</td>
                    </tr>
                    <tr>
                      <td className="border border-green-300 px-3 py-2">3/20/2024</td>
                      <td className="border border-green-300 px-3 py-2">Software subscription</td>
                      <td className="border border-green-300 px-3 py-2">Software Expenses</td>
                      <td className="border border-green-300 px-3 py-2">Expense</td>
                      <td className="border border-green-300 px-3 py-2">$89</td>
                    </tr>
                    <tr>
                      <td className="border border-green-300 px-3 py-2">3/25/2024</td>
                      <td className="border border-green-300 px-3 py-2">Social media package - upfront payment</td>
                      <td className="border border-green-300 px-3 py-2">Deferred Revenue</td>
                      <td className="border border-green-300 px-3 py-2">Deferral</td>
                      <td className="border border-green-300 px-3 py-2">$600</td>
                    </tr>
                    <tr>
                      <td className="border border-green-300 px-3 py-2">3/31/2024</td>
                      <td className="border border-green-300 px-3 py-2">Computer equipment depreciation</td>
                      <td className="border border-green-300 px-3 py-2">Depreciation Expense</td>
                      <td className="border border-green-300 px-3 py-2">Adjustment</td>
                      <td className="border border-green-300 px-3 py-2">$75</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-100 p-4 rounded border border-green-300">
                <h5 className="font-semibold text-green-900 mb-2">Practice Challenge:</h5>
                <ol className="list-decimal list-inside space-y-1 text-green-800 text-sm">
                  <li>Create an Excel Table with this data</li>
                  <li>Build SUMIF formulas to calculate totals by Type</li>
                  <li>Add one new transaction and verify your formulas update automatically</li>
                  <li>Create named ranges for key totals</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Professional Standards Focus */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Professional Excel Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-orange-800">
                <p>
                  Professional Excel models follow specific standards that make them reliable, auditable, 
                  and scalable. Here are the key principles Sarah follows:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-900">✅ Best Practices:</h4>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use descriptive table and range names</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Structured references for all formulas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Consistent formatting and layouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Document assumptions and calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Test with sample data before automation</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-900">⚠️ Common Mistakes to Avoid:</h4>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Hard-coded cell references (A1:A50)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Unnamed or poorly named ranges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Inconsistent table structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>No validation or error checking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Overly complex single formulas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Turn and Talk Discussion */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Building Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="font-medium text-purple-900">
                  Discussion Prompt (5 minutes):
                </p>
                <p className="text-purple-800">
                  Share your Excel Tables building experience with a partner:
                </p>
                <ul className="list-disc list-inside space-y-1 text-purple-800">
                  <li>Which step was most challenging when creating your table?</li>
                  <li>How did the auto-expansion feature change your understanding of Excel?</li>
                  <li>What differences do you notice between structured references and cell references?</li>
                  <li>What questions do you have about SUMIF functions or named ranges?</li>
                </ul>
                
                <div className="bg-purple-100 p-3 rounded border border-purple-300">
                  <p className="text-sm text-purple-700">
                    <strong>Peer Review:</strong> Exchange Excel files with your partner and test each other's 
                    formulas by adding new transactions. Do the SUMIF functions update correctly?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error Prevention & Testing */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">Error Prevention & Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-red-800">
                <p>
                  Before moving to automation, we must test our system thoroughly. Professional Excel models 
                  include robust error-checking and validation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-3">Testing Checklist:</h5>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Add 3 new transactions - do formulas update?</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Delete a row - does table resize correctly?</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Test with different transaction types</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Verify named ranges link correctly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Check calculation accuracy manually</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h5 className="font-semibold text-red-900 mb-3">Common Error Fixes:</h5>
                  <ul className="space-y-2 text-red-800 text-sm">
                    <li><strong>#REF! Error:</strong> Table references broken - recreate table</li>
                    <li><strong>#NAME? Error:</strong> Table name misspelled in formula</li>
                    <li><strong>Zero results:</strong> Check criteria spelling in SUMIF</li>
                    <li><strong>Wrong totals:</strong> Verify data types (text vs numbers)</li>
                    <li><strong>Missing data:</strong> Ensure table headers are correct</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sarah's Success Story */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Sarah's Success: The Foundation is Set</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  With her Excel Tables system in place, Sarah had built the foundation for her Month-End Wizard. 
                  Her structured references meant she would never again have to manually update formula ranges. 
                  Her SUMIF functions automatically categorized transactions by type. And her named ranges made 
                  the entire system readable and maintainable.
                </p>
                
                <div className="bg-green-100 p-4 rounded-lg border border-green-300 not-prose">
                  <blockquote className="text-green-900 italic">
                    "For the first time, I felt like my Excel system was actually smarter than me. 
                    Adding new transactions didn't break anything—it just worked. That's when I knew 
                    I was ready for the next step: full automation."
                  </blockquote>
                  <p className="text-sm text-green-700 mt-2">— Sarah Chen, TechStart Solutions</p>
                </div>

                <p>
                  You've now built the same professional foundation. In the next phase, we'll explore 
                  advanced applications and challenge scenarios that will prepare you for real-world 
                  month-end automation.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}