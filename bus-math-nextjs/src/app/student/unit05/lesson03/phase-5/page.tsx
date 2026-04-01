import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[4]

const assessmentQuestions = [
  {
    id: "assess-1",
    question: "What is the term for the amount an employee receives after all deductions?",
    answers: [
      "Net pay",
      "Gross pay",
      "Take-home pay is not a formal term",
      "Employer cost"
    ],
    explanation: "Net pay (or take-home pay) is the amount that remains after subtracting all deductions from gross pay."
  },
  {
    id: "assess-2",
    question: "If an employee has gross pay of $2,000, Social Security withheld is $124, Medicare is $29, and federal tax is $200, what is the net pay?",
    answers: [
      "$1,647",
      "$1,876",
      "$2,353",
      "$1,400"
    ],
    explanation: "Net pay = Gross - SS - Medicare - Federal = $2,000 - $124 - $29 - $200 = $1,647"
  },
  {
    id: "assess-3",
    question: "Why is employer total cost HIGHER than employee gross pay?",
    answers: [
      "Because employers must pay matching Social Security and Medicare taxes",
      "Because employers are required to pay more by law",
      "Because employees never pay their share",
      "Because employers get a discount from the IRS"
    ],
    explanation: "Employers pay matching 6.2% Social Security and 1.45% Medicare on top of gross wages, adding about 7.65% to total cost."
  },
  {
    id: "assess-4",
    question: "A 401k contribution is considered a 'pre-tax' deduction. What does that mean?",
    answers: [
      "It reduces the amount of income subject to federal tax",
      "It is taken out after taxes are calculated",
      "It is not required by law",
      "The employer pays for it"
    ],
    explanation: "Pre-tax deductions reduce taxable income. A $100 401k contribution means $100 less is taxed, lowering the federal tax owed."
  },
  {
    id: "assess-5",
    question: "When an employee earns $3,000 in a pay period, how much does the employer pay in total (wages + employer FICA)?",
    answers: [
      "$3,229.50",
      "$3,000",
      "$3,153",
      "$2,850"
    ],
    explanation: "Employer cost = $3,000 + ($3,000 × 6.2%) + ($3,000 × 1.45%) = $3,000 + $186 + $43.50 = $3,229.50"
  }
]

export default function Phase5Page() {
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
          <h2 className="text-2xl font-bold text-blue-900">Exit Ticket: Deductions and Net Pay</h2>
          <p>
            Answer these questions to demonstrate your understanding of moving from gross to net pay, 
            and why employer cost matters for business planning.
          </p>
        </div>

        <Card className="border-slate-200">
          <CardContent className="p-6">
            <ComprehensionCheck
              title="Deductions and Net Pay Check"
              description="Answer all 5 questions. You need 4 correct to pass."
              questions={assessmentQuestions}
              showExplanations={true}
              allowRetry={true}
            />
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