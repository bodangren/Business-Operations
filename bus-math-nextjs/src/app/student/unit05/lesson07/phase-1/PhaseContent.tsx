import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Users, FileCheck } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-red-100 text-red-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 1: Rehearsal Purpose</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Why We're Rehearsing Before the Project</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Today's lesson is the final guided rehearsal before your group project. Every team uses the same
              teacher-provided workbook so we can compare audit findings together. You'll leave knowing exactly
              which structures and checks must carry into your independent work.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                This Is Rehearsal, Not the Real Project
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-red-900">
              <p>
                In <strong>Lessons 08–10</strong>, each team will receive its own payroll dataset and build an
                independent workbook. Today practices that exact structure with shared data so you can:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Compare audit findings with classmates</li>
                <li>Identify what makes evidence strong vs. weak</li>
                <li>Practice the Definition of Done before working independently</li>
                <li>Ask questions while the teacher guides the work</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                What Rehearsal Builds Toward
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-green-900">
              <p>By the end of today, you'll be able to answer:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>What does a complete project workbook need to contain?</li>
                <li>How do I trace the final recommendation back to evidence?</li>
                <li>What are the most important quality checks before submission?</li>
                <li>What parts of today's structure must my team recreate independently?</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" /> Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <p className="font-medium mb-2">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>What have you learned in Lessons 05–06 that you want to practice today?</li>
                <li>What questions do you still have about what the project needs?</li>
                <li>What's one thing you want to be sure your team includes in the real project?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
