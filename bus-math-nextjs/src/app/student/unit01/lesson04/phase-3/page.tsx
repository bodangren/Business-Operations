import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TransactionJournal from "@/components/accounting/TransactionJournal"
import { Construction, Users, Lightbulb, Target } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        lesson={lesson04Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Guided Practice Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Building Sarah's Smart Ledger System
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Now it's time to put your Excel Tables and SUMIF knowledge into practice! 
              You'll build Sarah's smart ledger step by step, using real TechStart Solutions 
              transaction data. This guided practice will transform her chaotic notebook 
              system into an investor-ready financial control system.
            </p>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Before you open Excel and build the real workbook, you'll practice the key decisions 
              and patterns here in a safe environment. This rehearsal will help you avoid common 
              mistakes and understand exactly why professional structure matters for investor trust.
            </p>
          </div>
        </section>

        {/* Step-by-Step Instructions */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Construction className="h-5 w-5" />
              Building Sarah's Professional Table: Practice Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Step 1: Define Column Structure</h4>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Decide columns: Date, Description, Account, Type, Debit, Credit</li>
                  <li>Ensure consistent column order across all rows</li>
                  <li>Plan for Account Type column (Asset, Liability, Equity, Revenue, Expense)</li>
                  <li>Think about how investors will read and verify this structure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Step 2: Apply Currency Formatting</h4>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Debit and Credit columns need 2 decimal places</li>
                  <li>Use comma separators for thousands</li>
                  <li>Add dollar signs consistently</li>
                  <li>Format negative values in red or parentheses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Step 3: Create Excel Table</h4>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Select any cell in your data range</li>
                  <li>Press Ctrl+T (Windows) or Cmd+T (Mac)</li>
                  <li>CRITICAL: Confirm "My table has headers" checkbox is checked</li>
                  <li>Rename table to "LedgerTable" in Table Design tab</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Step 4: Verify Professional Presentation</h4>
                <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                  <li>Check that table banding colors are professional</li>
                  <li>Verify headers are clear and readable</li>
                  <li>Test column filtering works correctly</li>
                  <li>Confirm table structure looks investor-ready</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Interactive Structure Practice */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Target className="h-6 w-6 text-green-600" />
            Practice: Organizing TechStart Transaction Data
          </h2>

          <p className="text-lg leading-relaxed">
            Use this interactive journal to practice recording Sarah's actual business transactions 
            and see how proper data organization works. This tool helps you understand 
            the structure decisions you'll make when building the Excel Table in Phase 4.
          </p>

          {(() => {
            const initialTransactions = [
              {
                id: 'u1-seed-1',
                entryNumber: 'JE001',
                date: '2025-02-02',
                description: 'Bakery website billed $2,200 on credit',
                clientFocus: 'TechStart Solutions',
                lines: [
                  { id: 'l1', account: 'Accounts Receivable', accountType: 'asset' as const, debit: 2200, credit: 0 },
                  { id: 'l2', account: 'Service Revenue', accountType: 'revenue' as const, debit: 0, credit: 2200 }
                ],
                isBalanced: true
              },
              {
                id: 'u1-seed-2',
                entryNumber: 'JE002',
                date: '2025-02-04',
                description: 'Supplies purchased for $150, paid cash',
                clientFocus: 'TechStart Solutions',
                lines: [
                  { id: 'l1', account: 'Supplies Expense', accountType: 'expense' as const, debit: 150, credit: 0 },
                  { id: 'l2', account: 'Cash', accountType: 'asset' as const, debit: 0, credit: 150 }
                ],
                isBalanced: true
              }
            ]
            return (
              <TransactionJournal
                title="Professional Table Structure Practice"
                clientTypes={["TechStart Solutions","E-commerce Business","Creative Agency"]}
                initialTransactions={initialTransactions}
                maxTransactions={15}
                showAnalytics={true}
              />
            )
          })()}
        </section>

        {/* Professional Standards Focus */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Professional Standards & Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-green-900 mb-2">Excel Table Benefits</h4>
              <ul className="text-green-800 space-y-1 list-disc list-inside">
                <li><strong>Structured References:</strong> LedgerTable[Account] instead of A1:A50</li>
                <li><strong>Auto-Expansion:</strong> New transactions automatically included</li>
                <li><strong>Built-in Filtering:</strong> Easy data analysis and review</li>
                <li><strong>Professional Appearance:</strong> Investor-ready formatting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">SUMIF Formula Advantages</h4>
              <ul className="text-green-800 space-y-1 list-disc list-inside">
                <li><strong>Dynamic Updates:</strong> Calculations refresh automatically</li>
                <li><strong>Error Reduction:</strong> No manual calculation mistakes</li>
                <li><strong>Scalability:</strong> Handles growing transaction volume</li>
                <li><strong>Audit Trail:</strong> Clear formula logic for verification</li>
              </ul>
            </div>
          </div>
          </div>
        </section>

        {/* Think-Pair-Share Discussion */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk: Building Professional Systems
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-purple-900 mb-2">
              Discussion Prompt (5 minutes):
            </p>
            <p className="text-purple-800 mb-4">
              After working with Sarah's transaction data, discuss with a partner:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">Technical Discussion:</h4>
                <ul className="list-disc list-inside space-y-1 text-purple-800">
                  <li>Which SUMIF formula was most challenging to construct?</li>
                  <li>How does the Excel Table structure prevent common errors?</li>
                  <li>What happens when you add a new transaction to the table?</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">Business Application:</h4>
                <ul className="list-disc list-inside space-y-1 text-purple-800">
                  <li>How would this system help Sarah make daily business decisions?</li>
                  <li>What questions could investors ask that this system answers instantly?</li>
                  <li>How does this compare to her original notebook method?</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Error Prevention & Testing */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-orange-600" />
            Common Challenges & Solutions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-sm text-orange-800">Formula Troubleshooting</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-2">
                  <div>
                    <h5 className="font-semibold text-orange-900">Problem: #NAME? error</h5>
                    <p className="text-orange-700">Solution: Check table name spelling (LedgerTable)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-900">Problem: Wrong total calculated</h5>
                    <p className="text-orange-700">Solution: Verify criteria text matches exactly ("Cash" not "cash")</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-900">Problem: Formula doesn't update</h5>
                    <p className="text-orange-700">Solution: Ensure data is formatted as Excel Table</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-sm text-green-800">Validation Checks</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="space-y-2">
                  <div>
                    <h5 className="font-semibold text-green-900">✓ Trial Balance Test</h5>
                    <p className="text-green-700">Total debits should equal total credits</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900">✓ Manual Verification</h5>
                    <p className="text-green-700">Spot-check SUMIF results with manual calculations</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900">✓ Expansion Test</h5>
                    <p className="text-green-700">Add new row - formulas should include it automatically</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sarah's Success Story */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sarah's Transformation</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Before (Notebook System)</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• 20+ minutes to calculate cash balance</li>
                <li>• Different answer each time</li>
                <li>• No way to verify accuracy</li>
                <li>• Difficult to find specific transactions</li>
                <li>• Not scalable for growth</li>
              </ul>
            </div>
            <div>
              <span className="text-2xl">→</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">After (Excel Smart Ledger)</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• 30 seconds for any account balance</li>
                <li>• Perfect accuracy every time</li>
                <li>• Built-in trial balance verification</li>
                <li>• Instant filtering and searching</li>
                <li>• Automatically scales with business growth</li>
              </ul>
            </div>
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
