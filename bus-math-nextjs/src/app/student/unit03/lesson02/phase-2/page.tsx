'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const incomeStatementBlanks = [
  {
    id: 'income-1',
    text: '{blank} - Expenses = Net Income',
    answer: 'Revenues',
    hint: 'Money earned from business activities',
    category: 'Income Statement Formula'
  },
  {
    id: 'income-2',
    text: 'The {blank} shows a company\'s financial performance over a specific period of time',
    answer: 'Income Statement',
    hint: 'The financial statement that tells the "plot" of the business story',
    category: 'Financial Statements'
  },
  {
    id: 'income-3',
    text: '{blank} is a smarter, more flexible version of VLOOKUP for cross-sheet data retrieval',
    answer: 'INDEX/MATCH',
    hint: 'Dynamic formula combination used to create live links between worksheets',
    category: 'Excel Functions'
  },
  {
    id: 'income-4',
    text: 'The famous "bottom line" on an Income Statement is called {blank}',
    answer: 'Net Income',
    hint: 'Profit left over after subtracting all expenses from revenues',
    category: 'Income Statement Terms'
  },
  {
    id: 'income-5',
    text: 'For Sarah\'s business, a {blank} fee of $2,200 would be classified as Revenue',
    answer: 'client project',
    hint: 'Money earned from providing services to customers',
    alternativeAnswers: ['project', 'website project'],
    category: 'Revenue Examples'
  }
]

export default function Phase2Page() {
  const currentPhase = lesson02Phases[1] // Introduction phase

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        {/* Introduction to Income Statement */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 text-2xl">The Plot of the Story: Building the Income Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                The first part of any good story is the plot. For an investor or a bank, the plot of 
                a business is simple: <strong>is it making money?</strong> The first question Sarah had 
                to answer for the bank was, "How do I prove that TechStart Solutions is profitable?" 
                The answer is the <strong>Income Statement</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                An Income Statement is a financial report that shows a company's financial performance 
                over a specific period of time, like a month, a quarter, or a year. Think of it like 
                a scoreboard for the business. It follows one simple, powerful formula:
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-300 text-center">
              <div className="text-3xl font-bold text-blue-800 mb-4">
                Revenues - Expenses = Net Income
              </div>
              <p className="text-blue-700 text-sm">
                The fundamental Income Statement equation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 text-lg">💰 Revenues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm">
                    All the money the business earns from its sales of products or services. 
                    For Sarah, this includes the $2,200 she earned for the bakery's website.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 text-lg">📉 Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 text-sm">
                    The costs of running the business. This includes things like software 
                    subscriptions, paying contractors, and marketing costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800 text-lg">🎯 Net Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 text-sm">
                    The famous "bottom line." It's the profit that's left over after you 
                    subtract all the expenses from the revenues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Excel Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Building Dynamic Reports with INDEX/MATCH</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                To build Sarah's Income Statement, we'll use the trial balance data from the Smart 
                Ledger you worked on in Unit 1. But we won't just copy and paste the numbers. 
                That's what amateurs do. <strong>Professionals build dynamic reports.</strong>
              </p>

              <p>
                We will use a powerful Excel formula combination called <strong>INDEX/MATCH</strong>. 
                Think of it as a smarter, more flexible version of VLOOKUP. By using INDEX/MATCH to 
                pull data from the ledger, we create a live link. Anytime a new transaction is added 
                to the ledger, the Income Statement will update automatically.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2">🔧 How INDEX/MATCH Works</h4>
                <div className="text-yellow-700 space-y-2">
                  <p><strong>INDEX:</strong> Returns a value from a specific position in a range</p>
                  <p><strong>MATCH:</strong> Finds the position of a value in a range</p>
                  <p><strong>Together:</strong> They create flexible lookups that work horizontally, vertically, and with exact matches</p>
                </div>
              </div>

              <p>
                This is how you build a financial model that is both professional and easy to maintain. 
                Let's start by building the "Revenue" section, pulling in all of Sarah's client project 
                fees. Then, we'll categorize and pull in her operating expenses. The final result will 
                be a clear, accurate calculation of her Net Income.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sarah's Example */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Sarah's TechStart Solutions Example</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Let's look at how Sarah's business activities translate into Income Statement components:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">📈 Revenue Sources</h4>
                  <ul className="space-y-1 text-green-700">
                    <li>• Bakery website project: $2,200</li>
                    <li>• Social media setup: $650</li>
                    <li>• SEO work for dental office: $1,100</li>
                    <li>• Monthly maintenance contracts: $400</li>
                  </ul>
                  <p className="text-sm text-green-600 mt-2 font-medium">Total Revenue: $4,350</p>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2">📉 Business Expenses</h4>
                  <ul className="space-y-1 text-red-700">
                    <li>• Software subscriptions: $250</li>
                    <li>• Contractor payments: $800</li>
                    <li>• Marketing and advertising: $300</li>
                    <li>• Home office expenses: $200</li>
                  </ul>
                  <p className="text-sm text-red-600 mt-2 font-medium">Total Expenses: $1,550</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-amber-400 text-center">
                <p className="text-amber-800 text-lg">
                  <strong>Sarah's Net Income: $4,350 - $1,550 = $2,800</strong>
                </p>
                <p className="text-amber-700 text-sm">This profit shows her business is financially healthy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fill in the Blank Exercise */}
        <FillInTheBlank
          title="Income Statement Vocabulary Practice"
          description="Complete these key concepts about Income Statement construction"
          sentences={incomeStatementBlanks}
          showWordList={true}
          randomizeWordOrder={true}
          showHints={true}
        />

        {/* Why This Matters */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800">Why This Matters for Your Future</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Understanding how to build dynamic Income Statements isn't just an academic exercise. 
                These are the same skills that:
              </p>

              <ul className="space-y-2 text-indigo-700">
                <li><strong>• Help entrepreneurs secure funding:</strong> Banks and investors need to see consistent profitability</li>
                <li><strong>• Enable business decision-making:</strong> Which services are most profitable? Where can costs be cut?</li>
                <li><strong>• Support career growth:</strong> Financial analysis skills are valuable in every industry</li>
                <li><strong>• Build personal financial literacy:</strong> The same principles apply to managing your own money</li>
              </ul>

              <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
                <h4 className="font-semibold text-indigo-800 mb-2">🎯 Coming Up Next</h4>
                <p className="text-indigo-700">
                  In the guided practice phase, you'll get hands-on experience building your own 
                  dynamic Income Statement using INDEX/MATCH formulas. You'll see exactly how 
                  to create the professional-grade financial reports that opened doors for Sarah.
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