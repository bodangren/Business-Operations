import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabSentences = [
  {
    id: "1",
    text: "Use {blank} to remove leading and trailing spaces from product names like '  Latte  '.",
    answer: "TRIM",
    hint: "Text function that cleans spacing"
  },
  {
    id: "2",
    text: "To split a column of full names into separate First and Last columns, use {blank}.",
    answer: "Text to Columns",
    hint: "Located in the Data tab"
  },
  {
    id: "3",
    text: "Before analyzing, run {blank} to ensure no transaction is counted twice.",
    answer: "Remove Duplicates",
    hint: "Data tab tool, keeps first instance"
  },
  {
    id: "4",
    text: "To find values far from the average, calculate the {blank} (how many standard deviations from mean).",
    answer: "z-score",
    hint: "Measures distance from typical"
  },
  {
    id: "5",
    text: "Use {blank} to show only rows where the product category is 'Drink' and units sold > 50.",
    answer: "Filters",
    hint: "Hide what you don't need"
  },
  {
    id: "6",
    text: "A data {blank} documents what you cleaned, why, and how many rows were affected.",
    answer: "audit trail",
    hint: "Proof for investors"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Phase 2: Tool Anatomy</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Data Cleaning Tools and Patterns</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the Excel tools that transform raw POS data into analysis-ready format.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">The Data Cleaning Workflow</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-3">
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Inspect</strong>: Open the raw file, check for obvious issues, count rows</li>
                  <li><strong>Clean Text</strong>: TRIM spaces, PROPER case for consistency</li>
                  <li><strong>Fix Formats</strong>: Text-to-Columns for dates, remove currency symbols</li>
                  <li><strong>Remove Duplicates</strong>: Delete repeated transactions</li>
                  <li><strong>Handle Missing</strong>: Fill, delete, or flag empty cells</li>
                  <li><strong>Validate</strong>: Spot-check calculations, flag outliers</li>
                  <li><strong>Document</strong>: Record what you changed and why</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">Tool Locations in Excel</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-purple-900 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold">Home Tab → Editing</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Find & Select → Go To Special</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold">Data Tab</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Text to Columns (split columns)</li>
                      <li>Remove Duplicates</li>
                      <li>Filter (show/hide rows)</li>
                      <li>Sort (A-Z, filters)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold">Formulas Tab</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>TRIM(text)</li>
                      <li>PROPER(text)</li>
                      <li>CLEAN(text)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-semibold">Analysis Tools</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Data Analysis → Descriptive Statistics</li>
                      <li>Conditional Formatting → Highlight Cells</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl">Common Failure Modes</CardTitle>
              </CardHeader>
              <CardContent className="text-orange-900 space-y-3">
                <div className="bg-white p-3 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900">❌ Skipping the Documentation</h4>
                  <p className="text-sm">Always record what you changed. Investors ask "what did you do to this data?"</p>
                </div>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900">❌ Cleaning in the Wrong Order</h4>
                  <p className="text-sm">Dates first, then duplicates, then text cleanup. Wrong order wastes time.</p>
                </div>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900">❌ Not Checking After Cleaning</h4>
                  <p className="text-sm">Always spot-check totals before and after. A 10% row reduction matters.</p>
                </div>
              </CardContent>
            </Card>

            <FillInTheBlank
              sentences={vocabSentences}
              title="Data Cleaning Vocabulary"
              description="Complete each sentence with the correct term."
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
            />
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}