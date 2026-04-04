import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ArrowRight, TrendingUp } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[5];

const reflectionPrompts = [
  {
    id: 'confidence-balance-sheet',
    category: 'confidence' as const,
    prompt: 'How confident do you feel about building a Balance Sheet from a trial balance? What part of the process feels most solid to you right now?',
    placeholder: 'Think about classifying accounts, calculating retained earnings, and verifying the accounting equation. Which step do you trust yourself to do correctly without help?'
  },
  {
    id: 'understanding-retained-earnings',
    category: 'understanding' as const,
    prompt: 'Explain in your own words how Net Income from the Income Statement ends up on the Balance Sheet. Why does this connection matter for understanding a business?',
    placeholder: 'Try to explain the retained earnings roll-forward as if you were teaching it to a classmate who missed today\'s lesson. What is the key idea they need to understand?'
  },
  {
    id: 'signal-recognition',
    category: 'understanding' as const,
    prompt: 'What signals tell you that a problem requires a Balance Sheet rather than an Income Statement? When would you know to use this method?',
    placeholder: 'Think about the kinds of questions a bank, investor, or business owner might ask. What kind of question would make you reach for the Balance Sheet procedure?'
  }
];

export default function Unit03Lesson03Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
            <Lightbulb className="h-8 w-8" />
            Closing: The Story Now Has a Setting
          </h2>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200 mb-8">
            <p className="text-lg leading-relaxed text-indigo-900">
              You started this lesson knowing that Sarah's Income Statement showed profit — but that was not enough for
              the bank. Now you can build the Balance Sheet that answers the question the Income Statement could not:
              <strong> "What does the business own, and what does it owe?"</strong> The financial story now has both a
              plot and a setting.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            What You Can Now Do
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">The Accounting Equation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• State and apply Assets = Liabilities + Equity</li>
                  <li>• Classify accounts into the correct category</li>
                  <li>• Spot tricky accounts like Unearned Revenue and Prepaid Rent</li>
                  <li>• Diagnose why a Balance Sheet does not balance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg">The Retained Earnings Bridge</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Calculate Ending RE from Beginning RE, Net Income, and Dividends</li>
                  <li>• Explain how the Income Statement feeds the Balance Sheet</li>
                  <li>• Separate permanent accounts from temporary accounts</li>
                  <li>• Build a complete Balance Sheet from a trial balance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            Why Retained Earnings Matters
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Retained Earnings is the most important account on the Balance Sheet for understanding a business's
            history. It tells you how much profit the business has kept over its entire life — not just this period,
            but every period since it started. A growing Retained Earnings balance means the business is profitable
            and reinvesting in itself. A shrinking one means the business is losing money or paying out more than it earns.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Looking Ahead: The Third Statement
            </h4>
            <p className="text-amber-800 mb-3">
              You now have two of the three financial statements. But there is one more question investors ask that
              neither the Income Statement nor the Balance Sheet answers cleanly:
            </p>
            <div className="bg-white p-4 rounded border border-amber-300">
              <p className="text-amber-900 font-medium">
                "If the business made a profit, why is there no cash in the bank?"
              </p>
            </div>
            <p className="text-amber-800 mt-3">
              Profit and cash are not the same thing. A business can be profitable and still run out of cash. The
              next lesson introduces the <strong>Statement of Cash Flows</strong> — the document that explains exactly
              where cash came from and where it went. You will learn why operating, investing, and financing activities
              tell a different story than net income alone.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Sarah's Story So Far
            </h4>
            <p className="text-blue-800">
              Sarah now has two professional financial statements. The Income Statement shows her business is profitable.
              The Balance Sheet shows she has real assets and manageable debts. But the bank still wants to understand
              her cash position. In the next lesson, you will help her build the final piece of the financial story.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            Reflect on Your Learning
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Take a few minutes to think about what you learned today. How has your understanding of financial statements
            grown? What feels clear, and what still needs practice?
          </p>
        </div>

        <ReflectionJournal
          unitTitle="Balance Sheet & Retained Earnings Reflection"
          prompts={reflectionPrompts}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="font-semibold text-indigo-900 mb-2 text-lg">Key Takeaway</h3>
            <p className="text-indigo-800">
              The Balance Sheet is not just a list of numbers — it is a snapshot of a business's financial health at a
              single moment. The accounting equation must always balance. Retained Earnings is the bridge that connects
              the Income Statement to the Balance Sheet, showing how profit builds the owner's stake in the business over
              time.
            </p>
            <p className="text-indigo-700 text-sm mt-3 italic">
              "A business can survive without profit for a while. It cannot survive without cash. The Balance Sheet
              tells you what exists. The Cash Flow Statement — next — tells you whether it is enough."
            </p>
          </div>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  );
}
