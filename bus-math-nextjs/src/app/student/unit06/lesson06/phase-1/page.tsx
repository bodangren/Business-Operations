import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MonitorSmartphone, SlidersHorizontal, Target, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import FinancialDashboard from "@/components/charts/FinancialDashboard";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "u06l06-hook-1",
    question: "An investor asks: 'Show Base vs. Stretch vs. Downside on one screen.' What earns the most trust?",
    answers: [
      "One integrated dashboard with scenario toggles and clear KPIs",
      "Three separate sheets with hard-coded numbers",
      "A list of assumptions in a text box",
      "Emailing screenshots after the meeting"
    ],
    explanation: "A single dashboard with live scenario switching and KPIs communicates clearly under pressure and avoids copy-paste errors."
  },
  {
    id: "u06l06-hook-2",
    question: "Charts stop updating when Sarah adds new rows. What's the likely cause?",
    answers: [
      "Charts reference static ranges instead of structured tables",
      "XLOOKUP is not installed",
      "The workbook is too large to refresh",
      "Goal Seek overwrote the formulas"
    ],
    explanation: "Static chart ranges don't expand with data. Use Excel Tables or structured references so visuals stay linked and reliable."
  },
  {
    id: "u06l06-hook-3",
    question: "Scenario switching sometimes shows #N/A. What's the professional fix?",
    answers: [
      "Wrap lookups with IFNA/IFERROR and validate scenario names",
      "Hide errors by changing text color to white",
      "Turn off calculation to avoid updates",
      "Delete the broken rows before presenting"
    ],
    explanation: "Use exact-match lookups and guardrails (IFNA/IFERROR) with validation to catch misspelled scenario names and missing data."
  },
  {
    id: "u06l06-hook-4",
    question: "Before/After: Which pattern signals a robust integration?",
    answers: [
      "Named driver table + XLOOKUP into charts and KPIs",
      "Values pasted into charts before the meeting",
      "Manual filters with no documentation",
      "Separate files for each scenario"
    ],
    explanation: "A named driver table with exact-match lookups keeps the model stable, traceable, and presentation-ready."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Live Demo Narrative */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <MonitorSmartphone className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    Sarah’s One-Screen Answer: Base, Stretch, Downside
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    From hard-coded sheets → Integrated dashboard
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    In a pitch meeting, an investor asked Sarah to compare three scenarios on one screen.
                    Her old model used separate tabs with copy-paste numbers. It was slow and risky.
                    Today, she’s ready. A named driver table feeds exact-match lookups, charts are linked,
                    and KPIs highlight what matters.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                    <p className="text-red-900">
                      Before: static ranges, broken charts, and last-minute edits. After: a stable
                      dashboard with scenario toggles and clear decision cues.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                    <p className="text-green-800">
                      Investors value clarity under pressure. A reliable dashboard shows you can explain
                      tradeoffs fast and back every statement with the model.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Compact interactive dashboard (visual only) */}
              <FinancialDashboard title="Scenario Overview Dashboard (Demo)" className="max-w-4xl mx-auto" />

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Integration Pitfalls and Best Practices"
                description="Spot fragile patterns and choose the investor-ready approach."
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
                  <p className="font-medium text-blue-900 mb-2">Discussion (3 minutes):</p>
                  <p className="text-blue-800 mb-2">
                    What makes a dashboard decision-ready during Q&A?
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>How do scenario toggles improve clarity and speed?</li>
                    <li>What evidence convinces investors your model is stable?</li>
                    <li>Which KPIs should be visible at a glance?</li>
                  </ul>
                  <div className="mt-3 flex items-center gap-2 text-slate-700">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm">Avoid static chart ranges that break when data grows.</span>
                  </div>
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

