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
    text: 'A cross-sheet reference like ={blank}!B12 pulls a value from another tab into your current sheet.',
    answer: "'Income Statement'",
    hint: 'The sheet name in single quotes followed by an exclamation point'
  },
  {
    id: 'v2',
    text: 'Net Income from the Income Statement flows into {blank} on the Balance Sheet.',
    answer: 'Retained Earnings',
    hint: 'The equity account that accumulates profits over time'
  },
  {
    id: 'v3',
    text: 'An integrity check formula like =IF(ABS(Assets - (Liab + Equity)) < 0.01, "OK", "{blank}") flags mismatches.',
    answer: 'CHECK',
    hint: 'A clear warning word that stands out when something is wrong'
  },
  {
    id: 'v4',
    text: 'A {blank} lets you type =NetIncome instead of =\'Income Statement\'!B12, making formulas easier to read.',
    answer: 'named range',
    hint: 'A label assigned to a cell or range of cells'
  },
  {
    id: 'v5',
    text: 'The most common failure mode is using a bare cell reference like Sheet1!B12 without a label, which breaks silently when the {blank} changes.',
    answer: 'layout',
    hint: 'The arrangement of rows and columns on a sheet'
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
              Phase 2: Tool Anatomy
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">How Cross-Sheet Links Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cross-sheet references are the glue that holds a three-statement model together.
              Learn the syntax, the three critical links, and the traps that break models.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">The Three Critical Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-900">
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border-l-4 border-green-500">
                  <p className="font-semibold text-sm text-green-800">Link 1: Net Income → Retained Earnings</p>
                  <p className="font-mono text-xs mt-1 bg-gray-50 p-2 rounded">
                    ='Income Statement'!B12
                  </p>
                  <p className="text-xs mt-1">
                    Net Income from the Income Statement becomes the &ldquo;Net Income added&rdquo; line in Retained Earnings on the Balance Sheet.
                    This is how profit grows equity.
                  </p>
                </div>

                <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-sm text-green-800">Link 2: Ending Cash ↔ Cash Flow Statement</p>
                  <p className="font-mono text-xs mt-1 bg-gray-50 p-2 rounded">
                    ='Cash Flow'!B20
                  </p>
                  <p className="text-xs mt-1">
                    The ending cash on the Balance Sheet must equal the ending cash on the Cash Flow Statement.
                    If these don&apos;t match, something is wrong.
                  </p>
                </div>

                <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-sm text-green-800">Link 3: Integrity Checks</p>
                  <p className="font-mono text-xs mt-1 bg-gray-50 p-2 rounded">
                    =IF(ABS(TotalAssets - (TotalLiab + TotalEquity)) &lt; 0.01, &quot;OK&quot;, &quot;CHECK&quot;)
                  </p>
                  <p className="text-xs mt-1">
                    A formula that verifies the balance sheet equation still holds. Place this check
                    where anyone reviewing the model can see it.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Common Failure Modes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-amber-900">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Bare cell references:</strong> <span className="font-mono">=Sheet1!B12</span> breaks silently
                  when someone inserts a row above row 12. Always use named ranges or labeled cells.
                </li>
                <li>
                  <strong>Wrong sheet name:</strong> <span className="font-mono">=&apos;Income Stmnt&apos;!B12</span> returns
                  a #REF! error if the tab is actually named &ldquo;Income Statement.&rdquo; Double-check tab names.
                </li>
                <li>
                  <strong>Hard-coded values instead of links:</strong> Typing &ldquo;10,800&rdquo; instead of linking to Net Income
                  means the Balance Sheet never updates when revenue changes.
                </li>
                <li>
                  <strong>Circular references:</strong> If Sheet A references Sheet B and Sheet B references Sheet A,
                  Excel shows a circular reference warning. Plan your link direction: Income Statement → Balance Sheet → Cash Flow.
                </li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank 
            sentences={vocabSentences}
            title="Cross-Sheet Linking Vocabulary"
            description="Reinforce the exact terms and patterns you will use in the workbook build."
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
