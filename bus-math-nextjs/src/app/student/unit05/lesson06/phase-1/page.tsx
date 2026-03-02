import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { PaystubPreview } from "@/components/payroll/PaystubPreview"
import { AlertTriangle, CheckCircle2, Users, MessageCircle } from "lucide-react"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

const paystubStory = {
  employeeName: "Sierra Lopez",
  role: "Bakery Beverage Lead",
  firstJobNote: "full-time with health benefits",
  payPeriodLabel: "Bi-weekly · March 14, 2025",
  grossPay: 1480,
  employerTaxes: 113.24,
  netPay: 1082.67,
  accountBalanceAfterBills: 320.45,
  emotionalSummary: {
    expectation: "Sierra expected FIT to match the IRS table and her childcare tax credit to show.",
    reality: "The pay stub she received showed $0 FIT and no state tax, which looked suspicious and scared her."
  },
  deductions: [
    { label: "FIT", amount: 123.40, description: "Based on single filer bi-weekly table with standard deduction." },
    { label: "Social Security (6.2%)", amount: 91.76, description: "6.2% of taxable wages up to the wage base." },
    { label: "Medicare (1.45%)", amount: 21.46, description: "1.45% of every taxable dollar." },
    { label: "California Income Tax", amount: 38.48, description: "4.5% starter withholding until the full table is loaded." },
    { label: "Health Premium", amount: 65.00, description: "Pre-tax deduction for TechStart’s plan." }
  ]
}

const hookQuestions = [
  {
    id: "fit",
    question: "Why did Sierra panic when her pay stub showed $0 federal income tax?",
    answers: [
      "Because the payroll sheet never subtracted the standard deduction before calculating FIT",
      "Because she received a raise",
      "Because Social Security was doubled",
      "Because California taxes are optional"
    ],
    explanation:
      "If taxable income is wrong, FIT looks wrong. A missing standard deduction can make the FIT line default to zero or the wrong bracket."
  },
  {
    id: "fica",
    question: "Which formula guarantees Social Security is correct for every pay stub?",
    answers: [
      "TaxableWages * 6.2% until the wage base is hit",
      "Gross Pay * 10%",
      "Net Pay * 1.45%",
      "Taxable Income * 22%"
    ],
    explanation:
      "FICA is predictable: 6.2% Social Security (capped) and 1.45% Medicare."
  },
  {
    id: "design",
    question: "Why do we build a printable pay stub with an Employee ID selector?",
    answers: [
      "So any employee can see their taxes and net pay instantly without editing formulas",
      "So we can hide the roster",
      "Because printers cannot read tables",
      "Because Excel requires a selector"
    ],
    explanation:
      "A selector protects the formulas and creates a professional experience when Sarah shares pay stubs or audits occur."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100">
      <PhaseHeader lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6 text-center">
          <Badge className="bg-orange-100 text-orange-900 text-lg px-4 py-2">
            🧾 Phase 1: Hook — Pay Stub Truth Test
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">From Schedule to Pay Stub: No More Guessing</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            After Lesson 05, Sarah can forecast hours and gross pay. Lesson 06 turns those numbers into a legally compliant
            pay stub. One error on a stub is enough to lose trust with employees, banks, and the IRS. Let’s look at what
            happens when taxable income is wrong—and how a selector-based stub fixes it.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-red-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-900">Before: Incomplete Pay Stub</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-red-900">
              <ul className="list-disc list-inside space-y-1">
                <li>Gross pay entered manually, no link to roster or schedule.</li>
                <li>Taxable income column missing standard deduction and pre-tax benefits.</li>
                <li>FIT cell empty because the lookup range was wrong.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-900">After: Selector-Driven Pay Stub</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-900">
              <PaystubPreview {...paystubStory} />
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Employee ID selector pulls name, filing status, and standard deduction.</li>
                <li>Taxable income calculated as <strong>Gross – Pre-tax benefits – Standard Deduction/number of pay periods</strong>.</li>
                <li>FIT, Social Security, Medicare, and state withholding display with explanations.</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Pay Stub Accuracy Check"
            description="Use Sierra’s story to predict what makes a pay stub trustworthy."
            questions={hookQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-700" />
              <CardTitle className="text-purple-900">Turn and Talk (3 minutes)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-purple-900 text-sm">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium">Discuss with a partner:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>What’s the worst thing that can happen if a pay stub is wrong?</li>
                    <li>Which inputs must always come from a trusted table (name, filing status, deduction)?</li>
                    <li>How will Sarah prove to Alex that his taxes were calculated correctly?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
