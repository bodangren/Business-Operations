import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import JournalEntryBuilding, { Scenario as JEScenario } from "@/components/exercises/JournalEntryBuilding"
import TAccountsVisualization from "@/components/accounting/TAccountsVisualization"
import { Brain, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

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
              🚀 Phase 4: Independent Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Advanced Excel Mastery Challenges
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Now it's time to prove your mastery! Sarah's TechStart Solutions is expanding 
              rapidly, and she needs your expertise to handle more complex transactions and 
              build advanced Excel systems that can scale with her growing business.
            </p>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              You'll work independently to create sophisticated ledger models, handle edge 
              cases, and design systems that would impress any potential investor. This is 
              your opportunity to demonstrate professional-level Excel and accounting skills.
            </p>
          </div>
        </section>

{/* Sample Data Download + Setup Instructions */}
<section className="max-w-4xl mx-auto">
  <Card className="border-emerald-200 bg-emerald-50">
    <CardHeader>
      <CardTitle className="text-emerald-900">
        Start Here: Download the Sample Journal Data
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/resources/unit01-ledger-basic-practice.xlsx"
          download
          className="inline-flex"
        >
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Download: unit01-ledger-basic-practice.xlsx
          </Button>
        </a>
        <p className="text-emerald-900 text-sm">
          File path (public): <code>/resources/unit01-ledger-basic-practice.xlsx</code>
        </p>
      </div>

      <div className="bg-white rounded border p-4">
        <h4 className="font-semibold text-emerald-900 mb-2">How to Use This File</h4>
        <ol className="list-decimal list-inside text-emerald-800 space-y-2 text-sm">
          <li>Open the downloaded file in Excel.</li>
          <li>
            Convert the data range to an <strong>Excel Table</strong> (Windows:
            <code className="mx-1 px-1 rounded bg-gray-100">Ctrl</code>+<code className="px-1 rounded bg-gray-100">T</code>,
            Mac: <code className="mx-1 px-1 rounded bg-gray-100">⌘</code>+<code className="px-1 rounded bg-gray-100">T</code>).
          </li>
          <li>
            Name the table <code className="px-1 rounded bg-gray-100">LedgerTable</code> (Table Design → Table Name).
          </li>
          <li>
            Keep the column headers exactly as provided:
            {" "}
            <code className="px-1 rounded bg-gray-100">Date</code>,
            {" "}
            <code className="px-1 rounded bg-gray-100">Description</code>,
            {" "}
            <code className="px-1 rounded bg-gray-100">Account</code>,
            {" "}
            <code className="px-1 rounded bg-gray-100">Type</code>,
            {" "}
            <code className="px-1 rounded bg-gray-100">Debit</code>,
            {" "}
            <code className="px-1 rounded bg-gray-100">Credit</code>.
          </li>
          <li>
            You can now complete the challenges below using
            {" "}
            <code className="px-1 rounded bg-gray-100">SUMIF</code> /
            <code className="mx-1 px-1 rounded bg-gray-100">SUMIFS</code> on
            <code className="mx-1 px-1 rounded bg-gray-100">LedgerTable</code>.
          </li>
        </ol>
      </div>

      <p className="text-emerald-900 text-sm">
        Tip: If the file opens in your browser, right-click the link and choose
        <em> “Save link as…”</em>, then open it in Excel.
      </p>
    </CardContent>
  </Card>
</section>


        {/* Challenge Scenarios */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            Independent Challenge: Advanced Business Scenarios
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Scenario 1: Multi-Client Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-purple-800 mb-3">
                  Sarah just landed 5 new clients in one week! Your challenge: Design an Excel 
                  Table system that can handle multiple revenue streams, track client payments 
                  separately, and maintain perfect trial balance accuracy.
                </p>
                <div className="bg-purple-50 p-3 rounded">
                  <h4 className="font-semibold text-purple-900 mb-1">Your Tasks:</h4>
                  <ul className="list-disc list-inside text-purple-800 space-y-1">
                    <li>Create SUMIF formulas for client-specific revenue tracking</li>
                    <li>Build automated accounts receivable aging reports</li>
                    <li>Design conditional formatting for overdue payments</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Scenario 2: Error Detection System
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-orange-800 mb-3">
                  Sarah's business partner accidentally entered some transactions incorrectly. 
                  Build an advanced error-checking system using SUMIF and conditional formatting 
                  to catch mistakes automatically.
                </p>
                <div className="bg-orange-50 p-3 rounded">
                  <h4 className="font-semibold text-orange-900 mb-1">Your Tasks:</h4>
                  <ul className="list-disc list-inside text-orange-800 space-y-1">
                    <li>Create "red flag" alerts for impossible account balances</li>
                    <li>Build duplicate transaction detection formulas</li>
                    <li>Design trial balance verification with detailed error reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advanced Journal Entry Building */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Master Complex Transactions</h3>
          <p className="text-lg leading-relaxed">
            Practice with sophisticated business transactions that require advanced understanding 
            of how Excel Tables and SUMIF formulas work together to maintain the accounting 
            equation balance.
          </p>
          
          {(() => {
            const availableAccounts = [
              'Cash','Accounts Receivable','Accounts Payable','Notes Payable','Service Revenue','Sales Revenue','Rent Expense','Supplies Expense','Utilities Expense','Inventory','Equipment','Unearned Revenue','Owner\'s Equity'
            ]
            const scenarios: JEScenario[] = [
              {
                id: 'advanced-1',
                description: 'Record a $2,200 website project billed to the bakery; client will pay next week.',
                correctEntry: [
                  { account: 'Accounts Receivable', debit: 2200, credit: 0 },
                  { account: 'Service Revenue', debit: 0, credit: 2200 }
                ],
                explanation: 'AR (asset) increases with a debit; Service Revenue increases with a credit.'
              },
              {
                id: 'advanced-2',
                description: 'Purchase $1,500 equipment on account (to be paid later).',
                correctEntry: [
                  { account: 'Equipment', debit: 1500, credit: 0 },
                  { account: 'Accounts Payable', debit: 0, credit: 1500 }
                ],
                explanation: 'Equipment (asset) increases with a debit; AP (liability) increases with a credit.'
              },
              {
                id: 'advanced-3',
                description: 'Pay $600 toward outstanding Accounts Payable.',
                correctEntry: [
                  { account: 'Accounts Payable', debit: 600, credit: 0 },
                  { account: 'Cash', debit: 0, credit: 600 }
                ],
                explanation: 'AP (liability) decreases with a debit; Cash (asset) decreases with a credit.'
              }
            ]
            return (
              <JournalEntryBuilding 
                title="Independent Practice: Advanced Entries"
                description="Handle billing, purchases on account, and paydowns with balanced entries."
                availableAccounts={availableAccounts}
                scenarios={scenarios}
              />
            )
          })()}
        </section>

        {/* Excel Formula Challenges */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Excel Formula Engineering Challenges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Challenge 1: Dynamic Account Summary</h4>
              <p className="text-blue-800 mb-2">
                Create a formula that automatically lists all unique account names from your 
                LedgerTable and calculates their current balances using SUMIF.
              </p>
              <div className="bg-white p-3 rounded border text-sm">
                <p className="font-medium text-blue-900">Hint:</p>
                <p className="text-blue-800">
                  Combine UNIQUE() function with SUMIF() to create a dynamic account summary. 
                  Consider how debits and credits affect different account types differently.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Challenge 2: Multi-Criteria Analysis</h4>
              <p className="text-blue-800 mb-2">
                Sarah wants to track revenue by both client AND month. Design a SUMIFS formula 
                system (note the "S" - plural) that can handle multiple criteria simultaneously.
              </p>
              <div className="bg-white p-3 rounded border text-sm">
                <p className="font-medium text-blue-900">Advanced Formula Pattern:</p>
                <code className="text-green-700 bg-gray-100 px-2 py-1 rounded text-xs">
                  =SUMIFS(LedgerTable[Credit], LedgerTable[Account], "Revenue", LedgerTable[Description], "*Client Name*", LedgerTable[Date], "&gt;="&amp;StartDate)
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Challenge 3: Professional Dashboard</h4>
              <p className="text-blue-800 mb-2">
                Create an investor-ready dashboard that shows key business metrics updated in 
                real-time as new transactions are added to your Excel Table.
              </p>
              <div className="bg-white p-3 rounded border text-sm">
                <p className="font-medium text-blue-900">Dashboard Metrics to Include:</p>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Current cash balance (positive = good, negative = alert)</li>
                  <li>Total revenue this month vs. last month</li>
                  <li>Number of active clients (distinct count)</li>
                  <li>Average transaction size</li>
                  <li>Days since last client payment</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* T-Accounts Visualization */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Visualize the Accounting Equation</h3>
          <p className="text-lg leading-relaxed">
            See how your Excel Tables and SUMIF formulas maintain the fundamental accounting 
            equation across all of Sarah's business transactions.
          </p>
          
          <TAccountsVisualization />
        </section>

        {/* Self-Assessment Checklist */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Professional Standards Self-Check
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-4">
              Before moving to the assessment phase, verify that your Excel system meets 
              professional investor standards:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✓ Technical Requirements</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Excel Table properly formatted with structured references</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>SUMIF formulas calculate all major account balances correctly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Trial balance formula shows "BALANCED" status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>System handles new transactions automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Error-checking rules identify common mistakes</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-900 mb-2">✓ Business Value</h4>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Can generate account balances in under 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Professional formatting suitable for investor presentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Scalable system can handle business growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Clear documentation for future users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">□</span>
                    <span>Provides meaningful business insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Creative Application */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">Creative Challenge: Your Business Application</h3>
          <p className="text-purple-800 mb-4">
            Think beyond TechStart Solutions. How could Excel Tables and SUMIF functions revolutionize 
            financial management in other industries?
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-purple-900 mb-2">Restaurant Chain</h4>
              <p className="text-purple-700">
                Track revenue by location, menu item profitability, and supplier costs across 
                multiple franchise locations.
              </p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-purple-900 mb-2">E-commerce Startup</h4>
              <p className="text-purple-700">
                Monitor inventory costs, shipping expenses, and customer acquisition costs 
                by product category and marketing channel.
              </p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-purple-900 mb-2">Consulting Firm</h4>
              <p className="text-purple-700">
                Analyze billable hours by client, project profitability, and consultant 
                utilization rates across different service lines.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-purple-100 rounded">
            <h4 className="font-semibold text-purple-900 mb-2">Reflection Question:</h4>
            <p className="text-purple-800">
              Choose one of these industries (or propose your own). What specific Excel Tables 
              and SUMIF formulas would you design to give that business a competitive advantage? 
              What investor questions could your system answer instantly?
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
