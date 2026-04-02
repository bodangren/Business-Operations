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
      question: "Which of the following best describes capitalization?",
      answers: [
        "Recording a purchase as a long-term asset because it provides value for more than one year",
        "Recording a purchase as an expense in the current period",
        "Increasing the value of an asset each year on the balance sheet",
        "Paying for an asset in cash instead of on credit"
      ],
      explanation: "Capitalization means recording a purchase as a long-term asset on the balance sheet because the item will provide economic value to the business for more than one accounting period."
    },
    {
      id: "q2",
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
      id: "q3",
      question: "Why is routine maintenance on a delivery van expensed instead of capitalized?",
      answers: [
        "Because maintenance keeps the van running but does not extend its useful life or increase its capacity",
        "Because maintenance costs are always small",
        "Because vans are not considered long-term assets",
        "Because the IRS requires all vehicle costs to be expensed"
      ],
      explanation: "Routine maintenance (oil changes, tire rotations) maintains the asset in its current condition but does not extend its useful life or improve its capacity. Therefore it is expensed. A major engine replacement that extends life would be capitalized."
    },
    {
      id: "q4",
      question: "What happens to accumulated depreciation over time?",
      answers: [
        "It grows each year as more depreciation expense is recorded",
        "It decreases as the asset ages",
        "It stays the same throughout the asset's life",
        "It is reset to zero at the end of each year"
      ],
      explanation: "Accumulated depreciation is a running total. Each year, depreciation expense is added to it, so it grows over time. It reduces the asset's book value on the balance sheet."
    },
    {
      id: "q5",
      question: "An asset has a cost of $8,000, accumulated depreciation of $3,000, and a salvage value of $1,000. What is its current book value?",
      answers: [
        "$5,000",
        "$4,000",
        "$3,000",
        "$7,000"
      ],
      explanation: "Book Value = Cost - Accumulated Depreciation = $8,000 - $3,000 = $5,000. The salvage value tells us what the book value will be at the end of the asset's life, not its current book value."
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
            <h1 className="text-3xl font-bold text-gray-900">Capitalization & Depreciation Vocabulary Check</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This short quiz checks your understanding of capitalization, useful life, salvage value,
              and accumulated depreciation. These are the concepts you will use in every depreciation lesson going forward.
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
                  <p className="text-gray-700 text-sm">You can explain when a cost becomes an asset vs. an expense</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">You can calculate depreciable base from cost and salvage value</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">You understand how accumulated depreciation builds over time</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">You can distinguish repairs from improvements</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={exitTicketQuestions}
            title="Exit Ticket: Capitalization & Depreciation"
            description="Answer all 5 questions. These assess the vocabulary and reasoning from today's lesson."
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
