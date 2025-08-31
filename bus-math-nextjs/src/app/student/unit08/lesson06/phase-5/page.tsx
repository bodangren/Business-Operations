import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[4];

const assessmentQuestions = [
  {
    id: "u08l06-a1",
    question: "Best method to switch driver sets by scenario name?",
    answers: ["XLOOKUP with IFNA", "VLOOKUP approximate", "INDEX with hard‑coded row", "Manual copy/paste"],
    explanation: "Use exact‑match XLOOKUP and wrap with IFNA to avoid #N/A on the dashboard."
  },
  {
    id: "u08l06-a2",
    question: "A chart stops updating when new months are added. Root cause?",
    answers: ["Static range, not a Table", "Too many colors", "Wrong chart type", "Axis fonts are small"],
    explanation: "Static ranges don’t expand. Use a Table and structured references."
  },
  {
    id: "u08l06-a3",
    question: "Which validation protects investor trust the most?",
    answers: ["Flag stale AsOfDate and out‑of‑range rates", "Hide error cells", "Turn off calc mode", "Lock all sheets"],
    explanation: "Good validation surfaces issues early; hiding errors reduces trust."
  },
  {
    id: "u08l06-a4",
    question: "Scenario Manager vs. driver table—when choose a driver table?",
    answers: ["When links must stay live to charts", "When no switching is required", "When only printing", "When macros are banned"],
    explanation: "Driver tables with XLOOKUP keep the model live and auditable across outputs and charts."
  },
  {
    id: "u08l06-a5",
    question: "Pick the most stable lookup for scenario name → margin %",
    answers: ["=IFNA(XLOOKUP($B$2, Scenario[Name], Scenario[Margin]), 0)", "=VLOOKUP($B$2, A:E, 3)", "=INDEX(C:C, 2)", "=MATCH($B$2, A:A, 0)"],
    explanation: "Exact‑match XLOOKUP with IFNA provides both correctness and safety."
  },
  {
    id: "u08l06-a6",
    question: "Executive summary should…",
    answers: ["Change based on KPI thresholds", "Be a fixed paragraph", "Use emoji only", "Be hidden behind a button"],
    explanation: "Tie a clear sentence to KPIs: runway, margin, and cash coverage."
  },
  {
    id: "u08l06-a7",
    question: "Which issue most signals a hard‑coded model?",
    answers: ["Outputs don’t change when drivers switch", "Headers are bold", "Colors are bright", "There’s a logo"],
    explanation: "If outputs don’t update, the model likely contains pasted values."
  },
  {
    id: "u08l06-a8",
    question: "INDEX/MATCH exact match is acceptable when…",
    answers: ["It uses 0 for exact match and is documented", "It uses 1 for approximate match", "The row is typed by hand", "The data is unsorted and approximate"],
    explanation: "INDEX/MATCH with 0 works well, but must be exact and documented."
  },
  {
    id: "u08l06-a9",
    question: "Performance best practice for dashboards?",
    answers: ["Avoid volatile functions and duplicate calcs", "Use TODAY() everywhere", "Array formulas on whole columns", "10 identical charts per sheet"],
    explanation: "Keep it responsive: minimize volatility and redundant calculations."
  },
  {
    id: "u08l06-a10",
    question: "What makes a dashboard investor‑ready?",
    answers: ["Clarity, reliability, auditability", "Flashy colors, no labels", "Hidden links, manual numbers", "Macros only I understand"],
    explanation: "Professional dashboards are transparent, stable, and easy to audit."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <ComprehensionCheck
                title="Integration & Dashboard Mastery Check"
                description="Show your technical skill and business judgment with scenario switching and KPI interpretation."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
              />

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-base flex items-center gap-2">
                    <Briefcase className="h-5 w-5" /> Career Connection: Analyst → Insights → Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900">
                    Analysts test scenarios, read KPIs, and recommend actions. Your dashboard is your voice—make it clear, quick, and credible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  );
}

