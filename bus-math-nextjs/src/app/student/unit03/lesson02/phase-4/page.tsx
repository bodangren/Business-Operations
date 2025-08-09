'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Calculator, TrendingUp, Building } from "lucide-react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { BusinessTransactionCategorization } from "@/components/drag-drop/BusinessTransactionCategorization"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const independentPracticeQuestions = [
  {
    id: 'advanced-1',
    question: 'Sarah uses INDEX/MATCH to pull Service Revenue from her trial balance into her Income Statement. If the Service Revenue increases from $4,800 to $6,200, what happens to her Income Statement?',
    answers: [
      'It automatically updates to show the new revenue amount and recalculates Net Income',
      'She must manually type the new amount into the Income Statement',
      'The Income Statement shows an error message',
      'Nothing happens until she rebuilds the entire statement'
    ],
    explanation: 'Dynamic formulas like INDEX/MATCH create live links, so changes in the source data automatically update the financial statements.'
  },
  {
    id: 'advanced-2',
    question: 'In building a professional Income Statement, why is it crucial to categorize each expense correctly?',
    answers: [
      'Different expense types may be reported in different sections, affecting how investors analyze the business',
      'All expenses are identical and categorization doesn\'t matter',
      'Only the total matters, not individual categories',
      'Excel requires specific categories to function properly'
    ],
    explanation: 'Professional Income Statements often separate operating expenses from non-operating expenses, helping investors understand the core profitability of the business.'
  },
  {
    id: 'advanced-3',
    question: 'If Sarah\'s TechStart Solutions shows Total Revenues of $15,400 and Total Expenses of $8,200, what story does this tell to potential investors?',
    answers: [
      'The business is profitable with a Net Income of $7,200, indicating strong operational performance',
      'The business is losing money and should be avoided',
      'The numbers are too small to matter to investors',
      'More information is needed before any conclusions can be drawn'
    ],
    explanation: 'Positive Net Income ($15,400 - $8,200 = $7,200) demonstrates profitability, which is a key indicator investors look for when evaluating business opportunities.'
  },
  {
    id: 'advanced-4',
    question: 'When building an Income Statement with INDEX/MATCH formulas, what is the main advantage over simply copying and pasting numbers?',
    answers: [
      'The Income Statement becomes a living document that updates automatically when new transactions are added',
      'It looks more professional to use formulas',
      'INDEX/MATCH is faster to type than copy-paste',
      'Banks require formula-based statements for loan approval'
    ],
    explanation: 'Dynamic formulas create a professional financial model where statements update automatically as new business transactions are recorded.'
  }
]

export default function Phase4Page() {
  const currentPhase = lesson02Phases[3] // Independent Practice phase

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        {/* Independent Practice Introduction */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 text-2xl flex items-center gap-2">
              <Target className="h-6 w-6" />
              Independent Practice: Advanced Income Statement Construction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                You've mastered the fundamentals of account classification and trial balance organization. 
                Now it's time to tackle the advanced scenarios that Jennifer Kim used to prepare Sarah 
                for real-world financial statement challenges. Today, you'll work independently to solve 
                complex business transaction scenarios and demonstrate deep understanding of Income Statement construction.
              </p>

              <p className="text-lg leading-relaxed">
                Remember: you're not just categorizing accounts anymore—you're thinking like a financial 
                analyst, understanding how these classifications flow into professional financial statements 
                that tell the complete story of business performance.
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-900 mb-2">🎯 Independent Practice Goals</h3>
              <ul className="text-indigo-800 space-y-1">
                <li>• Apply Income Statement construction principles to complex business scenarios</li>
                <li>• Demonstrate mastery of transaction categorization under challenging conditions</li>
                <li>• Think critically about how categorization decisions impact financial storytelling</li>
                <li>• Build confidence with the analytical skills needed for your capstone project</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Real-World Application Scenario */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <Building className="h-5 w-5" />
              Sarah's Expansion Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Six months after getting her business loan, Sarah's TechStart Solutions is thriving. 
                She's landed several major contracts and is considering expanding into a new service area: 
                e-commerce consulting. However, this expansion requires significant investments in new 
                equipment, training, and marketing.
              </p>

              <p>
                Sarah needs to present updated financial statements to her bank to secure additional 
                funding. The challenge? Her business now has more complex transactions that require 
                sophisticated categorization skills. Some transactions could arguably fit into multiple 
                categories, and her decisions will significantly impact how profitable and stable her 
                business appears to investors.
              </p>

              <div className="bg-white p-4 rounded-lg border-2 border-amber-400 my-4">
                <h4 className="font-semibold text-amber-800 mb-2">💡 The Critical Question</h4>
                <p className="text-amber-700">
                  <strong>How do you categorize complex business transactions when the choice between 
                  Operating, Investing, and Financing activities can dramatically change the financial 
                  story you're telling?</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">📈 Expansion Revenues</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• New e-commerce consulting contracts: $18,000</li>
                    <li>• Recurring maintenance services: $8,400</li>
                    <li>• Training workshop fees: $3,200</li>
                    <li>• Commission from partner referrals: $1,500</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">📉 Complex Expenses</h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Specialized software licenses: $4,200</li>
                    <li>• Professional development courses: $2,800</li>
                    <li>• New marketing campaign: $3,600</li>
                    <li>• Interest on expansion loan: $800</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Challenge: Complex Transaction Categorization */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Advanced Challenge: Complex Business Scenarios</CardTitle>
            <p className="text-muted-foreground">
              Test your mastery with challenging transactions that require deep understanding of 
              cash flow categorization principles. These scenarios mirror the complexity Sarah faced 
              during her business expansion.
            </p>
          </CardHeader>
          <CardContent>
            <BusinessTransactionCategorization />
          </CardContent>
        </Card>

        {/* Strategic Thinking Exercise */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Strategic Analysis: Impact of Classification Decisions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Consider this scenario: Sarah's business purchases a $15,000 piece of specialized 
                software that will be used for the next 3 years. How should this be categorized, 
                and why does the decision matter?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">💰 If Categorized as Operating:</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Shows up as a large expense in the current period</li>
                    <li>• Reduces Net Income significantly this year</li>
                    <li>• May make the business appear less profitable to lenders</li>
                    <li>• Provides clearer picture of cash flow impact</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">🏢 If Categorized as Investing:</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Treated as a capital investment, not an expense</li>
                    <li>• Net Income appears higher in the current period</li>
                    <li>• Shows the business is investing in future growth</li>
                    <li>• Reflects long-term value creation strategy</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">🎯 The Professional Decision</h4>
                <p className="text-yellow-700">
                  In reality, this would typically be classified as an <strong>Operating</strong> activity 
                  because it's software for day-to-day business operations, even though it's a large 
                  purchase. However, the asset would be <em>capitalized</em> on the Balance Sheet and 
                  <em>depreciated</em> over 3 years on the Income Statement. This demonstrates why 
                  professional financial statement preparation requires both technical knowledge and 
                  business judgment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Comprehension Check */}
        <ComprehensionCheck
          title="Independent Practice: Advanced Income Statement Mastery"
          description="Demonstrate your advanced understanding of Income Statement construction and its impact on business decision-making."
          questions={independentPracticeQuestions}
          showExplanations={true}
        />

        {/* Professional Skills Development */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Professional Skills Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                The advanced practice you just completed mirrors the real challenges that financial 
                professionals face every day. You've developed skills that are directly applicable to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">💼 Career Applications</h4>
                  <ul className="text-indigo-700 space-y-1 text-sm">
                    <li>• Financial analyst positions</li>
                    <li>• Business consulting roles</li>
                    <li>• Startup and entrepreneurship</li>
                    <li>• Investment banking internships</li>
                    <li>• Corporate finance departments</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">🎓 Academic Preparation</h4>
                  <ul className="text-indigo-700 space-y-1 text-sm">
                    <li>• University business programs</li>
                    <li>• Accounting and finance courses</li>
                    <li>• Economics and data analysis</li>
                    <li>• MBA program prerequisites</li>
                    <li>• Professional certification preparation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-indigo-400">
                <h4 className="font-semibold text-indigo-800 mb-2">🚀 Next Level Challenge</h4>
                <p className="text-indigo-700">
                  In your capstone project, you'll use these exact skills to build a comprehensive 
                  financial model for your own venture. You'll create Income Statements that tell 
                  compelling stories to real investors, using the same dynamic INDEX/MATCH techniques 
                  that Sarah used to transform her business prospects. The foundation you've built 
                  today will be essential for that advanced work.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}