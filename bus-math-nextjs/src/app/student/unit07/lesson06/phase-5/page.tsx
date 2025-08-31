import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  {
    id: "u07l06-assess-1",
    question: "Best way to switch scenarios by name?",
    answers: [
      "XLOOKUP with exact match and IFNA",
      "VLOOKUP with approximate match",
      "Multiple nested IFs across tabs",
      "Manual copy/paste between sheets"
    ],
    explanation: "Exact‑match lookup with IFNA avoids silent mis‑matches and shows missing scenarios clearly."
  },
  {
    id: "u07l06-assess-2",
    question: "Charts keep breaking when rows grow. What fixes it?",
    answers: [
      "Structured references from Tables",
      "Named ranges with fixed endpoints",
      "Static ranges on a separate chart sheet",
      "Copying totals into the chart cells"
    ],
    explanation: "Tables auto‑expand and keep visuals stable as data grows."
  },
  {
    id: "u07l06-assess-3",
    question: "What does IFERROR vs IFNA do in this context?",
    answers: [
      "IFNA handles missing lookups; IFERROR catches any other calculation issue",
      "Both do the same thing in all cases",
      "IFERROR only works with charts",
      "IFNA formats numbers as percent"
    ],
    explanation: "Use IFNA for lookup not found; wrap other risky calcs with IFERROR for friendly messages."
  },
  {
    id: "u07l06-assess-4",
    question: "Which KPI set best supports investor decisions for inventory?",
    answers: [
      "Gross margin %, turnover, days on hand, and stockout risk",
      "Only total units sold per month",
      "Random percentages without thresholds",
      "Aesthetic color tiles with no numbers"
    ],
    explanation: "Decision‑ready KPIs tie to thresholds and cash impact."
  },
  {
    id: "u07l06-assess-5",
    question: "What validation rule is most important for data integrity?",
    answers: [
      "Block negative/zero UnitCost and missing SKU before totals",
      "Format headings in bold",
      "Hide helper columns",
      "Use merged cells for labels"
    ],
    explanation: "Prevent bad inputs from flowing to outputs and visuals."
  },
  {
    id: "u07l06-assess-6",
    question: "INDEX‑MATCH vs XLOOKUP — when to pick INDEX‑MATCH?",
    answers: [
      "When XLOOKUP isn’t available but exact‑match switching is required",
      "When approximate match is preferred",
      "When you want volatile calculations",
      "When you need manual scenario toggles"
    ],
    explanation: "INDEX‑MATCH is a reliable alternative that supports exact‑match lookups."
  },
  {
    id: "u07l06-assess-7",
    question: "Executive summary should primarily…",
    answers: [
      "Translate KPI results into a clear recommendation",
      "List every formula used in the model",
      "Hide warnings to look clean",
      "Show screenshots from unrelated sheets"
    ],
    explanation: "Investors need decisions with confidence, not formula dumps."
  },
  {
    id: "u07l06-assess-8",
    question: "Which input risk most often causes demo failure?",
    answers: [
      "Stale AsOfDate and broken chart links",
      "Too many comments",
      "Short sheet names",
      "Using bold fonts for totals"
    ],
    explanation: "Stale dates and static ranges break trust and visuals."
  }
]

export default function Unit07Lesson06Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integration & Dashboard Mastery Check</h1>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Inventory Dashboard — Concepts and Judgment"
            description="Answer to show technical accuracy and business insight."
            questions={assessmentQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

