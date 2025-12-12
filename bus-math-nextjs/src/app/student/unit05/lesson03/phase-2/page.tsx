import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { TaxBracketTable } from "@/components/payroll/TaxBracketTable"
import { federalTaxTables2025 } from "@/data/payroll/federalTaxTables"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Columns3, ListChecks, Sheet } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[1] // Introduction phase
const marriedBrackets = federalTaxTables2025.married
const headBrackets = federalTaxTables2025.headOfHousehold

const introductionQuestions = [
  {
    id: "intro-1",
    question: "Which columns must your bracket table include so the lookup can return yearly tax?",
    answers: [
      "Lower bound, upper bound, base tax, marginal rate, and a description/reference",
      "Employee name and hire date",
      "Only the marginal rate",
      "The payroll register tab color"
    ],
    explanation: "Those columns let Excel know how much income is taxed at each rate and what base amount to add."
  },
  {
    id: "intro-2",
    question: "What is the Excel expression for a progressive row once the taxable income is inside the bracket?",
    answers: [
      "=BaseTax + (TaxableIncome - LowerBound) * MarginalRate",
      "=TaxableIncome * MarginalRate only",
      "=BaseTax - TaxableIncome",
      "=0"
    ],
    explanation: "You add the base tax (which covers all lower brackets) and then the marginal percentage of the remaining amount."
  },
  {
    id: "intro-3",
    question: "How do the tables from Lesson 2 feed into today's workbook?",
    answers: [
      "Each filing status gets its own bracket table sheet or named range with the same column order",
      "You delete them and start over",
      "You paste screenshots",
      "They only stay in the PDF"
    ],
    explanation: "Reusable named ranges mean your selector can point at any filing status without rewriting formulas."
  }
]

export default function Phase2Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900">Introduction: Blueprint for a Progressive Lookup</h2>
          <p>
            You already highlighted the IRS brackets yesterday. Now you will copy those rows into Excel so a single formula 
            can determine the tax for any taxable income. The trick is storing the bracket math in columns so Excel knows 
            where to stop and how much “base tax” to carry forward from previous brackets.
          </p>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Columns3 className="h-5 w-5" />
              Mandatory Columns Per Bracket
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2 text-sm text-slate-800">
            <div className="bg-slate-50 p-3 rounded border">
              <p className="font-semibold">A – Lower Bound</p>
              <p>Exact dollar where the bracket starts (e.g., $48,475). Use whole numbers for lookup precision.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded border">
              <p className="font-semibold">B – Upper Bound</p>
              <p>Last dollar taxed at this rate. Use `"and up"` (or blank) for the top bracket.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded border">
              <p className="font-semibold">C – Base Tax</p>
              <p>The IRS amount that already covers earlier brackets.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded border">
              <p className="font-semibold">D – Marginal Rate</p>
              <p>The percent applied to dollars above the lower bound.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Row-Level Formula Pattern
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-blue-900">
            <p>Once your taxable income lands in a bracket, the annual tax equals:</p>
            <div className="bg-white p-3 rounded border font-mono text-sm">
              =BaseTax + (TaxableIncome - LowerBound) * MarginalRate
            </div>
            <p className="text-sm">
              In Excel you might use names like <code>=C5 + (TaxableIncome - A5) * D5</code>. Remember to guard the formula 
              with <code>MAX(TaxableIncome - A5, 0)</code> so earlier rows stay at zero when the income never reaches them.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <TaxBracketTable
            title="Married Filing Jointly"
            filingStatusLabel={marriedBrackets.label}
            brackets={marriedBrackets.brackets}
            highlightIncome={90000}
            note="Each row already lists the base tax you should copy into column C."
          />
          <TaxBracketTable
            title="Head of Household"
            filingStatusLabel={headBrackets.label}
            brackets={headBrackets.brackets}
            highlightIncome={70000}
            note="Notice the column order never changes. Consistency keeps your lookup from breaking."
          />
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Sheet className="h-5 w-5" />
              Document Your Table Layout
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-green-900 text-sm">
            <p>Before you start typing, sketch the sheet layout:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Rows 2-9 → Federal brackets for each filing status.</li>
              <li>Row 12 → Summary cell that uses the lookup result to display yearly tax.</li>
              <li>Row 14 → Note that cites the IRS publication and tax year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <ListChecks className="h-5 w-5" />
              Why This Structure Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 text-sm space-y-1">
            <p>Investors expect you to show:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Evidence that you understand how progressive taxes compound.</li>
              <li>Clear traceability: they can see which row produced the tax.</li>
              <li>Consistency across filing statuses so hiring decisions are easier.</li>
            </ul>
          </CardContent>
        </Card>

        <ComprehensionCheck
          title="Progressive Table Foundations"
          description="Answer these before opening Excel."
          questions={introductionQuestions}
          showExplanations={true}
        />
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}
