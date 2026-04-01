import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  {
    id: "taxable-income",
    question: "Gross pay is $1,520, pre-tax benefits are $40, and standard deduction is $20,800 annually. Bi-weekly pay. What is taxable income?",
    answers: [
      "$1,520 - $40 - ($20,800/26) = $676.92",
      "$1,520 - $20,800 = -$19,280",
      "$1,520 - $40 = $1,480",
      "$1,520"
    ],
    explanation:
      "Divide the standard deduction by 26 first: $800. Subtract from gross minus pre-tax benefits: 1,520 - 40 - 800 = 680 (rounded to $676.92 when using exact cents)."
  },
  {
    id: "fit-lookup",
    question: "Which strategy ensures the FIT lookup always matches the employee’s filing status?",
    answers: [
      "Store separate FIT tables (Single, Married, HOH) and use XLOOKUP on FilingStatus to point to the correct table",
      "Use one table and hope the brackets are the same",
      "Filter the table manually every payday",
      "Hard-code the FIT amount once"
    ],
    explanation:
      "Link filing status to the correct table automatically so the pay stub changes instantly when status changes."
  },
  {
    id: "fica-question",
    question: "Andre earns $930 gross with no pre-tax benefits. What are his Social Security and Medicare amounts?",
    answers: [
      "$57.66 SS and $13.49 Medicare",
      "$60.00 SS and $9.30 Medicare",
      "$0 SS and $0 Medicare",
      "$100 SS and $50 Medicare"
    ],
    explanation:
      "Social Security = 930 × 6.2% = $57.66. Medicare = 930 × 1.45% = $13.49."
  },
  {
    id: "state-tax",
    question: "Nia works in California with a 4.5% starter rate. Her taxable income is $1,850. How much state tax should appear?",
    answers: [
      "$83.25",
      "$1,850",
      "$41.62",
      "$0"
    ],
    explanation:
      "State tax = TaxableIncome × 0.045 = $83.25."
  },
  {
    id: "selector",
    question: "Why must the pay stub use an Employee ID selector instead of manual typing?",
    answers: [
      "It ensures the stub pulls data from the roster/tax sheet without human error",
      "It makes the sheet prettier",
      "Excel refuses to calculate otherwise",
      "It reduces file size"
    ],
    explanation:
      "Selectors lock formulas and prevent someone from accidentally overwriting employee data."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-yellow-50 to-slate-100">
      <PhaseHeader lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-yellow-100 text-yellow-900 text-lg px-4 py-2">
            ✅ Phase 5: Assessment
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Pay Stub Accuracy Check</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Use your workbook or mental math to answer each question. Explain your reasoning out loud before submitting.
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Lesson 06 Mastery"
            description="Confirm you can calculate taxable income, FIT, FICA, and state tax while using selectors."
            questions={assessmentQuestions}
            showExplanations={true}
          />
        </section>

        <section className="max-w-4xl mx-auto mt-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Artifact Task: Payroll Defense Memo</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-4">
              <p className="text-sm">
                Write a 2-3 sentence explanation of how your workbook prevents payroll mistakes. This memo would be shown 
                to Sarah's accountant during an audit. Focus on one specific validation or check your workbook includes.
              </p>
              <div className="bg-white/80 rounded p-4">
                <textarea 
                  placeholder="Example: The workbook prevents payroll mistakes by using XLOOKUP to pull employee data automatically, so there's no manual entry of names or tax rates that could introduce errors..."
                  className="w-full min-h-[100px] border border-indigo-200 rounded p-2 text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
