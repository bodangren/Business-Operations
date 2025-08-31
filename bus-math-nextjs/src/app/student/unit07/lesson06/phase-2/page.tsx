import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[1]

const vocabSentences = [
  {
    id: "1",
    text:
      "Use a driver table and {blank} so scenarios switch by exact name (Base/Stretch/Downside).",
    answer: "XLOOKUP",
    hint: "Exact match with if_not_found"
  },
  {
    id: "2",
    text:
      "Wrap lookups with {blank}(value, \"Check Inputs\") to avoid ugly errors in demos.",
    answer: "IFERROR",
    hint: "Graceful fallback when something breaks"
  },
  {
    id: "3",
    text:
      "Charts stay stable when they read from Tables using {blank} references.",
    answer: "structured",
    alternativeAnswers: ["structured references", "Table references"],
    hint: "Table[Column]"
  },
  {
    id: "4",
    text:
      "If a scenario name is missing, {blank}(lookup, 0) prevents crashes and flags the issue.",
    answer: "IFNA",
    hint: "Pairs well with exact‑match lookups"
  },
  {
    id: "5",
    text:
      "Use {blank}‑MATCH when XLOOKUP isn’t available but exact‑match switching is required.",
    answer: "INDEX",
    alternativeAnswers: ["INDEX-MATCH", "INDEX MATCH"],
    hint: "Classic lookup combo"
  },
  {
    id: "6",
    text:
      "Executive summaries should name KPIs and thresholds (gross margin, turnover, days on hand) to support {blank} decisions.",
    answer: "business",
    alternativeAnswers: ["investor", "stakeholder"],
    hint: "Audience: decision‑makers"
  }
]

export default function Unit07Lesson06Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Inventory Integration: From Model to Decision</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a driver table, switch scenarios by name, link outputs to visuals, and define inventory KPIs that matter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Core Integration Tools</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-blue-900 space-y-4">
                <p>Scenario driver table pattern (Inventory):</p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`Drivers Table
Scenario | SalesGrowthPct | Method | AsOfDate
Base     | 0%             | FIFO   | 2025-06-30
Stretch  | 12%            | LIFO   | 2025-06-30
Downside | -8%            | WA     | 2025-06-30`}
                </pre>
                <p>Exact‑match switching with clear fallbacks:</p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`=IFNA(XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[Method]), "FIFO")
=IFERROR([@UnitCost]*[@Qty], "Check Inputs")`}
                </pre>
                <p>Professional standards:</p>
                <ul>
                  <li>Use Tables and structured references only; avoid fixed ranges</li>
                  <li>Document formulas in plain language near outputs</li>
                  <li>Validation flags catch issues before totals and charts</li>
                </ul>
              </CardContent>
            </Card>

            <FillInTheBlank
              sentences={vocabSentences}
              title="Integration Vocabulary: Scenario Drivers, Lookups, and Visuals"
              description="Type the missing words to complete each sentence."
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
            />
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

