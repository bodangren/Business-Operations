'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalculateDeductions, DeductionScenario } from "@/components/payroll/CalculateDeductions"
import { Badge } from "@/components/ui/badge"
import { TaxBracketTable } from "@/components/payroll/TaxBracketTable"
import { federalTaxTables2025 } from "@/data/payroll/federalTaxTables"

const currentPhase = lesson02Phases[2]
const singleTable = federalTaxTables2025.single
const marriedTable = federalTaxTables2025.married
const headTable = federalTaxTables2025.headOfHousehold

const scenarios: DeductionScenario[] = [
  {
    id: "alex-base",
    title: "Alex – regular 80-hour pay period",
    description:
      "No overtime this period. Health premiums and 401(k) deferrals already came out, so taxable wages are $2,140.",
    payPeriod: "Bi-weekly",
    taxableWages: 2140,
    filingStatus: "single",
    bracketHint:
      "Annualize $2,140 × 26 = $55,640. Still inside the 12% bracket, so apply the single formula: $1,192.50 + 12% over $11,925, then divide back to the pay period.",
    stateRate: 0.04,
    expected: {
      socialSecurity: 132.68,
      medicare: 31.03,
      federalIncome: 318.45,
      stateIncome: 85.6
    }
  },
  {
    id: "alex-overtime",
    title: "Alex – 15 hours of overtime",
    description:
      "Alex sprinted to hit a deadline and logged 95 hours. After overtime and pre-tax benefits, taxable wages are $2,660.",
    payPeriod: "Bi-weekly",
    taxableWages: 2660,
    filingStatus: "single",
    bracketHint:
      "Annualized wages jump above $69k, so part of this check is taxed at 22%. Use $5,578.50 + 22% of the amount over $48,475, then convert back to this pay period.",
    stateRate: 0.04,
    expected: {
      socialSecurity: 164.92,
      medicare: 38.57,
      federalIncome: 412.9,
      stateIncome: 106.4
    }
  },
  {
    id: "maria-head",
    title: "Maria – head of household café manager",
    description:
      "Maria runs the weekend café and claims head-of-household status for her two children. Taxable wages this period: $2,480.",
    payPeriod: "Bi-weekly",
    taxableWages: 2480,
    filingStatus: "headOfHousehold",
    bracketHint:
      "HOH brackets go 10% up to $17,000, then 12% up to $64,850. Annualized wages ≈ $64,480, still inside the 12% band.",
    stateRate: 0.03,
    expected: {
      socialSecurity: 153.76,
      medicare: 35.96,
      federalIncome: 286.2,
      stateIncome: 74.4
    },
    notes: "Maria works in Arizona so Sarah withholds a flat 3% until the AZ worksheet is complete."
  }
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-100">
      <PhaseHeader lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-10 space-y-8">
        <section className="space-y-4 text-center">
          <Badge className="bg-purple-200 text-purple-900 text-lg px-4 py-2">Guided Calculator Practice</Badge>
          <h1 className="text-4xl font-bold text-slate-900">Fill in the Paystub Deductions with Support</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Use the IRS tables you just studied to calculate each deduction. This component gives you scaffolds: hints,
            highlighting, and instant feedback. Phase 4 removes the training wheels.
          </p>

        </section>

        <section className="space-y-4">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900 text-lg">Quick-reference tax tables</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 text-sm">
              Keep the correct filing status in view while you calculate. Match each scenario card to one of these tables,
              find the taxable income range, and apply the IRS formula before dividing back down to the bi-weekly amount.
            </CardContent>
          </Card>
          <div className="grid gap-4 lg:grid-cols-3">
            <TaxBracketTable
              title="Single"
              filingStatusLabel={singleTable.label}
              brackets={singleTable.brackets}
              highlightIncome={55640}
              note="Use for both Alex scenarios."
            />
            <TaxBracketTable
              title="Head of household"
              filingStatusLabel={headTable.label}
              brackets={headTable.brackets}
              highlightIncome={64480}
              note="Maria's annualized wages fall in the 12% band here."
            />
            <TaxBracketTable
              title="Married filing jointly"
              filingStatusLabel={marriedTable.label}
              brackets={marriedTable.brackets}
              highlightIncome={90480}
              note="Jordan's salary lives in the 12% married bracket."
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-indigo-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-indigo-900">How to Attack Each Scenario</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 text-sm space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Copy the taxable wages shown on the card.</li>
                <li>Multiply by 6.2% and 1.45% for Social Security and Medicare.</li>
                <li>Annualize the wages (multiply by 26) to find the correct federal bracket.</li>
                <li>Apply the row's formula, then divide back to the pay period.</li>
                <li>Use the stated state rate until we load official tables.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Why This Matters for Sarah</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 text-sm space-y-2">
              <p>
                Sarah can't hold payroll until a consultant hands her formulas. She needs to know the math herself so she
                can audit the spreadsheet, train future bookkeepers, and explain every line to Alex. Your calculator should
                reflect the same logic you are practicing right now.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="border-violet-200 bg-white/95">
            <CardHeader>
              <CardTitle className="text-violet-900">Worked Paystub Example: Jordan's Check</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-800">
              <p>
                Sarah sits beside Jordan, her payroll coordinator, and walks through one bi-weekly check with taxable wages of
                <strong> $2,240</strong>. Everything you see below mirrors the calculator you are about to use, so study the method
                as much as the answers.
              </p>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Social Security – 6.2%</h3>
                    <p>
                      Wage base check: $2,240 is far below the $172,800 annual cap, so the entire check is taxable. Multiply the
                      taxable wages by 0.062 → <code>2,240 × 0.062 = 138.88</code>. Sarah rounds to the nearest cent, so the
                      deduction on the stub is <strong>$138.88</strong>.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Medicare – 1.45%</h3>
                    <p>
                      No cap exists for Medicare on this paycheck. Multiply the same taxable wages by 0.0145 →
                      <code>2,240 × 0.0145 = 32.48</code>. The deduction prints as <strong>$32.48</strong>.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">Federal income tax – single filing</h3>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Annualize: <code>2,240 × 26 = 58,240</code>.
                      </li>
                      <li>
                        Spot the bracket: $58,240 is in the single 22% band so use the formula <code>$5,578.50 + 22% of (income −
                          $48,475)</code>.
                      </li>
                      <li>
                        Plug in: income above the cutoff is <code>58,240 − 48,475 = 9,765</code>. Multiply by 0.22 to get
                        <code>2,148.30</code>, then add the base <code>5,578.50</code> for <code>7,726.80</code> annual tax.
                      </li>
                      <li>Return to the pay period: <code>7,726.80 ÷ 26 = 297.19</code>. Rounded deduction is <strong>$297.19</strong>.
                      </li>
                    </ol>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-900">State income tax – 3.5% placeholder</h3>
                    <p>
                      TechStart withholds a flat 3.5% until the state table is finalized. Multiply the wages by 0.035 →
                      <code>2,240 × 0.035 = 78.40</code>, so the deduction equals <strong>$78.40</strong>.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
                  <h3 className="font-semibold text-violet-900 mb-2">Jordan's paystub summary</h3>
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="text-violet-900">
                        <th className="py-1">Line</th>
                        <th className="py-1 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-900">
                      <tr className="border-t border-violet-200">
                        <td className="py-1 font-medium">Taxable wages</td>
                        <td className="py-1 text-right">$2,240.00</td>
                      </tr>
                      <tr>
                        <td className="py-1">Social Security (6.2%)</td>
                        <td className="py-1 text-right">$138.88</td>
                      </tr>
                      <tr>
                        <td className="py-1">Medicare (1.45%)</td>
                        <td className="py-1 text-right">$32.48</td>
                      </tr>
                      <tr>
                        <td className="py-1">Federal income tax</td>
                        <td className="py-1 text-right">$297.19</td>
                      </tr>
                      <tr>
                        <td className="py-1">State income tax (3.5%)</td>
                        <td className="py-1 text-right">$78.40</td>
                      </tr>
                      <tr className="border-t border-violet-200 font-semibold text-violet-900">
                        <td className="py-1">Net pay to Jordan</td>
                        <td className="py-1 text-right">$1,693.05</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-3 text-sm text-violet-900">
                    Double-check: add every deduction ($546.95) and subtract from wages to reach the same net total. When your
                    numbers balance like this, you know the paystub is defensible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <CalculateDeductions scenarios={scenarios} mode="assisted" />
      </main>

      <PhaseFooter lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
