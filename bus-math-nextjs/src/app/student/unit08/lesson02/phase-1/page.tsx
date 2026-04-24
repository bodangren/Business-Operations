import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle } from "lucide-react"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"

export default function Phase1Page() {
  const currentPhase = lesson02Phases[0]

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "In Lesson 01, Sarah learned that the $15,000 3D printer is a long-term asset. Why can't she expense it all at once?",
      answers: [
        "Because the printer provides value over many years, so its cost must be spread across its useful life",
        "Because the printer is too expensive to fit in one month's budget",
        "Because her bank account does not have enough money",
        "Because investors do not like 3D printers"
      ],
      explanation: "Long-term assets provide value over multiple years. The matching principle says costs should be recorded in the same periods that benefit from them. Expensing the printer all at once would understate profit in the purchase year and overstate it in later years."
    },
    {
      id: "q2",
      question: "Sarah has three purchases: a $15,000 printer (lasts 7 years), $200 of paper (used in a month), and a $3,500 scooter (lasts 5 years). Which should be expensed immediately?",
      answers: [
        "The $200 of printer paper, because it is used up within the current period",
        "The $15,000 printer, because it is the most expensive",
        "The $3,500 scooter, because vehicles lose value quickly",
        "All three should be expensed immediately"
      ],
      explanation: "The printer paper is consumed within the current accounting period, so it is an expense. The printer and scooter both last multiple years and have significant costs, so they are capitalized as assets."
    },
    {
      id: "q3",
      question: "What is the core formula that connects cost, salvage value, and the amount available for depreciation?",
      answers: [
        "Depreciable Base = Cost - Salvage Value",
        "Profit = Revenue - Expenses",
        "Book Value = Cost - Accumulated Depreciation",
        "Assets = Liabilities + Equity"
      ],
      explanation: "The depreciable base is the portion of an asset's cost that will be allocated as depreciation expense over its useful life. It equals the original cost minus what you expect to sell it for at the end (salvage value)."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-600 text-white">
              Phase 1: The Classification Problem
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Three Receipts, Two Different Rules</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Last lesson, Sarah learned that her $15,000 3D printer is a long-term asset — not an everyday expense.
              Today, the problem gets harder. She has <strong>three</strong> new purchases to classify, and each one
              follows a different rule. If she gets this wrong, her financial statements will mislead investors.
            </p>
          </div>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="text-xl">The Friction Point</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Sarah knows the printer is an asset. But what about the $200 of printer paper?
                What about the $3,500 delivery scooter? Without a clear rule, every purchase
                becomes a guess. And guesses lead to wrong financial statements.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>The question for today:</strong> How do you decide whether a purchase
                  becomes an <strong>asset</strong> (capitalized) or an <strong>expense</strong> (recorded immediately)?
                </p>
                <p className="text-sm text-amber-700 mt-2">
                  The answer involves three concepts: <strong>capitalization</strong>, <strong>useful life</strong>, and <strong>salvage value</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-slate-600">
            <CardHeader>
              <CardTitle>Sarah&apos;s Desk Snapshot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Last lesson gave Sarah one clear answer: the 3D printer belongs on the balance sheet
                as a long-term asset. Today the easy case is gone. Three new receipts are sitting on
                her desk, and she needs a rule she can defend before she records anything.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">What Sarah already knows</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-slate-700">
                    <li>Big purchases that help the business for years can become assets.</li>
                    <li>Those assets are not expensed all at once.</li>
                    <li>Investors expect the numbers to match the real business story.</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                  <p className="font-semibold text-orange-900">What Sarah still cannot answer</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-orange-800">
                    <li>Which purchases should be capitalized and which should be expensed now?</li>
                    <li>How long should each asset be expected to last?</li>
                    <li>What value, if any, should remain at the end?</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-blue-900 font-medium">
                  Quick prediction: before learning the rule, which receipt feels the hardest to defend
                  to an investor, and why?
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle>Sarah&apos;s Three Receipts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Here are the three purchases Sarah needs to classify:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-bold text-green-900 text-lg">$15,000 — 3D Printer</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Will last 7 years. Expected to sell for $2,000 at the end.
                  </p>
                  <Badge className="mt-2 bg-green-600 text-white">Asset</Badge>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="font-bold text-red-900 text-lg">$200 — Printer Paper</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Will be used up within the month. No resale value.
                  </p>
                  <Badge className="mt-2 bg-red-600 text-white">Expense</Badge>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-bold text-green-900 text-lg">$3,500 — Delivery Scooter</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Will last about 5 years. Expected to sell for $500 at the end.
                  </p>
                  <Badge className="mt-2 bg-green-600 text-white">Asset</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={comprehensionQuestions}
            title="Understanding the Classification Problem"
            description="Test your understanding of why some purchases are assets and others are expenses."
            showExplanations={true}
          />

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-purple-900 dark:text-purple-200 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-900 dark:text-purple-200 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-purple-800 dark:text-purple-300">
                    Imagine your school buys the following items. With a partner, decide which are assets and which are expenses:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-purple-800 dark:text-purple-300">
                    <li>A $2,000 projector for the auditorium (lasts 10 years)</li>
                    <li>$50 of whiteboard markers (used up in a semester)</li>
                    <li>A $800 lawn mower for the grounds crew (lasts 6 years)</li>
                    <li>$300 for a one-year software license</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What Comes Next</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Now that you can see the problem — some purchases are assets, some are expenses —
                the next phase will teach you the <strong>exact rules</strong> for deciding. You will learn
                how to estimate <strong>useful life</strong> (how long an asset lasts), <strong>salvage value</strong>
                (what it is worth at the end), and how to calculate the <strong>depreciable base</strong> —
                the amount of cost that will be spread across the asset&apos;s life.
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
