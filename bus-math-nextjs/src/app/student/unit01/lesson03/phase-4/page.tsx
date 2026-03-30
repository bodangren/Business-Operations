import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, CheckCircle, Target } from 'lucide-react'
import PostingPracticeLoop from "@/components/accounting/PostingPracticeLoop"
import { lesson03Data, unit01Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[3]

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
        {/* Algorithmic Practice Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🧠 Phase 4: Algorithmic Deliberate Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Posting & Balance Check Mastery
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah is building reliability through repetition. Practice posting transactions until you 
              can automatically apply debit/credit rules and verify every entry balances. 
              The goal is fluency—the ability to post correctly without hesitation.
            </p>
          </div>
        </section>

        {/* Sarah's Practice Framework */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Sarah's Deliberate Practice Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-orange-800">
                <p>
                  Sarah knows that professional accountants don't guess—they practice until 
                  their reactions are automatic. When a transaction lands on her desk, she should 
                  immediately know: Which accounts change? Which get debited? Which get credited? 
                  Does it balance?
                </p>
                <p>
                  This deliberate practice builds that automaticity. You'll face randomized 
                  scenarios, post entries, receive instant feedback, and try again until you 
                  achieve a streak of correct answers. This is how mastery happens.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Mastery Criteria:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="font-medium text-orange-900">Speed</p>
                    <p className="text-orange-800">Identify affected accounts quickly</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-orange-900">Accuracy</p>
                    <p className="text-orange-800">Apply DEA LER rules correctly</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-orange-900">Balance</p>
                    <p className="text-orange-800">Verify debits = credits every time</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practice Guidance */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Practice Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-blue-800">
                <p>
                  Use this systematic approach for every transaction you encounter:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Step 1: Identify Changes</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• Read the transaction carefully</li>
                    <li>• List what increased or decreased</li>
                    <li>• Match each change to an account name</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Step 2: Apply DEA LER</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• Assets, Expenses, Dividends → DEBIT when increase</li>
                    <li>• Liabilities, Equity, Revenue → CREDIT when increase</li>
                    <li>• Reverse rule when accounts decrease</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Step 3: Check Balance</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• Sum all debit amounts</li>
                    <li>• Sum all credit amounts</li>
                    <li>• Verify totals are equal</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Step 4: Post & Verify</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• Record entry in proper format</li>
                    <li>• Check feedback immediately</li>
                    <li>• Study errors if incorrect</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Deliberate Practice Loop */}
        <section className="max-w-6xl mx-auto">
          <PostingPracticeLoop 
            title="Posting & Balance Check Practice"
            description="Practice posting transactions until you can reliably identify correct debit/credit entries and verify balance. The system generates randomized scenarios and tracks your consecutive correct entries."
            masteryTarget={3}
            showIntro={true}
          />
        </section>

        {/* Why This Practice Works */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                Why Deliberate Practice Builds Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  This practice loop isn't just repetition—it's deliberate training designed to 
                  build automaticity. Here's why it works:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-green-900 mb-2">Immediate Feedback</h4>
                  <p className="text-green-800 text-sm">
                    You know instantly whether your entry is correct. This reinforces the right 
                    pattern and corrects mistakes before they stick.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-900 mb-2">Randomized Problems</h4>
                  <p className="text-green-800 text-sm">
                    Scenarios vary in account types and amounts. This prevents memorizing 
                    answers and forces understanding of rules.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-900 mb-2">Streak Tracking</h4>
                  <p className="text-green-800 text-sm">
                    The streak counter rewards consistency. You can't achieve mastery with 
                    occasional correct answers—you need reliable performance.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-900 mb-2">Progressive Difficulty</h4>
                  <p className="text-green-800 text-sm">
                    Amounts and account combinations vary. This builds confidence with 
                    diverse business scenarios you'll encounter in real work.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Connection to Trial Balance */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">From Posting to Trial Balance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-purple-800">
                <p>
                  Every journal entry you practice posts feeds into a trial balance—the quality 
                  control check that proves your entire ledger stays in balance. When you post 
                  correctly using debit/credit rules, the trial balance automatically reconciles.
                </p>
                <p>
                  Practice until posting feels automatic. Then you're ready to build Excel 
                  formulas that perform these same checks instantly for hundreds of transactions.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200 mt-4">
                <h4 className="font-semibold text-purple-900 mb-2">Trial Balance Logic:</h4>
                <div className="text-sm text-purple-800 space-y-2">
                  <p>• Sum all account debit balances</p>
                  <p>• Sum all account credit balances</p>
                  <p>• <strong>Equal totals = Clean books</strong></p>
                  <p>• Unequal totals = Error to find</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preview of Assessment */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-700">Coming Up Next: Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600">
                In assessment phase, you'll demonstrate your mastery through a comprehensive quiz 
                covering debit/credit rules, journal entries, and trial balance logic. 
                The deliberate practice you complete here prepares you to perform accurately 
                under assessment conditions.
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
