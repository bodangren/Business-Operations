"use client"

import { useState } from "react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, FileText, Activity, Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

const BUSINESS_EVENTS = [
  {
    id: "event-1",
    title: "Event 1: Land a Big Client",
    description: "TechStart completes a $3,850 web development project. The client pays $2,000 cash now and owes $1,850 for 30 days.",
    prediction: {
      prompt: "Before you reveal the answer, predict: which scoreboard line(s) change?",
      options: ["Profit only", "Cash only", "Profit and Cash", "All three (Profit, Solvency, Cash)"]
    },
    answer: "All three (Profit, Solvency, Cash)",
    before: {
      profit: "$0 (starting point)",
      solvency: "Assets $20,200 = Liabilities $8,400 + Equity $11,800",
      cash: "$12,000 in bank"
    },
    after: {
      profit: "+$3,850 revenue (profit goes up)",
      solvency: "Assets $22,700 (cash +$2,000, receivables +$1,850) = Liabilities $8,400 + Equity $15,650 (profit added)",
      cash: "$14,000 in bank (up $2,000 from the partial payment)"
    },
    explanation: "Revenue increases profit immediately, even though not all cash arrived yet. The unpaid $1,850 becomes an Account Receivable on the Balance Sheet, so assets and equity both grow. Cash went up by only the amount collected. All three scoreboard lines moved."
  },
  {
    id: "event-2",
    title: "Event 2: Pay Monthly Software Bills",
    description: "TechStart pays $600 for software subscriptions and $450 for a freelance contractor.",
    prediction: {
      prompt: "Predict: which scoreboard line(s) change when Sarah pays these expenses?",
      options: ["Profit only", "Cash only", "Profit and Cash", "All three (Profit, Solvency, Cash)"]
    },
    answer: "All three (Profit, Solvency, Cash)",
    before: {
      profit: "$3,850 (from Event 1)",
      solvency: "Assets $22,700 = Liabilities $8,400 + Equity $15,650",
      cash: "$14,000 in bank"
    },
    after: {
      profit: "$3,850 − $1,050 expenses = $2,800 net income",
      solvency: "Assets $21,650 (cash down $1,050) = Liabilities $8,400 + Equity $14,600 (profit reduced)",
      cash: "$12,950 in bank (down $1,050)"
    },
    explanation: "Expenses reduce profit immediately. Cash leaves the bank, so the cash line drops. Because profit is lower, equity on the Balance Sheet shrinks too. Again, all three lines move together."
  },
  {
    id: "event-3",
    title: "Event 3: Buy a New Laptop for the Business",
    description: "Sarah buys a $1,200 laptop using the business credit card. She will pay the card bill next month.",
    prediction: {
      prompt: "Predict: which scoreboard line(s) change when Sarah buys equipment on credit?",
      options: ["Profit only", "Solvency only", "Profit and Solvency", "Solvency and Cash"]
    },
    answer: "Solvency only",
    before: {
      profit: "$2,800 net income",
      solvency: "Assets $21,650 = Liabilities $8,400 + Equity $14,600",
      cash: "$12,950 in bank"
    },
    after: {
      profit: "$2,800 (no change — buying equipment is not an expense yet)",
      solvency: "Assets $22,850 (equipment +$1,200) = Liabilities $9,600 (credit card +$1,200) + Equity $14,600",
      cash: "$12,950 in bank (no change — no cash left the bank yet)"
    },
    explanation: "Buying equipment on credit does not affect profit — the laptop is an asset, not an expense. Cash does not change because Sarah hasn't paid the card yet. But the Balance Sheet changes: both assets and liabilities go up by $1,200. Only the solvency line moves."
  }
]

export default function Phase3Page() {
  const currentPhase = lesson01Phases[2]
  const [revealedEvents, setRevealedEvents] = useState<Record<string, boolean>>({})
  const [predictions, setPredictions] = useState<Record<string, string>>({})

  const toggleReveal = (eventId: string) => {
    setRevealedEvents(prev => ({ ...prev, [eventId]: !prev[eventId] }))
  }

  const setPrediction = (eventId: string, value: string) => {
    setPredictions(prev => ({ ...prev, [eventId]: value }))
  }

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'Why is it important that the three financial statements work together as an integrated system?',
      answers: [
        'They tell one complete story about business performance and position',
        'They use the same Excel formulas',
        'They are printed on the same paper',
        'They require the same accounting software'
      ],
      explanation: 'The three statements are interconnected - Net Income from the Income Statement flows to Retained Earnings on the Balance Sheet, and cash changes connect to the Cash Flow Statement. Together they provide a complete picture of business health.'
    },
    {
      id: 'q2',
      question: 'What is the key difference between Sarah\'s internal spreadsheets and professional financial statements?',
      answers: [
        'Financial statements follow standardized formats that external stakeholders expect',
        'Internal spreadsheets are more accurate than financial statements',
        'Financial statements require more expensive software',
        'Internal spreadsheets take longer to prepare'
      ],
      explanation: 'Professional financial statements follow Generally Accepted Accounting Principles (GAAP) and standardized formats that banks, investors, and other stakeholders understand and expect, while internal spreadsheets can be customized for management use.'
    },
    {
      id: 'q3',
      question: 'In building TechStart\'s financial storyboard, what should be the first step?',
      answers: [
        'Create the Income Statement to establish the "plot" - is the business profitable?',
        'Design charts and graphs for visual appeal',
        'Calculate complex financial ratios',
        'Write a business plan summary'
      ],
      explanation: 'The Income Statement is the foundation because it shows profitability over time. This "plot" of the business story must be established before showing the "setting" (Balance Sheet) and "action" (Cash Flow Statement).'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Guided Practice: What Moves When Business Happens?
              </CardTitle>
              <CardDescription>
                Predict how each business event changes the scoreboard before you see the answer
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Now that you know the scoreboard, let's watch it move. Every business event changes at least one line on the scoreboard — and often all three. Your job is to <strong>predict first, then reveal</strong>.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">How This Works</h4>
                  <ul className="text-blue-700 text-sm space-y-1 list-disc list-inside">
                    <li>Read each business event carefully.</li>
                    <li>Make your prediction about which scoreboard line(s) change.</li>
                    <li>Click <strong>Reveal</strong> to see the before-and-after.</li>
                    <li>Check whether your prediction was right. If not, read the explanation.</li>
                  </ul>
                </div>

                <p className="text-base leading-relaxed">
                  These events happened during TechStart's first month after Sarah started working with Jennifer Kim. Track how each one ripples through the scoreboard.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Event Cards */}
          {BUSINESS_EVENTS.map((event) => {
            const isRevealed = revealedEvents[event.id]
            const prediction = predictions[event.id]
            const isCorrect = prediction === event.answer

            return (
              <Card key={event.id} className="border-purple-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
                  <CardTitle className="text-purple-900">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Prediction Section */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-800">{event.prediction.prompt}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {event.prediction.options.map((option) => (
                        <Button
                          key={option}
                          variant={predictions[event.id] === option ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPrediction(event.id, option)}
                          disabled={isRevealed}
                          className={`justify-start text-left h-auto py-2 px-3 ${
                            predictions[event.id] === option
                              ? "bg-purple-600 text-white hover:bg-purple-700"
                              : "text-gray-700"
                          }`}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Reveal Button */}
                  <Button
                    onClick={() => toggleReveal(event.id)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-4 h-4 mr-2" />
                        Hide Answer
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Reveal Before/After
                      </>
                    )}
                  </Button>

                  {/* Before/After Reveal */}
                  {isRevealed && (
                    <div className="space-y-4">
                      {/* Prediction Result */}
                      {prediction && (
                        <div className={`rounded-lg p-3 border ${
                          isCorrect
                            ? "bg-green-50 border-green-200"
                            : "bg-red-50 border-red-200"
                        }`}>
                          <div className="flex items-center gap-2 mb-1">
                            {isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`text-sm font-semibold ${
                              isCorrect ? "text-green-800" : "text-red-800"
                            }`}>
                              {isCorrect ? "Correct prediction!" : `Your prediction: ${prediction}`}
                            </span>
                          </div>
                          {!isCorrect && (
                            <p className="text-sm text-red-700">
                              The correct answer is <strong>{event.answer}</strong>. Read the explanation below to understand why.
                            </p>
                          )}
                        </div>
                      )}

                      {/* Before/After Grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                          <p className="text-xs font-semibold text-gray-600 uppercase mb-3">Before This Event</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-3 h-3 text-purple-500" />
                              <span className="text-purple-800">Profit: {event.before.profit}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FileText className="w-3 h-3 text-blue-500" />
                              <span className="text-blue-800">Solvency: {event.before.solvency}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Activity className="w-3 h-3 text-indigo-500" />
                              <span className="text-indigo-800">Cash: {event.before.cash}</span>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-purple-300 bg-purple-50/50 p-4">
                          <p className="text-xs font-semibold text-purple-700 uppercase mb-3">After This Event</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-3 h-3 text-purple-500" />
                              <span className="text-purple-800">Profit: {event.after.profit}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FileText className="w-3 h-3 text-blue-500" />
                              <span className="text-blue-800">Solvency: {event.after.solvency}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Activity className="w-3 h-3 text-indigo-500" />
                              <span className="text-indigo-800">Cash: {event.after.cash}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Explanation */}
                      <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                        <p className="text-sm text-yellow-800">
                          <strong>Why:</strong> {event.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}

          {/* Comprehension Check */}
          <ComprehensionCheck
            questions={comprehensionQuestions}
            title="Understanding Financial Statement Integration"
            description="Test your understanding of how the three statements work together to tell a business story"
            showExplanations={true}
            allowRetry={true}
          />

          {/* Teacher Scaffolding Section */}
          <Card className="border-purple-200">
            <CardHeader className="bg-yellow-50 border-yellow-200">
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Building Toward Independence
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                <strong>Checkpoint with your teacher:</strong> Before moving to independent practice, make sure you can confidently explain:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Core Concepts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>How the three statements work as an integrated scoreboard</li>
                    <li>Which scoreboard lines move when revenue, expenses, assets, or liabilities change</li>
                    <li>Why profit and cash are not the same thing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Application Skills</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Predicting scoreboard changes before calculating them</li>
                    <li>Explaining why a business event affected certain lines and not others</li>
                    <li>Reading all three scoreboard lines together to form a business judgment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-700">
                  <strong>Ready for the next challenge?</strong> In Independent Practice, you'll make bounded business decisions and see their consequences on the scoreboard without guided support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
