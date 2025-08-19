import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { BookOpen, ListChecks } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabulary = [
  { id: '1', text: 'Use {blank}(lookup_value, lookup_array, return_array, [if_not_found]) with IFERROR to handle missing AccountIDs', answer: 'XLOOKUP', hint: 'Modern lookup replacement for VLOOKUP/INDEX-MATCH' },
  { id: '2', text: 'SUM totals by account using {blank}(sum_range, criteria_range1, criteria1, ...)', answer: 'SUMIFS', hint: 'Multi-criteria summation for posting checks' },
  { id: '3', text: 'Avoid broken ranges by using {blank}[Column] instead of A2:A999', answer: 'Structured References', hint: 'Excel Tables keep formulas dynamic' },
  { id: '4', text: 'Wrap lookups with {blank}(value, value_if_error) to prevent silent failures', answer: 'IFERROR', hint: 'Surface issues without crashing formulas' },
  { id: '5', text: 'Create dropdowns and block invalid entries using Data {blank}', answer: 'Validation', hint: 'Lists, numbers, dates with rules' },
  { id: '6', text: 'Switch recognition timing with a single cell toggle (Cash vs {blank})', answer: 'Accrual', hint: 'Method switching controlled by logic' },
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction — Professional-Grade Automation
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              XLOOKUP + SUMIFS + Structured References = Reliable Ledger
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Today you’ll build controls that catch mistakes before they spread. These tools
              keep Sarah’s books accurate even as her business grows.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Key Patterns and Exact Syntax
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3 text-sm leading-relaxed">
              <p><strong>Account mapping with error handling:</strong> <code>=IFERROR(XLOOKUP([@AccountID], Accounts[AccountID], Accounts[AccountName], "Missing ID"), "Missing ID")</code></p>
              <p><strong>Trial balance control:</strong> <code>=SUMIFS(Transactions[Debit], Transactions[AccountID], [@AccountID]) - SUMIFS(Transactions[Credit], Transactions[AccountID], [@AccountID])</code></p>
              <p><strong>Out-of-balance flag:</strong> <code>=IF(SUM(Transactions[Debit])=SUM(Transactions[Credit]), "Balanced", "Out of Balance")</code></p>
              <p><strong>Method switch (cash/accrual):</strong> Use a cell like <code>Settings[Method]</code> and <code>IF(Settings[@Method]="Cash", ReceivedDate, EarnedDate)</code> in calculations.</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <ListChecks className="h-5 w-5" />
                Professional Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Use Tables with clear names and structured references</li>
                <li>Document every control with a short note next to it</li>
                <li>Never hide errors—surface them with plain language</li>
                <li>Block bad input using Data Validation (lists, numbers, dates)</li>
                <li>Test with edge cases before trusting results</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <FillInTheBlank
            sentences={vocabulary}
            title="Advanced Vocabulary Check"
            description="Fill in the key terms used to build professional, self-auditing ledgers."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

