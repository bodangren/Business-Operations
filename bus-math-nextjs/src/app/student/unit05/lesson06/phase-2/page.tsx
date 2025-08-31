import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

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
      "Charts stay stable when they read from payroll Tables using {blank} references.",
    answer: "structured",
    alternativeAnswers: ["structured references", "Table references"],
    hint: "Table[Column]"
  },
  {
    id: "4",
    text:
      "If a scenario name is missing, {blank}(lookup, 0) prevents the model from crashing and flags the issue.",
    answer: "IFNA",
    hint: "Pairs well with XLOOKUP exact‑match"
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
      "Executive summaries should name KPIs and thresholds (coverage days, payroll % of revenue, variance) to support {blank} decisions.",
    answer: "business",
    alternativeAnswers: ["investor", "stakeholder"],
    hint: "Audience: decision‑makers"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit05Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Payroll Integration: From Model to Decision</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a driver table, switch scenarios by name, link outputs to visuals, and define payroll KPIs that matter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Core Integration Tools</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-blue-900 space-y-4">
                <p>Scenario driver table pattern (Payroll):</p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`Drivers Columns: Scenario | OvertimeThresholdHours | OTMultiplier | StateTaxRatePct | CoverageTargetDays | KPIs
SelectedScenario (named cell) drives:
=XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[OTMultiplier], "Missing")`}
                </pre>
                <p>Stable visuals via structured references:</p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`=SUM(PayrollTable[GrossPay])
// Charts point to outputs that reference Table[Column]`}
                </pre>
                <p>Safe fallbacks:</p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`=IFNA(XLOOKUP(...), 0)
=IFERROR(calculation, "Check Inputs")`}
                </pre>
              </CardContent>
            </Card>

            <FillInTheBlank
              sentences={vocabSentences}
              title="Integration Vocabulary (Payroll)"
              description="Complete each sentence to lock in the patterns professionals use."
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
            />
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

