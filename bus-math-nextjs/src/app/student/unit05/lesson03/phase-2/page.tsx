import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, ListChecks, TrendingUp, DollarSign } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[1]

const introductionQuestions = [
  {
    id: "intro-1",
    question: "Which of these is an employee deduction (comes OUT of the paycheck)?",
    answers: [
      "Federal income tax withholding",
      "Employer's portion of Social Security",
      "Employer's portion of Medicare",
      "Unemployment tax"
    ],
    explanation: "Employee deductions reduce the paycheck. Employers pay their own share of FICA taxes separately."
  },
  {
    id: "intro-2",
    question: "If an employee has $500 in federal income tax withheld, what happens to that $500?",
    answers: [
      "It goes to the IRS as the employee's payment toward their annual tax",
      "The employer keeps it",
      "It disappears",
      "It goes to the employee as extra pay"
    ],
    explanation: "Withholding is the employee's money going to the IRS. The employer is just the pass-through entity."
  },
  {
    id: "intro-3",
    question: "Why is employer FICA cost HIGHER than the employee's FICA contribution?",
    answers: [
      "Because employers must match the employee's 6.2% Social Security contribution",
      "Because employers are penalized extra",
      "Because employees never pay FICA",
      "Because the IRS gives employers a discount"
    ],
    explanation: "Both employee and employer pay 6.2% for Social Security and 1.45% each for Medicare. Employer cost matches the employee amount."
  }
]

export default function Phase2Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900">Introduction: The Deduction Menu</h2>
          <p>
            When Sarah runs payroll, two things happen simultaneously: the employee takes home less money, and the employer 
            pays more than just the gross wage. Let's map every deduction and calculate both numbers.
          </p>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <ListChecks className="h-5 w-5" />
              The Deduction Menu: What Comes Out of the Paycheck
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-800">
            <div className="bg-slate-50 p-4 rounded border">
              <h4 className="font-semibold text-red-800 mb-2">Employee Deductions (Subtracted from Gross Pay)</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Federal Income Tax Withholding</strong> - Based on W-4 elections and tax brackets</li>
                <li><strong>Social Security Tax</strong> - 6.2% of gross (capped at wage base)</li>
                <li><strong>Medicare Tax</strong> - 1.45% of gross (no cap)</li>
                <li><strong>State Income Tax</strong> - Varies by state rules</li>
                <li><strong>Other voluntary deductions</strong> - Health insurance, retirement (401k), etc.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded border">
              <h4 className="font-semibold text-green-800 mb-2">Employer Payroll Expenses (Added to Gross)</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Employer Social Security</strong> - Matches employee 6.2% (capped)</li>
                <li><strong>Employer Medicare</strong> - Matches employee 1.45% (no cap)</li>
                <li><strong>Federal Unemployment (FUTA)</strong> - 6% on first $7,000</li>
                <li><strong>State Unemployment</strong> - Varies by state (typically 0-5%)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              The Net Pay Formula
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-blue-900">
            <p className="font-semibold">Gross Pay - Employee Deductions = Net Pay (Take-Home)</p>
            <div className="bg-white p-4 rounded border font-mono text-sm">
              <p>Net Pay = Gross Pay - Federal Tax - Social Security - Medicare - State Tax - Other</p>
            </div>
            <p className="text-sm">Note: Social Security and Medicare are sometimes called "FICA" (Federal Insurance Contributions Act).</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Worked Example: Alex's First Paycheck
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-purple-900">
            <p><strong>Given:</strong> Alex's bi-weekly gross pay = $2,000. Single, no adjustments on W-4.</p>
            <div className="bg-white p-4 rounded border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Calculation</th>
                    <th className="text-right py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Gross Pay</td>
                    <td className="text-right">$2,000.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-red-600">- Federal Income Tax (estimated)</td>
                    <td className="text-right text-red-600">-$220.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-red-600">- Social Security (6.2%)</td>
                    <td className="text-right text-red-600">-$124.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-red-600">- Medicare (1.45%)</td>
                    <td className="text-right text-red-600">-$29.00</td>
                  </tr>
                  <tr className="border-b font-bold">
                    <td className="py-2">= Net Pay</td>
                    <td className="text-right">$1,627.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">Alex takes home $1,627, not $2,000. Sarah must withhold $373 total for taxes.</p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              The Employer Cost Side
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-green-900">
            <p>Now let's calculate what <strong>TechStart actually pays</strong> for Alex:</p>
            <div className="bg-white p-4 rounded border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Calculation</th>
                    <th className="text-right py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Gross Pay (wages)</td>
                    <td className="text-right">$2,000.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-green-600">+ Employer Social Security (6.2%)</td>
                    <td className="text-right text-green-600">+$124.00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-green-600">+ Employer Medicare (1.45%)</td>
                    <td className="text-right text-green-600">+$29.00</td>
                  </tr>
                  <tr className="border-b font-bold">
                    <td className="py-2">= Total Employer Cost</td>
                    <td className="text-right">$2,153.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              <Badge variant="outline" className="text-green-800 border-green-600">Key Insight</Badge> 
              {" "}The employer pays $2,153 for an employee who takes home only $1,127 bi-weekly. That's a 7.65% markup!
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck
          title="Deduction Foundations"
          description="Confirm you can identify employee deductions vs. employer expenses."
          questions={introductionQuestions}
          showExplanations={true}
        />
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}