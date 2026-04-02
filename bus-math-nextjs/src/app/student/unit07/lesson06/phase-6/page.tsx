import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

export default function Unit07Lesson06Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🔔 Phase 6: Closing</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Dynamic Method Selection: What You Can Now Do</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              You built a workbook that switches scenario and method with two controls, updates outputs and KPI tiles automatically, and surfaces checks before recommendations. These habits separate a good spreadsheet from an investor-ready system.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Why This Matters</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-3">
              <p>
                Before this lesson, you could calculate FIFO, LIFO, and Weighted Average by hand. Now you can:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Switch between methods instantly with a dropdown instead of rebuilding formulas</li>
                <li>Compare turnover and days-on-hand across methods to see operational impact</li>
                <li>Defend a method recommendation with specific workbook evidence</li>
                <li>Audit selector lookups and checks before discussing decisions</li>
              </ul>
              <p className="mt-2">
                Clear KPIs and stable charts help decision-makers see margin, cash, and risk instantly. Your validation and documentation show that the model will not fall apart as data grows. That is the difference between a good spreadsheet and an investor-ready system.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Preview: Lesson 07 — Project Rehearsal</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-3">
              <p>
                In the next lesson, every student in the class will work with the <strong>same shared dataset</strong> to rehearse the exact project workflow you will use in Lessons 08-10. Here is what changes:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Same workbook structure:</strong> The sheet layout you built today (Inputs, Drivers, MethodSummary, Outputs, KPI, Checks, Dashboard) carries forward</li>
                <li><strong>Teacher-guided:</strong> You will follow the teacher model step by step instead of building independently</li>
                <li><strong>Shared data:</strong> Everyone uses the same numbers so the class can compare reasoning quality directly</li>
                <li><strong>Peer audit:</strong> You will review a classmate's workbook against a Definition of Done checklist</li>
                <li><strong>Transfer check:</strong> You will identify which structures and habits you must carry into the real project</li>
              </ul>
              <p className="text-sm font-medium mt-2">
                What to bring to Lesson 07: your completed workbook from today, your method defense memo, and any questions about the scenario-switching logic.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">What to Carry Forward</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 space-y-2">
              <p className="font-medium">Before you leave, confirm you can answer these:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>How does a scenario driver table make a workbook more flexible?</li>
                <li>Why use a composite key for scenario+method lookups?</li>
                <li>What does inventory turnover tell you that COGS alone does not?</li>
                <li>Why should checks sit above the KPI tiles, not below them?</li>
                <li>Which method would you recommend for a business with perishable goods? Why?</li>
              </ol>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Unit 7 — Dynamic Method Selection and Turnover Reflection" />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
