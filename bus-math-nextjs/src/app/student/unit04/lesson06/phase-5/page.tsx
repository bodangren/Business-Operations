import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit04Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  {
    id: "u04l06-assess-1",
    question: "Best pattern for scenario switching by name?",
    answers: [
      "Driver table + XLOOKUP exact‑match with IFNA",
      "Three separate scenario sheets with copied formulas",
      "HLOOKUP with approximate match",
      "Manual retyping of assumptions"
    ],
    explanation: "Exact‑match prevents silent wrong matches; IFNA handles missing names safely."
  },
  {
    id: "u04l06-assess-2",
    question: "Chart ranges break when rows are added. What fixes it?",
    answers: [
      "Use Table[Column] structured references feeding outputs",
      "Extend A2:A50 manually each week",
      "Paste values onto a chart sheet",
      "Turn on iterative calculation"
    ],
    explanation: "Structured references auto‑expand with tables, keeping visuals stable."
  },
  {
    id: "u04l06-assess-3",
    question: "A scenario name is misspelled. What should the model show?",
    answers: [
      "A clear message via IFNA/IFERROR and a validation flag",
      "Zeros everywhere with no explanation",
      "A random scenario’s numbers",
      "A blank dashboard"
    ],
    explanation: "Graceful errors protect trust and guide fixes."
  },
  {
    id: "u04l06-assess-4",
    question: "Which KPI set supports an investor decision for the café?",
    answers: [
      "Runway months, gross margin, daily traffic, cash coverage",
      "Font size, color theme, number of tabs",
      "Sheet protection, hidden rows, merged cells",
      "Total characters in formulas"
    ],
    explanation: "KPI thresholds connect model outputs to business choices."
  },
  {
    id: "u04l06-assess-5",
    question: "What is a sign of fragile integration?",
    answers: [
      "Charts pointing to static ranges like $A$2:$A$50",
      "Inputs documented next to assumptions",
      "Validation panel showing stale dates",
      "Executive summary linked to outputs"
    ],
    explanation: "Static ranges break as data grows."
  },
  {
    id: "u04l06-assess-6",
    question: "Why use exact match instead of approximate match?",
    answers: [
      "Prevents wrong scenario matches and silent errors",
      "It recalculates faster in all cases",
      "It reduces the number of columns",
      "It makes charts look nicer"
    ],
    explanation: "Decision‑ready dashboards need correctness first."
  },
  {
    id: "u04l06-assess-7",
    question: "Which statement defines “investor‑ready” here?",
    answers: [
      "Clear, reliable, auditable outputs with visible validation",
      "A single sheet with large fonts",
      "No formulas, values only",
      "All assumptions hidden from view"
    ],
    explanation: "Clarity, reliability, and auditability build trust."
  },
  {
    id: "u04l06-assess-8",
    question: "Which fallback communicates best during live Q&A?",
    answers: [
      "IFERROR(calc, \"Check Inputs\") next to a red validation badge",
      "#N/A errors across the page",
      "Cell comments only",
      "Hidden sheets with notes"
    ],
    explanation: "Students should show issues clearly and guide next steps."
  },
  {
    id: "u04l06-assess-9",
    question: "When is INDEX‑MATCH preferred?",
    answers: [
      "When XLOOKUP isn’t available or compatibility is required",
      "When approximate match is desired",
      "When there is only one scenario",
      "When you need to merge cells"
    ],
    explanation: "INDEX‑MATCH is the classic exact‑match combo."
  },
  {
    id: "u04l06-assess-10",
    question: "Best way to prove chart stability?",
    answers: [
      "Add rows to the table and watch visuals update",
      "Screenshot the chart",
      "Describe it with text only",
      "Hide all the source data"
    ],
    explanation: "Demonstrating dynamic updates shows real readiness."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integration & Dashboard Mastery Check</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Show technical skill and business judgment. Aim for investor‑ready standards: clarity, reliability, and auditability.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Integration Mastery"
            description="Answer to confirm scenario control, linking patterns, and KPI decisions."
            questions={assessmentQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

