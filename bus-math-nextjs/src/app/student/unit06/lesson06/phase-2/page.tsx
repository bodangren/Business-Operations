import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, CheckCircle2 } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[1]; // Introduction phase

const vocabSentences = [
  {
    id: "vocab-1",
    text: "A named {blank} table stores scenario inputs like 'Base', 'Stretch', and 'Downside'.",
    answer: "driver",
    hint: "This table drives the model by feeding inputs into formulas"
  },
  {
    id: "vocab-2",
    text: "Use {blank} with exact match to switch between scenarios by name.",
    answer: "XLOOKUP",
    hint: "Works like INDEX‑MATCH but simpler syntax"
  },
  {
    id: "vocab-3",
    text: "Wrap lookups with {blank} or IFERROR to handle missing or misspelled scenario names.",
    answer: "IFNA",
    alternativeAnswers: ["IFERROR"],
    hint: "Prevents #N/A and keeps the dashboard readable"
  },
  {
    id: "vocab-4",
    text: "Build charts from Excel Tables so ranges {blank} as new rows are added.",
    answer: "expand",
    hint: "Structured references keep visuals stable"
  },
  {
    id: "vocab-5",
    text: "Use {blank} references (Table[Column]) for reliable links to charts and KPIs.",
    answer: "structured",
    hint: "Avoids hard‑coded A1:C10 ranges that break"
  },
  {
    id: "vocab-6",
    text: "Scenario Manager or a driver table can both switch models; teams should pick one and {blank} it.",
    answer: "document",
    hint: "Professional standards require clarity and auditability"
  },
  {
    id: "vocab-7",
    text: "For dashboards, prioritize a small set of {blank} that match decision thresholds (margin, runway, break‑even).",
    answer: "KPIs",
    alternativeAnswers: ["key performance indicators"],
    hint: "Too many numbers reduces clarity"
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Core Content */}
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                    From Model to Decision: Scenario Switching + Linked Visuals
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Named Ranges • XLOOKUP • Structured References
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Sarah’s CVP model becomes investor-ready when it moves from “calculation sheet” to
                    a dashboard that anyone can read. The heart of the system is a <strong>driver table</strong>
                    with named ranges for Base, Stretch, and Downside. Exact-match lookups like <strong>XLOOKUP</strong>
                    or <strong>INDEX‑MATCH</strong> switch inputs by scenario name. Charts and KPI cards read from
                    structured references, so they update instantly—and never break when data grows.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Professional Standards</h3>
                    <ul className="list-disc list-inside text-blue-800">
                      <li>Documentation: label inputs/outputs and note assumptions.</li>
                      <li>Validation: guard against missing scenario names and stale AsOfDate.</li>
                      <li>Performance: avoid volatile functions that slow recalculation.</li>
                      <li>Auditability: trace formulas from driver table → outputs → charts.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Vocabulary Check */}
              <FillInTheBlank 
                sentences={vocabSentences}
                title="Integration Vocabulary: Get the Language Right"
                description="Practice the key terms that make dashboards reliable and investor-friendly."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Exact-Match Tip
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800">
                    Always use exact-match lookups (match_mode = 0 in XLOOKUP). Approximate matches can pull
                    the wrong scenario and confuse your charts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
    </div>
  );
}

