import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[4]

const assessmentQuestions = [
  {
    id: "assessment-timing",
    question: "What creates the timing gap between the payroll register and the bank?",
    answers: [
      "The register records wages as a liability on payday, but the cash actually leaves the bank when direct deposits process—often days later",
      "The bank always processes payroll immediately",
      "Employees choose when to cash their checks",
      "The timing gap is an accounting error"
    ],
    explanation: "GAAP requires recording the expense when earned, not when paid. The cash outflow happens later when the bank processes the transfer."
  },
  {
    id: "assessment-deductions",
    question: "Employee deductions (federal tax, state tax, SS/Medicare) are what type of account?",
    answers: [
      "A liability—the company holds these temporarily and passes them through to agencies",
      "An expense on the income statement",
      "A reduction in revenue",
      "An asset the company owns"
    ],
    explanation: "Deductions are liabilities because the company owes this money to third parties (IRS, state, insurance company) but holds it temporarily."
  },
  {
    id: "assessment-employer",
    question: "Which payroll item represents a real cost to the employer, not a pass-through from employees?",
    answers: [
      "Employer FICA (Social Security and Medicare) taxes",
      "Federal income tax withheld from employee pay",
      "State income tax withheld from employee pay",
      "Employee health insurance contributions"
    ],
    explanation: "Employer taxes are paid by the company on top of wages. Employee taxes are withheld from their pay and passed through."
  },
  {
    id: "assessment-reconcile",
    question: "To reconcile the payroll register to the bank, what two amounts do you compare?",
    answers: [
      "Net pay total in the register vs. the actual cash outflow shown on the bank statement",
      "Gross pay vs. net pay",
      "Employer taxes vs. employee deductions",
      "Current month vs. prior month totals"
    ],
    explanation: "Reconciliation compares the book record (register net pay total) to the bank's record (what actually cleared)."
  },
  {
    id: "assessment-float",
    question: "Why might a company want a longer timing gap between recording payroll and paying it?",
    answers: [
      "The company can use the cash float for other obligations like rent or inventory",
      "To avoid paying employees",
      "To increase profits",
      "The timing gap has no business significance"
    ],
    explanation: "Cash float gives the company use of the money between recording the liability and actually paying it."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">Phase 5: Exit Ticket</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-yellow-900 mb-3">Check Your Understanding</h2>
                <p className="text-lg leading-relaxed">
                  This assessment covers payroll timing, liability types, and reconciliation. Focus on the concepts, not Excel formulas—those come in Lessons 05-06.
                </p>
              </div>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Success Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Score 4/5 or higher to demonstrate understanding</li>
                    <li>If you miss questions, review the timing gap and liability types before Lesson 05</li>
                    <li>Be ready to explain why employer taxes are different from employee deductions</li>
                  </ul>
                </CardContent>
              </Card>

              <ComprehensionCheck
                questions={assessmentQuestions}
                allowRetry={true}
                showExplanations={true}
                title="Payroll Timing & Liabilities Check"
                description="Timing gap, liability types, and bank reconciliation"
              />

              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertDescription className="text-yellow-800">
                  <strong>Heads-up:</strong> Keep your Phase 4 notes handy. The mastery calculations you practiced directly support the Excel payroll automation coming next.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}