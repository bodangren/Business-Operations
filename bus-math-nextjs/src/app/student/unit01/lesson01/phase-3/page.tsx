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
      question: 'When Sarah receives $2,200 payment from the bakery, which part of the accounting equation increases?',
      answers: [
        'Assets (cash goes up) and equity (owner\'s stake goes up)',
        'Only assets increase because cash came in',
        'Liabilities increase because bakery owes her',
        'Nothing changes until she spends the money'
      ],
      explanation: 'Receiving payment increases cash (an asset) and increases equity because the business is now worth more. Both sides of the equation increase equally, keeping the balance.'
    },
    {
      id: 'q2',
      question: 'Sarah pays $49 for monthly design software. How does the accounting equation respond?',
      answers: [
        'Assets (cash goes down) and equity (expense reduces owner\'s stake)',
        'Liabilities increase because she now owes money for the software',
        'Only assets change because cash went out',
        'Equity increases because software helps the business'
      ],
      explanation: 'Paying for software decreases cash (an asset) and decreases equity through an expense. Both sides decrease equally, keeping the accounting equation balanced.'
    },
    {
      id: 'q3',
      question: 'What is the key rule Sarah must understand before building her ledger?',
      answers: [
        'Every transaction must keep the accounting equation in balance',
        'Record revenue first, then expenses later',
        'Focus only on cash transactions for now',
        'The equation only matters at year-end'
      ],
      explanation: 'The fundamental rule is that every single transaction must keep both sides of the accounting equation equal. This is what makes the ledger trustworthy and self-auditing.'
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
          {/* Transactions Move the Equation - Textbook Content */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-600 text-white">Guided Practice</Badge>
                <CardTitle className="text-green-800 dark:text-green-200">
                  How Transactions Move the Accounting Equation
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-green max-w-none">
                <p className="text-lg leading-relaxed">
                  Now that you understand the accounting equation is our scoreboard, let's practice watching business events 
                  move numbers around that scoreboard. This is how Sarah will build her self-auditing ledger—by 
                  recording exactly how every transaction keeps her equation in balance.
                </p>

                <h3 className="text-xl font-semibold text-green-800 mt-8">Predict Before You See</h3>
                <p className="text-lg leading-relaxed">
                  Before looking at the answers below, try this: When Sarah receives $2,200 from the bakery for 
                  website work, which parts of the accounting equation change? Think about it for a moment.
                </p>

                <div className="bg-green-100 p-5 rounded-lg border-2 border-green-400 my-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Transaction 1: Sarah Receives $2,200 from Bakery</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold text-green-900">Cash Goes Up</p>
                        <p className="text-sm text-green-700">Sarah has $2,200 more in her bank account</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold text-green-900">Equity Goes Up</p>
                        <p className="text-sm text-green-700">Sarah's business is now worth $2,200 more</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t-2 border-green-300">
                    <p className="text-base font-semibold text-green-800">
                      Both sides of the equation increased by $2,200. The balance stayed equal.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-green-800 mt-8">Try Another One</h3>
                <p className="text-lg leading-relaxed">
                  Now predict: When Sarah pays $49 for her monthly design software subscription, what happens to the 
                  accounting equation? Does it look different from the bakery payment?
                </p>

                <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 my-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Transaction 2: Sarah Pays $49 for Design Software</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold text-red-900">Cash Goes Down</p>
                        <p className="text-sm text-red-700">Sarah has $49 less in her bank account</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold text-red-900">Equity Goes Down</p>
                        <p className="text-sm text-red-700">The expense reduces Sarah's ownership stake by $49</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t-2 border-red-300">
                    <p className="text-base font-semibold text-red-800">
                      Both sides of the equation decreased by $49. The balance stayed equal.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-green-800 mt-8">The Pattern You'll See Everywhere</h3>
                <p className="text-lg leading-relaxed">
                  Notice the pattern? Every single business event moves at least two parts of the accounting equation, 
                  and they always move by the same amount. This is why the equation is called "double-entry"—every 
                  transaction has two equal and opposite effects that keep the scoreboard perfectly balanced.
                </p>

                <p className="text-lg leading-relaxed">
                  Sarah's notebook system failed because it recorded one-sided notes: "Got $2,200," "Paid $49." 
                  Those notes don't show the accounting equation impact. A professional ledger shows the full story: 
                  <strong>Which assets changed? Which liabilities changed? How did equity change?</strong>
                </p>

                <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300 my-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Why This Matters for Sarah's Ledger</h4>
                  <p className="text-sm text-blue-700">
                    When Sarah builds her self-auditing system in Excel, she'll design it to automatically check that 
                    every transaction keeps the accounting equation balanced. If someone makes a mistake and the equation 
                    doesn't balance, the ledger will flag it immediately. That's what makes it "self-auditing"—it 
                    catches errors by proving the scoreboard still works.
                  </p>
                </div>
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