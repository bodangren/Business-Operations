import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[0];

const hookQuestions = [
  {
    id: "hook-q1",
    question: "Sarah's Income Statement shows $4,220 in net income this month. But when she checked her bank account, she only had $800 more than she started with. How is this possible?",
    answers: [
      "Net income includes revenue Sarah has not yet collected in cash, and some expenses did not require cash payments this month",
      "Sarah made a calculation error on her Income Statement and the net income is wrong",
      "The bank lost some of Sarah's money and the numbers will never match",
      "Net income should always equal the change in cash — Sarah's accountant made a mistake"
    ],
    explanation: "Under accrual accounting, revenue is recorded when earned, not when cash is received. Sarah may have earned revenue on account (Accounts Receivable) that she has not yet collected. Similarly, some expenses like depreciation do not require cash. This is why net income rarely equals cash flow."
  },
  {
    id: "hook-q2",
    question: "Sarah's Accounts Receivable increased by $2,100 this month. What does this mean for her cash?",
    answers: [
      "She earned $2,100 in revenue but has not yet collected that cash from customers",
      "She received $2,100 in cash from customers this month",
      "She paid $2,100 in expenses this month",
      "Nothing — Accounts Receivable does not affect cash at all"
    ],
    explanation: "An increase in Accounts Receivable means Sarah recorded revenue but has not yet received the cash. This is a use of cash — she reported the income but the money is still owed to her by customers."
  },
  {
    id: "hook-q3",
    question: "Which financial statement explains how a company's cash balance changed from the beginning to the end of a period?",
    answers: [
      "Statement of Cash Flows — it shows where cash came from and where it went",
      "Income Statement — it shows all cash received and paid",
      "Balance Sheet — it shows the cash account balance only",
      "Trial Balance — it lists all cash transactions"
    ],
    explanation: "The Statement of Cash Flows explains the change in cash by categorizing cash movements into operating, investing, and financing activities. The Balance Sheet only shows the ending cash balance, not how it changed."
  },
  {
    id: "hook-q4",
    question: "A business reports $50,000 in net income but only $5,000 in cash from operations. Which explanation is most likely?",
    answers: [
      "The business has large non-cash revenues (like accounts receivable increases) or non-cash expenses (like depreciation) that reduce cash relative to profit",
      "The business must have made an accounting error — profit and cash should always match",
      "The business spent all its profit on dividends to shareholders",
      "The cash flow statement is not a real financial statement and can be ignored"
    ],
    explanation: "When net income is much higher than operating cash flow, it usually means the company recorded revenue it has not yet collected (increased receivables) or has large non-cash expenses like depreciation. This is common in growing businesses."
  }
];

export default function Unit03Lesson04Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PhaseHeader
        lesson={lesson04Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            The Cash Mystery: Profit Without Cash
          </h2>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-lg leading-relaxed text-blue-900">
              Sarah walked into the bank feeling confident. Her Income Statement showed $4,220 in net income. Her
              Balance Sheet balanced perfectly. But when the loan officer asked, <strong>"How much cash did your
              business actually generate this month?"</strong> — Sarah froze. Her bank account had only grown by $800.
            </p>

            <p className="text-lg leading-relaxed text-blue-900 mt-4">
              "I made $4,220 in profit," she said. The loan officer shook his head. <strong>"Profit is not the same
              as cash, Sarah. A business can be profitable and still run out of cash. We need to see your Statement
              of Cash Flows."</strong>
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Friction Point
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Sarah stared at her two financial statements. The Income Statement told her she was profitable. The
            Balance Sheet showed her financial position. But neither one explained <em>where her cash went</em>.
            She needed a third statement — one that tracks actual cash movement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">Income Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  <strong>"Did we make a profit?"</strong> — Revenues minus expenses. Uses accrual accounting, not cash.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg">Balance Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  <strong>"What do we own and owe?"</strong> — Assets, liabilities, and equity at a point in time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-800 text-lg">Cash Flow Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-sm">
                  <strong>"Where did our cash go?"</strong> — Actual cash in and out, organized by activity type.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Why Profit and Cash Are Different
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Under accrual accounting, revenue is recorded when <em>earned</em>, not when cash is received. Expenses
            are recorded when <em>incurred</em>, not when cash is paid. This creates timing differences between
            reported profit and actual cash movement.
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-6">
            <h4 className="font-semibold text-blue-900 mb-4 text-lg">Sarah's Cash Clues</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">−</span>
                <p className="text-gray-800"><strong>Accounts Receivable increased $2,100</strong> — Sarah earned this revenue but has not collected the cash yet.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-bold">−</span>
                <p className="text-gray-800"><strong>Supplies increased $400</strong> — Sarah spent cash to buy supplies that have not been used yet.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">+</span>
                <p className="text-gray-800"><strong>Accounts Payable increased $600</strong> — Sarah incurred expenses but has not yet paid cash for them.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">+</span>
                <p className="text-gray-800"><strong>Depreciation was $300</strong> — This reduced net income but required no cash payment.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h3 className="font-semibold text-amber-900 mb-3 text-xl">Why This Matters</h3>
            <p className="text-amber-800 leading-relaxed">
              Without a Cash Flow Statement, Sarah cannot explain to the bank why her profitable business has so
              little cash. Investors and lenders need to see that a business can generate actual cash — not just
              accounting profit. Today you will learn to build this third statement using the <strong>indirect
              method</strong>, starting from net income and adjusting for the differences between accrual and cash.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-8">
            Today's challenge: Can you take Sarah's Income Statement and Balance Sheet data and build a Cash Flow
            Statement that explains exactly where her cash went — and convince the bank that her business is healthy?
          </p>
        </div>

        <ComprehensionCheck
          title="Understanding the Cash Flow Need"
          description="Test your understanding of why profit differs from cash and what the cash flow statement reveals."
          questions={hookQuestions}
          showExplanations={true}
        />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg">Phase 1 Learning Target</h3>
          <p className="text-amber-800">
            By the end of this phase, you should understand why net income does not equal cash flow, what timing
            differences cause the gap between profit and cash, and why the Statement of Cash Flows is essential
            for investors and lenders.
          </p>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson04Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  );
}
