import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowRight, BookOpen } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase6() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 6)!

  const reflectionPrompts = [
    {
      id: "confidence",
      category: "courage" as const,
      prompt: "Rate your confidence (1-5) on identifying the four adjustment types. Which type feels least clear, and what would help you feel more confident?",
      placeholder: "Think about which scenarios were easiest and hardest during practice..."
    },
    {
      id: "business-connection",
      category: "adaptability" as const,
      prompt: "Why do adjustments matter for someone reading Sarah's financial statements (an investor, a lender, or Sarah herself)? What bad decision could someone make if adjustments were missing?",
      placeholder: "Think about what happens when revenue or expenses are in the wrong period..."
    },
    {
      id: "method-signal",
      category: "persistence" as const,
      prompt: "What signal tells you which adjustment type to use? Write the decision rule you will use next time you see a month-end scenario.",
      placeholder: "Start with: 'First I ask whether cash moved before or after the work...'"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              What You Built Today
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              You started with a timing problem: cash moves on its own schedule, work
              happens on a different schedule. You learned the four adjustment types that
              GAAP uses to fix this mismatch. You practiced identifying and recording
              adjustments until the procedure felt reliable.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <p className="font-bold text-green-900 mb-2">Key Takeaway:</p>
              <p className="text-green-800">
                Adjusting entries never involve Cash. They only reclassify amounts already
                on the books or add amounts that should be there. They always touch at
                least one income statement account and one balance sheet account.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  What You Mastered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-blue-700">
                  <li>Accrued revenue: work done, cash not yet received</li>
                  <li>Accrued expense: cost incurred, cash not yet paid</li>
                  <li>Deferred revenue: cash received before work is done</li>
                  <li>Deferred expense: cash paid before cost is incurred</li>
                  <li>How each adjustment changes the income statement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Sarah's Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-700 mb-3">
                  Sarah now understands exactly which adjustments her month-end close
                  requires every month. These four types are the core logic that her
                  Month-End Wizard must automate.
                </p>
                <p className="text-xs text-purple-600 italic">
                  "I can see the pattern now. Every month-end has these same four
                  situations. If I can teach the spreadsheet to spot them, the close
                  gets so much faster."
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Coming Next
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 mb-2">
                  <strong>Lesson 3: Closing Entries</strong>
                </p>
                <p className="text-xs text-orange-600">
                  After adjustments are posted, temporary accounts must be reset to
                  zero. Learn what gets closed, why, and how the process works.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-200 bg-amber-50 mb-8">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                The Decision Rule to Carry Forward
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 mb-3">
                Whenever you face a month-end scenario, use this decision tree:
              </p>
              <div className="bg-white p-4 rounded border border-amber-200 space-y-2">
                <p className="text-amber-900 font-medium">Step 1: Did cash already move?</p>
                <ul className="text-sm text-amber-800 ml-4 space-y-1">
                  <li><strong>No, cash has not moved</strong> → Accrued (revenue if work done, expense if cost incurred)</li>
                  <li><strong>Yes, cash already moved</strong> → Deferred (revenue if cash came in, expense if cash went out)</li>
                </ul>
                <p className="text-amber-900 font-medium mt-3">Step 2: What is the amount for this period only?</p>
                <ul className="text-sm text-amber-800 ml-4">
                  <li>For accrued items: the full amount of work done or cost incurred this period</li>
                  <li>For deferred items: total prepaid amount ÷ number of periods</li>
                </ul>
                <p className="text-amber-900 font-medium mt-3">Step 3: Which accounts?</p>
                <ul className="text-sm text-amber-800 ml-4">
                  <li>Revenue side → A/R or Deferred Revenue + Service Revenue</li>
                  <li>Expense side → Expense account + A/P or Prepaid asset</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <ReflectionJournal
            prompts={reflectionPrompts}
            unitTitle="Lesson 02 Reflection: Accruals and Deferrals"
          />

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Preview: Closing Entries</h3>
            <p className="text-blue-800 mb-3">
              In Lesson 3 you will learn what happens after all adjusting entries are posted.
              The revenue and expense accounts now have the correct balances for March—but
              they need to be reset to zero so April can start fresh. That process is called
              <strong> closing entries</strong>.
            </p>
            <p className="text-blue-800">
              Closing entries transfer the net result of the month (revenue minus expenses)
              into Retained Earnings. They do not change the accuracy of the month—they
              prepare the books for the next month.
            </p>
          </div>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
