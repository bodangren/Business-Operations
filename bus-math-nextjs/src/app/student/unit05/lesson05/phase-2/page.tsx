import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabSentences = [
  {
    id: "s1",
    text: "Use {blank} to safely map EmployeeID → PayRate with a fallback when an ID is missing.",
    answer: "XLOOKUP",
    hint: "Modern replacement for VLOOKUP",
    alternativeAnswers: []
  },
  {
    id: "s2",
    text: "Add the {blank} argument in XLOOKUP to prevent #N/A and keep reports stable.",
    answer: "if_not_found",
    hint: "Fourth argument",
    alternativeAnswers: ["if not found", "IF_NOT_FOUND"]
  },
  {
    id: "s3",
    text: "Use {blank} to compute overtime tiers without messy nested IFs.",
    answer: "SUMPRODUCT",
    hint: "Array math across conditions",
    alternativeAnswers: []
  },
  {
    id: "s4",
    text: "Write Table[Column] instead of A2:A200 by using {blank}.",
    answer: "structured references",
    hint: "Expands automatically with the table",
    alternativeAnswers: ["structured reference", "structured table references"]
  },
  {
    id: "s5",
    text: "Create dropdowns for State or Pay Frequency with {blank}.",
    answer: "Data Validation",
    hint: "Limits bad inputs",
    alternativeAnswers: ["data validation"]
  },
  {
    id: "s6",
    text: "Round taxes and net pay using {blank} to avoid penny drift.",
    answer: "ROUND",
    hint: "ROUND(value, 2)",
    alternativeAnswers: ["ROUND()"]
  },
  {
    id: "s7",
    text: "Switch between Weekly, Biweekly, or Monthly logic using {blank} with a control cell.",
    answer: "SWITCH",
    hint: "Cleaner than many IFs",
    alternativeAnswers: ["CHOOSE"]
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit05Data}
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
            <h1 className="text-3xl font-bold text-gray-900">Payroll Automation: Professional‑Grade Patterns</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You will build a payroll engine that remains accurate as TechStart grows. We use structured
              references, safe lookups, and clear validation. This earns investor trust because errors become
              visible and fixable.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Key Patterns and Gotchas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-900">
              <ul className="list-disc list-inside space-y-1">
                <li>Use tables: <span className="font-mono">Emp[EmployeeID]</span> and <span className="font-mono">Payroll[Hours]</span> auto‑expand.</li>
                <li>Safe lookup: <span className="font-mono">=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate], "Missing ID")</span>.</li>
                <li>Overtime math: clear <span className="font-mono">SUMPRODUCT</span> conditions avoid fragile nested IFs.</li>
                <li>Validation: dropdowns for State and Pay Frequency; block negative hours; require EmployeeID.</li>
                <li>Rounding: use <span className="font-mono">ROUND(x,2)</span> for taxes and net pay to stop penny drift.</li>
                <li>Docs: label inputs, show calculation notes, and display audit flags in the header.</li>
              </ul>
              <div className="bg-white border border-green-200 p-3 rounded font-mono text-sm">
                =LET(
                  id, [@EmployeeID],
                  rate, XLOOKUP(id, Emp[EmployeeID], Emp[PayRate], "Missing ID"),
                  hrs, [@Hours],
                  base, MIN(40, hrs)*rate,
                  ot, MAX(0, hrs-40)*rate*1.5,
                  gross, base+ot,
                  ROUND(gross, 2)
                )
              </div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded text-blue-900">
                <p className="font-semibold mb-1">Why This Matters</p>
                <p>Accurate, well‑documented payroll protects cash flow. Investors want to see models that
                stay correct when new rows or rules appear. Your work shows professional standards.</p>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            title="Advanced Vocabulary Check"
            description="Fill the blanks to reinforce key payroll automation terms."
            sentences={vocabSentences as any}
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

