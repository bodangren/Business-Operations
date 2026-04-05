"use client"

import { useState } from "react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, CheckCircle2, ArrowRight } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

const INITIAL_SCOREBOARD = {
  profit: 2800,
  solvencyAssets: 22850,
  solvencyLiabilities: 9600,
  solvencyEquity: 13250,
  cash: 12950
}

const DECISIONS = [
  {
    id: "decision-1",
    scenario: "Sarah has $12,950 in the bank. A client offers to pay $4,000 upfront for a 3-month maintenance contract. But delivering the work will cost $600/month in contractor fees. Should Sarah take the deal?",
    title: "Decision 1: The Maintenance Contract",
    choices: [
      {
        id: "accept",
        label: "Accept the contract",
        consequence: {
          profit: 2800 + 4000 - 1800,
          solvencyAssets: 22850 + 4000,
          solvencyLiabilities: 9600,
          solvencyEquity: 13250 + 2200,
          cash: 12950 + 4000,
          explanation: "Sarah collects $4,000 cash immediately. Over 3 months she pays $1,800 in contractor fees. Net profit increases by $2,200. Cash jumps to $16,950. All three scoreboard lines improve."
        }
      },
      {
        id: "decline",
        label: "Decline — focus on the retail chain project",
        consequence: {
          profit: 2800,
          solvencyAssets: 22850,
          solvencyLiabilities: 9600,
          solvencyEquity: 13250,
          cash: 12950,
          explanation: "Sarah keeps her current position. No risk, but no growth either. The scoreboard stays flat. This is safe but doesn't move the business forward."
        }
      }
    ]
  },
  {
    id: "decision-2",
    scenario: "Sarah's credit card bill is $9,600. The minimum payment is $300/month, but interest is 22% APR. She could pay $5,000 now to reduce the balance, or keep the cash for emergencies.",
    title: "Decision 2: The Credit Card Dilemma",
    choices: [
      {
        id: "pay-down",
        label: "Pay $5,000 toward the credit card now",
        consequence: {
          profit: 2800,
          solvencyAssets: 22850 - 5000,
          solvencyLiabilities: 9600 - 5000,
          solvencyEquity: 13250,
          cash: 12950 - 5000,
          explanation: "Cash drops to $7,950 but liabilities shrink to $4,600. Solvency improves — the business owes less. Profit is unchanged because paying debt principal is not an expense. Interest savings will help future months."
        }
      },
      {
        id: "keep-cash",
        label: "Keep the cash and make minimum payments",
        consequence: {
          profit: 2800 - 176,
          solvencyAssets: 22850,
          solvencyLiabilities: 9600 + 176 - 300,
          solvencyEquity: 13250 - 176,
          cash: 12950 - 300,
          explanation: "Cash drops only $300 for the minimum payment. But interest of ~$176/month hits profit immediately. Liabilities barely budge. Over time, this choice eats away at profit and equity. Short-term cash looks fine, but the scoreboard bleeds."
        }
      }
    ]
  }
]

export default function Phase4Page() {
  const currentPhase = lesson01Phases[3]
  const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>({})
  const [showConsequences, setShowConsequences] = useState<Record<string, boolean>>({})

  const handleChoice = (decisionId: string, choiceId: string) => {
    setSelectedChoices(prev => ({ ...prev, [decisionId]: choiceId }))
    setShowConsequences(prev => ({ ...prev, [decisionId]: true }))
  }

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'GreenTech Manufacturing shows $85,000 revenue and $95,000 expenses on their Income Statement. What does this tell investors about the business?',
      answers: [
        'The business has a net loss of $10,000 and needs to improve profitability',
        'The business is very successful and profitable',
        'The business has strong cash flow management',
        'The business has too many assets'
      ],
      explanation: 'When expenses ($95,000) exceed revenue ($85,000), the business has a net loss of $10,000. This indicates the company is not currently profitable and needs to either increase revenue or reduce expenses to achieve profitability.'
    },
    {
      id: 'q2',
      question: 'Digital Marketing Pro shows positive net income but negative operating cash flow. What does this suggest?',
      answers: [
        'The business is profitable on paper but may have cash flow timing issues',
        'The business is failing and should close immediately',
        'The financial statements contain errors',
        'The business has too much inventory'
      ],
      explanation: 'This situation indicates the business is earning profit but experiencing cash flow timing problems - perhaps customers haven\'t paid their invoices yet, or the company has invested heavily in accounts receivable. This highlights why all three statements are needed for a complete picture.'
    },
    {
      id: 'q3',
      question: 'Two similar businesses both show $50,000 net income. Business A has $10,000 operating cash flow while Business B has $45,000 operating cash flow. Which is financially healthier?',
      answers: [
        'Business B - higher operating cash flow indicates better cash conversion and collection',
        'Business A - lower cash flow means they reinvest more in growth',
        'They are exactly the same since net income is identical',
        'Cannot determine without more information'
      ],
      explanation: 'Business B is healthier because their operating cash flow closely matches their net income, indicating they effectively collect on sales and manage working capital. Business A may have collection issues or excessive accounts receivable.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
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
                <Target className="w-5 h-5" />
                Independent Practice: Make the Call
              </CardTitle>
              <CardDescription>
                You are Sarah's advisor. Make two business decisions and watch the scoreboard change.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Sarah is at a crossroads. She has momentum from her first month with Jennifer Kim, but two decisions are on her desk right now. Each choice will move the scoreboard differently. There is no single right answer — but every answer has a consequence.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">How This Works</h4>
                  <ul className="text-yellow-700 text-sm space-y-1 list-disc list-inside">
                    <li>Read each scenario carefully.</li>
                    <li>Choose the option you think is best for TechStart.</li>
                    <li>See how your choice changes the scoreboard.</li>
                    <li>After both decisions, answer the analysis questions.</li>
                  </ul>
                </div>

                <p className="text-base leading-relaxed">
                  <strong>Starting scoreboard:</strong>
                </p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="rounded-lg bg-purple-50 border border-purple-200 p-3 text-center">
                    <p className="text-xs font-semibold text-purple-900 uppercase">Profit</p>
                    <p className="text-lg font-bold text-purple-700">${INITIAL_SCOREBOARD.profit.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 text-center">
                    <p className="text-xs font-semibold text-blue-900 uppercase">Solvency</p>
                    <p className="text-sm text-blue-700">Assets ${INITIAL_SCOREBOARD.solvencyAssets.toLocaleString()} = Liabilities ${INITIAL_SCOREBOARD.solvencyLiabilities.toLocaleString()} + Equity ${INITIAL_SCOREBOARD.solvencyEquity.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3 text-center">
                    <p className="text-xs font-semibold text-indigo-900 uppercase">Cash</p>
                    <p className="text-lg font-bold text-indigo-700">${INITIAL_SCOREBOARD.cash.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decision Cards */}
          {DECISIONS.map((decision) => {
            const selected = selectedChoices[decision.id]
            const revealed = showConsequences[decision.id]
            const choice = decision.choices.find(c => c.id === selected)

            return (
              <Card key={decision.id} className="border-purple-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
                  <CardTitle className="text-purple-900">{decision.title}</CardTitle>
                  <CardDescription>{decision.scenario}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Choice Buttons */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {decision.choices.map((c) => (
                      <Button
                        key={c.id}
                        onClick={() => handleChoice(decision.id, c.id)}
                        variant={selected === c.id ? "default" : "outline"}
                        className={`h-auto py-4 px-4 text-left justify-start ${
                          selected === c.id
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "text-gray-700"
                        }`}
                        disabled={revealed}
                      >
                        <div>
                          <p className="font-semibold text-sm">{c.label}</p>
                        </div>
                      </Button>
                    ))}
                  </div>

                  {/* Consequence Reveal */}
                  {revealed && choice && (
                    <div className="space-y-4">
                      <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <p className="text-sm font-semibold text-green-800">You chose: {choice.label}</p>
                        </div>

                        {/* Scoreboard After */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="rounded-lg bg-purple-50 border border-purple-200 p-3 text-center">
                            <p className="text-xs font-semibold text-purple-900 uppercase">Profit</p>
                            <p className="text-lg font-bold text-purple-700">
                              ${choice.consequence.profit.toLocaleString()}
                            </p>
                            <p className="text-xs text-purple-600">
                              {choice.consequence.profit > INITIAL_SCOREBOARD.profit ? "↑" : choice.consequence.profit < INITIAL_SCOREBOARD.profit ? "↓" : "—"} from start
                            </p>
                          </div>
                          <div className="rounded-lg bg-blue-50 border border-blue-200 p-3 text-center">
                            <p className="text-xs font-semibold text-blue-900 uppercase">Solvency</p>
                            <p className="text-xs text-blue-700">
                              Assets ${choice.consequence.solvencyAssets.toLocaleString()}
                            </p>
                            <p className="text-xs text-blue-700">
                              Liabilities ${choice.consequence.solvencyLiabilities.toLocaleString()}
                            </p>
                            <p className="text-xs text-blue-700">
                              Equity ${choice.consequence.solvencyEquity.toLocaleString()}
                            </p>
                          </div>
                          <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3 text-center">
                            <p className="text-xs font-semibold text-indigo-900 uppercase">Cash</p>
                            <p className="text-lg font-bold text-indigo-700">
                              ${choice.consequence.cash.toLocaleString()}
                            </p>
                            <p className="text-xs text-indigo-600">
                              {choice.consequence.cash > INITIAL_SCOREBOARD.cash ? "↑" : choice.consequence.cash < INITIAL_SCOREBOARD.cash ? "↓" : "—"} from start
                            </p>
                          </div>
                        </div>

                        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-3">
                          <p className="text-sm text-yellow-800">
                            <strong>Why:</strong> {choice.consequence.explanation}
                          </p>
                        </div>
                      </div>

                      {/* Comparison with other choice */}
                      <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>The other option would have looked like this:</strong>
                        </p>
                        <p className="text-sm text-gray-600 italic">
                          {decision.choices.find(c => c.id !== selected)?.label} — {decision.choices.find(c => c.id !== selected)?.consequence.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}

          {/* Analysis Questions */}
          {Object.keys(selectedChoices).length === DECISIONS.length && (
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-100">
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Analyze Your Decisions
                </CardTitle>
                <CardDescription>
                  Now answer these questions about the decisions you made
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-base leading-relaxed mb-4">
                    Look back at how your choices changed the scoreboard. Think about what trade-offs you made.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <p className="text-sm text-blue-800 font-semibold mb-2">Reflection prompts (discuss with a partner or write down):</p>
                    <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                      <li>Which decision had the biggest impact on cash? Why?</li>
                      <li>Did any of your choices improve one scoreboard line but hurt another?</li>
                      <li>If Sarah needs to show investors a strong story next month, which choice matters most?</li>
                      <li>What does this teach you about why one financial statement alone is not enough?</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Comprehension Check */}
          <ComprehensionCheck
            questions={comprehensionQuestions}
            title="Business Scenario Analysis"
            description="Demonstrate your ability to interpret financial information and draw business conclusions"
            showExplanations={true}
            allowRetry={false}
          />

          {/* Self-Assessment */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800">Independent Practice Self-Assessment</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                <strong>Reflect on your performance:</strong> Rate your confidence level (1-5) in these key areas:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Technical Skills</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Reading Income Statement information</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Analyzing Balance Sheet relationships</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Understanding Cash Flow implications</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Business Analysis</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Connecting numbers to business stories</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Making investment recommendations</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Explaining financial health to stakeholders</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Areas for growth:</strong> Which concepts do you want to review before the assessment phase? Consider discussing these with classmates or asking questions during tomorrow's session.
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
