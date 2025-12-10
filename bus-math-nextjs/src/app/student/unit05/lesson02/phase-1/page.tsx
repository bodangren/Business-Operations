'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { PaystubPreview } from "@/components/payroll/PaystubPreview"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

const currentPhase = lesson02Phases[0]

const paystubStory = {
  employeeName: "Alex Chen",
  role: "Junior automation developer",
  firstJobNote: "first full-time job after university",
  payPeriodLabel: "Bi-weekly · January 17, 2025",
  grossPay: 2240,
  employerTaxes: 171.36,
  netPay: 1597.82,
  accountBalanceAfterBills: 180.5,
  emotionalSummary: {
    expectation: "Alex expected to save more than $400 because the offer letter said \"$28/hour, 40 hours a week\".",
    reality: "He only sees $1,597.82 hit his bank account, and most of it is spoken for by rent and student loans."
  },
  deductions: [
    {
      label: "Federal income tax",
      amount: 315.2,
      description: "Withheld using the 2025 single filer bracket and Alex's W-4 election (single, no dependents)."
    },
    {
      label: "Social Security (6.2%)",
      amount: 138.88,
      description: "6.2% of $2,240.00. Stops only when annual wages hit $172,800."
    },
    {
      label: "Medicare (1.45%)",
      amount: 32.48,
      description: "Medicare applies to every dollar Alex earns, no cap."
    },
    {
      label: "California income tax",
      amount: 89.6,
      description: "TechStart uses a simplified 4% withholding for new hires until they build the full state table."
    },
    {
      label: "401(k) + health premium",
      amount: 66.02,
      description: "Alex opted into a 3% retirement contribution and $35 straight from his check for the HMO plan."
    }
  ]
}

const hookQuestions = [
  {
    id: "paystub_emotion",
    question: "Why is Alex frustrated even though his gross pay for the period was $2,240?",
    answers: [
      "His net pay dropped to about $1,598 after every deduction landed.",
      "He forgot to clock all of his hours.",
      "Sarah changed his hourly rate after payday.",
      "He had to lend money to a coworker."
    ],
    explanation:
      "Alex's first paycheck shows the classic gap between gross pay and take-home pay. The deductions reduced his spending power by more than $600."
  },
  {
    id: "paystub_expectation",
    question: "What did Alex expect to happen before seeing this paystub?",
    answers: [
      "He assumed the $28/hour headline would land almost dollar-for-dollar in his checking account.",
      "He thought the company would delay payment.",
      "He planned to quit before receiving this check.",
      "He planned for a pay cut."
    ],
    explanation:
      "This is Alex's first job out of university, so he pictured 80 hours × $28 showing up untouched."
  },
  {
    id: "paystub_cashflow",
    question: "Which deduction should Sarah worry about in addition to Alex's net pay?",
    answers: [
      "Employer payroll taxes of roughly $171 each period.",
      "Alex's rent payment.",
      "Alex's personal student loan bill.",
      "Tips that Alex didn't report."
    ],
    explanation:
      "Sarah must plan for Alex's net pay plus the employer match on Social Security and Medicare every payday."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <main className="container mx-auto px-4 py-10 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Paystub Reality Check
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Alex's First Real Paystub</h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              This is Alex's first job after finishing university. He crushed the interview, signed a professional offer
              letter, and pictured a bank account that would finally breathe. Today he opens his payroll portal—and
              realizes the gulf between the number on his offer letter and the number in his checking account.
            </p>
          </div>

          <PaystubPreview {...paystubStory} />
        </section>

        <section className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <Card className="border-blue-200 bg-white/80 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Why the Paystub Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-900">
              <p>
                Payroll math is emotional math. Alex couldn't plan for student loans, savings, or rent until he understood
                how every deduction behaved. Sarah needs the same clarity from the employer side—if she misses a single
                withholding, she risks a payroll crisis and a broken promise to her first employee.
              </p>
              <p>
                In Lesson 01 you watched Sarah debate whether she could even afford to hire Alex. Today's mission is to
                decode every line on this paystub so you can predict both Alex's take-home pay and Sarah's true cash
                requirement two weeks from now.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/80">
            <CardHeader>
              <CardTitle className="text-emerald-900 text-lg">Hook Objective</CardTitle>
            </CardHeader>
            <CardContent className="text-emerald-900 text-sm space-y-2">
              <p>
                By the end of this phase you should be able to read a real paystub, describe the difference between gross
                and net pay in Alex's situation, and explain why an entrepreneur must track employer taxes before hiring.
              </p>
              <p>
                Keep an eye on the deductions—they foreshadow the tax tables and calculator work you'll build in the next
                phases.
              </p>
            </CardContent>
          </Card>
        </section>

        <ComprehensionCheck
          questions={hookQuestions}
          title="Paystub Comprehension Check"
          description="Use Alex's first paycheck to make sure you can already explain what happened."
          showExplanations={true}
        />

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk: Expectations vs. Reality
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-blue-900">
            <p className="font-medium">Discuss for three minutes:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>How do you think Alex feels opening this paystub? What surprised him most?</li>
              <li>What did he expect would happen when he heard "$28 an hour" during the interview?</li>
              <li>What would you tell Alex so he can plan his budget with confidence on the next pay period?</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <PhaseFooter lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
