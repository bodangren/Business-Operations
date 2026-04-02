import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardCheck, AlertCircle } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson01Phases[4]

  const exitTicketQuestions = [
    {
      id: "q1",
      question: "Why can't a business expense the full cost of a $15,000 piece of equipment in the month it is purchased?",
      answers: [
        "Because the equipment is too expensive to fit in one month's budget",
        "Because the equipment will provide value over multiple years, so the cost must be spread across its useful life",
        "Because the business does not have enough cash on hand",
        "Because accountants prefer to make the numbers look complicated"
      ],
      explanation: "Long-term assets provide value over many years. Accounting rules require the cost to be spread across the asset's useful life through depreciation, not expensed all at once. This gives a more accurate picture of profitability each year."
    },
    {
      id: "q2",
      question: "What is the core formula for tracking an asset's value over time?",
      answers: [
        "Profit = Revenue - Expenses",
        "Book Value = Cost - Accumulated Depreciation",
        "Assets = Liabilities + Equity",
        "Cash Flow = Income - Spending"
      ],
      explanation: "Book Value = Cost - Accumulated Depreciation is the enduring formula for this unit. As accumulated depreciation grows each year, book value decreases, showing what the asset is still worth on the company's records."
    },
    {
      id: "q3",
      question: "Sarah's company buys a $20,000 delivery van. After 2 years, accumulated depreciation is $8,000. What is the van's book value?",
      answers: [
        "$28,000",
        "$20,000",
        "$12,000",
        "$8,000"
      ],
      explanation: "Book Value = Cost - Accumulated Depreciation = $20,000 - $8,000 = $12,000. The book value shows what the van is still worth on the company's books after 2 years of use."
    },
    {
      id: "q4",
      question: "Which of the following is a long-term asset rather than an everyday expense?",
      answers: [
        "Monthly electricity bill",
        "Office coffee supplies",
        "A $50,000 CNC machine",
        "Weekly cleaning service"
      ],
      explanation: "A CNC machine is a long-term asset because it provides value to the business for many years. Everyday expenses like electricity, coffee supplies, and cleaning services are used up quickly and are expensed in the period they are incurred."
    },
    {
      id: "q5",
      question: "Why would an investor care about how a company tracks its equipment purchases?",
      answers: [
        "Investors only care about marketing plans, not accounting",
        "How a company tracks assets shows whether management understands professional financial reporting",
        "Investors do not care about equipment costs at all",
        "The brand of equipment matters more than the accounting method"
      ],
      explanation: "Investors expect professional asset tracking because depreciation affects reported profit, tax liability, and the credibility of financial statements. Poor asset tracking is a red flag that management may not understand basic financial management."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-gray-700 text-white">
              Phase 5: Exit Ticket — Launch Understanding Check
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Do You Understand the Fixed-Asset Problem?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This short check makes sure you understand why long-term asset costs are treated differently
              from everyday expenses, what the depreciation scoreboard means, and why investors care about
              professional asset tracking. Take your time and read each question carefully.
            </p>
          </div>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-blue-600" />
                Exit Ticket: The Fixed-Asset Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                This exit ticket checks your understanding of the launch lesson only. It does not test
                depreciation calculations yet — those come in the next lessons. Focus on:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Why long-term asset costs are not treated like everyday expenses</li>
                <li>What cost, accumulated depreciation, and book value each mean</li>
                <li>How the formula Book Value = Cost - Accumulated Depreciation works</li>
                <li>Why investors expect professional asset tracking</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Target:</strong> Answer at least 4 out of 5 questions correctly. If you score below 4,
                  review Phases 1-3 and try again before moving to the closing phase.
                </p>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={exitTicketQuestions}
            title="Exit Ticket: Fixed-Asset Foundations"
            description="Test your understanding of why long-term assets are different, what the scoreboard means, and why investors care."
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                If You Need a Reteach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                If you missed questions, here is what to review:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-1">Missed Q1 or Q4?</p>
                  <p className="text-sm text-amber-800">
                    Re-read Phase 1. The key idea: long-term assets provide value for years, so the cost
                    is spread across those years instead of expensed all at once.
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-1">Missed Q2 or Q3?</p>
                  <p className="text-sm text-amber-800">
                    Re-read Phase 2. The scoreboard has three parts: Cost (what you paid), Accumulated
                    Depreciation (what has been used up), and Book Value (what is left).
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 md:col-span-2">
                  <p className="font-semibold text-amber-900 mb-1">Missed Q5?</p>
                  <p className="text-sm text-amber-800">
                    Re-read the video transcript in Phase 1. Investors watch how founders handle big
                    purchases because it signals whether the founder understands professional financial management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
