import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  {
    id: "u07l05-assess-1",
    question: "Which setup best supports growth without broken formulas?",
    answers: [
      "Tables with structured references (e.g., Sales[Qty])",
      "Fixed ranges like A2:A100 for speed",
      "Copying formula blocks per month",
      "Hiding extra columns to protect logic"
    ],
    explanation: "Structured references grow with data automatically and remain readable."
  },
  {
    id: "u07l05-assess-2",
    question: "When prices rise, which statement is true?",
    answers: [
      "LIFO increases COGS and lowers profit this period",
      "FIFO increases COGS and lowers profit this period",
      "Weighted Average always equals FIFO",
      "All methods produce the same COGS"
    ],
    explanation: "LIFO uses newer, higher costs in rising markets, increasing COGS."
  },
  {
    id: "u07l05-assess-3",
    question: "A model must switch methods with one control. Which design is best?",
    answers: [
      "Data Validation dropdown bound to formulas",
      "Separate files with pasted values",
      "Manual find‑and‑replace of method names",
      "Hidden sheet with handwritten notes"
    ],
    explanation: "A single control cell prevents drift and ensures consistency."
  },
  {
    id: "u07l05-assess-4",
    question: "Which validation rule prevents the most risk?",
    answers: [
      "Block negative or zero UnitCost on Purchases",
      "Auto‑color headers blue",
      "Freeze panes on top rows",
      "Left‑align all numeric columns"
    ],
    explanation: "Invalid costs corrupt COGS; block them at entry."
  },
  {
    id: "u07l05-assess-5",
    question: "Best way to avoid #N/A errors on dashboards?",
    answers: [
      "Wrap lookups with IFNA/IFERROR and provide clear messages",
      "Convert errors to 0 silently",
      "Delete rows with #N/A",
      "Hide columns that show errors"
    ],
    explanation: "Explicit error handling preserves trust without hiding problems."
  },
  {
    id: "u07l05-assess-6",
    question: "Weighted Average cost per unit is computed as:",
    answers: [
      "Running Total Cost / Running Total Units",
      "Total Sales / Total Units",
      "Last Purchase Cost only",
      "COGS / Ending Inventory"
    ],
    explanation: "Average cost is total cost divided by units on hand at each step."
  },
  {
    id: "u07l05-assess-7",
    question: "Returns recorded as negative sales quantities should:",
    answers: [
      "Increase on‑hand units and adjust layers appropriately",
      "Be ignored in COGS calculations",
      "Reduce purchase quantities",
      "Convert to positive sales automatically"
    ],
    explanation: "Returns add back inventory and may restore prior layers depending on method."
  },
  {
    id: "u07l05-assess-8",
    question: "Stale dates (far outside the period) should be handled by:",
    answers: [
      "Validation/flagging with explanatory notes",
      "Deleting the offending rows",
      "Formatting the date column",
      "Sorting descending only"
    ],
    explanation: "Flag and resolve; deleting data hides issues and breaks auditability."
  },
  {
    id: "u07l05-assess-9",
    question: "Investor‑ready communication means:",
    answers: [
      "Clear labels, method notes, and rationale near results",
      "Only show totals without context",
      "Use as many sheets as possible",
      "Hide validation to look clean"
    ],
    explanation: "Explain assumptions so stakeholders can trust and question results."
  },
  {
    id: "u07l05-assess-10",
    question: "Business impact: Choosing LIFO this quarter likely",
    answers: [
      "Lowers taxes now and helps cash flow",
      "Raises taxes now and helps cash flow",
      "Has no effect on taxes",
      "Always increases reported profit"
    ],
    explanation: "Higher COGS lowers taxable income, improving near‑term cash flow."
  }
]

export default function Unit07Lesson05Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">📊 Phase 5: Assessment</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Inventory Automation: Mastery Assessment</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Show technical skill and business judgment. Aim for investor‑ready standards: reliable, auditable, and well explained.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Professional Mastery Check"
            description="Select the best practices and explain business impact."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Performance Standard: Investor‑Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <ul className="list-disc list-inside space-y-1">
                <li>Correct COGS/Ending Inventory across FIFO/LIFO/Weighted Avg</li>
                <li>Validation prevents bad inputs; errors handled with IFNA/IFERROR</li>
                <li>Tables and documentation support quick review and audit</li>
                <li>Clear explanation of tax and cash‑flow impacts</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

