import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Target } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[1]; // Introduction

const vocabSentences = [
  {
    id: "v1",
    text: "A one-variable {blank} varies a single input (like price) across a list of values.",
    answer: "Data Table",
    hint: "It creates fast what‑if analysis without copying formulas.",
  },
  {
    id: "v2",
    text: "A two-variable Data Table varies two inputs (for example, price and {blank}) at the same time.",
    answer: "volume",
    alternativeAnswers: ["units"],
    hint: "It produces a sensitivity grid for profit.",
  },
  {
    id: "v3",
    text: "Use {blank}(calculation, 0) to hide #DIV/0! and show 0 when inputs are incomplete.",
    answer: "IFERROR",
    hint: "Professional models avoid scary errors during live demos.",
  },
  {
    id: "v4",
    text: "Structured references like Table[Column] make formulas clearer and more {blank} when rows change.",
    answer: "reliable",
    alternativeAnswers: ["robust", "stable"],
    hint: "They automatically expand with your data.",
  },
  {
    id: "v5",
    text: "Goal Seek is best for hitting a single {blank} (target profit) by changing one input.",
    answer: "target",
    alternativeAnswers: ["value"],
    hint: "Set Cell, To Value, By Changing Cell.",
  },
  {
    id: "v6",
    text: "Validation should catch negative costs, missing IDs, and {blank} dates that haven’t been updated.",
    answer: "stale",
    alternativeAnswers: ["old"],
    hint: "Protect credibility with inputs that make business sense.",
  },
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit06Data} 
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
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                    Data Tables: Professional-Grade Automation
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Fast What‑If Analysis for CVP Models
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    Sarah’s investors want quick, accurate answers: “What if price increases by $5?” 
                    “What if volume drops 10%?” <strong>Data Tables</strong> make this simple. Instead of 
                    guessing and retyping, a Data Table varies inputs and updates results instantly. 
                    You control the input cell, the output formula, and Excel generates the full view.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Exact Excel Patterns
                    </h3>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                      <li>Use a clear output cell like Profit: <code>=Price*Units - VarCost*Units - Fixed</code></li>
                      <li>Protect with <code>=IFERROR(Price*Units - VarCost*Units - Fixed, 0)</code></li>
                      <li>Use structured references: <code>=[@Price]*[@Units] - [@VarCost]*[@Units] - [@Fixed]</code></li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-900 mb-2">Gotchas & Standards</h3>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                      <li>Data Tables recalc with F9; keep them small and labeled.</li>
                      <li>Separate inputs and outputs; avoid circular references.</li>
                      <li>Document the changing cell and the formula cell near the table.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <FillInTheBlank 
                title="Advanced Automation Vocabulary"
                description="Reinforce key terms that make CVP models fast, clear, and reliable."
                sentences={vocabSentences}
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In Guided Practice, you’ll build Sarah’s scenario runner with a one‑variable and a 
                    two‑variable Data Table, plus validation rules that prevent bad inputs.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}

