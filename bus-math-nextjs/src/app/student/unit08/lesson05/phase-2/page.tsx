import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Target } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[1];

const vocabSentences = [
  {
    id: "v1",
    text: "A two-variable {blank} varies two inputs (like growth and margin) and reads one output cell.",
    answer: "Data Table",
    hint: "Use a row input and a column input with the result cell referenced.",
  },
  {
    id: "v2",
    text: "Use {blank}(lookup_value, lookup_array, return_array, 0) to switch driver sets exactly by name.",
    answer: "XLOOKUP",
    hint: "Exact match prevents wrong scenarios from loading.",
  },
  {
    id: "v3",
    text: "Wrap lookups with {blank}(result, fallback) to avoid #N/A breaking your model.",
    answer: "IFNA",
    alternativeAnswers: ["IFERROR"],
    hint: "Professional models fail gracefully during demos.",
  },
  {
    id: "v4",
    text: "Structured references like Table[Column] make formulas {blank} when rows change.",
    answer: "reliable",
    alternativeAnswers: ["robust", "stable"],
    hint: "They automatically expand with your data.",
  },
  {
    id: "v5",
    text: "Use {blank} ranges for key drivers (e.g., Growth_Rate, GM%) to improve readability and auditability.",
    answer: "named",
    alternativeAnswers: ["defined"],
    hint: "Clear names make your model easier to review.",
  },
  {
    id: "v6",
    text: "Validation should flag negative growth, missing IDs, and {blank} dates that haven't been updated.",
    answer: "stale",
    alternativeAnswers: ["old"],
    hint: "Protect credibility with inputs that make business sense.",
  },
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit08Data} 
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
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Explanatory content */}
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-green-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                    Professional‑Grade Automation
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Data Tables • XLOOKUP • Structured Refs • Validation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    In a three‑statement model, sensitivity analysis shows how key drivers change results. 
                    Use <strong>Data Tables</strong> to vary growth and margin together and read a clear output like Net Income or Cash.
                    Switch between Base, Stretch, and Downside using <strong>XLOOKUP</strong> with exact match and <strong>IFNA</strong> to avoid errors.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Make formulas resilient with <strong>structured references</strong> (Table[Column]) and <strong>named ranges</strong> for drivers. 
                    Add <strong>validation</strong> to catch negative growth, stale dates, and missing IDs before they damage trust. 
                    Document assumptions with brief notes so anyone can audit your logic.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">Standards for Investor‑Readiness</h3>
                    <ul className="list-disc list-inside text-blue-800">
                      <li>Exact‑match scenario switching with sensible fallbacks (IFNA/IFERROR)</li>
                      <li>Structured references that survive row/column changes</li>
                      <li>Validation for out‑of‑range inputs and stale dates</li>
                      <li>Clear labels, units, and concise documentation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <FillInTheBlank 
                sentences={vocabSentences as any}
                title="Advanced Vocabulary: Automation That Scales"
                description="Fill in the key concepts used in professional sensitivity and scenario automation."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}

