import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  {
    id: "a1",
    question: "Which formula best prevents errors when an EmployeeID is missing?",
    answers: [
      '=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate], "Missing ID")',
      '=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate])',
      '=VLOOKUP([@EmployeeID], Emp, 3, TRUE)',
      '=INDEX(Emp[PayRate], MATCH([@EmployeeID], Emp[EmployeeID], 1))'
    ],
    explanation: "Use if_not_found to keep summaries stable and surface issues." 
  },
  {
    id: "a2",
    question: "Overtime at 1.5x starts after 40 hours. Which approach scales best?",
    answers: [
      'SUMPRODUCT with conditions for base and overtime tiers',
      'Nested IFs with many parentheses',
      'Manual calculation in a hidden sheet',
      'Copy‑paste overtime rows for each employee'
    ],
    explanation: "SUMPRODUCT handles tier math clearly and adapts to new rows."
  },
  {
    id: "a3",
    question: "Which validation rule is most critical for preventing silent payroll errors?",
    answers: [
      'Block negative hours and require EmployeeID',
      'Add a company logo',
      'Hide helper columns',
      'Turn off gridlines'
    ],
    explanation: "Bad inputs cause wrong pay. Guard rails protect people and cash."
  },
  {
    id: "a4",
    question: "Your summary shows #N/A in Net Pay after adding new staff. First check?",
    answers: [
      'Look for missing IDs or unmapped pay codes',
      'Delete and rebuild the sheet',
      'Switch to manual calculation mode',
      'Email the file to a friend'
    ],
    explanation: "Missing keys break lookups. Fix the data, not the math first."
  },
  {
    id: "a5",
    question: "Why round taxes with ROUND( ,2)?",
    answers: [
      'Prevents penny drift and makes totals tie to bank',
      'It makes formulas shorter',
      'It hides #DIV/0!',
      'It speeds up calculation time only'
    ],
    explanation: "Banks and paychecks use cents; rounding ensures reconciliation."
  },
  {
    id: "a6",
    question: "Which summary best convinces investors your payroll is reliable?",
    answers: [
      'Header with audit flags + totals by PayDate',
      'Raw data dump of every row',
      'Screenshot of formulas',
      'A colorful theme without checks'
    ],
    explanation: "Surface problems up front and show accurate totals tied to dates."
  },
  {
    id: "a7",
    question: "To switch pay frequency logic cleanly, use:",
    answers: [
      'SWITCH with a control cell',
      'Many nested IFs and manual edits',
      'Separate files for each frequency',
      'Hidden sheet with hard‑coded numbers'
    ],
    explanation: "SWITCH keeps logic readable and easy to audit."
  },
  {
    id: "a8",
    question: "A PayDate is 90 days old in the active register. Which response is most professional?",
    answers: [
      'Flag as stale date and investigate timing',
      'Ignore it and continue',
      'Delete the row to hide it',
      'Email the bank with no context'
    ],
    explanation: "Aging checks help find timing issues that affect cash flow."
  },
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit05Data}
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
            <h1 className="text-3xl font-bold text-gray-900">Payroll Automation: Professional Mastery Assessment</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate both technical accuracy and business judgment. Aim for investor‑ready standards:
              clear logic, strong validation, and reliable summaries.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ComprehensionCheck
            title="Mastery Check"
            description="8 questions on safe lookups, overtime, validation, and investor communication."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Performance Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-blue-900">
              <ul className="list-disc list-inside">
                <li>Investor‑ready: Accurate, documented, and validated; audit flags visible</li>
                <li>Proficient: Mostly correct; minor gaps in validation or documentation</li>
                <li>Developing: Fragile formulas; hidden errors; unclear communication</li>
              </ul>
              <p className="mt-2 text-sm">Career link: Analysts and consultants maintain reliable payroll models, communicate risk clearly, and protect cash flow.</p>
            </CardContent>
          </Card>
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

