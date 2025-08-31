import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MonitorPlay, AlertTriangle, Shield } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[0];

const hookQuestions = [
  {
    id: "u08l06-hook-1",
    question: "Investors ask to compare Base, Stretch, and Downside live. What makes switching reliable?",
    answers: [
      "XLOOKUP with exact match + IFNA",
      "Typing values into each output sheet",
      "Copy/paste driver blocks per scenario",
      "VLOOKUP approximate match"
    ],
    explanation: "XLOOKUP with exact match switches by scenario name and IFNA prevents #N/A from breaking the dashboard."
  },
  {
    id: "u08l06-hook-2",
    question: "Sarah’s chart breaks when she adds new months. What fixes that for good?",
    answers: [
      "Structured references to an Excel Table",
      "Manually resetting the chart range every demo",
      "Absolute ranges like $B$2:$G$2",
      "Hiding the chart while presenting"
    ],
    explanation: "Tables expand automatically. Structured references keep charts linked as rows grow."
  },
  {
    id: "u08l06-hook-3",
    question: "Which is the biggest risk during a live dashboard demo?",
    answers: [
      "Hard‑coded numbers buried in outputs",
      "Clear labels for inputs",
      "Documented assumptions sheet",
      "Named ranges for drivers"
    ],
    explanation: "Hard‑coded values hide logic and fail under change. Use links, not pasted numbers."
  },
  {
    id: "u08l06-hook-4",
    question: "An investor asks: ‘What’s your runway in Downside?’ The model should show…",
    answers: [
      "A KPI card that updates with scenario",
      "A separate hidden sheet with a note",
      "A paragraph with no calculation",
      "A screenshot from last week"
    ],
    explanation: "Dashboards surface KPIs like runway, margin, and cash coverage instantly per scenario."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎬 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Narrative */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <MonitorPlay className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    Sarah’s Live Dashboard Demo: One Click, Three Stories
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Base • Stretch • Downside
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    A partner asks Sarah to show the <strong>whole year‑1 model</strong> in one view. 
                    “Can you switch between Base, Stretch, and Downside?”
                    In the past, Sarah had separate sheets and charts. The demo felt clunky and risky.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Today, she clicks a scenario name. <strong>Named‑range drivers</strong> feed XLOOKUP links, 
                    and her charts update instantly. A KPI card reads: <em>Runway: 8.4 months</em>. The room relaxes.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                    <p className="text-green-800">
                      Integrated dashboards help investors make decisions fast. They show reliability, 
                      control, and clear thinking under pressure. That builds trust—and wins funding.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Dashboard Integration: Will It Hold Up?"
                description="Spot fragile patterns and choose stable, professional solutions."
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
                    What convinces you that a dashboard is investor‑ready? Discuss:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>How do scenario toggles support clear decisions?</li>
                    <li>What errors break trust the fastest?</li>
                    <li>Which KPIs belong at the top? Why?</li>
                  </ul>
                  <div className="mt-3 flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Standard: stable links, clear KPIs, zero hard‑coding.</span>
                  </div>
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

