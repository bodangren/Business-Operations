import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Target, Users, MessageCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[0] // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "Why is Sarah replacing ten separate payroll tabs with one linked register?",
    answers: [
      "Because copying each employee into a new workbook before every quote wastes hours and introduces errors",
      "Because investors only like colorful spreadsheets",
      "Because hourly employees do not need records",
      "Because she wants to delete the employee list"
    ],
    explanation: "Sarah needs a single workbook that pulls every employee from one source so she can model gross payroll for new contracts without retyping data."
  },
  {
    id: "hook-2",
    question: "What problem does the Employee List sheet solve?",
    answers: [
      "It gives XLOOKUP a reliable table for names, roles, pay types, and rates",
      "It automatically withholds taxes",
      "It emails pay stubs to workers",
      "It replaces the need for schedules"
    ],
    explanation: "The Employee List becomes the single source of truth that every other sheet references, so lookups stay accurate even as the roster grows."
  },
  {
    id: "hook-3",
    question: "Why do we add hourly, salary, and commission formulas together inside one Gross Pay cell?",
    answers: [
      "The unused pay types evaluate to $0, so one additive formula works for every employee",
      "Excel requires three different cells",
      "Commission employees should be excluded",
      "Salary employees do not need formulas"
    ],
    explanation: "By letting each IF branch return either a real number or zero, we can stack the calculations inside one cell and reuse the formula across the table."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: One Register to Run Them All
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  When Payroll Lives in Ten Tabs
                </h2>
                <p className="text-lg leading-relaxed">
                  Sarah just landed a proposal to staff five café locations for a regional chain. The client asked a 
                  simple question: “If we add fourteen people next month, what will payroll cost me before taxes?” 
                  Sarah opened her laptop and felt the panic hit. Every employee lived in a separate sheet. Hourly 
                  staff were on the “Cafe Hours” tab, salaried leaders on another, and commission reps hiding inside 
                  a marketing workbook. Copying each name into a fresh calculator would take hours—and every copy/paste 
                  created a new chance for an expensive typo.
                </p>
                <p className="text-lg leading-relaxed">
                  Today you will build the tool Sarah wished she already had: an <strong>Employee List</strong> sheet that 
                  stores the truth once, a <strong>Gross Pay Register</strong> that pulls the right rate with XLOOKUP, 
                  and a single additive formula that calculates gross for every employee regardless of pay type. The 
                  deliverable ends with a SUMIF-driven summary, a bar chart investors can read in seconds, and a pivot 
                  table that shows payroll by department. This becomes the launchpad for Lesson 05 when we layer on 
                  withholdings.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200 my-6 space-y-3">
                <h3 className="font-semibold text-red-900 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Final Workbook Checklist
                </h3>
                <ul className="list-disc list-inside text-red-800 space-y-1">
                  <li>EmployeeList table: IDs, roles, pay types, departments.</li>
                  <li>GrossPayRegister table with XLOOKUP pulls for name, type, rate, salary, and commission fields.</li>
                  <li>One gross-pay formula per row that adds hourly, salary, and commission math (unused paths return $0).</li>
                  <li>Summary block using SUMIF + COUNTIF plus a clustered bar chart.</li>
                  <li>Pivot table showing total gross payroll by department.</li>
                </ul>
              </div>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-medium text-red-900">3-minute discussion:</p>
                      <ul className="list-disc list-inside text-red-800 space-y-1">
                        <li>What headaches do you notice when payroll data is scattered across tabs?</li>
                        <li>How does an Employee List sheet make XLOOKUP and IF formulas easier to maintain?</li>
                        <li>Where would a bar chart or pivot table help you defend payroll assumptions to a client?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-red-200 bg-red-50 my-6">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Mindset Check:</strong> We are not inventing random tabs. Every sheet you touch today has a 
                  job description. Keep the data normalized on the Employee List, use XLOOKUP instead of copy/paste, and 
                  focus on making the summary visuals investor-ready.
                </AlertDescription>
              </Alert>

              <div className="mt-8">
                <ComprehensionCheck
                  title="Why Consolidate Payroll Data?"
                  description="Confirm the reason we are building an Employee List + Gross Pay Register workflow."
                  questions={hookQuestions}
                  showExplanations={true}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter
        unit={unit05Data}
        lesson={lesson04Data}
        phase={currentPhase} 
        phases={lesson04Phases}
      />
    </div>
  )
}
