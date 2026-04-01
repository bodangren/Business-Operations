import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, Calculator, ClipboardList, TrendingUp } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[2]

export default function Phase3Page() {
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
          <h2 className="text-2xl font-bold text-blue-900">Guided Practice: Multiple Employees, Multiple Deductions</h2>
          <p>
            Now let's apply the deduction procedure to three different TechStart employees. Each has a different situation—
            watch how the deductions add up differently. We'll also add a voluntary retirement contribution.
          </p>
        </div>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Employee Scenario A: Maya (Hourly, No Extras)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-purple-900">
            <p><strong>Data:</strong> Maya works 80 hours at $18/hour. Single, 0 allowances on W-4. No voluntary deductions.</p>
            <div className="bg-white p-3 rounded border text-sm">
              <p className="font-semibold mb-2">Calculate step by step:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Gross Pay: 80 × $18 = $1,440</li>
                <li>Federal Tax: ~$95 (based on withholding table)</li>
                <li>Social Security: $1,440 × 6.2% = $89.28</li>
                <li>Medicare: $1,440 × 1.45% = $20.88</li>
                <li>Net Pay: $1,440 - $95 - $89.28 - $20.88 = $1,234.84</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Employee Scenario B: James (Salaried + 401k)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-blue-900">
            <p><strong>Data:</strong> James earns $4,000/month salary. Married, 1 allowance. Contributes 5% to 401k.</p>
            <div className="bg-white p-3 rounded border text-sm">
              <p className="font-semibold mb-2">Calculate step by step:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Gross Pay: $4,000 (monthly)</li>
                <li>401k Contribution: $4,000 × 5% = $200 (pre-tax)</li>
                <li>Taxable Income: $4,000 - $200 = $3,800</li>
                <li>Federal Tax: ~$280 (on $3,800 taxable)</li>
                <li>Social Security: $4,000 × 6.2% = $248</li>
                <li>Medicare: $4,000 × 1.45% = $58</li>
                <li>Net Pay: $4,000 - $200 - $280 - $248 - $58 = $3,214</li>
              </ol>
            </div>
            <p className="text-sm">
              <Badge variant="outline" className="text-blue-800 border-blue-600">Key Point</Badge>
              {" "}401k reduces taxable income! James saves by contributing before taxes.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Employee Scenario C: Luis (Tipped Employee)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-green-900">
            <p><strong>Data:</strong> Luis works 30 hours at $3.00/hour (server) plus $220 in tips for the period. Single, 0 allowances.</p>
            <div className="bg-white p-3 rounded border text-sm">
              <p className="font-semibold mb-2">Calculate step by step:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Cash Wage: 30 × $3.00 = $90</li>
                <li>Tips: $220</li>
                <li>Gross Pay (for tax purposes): $90 + $220 = $310</li>
                <li>Federal Tax: ~$0 (low income)</li>
                <li>Social Security: $310 × 6.2% = $19.22 (employer matches)</li>
                <li>Medicare: $310 × 1.45% = $4.50 (employer matches)</li>
                <li>Net Pay: $310 - $19.22 - $4.50 = $286.28</li>
              </ol>
            </div>
            <p className="text-sm">
              <Badge variant="outline" className="text-green-800 border-green-600">Tipped Worker Note</Badge>
              {" "}Tips are taxable income! The employer must report tips and withhold appropriate taxes.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Employer Cost Comparison for All Three
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900">
            <div className="bg-white p-4 rounded border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-amber-50">
                    <th className="text-left py-2">Employee</th>
                    <th className="text-right py-2">Gross</th>
                    <th className="text-right py-2">Net Pay</th>
                    <th className="text-right py-2">Emp. SS+Med</th>
                    <th className="text-right py-2">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Maya (Hourly)</td>
                    <td className="text-right">$1,440</td>
                    <td className="text-right">$1,234.84</td>
                    <td className="text-right">$110.16</td>
                    <td className="text-right">$1,550.16</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">James (Salary)</td>
                    <td className="text-right">$4,000</td>
                    <td className="text-right">$3,214</td>
                    <td className="text-right">$306</td>
                    <td className="text-right">$4,306</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Luis (Tipped)</td>
                    <td className="text-right">$310</td>
                    <td className="text-right">$286.28</td>
                    <td className="text-right">$23.72</td>
                    <td className="text-right">$333.72</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-2">
              Sarah must budget for <strong>Total Cost</strong>, not just gross pay. The employer portion is real money!
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Partner Check (3 minutes)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-slate-800 text-sm">
            <p>Compare your calculations with a partner:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Did you handle the 401k pre-tax deduction correctly for James?</li>
              <li>Did you include tips in Luis's gross pay?</li>
              <li>Do your employer cost totals match?</li>
              <li>Explain to your partner: Why does the employer pay more than the employee's gross?</li>
            </ul>
          </CardContent>
        </Card>
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