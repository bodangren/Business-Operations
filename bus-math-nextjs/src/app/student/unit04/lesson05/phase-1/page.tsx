import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Users, AlertTriangle } from "lucide-react"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "u04l05-hook-1",
    question: "Sarah receives the café's raw weekend sales data. The dates are formatted as text, prices include currency symbols, and some rows are duplicated. What do you clean first?",
    answers: [
      "Check for duplicates first to avoid inflated totals",
      "Convert dates to proper date format so time-based analysis works",
      "Delete all rows with currency symbols in prices",
      "Sort by total revenue and delete the bottom 50%"
    ],
    explanation: "Dates as text break time-based analysis. Convert dates first, then handle duplicates, then clean prices. Order matters."
  },
  {
    id: "u04l05-hook-2",
    question: "An investor asks: 'How do you know this data is reliable?' What data cleaning evidence should you show?",
    answers: [
      "Before/after comparison showing row count before and after Remove Duplicates",
      "A screenshot of the original messy data",
      "A list of all the formulas you used",
      "The names of everyone who helped clean the data"
    ],
    explanation: "Show the before/after row counts from Remove Duplicates. Document your data decisions so investors trust the analysis."
  },
  {
    id: "u04l05-hook-3",
    question: "The POS system exported product names with extra spaces: '  Latte  ' vs 'Latte'. Why does this matter for analysis?",
    answers: [
      "TRIM removes leading/trailing spaces so lookup formulas work correctly",
      "Extra spaces make the spreadsheet look unprofessional",
      "Spaces increase file size significantly",
      "Excel automatically removes extra spaces"
    ],
    explanation: "TRIM fixes inconsistent product names so VLOOKUP/XLOOKUP finds matches. 'Latte' and '  Latte  ' are different to Excel."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">Phase 1: Hook</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Why Clean Data Matters to Investors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Before you can forecast, you need data you can trust. Investors lose confidence when analysts present messy, unverified data.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900 text-2xl">The Café Data Problem</CardTitle>
              </CardHeader>
              <CardContent className="text-red-900 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah's café client needs a weekend forecast to plan inventory and staffing. The POS system exports
                  data that looks ready—but has hidden problems that will wreck any analysis.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">What's Wrong</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Dates stored as text (can't do time analysis)</li>
                      <li>Prices include $ signs (break formulas)</li>
                      <li>Duplicate transaction rows</li>
                      <li>Product names with inconsistent spacing</li>
                      <li>Missing values where system timed out</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why Investors Care</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 text-green-900">
                      <li>Dirty data → unreliable forecasts</li>
                      <li>Unverified data → audit failures</li>
                      <li>Documented cleaning → trust and credibility</li>
                      <li>Clean pipeline → reproducible analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  The Investor Question
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-900">
                <p className="font-medium text-lg mb-2">"How do you know this data is accurate enough to base decisions on?"</p>
                <p>
                  Your answer shapes whether investors trust your forecast. Show documented cleaning steps, before/after metrics,
                  and data quality flags. If you can't prove the data is clean, they won't trust your model.
                </p>
              </CardContent>
            </Card>

            <ComprehensionCheck
              title="Diagnostic: Can You Spot the Cleaning Priority?"
              description="Which data problem matters most and in what order? Think like an analyst preparing for investor review."
              questions={hookQuestions}
              showExplanations={true}
              allowRetry={true}
            />

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Turn and Talk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-2">Discussion Prompt (3 minutes):</p>
                <p className="text-blue-800 mb-2">
                  What would you do if you had 30 minutes to clean this data before a 2pm investor meeting?
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Which cleaning steps give you the most confidence quickly?</li>
                  <li>What would you skip if time runs out?</li>
                  <li>What would you tell the investor about your data limitations?</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}