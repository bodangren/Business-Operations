import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Award } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[4]

const assessmentQuestions = [
  {
    id: "assessment-employee",
    question: "Why is the EmployeeList sheet considered the \"single source of truth\"?",
    answers: [
      "Because XLOOKUP pulls every field from it so you never retype pay data",
      "Because it automatically calculates taxes",
      "Because it stores pivot tables",
      "Because it replaces the GrossPayRegister"
    ],
    explanation: "All downstream formulas reference the EmployeeList table, so editing it updates the entire workbook."
  },
  {
    id: "assessment-if",
    question: "What advantage do you get by adding the hourly, salary, and commission IF statements together inside one Gross Pay cell?",
    answers: [
      "Every employee can share the same formula because unused branches evaluate to zero",
      "Hourly workers receive triple pay",
      "Commission workers are excluded",
      "Salary employees can delete their inputs"
    ],
    explanation: "Stacking the IF blocks keeps the register consistent and reduces the chance of broken formulas."
  },
  {
    id: "assessment-sumif",
    question: "When should you use SUMIF versus a pivot table?",
    answers: [
      "SUMIF for a quick summary block; pivot tables for interactive totals like department views",
      "Always use pivot tables for every calculation",
      "SUMIF is only for text",
      "They are interchangeable with no difference"
    ],
    explanation: "SUMIF drives the static summary while the pivot handles ad hoc slices such as departments or locations."
  },
  {
    id: "assessment-xlookup",
    question: "Which XLOOKUP argument references the column that comes back into the GrossPayRegister?",
    answers: [
      "Return array (e.g., tblEmployees[Department])",
      "Lookup value",
      "If not found",
      "Match mode"
    ],
    explanation: "The third argument—return array—tells Excel which EmployeeList column to bring into the register."
  },
  {
    id: "assessment-chart",
    question: "Why do we include a clustered bar chart with the summary block?",
    answers: [
      "It lets Sarah explain payroll mix to clients in seconds",
      "It calculates taxes",
      "It is required for Excel to save",
      "It replaces the pivot table"
    ],
    explanation: "Visuals make it easier for stakeholders to compare hourly vs. salary vs. commission totals."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">📊 Phase 5: Understanding Check</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-yellow-900 mb-3">Defend Your Workbook Choices</h2>
                <p className="text-lg leading-relaxed">
                  These questions focus on architecture, not keystrokes. By the time you finish this check you should be able to justify why the EmployeeList exists, how the gross-pay formula works, and how the summary visuals support the business story.
                </p>
              </div>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Success Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Score 4/5 or higher without looking back at your workbook.</li>
                    <li>If you miss a question, note the concept—you’ll revisit it before Lesson 05.</li>
                    <li>Be ready to show the summary block, chart, and pivot table in class tomorrow.</li>
                  </ul>
                </CardContent>
              </Card>

              <ComprehensionCheck
                questions={assessmentQuestions}
                allowRetry={true}
                showExplanations={true}
                title="Gross Pay Register Knowledge Check"
                description="XLOOKUP logic, additive IF statements, and analysis visuals"
              />

              <Alert className="border-yellow-200 bg-yellow-50">
                <BarChart3 className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <strong>Heads-up:</strong> Keep your workbook open after the quiz. We’ll reference the Gross Pay column again in Phase 6.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}
