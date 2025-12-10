'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalculateDeductions, DeductionScenario } from "@/components/payroll/CalculateDeductions"
import { TaxBracketTable } from "@/components/payroll/TaxBracketTable"
import { federalTaxTables2025 } from "@/data/payroll/federalTaxTables"
import { Target } from "lucide-react"

const currentPhase = lesson02Phases[3]
const singleTable = federalTaxTables2025.single
const marriedTable = federalTaxTables2025.married
const headTable = federalTaxTables2025.headOfHousehold

const independentScenario: DeductionScenario[] = [
  {
    id: "jordan-ops",
    title: "Jordan – operations lead with family",
    description:
      "Jordan is salaried at $90,480 per year, files jointly with a spouse, and opted into TechStart's dental plan. After pre-tax benefits, bi-weekly taxable wages equal $3,480.",
    payPeriod: "Bi-weekly",
    taxableWages: 3480,
    filingStatus: "married",
    bracketHint:
      "Multiply the wages by 26. $3,480 × 26 = $90,480 which sits in the 12% band for married filers. Use the married formula: $2,385 + 12% of the amount over $23,850, then divide by 26.",
    stateRate: 0.045,
    expected: {
      socialSecurity: 215.76,
      medicare: 50.46,
      federalIncome: 399.25,
      stateIncome: 156.6
    },
    notes: "No hints here—apply everything from Phase 2 and Phase 3."
  }
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-100">
      <PhaseHeader lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-10 space-y-8">
        <section className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200 text-amber-900 rounded-full text-sm font-medium">
            <Target className="h-4 w-4" />
            Independent Practice
          </div>
          <h1 className="text-4xl font-bold text-slate-900">Run the Full Deduction Logic Solo</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            No prompts, no hints. Jordan's paycheck mirrors what your simulator must handle next week: a salaried leader,
            joint filing status, and different benefit elections. If you can compute these numbers confidently, you're ready
            to build the Excel engine.
          </p>
        </section>

        <section className="space-y-4">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900 text-lg">Keep the IRS tables within reach</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 text-sm">
              Independent practice still demands references. Use these same tables from Phase 3 to confirm you are in the
              correct bracket before you commit the deduction to Jordan's paystub.
            </CardContent>
          </Card>
          <div className="grid gap-4 lg:grid-cols-3">
            <TaxBracketTable
              title="Single"
              filingStatusLabel={singleTable.label}
              brackets={singleTable.brackets}
              highlightIncome={55640}
              note="Check Alex's bracket without flipping tabs."
            />
            <TaxBracketTable
              title="Head of household"
              filingStatusLabel={headTable.label}
              brackets={headTable.brackets}
              highlightIncome={64480}
              note="Maria's reference lives here."
            />
            <TaxBracketTable
              title="Married filing jointly"
              filingStatusLabel={marriedTable.label}
              brackets={marriedTable.brackets}
              highlightIncome={90480}
              note="Jordan's $90,480 salary uses this column."
            />
          </div>
        </section>

        <Card className="border-rose-200 bg-rose-50">
          <CardHeader>
            <CardTitle className="text-rose-900">Quality bar</CardTitle>
          </CardHeader>
          <CardContent className="text-rose-900 text-sm space-y-2">
            <p>
              When you're done, compare your answers to the expected values. If anything is off by more than a dollar,
              revisit the federal table or check that you multiplied by the correct percentage. Sarah can't afford to be
              sloppy when someone's rent depends on her math.
            </p>
          </CardContent>
        </Card>

        <CalculateDeductions scenarios={independentScenario} mode="independent" />
      </main>

      <PhaseFooter lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
