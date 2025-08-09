import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, TrendingUp } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson02Phases[4] // Phase 5: Assessment

const assessmentQuestions = [
  {
    id: '1',
    question: 'Sarah hires Alex at $25/hour for a standard 40-hour work week, paid bi-weekly. What is Alex\'s gross pay per paycheck?',
    answers: [
      '$2,000',
      '$1,000',
      '$2,500',
      '$1,500'
    ],
    explanation: 'Bi-weekly means every 2 weeks, so: 40 hours/week × 2 weeks × $25/hour = 80 hours × $25 = $2,000 gross pay per paycheck.'
  },
  {
    id: '2',
    question: 'If Alex works 90 hours in a bi-weekly period at $25/hour, what is his total gross pay including overtime?',
    answers: [
      '$2,375',
      '$2,250',
      '$2,500',
      '$2,000'
    ],
    explanation: 'Regular: 80 hours × $25 = $2,000. Overtime: 10 hours × $25 × 1.5 = $375. Total: $2,000 + $375 = $2,375.'
  },
  {
    id: '3',
    question: 'What are the current FICA tax rates that apply to every employee\'s paycheck?',
    answers: [
      'Social Security: 6.2%, Medicare: 1.45%',
      'Social Security: 7.65%, Medicare: 1.45%',
      'Social Security: 6.2%, Medicare: 2.9%',
      'Social Security: 5.2%, Medicare: 1.25%'
    ],
    explanation: 'FICA taxes are: Social Security at 6.2% and Medicare at 1.45%. These rates are the same for both employee and employer portions.'
  },
  {
    id: '4',
    question: 'Alex earns $2,000 gross bi-weekly. How much will be deducted for FICA taxes?',
    answers: [
      '$153.00',
      '$145.00',
      '$160.00',
      '$124.00'
    ],
    explanation: 'Social Security: $2,000 × 6.2% = $124. Medicare: $2,000 × 1.45% = $29. Total FICA: $124 + $29 = $153.'
  },
  {
    id: '5',
    question: 'What is the main difference between gross pay and net pay?',
    answers: [
      'Gross pay is before deductions, net pay is after deductions',
      'Gross pay includes overtime, net pay does not',
      'Gross pay is hourly, net pay is salary',
      'Gross pay is what the employer pays, net pay is what the employee earns'
    ],
    explanation: 'Gross pay is the total earned before any taxes or deductions. Net pay is what remains after all deductions (taxes, insurance, etc.) are subtracted.'
  },
  {
    id: '6',
    question: 'A tipped server works 25 hours at $2.13 base wage and reports $180 in tips. What is their gross pay?',
    answers: [
      '$233.25',
      '$181.25',
      '$180.00',
      '$53.25'
    ],
    explanation: 'Base pay: 25 hours × $2.13 = $53.25. Plus tips: $53.25 + $180 = $233.25 total gross pay.'
  },
  {
    id: '7',
    question: 'Sarah pays Alex $2,000 gross bi-weekly. What additional costs does Sarah incur as the employer?',
    answers: [
      'Employer FICA taxes and unemployment taxes (~$213 total)',
      'Only unemployment taxes (~$60)',
      'Only employer FICA taxes (~$153)',
      'No additional costs beyond gross pay'
    ],
    explanation: 'Sarah must pay matching FICA taxes ($153) plus federal and state unemployment taxes (~$60), totaling about $213 in additional costs.'
  },
  {
    id: '8',
    question: 'Why is cash flow timing critical for payroll management in Sarah\'s project-based business?',
    answers: [
      'Payroll must be paid on specific dates regardless of when client payments arrive',
      'Employees can wait for payment until projects are completed',
      'Tax obligations only apply when revenue is received',
      'Payroll costs vary based on project profitability'
    ],
    explanation: 'Payroll obligations are fixed and date-specific, but project-based revenue is irregular. Sarah must ensure cash availability every pay period regardless of client payment timing.'
  },
  {
    id: '9',
    question: 'If Sarah converts Alex from hourly ($25/hour, 80 hours bi-weekly) to salary at $52,000 annually, what is the bi-weekly gross pay?',
    answers: [
      '$2,000',
      '$1,000',
      '$4,333',
      '$2,167'
    ],
    explanation: 'Annual salary ÷ pay periods per year: $52,000 ÷ 26 bi-weekly periods = $2,000 per paycheck.'
  },
  {
    id: '10',
    question: 'What is the primary purpose of building a "Payday Simulator" for Sarah\'s business?',
    answers: [
      'To predict exactly when and how much cash will be needed for payroll',
      'To calculate employee productivity and performance',
      'To determine the best hiring schedule for new employees',
      'To compare different payroll software options'
    ],
    explanation: 'The Payday Simulator helps predict cash flow needs to avoid payroll crises like Maria\'s café experienced, ensuring Sarah always has sufficient funds available on payday.'
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-8">
        {/* Assessment Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Assessment
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Demonstrate Your Payroll Mastery
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Show that you've mastered the essential calculations Sarah needs to confidently hire Alex 
              and build her Payday Simulator system.
            </p>
          </div>

          {/* Assessment Context */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-2xl">What You've Learned</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-800">
              <p className="text-lg leading-relaxed">
                Throughout this lesson, you've built the mathematical foundation that Sarah needs 
                to transform from a solopreneur to a confident employer. You now understand:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold mb-2 text-blue-900">Payroll Mathematics</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Gross pay calculations for hourly, salaried, and tipped employees</li>
                    <li>• Overtime calculations and their cash flow impact</li>
                    <li>• FICA tax calculations (Social Security & Medicare)</li>
                    <li>• The difference between gross pay, net pay, and employer costs</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold mb-2 text-blue-900">Business Applications</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Why cash flow timing matters more than total revenue</li>
                    <li>• How to predict payroll cash needs for irregular income</li>
                    <li>• The true cost of hiring beyond just gross wages</li>
                    <li>• Building systems to avoid payroll crisis situations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Relevance */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Professional Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-800">
              <p className="text-lg leading-relaxed">
                These skills aren't just academic—they're the foundation of responsible business growth:
              </p>
              <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                <h3 className="font-bold mb-3 text-purple-900">Career Relevance</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Entrepreneurs:</p>
                    <p>Make confident hiring decisions without cash flow fears</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">HR Professionals:</p>
                    <p>Understand true labor costs and budget accurately</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Finance Roles:</p>
                    <p>Build payroll models and cash flow forecasts</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-200 p-4 rounded-lg border border-purple-400">
                <p className="font-semibold text-purple-900">
                  Success Criteria: Score 80% or higher to demonstrate readiness 
                  to help Sarah build her Payday Simulator in the next lessons.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Assessment Instructions */}
          <Card className="border-2 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 text-2xl">Assessment Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2 text-amber-900">What to Expect</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 10 comprehensive questions</li>
                    <li>• Mix of calculations and conceptual understanding</li>
                    <li>• Real scenarios based on Sarah's business</li>
                    <li>• Immediate feedback with explanations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-amber-900">Success Tips</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Read each question carefully</li>
                    <li>• Consider both math and business context</li>
                    <li>• Remember: Gross Pay - Deductions = Net Pay</li>
                    <li>• Think about Sarah's perspective as an employer</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Assessment */}
          <ComprehensionCheck
            questions={assessmentQuestions}
            title="Payroll Mathematics & Cash Flow Management Assessment"
            description="Demonstrate your understanding of gross-to-net calculations and their business applications"
            showExplanations={true}
            allowRetry={true}
          />
        </div>
      </main>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}