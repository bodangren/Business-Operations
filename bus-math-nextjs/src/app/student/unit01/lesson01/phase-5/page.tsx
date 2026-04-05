import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!
  
  const assessmentQuestions = [
    {
      id: 'q1',
      question: 'Why does "clean books" matter to an investor evaluating Sarah\'s business?',
      answers: [
        'Investors need instant access to accurate, verifiable financial records to make funding decisions',
        'Clean books only matter during tax season',
        'Investors prefer handwritten records because they feel more personal',
        'Clean books are only necessary for large corporations'
      ],
      explanation: 'Investors evaluate businesses by examining their financial records. "Clean books" means organized, accurate, and instantly verifiable records that demonstrate professional management and build confidence in the business\'s controls.'
    },
    {
      id: 'q2',
      question: 'What is the accounting equation that serves as our unit scoreboard?',
      answers: [
        'Assets = Liabilities + Equity',
        'Revenue = Expenses + Profit',
        'Cash In = Cash Out',
        'Debits = Credits'
      ],
      explanation: 'The accounting equation Assets = Liabilities + Equity is the fundamental scoreboard for every business. It tracks everything the business owns, everything it owes, and the owner\'s stake—all while staying perfectly balanced.'
    },
    {
      id: 'q3',
      question: 'What must stay true for the accounting equation with every single transaction?',
      answers: [
        'Both sides must always be equal',
        'Only assets change',
        'The equation is optional for small businesses',
        'Liabilities and equity never change'
      ],
      explanation: 'The accounting equation is a rule of perfect balance. Every transaction affects at least two parts of the equation, and those changes must be equal to keep both sides balanced. This is why investors trust the equation as a scoreboard.'
    },
    {
      id: 'q4',
      question: 'Sarah wants to build a "self-auditing" ledger. What does that mean?',
      answers: [
        'A system that automatically checks whether every transaction keeps the accounting equation balanced',
        'A ledger that Sarah can read by herself',
        'A system that only tracks revenue',
        'A ledger with colorful formatting'
      ],
      explanation: 'A self-auditing ledger has built-in checks that verify the accounting equation stays balanced after every transaction. This catches errors automatically and provides proof to investors that the records are reliable.'
    },
    {
      id: 'q5',
      question: 'What is the core distinction Sarah must understand about tracking business finances?',
      answers: [
        'It\'s not just recording transactions—it\'s proving the accounting equation stays balanced',
        'Handwritten records are always better than digital',
        'Only revenue matters for business success',
        'Investors don\'t care about day-to-day operations'
      ],
      explanation: 'The core distinction is that professional financial management isn\'t just making lists—it\'s building a system where every transaction can be verified and the accounting equation automatically stays balanced. This is what "clean books" really means.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
              <div className="bg-white p-4 rounded-lg border-4 border-blue-400 text-center">
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  ASSETS = LIABILITIES + EQUITY
                </div>
                <p className="text-blue-700 text-sm">
                  The scoreboard that stays in balance with every transaction
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Assessment - Short Exit Ticket */}
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-600 text-white">Assessment</Badge>
                <CardTitle className="text-orange-800 dark:text-orange-200">
                  Exit Ticket: Sarah's Challenge and Clean Books
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-orange max-w-none mb-6">
                <p className="text-lg leading-relaxed">
                  This short exit ticket checks your understanding of Sarah's challenge and the importance of 
                  clean books for investor confidence. Answer these questions thoughtfully.
                </p>
              </div>
              <ComprehensionCheck 
                questions={assessmentQuestions}
                title="Lesson 1 Assessment"
                description="Check your understanding of Sarah's business challenge and the accounting equation"
                showExplanations={true}
              />
            </CardContent>
          </Card>

          {/* Quick Summary */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                What You've Learned Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-green max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  You've completed Lesson 1: Introduction to Sarah's Challenge. You now understand:
                </p>
                <ul className="space-y-2 text-green-800">
                  <li>Why Sarah's notebook system creates serious business risks</li>
                  <li>What investors need to see in financial records</li>
                  <li>The accounting equation that serves as the unit scoreboard</li>
                  <li>Why every transaction must keep the equation balanced</li>
                  <li>What "clean books" and "self-auditing" really mean</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Looking Ahead */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Coming Up: Lesson 2
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  In Lesson 2, you'll learn the rules of debits and credits. These rules will show you exactly 
                  how to record transactions so the accounting equation always stays balanced. You'll discover 
                  why this is the foundation Sarah needs to build her Smart Ledger.
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