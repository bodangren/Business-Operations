import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, ArrowRight } from "lucide-react"
import { JournalEntryBuilding } from "@/components/exercises/JournalEntryBuilding"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[2] // Phase 3

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit02Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Guided Practice Introduction */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Guided Practice: Creating the Four Essential Adjusting Entries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-green-900">
                <p>
                  Now it's time to apply what you've learned. Sarah needs to record adjusting entries for 
                  her four March scenarios. You'll work through each one step-by-step, learning to analyze 
                  business situations and create the correct journal entries.
                </p>

                <p>
                  Remember, each adjusting entry follows the fundamental accounting equation: 
                  <strong>Assets = Liabilities + Equity</strong>. Every entry must maintain this balance 
                  while accurately reflecting the economic reality of what happened in March.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-200 not-prose">
                <h4 className="font-semibold text-green-900 mb-2">Your Mission</h4>
                <p className="text-green-800">
                  Work through each scenario in the Journal Entry Builder below. For each transaction, 
                  you'll need to:
                </p>
                <ul className="list-disc list-inside text-green-800 mt-2 space-y-1">
                  <li>Analyze what really happened in the business transaction</li>
                  <li>Determine which accounts are affected and how</li>
                  <li>Apply the correct debit/credit rules</li>
                  <li>Ensure the entry balances (debits = credits)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Think-Pair-Share Discussion Framework */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Scenario Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-900 mb-4">
                Before creating each journal entry, discuss with a partner:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-blue-300 bg-blue-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-600 text-blue-100 w-fit">Scenario 1: Accrued Revenue</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Business situation:</strong> Sarah completed a $500 SEO audit on March 29th 
                      but won't send the invoice until April 5th.
                    </p>
                    <div className="text-xs text-blue-700">
                      <p className="font-medium">Discussion questions:</p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>Has Sarah earned this revenue in March? Why or why not?</li>
                        <li>What does the client owe her right now?</li>
                        <li>Which accounts increase and which account type are they?</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-300 bg-blue-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-600 text-blue-100 w-fit">Scenario 2: Deferred Revenue</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Business situation:</strong> A client paid $1,200 on March 15th for 6 months 
                      of services. How much should Sarah recognize as March revenue?
                    </p>
                    <div className="text-xs text-blue-700">
                      <p className="font-medium">Discussion questions:</p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>How much work has she actually completed by March 31st?</li>
                        <li>What does she still owe the client?</li>
                        <li>How do you calculate the revenue earned portion?</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-300 bg-blue-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-600 text-blue-100 w-fit">Scenario 3: Depreciation</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Business situation:</strong> Sarah's $3,000 computer (3-year life, $300 salvage) 
                      needs monthly depreciation recorded.
                    </p>
                    <div className="text-xs text-blue-700">
                      <p className="font-medium">Discussion questions:</p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>What is the monthly depreciation amount?</li>
                        <li>Why use Accumulated Depreciation instead of reducing the asset directly?</li>
                        <li>How does this expense match with the revenue the computer helps generate?</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-300 bg-blue-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-600 text-blue-100 w-fit">Scenario 4: Closing Entries</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Business situation:</strong> Sarah had $4,000 in Service Revenue and 
                      $1,500 in total expenses for March.
                    </p>
                    <div className="text-xs text-blue-700">
                      <p className="font-medium">Discussion questions:</p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>What is Sarah's net income for March?</li>
                        <li>Why do revenue and expense accounts need to be "closed"?</li>
                        <li>Where does the net income go in the closing process?</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mt-4">
                <p className="text-blue-800 text-sm">
                  <strong>Discussion Time:</strong> Take 3-4 minutes with your partner to work through these questions 
                  before attempting each journal entry. Understanding the business logic makes the accounting much clearer!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Journal Entry Building Component */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Practice with Real Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Work through these adjusting entry scenarios step by step. The component includes multiple 
                business situations that mirror Sarah's month-end challenges.
              </p>
              
              <JournalEntryBuilding />
            </CardContent>
          </Card>

          {/* Learning Strategies */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Success Strategies for Adjusting Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Step-by-Step Approach</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">1</Badge>
                      <p className="text-sm text-amber-800">
                        <strong>Read carefully:</strong> What actually happened in the business?
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">2</Badge>
                      <p className="text-sm text-amber-800">
                        <strong>Identify the type:</strong> Is it accrual, deferral, depreciation, or closing?
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">3</Badge>
                      <p className="text-sm text-amber-800">
                        <strong>Choose accounts:</strong> What accounts are affected by this transaction?
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">4</Badge>
                      <p className="text-sm text-amber-800">
                        <strong>Apply rules:</strong> Remember your debit/credit rules for each account type
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="text-xs">5</Badge>
                      <p className="text-sm text-amber-800">
                        <strong>Check balance:</strong> Do your total debits equal total credits?
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Common Mistakes to Avoid</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-white rounded border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <strong>❌ Recording cash basis:</strong> Don't wait for cash to change hands—record when earned/incurred
                      </p>
                    </div>
                    <div className="p-2 bg-white rounded border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <strong>❌ Confusing deferred revenue:</strong> It's a liability (you owe services), not an asset
                      </p>
                    </div>
                    <div className="p-2 bg-white rounded border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <strong>❌ Wrong depreciation accounts:</strong> Use Accumulated Depreciation, not the asset account directly
                      </p>
                    </div>
                    <div className="p-2 bg-white rounded border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <strong>❌ Unbalanced entries:</strong> Every entry must have equal debits and credits
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-200 mt-4">
                <p className="text-amber-800 text-sm">
                  <strong>Remember:</strong> If you're struggling with a particular entry, go back to the business 
                  situation. Ask yourself: "What really happened here?" The accounting should reflect the economic reality.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  )
}