import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase, AlignLeft } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[4]; // Assessment

const assessmentQuestions = [
  {
    id: "u06l06-assess-1",
    question: "Best approach for scenario switching by name?",
    answers: [
      "XLOOKUP (exact match) or INDEX‑MATCH with validation",
      "Manual copy/paste into the model",
      "SUMIF across scenario sheets",
      "Approximate matches for faster results"
    ],
    explanation: "Use exact-match lookups anchored to a documented driver table and guard with IFNA/IFERROR."
  },
  {
    id: "u06l06-assess-2",
    question: "Charts stop updating as data grows. What fixes it?",
    answers: [
      "Build visuals on Excel Tables (structured references)",
      "Hard-code ranges but add colors",
      "Turn off automatic calculation",
      "Move charts to a new sheet"
    ],
    explanation: "Structured references expand automatically and keep links stable."
  },
  {
    id: "u06l06-assess-3",
    question: "Which validation rule most improves investor trust?",
    answers: [
      "Flag stale AsOfDate and out-of-range rates with clear messages",
      "Hide errors by formatting cells with white text",
      "Delete invalid rows before meetings",
      "Depend on screenshots"
    ],
    explanation: "Visible guardrails prevent misleading outputs and make issues easy to resolve."
  },
  {
    id: "u06l06-assess-4",
    question: "Scenario Manager vs. Driver Table: when is a driver table better?",
    answers: [
      "When you need dynamic named switching and linked charts",
      "When you avoid documentation",
      "When you prefer many separate files",
      "When you want no trace of assumptions"
    ],
    explanation: "Driver tables integrate cleanly with formulas, KPIs, and visuals for live dashboards."
  },
  {
    id: "u06l06-assess-5",
    question: "Best formula to avoid #N/A on missing scenario names?",
    answers: [
      "IFNA(XLOOKUP(...), 'Scenario not found')",
      "SUM(XLOOKUP(...))",
      "AVERAGEIF(Table[Scenario], ...)",
      "LEFT(XLOOKUP(...), 3)"
    ],
    explanation: "IFNA/IFERROR wraps the lookup and returns a friendly message instead of an error."
  },
  {
    id: "u06l06-assess-6",
    question: "Which KPI set is most decision-ready for pricing?",
    answers: [
      "Unit margin, break-even units, runway months",
      "Total rows, number of tabs, cell colors",
      "Days since last save, file size, sheet count",
      "Average character count in labels"
    ],
    explanation: "These KPIs tie directly to pricing strategy and risk."
  },
  {
    id: "u06l06-assess-7",
    question: "In an investor Q&A, what should you show first?",
    answers: [
      "Scenario toggle → KPIs → short recommendation",
      "Raw data dump",
      "VBA editor",
      "Email thread with your team"
    ],
    explanation: "Lead with clarity: scenario, impacts, and a concise call."
  },
  {
    id: "u06l06-assess-8",
    question: "Which change most improves auditability?",
    answers: [
      "Comments that explain driver-to-output links",
      "Hidden sheets with secret logic",
      "Merged cells around every chart",
      "Copying values over formulas"
    ],
    explanation: "Clear documentation helps others trace and trust your work."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit06Data} 
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
                description="Show your understanding of switching, validation, visuals, and decision framing."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
              />

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <AlignLeft className="h-5 w-5" />
                    What ‘Investor-Ready’ Looks Like
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="list-disc list-inside space-y-1 text-blue-900">
                    <li>Clarity: One-screen view with clean labels and readable charts.</li>
                    <li>Reliability: Exact-match lookups, validation messages, stable references.</li>
                    <li>Auditability: Documented driver → output → chart links.</li>
                    <li>Action: KPIs connected to a short, specific recommendation.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Career Tie: Analyst/Consultant Workflow
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-left text-emerald-900">
                  <p>
                    Professionals turn scenarios → insights → recommendations. Your dashboard should let a
                    partner ask “What if?” and get a trustworthy answer in seconds.
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

