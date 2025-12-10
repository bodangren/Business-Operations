'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TaxBracketTable } from "@/components/payroll/TaxBracketTable"
import { federalTaxTables2025, SOCIAL_SECURITY_RATE, MEDICARE_RATE } from "@/data/payroll/federalTaxTables"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { Calculator, Info } from "lucide-react"

const currentPhase = lesson02Phases[1]

const payrollSentences = [
  {
    id: "gross",
    text: '{blank} pay is the full promise—hours times rate before any deductions happen.',
    answer: 'Gross',
    hint: 'Offer letter number',
    category: 'Vocabulary'
  },
  {
    id: "net",
    text: '{blank} pay is what lands in the employee\'s bank account after all withholdings and benefits are removed.',
    answer: 'Net',
    hint: 'Spendable money',
    category: 'Vocabulary'
  },
  {
    id: "fica",
    text: 'Social Security withholding equals {blank}% of taxable wages until the annual wage base is reached.',
    answer: '6.2',
    alternativeAnswers: ['6.2', '6.20'],
    hint: 'Printed on the employer poster',
    category: 'Rates'
  },
  {
    id: "medicare",
    text: 'Medicare withholding equals {blank}% of every taxable dollar Alex earns.',
    answer: '1.45',
    alternativeAnswers: ['1.45', '1.450'],
    hint: 'No annual cap',
    category: 'Rates'
  },
  {
    id: "tables",
    text: 'Federal income tax uses IRS {blank} tables that match the filing status and taxable income range.',
    answer: 'tax bracket',
    alternativeAnswers: ['tax brackets', 'bracket'],
    hint: 'Starts at 10%',
    category: 'Concept'
  },
  {
    id: "state",
    text: 'State income tax withholding follows a state-specific table or simplified {blank}% starter rate until a full table is built.',
    answer: '4',
    alternativeAnswers: ['4', '4.0', 'four'],
    hint: 'TechStart\'s temporary California rate',
    category: 'Concept'
  }
]

export default function Phase2Page() {
  const marriedTable = federalTaxTables2025.married
  const singleTable = federalTaxTables2025.single
  const headTable = federalTaxTables2025.headOfHousehold

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-100">
      <PhaseHeader lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-10 space-y-8">
        <section className="space-y-4 max-w-4xl mx-auto text-center">
          <Badge className="bg-green-200 text-green-900 text-lg px-4 py-2 gap-2">
            <Calculator className="h-4 w-4" />
            Mechanics before Macros
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900">How Each Deduction Gets Calculated</h1>
          <p className="text-lg text-slate-700">
            Before we touch Excel we need clean mental math. Every deduction you saw on Alex's paystub follows a very
            specific rule. When you know the rule, building the spreadsheet is easy.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Federal vs. State Income Tax</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-3">
              <p>
                <strong>Federal income tax</strong> comes from the IRS tax tables. We subtract the standard deduction,
                figure out the taxable wages for the pay period, then see which bracket the wages fall into. Alex filed his
                W-4 as single with no dependents, so we use the "single" bracket.
              </p>
              <p>
                <strong>State income tax</strong> depends on the state. TechStart operates in California, so Sarah uses a
                temporary 4% starter rate until her full state worksheet is finished. In Lesson 03 you'll build the
                official California lookup table using SUMIFS and validation rules.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">FICA: Social Security + Medicare</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-3">
              <p>
                Social Security is always <strong>{(SOCIAL_SECURITY_RATE * 100).toFixed(1)}%</strong> of taxable wages until
                the annual wage base hits $172,800. If Alex earns $2,240 during the pay period, the Social Security
                withholding is $138.88. Sarah matches that same amount as an employer expense.
              </p>
              <p>
                Medicare is <strong>{(MEDICARE_RATE * 100).toFixed(2)}%</strong> of every dollar Alex earns. There is no cap.
                Once Alex earns more than $200,000 in a calendar year, an additional 0.9% employee surtax kicks in. We
                won't hit that this week, but your Excel model should plan for it when Sarah hires higher-paid staff.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">2025 IRS Federal Tax Tables</h2>
          <p className="text-center text-slate-700 max-w-3xl mx-auto">
            Tables pulled from IRS Rev. Proc. 2024-40 (tax year 2025). Use the table that matches the employee's filing
            status, find the correct range, then apply the formula listed in the third column.
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            <TaxBracketTable
              title="Single · no dependents"
              filingStatusLabel={singleTable.label}
              brackets={singleTable.brackets}
              highlightIncome={58200}
              note="Alex's taxable wages (after standard deduction) sit inside the 12% bracket until the simulator shows higher annual income."
            />
            <TaxBracketTable
              title="Married filing jointly"
              filingStatusLabel={marriedTable.label}
              brackets={marriedTable.brackets}
              highlightIncome={110000}
              note="Use this table when employees update their W-4 to married status or when Sarah models her own salary with a spouse."
            />
            <TaxBracketTable
              title="Head of household"
              filingStatusLabel={headTable.label}
              brackets={headTable.brackets}
              highlightIncome={78000}
              note="Head of household covers single parents supporting dependents. The bracket thresholds are more generous than the single table."
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">What if Alex Marries and Has Two Kids?</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-2 text-sm">
              <p>
                Filing status changes everything. If Alex updates his W-4 to married filing jointly with two dependents,
                the withholding jumps to the married table plus expanded child tax credits. The bi-weekly taxable amount
                drops because the standard deduction doubles to $30,000 per year. Sarah needs your simulator to switch
                tables instantly when employees update their forms.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Standard deduction doubles · {marriedTable.standardDeduction.toLocaleString()}</li>
                <li>Child credits reduce federal withholding even before refund time.</li>
                <li>Spreadsheet must store filing status so formulas know which table to query.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Checklist Before Running the Calculator</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-2 text-sm">
              <ol className="list-decimal list-inside space-y-1">
                <li>Start with gross pay (hours × rate) for the pay period.</li>
                <li>Subtract pre-tax benefits if they exist (health premiums, retirement contributions).</li>
                <li>Apply Social Security (6.2%) and Medicare (1.45%) to the taxable wages.</li>
                <li>Use the correct IRS tax table row to find federal withholding.</li>
                <li>Apply the state rate or table.</li>
                <li>The remainder is net pay. Add employer-side FICA on top for Sarah's cash planning.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-slate-900">Lock In the Vocabulary</CardTitle>
              <p className="text-sm text-slate-700">Complete each sentence before moving on to the guided calculator.</p>
            </CardHeader>
            <CardContent>
              <FillInTheBlank
                sentences={payrollSentences}
                title="Payroll Deduction Language"
                description="These are the key terms you will type into Excel cell labels in the next phase."
                showWordList={true}
                showHints={true}
              />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson02Data} unit={unit05Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
