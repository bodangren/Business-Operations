import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, DollarSign, Users } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson02Phases[1] // Phase 2: Introduction

const payrollTerms = [
  {
    id: '1',
    text: '{blank} is the total amount an employee earns before any deductions are taken out.',
    answer: 'Gross Pay',
    hint: 'This is what you agree to pay an employee before taxes and other deductions',
    category: 'Basic Terms'
  },
  {
    id: '2', 
    text: '{blank} is the amount employees actually take home after all deductions are subtracted.',
    answer: 'Net Pay',
    hint: 'This is what ends up in the employee\'s bank account',
    category: 'Basic Terms'
  },
  {
    id: '3',
    text: 'For hourly employees who work more than 40 hours, overtime is typically {blank} times their regular rate.',
    answer: '1.5',
    hint: 'Time and a half is the standard overtime rate',
    alternativeAnswers: ['1.5', 'one and a half'],
    category: 'Calculations'
  },
  {
    id: '4',
    text: 'FICA taxes fund two programs: Social Security at {blank}% and Medicare at 1.45%.',
    answer: '6.2',
    hint: 'Social Security tax rate is slightly higher than Medicare',
    category: 'Tax Rates'
  },
  {
    id: '5',
    text: 'For tipped employees, the federal minimum base wage is ${blank} per hour.',
    answer: '2.13',
    hint: 'This is much lower than regular minimum wage because tips are expected',
    category: 'Special Cases'
  },
  {
    id: '6',
    text: 'The basic payroll formula is: {blank} - Deductions = Net Pay.',
    answer: 'Gross Pay',
    hint: 'Start with what the employee earns, then subtract what comes out',
    category: 'Formulas'
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-8">
        {/* Introduction Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <Calculator className="h-4 w-4" />
              Core Concepts
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              From Gross to Net: The Payroll Mathematics
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every paycheck tells a story of transformation—from the gross amount you promise to pay 
              to the net amount that actually reaches your employee's bank account.
            </p>
          </div>

          {/* Key Concept: Gross vs Net */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-2xl flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                The Two Numbers That Matter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-lg mb-2">Gross Pay</h3>
                  <p className="mb-2">
                    The total amount an employee earns before any deductions. This is what you negotiate when you hire someone.
                  </p>
                  <p className="font-semibold text-blue-900">
                    Example: Alex works 40 hours at $25/hour = $1,000 gross pay
                  </p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-lg mb-2">Net Pay</h3>
                  <p className="mb-2">
                    The amount left after all taxes and deductions are taken out. This is what actually hits the employee's bank account.
                  </p>
                  <p className="font-semibold text-blue-900">
                    Example: Alex's $1,000 gross becomes ~$750 net after taxes
                  </p>
                </div>
              </div>
              <div className="bg-blue-200 p-4 rounded-lg border border-blue-400 text-center">
                <p className="font-bold text-lg text-blue-900">
                  The Golden Rule: Gross Pay - Deductions = Net Pay
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Types of Gross Pay Calculations */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-2xl">Three Ways to Calculate Gross Pay</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-green-800">
              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-lg mb-2 text-green-900">1. Hourly Employees</h3>
                  <p className="mb-2">
                    Multiply hours worked by hourly rate. For overtime (over 40 hours), pay 1.5 times the regular rate.
                  </p>
                  <div className="bg-green-200 p-3 rounded font-mono text-sm">
                    <p><strong>Regular:</strong> 32 hours × $15/hour = $480</p>
                    <p><strong>With Overtime:</strong> 45 hours = (40 × $15) + (5 × $15 × 1.5) = $600 + $112.50 = $712.50</p>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-lg mb-2 text-green-900">2. Salaried Employees</h3>
                  <p className="mb-2">
                    Divide annual salary by number of pay periods (weekly = 52, bi-weekly = 26, monthly = 12).
                  </p>
                  <div className="bg-green-200 p-3 rounded font-mono text-sm">
                    <p><strong>Example:</strong> $45,000 salary ÷ 26 bi-weekly periods = $1,730.77 per paycheck</p>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-lg mb-2 text-green-900">3. Tipped Employees</h3>
                  <p className="mb-2">
                    Base wage plus reported tips, but must meet standard minimum wage requirements.
                  </p>
                  <div className="bg-green-200 p-3 rounded font-mono text-sm">
                    <p><strong>Base:</strong> 25 hours × $2.13 = $53.25</p>
                    <p><strong>Plus Tips:</strong> $53.25 + $180 tips = $233.25 total</p>
                    <p><strong>Minimum Check:</strong> Must equal at least 25 × $7.25 = $181.25</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deductions Breakdown */}
          <Card className="border-2 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-2xl">What Gets Deducted</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                    <h3 className="font-bold text-lg mb-2 text-orange-900">Required Deductions</h3>
                    <ul className="space-y-2">
                      <li><strong>Federal Income Tax:</strong> Based on W-4 form and tax tables</li>
                      <li><strong>State Income Tax:</strong> Varies by state</li>
                      <li><strong>Social Security:</strong> 6.2% of gross pay</li>
                      <li><strong>Medicare:</strong> 1.45% of gross pay</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                    <h3 className="font-bold text-lg mb-2 text-orange-900">Optional Deductions</h3>
                    <ul className="space-y-2">
                      <li><strong>Health Insurance:</strong> Employee premium share</li>
                      <li><strong>Retirement (401k):</strong> Employee contributions</li>
                      <li><strong>Other:</strong> Life insurance, parking, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-orange-200 p-4 rounded-lg border border-orange-400">
                <h3 className="font-bold text-lg mb-2 text-orange-900">Sarah's Responsibility</h3>
                <p>
                  Getting this wrong can lead to huge problems. Under-withholding means Alex could owe money at tax time. 
                  Over-withholding means less money in his pocket each month. Sarah needs to get this exactly right 
                  to be a good employer and maintain trust.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why This Matters */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                💡 Why This Matters for Sarah
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-800">
              <p className="text-lg leading-relaxed">
                When Sarah promises to pay Alex $25 per hour, she's talking gross pay. But her actual cash outflow will be different:
              </p>
              <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-purple-900">Alex's Gross Pay</p>
                    <p className="text-2xl font-bold">$1,000</p>
                    <p className="text-sm">What Sarah promised</p>
                  </div>
                  <div>
                    <p className="font-semibold text-purple-900">Alex's Net Pay</p>
                    <p className="text-2xl font-bold">~$750</p>
                    <p className="text-sm">What Alex actually gets</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-purple-200 rounded text-center">
                  <p className="font-semibold text-purple-900">
                    Sarah's True Cost: $1,000 + Employer Taxes (~$76.50) = $1,076.50
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Understanding these calculations helps Sarah predict her exact payroll cash needs. 
                No more guessing—just precise, reliable financial planning.
              </p>
            </CardContent>
          </Card>

          {/* Think-Pair-Share Discussion */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-blue-800 mb-2">
                Think about the difference between gross and net pay. Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Why might employees be surprised by the difference between gross and net pay?</li>
                <li>How could Sarah explain this to Alex during the hiring process to set proper expectations?</li>
                <li>What additional costs beyond gross pay should Sarah budget for when hiring Alex?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Fill in the Blank Exercise */}
          <FillInTheBlank
            sentences={payrollTerms}
            title="Master the Payroll Vocabulary"
            description="Complete these key payroll concepts to build your foundation for accurate calculations"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
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