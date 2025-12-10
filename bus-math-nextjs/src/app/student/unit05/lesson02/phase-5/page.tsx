'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

const currentPhase = lesson02Phases[4]

const assessmentQuestions = [
  {
    id: "net-pay",
    question: "Alex's gross pay is $2,240 but his net pay is $1,597.82. Which deduction explains most of the difference?",
    answers: [
      "Federal income tax calculated from the single filer table",
      "Unpaid overtime",
      "Late timesheet submission",
      "Employer 401(k) match"
    ],
    explanation:
      "The paystub shows a $315 federal withholding that drops Alex into the correct bracket for a single filer."
  },
  {
    id: "fica-formula",
    question: "How do you compute Social Security withholding for a single bi-weekly paycheck?",
    answers: [
      "Multiply taxable wages by 6.2% until the annual wage base ($172,800) is reached.",
      "Divide taxable wages by 6.2, then subtract the standard deduction.",
      "Take the net pay and add 6.2%.",
      "Use the state tax table and match the row labeled Social Security."
    ],
    explanation:
      "FICA uses flat percentages: Social Security is 6.2% of taxable wages until the annual cap."
  },
  {
    id: "table-selection",
    question: "Jordan files jointly. Which IRS table and row should you use for $90,480 in taxable annual wages?",
    answers: [
      "Married filing jointly · 12% bracket (over $23,850 up to $96,950)",
      "Single table · 22% bracket",
      "Head-of-household table · 24% bracket",
      "Estate and trust table"
    ],
    explanation:
      "$90,480 is inside the married 12% range, so we use the married formula with the $2,385 base tax."
  },
  {
    id: "scenario-change",
    question: "If Alex updates his W-4 to 'head of household', what changes in your calculator?",
    answers: [
      "Switch to the head-of-household table and apply the larger standard deduction before withholding.",
      "Only Social Security changes when filing status changes.",
      "Employer taxes disappear because head-of-household status cancels them.",
      "Nothing—the filing status is just for the IRS refund."
    ],
    explanation:
      "Filing status affects the federal bracket and tax credits. The calculator must pull from the HOH table."
  },
  {
    id: "state-rate",
    question: "TechStart uses a temporary 4% state rate for California. What is the purpose of that placeholder?",
    answers: [
      "It covers state withholding until the detailed state table is finished.",
      "It pays down Alex's student loans.",
      "It replaces employer FICA costs.",
      "It is optional and only used for salaried employees."
    ],
    explanation:
      "Sarah won't pause hiring while the state worksheet is built, so she withholds a conservative 4% in the meantime."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100">
      <PhaseHeader lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-10 space-y-8">
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-200 text-emerald-900 rounded-full text-sm font-medium">
            Formative Assessment
          </div>
          <h1 className="text-4xl font-bold text-slate-900">Verify Your Payroll Logic</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            These questions tie directly to the paystub, tax tables, and calculator you just built. Answer them without
            looking at your notes to confirm you can explain each step to Sarah—or to Alex when he asks why his taxes look
            different next month.
          </p>
        </section>

        <Card className="border-slate-200 bg-white/90">
          <CardHeader>
            <CardTitle className="text-slate-900">What success looks like</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-800 text-sm space-y-2">
            <p>
              Score at least 4 out of 5. If you miss a question, go back to the matching phase and review—each concept will
              reappear in Lesson 03 when we wire these calculations into structured Excel tables with SUMIFS and data
              validation.
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck
          questions={assessmentQuestions}
          title="Gross-to-Net Application Check"
          description="Federal tables, FICA math, filing-status changes, and state placeholders"
          allowRetry={true}
          showExplanations={true}
        />
      </main>

      <PhaseFooter lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
