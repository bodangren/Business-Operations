import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  {
    id: "assessment-1",
    question: "What formula turns the WeeklySchedule grid into total hours for Employee MK02?",
    answers: [
      '=SUMIFS(tblHoursRaw[Hours], tblHoursRaw[EmployeeID], "MK02")',
      '=COUNTIF(tblSchedule, "MK02")',
      '=XLOOKUP("MK02", tblRoster[Name], tblRoster[HourlyRate])',
      '=AVERAGE(tblSchedule[Thu])'
    ],
    explanation:
      "SUMIFS filters the helper table by EmployeeID so you get the total hour count to feed the Hours & Gross sheet."
  },
  {
    id: "assessment-2",
    question: "If Leo (MK03) is scheduled every night for the 6p-close block, how many regular hours and overtime hours does he earn?",
    answers: [
      "28 regular hours and 0 overtime hours",
      "32 regular hours and 4 overtime hours",
      "40 regular hours and 8 overtime hours",
      "20 regular hours and 0 overtime hours"
    ],
    explanation:
      "Seven evening blocks × 4 hours = 28 total hours, which is below the 40-hour threshold, so no overtime."
  },
  {
    id: "assessment-3",
    question: "A conditional formatting rule highlights cell F3 (Thu 10a-2p) red. What should you check first?",
    answers: [
      "Whether the same EmployeeID already appears in column F",
      "If the workbook is saved",
      "If the roster has enough columns",
      "If SUMIFS is spelled correctly"
    ],
    explanation:
      "The duplicate-ID rule watches each day column. If the color turns red, two people with the same ID are booked that day."
  },
  {
    id: "assessment-4",
    question: "Why must the Hours & Gross sheet list Department totals as well as employee totals?",
    answers: [
      "Clients budget labor by department, and Lesson06’s cash forecast references those totals",
      "It helps you practice typing",
      "Departments are easier to color",
      "You cannot sort without them"
    ],
    explanation:
      "Department totals answer the owner’s question: which part of the store is burning cash? Lesson06 pivots use that data."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-slate-100">
      <PhaseHeader 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-rose-100 text-rose-900 text-lg px-4 py-2">
            ✅ Phase 5: Assessment
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Prove Your Schedule-to-Pay Workflow Works</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Answer the questions below using your own workbook as evidence. Be ready to show the exact cell, formula, or
            conditional formatting rule that backs up your answer.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ComprehensionCheck
            title="Schedule Integrity Check"
            description="Use your roster, schedule, and hours sheets to justify each answer."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Evidence to Capture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Screenshot of your WeeklySchedule grid with duplicate-ID highlighting turned on.</li>
                <li>Copy of the SUMIFS formula that totals hours for one employee.</li>
                <li>Gross pay calculation showing regular vs overtime hours for at least one worker.</li>
              </ul>
              <p>Upload these artifacts to your class notebook or LMS so feedback is fast.</p>
            </CardContent>
          </Card>
        </section>

        <Alert className="border-amber-200 bg-amber-50 max-w-4xl mx-auto">
          <AlertDescription className="text-amber-900 text-sm">
            <strong>Need a recheck?</strong> Trade devices with a partner and have them try to break your workbook. If they find
            a duplicate shift or an overtime miscalculation, fix it now so Lesson06 can rely on clean data.
          </AlertDescription>
        </Alert>
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
