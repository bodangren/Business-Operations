import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { BookOpen, CheckSquare, Palette, ListChecks } from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[1]

const vocab = [
  { id: '1', text: 'Create a dedicated {blank} sheet that pulls key metrics from other tabs', answer: 'Summary', hint: 'The first sheet investors should see' },
  { id: '2', text: 'Use {blank} formatting to make important numbers stand out and guide the eye', answer: 'professional', hint: 'Consistent fonts, colors, alignment' },
  { id: '3', text: 'Apply {blank} (green/red) to show balance status at a glance', answer: 'conditional formatting', hint: 'Automatic color changes based on values' },
  { id: '4', text: 'Write {blank} text in status cells so anyone understands what colors mean', answer: 'plain language', hint: '"Balanced" instead of "SUM=0"' },
  { id: '5', text: 'Include an {blank} section listing what the workbook proves and validates', answer: 'evidence chain', hint: 'Link back to transactions, checks, totals' },
  { id: '6', text: 'Protect the Summary sheet structure by {blank} the display cells so users see values only', answer: 'locking', hint: 'Prevent accidental formula deletion' },
]

export default function Unit01Lesson06Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction — Summary Layer Design
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Professional Formatting, Visual Cues, and Evidence Documentation
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              An investor-facing summary layer is the control panel for your ledger. It pulls
              the most important metrics, shows status with colors, and explains in plain language
              what the workbook proves.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Summary Layer Components
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-900 space-y-3">
              <p className="font-semibold">A professional summary includes these blocks:</p>
              <div className="space-y-2">
                <div className="bg-white border border-blue-200 rounded p-3">
                  <p className="font-semibold text-blue-800">1. Key Metrics Section</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Debits Total (linked from Trial Balance)</li>
                    <li>Credits Total (linked from Trial Balance)</li>
                    <li>Difference (Debits - Credits, should be 0)</li>
                    <li>Account Count (how many accounts in ledger)</li>
                    <li>Transaction Count (how many entries posted)</li>
                  </ul>
                </div>
                <div className="bg-white border border-blue-200 rounded p-3">
                  <p className="font-semibold text-blue-800">2. Status Indicators</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Balance Status: "Balanced" or "Review Needed"</li>
                    <li>Check Column Status: count of red cells</li>
                    <li>Error Flags: count of validation failures</li>
                    <li>Visual cues: green for pass, red for issue, yellow for warning</li>
                  </ul>
                </div>
                <div className="bg-white border border-blue-200 rounded p-3">
                  <p className="font-semibold text-blue-800">3. Evidence Chain</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>What the workbook proves: "Debits equal credits"</li>
                    <li>Validation methods: "Trial balance, check column, error flags"</li>
                    <li>Data sources: "50 transactions from Oct 1-15, 2026"</li>
                    <li>Last updated: date or "Current session"</li>
                  </ul>
                </div>
                <div className="bg-white border border-blue-200 rounded p-3">
                  <p className="font-semibold text-blue-800">4. Plain Language Notes</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Executive summary: one sentence explaining status</li>
                    <li>Action items: what needs to be done if issues exist</li>
                    <li>Contact info: who to ask about ledger questions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Professional Formatting Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-purple-900 space-y-2">
              <p className="font-semibold">Apply these formatting standards:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Headers:</strong> Bold, larger font, consistent color across all sheets</li>
                <li><strong>Labels:</strong> Aligned left, consistent width, clear naming</li>
                <li><strong>Values:</strong> Aligned right for numbers, use accounting format</li>
                <li><strong>Status:</strong> Center-aligned, colored backgrounds, bold text</li>
                <li><strong>Sections:</strong> Clear visual separation (borders, spacing)</li>
                <li><strong>Consistency:</strong> Same fonts, colors, and styles throughout workbook</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                Conditional Formatting Patterns
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-900 space-y-3">
              <p className="font-semibold">Use these color conventions for status indicators:</p>
              <div className="space-y-2">
                <div className="bg-white border border-green-300 rounded p-3 flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="font-semibold text-green-800">Green (Pass)</p>
                    <p className="text-green-700">Balance = 0, Check column = 0, No validation errors</p>
                  </div>
                </div>
                <div className="bg-white border border-red-300 rounded p-3 flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="font-semibold text-red-800">Red (Issue)</p>
                    <p className="text-red-700">Balance ≠ 0, Check column errors, Validation failures</p>
                  </div>
                </div>
                <div className="bg-white border border-yellow-300 rounded p-3 flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-0.5"></div>
                  <div>
                    <p className="font-semibold text-yellow-800">Yellow (Warning)</p>
                    <p className="text-yellow-700">Near threshold, stale data, needs review</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-amber-200 rounded p-3 mt-3">
                <p className="font-semibold">Common Formula Patterns:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><code>=IF(Balance=0, "Balanced", "Review Needed")</code></li>
                  <li><code>=IF(CountRed&gt;0, "Errors Found", "All Clear")</code></li>
                  <li><code>=TEXT(TODAY(), "mm/dd/yyyy")</code> for date display</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <ListChecks className="h-5 w-5" />
                Common Failure Mode
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-800 space-y-2">
              <p className="font-semibold text-red-800">What breaks investor trust:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Color-coded status cells with no text explaining what colors mean</li>
                <li>Raw formulas exposed instead of clean values</li>
                <li>Inconsistent formatting across the summary sheet</li>
                <li>Hidden errors masked by generic "All Good" messages</li>
                <li>Missing date or version information</li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank
            sentences={vocab}
            title="Vocabulary: Summary Layer Components"
            description="Reinforce the key terms for building professional investor summaries."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>
      </main>

      <PhaseFooter
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
