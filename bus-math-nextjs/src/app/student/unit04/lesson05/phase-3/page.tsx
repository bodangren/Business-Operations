import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, CheckCircle, XCircle } from "lucide-react"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet"

const currentPhase = lesson05Phases[2]

const cleaningPracticeData: SpreadsheetData = [
  [
    { value: "Original", readOnly: true },
    { value: "Cleaned (Your Turn)", readOnly: false },
    { value: "Tool to Use", readOnly: true }
  ],
  [
    { value: "  Latte  ", readOnly: true },
    { value: "", readOnly: false },
    { value: "TRIM", readOnly: true }
  ],
  [
    { value: "$4.50", readOnly: true },
    { value: "", readOnly: false },
    { value: "Find/Replace $", readOnly: true }
  ],
  [
    { value: "2024-05-19", readOnly: true },
    { value: "", readOnly: false },
    { value: "Text to Columns", readOnly: true }
  ],
  [
    { value: "muffin", readOnly: true },
    { value: "", readOnly: false },
    { value: "PROPER", readOnly: true }
  ],
  [
    { value: "ESPRESSO", readOnly: true },
    { value: "", readOnly: false },
    { value: "PROPER", readOnly: true }
  ]
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">Phase 3: Safe Rehearsal</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Practice the Cleaning Logic</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Before cleaning real data, practice each step in this safe simulator. Get the patterns right first.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Step-by-Step Cleaning Practice
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-green-900">
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>TRIM</strong>: Removes leading/trailing spaces. Use on product names, category names.</li>
                <li><strong>Find & Replace</strong>: Remove $ symbols from prices. Replace with nothing.</li>
                <li><strong>Text to Columns</strong>: Convert text dates to real dates. Choose appropriate delimiter.</li>
                <li><strong>PROPER</strong>: Capitalize first letter of each word. "latte" → "Latte"</li>
                <li><strong>Remove Duplicates</strong>: Select all columns, use Data → Remove Duplicates.</li>
                <li><strong>Filters</strong>: Show rows meeting criteria, hide rest temporarily.</li>
              </ol>
              <div className="bg-white p-4 rounded border border-green-200 mt-4">
                <p className="font-semibold mb-1">Pro Tip</p>
                <p>Always make a copy of raw data before cleaning. Keep original as backup!</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practice: Clean These Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Type the cleaned result in the middle column. Try each cleaning operation.
              </p>
              <SpreadsheetWrapper initialData={cleaningPracticeData} className="bg-white p-2 rounded border" />
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Outlier Detection Preview</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3">
              <p>
                After cleaning, you'll flag outliers—values far from the typical range. Here's the logic:
              </p>
              <div className="bg-white p-3 rounded border">
                <p className="font-mono text-sm">
                  Z-Score = (Value - Mean) / Standard Deviation
                </p>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>|Z| &gt; 3</strong>: Likely an error—investigate</li>
                <li><strong>|Z| 2-3</strong>: Possible outlier—check context</li>
                <li><strong>|Z| &lt; 2</strong>: Normal variation</li>
              </ul>
              <p className="text-sm">
                <em>You'll practice this in phase 4 after cleaning real data.</em>
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Cleaning the wrong column</p>
                    <p className="text-sm">Check which column you're in before running any tool!</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Not selecting all columns for Remove Duplicates</p>
                    <p className="text-sm">Select every column or you'll miss partial duplicates</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Making a backup first</p>
                    <p className="text-sm">Always copy raw data before any cleaning operation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
