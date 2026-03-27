import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  const businessModelQuestions = [
    {
      id: 'q1',
      question: 'What is the accounting equation that serves as the scoreboard for all businesses?',
      answers: [
        'Assets = Liabilities + Equity',
        'Revenue = Expenses + Profit',
        'Cash = Income - Outflows',
        'Debits = Credits'
      ],
      explanation: 'The accounting equation Assets = Liabilities + Equity is the fundamental scoreboard that must always stay in balance. It shows what a business owns, what it owes, and what it\'s worth.'
    },
    {
      id: 'q2',
      question: 'In the accounting equation, what does the term "assets" represent?',
      answers: [
        'Everything of value the business owns or controls',
        'Money the business has in the bank only',
        'The amount of profit the business earned',
        'Debts and loans the business owes to others'
      ],
      explanation: 'Assets include everything of value that the business owns or controls: cash, equipment, supplies, and anything else that will bring future benefit to the company.'
    },
    {
      id: 'q3',
      question: 'Why must the accounting equation always stay in balance?',
      answers: [
        'Every business transaction keeps both sides of the equation equal',
        'It\'s a requirement for getting a business license',
        'Only profitable businesses use the accounting equation',
        'The equation is optional for small businesses'
      ],
      explanation: 'The accounting equation must stay in balance because every transaction affects both sides equally. This ensures that every piece of financial information fits together correctly, which is essential for investor confidence.'
    }
  ]

  const vocabularySentences = [
    {
      id: 'vocab1',
      text: "A {blank} is any business event that involves money and affects the company's financial position.",
      answer: 'transaction',
      hint: "A business exchange or activity involving money"
    },
    {
      id: 'vocab2',
      text: "{blank} refers to having organized, accurate, and trustworthy financial records that can be easily understood by accountants and investors.",
      answer: 'Clean books',
      hint: "Professional, organized financial records"
    },
    {
      id: 'vocab3',  
      text: "Sarah's driving question is: How can we design a {blank} ledger that would convince a potential angel investor we keep clean books from day 1?",
      answer: 'self-auditing',
      hint: "A system that automatically checks its own accuracy"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* The Accounting Equation: Our Unit Scoreboard - Textbook Content */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 text-white">Core Concept</Badge>
                <CardTitle className="text-blue-800 dark:text-blue-200">
                  The Accounting Equation: Your Unit Scoreboard
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  Sarah has a great business idea and plenty of client work, but she's drowning in financial chaos. 
                  Before she can build her Smart Ledger, she needs to understand the fundamental scoreboard that runs every business in the world.
                </p>

                <h3 className="text-xl font-semibold text-blue-800 mt-8">The Universal Rule of Business</h3>
                <p className="text-lg leading-relaxed">
                  All business, from the smallest startup to the largest corporation, operates under one unbreakable rule. 
                  It's a rule of perfect balance, and it's the foundation of all financial tracking. This is the 
                  <strong>Accounting Equation</strong>:
                </p>

                <div className="bg-white p-6 rounded-lg border-4 border-blue-400 my-6 text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-4">
                    ASSETS = LIABILITIES + EQUITY
                  </div>
                  <p className="text-blue-700">
                    Everything a business owns = Everything it owes + The owner's stake
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-blue-800 mt-8">Breaking Down the Equation</h3>
                <p className="text-lg leading-relaxed">
                  Think of this equation as a scoreboard that tells the story of any business at any moment in time:
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                    <h4 className="font-bold text-blue-800 mb-2">ASSETS</h4>
                    <p className="text-sm text-blue-700">
                      Everything the business owns or controls: cash, equipment, supplies, money customers owe
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                    <h4 className="font-bold text-purple-800 mb-2">LIABILITIES</h4>
                    <p className="text-sm text-purple-700">
                      Everything the business owes to others: loans, unpaid bills, money owed to suppliers
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-2">EQUITY</h4>
                    <p className="text-sm text-green-700">
                      The owner's stake in the business: what's left after paying all debts
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-blue-800 mt-8">Why This Scoreboard Matters</h3>
                <p className="text-lg leading-relaxed">
                  This equation must stay in balance with <strong>every single transaction</strong>. When Sarah receives payment from the bakery, 
                  her cash (an asset) goes up, and her equity goes up by the same amount. When she pays for design software, 
                  her cash goes down, but that payment creates an expense that reduces equity. The equation always stays equal.
                </p>

                <p className="text-lg leading-relaxed">
                  This is exactly why investors, lenders, and banks demand to see financial records. They want to know: 
                  <strong>Does this business actually understand its own scoreboard?</strong> Sarah's notebook system makes this impossible. 
                  She can't quickly tell anyone what her assets, liabilities, or equity actually are because her records are scattered and unorganized.
                </p>

                <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300 my-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Why This Matters to Investors</h4>
                  <p className="text-sm text-blue-700">
                    An angel investor looking at Sarah's business would immediately ask: "What are your assets? What are your liabilities? 
                    What's your equity?" If Sarah has to dig through notebooks and guess at numbers, that investor walks away. 
                    Clean books mean instant answers to the accounting equation—proof that a business truly understands its financial position.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Financial Credibility Challenge */}
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-200">
                The Financial Credibility Crisis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-red max-w-none">
                <p className="text-lg leading-relaxed">
                  Sarah's wake-up call came when she realized her notebook system wasn't just messy—it was a huge risk to her business. 
                  Think about what happens when you need to demonstrate financial credibility:
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-red-300 my-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Critical Questions Every Business Must Answer:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Tax Preparation:</strong> How can you calculate accurate tax liability from scattered notebook entries?</li>
                    <li>• <strong>Investor Presentations:</strong> What numbers would you show a potential investor or lender?</li>
                    <li>• <strong>Financial Decision-Making:</strong> How do you know if you're actually profitable?</li>
                    <li>• <strong>Audit Readiness:</strong> Can you quickly find specific receipts and supporting documentation?</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  This is why our driving question for the entire unit is: <strong>"How can we design a self-auditing ledger 
                  that would convince a potential angel investor we keep 'clean books' from day 1?"</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Check: What Moves the Scoreboard */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Quick Check: Recognizing Transaction Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-green max-w-none">
                <p className="text-lg leading-relaxed">
                  Sarah's business will have many types of transactions. Before we track them, let's make sure 
                  we can recognize what we're looking at. Each type affects the accounting equation differently.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-bold text-green-800 mb-3">Transactions That INCREASE Both Sides</h4>
                    <ul className="text-sm space-y-2 text-green-700">
                      <li>• <strong>Revenue earned and received:</strong> Cash increases, equity increases</li>
                      <li>• <strong>Borrowing money:</strong> Cash increases, liabilities increase</li>
                      <li>• <strong>Owner investment:</strong> Cash increases, equity increases</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                    <h4 className="font-bold text-blue-800 mb-3">Transactions That DECREASE Both Sides</h4>
                    <ul className="text-sm space-y-2 text-blue-700">
                      <li>• <strong>Expense paid:</strong> Cash decreases, equity decreases</li>
                      <li>• <strong>Paying off loan:</strong> Cash decreases, liabilities decrease</li>
                      <li>• <strong>Owner withdrawal:</strong> Cash decreases, equity decreases</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                  <h4 className="font-bold text-purple-800 mb-3">Transactions That Trade One Asset for Another</h4>
                  <ul className="text-sm space-y-2 text-purple-700">
                    <li>• <strong>Buying equipment with cash:</strong> Equipment increases, cash decreases</li>
                    <li>• <strong>Collecting accounts receivable:</strong> Cash increases, receivables decrease</li>
                  </ul>
                  <p className="text-sm text-purple-600 mt-2">
                    Note: Equity and liabilities don't change in these transactions — only assets trade places.
                  </p>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300 my-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Why This Matters to Sarah</h4>
                  <p className="text-sm text-blue-700">
                    Sarah needs to track every transaction type correctly. If she misrecords a transaction, her accounting 
                    equation won't balance. That's exactly the kind of mistake that destroys investor confidence. Her 
                    Smart Ledger must catch these errors automatically.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Comprehension Check: TechStart Solutions Business Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck questions={businessModelQuestions} />
            </CardContent>
          </Card>

          {/* Vocabulary Building */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <CardTitle className="text-indigo-800 dark:text-indigo-200">
                Key Business Vocabulary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank 
                sentences={vocabularySentences}
                title="Key Vocabulary Practice"
                description="Fill in the blanks to complete these important accounting terms and concepts"
              />
            </CardContent>
          </Card>

          {/* Turn and Talk Discussion */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Turn and Talk: Connect to Real Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Discuss with a partner using these business-focused prompts:
                </p>
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Business Credibility:</h4>
                    <p className="text-sm">If you were an investor considering giving Sarah $50,000, what financial information would you want to see? Why would organized records matter to you?</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Transaction Tracking:</h4>
                    <p className="text-sm">Think of a business you know (restaurant, store, service provider). What kinds of transactions do they need to track daily? How might poor record-keeping hurt their business?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Looking Ahead */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Building Toward the Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  You now understand TechStart Solutions' business model and the critical importance of financial credibility. 
                  In the next phase, we'll begin building the foundation Sarah needs by exploring how business transactions 
                  should be properly categorized and tracked in a professional ledger system.
                </p>
                <p className="text-lg leading-relaxed">
                  Remember: Sarah's success isn't just about delivering great work to clients—it's about building systems 
                  that can support growth, attract investment, and demonstrate professional business management.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}