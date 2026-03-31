import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, TrendingUp } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const comprehensionQuestions = [
  {
    id: "q1",
    question: "Sarah spends two full days every month-end running her close checklist by hand. If TechStart doubles its transaction volume next quarter, what is the most likely outcome?",
    answers: [
      "The close takes even longer and the risk of missed adjustments grows",
      "The close finishes faster because Sarah gets more practice",
      "Nothing changes—the checklist is the same length regardless of volume",
      "Excel automatically handles the extra transactions without any changes"
    ],
    explanation: "Manual processes do not scale. More transactions mean more rows to check, more adjustments to identify, and more chances to miss something. The time and error risk both grow with volume."
  },
  {
    id: "q2",
    question: "Which part of the month-end close is the best candidate for first automation?",
    answers: [
      "The repetitive sequence of running the same checklist steps in the same order every month",
      "Deciding which accounting principle applies to a new type of transaction",
      "Explaining the financial statements to an investor",
      "Choosing the company's fiscal year-end date"
    ],
    explanation: "Automation works best on repetitive, rule-based sequences. The month-end close checklist is the same six steps every month—exactly the kind of process a button-triggered flow can replace."
  },
  {
    id: "q3",
    question: "Sarah's investor asks why the financials are three days late again. What is the honest root cause?",
    answers: [
      "The close runs entirely by hand and one missed step forced a rework",
      "The internet was too slow to open the spreadsheet",
      "Investors do not need financial statements that quickly",
      "The chart of accounts was too small to find errors"
    ],
    explanation: "When every step is manual, a single missed adjustment means reopening closed accounts and redoing work. The root cause is the lack of an automated, verifiable close sequence."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson05Data} 
        phase={currentPhase}
        phases={lesson05Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              Phase 1: Tool Pressure
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Two Days to Close the Books
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah's manual close works for a small company—but it will not survive growth.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              In Lesson 4, you learned the complete six-step month-end close workflow. Sarah can do it by hand now. But "can do it" and "can do it fast and without mistakes" are two different things.
            </p>
          </div>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Sarah's April Close: The Breaking Point
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800">
                TechStart had a strong March. Revenue doubled. New clients signed on. Sarah should be celebrating. Instead, she is staring at her spreadsheet at 11 PM on day two of the close.
              </p>
              <div className="bg-red-100 p-4 rounded border border-red-300">
                <h5 className="font-semibold text-red-900 mb-2">What went wrong:</h5>
                <ul className="text-sm text-red-800 space-y-1 ml-4 list-disc">
                  <li>Twice as many transactions to review for adjustments</li>
                  <li>She missed an accrued revenue entry on a new client</li>
                  <li>The financial statements did not balance, so she had to retrace all six steps</li>
                  <li>Her investor meeting is tomorrow morning and the numbers are not ready</li>
                </ul>
              </div>
              <p className="text-red-800">
                The problem is not that Sarah does not know accounting. The problem is that <strong>every single step depends on her remembering to do it in the right order, with no safety net</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                What Automation Changes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800">
                A well-built automation layer does not replace Sarah's accounting knowledge. It replaces the <strong>risk of forgetting a step</strong>. Instead of manually walking through six steps every month, Sarah clicks one button and the workbook:
              </p>
              <ul className="text-sm text-green-800 space-y-1 ml-4 list-disc">
                <li>Runs the adjusting entry calculations in order</li>
                <li>Verifies debits equal credits after each step</li>
                <li>Flags any accounts that need manual review</li>
                <li>Produces the adjusted trial balance automatically</li>
              </ul>
              <div className="bg-green-100 p-4 rounded border border-green-300">
                <p className="text-sm text-green-700">
                  <strong>Today's target:</strong> Build the first automation layer—named ranges, input areas, and a button-triggered close flow—that replaces the most painful manual step.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                What This Lesson Will NOT Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-amber-800">
                This lesson does not build the full wizard. It does not add dashboards, scenario switching, or investor presentations. Those come later.
              </p>
              <p className="text-amber-800">
                Today you build <strong>one thing well</strong>: a clickable flow that runs the close checklist in order and proves it worked. That single automation layer is the foundation for everything in Lesson 6.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Phase 1 Understanding Check"
            description="Confirm you understand why automation is necessary before building it."
            questions={comprehensionQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
