import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FileText } from "lucide-react"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const auditQuestions = [
  {
    id: "u04l05-audit-1",
    question: "After Remove Duplicates, your row count went from 500 to 485. What does this tell you about your data quality?",
    answers: [
      "15 duplicate transactions were inflating your totals",
      "The data was completely corrupted",
      "You should delete 15 more rows to be safe",
      "The original data only had 485 real transactions"
    ],
    explanation: "15 duplicates were removed. This means the original 500 included duplicate sales that would have inflated your totals if left in."
  },
  {
    id: "u04l05-audit-2",
    question: "You find 12 rows with blank category values. What's the best approach?",
    answers: [
      "Investigate source, fill if recoverable, flag as 'Unknown' if not",
      "Delete all 12 rows immediately",
      "Leave them blank and ignore them",
      "Fill all with the most common category"
    ],
    explanation: "Check if the original source has the info. If not recoverable, flag as 'Unknown' to preserve data while acknowledging missing info."
  },
  {
    id: "u04l05-audit-3",
    question: "An investor asks: 'How did you handle the data quality issues?' What documentation should you show?",
    answers: [
      "Before/after row counts, cleaning steps performed, any decisions about missing/blanks",
      "A screenshot of the messy original data",
      "The formulas you used",
      "The names of everyone who helped"
    ],
    explanation: "Show the audit trail: what you changed (before/after counts), what tools you used, and how you handled missing values."
  },
  {
    id: "u04l05-audit-4",
    question: "After cleaning, you try to calculate AVERAGE(Price) but get an error. What's likely wrong?",
    answers: [
      "Price column still contains text characters (like $ symbols)",
      "Your Excel is broken",
      "There are too many rows",
      "The numbers are too small"
    ],
    explanation: "If Find & Replace didn't catch all $ signs, or if prices were imported as text, Excel can't calculate. Check the column format."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">Phase 5: Audit and Explain</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Verify Your Work and Document the Process</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Check that cleaning worked. Then create a brief memo explaining what you did and why it matters.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Data Cleaning Audit Check"
            description="Test your understanding of data quality decisions and documentation requirements."
            questions={auditQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Artifact Task: Data Cleaning Memo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-2">
              <p className="font-medium">Write a 3-4 sentence memo to explain your cleaning work:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>What did you clean?</strong> (e.g., removed duplicates, trimmed spaces, fixed price format)</li>
                <li><strong>How many rows affected?</strong> (before/after counts)</li>
                <li><strong>What's ready for analysis now?</strong> (what the cleaned data can do)</li>
                <li><strong>Any remaining issues?</strong> (known limitations to flag)</li>
              </ul>
              <div className="bg-white p-3 rounded border mt-3 text-sm">
                <p className="font-medium">Example:</p>
                <p>"Removed 15 duplicate transactions (500→485 rows). Trimmed spaces from product names and removed $ symbols from prices. Data is now ready for statistical analysis. Note: 12 rows have unknown categories—flagged as 'Unknown'."</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Performance Standards</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Investor‑Ready:</strong> Clean data, documented audit trail, no calculation errors</li>
                <li><strong>Proficient:</strong> Mostly clean with minor issues noted</li>
                <li><strong>Developing:</strong> Missing documentation or obvious cleaning gaps</li>
              </ul>
              <p className="mt-2">Career link: Consultants always document data cleaning steps. It's how others verify your work.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
