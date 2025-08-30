import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, AlertTriangle, Shield } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "u06l05-hook-1",
    question: "In Sarah's CVP model, which tool best stress-tests profit across many price points at once?",
    answers: [
      "Data Table (one-variable)",
      "Manual trial and error",
      "SUM function",
      "Merge and Center"
    ],
    explanation: "A one-variable Data Table varies a single input (like price) across a range and shows the effect on profit instantly."
  },
  {
    id: "u06l05-hook-2",
    question: "Investors ask: ‘What price and volume pair keeps us profitable?’ Which tool compares both at once?",
    answers: [
      "Data Table (two-variable)",
      "XLOOKUP",
      "Conditional Formatting",
      "COUNTIF"
    ],
    explanation: "A two-variable Data Table varies two inputs (price and volume) simultaneously, producing a sensitivity grid for profit."
  },
  {
    id: "u06l05-hook-3",
    question: "Which failure mode destroys investor trust during Q&A?",
    answers: [
      "Fragile model that breaks when inputs change",
      "Documented formulas with comments",
      "Clear labels and units",
      "Validation rules for negative costs"
    ],
    explanation: "Fragile models that error out or give inconsistent results under small changes signal poor controls and lower credibility."
  },
  {
    id: "u06l05-hook-4",
    question: "Sarah wants a faster way to hit a profit target for four different methods (price, units, fixed, variable). What's the right approach?",
    answers: [
      "Dynamic method switching + Goal Seek",
      "Multiple spreadsheets for each method",
      "Copy-paste values by hand",
      "Hiding invalid inputs with white text"
    ],
    explanation: "A professional model lets you choose a target method (price, units, fixed or variable cost) and uses Goal Seek or formulas accordingly."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit06Data} 
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
                    Sarah’s Advanced CVP Stress Test
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Fragile vs. Robust Models
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    During an investor meeting, Sarah live-edited her CVP model to try different prices. 
                    One small change broke a formula chain. Charts disappeared. The room went quiet. 
                    An investor whispered, “If the model fails here, how will it handle real-world change?”
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Her CPA, Jennifer, later explained: “Professional models don’t crumble under pressure. 
                    They use <strong>Data Tables</strong> for fast what‑if analysis, <strong>Goal Seek</strong> for target solving, 
                    and <strong>validation</strong> to catch bad inputs. That’s how you earn investor trust.”
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                    <p className="text-green-800">
                      Robust automation saves time, prevents embarrassing errors, and shows you manage risk. 
                      Investor-ready means fast answers, clean logic, and reliable outputs under stress.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Stress Test: Can Sarah's Model Handle Change?"
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
                    <span className="text-sm">Professional standard: models must be stress-tested before presenting.</span>
                  </div>
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

