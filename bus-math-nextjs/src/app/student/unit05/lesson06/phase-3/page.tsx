import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Calculator, Palette } from "lucide-react"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

const formulas = [
  {
    title: "Taxable Income Formula",
    code: "=LET(g,GrossPay, pre,PreTaxBenefits, std,StandardDeduction/26, MAX(0, g - pre - std))",
    note: "Divide the annual standard deduction by the number of pay periods. Use MAX to prevent negative taxable income."
  },
  {
    title: "FIT (Bi-weekly Table)",
    code: "=LET(inc,TaxableIncome, row,XMATCH(inc, TableFIT[UpperBound],1), base,INDEX(TableFIT[BaseTax],row), rate,INDEX(TableFIT[Rate],row), lower,INDEX(TableFIT[LowerBound],row), base + (inc - lower)*rate)",
    note: "The table must match the employee’s filing status. Consider naming each table (FIT_Single, FIT_Married) and switching with XLOOKUP on filing status."
  },
  {
    title: "FICA",
    code: "=ROUND(TaxableIncome*0.062,2)\n=ROUND(TaxableIncome*0.0145,2)",
    note: "Social Security (6.2%) stops after $172,800 annual wages. Medicare (1.45%) never stops at this level."
  },
  {
    title: "State Tax",
    code: "=ROUND(TaxableIncome * StateRate, 2)",
    note: "Use the State column to pull the correct starter rate."
  },
  {
    title: "Net Pay",
    code: "=GrossPay - PreTaxBenefits - FIT - SocialSecurity - Medicare - StateTax - AdditionalWithholding",
    note: "Display net pay prominently on the pay stub alongside year-to-date totals."
  }
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100">
      <PhaseHeader lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-4 text-center">
          <Badge className="bg-indigo-100 text-indigo-900 text-lg px-4 py-2">
            🧪 Phase 3: Guided Practice
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Build the Tax Math & Pay Stub Template</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            Follow these cards with your teacher. Pause to implement each step in Excel, then resume once your numbers match.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Step 1 — Link Inputs to TaxMath</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Create <span className="font-mono">SelectedID</span> cell with data validation (list of IDs).</li>
                <li>Use <span className="font-mono">XLOOKUP(SelectedID, tblPayrollInputs[EmployeeID], tblPayrollInputs[EmployeeName])</span> to pull info into TaxMath.</li>
                <li>Store PayPeriod label (Bi-weekly #) so it prints on the stub.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <Code className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Step 2 — Implement Formulas</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              {formulas.map((item) => (
                <div key={item.title} className="space-y-1">
                  <p className="font-semibold">{item.title}</p>
                  <div className="bg-slate-100 border rounded p-2 font-mono text-xs overflow-x-auto">{item.code}</div>
                  <p>{item.note}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Step 3 — Design the Pay Stub</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Use a two-column layout: left for employer/employee details, right for earnings and deductions.</li>
                <li>Add section headers (EARNINGS, TAXES, SUMMARY) with subtle background fills (e.g., <span className="font-mono">#FDF2F8</span>).</li>
                <li>Insert shapes/lines to mimic professional stubs. Include Net Pay in a bold box.</li>
                <li>Use <span className="font-mono">TEXT</span> and <span className="font-mono">FORMAT</span> functions for dates ("Mar 14, 2025"), currency, and percentage formats.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Teacher Checkpoints</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>SelectedID drives every field on the stub.</li>
                <li>FIT changes when filing status changes.</li>
                <li>Changing State updates the state tax line.</li>
                <li>Net Pay equals Gross – deductions (verify with calculator).</li>
              </ul>
              <p>Show your teacher when all checkpoints clear before moving to independent practice.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
