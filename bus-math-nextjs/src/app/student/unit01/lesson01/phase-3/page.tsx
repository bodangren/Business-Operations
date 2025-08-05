import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { BusinessTransactionCategorization } from "@/components/drag-drop/BusinessTransactionCategorization"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

  const practiceQuestions = [
    {
      id: 'q1',
      question: 'Sarah receives payment for completing a client project. What type of transaction is this?',
      answers: [
        'Revenue transaction - money coming into the business',
        'Expense transaction - money going out of the business',
        'Asset transaction - something the business owns',
        'Liability transaction - something the business owes'
      ],
      explanation: 'When Sarah receives payment for services, it\'s revenue - money coming into the business for work completed.'
    },
    {
      id: 'q2',
      question: 'What makes tracking business transactions challenging when using Sarah\'s notebook system?',
      answers: [
        'Hard to categorize transactions and calculate totals accurately',
        'Notebooks are too expensive to maintain',
        'Handwriting takes too much time',
        'Clients prefer digital receipts'
      ],
      explanation: 'The main challenge is that notebook entries are hard to organize, categorize, and total accurately, especially when preparing taxes or investor reports.'
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
          {/* Deep Dive into Business Transactions - Textbook Content */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-600 text-white">Guided Practice</Badge>
                <CardTitle className="text-green-800 dark:text-green-200">
                  Understanding Business Transactions: The Building Blocks of Financial Records
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-green max-w-none">
                <p className="text-lg leading-relaxed">
                  Now that you understand Sarah's challenge and the critical importance of financial credibility, 
                  let's dive deeper into the fundamental building blocks of any professional ledger system: business transactions.
                </p>

                <h3 className="text-xl font-semibold text-green-800 mt-8">What is a Business Transaction?</h3>
                <p className="text-lg leading-relaxed">
                  A <strong>business transaction</strong> is any event that involves money and affects the company's financial position. 
                  Every time Sarah receives payment from a client, pays for software, buys equipment, or covers business expenses, 
                  she creates a transaction that must be properly recorded and categorized.
                </p>

                <p className="text-lg leading-relaxed">
                  Think about Sarah's chaotic notebook system. She was scribbling down transactions randomly: 
                  "Got $2,200 from bakery," "Paid $49 for design software," "New laptop $1,500." 
                  While these notes capture that something happened, they don't provide the organized, categorized information 
                  that investors and accountants need to understand the business's financial health.
                </p>

                <h3 className="text-xl font-semibold text-green-800 mt-8">Why Transaction Categorization Matters</h3>
                <p className="text-lg leading-relaxed">
                  Professional financial management requires that every transaction be properly categorized. This isn't just about organization—it's about 
                  creating meaningful financial insights that support business decision-making and demonstrate competence to stakeholders.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-green-300 my-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Sarah's Real Transaction Examples</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Bakery website payment</span>
                      <span className="text-green-700 font-semibold">+$2,200 Revenue</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                      <span className="font-medium">Monthly design software</span>
                      <span className="text-red-700 font-semibold">-$49 Business Expense</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Pet grooming social media setup</span>
                      <span className="text-green-700 font-semibold">+$650 Revenue</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                      <span className="font-medium">New laptop for client work</span>
                      <span className="text-red-700 font-semibold">-$1,500 Business Expense</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="font-medium">Dental office SEO project</span>
                      <span className="text-green-700 font-semibold">+$1,100 Revenue</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-green-800 mt-8">The Foundation of Clean Books</h3>
                <p className="text-lg leading-relaxed">
                  Notice how proper categorization immediately makes Sarah's financial picture clearer. Instead of random notebook scribbles, 
                  we can see that she earned $3,950 in revenue and spent $1,549 on business expenses, giving her a profit of $2,401 
                  from just these transactions.
                </p>

                <p className="text-lg leading-relaxed">
                  This is the foundation of "clean books"—organized, categorized financial records that provide instant insights into 
                  business performance. When an investor asks about Sarah's revenue or expenses, she can provide clear, accurate answers 
                  instead of saying "let me dig through my notebooks."
                </p>

                <p className="text-lg leading-relaxed">
                  But proper transaction categorization is just the beginning. As we'll discover throughout this unit, 
                  a truly professional ledger system must also ensure mathematical accuracy, provide error-checking capabilities, 
                  and present information in formats that stakeholders can quickly understand and verify.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Transaction Categorization */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Interactive Practice: Understand Business Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-lg">
                  Let's explore how business transactions work. This exercise will help you understand the flow 
                  of money in Sarah's business - but remember, we're focusing on the basic concept of tracking 
                  business activities, not advanced categorization yet.
                </p>
              </div>
              <BusinessTransactionCategorization />
            </CardContent>
          </Card>

          {/* Challenges of Manual Tracking */}
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-200">
                The Problems with Manual Transaction Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-red max-w-none">
                <p className="text-lg leading-relaxed">
                  Now imagine Sarah has 50 transactions in her notebook instead of just 6. Consider these challenges:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                    <h4 className="font-semibold text-red-800 mb-2">Organization Problems</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Transactions scattered across multiple notebook pages</li>
                      <li>• No consistent format or structure</li>
                      <li>• Hard to find specific entries quickly</li>
                      <li>• Risk of missing or losing important records</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                    <h4 className="font-semibold text-red-800 mb-2">Calculation Errors</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Manual addition prone to human error</li>
                      <li>• No automatic verification of totals</li>
                      <li>• Difficult to separate different time periods</li>
                      <li>• Can't easily generate reports for investors</li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  This is exactly why Sarah needed a Smart Ledger - a system that can organize, categorize, 
                  and calculate automatically while maintaining the accuracy investors demand.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Turn and Talk: Collaborative Discussion */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Turn and Talk: Analyze Transaction Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Work with a partner to discuss these TechStart Solutions scenarios. For each situation, 
                  decide how to categorize the transaction and discuss potential tracking challenges:
                </p>
                
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Scenario A: Mixed Transaction</h4>
                    <p className="text-sm mb-2">
                      Sarah buys a new computer for $2,000. She uses it 70% for client work and 30% for personal use.
                    </p>
                    <div className="text-xs text-purple-600">
                      <strong>Discuss:</strong> How should this be categorized? What problems might this create 
                      in a notebook system? How would you track the business vs. personal split?
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Scenario B: Recurring Transaction</h4>
                    <p className="text-sm mb-2">
                      Sarah pays $49/month for design software. She sometimes forgets to record this payment.
                    </p>
                    <div className="text-xs text-purple-600">
                      <strong>Discuss:</strong> Why is consistency important for recurring transactions? 
                      How might missing entries affect her financial picture? What would an investor think?
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Scenario C: Timing Issue</h4>
                    <p className="text-sm mb-2">
                      Sarah completes a website project in December but doesn't receive payment until January.
                    </p>
                    <div className="text-xs text-purple-600">
                      <strong>Discuss:</strong> When should she record this transaction? How does this affect 
                      her year-end financial reports? What problems could this timing create?
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Questions */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Check Your Understanding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck questions={practiceQuestions} />
            </CardContent>
          </Card>

          {/* Looking Forward */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Building Toward Independence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  You've now practiced the fundamental skill of transaction categorization with guidance and collaboration. 
                  You can see how even simple transactions become challenging to manage manually, especially as a business grows.
                </p>
                <p className="text-lg leading-relaxed">
                  In the next phase, you'll work more independently to analyze transaction scenarios and think critically 
                  about the investor concerns that motivated Sarah to build her Smart Ledger system.
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