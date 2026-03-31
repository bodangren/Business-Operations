import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ShieldCheck, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

const comprehensionQuestions = [
  {
    id: "q1",
    question: "Sarah's automation from Lesson 5 works—but she types adjustment amounts directly into cells with formulas. What is the biggest risk?",
    answers: [
      "She can accidentally overwrite a formula and the automation will produce wrong numbers without warning",
      "The workbook will become too large to email",
      "Excel will refuse to save the file",
      "The button will disappear from the sheet"
    ],
    explanation: "Without validation and separated input areas, a user can overwrite a formula and not realize it. The automation will still run—but it will produce wrong results. Validation rules prevent this."
  },
  {
    id: "q2",
    question: "An accountant opens Sarah's workbook and asks: 'How do I know the close ran correctly?' What is the best answer?",
    answers: [
      "An audit panel shows the inputs used, the outputs produced, and a verification that debits equal credits",
      "The button is green, so it must have worked",
      "The file is saved as .xlsm, which means it is correct",
      "You have to check every formula by hand"
    ],
    explanation: "An audit panel provides visible, verifiable evidence that the automation ran correctly. It shows what went in, what came out, and whether the fundamental accounting checks passed."
  },
  {
    id: "q3",
    question: "Sarah wants to let users switch between March and April close data without editing formulas. What should she add?",
    answers: [
      "A dropdown or toggle cell that drives which input set the automation reads",
      "A new sheet for each month with manual copy-paste",
      "A different colored button for each month",
      "A macro that deletes the old data"
    ],
    explanation: "A user-facing control like a dropdown or toggle cell lets users change scenarios without touching formulas. The automation reads the selected scenario and pulls the right data automatically."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson06Data} 
        phase={currentPhase}
        phases={lesson06Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              Phase 1: Tool Pressure
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              It Runs—But Can Anyone Else Use It?
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah built the automation. Now she needs to make it usable, trustworthy, and professional.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              In Lesson 5, Sarah built a button that runs the close checklist. It works for her. But when her part-time bookkeeper tried to use it, three things went wrong:
            </p>
          </div>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                What Went Wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <h5 className="font-semibold text-red-900 mb-2">Problem 1: No Input Guards</h5>
                <p className="text-sm text-red-800">
                  The bookkeeper typed a negative number into the Supplies field. The automation ran without complaint and produced a negative expense. No validation rule caught the error.
                </p>
              </div>
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <h5 className="font-semibold text-red-900 mb-2">Problem 2: No Way to Switch Scenarios</h5>
                <p className="text-sm text-red-800">
                  When April arrived, the bookkeeper did not know which cells to change. There was no dropdown, no toggle, no clear instruction. She edited cells at random and broke the formulas.
                </p>
              </div>
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <h5 className="font-semibold text-red-900 mb-2">Problem 3: No Audit Trail</h5>
                <p className="text-sm text-red-800">
                  Sarah's accountant asked: "What inputs did you use? What changed from last month?" There was no record. The workbook produced numbers but could not explain them.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                What Polish Adds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800">
                A polished wizard interface is not about making things look pretty. It is about making the workbook <strong>usable by someone who did not build it</strong>. Today you will add:
              </p>
              <ul className="text-sm text-green-800 space-y-1 ml-4 list-disc">
                <li><strong>Validation rules</strong> that catch bad inputs before the button runs</li>
                <li><strong>User-facing controls</strong> (dropdowns, toggle cells) that let scenarios change without editing formulas</li>
                <li><strong>An audit panel</strong> that shows inputs, outputs, and verification results in one place</li>
              </ul>
              <div className="bg-green-100 p-4 rounded border border-green-300 mt-4">
                <p className="text-sm text-green-700">
                  <strong>Today's target:</strong> Transform the Lesson 5 automation into a polished, usable month-end tool that maintains GAAP accuracy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-2 font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>What makes a spreadsheet feel professional vs. amateur?</li>
                <li>If you handed your Lesson 5 workbook to a stranger, what would they struggle with?</li>
                <li>What visible proof would convince an accountant that your numbers are correct?</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Phase 1 Understanding Check"
            description="Confirm you understand why polish matters before building it."
            questions={comprehensionQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
