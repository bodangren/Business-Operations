import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle } from "lucide-react"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson02Phases[4]

  const exitTicketQuestions = [
    {
      id: "q1",
      question: "When should a purchase be capitalized as a fixed asset in this lesson?",
      answers: [
        "When it provides value for more than one year and the cost is significant enough to track separately",
        "Whenever the purchase costs more than $100",
        "Whenever the business pays cash instead of using credit",
        "Whenever the item could be sold later for any amount"
      ],
      explanation: "This lesson's rule has two tests: the purchase must help the business beyond one year and the cost must be significant enough to justify separate tracking as an asset."
    },
    {
      id: "q2",
      question: "TechStart buys a desk fan for $85. It may last 3 years. Which treatment best matches the lesson rule?",
      answers: [
        "Expense it, because it lasts more than one year but the cost is not significant enough to track as its own fixed asset",
        "Capitalize it, because anything that lasts multiple years must become a fixed asset",
        "Capitalize it only if TechStart pays cash",
        "Record half as an asset and half as an expense"
      ],
      explanation: "This is the key edge case from the lesson: durability alone is not enough. The purchase also has to be significant enough to track separately."
    },
    {
      id: "q3",
      question: "Which purchase should be expensed rather than capitalized?",
      answers: [
        "A $1,300 machine tune-up that keeps equipment running but does not extend its useful life",
        "A $12,000 laser cutter expected to last 8 years",
        "A $6,200 backup server expected to last 6 years",
        "A $4,800 conference table expected to last 10 years"
      ],
      explanation: "Routine maintenance keeps an existing asset operating in its current condition, but it does not create a new long-term asset or extend useful life. That makes it a current-period expense."
    },
    {
      id: "q4",
      question: "A company buys a $50,000 machine that will last 10 years and can be sold for $5,000 at the end. What is the depreciable base?",
      answers: [
        "$45,000",
        "$50,000",
        "$5,000",
        "$5,000 per year"
      ],
      explanation: "Depreciable base = Cost - Salvage Value = $50,000 - $5,000 = $45,000. This is the amount that will be allocated as depreciation expense over the 10-year useful life."
    },
    {
      id: "q5",
      question: "Why do useful life and salvage value matter once a purchase has been capitalized?",
      answers: [
        "They determine how much of the asset's cost becomes the depreciable base and how long that cost will be spread out",
        "They determine whether the original cash payment was correct",
        "They guarantee that every asset will have the same annual depreciation",
        "They replace the need to decide whether the purchase is an asset or an expense"
      ],
      explanation: "Useful life tells you how long the asset helps the business, and salvage value tells you what portion of cost is expected to remain at the end. Together they shape the depreciable base and the later depreciation schedule."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-rose-600 text-white">
              Phase 5: Exit Ticket
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Fixed-Asset Decision Exit Ticket</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This short quiz checks whether you can apply the lesson's actual decision process:
              asset or expense, significant or not, repair or improvement, and depreciable base.
            </p>
          </div>

          <Card className="border-l-4 border-l-rose-600">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="h-5 w-5 text-rose-600" />
                What This Checks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">You can decide when a purchase becomes an asset vs. an expense</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">You can apply the significance test, not just the one-year test</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">You can distinguish routine maintenance from capital improvements</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">You can calculate depreciable base from cost and salvage value</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={exitTicketQuestions}
            title="Exit Ticket: Capitalization Decision"
            description="Answer all 5 questions. These check the classification and reasoning skills from today's lesson."
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What Comes Next</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                In the final phase, you will reflect on what you learned today and preview the
                straight-line depreciation method — the most common way businesses allocate
                depreciation expense over an asset&apos;s useful life.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
