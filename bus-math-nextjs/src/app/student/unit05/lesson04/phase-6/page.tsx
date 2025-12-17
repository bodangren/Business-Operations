import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowRight, Trophy } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[5]

const reflectionPrompts = [
  {
    id: "u5l4-courage",
    category: "courage" as const,
    prompt: "Which part of linking the EmployeeList to the GrossPayRegister stretched you the most (e.g., XLOOKUP syntax, structured references, IF logic)? How will you keep your cool if a lookup breaks during client prep?",
    placeholder: "Example: I froze when my return array referenced the wrong column..."
  },
  {
    id: "u5l4-adaptability",
    category: "adaptability" as const,
    prompt: "Describe how you will adapt the workbook when Sarah hires in a brand-new department or needs to model seasonal workers.",
    placeholder: "Example: I’ll add a Department dropdown to EmployeeList and refresh the pivot..."
  },
  {
    id: "u5l4-persistence",
    category: "persistence" as const,
    prompt: "List the checkpoints you will follow before Lesson 05 (e.g., verify gross totals, refresh the pivot, capture screenshots).",
    placeholder: "Example: Before tomorrow I will rerun the SUMIF totals..."
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🎯 Phase 6: Wrap & Reflect</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">Your Payroll Control Center Is Live</h2>
                <p className="text-lg leading-relaxed">
                  Today you promoted the roster to a table, linked the GrossPayRegister with XLOOKUP, reused a single IF-based formula for every employee, and turned the results into visuals that leaders can read in seconds. That is a giant leap from the single-employee calculator you built in Lesson 03.
                </p>
              </div>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    What’s Inside Your Workbook Now
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Linked EmployeeList + GrossPayRegister tables</li>
                    <li>Reusable Gross Pay formula covering hourly, salary, and commission</li>
                    <li>SUMIF summary block plus a clustered bar chart</li>
                    <li>Pivot table showing gross payroll by department</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Preview of Lesson 05 & 06
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Lesson 05:</strong> Pull taxable wages from the GrossPayRegister and layer on federal/state withholdings plus employer taxes.</li>
                    <li><strong>Lesson 06:</strong> Feed the register from a scheduling sheet so hours update automatically.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Final To-Do List
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Save the workbook and label it `Unit05-Lesson04-GrossPay-Lastname.xlsx`.</li>
                    <li>Export a PDF or screenshot showing the register + summary block.</li>
                    <li>Write one insight from your pivot table to share tomorrow.</li>
                  </ul>
                </CardContent>
              </Card>

              <ReflectionJournal unitTitle="Unit 5 Lesson 4 – Gross Pay Register" prompts={reflectionPrompts} />

              <Alert className="border-indigo-200 bg-indigo-50">
                <AlertDescription className="text-indigo-800">
                  The more disciplined you are with source tables now, the easier it will be to trust your deduction math in Lesson 05. Keep the file handy and be ready to demonstrate your bar chart and pivot table at the start of next class.
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
