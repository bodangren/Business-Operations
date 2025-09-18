'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import {
  Beaker,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Gauge,
  Target
} from "lucide-react"

const currentPhase = lesson07Phases[3]

const independentQuestions = [
  {
    id: "trial-balance",
    question: "What does it mean if SUM(Debit) - SUM(Credit) returns a non-zero number after you import the dataset?",
    answers: [
      "Your ledger is out of balance and you should investigate which rows caused the difference.",
      "Excel miscalculated, so you should close the workbook and reopen it.",
      "It proves the ledger is clean and you can publish the report immediately.",
      "You must delete all rows that contain negative numbers." 
    ],
    explanation: "A non-zero difference signals the ledger is out of balance. The next step is to trace the rows that created the gap."
  },
  {
    id: "stale-date",
    question: "How should the Stale? column respond when TODAY() - Date is greater than 90?",
    answers: [
      "Show a warning like 'Stale' so Sarah knows to follow up on old invoices.",
      "Display a dash because the age of data never matters in a ledger.",
      "Automatically delete the row so the ledger balances again.",
      "Convert the date to text so it cannot change." 
    ],
    explanation: "Flagging stale transactions helps Sarah spot invoices that need attention without deleting historical records."
  },
  {
    id: "audit-note",
    question: "Which detail makes an audit note investor-ready?",
    answers: [
      "Stating the number of errors found and the next corrective action.",
      "Listing every formula used in the workbook alphabetically.",
      "Sharing how many minutes the build required.",
      "Thanking the reader for their patience." 
    ],
    explanation: "Investors need signal: the count of issues and the recommended next move."
  }
]

const reflectionPrompts = [
  {
    id: "courage-ledger",
    category: "courage" as const,
    prompt: "Where did you push yourself outside your comfort zone while chasing a ledger error today?",
    placeholder: "Describe the error, the Excel feature you tried, and how it felt to keep digging..."
  },
  {
    id: "adaptability-checks",
    category: "adaptability" as const,
    prompt: "What is one QA flag you could reuse on the next project, and how would you adapt it?",
    placeholder: "Explain which rule worked here and what you would tweak for a different dataset..."
  },
  {
    id: "persistence-audit",
    category: "persistence" as const,
    prompt: "How did you refine your audit sentence until it was clear and data-driven?",
    placeholder: "Share the edits you made and what finally made the sentence feel ready for an investor..."
  }
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader
        unit={unit01Data}
        lesson={lesson07Data}
        phase={currentPhase}
        phases={lesson07Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice — QA Stress Test
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build a Ledger that Spots Its Own Problems</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sarah’s investors want proof that her ledger can catch mistakes before they reach a boardroom. Use this
              practice time to work through the QA ladder: start with trial balance basics, then layer in pro checks and
              stretch challenges as you gain confidence.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Download className="h-5 w-5" /> Practice Dataset
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3 leading-relaxed">
              <p>
                Import <strong>unit01-ledger-lesson07-practice.csv</strong> as a Table named <strong>Transactions</strong>.
                The mix of clean entries and messy edge cases is intentional—you are here to catch them.
              </p>
              <a
                href="/resources/unit01-ledger-lesson07-practice.csv"
                download
                className="inline-flex items-center gap-2 font-semibold underline text-blue-700"
              >
                Download: unit01-ledger-lesson07-practice.csv
              </a>
              <div className="bg-white border border-blue-200 rounded-lg p-3 text-blue-900 text-sm leading-relaxed">
                <p className="font-semibold">Edge cases to test:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Duplicate scenario names</li>
                  <li>Stale <code>AsOfDate</code> values (&gt; 90 days old)</li>
                  <li>Negative liabilities and zero-dollar rows</li>
                  <li>Ledger entries that unbalance debits and credits</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <ClipboardList className="h-5 w-5" /> Independent Build Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-4 leading-relaxed">
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Target className="w-5 h-5" /> Tier 1 — Core (everyone completes)
                  </h3>
                  <ol className="list-decimal list-inside text-base text-gray-800 space-y-1">
                    <li>Confirm <code>=SUM(Transactions[Debit])</code> equals <code>=SUM(Transactions[Credit])</code>. Highlight the variance if it is not zero.</li>
                    <li>Create an <strong>ErrorNote</strong> column that flags invalid accounts or negative liabilities with plain-language messages.</li>
                    <li>Document two issues you found in a comments cell (what went wrong, how to fix it).</li>
                  </ol>
                </div>
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                    <Gauge className="w-5 h-5" /> Tier 2 — Pro (add after Tier 1 is stable)
                  </h3>
                  <ol className="list-decimal list-inside text-base text-blue-900 space-y-1">
                    <li>Wrap lookups with <code>IFNA</code> so typos return friendly prompts instead of error codes.</li>
                    <li>Add a <strong>Stale?</strong> column: <code>=IF(TODAY()-[@Date]&gt;90,"Stale","OK")</code>.</li>
                    <li>Use <code>ROUND(total,2)</code> or <code>MROUND</code> to present dollars with clean cents.</li>
                  </ol>
                </div>
                <div className="bg-white border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 flex items-center gap-2">
                    <Beaker className="w-5 h-5" /> Tier 3 — Analyst Stretch
                  </h3>
                  <ol className="list-decimal list-inside text-base text-purple-900 space-y-1">
                    <li>Build a mini QA dashboard: error counts, balanced/unbalanced status, traffic-light icons.</li>
                    <li>Replace any A1:C10 references with structured table names or named ranges.</li>
                    <li>Write a one-sentence audit note such as “Ledger caught 3 invalid accounts and 1 stale invoice; all other entries reconcile.”</li>
                  </ol>
                </div>
              </div>
              <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 text-orange-900 flex gap-3">
                <Gauge className="h-6 w-6 flex-shrink-0" />
                <p>
                  Pro tip: duplicate your sheet before stress testing an edge case. Compare “Before QA” and “After QA” to measure how much cleaner your ledger becomes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Investor-Ready Quality Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Trial balance check returns zero when the ledger is clean and flags a gap when it is not.</li>
                <li>ErrorNote column pinpoints specific problems (invalid account, negative liability, stale date).</li>
                <li>All lookup formulas that can fail are wrapped in <code>IFNA</code> or <code>IFERROR</code> with plain-language messages.</li>
                <li>Structured references or named ranges power every formula, chart, and validation rule.</li>
                <li>Your audit note states the number of issues and the next action in under 25 words.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <FileText className="h-5 w-5" /> Audit Note Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-3 leading-relaxed">
              <p>
                Investors read for signal, not story time. Use one of these stems to keep your message sharp:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li><strong>Balanced with flags:</strong> “Ledger balances but flagged <strong>{"{count}"}</strong> invalid accounts; update vendor list before publishing.”</li>
                <li><strong>Out of balance:</strong> “Debits trail credits by <strong>${"{variance}"}</strong>; review invoices dated before <strong>{"{date}"}</strong> for typos.”</li>
                <li><strong>Clean pass:</strong> “All transactions reconcile and no validation flags triggered; ready for investor packet.”</li>
              </ul>
              <p>
                Keep the sentence under 25 words. Mention the key KPI or flag and the action you recommend next.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Target className="h-5 w-5" /> Stretch Yourself
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-3 leading-relaxed">
              <p>
                Ready for more? Build a pivot table that groups error types by account family. Add a slicer by month so Sarah can spot patterns quickly.
              </p>
              <p>
                Bonus challenge: write a second audit sentence aimed at a different audience (bookkeeper vs. investor) and notice how the language shifts.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="QA Readiness Check"
            description="Confirm you can explain the core QA moves before submitting your ledger."
            questions={independentQuestions}
            showExplanations
          />

          <ReflectionJournal
            unitTitle="Ledger QA Reflection"
            prompts={reflectionPrompts}
          />
        </section>
      </main>

      <PhaseFooter
        unit={unit01Data}
        lesson={lesson07Data}
        phase={currentPhase}
        phases={lesson07Phases}
      />
    </div>
  )
}
