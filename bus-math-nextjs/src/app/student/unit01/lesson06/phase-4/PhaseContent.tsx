import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Shield,
  Target
} from "lucide-react"
import { withBasePath } from "@/lib/paths"

export default function Phase4Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice — Build the Investor Summary
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Build Sarah's Investor-Facing Summary Layer
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Now it's your turn to build the summary sheet that turns a working ledger into an investor-ready document.
              You'll link key metrics, add visual status cues, and document the evidence chain.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Starting Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3 leading-relaxed">
              <p>
                Start with your completed Lesson 05 workbook (or use the checkpoint workbook below).
                It should have a working ledger, trial balance, and self-auditing formulas.
              </p>
              <a
                href={withBasePath("/resources/unit01-lesson05-checkpoint.xlsx")}
                download
                className="inline-flex items-center gap-2 font-semibold underline text-blue-700"
              >
                Download Checkpoint: unit01-lesson05-checkpoint.xlsx
              </a>
              <p>
                If you use your own workbook, verify that:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Debits and credits balance</li>
                <li>All four Error Checks controls show Pass</li>
                <li>The global debit-credit difference is 0</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Build Sequence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-4 leading-relaxed">
              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>
                  <strong>Complete Executive Summary</strong>: Open the existing Executive Summary sheet.
                  Add your name and the current date using =TEXT(TODAY(), "mm/dd/yyyy").
                </li>
                <li>
                  <strong>Link Key Metrics</strong>: Pull Total Debits, Total Credits, Difference, Revenue, Expenses, Net Income, and Cash Balance
                  from the Trial Balance sheet using cell references (e.g., ='Trial Balance'!B10).
                </li>
                <li>
                  <strong>Build Status Formulas</strong>: Use IF formulas to create plain-language status messages
                  (e.g., =IF(Difference=0, "Balanced", "Review Needed")).
                </li>
                <li>
                  <strong>Apply Conditional Formatting</strong>: Add green/red/yellow fill to status cells based on values.
                  Green for Pass, red for Review, and yellow for a warning.
                </li>
                <li>
                  <strong>Write Evidence Chain</strong>: State what each control checks, how the workbook calculates it, and where the data comes from.
                </li>
                <li>
                  <strong>Professional Polish</strong>: Apply consistent fonts, alignment, borders, and spacing.
                  Lock formula cells so users can't accidentally edit them.
                </li>
              </ol>
              <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 text-orange-900 flex gap-3">
                <Shield className="h-6 w-6 flex-shrink-0" />
                <p>
                  Quick test: intentionally break one transaction (change a debit amount).
                  If your Summary sheet shows "Review Needed" and turns red immediately, your status system is working.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Definition of Done
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Executive Summary is the first tab and has a clear title, author, and date.</li>
                <li>Key metrics are linked from Trial Balance (no hard-coded numbers).</li>
                <li>Status cells show plain-language messages with conditional formatting colors.</li>
                <li>Evidence chain section explains what the workbook checks and how.</li>
                <li>Professional formatting: consistent fonts, alignment, borders, and spacing.</li>
                <li>Formula cells are locked to prevent accidental edits.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Evidence Chain Template
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-3 leading-relaxed">
              <p>Use this template for your evidence chain section:</p>
              <div className="bg-white border border-amber-200 rounded p-3">
                <p className="font-semibold">What This Workbook Checks</p>
                <p className="text-sm mt-1">Debits equal credits for the recorded transaction set.</p>
                <p className="font-semibold mt-2">How It Checks It</p>
                <ul className="list-disc list-inside text-sm mt-1">
                  <li>Trial balance compares total debits and total credits</li>
                  <li>Entry Difference checks each transaction ID</li>
                  <li>Error Checks flags blank accounts and invalid amount rows</li>
                </ul>
                <p className="font-semibold mt-2">Data Source</p>
                <p className="text-sm mt-1">[Number] transactions from [start date] to [end date] for TechStart Solutions.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Stretch Yourself
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-3 leading-relaxed">
              <p>
                Ready for the next level? Add a "Quick Stats" section with:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Percentage of accounts with debit balances</li>
                <li>Largest single transaction amount</li>
                <li>Number of unique accounts used</li>
              </ul>
              <p className="mt-3">
                Bonus idea: add a small line chart showing monthly balance trends if you have historical data.
              </p>
            </CardContent>
          </Card>

        </section>
      </div>

    </div>
  )
}
