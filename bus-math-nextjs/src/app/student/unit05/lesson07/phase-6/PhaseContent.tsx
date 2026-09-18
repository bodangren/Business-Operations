import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Users } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-indigo-100 text-indigo-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 6: Reflection & Project Handoff</Badge>
            <h2 className="text-3xl font-bold text-gray-900">What Stays, What Changes</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Today you practiced with the same data as everyone else. In Lessons 08–10, your team gets its own
              payroll dataset but uses the same workbook structure you practiced today.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                What You Learned Today
              </CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-3">
              <p>You now understand:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Why shared data lets the class compare audit findings directly</li>
                <li>How to trace a recommendation back to supporting evidence</li>
                <li>What a complete, submission-ready project workbook needs</li>
                <li>How to identify weak evidence vs. strong evidence</li>
                <li>What features must transfer to your team's independent work</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                What Changes in Lesson 08
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3">
              <p>In the group project (Lessons 08–10):</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Data changes:</strong> Each team receives its own payroll dataset</li>
                <li><strong>Scenario changes:</strong> Different business context, employee mix, timing</li>
                <li><strong>Structure stays:</strong> Same workbook tabs, same formulas, same checks</li>
                <li><strong>Your team owns it:</strong> Build independently, apply what you practiced today</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Project Kickoff in Lesson 08
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <p className="mb-3">Lesson 08 will start with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Each team receives a unique payroll dataset</li>
                <li>Team renames and saves the starter workbook</li>
                <li>Business scenario, constraints, and target outcome are explained</li>
                <li>Milestone 1 acceptance criteria are defined</li>
              </ul>
            </CardContent>
          </Card>

        </section>
      </div>

    </div>
  )
}
