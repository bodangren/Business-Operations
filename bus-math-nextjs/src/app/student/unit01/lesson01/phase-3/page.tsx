import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

  const practiceQuestions = [
    {
      id: 'q1',
      question: 'When Sarah receives $2,200 payment from the bakery, which parts of the accounting equation change?',
      answers: [
        'Cash (asset) increases and equity increases by the same amount',
        'Only cash increases because the work was already done',
        'A liability is created because Sarah owes future service',
        'Equity decreases because Sarah spent time on the project'
      ],
      explanation: 'Receiving payment increases cash (an asset). Since Sarah earned this revenue, her equity also increases. Both sides of the accounting equation increase by $2,200, keeping everything balanced.'
    },
    {
      id: 'q2',
      question: 'Sarah pays $49 for monthly design software. How does the accounting equation respond?',
      answers: [
        'Cash decreases and equity decreases by the same amount',
        'Only cash decreases because software is temporary',
        'A liability is created for future software access',
        'Assets increase because Sarah now has software'
      ],
      explanation: 'Paying for software is an expense. Cash (an asset) decreases by $49. Expenses reduce equity, so equity also decreases by $49. Both sides go down together, keeping the equation balanced.'
    },
    {
      id: 'q3',
      question: 'What happens to the accounting equation when Sarah buys a laptop for $1,500 cash?',
      answers: [
        'One asset goes up and another asset goes down by the same amount',
        'Cash decreases and equity decreases',
        'Cash decreases and a liability is created',
        'Total assets increase because equipment is valuable'
      ],
      explanation: 'When Sarah exchanges one asset (cash) for another asset (equipment), total assets stay the same. Cash goes down $1,500, equipment goes up $1,500. No change to liabilities or equity.'
    },
    {
      id: 'q4',
      question: 'Sarah borrows $5,000 from the bank. What happens to liabilities?',
      answers: [
        'Liabilities increase by $5,000 and cash increases by $5,000',
        'Liabilities decrease because Sarah owes less than before',
        'Only equity changes when Sarah takes a loan',
        'Liabilities stay the same because loans are not recorded'
      ],
      explanation: 'Taking a loan increases liabilities (Sarah now owes $5,000 to the bank) and increases cash (an asset). Assets go up $5,000, liabilities go up $5,000. Equity does not change from borrowing.'
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
          {/* Unit Scoreboard Reminder */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 text-white">Unit Scoreboard</Badge>
                <CardTitle className="text-blue-800 dark:text-blue-200">
                  Remember: The Accounting Equation
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg border-4 border-blue-400 text-center">
                <div className="text-3xl font-bold text-blue-800 mb-4">
                  ASSETS = LIABILITIES + EQUITY
                </div>
                <p className="text-blue-700">
                  This scoreboard stays in balance with every single transaction
                </p>
              </div>
              <p className="text-sm text-blue-600 mt-3 text-center">
                In this phase, we will practice predicting how business events move numbers around this scoreboard.
              </p>
            </CardContent>
          </Card>

          {/* Prediction Practice - Core of Guided Practice */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-600 text-white">Guided Practice</Badge>
                <CardTitle className="text-green-800 dark:text-green-200">
                  Predict Before You See
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-green max-w-none">
                <p className="text-lg leading-relaxed">
                  Here is how Sarah should practice predicting transaction effects. Before looking at the answers below, 
                  try to predict what happens to the accounting equation for each of Sarah's business events.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Remember:</strong> Every transaction must keep both sides of the equation equal. 
                  At least two things change in every transaction.
                </p>
              </div>

              {/* Transaction 1 Example */}
              <div className="bg-white p-6 rounded-lg border-2 border-green-400">
                <h4 className="text-lg font-semibold text-green-900 mb-4">
                  Transaction 1: Sarah receives $2,200 from bakery client
                </h4>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                    <p className="font-medium text-yellow-800 mb-2">PREDICT (before looking below):</p>
                    <p className="text-yellow-700">Which parts of ASSETS = LIABILITIES + EQUITY change? Do they go up or down?</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-gray-800 mb-2">Then see the answer:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-100 p-4 rounded border border-green-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-semibold text-green-900">Cash (Asset) increases</p>
                            <p className="text-sm text-green-700">Sarah has $2,200 more in her bank account</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-100 p-4 rounded border border-green-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-semibold text-green-900">Equity increases</p>
                            <p className="text-sm text-green-700">Revenue earned makes the business worth more</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border border-blue-300 mt-4">
                    <p className="font-semibold text-blue-800">Result:</p>
                    <p className="text-blue-700">Both ASSETS and EQUITY increased by $2,200. The equation stayed balanced.</p>
                  </div>
                </div>
              </div>

              {/* Transaction 2 Example */}
              <div className="bg-white p-6 rounded-lg border-2 border-green-400">
                <h4 className="text-lg font-semibold text-green-900 mb-4">
                  Transaction 2: Sarah pays $49 for monthly design software
                </h4>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                    <p className="font-medium text-yellow-800 mb-2">PREDICT:</p>
                    <p className="text-yellow-700">What happens to ASSETS = LIABILITIES + EQUITY? Does anything go up?</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-gray-800 mb-2">Answer:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-4 rounded border border-red-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-semibold text-red-900">Cash (Asset) decreases</p>
                            <p className="text-sm text-red-700">Sarah has $49 less in her bank account</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-100 p-4 rounded border border-red-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-semibold text-red-900">Equity decreases</p>
                            <p className="text-sm text-red-700">The expense reduces Sarah's ownership stake by $49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border border-blue-300 mt-4">
                    <p className="font-semibold text-blue-800">Result:</p>
                    <p className="text-blue-700">Both ASSETS and EQUITY decreased by $49. The equation stayed balanced.</p>
                  </div>
                </div>
              </div>

              {/* Transaction 3 Example */}
              <div className="bg-white p-6 rounded-lg border-2 border-green-400">
                <h4 className="text-lg font-semibold text-green-900 mb-4">
                  Transaction 3: Sarah buys a laptop for $1,500 cash
                </h4>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                    <p className="font-medium text-yellow-800 mb-2">PREDICT:</p>
                    <p className="text-yellow-700">Does equity change when Sarah exchanges one asset for another?</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-gray-800 mb-2">Answer:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-100 p-4 rounded border border-red-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-semibold text-red-900">Cash (Asset) decreases</p>
                            <p className="text-sm text-red-700">Sarah spends $1,500 from her bank account</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-100 p-4 rounded border border-green-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-semibold text-green-900">Equipment (Asset) increases</p>
                            <p className="text-sm text-green-700">Sarah now owns a laptop worth $1,500</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border border-blue-300 mt-4">
                    <p className="font-semibold text-blue-800">Result:</p>
                    <p className="text-blue-700">One asset went DOWN, another asset went UP. Total assets unchanged. Liabilities and equity unchanged. The equation stayed balanced.</p>
                  </div>
                </div>
              </div>

              {/* Transaction 4 Example */}
              <div className="bg-white p-6 rounded-lg border-2 border-green-400">
                <h4 className="text-lg font-semibold text-green-900 mb-4">
                  Transaction 4: Sarah borrows $5,000 from the bank
                </h4>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                    <p className="font-medium text-yellow-800 mb-2">PREDICT:</p>
                    <p className="text-yellow-700">Does borrowing money change equity? What happens to liabilities?</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-gray-800 mb-2">Answer:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-100 p-4 rounded border border-green-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                          <div>
                            <p className="font-semibold text-green-900">Cash (Asset) increases</p>
                            <p className="text-sm text-green-700">Sarah has $5,000 more in her bank account</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-orange-100 p-4 rounded border border-orange-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                          <div>
                            <p className="font-semibold text-orange-900">Loan Payable (Liability) increases</p>
                            <p className="text-sm text-orange-700">Sarah now owes the bank $5,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border border-blue-300 mt-4">
                    <p className="font-semibold text-blue-800">Result:</p>
                    <p className="text-blue-700">Assets increased $5,000, Liabilities increased $5,000. Equity did not change. The equation stayed balanced.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Pattern Section */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                The Pattern You Will See Everywhere
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  Notice the pattern across all four transactions? Every single business event moves at least two parts 
                  of the accounting equation, and they always move by the same amount. This is why the equation is called 
                  "double-entry" — every transaction has two equal and opposite effects that keep the scoreboard balanced.
                </p>
                <p className="text-lg leading-relaxed">
                  Sarah's notebook system failed because it recorded one-sided notes: "Got $2,200," "Paid $49." Those 
                  notes don't show the accounting equation impact. A professional ledger shows the full story:
                  <strong>Which assets changed? Which liabilities changed? How did equity change?</strong>
                </p>

                <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300 my-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Why This Matters for Sarah's Ledger</h4>
                  <p className="text-sm text-blue-700">
                    When Sarah builds her self-auditing system in Excel, she'll design it to automatically check that every 
                    transaction keeps the accounting equation balanced. If someone makes a mistake and the equation doesn't 
                    balance, the ledger will flag it immediately. That's what makes it "self-auditing" — it catches errors 
                    by proving the scoreboard still works.
                  </p>
                </div>
              </div>
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
                  Work with a partner and discuss these prediction scenarios:
                </p>
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Imagine Sarah's Business Grows:</h4>
                    <p className="text-sm">What happens to the equation if she hires an employee and pays $4,000 in wages? What if a client signs a contract but doesn't pay yet?</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Why Predict First?</h4>
                    <p className="text-sm">Why is it important to predict what happens to the equation before you check the answer? How does this help Sarah avoid mistakes?</p>
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
                  You've now practiced predicting how transactions move the accounting equation with guidance and collaboration. 
                  You can see how every transaction keeps the equation balanced.
                </p>
                <p className="text-lg leading-relaxed">
                  In the next phase, you'll work more independently to make business decisions and think critically 
                  about how different approaches to tracking finances affect Sarah's ability to win investor confidence.
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