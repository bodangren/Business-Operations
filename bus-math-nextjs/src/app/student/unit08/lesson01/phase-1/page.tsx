import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const currentPhase = lesson01Phases[0]

  const videoData = {
    title: "TechStart Is Expanding — Sarah's Equipment Purchase Problem",
    description: "TechStart Solutions is growing. Sarah needs to buy a $15,000 commercial 3D printer for her product line. But how should she track this cost? Can she expense it all at once, or does it need to be tracked differently? An investor is watching how she handles this decision.",
    youtubeId: "Owp5F1WAA_w",
    duration: "1:00",
    transcript: `I thought buying a commercial 3D printer for TechStart would be simple. We were expanding our product line, clients were asking for more physical prototypes, and this printer could help us deliver work we used to outsource. The quote was $15,000, which was a big purchase for us, but it also felt like the right next step.

My first instinct was to record the whole thing as one expense in the month we bought it. Cash leaves the business, expense goes in the books. That seemed honest to me.

Then my CPA, Jennifer Kim, stopped me. She said, "Sarah, if that printer helps you earn revenue for five or more years, one month should not take the whole hit." She explained that this was not like printer paper or coffee for the office. This was a long-term asset, and the cost needed to be spread over the years the printer would help the business generate revenue.

That changed how I saw the purchase. If I expensed all $15,000 right away, this month's profit would look terrible. Then future months would look too good because they would benefit from the printer without carrying any of its cost. Jennifer told me I needed to track the original cost, the depreciation that builds up over time, and the book value that remains on the balance sheet.

Then Marcus called to check on my investor meeting. He was direct: "Sarah, investors will want to know what you own, what it's worth, and whether your numbers can be defended." It was not enough to say, "We bought equipment." I needed an asset record and a depreciation plan I could explain.

So Unit 08 starts with my problem. I can make the purchase, but I cannot yet explain how to spread the cost over time or defend the printer's remaining value. Your job is to learn how businesses decide what counts as a long-term asset, track accumulated depreciation, and use book value to tell a financial story investors can trust.`
  }

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "Why can't Sarah just expense the entire $15,000 printer purchase in the month she buys it?",
      answers: [
        "Because the printer is too expensive to fit in one month's budget",
        "Because the printer will provide value over multiple years, so the cost should be spread across its useful life",
        "Because her bank account does not have enough money",
        "Because investors do not like 3D printers"
      ],
      explanation: "Long-term assets like equipment provide value over many years. Accounting rules require businesses to spread the cost across the asset's useful life instead of expensing it all at once. This gives a more accurate picture of profitability."
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
      explanation: "Book Value = Cost - Accumulated Depreciation is the formula that tracks how much an asset is still worth on the company's books. As depreciation accumulates each year, book value decreases."
    },
    {
      id: "q3",
      question: "Why would an investor care about how Sarah tracks her equipment purchase?",
      answers: [
        "Investors only care about marketing plans, not accounting",
        "How Sarah tracks assets shows whether she understands professional financial management",
        "Investors do not care about equipment costs at all",
        "The printer brand matters more than the accounting method"
      ],
      explanation: "Investors expect founders to track long-term assets professionally. How a company capitalizes and depreciates assets affects reported profit, tax liability, and the credibility of financial statements. Poor asset tracking is a red flag."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-600 text-white">
              Phase 1: The Fixed-Asset Problem
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah Needs New Equipment — But How Should She Track It?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              TechStart Solutions is growing. Sarah wants to buy a $15,000 commercial 3D printer.
              It seems simple — buy the printer, record the cost, done. But an investor is watching,
              and how Sarah handles this purchase will signal whether she understands professional
              financial management. The question is not just &quot;Can we afford it?&quot; — it is
              &quot;How do we track this cost over time?&quot;
            </p>
          </div>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="text-xl">The Core Tension</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                When a business buys something small — like printer paper or coffee for the office — it
                records the cost as an expense right away. The item is used up quickly. But when a business
                buys something big that lasts for years — like equipment, vehicles, or buildings — the rules
                change. The cost cannot be expensed all at once. It must be tracked as an <strong>asset</strong>
                and its cost spread across the years it provides value. This process is called{" "}
                <strong>depreciation</strong>.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>The enduring formula for this unit:</strong>{" "}
                  <code className="bg-amber-100 px-2 py-1 rounded font-mono font-bold">
                    Book Value = Cost - Accumulated Depreciation
                  </code>
                </p>
                <p className="text-sm text-amber-700 mt-2">
                  Every lesson in this unit connects back to this formula. By the end, you will understand
                  what each term means, how to calculate it, and why investors care.
                </p>
              </div>
            </CardContent>
          </Card>

          <VideoPlayer video={videoData} />

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle>The Scoreboard: Three Numbers That Matter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Throughout this unit, you will track three numbers for every long-term asset:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-bold text-blue-900 text-lg">Cost</p>
                  <p className="text-sm text-gray-700 mt-1">
                    What you paid for the asset, including delivery and installation.
                    For Sarah&apos;s printer: $15,000.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-bold text-blue-900 text-lg">Accumulated Depreciation</p>
                  <p className="text-sm text-gray-700 mt-1">
                    The total amount of the asset&apos;s cost that has been &quot;used up&quot; so far.
                    This grows each year.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-bold text-blue-900 text-lg">Book Value</p>
                  <p className="text-sm text-gray-700 mt-1">
                    What the asset is still worth on the company&apos;s books.
                    Book Value = Cost - Accumulated Depreciation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={comprehensionQuestions}
            title="Understanding the Fixed-Asset Problem"
            description="Test your understanding of why long-term asset costs are treated differently from everyday expenses."
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
                    Imagine you bought a $1,200 laptop for your business. It will last 4 years.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-purple-800 dark:text-purple-300">
                    <li>Would it be fair to record the entire $1,200 as an expense in month 1?</li>
                    <li>What would your profit look like in month 1 vs. month 12 if you did?</li>
                    <li>How much of the laptop&apos;s cost should &quot;count&quot; against each year&apos;s profit?</li>
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
                Now that you understand the problem — long-term assets cannot be expensed all at once —
                the next lesson will teach you the rules for deciding <strong>when a cost becomes an asset</strong>{" "}
                (capitalization) and how to estimate how long it will last (useful life) and what it will be
                worth at the end (salvage value). You will also learn how accumulated depreciation builds up
                over time and why it matters for both the income statement and the balance sheet.
              </p>
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
