import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[1]

const vocabSentences = [
  {
    id: "taxable",
    text: 'Taxable income = Gross Pay – Pre-Tax Benefits – {blank} (converted to the pay-period amount).',
    answer: 'standard deduction',
    hint: 'IRS allowance',
    category: 'Formula'
  },
  {
    id: "fit",
    text: 'FIT uses the IRS table that matches the employee\'s {blank} and pay period.',
    answer: 'filing status',
    hint: 'Single, Married, Head of Household',
    category: 'Vocabulary'
  },
  {
    id: "ss",
    text: 'Social Security withholding is always {blank}% of taxable wages until the annual wage base.',
    answer: '6.2',
    hint: 'FICA poster rate',
    category: 'Fact'
  },
  {
    id: "medicare",
    text: 'Medicare withholding is {blank}% of every taxable dollar, with an extra 0.9% for high earners.',
    answer: '1.45',
    hint: 'No cap at normal wages',
    category: 'Fact'
  },
  {
    id: "state",
    text: 'State withholding in this lesson uses a simplified {blank}% starter rate for California until we build the full table.',
    answer: '4.5',
    alternativeAnswers: ['4.5', '4.50', '4.5%'],
    hint: 'Matches Harbor Market story',
    category: 'Concept'
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-100">
      <PhaseHeader lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-4 text-center">
          <Badge className="bg-cyan-100 text-cyan-900 text-lg px-4 py-2">
            🧱 Phase 2: Blueprint
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Blueprint: Inputs → Taxable Income → Pay Stub</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            This phase maps the workbook before you open Excel. Download the dataset, label the sheets, and understand the
            math every line on the pay stub represents.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Sheet 1 — PayrollInputs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Import <a className="text-emerald-700 underline" href="/resources/unit05-lesson06-paystub-practice.csv" download>unit05-lesson06-paystub-practice.csv</a>.</li>
                <li>Columns: EmployeeID, EmployeeName, FilingStatus, StandardDeduction, GrossPay, PreTaxBenefits, AdditionalWithholding, State, StateRate.</li>
                <li>Format as <span className="font-mono">tblPayrollInputs</span> so the selector can find people by ID.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Sheet 2 — TaxMath</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>TaxableIncome</strong> = Gross – PreTaxBenefits – (StandardDeduction ÷ PayPeriodsPerYear).</li>
                <li><strong>FIT</strong> = Use IRS table (bi-weekly) for the filing status. Provide columns: LowerBound, UpperBound, BaseTax, Rate over Lower.</li>
                <li><strong>Social Security</strong> = TaxableIncome × 6.2%. <strong>Medicare</strong> = TaxableIncome × 1.45%.</li>
                <li><strong>StateTax</strong> = TaxableIncome × StateRate (starter rate for CA, 0 for WA, etc.).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Sheet 3 — PayStub</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Drop in a clean layout: left column for employee info, right column for earnings/deductions summary.</li>
                <li>Add an Employee ID dropdown (Data Validation → list from <span className="font-mono">tblPayrollInputs[EmployeeID]</span>).</li>
                <li>Every field uses XLOOKUP to pull values from TaxMath or PayrollInputs, so the stub updates instantly.</li>
                <li>Use shapes, borders, and subtle color blocks for a printable, investor-ready finish.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900">Non-Negotiables</CardTitle>
            </CardHeader>
            <CardContent className="text-emerald-900 text-sm space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>The pay stub must show: Pay Period, Gross Pay, Taxable Income, FIT, Social Security, Medicare, State Tax, Additional Withholding, Net Pay.</li>
                <li>Include memo lines for YTD totals (you can copy formulas down as you add more pay periods later).</li>
                <li>Add a footer with Sarah’s business name, EIN placeholder, and a thank-you note for professionalism.</li>
              </ul>
            </CardContent>
          </Card>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertDescription className="text-amber-900 text-sm">
              <strong>Planning Tip:</strong> Decide how many pay periods per year your stub represents (bi-weekly = 26). You will divide the standard deduction by that number when calculating taxable income.
            </AlertDescription>
          </Alert>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Lock in the Vocabulary</CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank
                sentences={vocabSentences}
                title="Pay Stub Vocabulary"
                description="Complete each sentence before opening Excel."
                randomizeWordOrder={false}
              />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
