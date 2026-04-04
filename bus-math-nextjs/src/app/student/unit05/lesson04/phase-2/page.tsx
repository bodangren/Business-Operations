import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Calculator, Landmark, Clock, AlertTriangle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[1]

const liabilitySentences = [
  {
    id: "liab-timing",
    text: "The {blank} gap is the time between when wages are recorded as owed and when cash actually leaves the bank.",
    answer: "timing",
    hint: "Difference in when something is recorded vs. paid"
  },
  {
    id: "liab-employee",
    text: "Employee deductions (federal tax, state tax, health insurance) are held as a {blank} until paid to the agency.",
    answer: "liability",
    hint: "Something you owe but have not paid"
  },
  {
    id: "liab-employer",
    text: "Employer payroll taxes (FICA, state unemployment) create a separate {blank} for the company.",
    answer: "obligation",
    hint: "Required payment the employer must make"
  },
  {
    id: "liab-register",
    text: "The payroll {blank} is the book record that shows all wages earned, deductions, and net pay.",
    answer: "register",
    hint: "A formal list or record"
  },
  {
    id: "liab-reconcile",
    text: "To {blank} the register to the bank, compare the total paid by the bank to the net pay total in the register.",
    answer: "reconcile",
    hint: "Make two records agree"
  },
  {
    id: "liab-cash",
    text: "The cash outflow from payroll is the {blank} pay amount, not gross pay.",
    answer: "net",
    hint: "Take-home amount after deductions"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Phase 2: How Payroll Liabilities Work</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">Two Types of Payroll Obligations</h2>
                <p className="text-lg leading-relaxed">
                  When Sarah runs payroll on Wednesday, two different types of obligations are created at the same time:
                </p>
              </div>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <Landmark className="h-5 w-5" />
                    Type 1: Employee Deductions
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900 space-y-3">
                  <p>
                    These are amounts withheld from employee paychecks that Sarah must remit to third parties:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Federal income tax</strong> → IRS</li>
                    <li><strong>State income tax</strong> → State tax agency</li>
                    <li><strong>Social Security and Medicare</strong> → IRS</li>
                    <li><strong>Health insurance premiums</strong> → Insurance company</li>
                    <li><strong>Retirement contributions</strong> → Plan administrator</li>
                  </ul>
                  <p className="mt-3 font-medium">
                    These are not company money. The company holds them temporarily and passes them through.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Type 2: Employer Payroll Taxes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900 space-y-3">
                  <p>
                    These are costs the employer must pay on top of employee wages:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Employer FICA (Social Security)</strong> – 6.2% of wages up to limit</li>
                    <li><strong>Employer Medicare</strong> – 1.45% of all wages (no limit)</li>
                    <li><strong>Federal unemployment (FUTA)</strong> – 6.0% of first $7,000 (offset available)</li>
                    <li><strong>State unemployment (SUTA)</strong> – varies by state, typically 1-5%</li>
                  </ul>
                  <p className="mt-3 font-medium">
                    These are real costs to the company, not passed through from employees.
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">The Payroll Timing Window</h3>
                <p>
                  The key insight is that the company holds both types of money from the moment payroll is run until the moment the checks clear or direct deposits go through. This creates a "float" period where cash sits in the company account.
                </p>
              </div>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Worked Example: TechStart Payroll Timing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-emerald-900 text-sm space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Given: TechStart runs payroll for biweekly period</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Gross wages: $10,000</li>
                      <li>Employee deductions (fed + state tax, SS, Medicare, insurance): $2,500</li>
                      <li>Employer taxes (employer SS + Medicare): $855</li>
                      <li>Payroll run: Wednesday, Jan 15</li>
                      <li>Direct deposit clears: Friday, Jan 17</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-emerald-300">
                    <p className="font-semibold mb-2">Step 1: Calculate what the company owes</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Employee deductions held (liability): $2,500</li>
                      <li>Employer taxes owed (liability): $855</li>
                      <li>Total liability on the books: $3,355</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-emerald-300">
                    <p className="font-semibold mb-2">Step 2: Calculate actual cash outflow</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Net pay to employees (cash out): $7,500</li>
                      <li>Employer taxes (cash out later): $855</li>
                      <li>Total cash that will leave: $8,355</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-emerald-300">
                    <p className="font-semibold mb-2">Step 3: Timing gap analysis</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Register shows liability: $3,355 owed</li>
                      <li>Bank balance is higher by $3,355 until Friday</li>
                      <li>Sarah can use this float to cover other bills—but only for 2 days</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-emerald-200 bg-emerald-50">
                <AlertTriangle className="h-4 w-4 text-emerald-600" />
                <AlertDescription className="text-emerald-800">
                  <strong>Important:</strong> The liability exists the moment payroll is run, regardless of when the cash moves. This is why GAAP requires recording the expense when earned, not when paid.
                </AlertDescription>
              </Alert>

              <FillInTheBlank
                sentences={liabilitySentences}
                title="Vocabulary Check: Payroll Liabilities"
                description="Complete each sentence to solidify the timing and liability concepts."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}