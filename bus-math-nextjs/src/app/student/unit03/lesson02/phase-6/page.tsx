'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const reflectionPrompts = [
  {
    id: 'confidence-income',
    category: 'confidence' as const,
    prompt: 'How confident do you feel about building an Income Statement from a trial balance on your own? What part of the three-step procedure feels most solid, and what part still makes you hesitate?',
    placeholder: 'Think about the moment you look at a trial balance and need to decide which accounts belong on the Income Statement...'
  },
  {
    id: 'signal-income',
    category: 'understanding' as const,
    prompt: 'What signal tells you that an Income Statement is the right tool for a situation? Describe a scenario where you would know to use this procedure instead of building a Balance Sheet.',
    placeholder: 'Think about the kinds of questions a bank, investor, or business owner might ask that require an Income Statement answer...'
  },
  {
    id: 'connection-income',
    category: 'understanding' as const,
    prompt: 'Net Income from this lesson will flow into the Balance Sheet in the next lesson. Why does that connection matter? What would happen to the Balance Sheet if Net Income were wrong?',
    placeholder: 'Think about how the profit number you calculated today becomes part of the equity section on a different statement...'
  }
]

export default function Phase6Page() {
  const currentPhase = lesson02Phases[5]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 text-2xl">What You Can Do Now</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                At the start of this lesson, Sarah handed the bank a list of transactions and got 
                asked for an Income Statement she did not know how to build. You now know the 
                three-step procedure that turns any trial balance into a clear profit report:
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-indigo-300">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-0.5">1</Badge>
                  <div>
                    <p className="font-semibold text-indigo-900">Pull out revenue and expense accounts</p>
                    <p className="text-indigo-700 text-sm">Ignore assets, liabilities, and equity. Only accounts with "Revenue" or "Expense" in the name belong here.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-0.5">2</Badge>
                  <div>
                    <p className="font-semibold text-indigo-900">Add each group separately</p>
                    <p className="text-indigo-700 text-sm">Total Revenue = sum of all revenue accounts. Total Expenses = sum of all expense accounts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-0.5">3</Badge>
                  <div>
                    <p className="font-semibold text-indigo-900">Subtract: Revenue minus Expenses = Net Income</p>
                    <p className="text-indigo-700 text-sm">Positive means profit. Negative means loss. The number is the story.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">When to Use This Procedure</h3>
              <p className="text-blue-800">
                Use the Income Statement procedure whenever someone asks: <strong>"Is this business 
                making money?"</strong> or <strong>"What was the profit this month?"</strong> If the 
                question is about profitability over a period of time, the Income Statement is the 
                right tool. If the question is about what the business owns or owes right now, you 
                need the Balance Sheet instead.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">What Comes Next: The Balance Sheet Connection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                The Net Income you calculated today does not disappear after you finish the Income 
                Statement. It flows directly into the Balance Sheet through <strong>Retained Earnings</strong> 
                in the equity section. This is how the two statements connect:
              </p>

              <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                <div className="text-center">
                  <p className="text-green-800 font-bold">
                    Income Statement Net Income → Balance Sheet Retained Earnings → Updated Equity
                  </p>
                </div>
              </div>

              <p>
                If your Net Income is wrong, your Balance Sheet will not balance. If your Balance 
                Sheet does not balance, investors will not trust any of your numbers. This is why 
                getting the Income Statement right matters — it is the foundation for everything 
                that follows.
              </p>

              <p>
                In the next lesson, you will learn to build the Balance Sheet and see exactly how 
                the Net Income from today's Income Statement becomes part of the equity section. 
                You will also learn why the Balance Sheet must always balance — and what it means 
                when it does not.
              </p>
            </div>
          </CardContent>
        </Card>

        <ReflectionJournal
          unitTitle="Income Statement Construction: Reflect on Your Learning"
          prompts={reflectionPrompts}
        />

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Connect Back to Sarah's Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                When Sarah walked back into the bank with her Income Statement, the loan officer 
                could finally see the profit story. The number at the bottom — Net Income — answered 
                the question that the transaction list could not: <strong>did the business earn more 
                than it spent?</strong>
              </p>
              <p>
                You now know how to produce that number from raw trial balance data. That skill is 
                the first piece of the three-statement storyboard. The Balance Sheet and Cash Flow 
                Statement will complete the picture.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
