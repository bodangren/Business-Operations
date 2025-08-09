import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckSquare, Award, Target } from 'lucide-react'
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { TrialBalanceSorting } from "@/components/drag-drop-exercises/TrialBalanceSorting"
import { lesson03Data, unit01Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4]

const assessmentQuestions = [
  {
    id: "q1",
    question: "According to the DEA LER system, which of the following accounts would INCREASE with a debit?",
    answers: [
      "Cash, Equipment, and Rent Expense",
      "Service Revenue, Accounts Payable, and Owner's Capital",
      "Accounts Payable, Service Revenue, and Cash",
      "Owner's Capital, Equipment, and Service Revenue"
    ],
    explanation: "Cash and Equipment are Assets, and Rent Expense is an Expense. All three are part of DEA, which increases with debits."
  },
  {
    id: "q2",
    question: "Sarah pays $300 for office supplies using cash. What is the correct journal entry?",
    answers: [
      "Debit Supplies $300, Credit Cash $300",
      "Debit Cash $300, Credit Supplies $300", 
      "Debit Supplies Expense $300, Credit Supplies $300",
      "Credit Supplies $300, Debit Accounts Payable $300"
    ],
    explanation: "Supplies (asset) increases with a debit, Cash (asset) decreases with a credit. Both are assets, but one increases while the other decreases."
  },
  {
    id: "q3",
    question: "Which statement about T-accounts is TRUE?",
    answers: [
      "Debits are always recorded on the left side, credits on the right side",
      "Assets are always recorded on the right side of T-accounts",
      "Credits increase all account types",
      "The debit side shows what the business owes"
    ],
    explanation: "This is the fundamental structure of T-accounts: debits (Dr.) always go on the left, credits (Cr.) always go on the right, regardless of account type."
  },
  {
    id: "q4",
    question: "Sarah receives $1,500 from a client but won't start the work until next month. The correct journal entry is:",
    answers: [
      "Debit Cash $1,500, Credit Deferred Revenue $1,500",
      "Debit Cash $1,500, Credit Service Revenue $1,500",
      "Debit Accounts Receivable $1,500, Credit Service Revenue $1,500",
      "Debit Deferred Revenue $1,500, Credit Cash $1,500"
    ],
    explanation: "Cash increases (debit), but since work hasn't been performed, this creates a liability (Deferred Revenue) that increases with a credit."
  },
  {
    id: "q5",
    question: "In a trial balance, if total debits equal $25,000, then total credits must equal:",
    answers: [
      "$25,000",
      "More than $25,000",
      "Less than $25,000", 
      "It depends on the types of accounts"
    ],
    explanation: "The fundamental principle of double-entry bookkeeping requires that total debits always equal total credits. This is how the accounting equation stays balanced."
  },
  {
    id: "q6",
    question: "Which accounts would normally appear in the CREDIT column of a trial balance?",
    answers: [
      "Accounts Payable, Service Revenue, and Owner's Capital",
      "Cash, Accounts Receivable, and Equipment",
      "Rent Expense, Supplies, and Advertising Expense",
      "Cash, Service Revenue, and Accounts Payable"
    ],
    explanation: "These are all LER accounts (Liabilities, Equity, Revenue) which have normal credit balances and appear in the credit column of a trial balance."
  },
  {
    id: "q7",
    question: "Sarah buys $2,000 of equipment, paying $800 cash and signing a note for the balance. This transaction affects:",
    answers: [
      "3 accounts: Equipment (+$2,000 debit), Cash (-$800 credit), Notes Payable (+$1,200 credit)",
      "2 accounts: Equipment (+$2,000 debit), Cash (-$2,000 credit)",
      "2 accounts: Equipment (+$2,000 debit), Notes Payable (+$2,000 credit)",
      "4 accounts: Equipment, Cash, Notes Payable, and Accounts Payable"
    ],
    explanation: "Equipment increases by $2,000 (debit), Cash decreases by $800 (credit), and Notes Payable increases by $1,200 (credit). Total debits ($2,000) = Total credits ($800 + $1,200)."
  },
  {
    id: "q8",
    question: "Why is the rule 'debits must equal credits' essential for Sarah's self-auditing ledger?",
    answers: [
      "It ensures the accounting equation stays balanced and errors are immediately detected",
      "It follows GAAP accounting standards required by law",
      "It makes the ledger easier to read and understand",
      "It reduces the amount of paperwork needed"
    ],
    explanation: "When debits equal credits, the accounting equation (Assets = Liabilities + Equity) automatically stays balanced. Any imbalance immediately signals an error, making the ledger self-auditing."
  },
  {
    id: "q9",
    question: "Which scenario represents the correct application of debit and credit rules?",
    answers: [
      "Paying rent decreases Cash (credit) and increases Rent Expense (debit)",
      "Earning revenue increases Cash (credit) and increases Service Revenue (debit)",
      "Buying supplies increases Supplies (credit) and decreases Cash (debit)",
      "Taking a loan increases Cash (debit) and decreases Notes Payable (credit)"
    ],
    explanation: "Rent Expense (expense) increases with debit, Cash (asset) decreases with credit. This follows DEA LER rules correctly."
  },
  {
    id: "q10",
    question: "What makes Sarah's T-account system superior to her old notebook method?",
    answers: [
      "It provides systematic organization, automatic balance verification, and professional credibility",
      "It requires less time to maintain than notebooks",
      "It uses fewer pages than traditional record-keeping",
      "It eliminates the need for detailed transaction descriptions"
    ],
    explanation: "T-accounts create systematic organization (left/right structure), enable automatic error detection (debits = credits), and demonstrate professional accounting knowledge to investors and lenders."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Assessment Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Debit & Credit Rules Mastery Check
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Time to demonstrate your mastery of debit and credit rules! This comprehensive 
              assessment covers T-account construction, journal entries, and trial balance 
              preparation—all essential skills for building Sarah's self-auditing ledger system.
            </p>
          </div>
        </section>

        {/* Assessment Instructions */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Assessment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-blue-800">
                <p>
                  This assessment evaluates your understanding of the systematic debit and credit 
                  rules that form the foundation of all professional accounting systems.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">What You'll Demonstrate:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>✓ Mastery of DEA LER debit/credit rules</li>
                    <li>✓ Ability to analyze complex transactions</li>
                    <li>✓ Understanding of T-account structure</li>
                    <li>✓ Trial balance preparation skills</li>
                    <li>✓ Connection to business applications</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Success Criteria:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• 8/10 or higher demonstrates mastery</li>
                    <li>• 7/10 shows good understanding</li>
                    <li>• 6/10 indicates need for review</li>
                    <li>• Below 6/10 requires additional practice</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  <strong>Study Tip:</strong> Before starting, review the DEA LER acronym: 
                  <em>Dividends, Expenses, Assets</em> increase with debits; 
                  <em>Liabilities, Equity, Revenue</em> increase with credits.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive Assessment */}
        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Debit & Credit Rules Assessment"
            description="Demonstrate your mastery of debit and credit rules, T-account construction, and transaction analysis"
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        {/* Practical Application: Trial Balance */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <CheckSquare className="h-6 w-6" />
                Practical Application: Trial Balance Construction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-purple-800">
                <p>
                  Complete your assessment by demonstrating trial balance skills. This practical 
                  exercise shows you can organize accounts correctly and verify that the fundamental 
                  accounting equation remains in balance.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Assessment Criteria:</h4>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Correctly categorize each account as normally having a debit or credit balance</li>
                  <li>• Demonstrate understanding of account types (Assets, Liabilities, Equity, Revenue, Expenses)</li>
                  <li>• Show that total debits equal total credits</li>
                  <li>• Complete the exercise efficiently and accurately</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <TrialBalanceSorting />
          </div>
        </section>

        {/* Performance Reflection */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Assessment Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  After completing the assessment, take a moment to reflect on your performance 
                  and readiness for the next phase of building Sarah's Smart Ledger.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Excellent (8-10/10)</h4>
                  <p className="text-green-800 text-sm">
                    You've mastered debit and credit rules! You're ready to build Excel formulas 
                    that automate these principles in Sarah's self-auditing ledger.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Good (6-7/10)</h4>
                  <p className="text-green-800 text-sm">
                    You understand the core concepts well. Review any missed questions and 
                    practice with complex transactions before moving to Excel automation.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Needs Review (&lt;6/10)</h4>
                  <p className="text-green-800 text-sm">
                    Return to the guided practice phase and work with your teacher to strengthen 
                    these foundational skills before proceeding.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Career Connection</h4>
                <p className="text-blue-800">
                  The systematic thinking you've developed here—following consistent rules, 
                  checking for balance, and catching errors automatically—is exactly what 
                  employers value in business operations, data analysis, and financial management roles.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preview Next Phase */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-700">Coming Up Next: Reflection & Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600">
                In the closing phase, you'll reflect on your debit and credit mastery using the 
                CAP framework (Courage, Adaptability, Persistence) and preview how these 
                foundational skills will enable Sarah to build Excel formulas that automatically 
                maintain perfect ledger balance—the key to her self-auditing system.
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