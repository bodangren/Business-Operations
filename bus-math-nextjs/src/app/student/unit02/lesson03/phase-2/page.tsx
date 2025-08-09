import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, TrendingUp, Calendar } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[1] // Phase 2

const gaapConcepts = [
  {
    id: "concept1",
    text: "The {blank} principle requires matching revenues with the expenses that generate them in the correct accounting period.",
    answer: "matching",
    hint: "This principle ensures revenues and related expenses appear in the same period",
    category: "GAAP Principles"
  },
  {
    id: "concept2", 
    text: "Under {blank} accounting, transactions are recorded when they occur, not when cash is received or paid.",
    answer: "accrual",
    hint: "This is the opposite of cash-basis accounting",
    category: "Accounting Methods"
  },
  {
    id: "concept3",
    text: "When Sarah completes work but hasn't yet invoiced the client, she records {blank} revenue.",
    answer: "accrued",
    hint: "Revenue has been earned but not yet billed",
    category: "Adjusting Entries"
  },
  {
    id: "concept4",
    text: "When a client pays for services before Sarah performs them, she records {blank} revenue (a liability).",
    answer: "deferred",
    alternativeAnswers: ["unearned"],
    hint: "The company owes services to the customer",
    category: "Adjusting Entries"
  },
  {
    id: "concept5",
    text: "The {blank} method spreads the cost of a long-term asset evenly over its useful life.",
    answer: "straight-line",
    hint: "This is the most common depreciation method",
    category: "Depreciation"
  },
  {
    id: "concept6",
    text: "Annual Depreciation = (Cost - {blank} Value) ÷ Useful Life",
    answer: "salvage",
    alternativeAnswers: ["residual"],
    hint: "This is the estimated value at the end of the asset's useful life",
    category: "Depreciation Formula"
  },
  {
    id: "concept7",
    text: "{blank} entries transfer net income from temporary accounts to permanent equity accounts.",
    answer: "closing",
    hint: "These entries reset revenue and expense accounts to zero",
    category: "Month-End Process"
  }
]

const conceptQuestions = [
  {
    id: "concept-check1",
    question: "Why does GAAP require the matching principle in financial reporting?",
    answers: [
      "To provide an accurate picture of business performance by matching revenues with related expenses in the correct period",
      "To make bookkeeping easier for small businesses",
      "To reduce the amount of paperwork required",
      "To ensure all transactions are recorded in cash"
    ],
    explanation: "The matching principle ensures that financial statements accurately reflect the true profitability of each period by pairing revenues with the expenses that helped generate them."
  },
  {
    id: "concept-check2", 
    question: "What is the key difference between accrued revenue and deferred revenue?",
    answers: [
      "Accrued revenue is earned but not yet billed; deferred revenue is received but not yet earned",
      "Accrued revenue is cash received; deferred revenue is cash paid",
      "Accrued revenue is an expense; deferred revenue is an asset",
      "There is no difference between them"
    ],
    explanation: "Accrued revenue represents work completed but not yet invoiced (asset). Deferred revenue represents cash received for work not yet completed (liability)."
  },
  {
    id: "concept-check3",
    question: "Sarah's $3,000 computer has a 3-year useful life and $300 salvage value. What is her monthly depreciation expense?",
    answers: [
      "$75 per month",
      "$100 per month", 
      "$83.33 per month",
      "$250 per month"
    ],
    explanation: "Annual depreciation = ($3,000 - $300) ÷ 3 years = $900/year. Monthly = $900 ÷ 12 = $75."
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit02Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Core GAAP Principles */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                The Foundation: GAAP Principles for Month-End Adjustments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-blue-900">
                <p>
                  When Sarah sat down with her mentor Marcus to understand why her month-end closing was so 
                  complicated, he explained that the issue wasn't her bookkeeping skills—it was that she 
                  was transitioning from simple cash-basis accounting to professional-grade accrual accounting.
                </p>

                <p>
                  "The rules that guide these adjusting entries," Marcus explained, "are part of 
                  <strong>Generally Accepted Accounting Principles (GAAP)</strong>. These aren't arbitrary 
                  rules—they're the foundation that makes financial statements reliable and comparable 
                  across all businesses."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">Matching Principle</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Match Revenue with Expenses</h4>
                    <p className="text-sm text-green-800">
                      Revenues must be matched with the expenses that helped generate them, in the same 
                      accounting period. This provides an accurate picture of profitability.
                    </p>
                    <p className="text-xs text-green-700 mt-2 italic">
                      "If Sarah's computer helps her earn revenue all year, she should record a portion 
                      of its cost as expense each month, not all at once."
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <Badge className="bg-purple-200 text-purple-800">Revenue Recognition</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-purple-900 mb-2">When Work is Done, Not When Cash is Received</h4>
                    <p className="text-sm text-purple-800">
                      Revenue should be recorded when services are performed or goods are delivered, 
                      regardless of when payment is received.
                    </p>
                    <p className="text-xs text-purple-700 mt-2 italic">
                      "Sarah earned that $500 SEO audit revenue in March when she completed the work, 
                      even though she won't invoice until April."
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Why This Matters for TechStart Solutions</h3>
                <p className="text-blue-800">
                  Following GAAP principles means Sarah's financial statements will be trusted by investors, 
                  lenders, and business partners. When she eventually seeks funding or applies for business 
                  loans, her adherence to these professional standards will demonstrate that she understands 
                  how to run a serious business operation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Four Types of Adjusting Entries */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                <Calculator className="h-6 w-6" />
                The Four Scenarios: Types of Adjusting Entries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-amber-900">
                <p>
                  Every adjusting entry Sarah needs falls into one of four categories. Understanding these 
                  categories is the key to building her automated Month-End Wizard.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-red-200 text-red-800 w-fit">Type 1: Accrued Revenue</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-red-900 mb-2">Work Done, Invoice Later</h4>
                    <p className="text-sm text-red-800 mb-2">
                      <strong>Situation:</strong> Sarah completes services but hasn't billed the client yet.
                    </p>
                    <div className="text-xs text-red-700 bg-white p-2 rounded border">
                      <strong>Journal Entry:</strong><br/>
                      Debit: Accounts Receivable<br/>
                      Credit: Service Revenue
                    </div>
                    <p className="text-xs text-red-700 mt-2">
                      This increases both assets (what's owed to Sarah) and revenue (what she's earned).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-200 text-blue-800 w-fit">Type 2: Deferred Revenue</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-blue-900 mb-2">Cash Received, Work Pending</h4>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Situation:</strong> Client pays in advance for services Sarah hasn't completed.
                    </p>
                    <div className="text-xs text-blue-700 bg-white p-2 rounded border">
                      <strong>Journal Entry (to recognize earned portion):</strong><br/>
                      Debit: Deferred Revenue<br/>
                      Credit: Service Revenue
                    </div>
                    <p className="text-xs text-blue-700 mt-2">
                      This reduces the liability (debt to client) and increases revenue as work is completed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-green-200 text-green-800 w-fit">Type 3: Depreciation</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Asset Cost Over Time</h4>
                    <p className="text-sm text-green-800 mb-2">
                      <strong>Formula:</strong> (Cost - Salvage Value) ÷ Useful Life
                    </p>
                    <div className="text-xs text-green-700 bg-white p-2 rounded border">
                      <strong>Journal Entry:</strong><br/>
                      Debit: Depreciation Expense<br/>
                      Credit: Accumulated Depreciation
                    </div>
                    <p className="text-xs text-green-700 mt-2">
                      For Sarah's $3,000 computer: ($3,000 - $300) ÷ 36 months = $75/month
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-purple-200 text-purple-800 w-fit">Type 4: Closing Entries</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-purple-900 mb-2">Reset for New Period</h4>
                    <p className="text-sm text-purple-800 mb-2">
                      <strong>Purpose:</strong> Transfer net income to equity and reset temporary accounts.
                    </p>
                    <div className="text-xs text-purple-700 bg-white p-2 rounded border">
                      <strong>Step 1:</strong> Close Revenue to Retained Earnings<br/>
                      <strong>Step 2:</strong> Close Expenses to Retained Earnings
                    </div>
                    <p className="text-xs text-purple-700 mt-2">
                      This prepares revenue and expense accounts for the next accounting period.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Fill in the Blank Exercise */}
          <FillInTheBlank
            sentences={gaapConcepts}
            title="Master the Key Concepts"
            description="Fill in the blanks to complete these fundamental principles of adjusting entries"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="Concept Verification"
            description="Test your understanding of GAAP principles and adjusting entry types."
            questions={conceptQuestions}
            showExplanations={true}
          />

          {/* Sarah's Realization */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">Sarah's Breakthrough Moment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-green-900">
                <p>
                  After Marcus explained these four types of adjusting entries, Sarah had her breakthrough moment. 
                  "So these aren't random rules," she said. "They're all designed to make sure my financial 
                  statements show the true story of what happened in each month."
                </p>
                
                <p>
                  "Exactly," Marcus replied. "And once you understand the logic behind each type, you can start 
                  building systems to automate them. That's how you'll cut your month-end closing from days to hours."
                </p>

                <div className="bg-white p-4 rounded-lg border border-green-200 not-prose">
                  <h4 className="font-semibold text-green-900 mb-2">Next Step: From Theory to Practice</h4>
                  <p className="text-green-800">
                    Now that you understand the principles and types, you're ready to work through actual scenarios. 
                    In the next phase, you'll help Sarah create the specific journal entries for each of her 
                    four month-end situations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  )
}