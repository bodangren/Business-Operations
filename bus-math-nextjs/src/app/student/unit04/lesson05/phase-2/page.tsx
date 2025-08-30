import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabSentences = [
  {
    id: "1",
    text:
      "Use Excel Tables and {blank} so formulas expand automatically when new rows are added.",
    answer: "structured references",
    hint: "Like Sales[Units] instead of A2:A100"
  },
  {
    id: "2",
    text:
      "Forecast using: =FORECAST.LINEAR([@Units], Sales[Units], Sales[Week]) — here [@Units] is the {blank} value.",
    answer: "x",
    alternativeAnswers: ["x value", "x-value"],
    hint: "Independent variable (e.g., week number)"
  },
  {
    id: "3",
    text:
      "Wrap lookups with {blank}(yourFormula, \"Check Inputs\") to avoid ugly errors in investor demos.",
    answer: "IFERROR",
    hint: "Graceful fallback when something breaks"
  },
  {
    id: "4",
    text:
      "To return a default when an ID is missing, use XLOOKUP with the {blank} argument.",
    answer: "if_not_found",
    alternativeAnswers: ["if not found"],
    hint: "The 5th parameter in XLOOKUP"
  },
  {
    id: "5",
    text:
      "Segment forecasts by menu type with filters using {blank} across multiple criteria.",
    answer: "SUMPRODUCT",
    hint: "Vectorized filtering and aggregation"
  },
  {
    id: "6",
    text:
      "A professional model includes an Audit Panel with counts of {blank}, stale dates, and missing keys.",
    answer: "outliers",
    hint: "Values far from typical history"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Forecast Automation: Professional‑Grade Build</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deepen Lesson04’s regression by adding structured references, error handling, and scenario controls.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Core Standards</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-3">
                <ul className="list-disc list-inside space-y-1">
                  <li>Use Excel Tables; never hard‑coded ranges.</li>
                  <li>Document every assumption near inputs with plain language.</li>
                  <li>Show an Audit Panel: missing IDs, outliers, stale dates, negative values.</li>
                  <li>Protect formulas with IFERROR and default fallbacks.</li>
                  <li>Provide a scenario toggle (Baseline vs. Promo‑Adjusted).</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">Exact Excel Patterns</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-purple-900 space-y-4">
                <p>
                  Forecast formula using structured references:
                </p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`=FORECAST.LINEAR([@Week], Sales[Units], Sales[Week])`}
                </pre>
                <p>
                  XLOOKUP with default if missing:
                </p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`=XLOOKUP([@MenuID], Menu[MenuID], Menu[Type], "Unknown")`}
                </pre>
                <p>
                  Method switch (Baseline vs. Promo‑Adjusted):
                </p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`=SWITCH([@Scenario],
  "Baseline", FORECAST.LINEAR([@Week], Sales[Units], Sales[Week]),
  "PromoAdjusted", FORECAST.LINEAR([@Week], FILTER(Sales[Units], Sales[PromoFlag]=0), FILTER(Sales[Week], Sales[PromoFlag]=0)),
  NA())`}
                </pre>
                <p>
                  Segment filter with SUMPRODUCT (e.g., Drinks only):
                </p>
                <pre className="bg-white p-3 rounded border text-sm overflow-x-auto">
{`=SUMPRODUCT((Sales[Type]="Drink")*(Sales[Week]=[@Week])*Sales[Units])`}
                </pre>
              </CardContent>
            </Card>

            <FillInTheBlank
              sentences={vocabSentences}
              title="Advanced Forecasting Vocabulary"
              description="Complete each sentence to lock in the patterns professionals use."
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
            />
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

