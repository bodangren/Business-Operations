import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, AlertTriangle, CheckCircle } from 'lucide-react'
import { TransactionJournal } from "@/components/accounting/TransactionJournal"
import { TrialBalanceSorting } from "@/components/drag-drop-exercises/TrialBalanceSorting"
import { lesson03Data, unit01Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[3]

const complexScenarios = [
  {
    id: "scenario1",
    title: "Multiple Account Transaction",
    description: "Sarah purchases $500 of design software, paying $200 cash immediately and agreeing to pay $300 next month.",
    hint: "This affects three accounts: Software (asset), Cash (asset), and Accounts Payable (liability)",
    solution: {
      accounts: ["Software", "Cash", "Accounts Payable"],
      debits: [{ account: "Software", amount: 500 }],
      credits: [
        { account: "Cash", amount: 200 },
        { account: "Accounts Payable", amount: 300 }
      ]
    }
  },
  {
    id: "scenario2", 
    title: "Complex Revenue Transaction",
    description: "Sarah completes a $2,000 website project. The client pays $1,200 immediately and will pay the remaining $800 in 30 days.",
    hint: "Cash increases, Accounts Receivable increases, and Revenue increases",
    solution: {
      accounts: ["Cash", "Accounts Receivable", "Service Revenue"],
      debits: [
        { account: "Cash", amount: 1200 },
        { account: "Accounts Receivable", amount: 800 }
      ],
      credits: [{ account: "Service Revenue", amount: 2000 }]
    }
  },
  {
    id: "scenario3",
    title: "Owner Investment Transaction",
    description: "Sarah invests an additional $3,000 of her personal money into TechStart Solutions to fund growth.",
    hint: "This increases both Cash and Owner's Equity",
    solution: {
      accounts: ["Cash", "Owner's Capital"],
      debits: [{ account: "Cash", amount: 3000 }],
      credits: [{ account: "Owner's Capital", amount: 3000 }]
    }
  }
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Independent Practice Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🧠 Phase 4: Independent Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Complex Transactions & Balance Verification
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah is ready for more challenging scenarios. Now you'll work independently to 
              create journal entries for complex transactions that involve multiple accounts, 
              and verify your work using trial balance techniques.
            </p>
          </div>
        </section>

        {/* Sarah's Challenge */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Sarah's Advanced Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-orange-800">
                <p>
                  Sarah's business is growing, and her transactions are becoming more sophisticated. 
                  She's no longer dealing with simple one-to-one exchanges. Some transactions now 
                  involve multiple accounts, partial payments, and credit arrangements.
                </p>
                <p>
                  This is where the systematic debit and credit rules really prove their value. 
                  No matter how complex the transaction, the same DEA LER principles apply, 
                  and the fundamental rule remains: <strong>total debits must equal total credits.</strong>
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Success Criteria for Independent Work:</h4>
                <ul className="text-orange-800 space-y-1">
                  <li>✅ Correctly identify all accounts affected by each transaction</li>
                  <li>✅ Apply DEA LER rules consistently to determine debits and credits</li>
                  <li>✅ Ensure every journal entry balances (debits = credits)</li>
                  <li>✅ Verify overall ledger balance using trial balance techniques</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Complex Scenario Examples */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Complex Business Scenarios
          </h2>
          
          <div className="grid gap-6">
            {complexScenarios.map((scenario, index) => (
              <Card key={scenario.id} className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Scenario {index + 1}: {scenario.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Transaction:</h4>
                    <p className="text-blue-800 text-lg">{scenario.description}</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                      <strong>Thinking Hint:</strong> {scenario.hint}
                    </p>
                  </div>
                  
                  <details className="bg-gray-50 p-3 rounded-lg">
                    <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                      💡 Click to reveal solution approach
                    </summary>
                    <div className="mt-3 space-y-2">
                      <p className="font-medium text-gray-800">Accounts involved:</p>
                      <ul className="text-gray-700 text-sm list-disc list-inside">
                        {scenario.solution.accounts.map((account, i) => (
                          <li key={i}>{account}</li>
                        ))}
                      </ul>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                          <p className="font-medium text-green-800">Debits:</p>
                          {scenario.solution.debits.map((debit, i) => (
                            <p key={i} className="text-green-700 text-sm font-mono">
                              {debit.account}: ${debit.amount.toLocaleString()}
                            </p>
                          ))}
                        </div>
                        <div>
                          <p className="font-medium text-red-800">Credits:</p>
                          {scenario.solution.credits.map((credit, i) => (
                            <p key={i} className="text-red-700 text-sm font-mono">
                              {credit.account}: ${credit.amount.toLocaleString()}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive Transaction Journal */}
        <section className="max-w-6xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                Independent Practice: Build Your Transaction Journal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-6">
                Use this interactive journal to practice recording complex transactions. 
                Work through the scenarios above or create your own TechStart Solutions transactions. 
                The system will help you verify that your entries balance correctly.
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <TransactionJournal />
          </div>
        </section>

        {/* Trial Balance Practice */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Verification Challenge: Trial Balance Sorting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-purple-800">
                <p>
                  After recording multiple transactions, Sarah needs to verify that her ledger 
                  is still in balance. This is where the trial balance becomes essential—it's 
                  the accountant's quality control check.
                </p>
                <p>
                  Your challenge: organize accounts into their correct debit and credit balance 
                  categories, then verify that total debits equal total credits.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Remember the Pattern:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-green-800">Normal DEBIT Balances (DEA):</p>
                    <ul className="text-green-700 list-disc list-inside">
                      <li>Assets (Cash, Equipment, Accounts Receivable)</li>
                      <li>Expenses (Rent, Supplies, Advertising)</li>
                      <li>Dividends/Owner Draws</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-800">Normal CREDIT Balances (LER):</p>
                    <ul className="text-red-700 list-disc list-inside">
                      <li>Liabilities (Accounts Payable, Notes Payable)</li>
                      <li>Equity (Owner's Capital, Retained Earnings)</li>
                      <li>Revenue (Service Revenue, Sales)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <TrialBalanceSorting />
          </div>
        </section>

        {/* Self-Assessment */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-700">Independent Practice Self-Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 mb-4">
                Reflect on your independent practice session. Rate your confidence level on each skill:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>□ I can identify all accounts affected by complex transactions</li>
                    <li>□ I consistently apply DEA LER rules correctly</li>
                    <li>□ I ensure all journal entries balance</li>
                    <li>□ I can prepare and interpret a trial balance</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-3">Business Understanding</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>□ I understand why each transaction affects specific accounts</li>
                    <li>□ I can explain the business story behind each journal entry</li>
                    <li>□ I recognize how this system prevents errors</li>
                    <li>□ I see how this foundation enables Excel automation</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800">
                  <strong>Next Steps:</strong> If you're confident in these skills, you're ready for 
                  the assessment phase. If not, revisit the guided practice or ask for additional 
                  help with specific concepts before moving forward.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preview of Assessment */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-700">Coming Up Next: Comprehensive Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600">
                In the assessment phase, you'll demonstrate mastery of debit and credit rules 
                through a comprehensive quiz covering T-account construction, journal entries, 
                and trial balance preparation. This assessment will verify that you're ready 
                to move forward with building Excel-based ledger systems.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}