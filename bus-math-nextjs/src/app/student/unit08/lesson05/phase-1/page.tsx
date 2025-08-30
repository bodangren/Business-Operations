import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, AlertTriangle, Shield } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[0];

const hookQuestions = [
  {
    id: "u08l05-hook-1",
    question: "Sarah needs to test profit when revenue growth and gross margin both change. What tool creates this grid fast?",
    answers: [
      "Two-variable Data Table",
      "Manual copies of the Profit cell",
      "PivotTable",
      "SUMPRODUCT"
    ],
    explanation: "A two-variable Data Table varies two inputs across rows and columns and reads one output cell, producing a sensitivity grid instantly."
  },
  {
    id: "u08l05-hook-2",
    question: "Investors ask to switch scenarios (Base, Stretch, Downside) live. Which function reliably pulls the selected driver set?",
    answers: [
      "XLOOKUP with IFNA",
      "VLOOKUP without exact match",
      "INDEX with hard-coded row numbers",
      "Typing values directly into the model"
    ],
    explanation: "XLOOKUP with exact match and IFNA fallback switches driver sets by name and prevents #N/A from breaking the model during demos."
  },
  {
    id: "u08l05-hook-3",
    question: "Which failure mode most hurts investor trust during Q&A?",
    answers: [
      "Formulas break when rows are added",
      "Inputs are labeled and documented",
      "Validation flags out-of-range growth",
      "Scenarios use named ranges"
    ],
    explanation: "Fragile formulas that break on simple changes signal weak controls. Structured references and validation prevent this."
  },
  {
    id: "u08l05-hook-4",
    question: "What makes a sensitivity model investor‑ready?",
    answers: [
      "Clear inputs, robust links, documented assumptions",
      "Hidden sheets and complex macros only the author knows",
      "Values pasted over formulas to look tidy",
      "Merged cells for every heading"
    ],
    explanation: "Professional models are transparent, validated, and resilient, so anyone can follow the logic and trust the outputs."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Narrative */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    Sarah’s Advanced Sensitivity Stress Test
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Fragile vs. Robust Automation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    In a live pitch, an investor asks Sarah to test a tougher market: lower growth and a thinner margin. 
                    She edits two inputs, and her Cash Flow sheet flashes errors. A link to the Balance Sheet broke when 
                    she added rows the night before. The room goes quiet.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Later, her CPA explains: “Investor‑ready models use <strong>Data Tables</strong> for fast what‑if analysis, 
                    <strong>XLOOKUP</strong> to switch scenario drivers by name, and <strong>validation</strong> to catch bad inputs. 
                    They don’t crumble when the data grows.”
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                    <p className="text-green-800">
                      Robust automation saves time, prevents embarrassing errors, and builds investor trust. 
                      When results update instantly and correctly, Sarah shows she manages risk and can scale.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Stress Test: Will Your Model Hold Up?"
                description="Predict the right tool and spot fragile patterns that reduce credibility."
                questions={hookQuestions}
                showExplanations={true}
                allowRetry={true}
              />

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-blue-900 mb-2">Discussion Prompt (3 minutes):</p>
                  <p className="text-blue-800 mb-2">
                    Think about risk and trust in investor meetings. Discuss:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>What makes a spreadsheet look fragile or unreliable?</li>
                    <li>How do Data Tables and validation improve investor confidence?</li>
                    <li>Which inputs should always be checked before showing results?</li>
                  </ul>
                  <div className="mt-3 flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Professional standard: stress‑test models before presenting.</span>
                  </div>
                </CardContent>
              </Card>

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

