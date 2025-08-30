import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[4];

const assessmentQuestions = [
  {
    id: "u08l05-assess-1",
    question: "What must the top-left cell of a two-variable Data Table contain?",
    answers: [
      "A reference to the output cell",
      "The row input value",
      "The column input value",
      "Any number (it’s ignored)"
    ],
    explanation: "The corner cell references the single result you want the table to fill for each input pair."
  },
  {
    id: "u08l05-assess-2",
    question: "Which formula best switches scenarios by name and prevents #N/A errors?",
    answers: [
      "IFNA(XLOOKUP(Scenario, DriversTbl[Scenario], DriversTbl[@Growth_Rate], 0), 0)",
      "VLOOKUP(Scenario, DriversTbl, 2)",
      "INDEX(DriversTbl[Growth_Rate], 2)",
      "MATCH(Scenario, DriversTbl[Scenario], 1)"
    ],
    explanation: "Use exact match with XLOOKUP and wrap in IFNA (or IFERROR) for resilience."
  },
  {
    id: "u08l05-assess-3",
    question: "Why use structured references (Table[Column]) in a three-statement model?",
    answers: [
      "They expand automatically and reduce broken ranges",
      "They calculate faster than normal ranges",
      "They format numbers automatically",
      "They hide sheets from viewers"
    ],
    explanation: "Structured refs keep formulas stable when rows are added or data grows."
  },
  {
    id: "u08l05-assess-4",
    question: "Your sensitivity grid shows Net Income rising while Cash falls. What’s a likely reason?",
    answers: [
      "Timing differences like receivables or inventory",
      "A Data Table bug always reverses signs",
      "The profit formula is wrong by definition",
      "Cash and profit are always identical"
    ],
    explanation: "Profit and cash differ due to working capital and non-cash items."
  },
  {
    id: "u08l05-assess-5",
    question: "Which validation is most critical before an investor demo?",
    answers: [
      "Stale AsOfDate older than 90 days",
      "Cell background colors",
      "Merged heading cells",
      "Tab name capitalization"
    ],
    explanation: "Stale dates and out-of-range inputs undermine credibility; flag them clearly."
  },
  {
    id: "u08l05-assess-6",
    question: "For a Data Table, where do you link the row and column input cells?",
    answers: [
      "In the What‑If Analysis dialog for the table range",
      "In the Name Manager",
      "Inside the output formula",
      "Anywhere on the sheet, it doesn’t matter"
    ],
    explanation: "Use the What‑If Analysis &gt; Data Table dialog to set Row input cell and Column input cell."
  },
  {
    id: "u08l05-assess-7",
    question: "Which change most improves auditability?",
    answers: [
      "Add named ranges for key drivers and label units",
      "Hide all helper columns",
      "Color cells randomly",
      "Replace formulas with values"
    ],
    explanation: "Named ranges and labels help reviewers follow logic without digging through coordinates."
  },
  {
    id: "u08l05-assess-8",
    question: "A new driver row is added to DriversTbl. Your model breaks. What likely caused it?",
    answers: [
      "Hard‑coded ranges instead of table references",
      "Too many named ranges",
      "Using IFNA",
      "Using EXACT() in a formula"
    ],
    explanation: "Avoid fixed ranges; table references expand with new rows and keep links stable."
  },
  {
    id: "u08l05-assess-9",
    question: "What should an executive summary include?",
    answers: [
      "Key sensitivity drivers, thresholds, and recommended actions",
      "All raw formulas for each sheet",
      "Full monthly ledger details",
      "A list of keyboard shortcuts"
    ],
    explanation: "Investors want the story: where risk concentrates and what decisions follow."
  },
  {
    id: "u08l05-assess-10",
    question: "Which approach reduces fragile links most?",
    answers: [
      "Group inputs on an Inputs sheet and reference them consistently",
      "Scatter inputs across many sheets for convenience",
      "Use hidden constants",
      "Replace XLOOKUP with manual edits"
    ],
    explanation: "Centralized inputs + consistent references make models easier to maintain and trust."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-yellow-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    Advanced Automation: Professional Mastery
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800 mb-4">
                    Complete the mastery check. Aim for investor‑ready: strong validation, robust formulas, and clear communication of results.
                  </p>
                </CardContent>
              </Card>

              <ComprehensionCheck
                title="Investor‑Ready Automation Assessment"
                description="Technical knowledge + applied business judgment."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
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
