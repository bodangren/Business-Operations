import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Wrench, Target } from 'lucide-react'
import JournalEntryBuilding from "@/components/exercises/JournalEntryBuilding"
import { TAccountSimple } from "@/components/accounting/TAccountSimple"
import { lesson03Data, unit01Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[2]

const practiceTransactions = [
  {
    id: "trans1",
    description: "Sarah receives $1,100 cash payment from the dental office for completed SEO work",
    accounts: ["Cash", "Service Revenue"],
    amounts: [1100, 1100],
    debits: ["Cash"],
    credits: ["Service Revenue"]
  },
  {
    id: "trans2", 
    description: "Sarah pays $800 rent for her home office using business funds",
    accounts: ["Rent Expense", "Cash"],
    amounts: [800, 800],
    debits: ["Rent Expense"],
    credits: ["Cash"]
  }
]

const cashTAccountUpdated = {
  accountName: "Cash",
  accountType: "asset" as const,
  debits: [
    {
      id: "debit-1",
      date: "Jan 5",
      description: "Service Revenue - Bakery website",
      amount: 2200,
      reference: "Invoice #001"
    },
    {
      id: "debit-2", 
      date: "Jan 12",
      description: "Service Revenue - Dental office SEO",
      amount: 1100,
      reference: "Payment #002"
    }
  ],
  credits: [
    {
      id: "credit-1",
      date: "Jan 8", 
      description: "Rent Expense",
      amount: 800,
      reference: "Check #101"
    }
  ]
}

const serviceRevenueTAccount = {
  accountName: "Service Revenue",
  accountType: "revenue" as const,
  debits: [],
  credits: [
    {
      id: "credit-1",
      date: "Jan 5",
      description: "Bakery website project",
      amount: 2200,
      reference: "Invoice #001"
    },
    {
      id: "credit-2",
      date: "Jan 12", 
      description: "Dental office SEO work",
      amount: 1100,
      reference: "Payment #002"
    }
  ]
}

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Guided Practice Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Recording TechStart Transactions with T-Accounts
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Now that Sarah understands the DEA LER rules, let's practice applying them to her 
              actual business transactions. We'll use T-accounts to visualize how each transaction 
              affects her accounts and maintain perfect balance.
            </p>
          </div>
        </section>

        {/* Sarah's Practice Session */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Wrench className="h-6 w-6" />
                Sarah's Practice Session
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-purple-800">
                <p>
                  Sarah sits down with her notebook of transactions and decides to practice the 
                  systematic approach. She'll take each transaction, identify the accounts involved, 
                  apply the DEA LER rules, and record everything in T-account format.
                </p>
                <p>
                  Her goal is to become so comfortable with this process that she can later 
                  translate it into Excel formulas that will automatically maintain her ledger's balance.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Step-by-Step Example */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Step-by-Step Example: Dental Office Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Transaction:</h4>
                <p className="text-blue-800 text-lg">
                  "Sarah receives $1,100 cash payment from the dental office for completed SEO work."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Step 1: Identify What Changed</h4>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Cash increased by $1,100</li>
                    <li>• Service Revenue increased by $1,100</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Step 2: Apply DEA LER Rules</h4>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Cash is an Asset → increases with DEBIT</li>
                    <li>• Service Revenue → increases with CREDIT</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Step 3: Journal Entry</h4>
                <div className="font-mono text-blue-800 space-y-1">
                  <p>Debit: Cash $1,100</p>
                  <p>Credit: Service Revenue $1,100</p>
                </div>
                <div className="mt-2 p-2 bg-blue-100 rounded">
                  <p className="text-blue-700 font-medium">✅ Perfect Balance: $1,100 debits = $1,100 credits</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Updated T-Accounts */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sarah's Updated T-Accounts
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <TAccountSimple 
              {...cashTAccountUpdated}
              title="Cash Account (Asset)"
              showBalance={true}
              showFormulas={false}
            />
            <TAccountSimple 
              {...serviceRevenueTAccount}
              title="Service Revenue Account (Revenue)"
              showBalance={true}
              showFormulas={false}
            />
          </div>
        </section>

        {/* Interactive Practice */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Your Turn: Interactive Journal Entry Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                Practice building journal entries for TechStart Solutions transactions. 
                Use the DEA LER rules you've learned to determine which accounts to debit and credit.
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <JournalEntryBuilding />
          </div>
        </section>

        {/* Turn and Talk Discussion */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-orange-900 mb-2">
                Discussion Prompt (4 minutes):
              </p>
              <p className="text-orange-800 mb-2">
                After practicing with the interactive journal entry builder, discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-800">
                <li>
                  <strong>Pattern Recognition:</strong> What patterns do you notice in how different 
                  types of accounts behave with debits and credits?
                </li>
                <li>
                  <strong>Error Prevention:</strong> How does the "debits must equal credits" rule 
                  help catch mistakes before they become bigger problems?
                </li>
                <li>
                  <strong>Business Insight:</strong> How do T-accounts help Sarah see the full 
                  picture of her business activity better than her old notebook system?
                </li>
                <li>
                  <strong>Automation Thinking:</strong> What parts of this process could be 
                  automated in Excel, and what parts require human judgment?
                </li>
              </ul>
              <div className="mt-4 p-3 bg-orange-100 rounded border border-orange-200">
                <p className="text-sm text-orange-700">
                  <strong>Discussion Goal:</strong> Students should recognize that systematic 
                  debit/credit rules create a logical framework that can be automated, while 
                  business transaction analysis requires understanding and judgment.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Learning Points */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-700">Key Learning Points from Guided Practice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-2">Systematic Approach Works</h4>
                  <p className="text-gray-700 text-sm">
                    Following the same steps (identify changes → apply DEA LER → check balance) 
                    ensures consistent, accurate results every time.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-2">T-Accounts Tell Stories</h4>
                  <p className="text-gray-700 text-sm">
                    Each T-account shows the complete history of that account's activity, 
                    making trends and patterns visible at a glance.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-2">Balance Is Automatic</h4>
                  <p className="text-gray-700 text-sm">
                    When debit/credit rules are followed correctly, the accounting equation 
                    stays balanced without additional effort.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-2">Foundation for Automation</h4>
                  <p className="text-gray-700 text-sm">
                    This systematic process can be translated into Excel formulas and 
                    conditional formatting for automatic error checking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preview of Next Phase */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-700">Coming Up Next: Independent Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600">
                In the next phase, Sarah will tackle more complex transactions independently, 
                including transactions with multiple debits or credits, and learn to verify 
                her work using trial balance techniques. You'll get to practice with realistic 
                business scenarios that test your mastery of debit and credit rules.
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