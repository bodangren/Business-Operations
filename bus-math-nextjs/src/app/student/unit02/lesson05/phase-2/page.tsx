import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabSentences = [
  {
    id: "s1",
    text: "Use {blank} with the if_not_found argument to prevent #N/A when a key is missing.",
    answer: "XLOOKUP",
    alternativeAnswers: ["xlookup"],
    hint: "Successor to VLOOKUP with named arguments"
  },
  {
    id: "s2",
    text: "Structured references like Table[Amount] {blank} as new rows are added.",
    answer: "auto-expand",
    alternativeAnswers: ["expand", "auto expand"],
    hint: "They grow with the table"
  },
  {
    id: "s3",
    text: "{blank} selects a result based on exact matches without long nested IF chains.",
    answer: "SWITCH",
    alternativeAnswers: ["switch"],
    hint: "Clean alternative to nested IFs"
  },
  {
    id: "s4",
    text: "Use {blank} for multi-criteria totals when SUMIFS cannot express the logic.",
    answer: "SUMPRODUCT",
    alternativeAnswers: ["sumproduct"],
    hint: "Array-friendly aggregator"
  },
  {
    id: "s5",
    text: "Professional models include visible {blank} flags when inputs are missing or out-of-range.",
    answer: "validation",
    alternativeAnswers: ["error", "audit"],
    hint: "These alerts build trust"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Scenario Engine: Professional-Grade Automation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build a month-end engine that adapts as TechStart grows. Combine XLOOKUP mapping, SWITCH routing, and validation flags so your results stay accurate—and investor-ready.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <BookOpen className="h-5 w-5" />
                Core Patterns and Gotchas
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <ul className="list-disc list-inside">
                <li><strong>XLOOKUP with if_not_found:</strong> <code>=XLOOKUP([@AccountID], Map[AccountID], Map[Method], "Unknown")</code> prevents errors and makes issues visible.</li>
                <li><strong>SWITCH for routing:</strong> <code>=SWITCH([@Method], "Accrual", [@Amount], "Deferral", -[@Amount], 0)</code> stays readable as methods grow.</li>
                <li><strong>Structured references:</strong> <code>Table[Column]</code> auto-expands—no more broken ranges.</li>
                <li><strong>Validation:</strong> Flag missing IDs, negative costs, stale dates, and out-of-range values. Keep flags near inputs and at the top summary.</li>
                <li><strong>Documentation:</strong> Label inputs, assumptions, and methods directly on the sheet. Be clear for any reviewer.</li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank 
            sentences={vocabSentences as any}
            title="Advanced Vocabulary Check"
            description="Reinforce key terms used in professional month-end automation."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
