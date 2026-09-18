import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";


const assessmentQuestions = [
  {
    id: "assess-q1",
    question: "A company has the following: Cash $8,000, Equipment $20,000, Accounts Payable $5,000, Common Stock $10,000, and Retained Earnings $13,000. What are Total Assets?",
    answers: [
      "$28,000",
      "$38,000",
      "$23,000",
      "$18,000"
    ],
    explanation: "Total Assets = Cash ($8,000) + Equipment ($20,000) = $28,000. Only asset accounts are included. Accounts Payable is a liability, Common Stock and Retained Earnings are equity."
  },
  {
    id: "assess-q2",
    question: "Beginning Retained Earnings is $12,000. Net Income this period is $5,000. Dividends paid are $1,500. What is Ending Retained Earnings?",
    answers: [
      "$15,500",
      "$18,500",
      "$10,500",
      "$5,500"
    ],
    explanation: "Ending RE = Beginning RE ($12,000) + Net Income ($5,000) − Dividends ($1,500) = $15,500."
  },
  {
    id: "assess-q3",
    question: "Which of these accounts would NOT appear on a Balance Sheet?",
    answers: [
      "Service Revenue",
      "Accounts Receivable",
      "Notes Payable",
      "Common Stock"
    ],
    explanation: "Service Revenue is an Income Statement account (temporary account). It does not appear directly on the Balance Sheet. Its effect flows through Net Income into Retained Earnings."
  },
  {
    id: "assess-q4",
    question: "Unearned Revenue of $2,000 appears on a company's trial balance. How should it be classified on the Balance Sheet?",
    answers: [
      "As a liability — the company owes services or products to customers who have already paid",
      "As revenue — it represents money the company has earned",
      "As an asset — the company has received cash",
      "As equity — it belongs to the owners"
    ],
    explanation: "Unearned Revenue is a liability. The company has received payment but has not yet delivered the goods or services. It represents an obligation, not earned income."
  },
  {
    id: "assess-q5",
    question: "A Balance Sheet shows Total Assets of $50,000 and Total Liabilities of $22,000. What must Total Equity be?",
    answers: [
      "$28,000",
      "$72,000",
      "$22,000",
      "$50,000"
    ],
    explanation: "Assets = Liabilities + Equity. So Equity = Assets − Liabilities = $50,000 − $22,000 = $28,000."
  },
];

export default function Phase5Content() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white">

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">
            Exit Ticket: Balance Sheet and Retained Earnings Check
          </h2>

          <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-lg border border-orange-200 mb-8">
            <p className="text-lg leading-relaxed text-orange-900">
              This short assessment checks your understanding of balance sheet construction, the accounting equation,
              retained earnings logic, and common classification errors. Answer carefully — these questions reflect the
              kinds of decisions you will need to make when building real financial statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Classification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Correctly sorting accounts into assets, liabilities, and equity — including tricky ones like Unearned Revenue and Prepaid Rent.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Retained Earnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  Calculating Ending RE from Beginning RE, Net Income, and Dividends. Understanding how the Income Statement feeds the Balance Sheet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  The Equation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Verifying that Assets = Liabilities + Equity and diagnosing what goes wrong when it does not balance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <ComprehensionCheck
          title="Balance Sheet & Retained Earnings Exit Ticket"
          description="Demonstrate your understanding of balance sheet construction, retained earnings logic, and the accounting equation."
          questions={assessmentQuestions}
          showExplanations={true}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2 text-lg">Exit Ticket Success</h3>
            <p className="text-green-800 mb-3">
              You have demonstrated mastery when you can correctly answer questions about:
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Classifying accounts into assets, liabilities, and equity</li>
              <li>Calculating Ending Retained Earnings from the roll-forward formula</li>
              <li>Explaining why revenue and expense accounts do not appear on the Balance Sheet</li>
              <li>Using the accounting equation to find missing values</li>
              <li>Identifying common errors like misclassifying Unearned Revenue</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
