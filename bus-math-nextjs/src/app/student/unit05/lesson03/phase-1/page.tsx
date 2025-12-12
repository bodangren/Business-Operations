import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Calculator, Layers3, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { TaxBracketTable } from "@/components/payroll/TaxBracketTable"
import { federalTaxTables2025 } from "@/data/payroll/federalTaxTables"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[0] // Hook phase
const singleBrackets = federalTaxTables2025.single

const hookQuestions = [
  {
    id: "hook-1",
    question: "Why can't Sarah just multiply Alex's taxable income by one rate?",
    answers: [
      "Because the U.S. income tax is progressive and uses multiple brackets",
      "Because Excel can't multiply",
      "Because payroll systems always ignore deductions",
      "Because single employees pay different tax each pay period"
    ],
    explanation: "Each chunk of income is taxed at a different rate, so Sarah needs the bracket ranges to know the correct formula."
  },
  {
    id: "hook-2",
    question: "What information must be stored in each bracket so a lookup formula can calculate annual tax?",
    answers: [
      "Minimum income for the bracket, maximum income (or null), base tax, and the marginal rate",
      "Only the tax rate percentage",
      "The employee's address",
      "The employer's withholding ID"
    ],
    explanation: "With those four values Sarah can add the base tax to the marginal tax on the amount above the lower bound."
  },
  {
    id: "hook-3",
    question: "How does building a bracket table first speed up the rest of the payroll calculator?",
    answers: [
      "Any taxable income can reuse the same lookup logic instead of rewriting formulas",
      "It removes the need for deductions",
      "It automatically deposits paychecks",
      "It replaces budgeting entirely"
    ],
    explanation: "Once the table exists, Sarah only needs to change the taxable income input and the lookup handles the rest."
  }
]

export default function Phase1Page() {
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
          <h2 className="text-2xl font-bold text-blue-900">Hook: Sarah Needs a Bracket Brain</h2>
          <p>
            Sarah has ten minutes before a follow-up call with Alex. The investor on the line will ask, “What is the yearly
            federal income tax if Alex's taxable income lands at $65,000?” Lesson 2 gave Sarah the IRS tables, but scrolling 
            through PDFs takes too long. She needs a mini-calculator that instantly identifies the correct bracket and applies
            the progressive formula.
          </p>
        </div>

        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            Lesson 2 already proved the brackets exist. Today's single-period sprint extracts those brackets into a structured 
            table so Sarah can look up the annual tax automatically.
          </AlertDescription>
        </Alert>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Layers3 className="h-5 w-5" />
              What We Build in One Period
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-blue-900">
            <ul className="list-disc list-inside space-y-1">
              <li>Columns for <strong>Lower Bound</strong>, <strong>Upper Bound</strong>, <strong>Base Tax</strong>, and <strong>Marginal Rate</strong>.</li>
              <li>A formula that returns <code>BaseTax + (TaxableIncome − LowerBound) × Rate</code>.</li>
              <li>A selector that chooses the correct filing status table (reuse the Lesson 2 datasets).</li>
              <li>A single output cell that reports yearly tax so Sarah can divide it back down if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <div>
          <p className="text-sm text-slate-600 mb-2">
            This is the table you are recreating inside Excel. Notice how each row already includes the base tax and the “amount over” description.
          </p>
          <TaxBracketTable
            title="IRS 2025 – Single"
            filingStatusLabel={singleBrackets.label}
            brackets={singleBrackets.brackets}
            highlightIncome={65000}
            note="The highlighted row is the one Sarah needs for Alex today."
          />
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn & Talk (3 minutes)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-green-900">
            <p>Discuss with your table group:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Where will you store the standard deduction you pulled yesterday?</li>
              <li>How will you keep the column headers identical for each filing status?</li>
              <li>What cell will you highlight when explaining the formula to a client?</li>
            </ul>
          </CardContent>
        </Card>

        <ComprehensionCheck
          title="Do You Understand the Progressive Goal?"
          description="Confirm the key concepts before moving into build mode."
          questions={hookQuestions}
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
