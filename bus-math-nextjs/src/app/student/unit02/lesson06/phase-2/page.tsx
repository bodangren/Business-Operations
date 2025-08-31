import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[1]

const vocab = [
  {
    id: "s1",
    text: "Use {blank} or a driver table to switch scenarios by exact name.",
    answer: "named ranges",
    alternativeAnswers: ["named range", "named-range", "driver table", "driver tables"],
    hint: "Ties a label like SelectedScenario to a valid value"
  },
  {
    id: "s2",
    text: "Link outputs with {blank} so formulas grow with new rows.",
    answer: "structured references",
    alternativeAnswers: ["table references", "table[column]", "structured reference"],
    hint: "Table[Column]"
  },
  {
    id: "s3",
    text: "For safe lookups, use XLOOKUP with {blank} to show a readable fallback.",
    answer: "IFNA",
    alternativeAnswers: ["ifna", "IFERROR"],
    hint: "Prevents #N/A surprises"
  },
  {
    id: "s4",
    text: "Charts should point to model outputs, not hard‑coded ranges, to avoid {blank} links.",
    answer: "broken",
    alternativeAnswers: ["fragile", "static"],
    hint: "Happens when data grows"
  },
  {
    id: "s5",
    text: "Add a visible {blank} for missing scenario name, stale AsOfDate, or out‑of‑range rates.",
    answer: "validation flag",
    alternativeAnswers: ["validation", "error flag", "audit flag"],
    hint: "Builds reliability and trust"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction — From Model to Decision
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integration Tools for a One‑Page Decision</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sarah needs clarity under pressure. Use driver tables or named ranges, exact‑match lookups, and chart links to turn a working model into a decision‑ready dashboard.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <BookOpen className="h-5 w-5" />
                Key Patterns and Professional Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <ul className="list-disc list-inside">
                <li><strong>Driver table + exact match:</strong> <code>=XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[COGS_Pct], "Missing")</code> switches cleanly. Wrap with <code>IFNA</code> or <code>IFERROR</code> for readable fallbacks.</li>
                <li><strong>Structured references:</strong> Use <code>Table[Column]</code> for totals and chart inputs so ranges expand automatically.</li>
                <li><strong>Chart linkage:</strong> Point visuals at model outputs, not raw inputs. Keep titles and labels readable.</li>
                <li><strong>Validation:</strong> Flag blank scenario names, negative or &gt;100% rates, and stale <code>AsOfDate</code>.</li>
                <li><strong>Auditability:</strong> Label drivers, methods, and KPIs. Add notes so a reviewer understands your choices.</li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank 
            sentences={vocab as any}
            title="Vocabulary: Integration & Dashboards"
            description="Fill in key terms: switching, references, error handling, validation, and visuals."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}

