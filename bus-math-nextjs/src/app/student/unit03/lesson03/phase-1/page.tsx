import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[0];

const hookQuestions = [
  {
    id: "hook-q1",
    question: "In Lesson 02, Sarah built an Income Statement showing $4,220 in net income. But when the bank asked 'What does your business actually own?' she had no answer. Why was the Income Statement alone not enough?",
    answers: [
      "The Income Statement shows profit over time but does not show what the business owns or owes at a specific date",
      "The Income Statement only tracks cash, not the full financial picture",
      "The Income Statement is only useful for tax purposes, not for banks",
      "The Income Statement was missing her revenue accounts"
    ],
    explanation: "The Income Statement answers 'Is the business profitable?' but says nothing about what the business owns (assets) or owes (liabilities). A bank needs to see the full financial position, not just profitability."
  },
  {
    id: "hook-q2",
    question: "Sarah's net income was $4,220 this month. If she started with $15,000 in retained earnings and paid $2,000 in dividends, what happened to that $4,220?",
    answers: [
      "It flowed into Retained Earnings, increasing equity from $15,000 to $17,220",
      "It went into her personal bank account as profit",
      "It disappeared because expenses used it up",
      "It was added to the Cash account on the balance sheet"
    ],
    explanation: "Net income flows into Retained Earnings on the Balance Sheet. Beginning RE ($15,000) + Net Income ($4,220) − Dividends ($2,000) = Ending RE ($17,220). This is the bridge between the two statements."
  },
  {
    id: "hook-q3",
    question: "Which of these accounts would NOT appear on an Income Statement but WOULD appear on a Balance Sheet?",
    answers: [
      "Equipment, Accounts Receivable, and Notes Payable",
      "Service Revenue and Rent Expense",
      "Cost of Goods Sold and Sales Revenue",
      "Advertising Expense and Salary Expense"
    ],
    explanation: "Equipment (asset), Accounts Receivable (asset), and Notes Payable (liability) are balance sheet accounts. They represent what the business owns and owes, not revenues or expenses earned/incurred during a period."
  },
  {
    id: "hook-q4",
    question: "The accounting equation is Assets = Liabilities + Equity. If Sarah's business has $25,000 in assets and $10,000 in liabilities, what is her equity?",
    answers: [
      "$15,000 — Equity is what remains after liabilities are subtracted from assets",
      "$35,000 — You add assets and liabilities together",
      "$10,000 — Equity equals liabilities",
      "$25,000 — Equity equals assets"
    ],
    explanation: "The accounting equation must always balance. Assets ($25,000) = Liabilities ($10,000) + Equity. So Equity = $25,000 − $10,000 = $15,000."
  }
];

export default function Unit03Lesson03Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            The Missing Chapter: What Does the Business Actually Own?
          </h2>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-lg leading-relaxed text-blue-900">
              Last lesson, Sarah built a clean Income Statement showing $4,220 in net income. She was proud. But when
              she walked into the bank for a small business loan, the loan officer asked a question she could not answer:
              <strong> "What does your business own, and what does it owe?"</strong>
            </p>

            <p className="text-lg leading-relaxed text-blue-900 mt-4">
              Her Income Statement told the <em>plot</em> — how profitable the business was. But it said nothing about
              the <em>setting</em> — the financial position at a specific point in time. Sarah had $8,500 in cash,
              $6,400 that customers still owed her, a $12,000 piece of equipment, and a $5,000 loan she still needed
              to repay. None of that appeared on the Income Statement.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Friction Point
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Sarah stared at her trial balance — a long list of accounts with dollar amounts. She could see Cash,
            Equipment, Accounts Payable, Common Stock, and dozens of other lines. But she did not know how to organize
            them into a document that would answer the bank's question. She needed a new tool.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">What the Income Statement Tells You</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Revenues earned during a period</li>
                  <li>• Expenses incurred during a period</li>
                  <li>• Net Income (profit or loss)</li>
                  <li>• Answers: "Is the business profitable?"</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg">What the Income Statement Does NOT Tell You</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• How much cash the business has right now</li>
                  <li>• What equipment or property the business owns</li>
                  <li>• What debts are still unpaid</li>
                  <li>• How much the owners have invested</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Balance Sheet: A Snapshot in Time
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            The Balance Sheet answers the question the Income Statement cannot: <strong>"What is the financial position
            of this business at a specific date?"</strong> It lists everything the business owns (assets), everything
            it owes (liabilities), and what is left over for the owners (equity).
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-4">
              Assets = Liabilities + Equity
            </div>
            <p className="text-blue-700 text-lg">
              The accounting equation must always balance. What you own equals what you owe plus what you are worth.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3 text-xl">Why This Matters for Sarah</h3>
            <p className="text-blue-800 leading-relaxed">
              Without a Balance Sheet, Sarah cannot prove to the bank that she has enough assets to support a loan,
              or that her debts are manageable. The bank needs to see the full picture — not just whether she made
              a profit, but whether the business is financially stable. Today you will learn to build that picture
              from a trial balance, just like Sarah needed to do.
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-8">
            Today's challenge: Can you take Sarah's trial balance and organize it into a Balance Sheet that proves
            the business is stable — and shows exactly how last month's profit connects to this month's equity?
          </p>
        </div>

        <ComprehensionCheck
          title="Understanding the Balance Sheet Need"
          description="Test your understanding of why the Income Statement alone is not enough and what the Balance Sheet adds."
          questions={hookQuestions}
          showExplanations={true}
        />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg">Phase 1 Learning Target</h3>
          <p className="text-amber-800">
            By the end of this phase, you should understand why a Balance Sheet is needed in addition to the Income
            Statement, what the accounting equation means, and how net income from the Income Statement connects to
            equity on the Balance Sheet through Retained Earnings.
          </p>
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
