import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PaystubPreview } from "@/components/payroll/PaystubPreview"
import { AlertTriangle, CheckCircle2, Users, MessageCircle } from "lucide-react"

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

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100">

      <div className="space-y-8">
        <section className="space-y-6 text-center">
          <Badge className="max-w-full whitespace-normal text-center leading-tight bg-orange-100 text-orange-900 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">
            🧾 Phase 1: Hook — Pay Stub Truth Test
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900">From Schedule to Pay Stub: No More Guessing</h2>
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
      </div>

    </div>
  )
}
