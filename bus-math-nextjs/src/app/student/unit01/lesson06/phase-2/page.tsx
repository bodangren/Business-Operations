import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { BookOpen, ListChecks } from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[1]

const vocab = [
  { id: '1', text: 'Use a {blank} (or Scenario Manager) to store Base/Stretch/Downside drivers', answer: 'driver table', hint: 'A small named table that feeds the model' },
  { id: '2', text: 'Bind charts to {blank} so ranges expand with new rows', answer: 'structured references', hint: 'Table[Column] instead of A2:A999' },
  { id: '3', text: 'Switch scenarios by name with XLOOKUP set to {blank} match', answer: 'exact', hint: 'MATCH 0 in INDEX/MATCH or FALSE in VLOOKUP' },
  { id: '4', text: 'Wrap lookups with {blank} or IFNA to avoid silent errors', answer: 'IFERROR', hint: 'Provide friendly messages' },
  { id: '5', text: 'Protect decision speed with clear {blank} like margin, runway, and cash days', answer: 'KPIs', hint: 'Key Performance Indicators' },
  { id: '6', text: 'Flag outdated reports: compare AsOfDate to {blank}()', answer: 'TODAY', hint: 'Stale dates reduce trust' },
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
              📚 Phase 2: Introduction — From Model to Decision
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Scenarios by Name, Charts that Stay Linked, KPIs that Speak
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              You will wire a single driver table to control the whole model. XLOOKUP with
              exact match and IFNA/IFERROR makes switching stable. Charts read Table columns,
              not fixed ranges. Your KPIs turn numbers into decisions.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Exact Syntax Patterns
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-900 space-y-2">
              <p>
                <strong>Driver pull (scenario by name):</strong>
                <code className="ml-2">=IFNA(XLOOKUP(Settings[@Scenario], Drivers[Scenario], Drivers[Price], "Missing Scenario"), "Missing Scenario")</code>
              </p>
              <p>
                <strong>INDEX/MATCH exact alternative:</strong>
                <code className="ml-2">=IFNA(INDEX(Drivers[Price], MATCH(Settings[@Scenario], Drivers[Scenario], 0)), "Missing Scenario")</code>
              </p>
              <p>
                <strong>Chart binding:</strong>
                Use <code>Table[Column]</code> references so charts expand as data grows.
              </p>
              <p>
                <strong>Stale date flag:</strong>
                <code className="ml-2">=IF(Settings[@AsOfDate] &lt; TODAY()-7, "Stale AsOfDate", "Fresh")</code>
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <ListChecks className="h-5 w-5" />
                Professional Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-800 space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Single source of truth: one named driver table</li>
                <li>Exact‑match lookups with IFNA/IFERROR guarding every switch</li>
                <li>Charts bound to Table columns; no static A1:A20 references</li>
                <li>Validation on inputs: block negative rates and &gt;100% percentages</li>
                <li>Short documentation note next to each control (purpose + expected behavior)</li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank 
            sentences={vocab}
            title="Vocabulary: Integration & Dashboards"
            description="Reinforce the exact language used to build reliable scenario dashboards."
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
