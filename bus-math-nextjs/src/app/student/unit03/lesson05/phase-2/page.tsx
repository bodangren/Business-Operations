import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabSentences = [
  {
    id: 'v1',
    text: 'Use {blank} like Table[Amount] so formulas auto‑expand with new rows.',
    answer: 'structured references',
    hint: 'Table[Column] style references'
  },
  {
    id: 'v2',
    text: 'Map AccountID → StatementLine with {blank} and the if_not_found argument.',
    answer: 'XLOOKUP',
    hint: 'Safer than VLOOKUP, supports exact match by default'
  },
  {
    id: 'v3',
    text: 'Aggregate rows for a line item with {blank}(Amount, Line, "Revenue").',
    answer: 'SUMIFS',
    hint: 'Multi‑criteria summing for rollups'
  },
  {
    id: 'v4',
    text: 'Switch scenarios using a control cell and {blank}(Selector, "Base",1,"Stretch",2,"Conservative",3).',
    answer: 'SWITCH',
    hint: 'Cleaner than nested IFs for modes'
  },
  {
    id: 'v5',
    text: 'Show a clear error if a key is missing: XLOOKUP(id, map[AccountID], map[Line], {blank}).',
    answer: '"Unknown"',
    hint: 'Use if_not_found to prevent #N/A'
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit03Data}
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
            <h2 className="text-3xl font-bold text-gray-900">Three‑Statement Link Engine: Professional‑Grade Automation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Build reliable connections from transaction tables to Income Statement, Balance Sheet, and Cash Flow.
              We’ll use structured references, XLOOKUP, SUMIFS, and a simple scenario switch.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Core Patterns and Gotchas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-900">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Tables first:</strong> Convert data to Tables. Example: <span className="font-mono">TransactionTable[Amount]</span>.</li>
                <li><strong>Safe mapping:</strong> <span className="font-mono">=XLOOKUP([@AccountID], Map[AccountID], Map[StatementLine], "Unknown")</span>.</li>
                <li><strong>Rollups:</strong> <span className="font-mono">=SUMIFS(TransactionTable[Amount], TransactionTable[StatementLine], "COGS")</span>.</li>
                <li><strong>Scenario control:</strong> <span className="font-mono">=SWITCH(Scenario, "Base",1, "Stretch",2, "Conservative",3)</span> → use result as a multiplier or index.</li>
                <li><strong>Professional standards:</strong> document assumptions, name key ranges, and add visible validation flags.</li>
                <li><strong>Common mistakes:</strong> fixed ranges, approximate matches, hidden errors, and silent ties not checked.</li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank 
            sentences={vocabSentences}
            title="Advanced Vocabulary Check"
            description="Reinforce the exact tools used to build investor‑grade automation."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

