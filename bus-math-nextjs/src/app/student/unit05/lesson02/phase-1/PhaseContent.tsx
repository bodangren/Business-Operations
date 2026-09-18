'use client'

import { PaystubPreview } from "@/components/payroll/PaystubPreview"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calculator, TrendingUp } from "lucide-react"

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

const hourlyScenario = {
  hourlyRate: 28,
  hoursWorked: 80,
  grossPay: 2240,
  employeeType: "hourly"
}

const salariedScenario = {
  annualSalary: 90000,
  payPeriods: 26,
  grossPay: 3461.54,
  employeeType: "salaried"
}

const tippedScenario = {
  regularWages: 480,
  tipsReported: 312,
  totalHours: 40,
  grossPay: 792,
  employeeType: "tipped"
}

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Paystub Reality Check
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Alex's First Real Paystub</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              This is Alex's first job after finishing university. He crushed the interview, signed a professional offer
              letter, and pictured a bank account that would finally breathe. Today he opens his payroll portal—and
              realizes the gulf between the number on his offer letter and the number in his checking account.
            </p>
          </div>

          <PaystubPreview {...paystubStory} />
        </section>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              The Friction Point: Before Deductions, We Need Gross Pay
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <p className="font-medium">Here's the problem Sarah faces:</p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4" />
                  <span className="font-semibold">Hourly Worker</span>
                </div>
                <p className="text-sm">Alex earns <strong>$28/hour</strong> × <strong>80 hours</strong> = <span className="font-mono">${hourlyScenario.grossPay.toLocaleString()}</span></p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-4 w-4" />
                  <span className="font-semibold">Salaried Manager</span>
                </div>
                <p className="text-sm">$90,000/year ÷ <strong>26 pay periods</strong> = <span className="font-mono">${salariedScenario.grossPay.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-semibold">Tipped Server</span>
                </div>
                <p className="text-sm">$12/hour × 40 + <strong>$312 tips</strong> = <span className="font-mono">${tippedScenario.grossPay.toLocaleString()}</span></p>
              </div>
            </div>
            <p className="text-sm">
              <strong>Question:</strong> Before Sarah can calculate any deductions, she needs to know the starting number. 
              How does she calculate gross pay for each employee type? What happens if she uses the wrong formula?
            </p>
          </CardContent>
        </Card>

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
      </div>

    </div>
  )
}