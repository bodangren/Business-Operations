import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { CheckCircle } from "lucide-react"

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!

  const assessmentQuestions = [
    {
      id: 'q1',
      question: 'What was Sarah\'s founder problem that launched the month-end closing crisis?',
      answers: [
        'She couldn\'t close her month quickly or accurately enough to support business decisions and stakeholder requests',
        'She didn\'t know how to use Excel macros and automation',
        'Her business wasn\'t growing fast enough to need formal accounting',
        'Her cash balance was too low to support her business operations'
      ],
      explanation: 'Sarah\'s founder problem was that she couldn\'t produce accurate, timely month-end financials when her growing business needed them for pricing decisions and loan applications. This is the core problem that drives the unit.'
    },
    {
      id: 'q2',
      question: 'What three dimensions does the Month-End Close Workflow Scoreboard track?',
      answers: [
        'Timing (speed), Accuracy (error-free), and Compliance (GAAP adjustments)',
        'Revenue, expenses, and profit',
        'Cash flow, bank balance, and loan payments',
        'Client satisfaction, project completion, and team productivity'
      ],
      explanation: 'The Month-End Close Workflow Scoreboard measures timing (how fast), accuracy (how error-free), and compliance (how complete the GAAP adjustments are). These are the three critical dimensions for any growing business\'s closing process.'
    },
    {
      id: 'q3',
      question: 'Why is a cash-only ledger insufficient for month-end closing as a business grows?',
      answers: [
        'Cash ledger can\'t show earned but unbilled revenue or expenses incurred but not yet paid',
        'Cash ledger is too slow for modern business needs',
        'Cash ledger can\'t connect to bank accounts automatically',
        'Cash ledger doesn\'t support multiple clients or projects'
      ],
      explanation: 'A cash-only ledger records transactions only when money changes hands. It misses accruals (earned but unbilled revenue, incurred but unpaid expenses), which are essential for accurate financial statements under GAAP.'
    },
    {
      id: 'q4',
      question: 'What did the closing timing simulation reveal about the business impact of slow month-end closing?',
      answers: [
        'Slow closing delays decision-making, reduces stakeholder confidence, and creates missed opportunities',
        'Slow closing only affects the accounting department\'s productivity',
        'Slow closing doesn\'t matter as long as the final numbers are accurate',
        'Slow closing is actually better because it gives more time to review work'
      ],
      explanation: 'The simulation showed that slow closing (days instead of hours) directly impacts business: pricing decisions are delayed, bankers receive outdated financials, and investor meetings are missed. Closing timing is a business control issue, not just an accounting task.'
    },
    {
      id: 'q5',
      question: 'What is the core distinction between surface-level activity and the deeper month-end closing problem?',
      answers: [
        'Surface activity tries to make cash ledger work; the deeper problem is need for accrual accounting workflow',
        'Surface activity is manual work; the deeper problem is lack of technology',
        'Surface activity is slow; the deeper problem is lack of staff',
        'Surface activity is about taxes; the deeper problem is about profit'
      ],
      explanation: 'Sarah\'s weekend nightmare was surface-level activity—trying harder and longer on a cash ledger that can\'t support accrual accounting. The deeper problem is the need for a fundamentally different workflow: accruals, def adjusting entries, and closing entries to show true business performance.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        {/* Assessment Introduction */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Formative Assessment: Founder Problem & Scoreboard Understanding
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                This exit ticket checks your understanding of Sarah's founder problem, the month-end close workflow scoreboard, and the core distinctions you've learned. These concepts are the foundation for everything you'll build in this unit.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">What You Should Understand</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Sarah's Founder Problem:</strong> Can't close month quickly or accurately enough for business needs</li>
                  <li>• <strong>Month-End Close Workflow Scoreboard:</strong> Timing, Accuracy, and Compliance dimensions</li>
                  <li>• <strong>Why Cash Ledger Isn't Enough:</strong> Missing accruals, deferrals, adjusting entries</li>
                  <li>• <strong>Business Impact of Slow Closing:</strong> Delayed decisions, lost opportunities, stakeholder mistrust</li>
                  <li>• <strong>Surface vs. Deep Problem:</strong> Working harder on wrong approach vs. needing different workflow</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed">
                Take your time on each question. These concepts will guide your work through Lessons 2-10 as you learn to build the complete month-end close workflow.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Assessment */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <ComprehensionCheck
              title="Month-End Closing Launch Assessment"
              description="Demonstrate your understanding of the founder problem, scoreboard, and core month-end closing concepts"
              questions={assessmentQuestions}
              showExplanations={true}
              allowRetry={true}
            />
          </CardContent>
        </Card>

        {/* What's Coming Next */}
        <Card className="border-amber-200 bg-amber-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-amber-800">What's Coming in Lessons 2-4</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-amber-700 leading-relaxed">
                Now that you understand the founder problem and scoreboard, you'll learn the technical accounting knowledge needed to solve it. The next three lessons teach you the procedural foundations of month-end closing.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Lesson 2: Accruals and Deferrals</h4>
                  <p className="text-amber-600 text-sm">Learn to identify and record revenue and expenses when earned or incurred, even if cash hasn't changed hands.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Lesson 3: Closing Entries</h4>
                  <p className="text-amber-600 text-sm">Understand why and how to close temporary accounts at month-end, transferring net income to retained earnings.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Lesson 4: Complete Manual Flow</h4>
                  <p className="text-amber-600 text-sm">Practice the complete month-end close workflow with all adjustments and closing entries before automating in later lessons.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
