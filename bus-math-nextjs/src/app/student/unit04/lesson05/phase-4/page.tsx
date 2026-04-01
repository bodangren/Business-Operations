import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: Workbook Sprint</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Clean the Real Café Data</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download the raw POS data, apply each cleaning tool, and create your analysis-ready dataset.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Starting Point</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-2">
              <p>
                Download the raw café weekend sales data. This data has realistic problems:
              </p>
              <a className="underline font-semibold" href="/resources/unit04-pbl-cafe-weekend-ops-g1.csv" download>
                /resources/unit04-pbl-cafe-weekend-ops-g1.csv
              </a>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>Inconsistent spacing in product names</li>
                <li>Currency symbols in price column</li>
                <li>Some duplicate transactions</li>
                <li>Missing values in the category column</li>
                <li>Dates in mixed formats</li>
              </ul>
              <p className="text-sm mt-2"><strong>Goal:</strong> Produce a clean dataset ready for statistical analysis.</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Build Sequence</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-3">
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Open the CSV</strong> in Excel (or import if using Google Sheets)</li>
                <li><strong>Copy the raw sheet</strong> → Rename "Raw Data" and "Clean Data"</li>
                <li><strong>Clean in order</strong>:
                  <ul className="list-disc list-inside ml-6">
                    <li>Select Product column → Data → Text to Columns (delimited) if needed</li>
                    <li>Use Find & Replace: Find "$", Replace with nothing</li>
                    <li>Add a helper column for TRIMmed product names</li>
                    <li>Select all columns → Data → Remove Duplicates → Note the count</li>
                    <li>Filter and identify blank categories → Fill or flag</li>
                  </ul>
                </li>
                <li><strong>Calculate before/after row counts</strong> for your audit trail</li>
                <li><strong>Add documentation</strong> in a new sheet: what you cleaned, how many rows affected</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Reference: What a Clean Dataset Looks Like</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 text-sm space-y-2">
              <p>After cleaning, your data should have:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>No leading/trailing spaces</strong> in any text column</li>
                <li><strong>Prices as numbers</strong> (no $ symbols)</li>
                <li><strong>No duplicate rows</strong></li>
                <li><strong>Consistent date format</strong> (Excel date type, not text)</li>
                <li><strong>No blank categories</strong> (filled or marked as "Unknown")</li>
                <li><strong>Product names</strong> with proper capitalization (e.g., "Latte", not "latte" or "LATTE")</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Verification Checkpoints</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>After Remove Duplicates: Row count reduced (note the difference)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>All price values are numeric (no $ signs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>TRIM formula or cleaned values in product name column</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>No blank cells in Category column (filled or "Unknown")</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Documentation sheet created with cleaning summary</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">Definition of Done</CardTitle>
            </CardHeader>
            <CardContent className="text-red-900">
              <p className="font-medium">Your cleaned dataset is complete when:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>All text columns have consistent spacing (no "  Latte  ")</li>
                <li>Prices are numbers, not text with $ signs</li>
                <li>Duplicate rows removed (before/after counts documented)</li>
                <li>Category column has no blanks</li>
                <li>You can sort by any column without errors</li>
                <li>You can run basic calculations (SUM, AVERAGE) on numeric columns</li>
                <li>A documentation sheet explains what was cleaned</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
