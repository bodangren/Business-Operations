import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, TrendingUp } from 'lucide-react'
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson03Data, unit01Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[1]

const debitCreditSentences = [
  {
    id: "debit-definition",
    text: "A {blank} simply means an entry made on the LEFT side of a T-account.",
    answer: "Debit",
    hint: "Abbreviated as Dr., from Latin meaning 'to owe'",
    category: "Basic Definitions"
  },
  {
    id: "credit-definition", 
    text: "A {blank} simply means an entry made on the RIGHT side of a T-account.",
    answer: "Credit",
    hint: "Abbreviated as Cr., from Latin meaning 'to trust'",
    category: "Basic Definitions"
  },
  {
    id: "dea-acronym",
    text: "The {blank} part of the DEA LER acronym represents Dividends, Expenses, and Assets.",
    answer: "DEA",
    hint: "These three account types all increase with debits",
    category: "DEA LER Rules"
  },
  {
    id: "ler-acronym",
    text: "The {blank} part of the DEA LER acronym represents Liabilities, Equity, and Revenue.", 
    answer: "LER",
    hint: "These three account types all increase with credits",
    category: "DEA LER Rules"
  },
  {
    id: "asset-increase",
    text: "When Sarah's Cash account increases, she records a {blank} entry.",
    answer: "debit",
    alternativeAnswers: ["Debit"],
    hint: "Cash is an Asset, and Assets increase with debits (DEA rule)",
    category: "Application"
  },
  {
    id: "revenue-increase", 
    text: "When Sarah earns service revenue, she records a {blank} entry to her Revenue account.",
    answer: "credit",
    alternativeAnswers: ["Credit"],
    hint: "Revenue increases with credits (LER rule)",
    category: "Application"
  },
  {
    id: "balance-rule",
    text: "In every journal entry, total {blank} must equal total credits.",
    answer: "debits",
    alternativeAnswers: ["Debits"],
    hint: "This is the fundamental rule of double-entry bookkeeping",
    category: "Double-Entry Rule"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Introduction Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Systematic Debit & Credit Rules
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Now that Sarah's seen the T-account structure, let's learn the systematic rules that 
              determine which side of the T-account every transaction belongs on. These rules have 
              been used by accountants worldwide for centuries.
            </p>
          </div>
        </section>

        {/* Core Concept: Simple Definitions */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                The Simple Truth About Debits and Credits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-blue-800">
                <p>
                  Forget everything you think you know about "debit cards" and "credit cards." 
                  In accounting, these terms have very specific, simple meanings:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-900 text-xl mb-2">DEBIT (Dr.)</h3>
                    <p className="text-blue-800">An entry made on the <strong>LEFT side</strong> of a T-account</p>
                    <p className="text-sm text-blue-600 mt-2">From Latin "debere" meaning "to owe"</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-900 text-xl mb-2">CREDIT (Cr.)</h3>
                    <p className="text-blue-800">An entry made on the <strong>RIGHT side</strong> of a T-account</p>
                    <p className="text-sm text-blue-600 mt-2">From Latin "credere" meaning "to trust"</p>
                  </div>
                </div>
                <p>
                  That's it! Debit means left, credit means right. The confusion comes from knowing 
                  <em>when</em> to use the left side versus the right side for different types of accounts.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* DEA LER Rules */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Target className="h-6 w-6" />
                The DEA LER Memory System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-purple-800 text-lg">
                Professional accountants use the <strong>DEA LER</strong> acronym to remember which 
                accounts increase with debits versus credits:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border-2 border-red-300">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">DEA</h3>
                  <p className="text-red-700 font-semibold mb-3">Increase with DEBITS (Left Side)</p>
                  <ul className="space-y-2 text-red-600">
                    <li><strong>D</strong>ividends - Money paid to owners</li>
                    <li><strong>E</strong>xpenses - Costs of running the business</li>
                    <li><strong>A</strong>ssets - Things the business owns</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded">
                    <p className="text-sm text-red-700">
                      <strong>Sarah's Example:</strong> When cash increases, debit Cash. 
                      When she pays rent, debit Rent Expense.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">LER</h3>
                  <p className="text-green-700 font-semibold mb-3">Increase with CREDITS (Right Side)</p>
                  <ul className="space-y-2 text-green-600">
                    <li><strong>L</strong>iabilities - Debts the business owes</li>
                    <li><strong>E</strong>quity - Owner's stake in the business</li>
                    <li><strong>R</strong>evenue - Money earned from customers</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-sm text-green-700">
                      <strong>Sarah's Example:</strong> When she earns revenue, credit Revenue. 
                      When she takes a loan, credit Notes Payable.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 font-medium">
                  <strong>Memory Tip:</strong> Think "DEAlers drive on the LEFT, LERners stay RIGHT." 
                  Once you memorize DEA LER, you'll never forget which accounts increase with debits versus credits!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Double-Entry Principle */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                The Perfect Balance Principle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-orange-800">
                <p>
                  Here's the unbreakable rule that makes Sarah's self-auditing ledger possible: 
                  <strong>In every single transaction, total debits must equal total credits.</strong>
                </p>
                <p>
                  This isn't just a suggestion—it's the fundamental law of double-entry bookkeeping. 
                  When Sarah follows this rule correctly, her books will automatically stay balanced, 
                  and she'll be able to catch any errors immediately.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Sarah's $650 Pet Grooming Payment Example:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-orange-800">Step 1: Identify what increased</p>
                    <p className="text-orange-700">• Cash (an Asset) increased by $650</p>
                    <p className="text-orange-700">• Revenue increased by $650</p>
                  </div>
                  <div>
                    <p className="font-medium text-orange-800">Step 2: Apply DEA LER rules</p>
                    <p className="text-orange-700">• Debit Cash $650 (Asset increases with debit)</p>
                    <p className="text-orange-700">• Credit Revenue $650 (Revenue increases with credit)</p>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-orange-100 rounded">
                  <p className="text-orange-700 font-medium">✅ Perfect Balance: $650 debits = $650 credits</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fill in the Blank Exercise */}
        <section className="max-w-4xl mx-auto">
          <FillInTheBlank
            sentences={debitCreditSentences}
            title="Master the Debit & Credit Vocabulary"
            description="Complete these sentences to reinforce your understanding of debit and credit rules"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>

        {/* Why This Matters */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Why This Systematic Approach Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 text-lg leading-relaxed">
                These systematic debit and credit rules aren't just academic exercises—they're the 
                foundation of financial credibility. When Sarah can demonstrate that she follows these 
                universal accounting standards, potential investors immediately understand that her 
                financial information is reliable and comparable to any other business. More importantly, 
                these rules will allow her to build Excel formulas that automatically verify her work, 
                creating the self-auditing system that distinguishes professional bookkeeping from amateur record-keeping.
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