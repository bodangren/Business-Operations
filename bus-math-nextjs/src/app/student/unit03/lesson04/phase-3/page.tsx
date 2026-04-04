import DragAndDrop from "@/components/exercises/DragAndDrop";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Users } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[2];

const classificationItems = [
  {
    id: "cf-1",
    content: "Depreciation expense of $300",
    matchId: "cat-1",
    hint: "This reduced net income but required no cash"
  },
  {
    id: "cat-1",
    content: "Operating — Add back to Net Income (non-cash expense)",
    matchId: "cf-1"
  },
  {
    id: "cf-2",
    content: "Increase in Accounts Receivable of $2,100",
    matchId: "cat-2",
    hint: "Revenue recorded but cash not yet collected"
  },
  {
    id: "cat-2",
    content: "Operating — Subtract from Net Income (cash not yet received)",
    matchId: "cf-2"
  },
  {
    id: "cf-3",
    content: "Purchase of equipment for $3,000 cash",
    matchId: "cat-3",
    hint: "Cash spent on a long-term asset"
  },
  {
    id: "cat-3",
    content: "Investing — Cash outflow",
    matchId: "cf-3"
  },
  {
    id: "cf-4",
    content: "Increase in Accounts Payable of $600",
    matchId: "cat-4",
    hint: "Expenses recorded but cash not yet paid"
  },
  {
    id: "cat-4",
    content: "Operating — Add to Net Income (cash saved by not paying yet)",
    matchId: "cf-4"
  },
  {
    id: "cf-5",
    content: "Repayment of bank loan principal $2,000",
    matchId: "cat-5",
    hint: "Cash paid to a creditor"
  },
  {
    id: "cat-5",
    content: "Financing — Cash outflow",
    matchId: "cf-5"
  },
  {
    id: "cf-6",
    content: "Dividends paid to shareholders $1,500",
    matchId: "cat-6",
    hint: "Cash distributed to owners"
  },
  {
    id: "cat-6",
    content: "Financing — Cash outflow",
    matchId: "cf-6"
  }
];

export default function Unit03Lesson04Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PhaseHeader
        lesson={lesson04Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Deepening: Cash Flow Adjustments and Ratio Interpretation
          </h2>

          <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-6 rounded-lg border border-purple-200 mb-8">
            <p className="text-lg leading-relaxed text-purple-900">
              Sarah's basic cash flow statement gave the bank what they needed — but Jennifer pushed further.
              <strong> "Now let's read the story behind the numbers,"</strong> she said. <strong>"A cash flow
              statement is not just a calculation — it's a diagnostic tool. Combined with ratios, it tells you
              whether the business is healthy or heading for trouble."</strong>
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Step 1: Classify Each Cash Movement
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Before building the full statement, practice identifying where each transaction belongs. This is the
            most common error students make — misclassifying cash movements between operating, investing, and
            financing activities.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border mb-8">
            <h4 className="font-semibold text-gray-800 mb-3 text-lg">Classification Rules</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-green-50 p-3 rounded border">
                <p className="font-medium text-green-900">Operating Activities — Day-to-day business</p>
                <p className="text-green-800 mt-1">Net Income, depreciation, changes in current assets and current liabilities. If it affects Net Income or working capital, it is usually operating.</p>
              </div>
              <div className="bg-blue-50 p-3 rounded border">
                <p className="font-medium text-blue-900">Investing Activities — Long-term assets</p>
                <p className="text-blue-800 mt-1">Buying or selling equipment, buildings, vehicles, or investments. Look at changes in long-term asset accounts on the Balance Sheet.</p>
              </div>
              <div className="bg-purple-50 p-3 rounded border">
                <p className="font-medium text-purple-900">Financing Activities — Owners and creditors</p>
                <p className="text-purple-800 mt-1">Borrowing or repaying loans, issuing stock, paying dividends. Look at changes in long-term liabilities and equity accounts.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Step 2: Interpreting Ratios Alongside Cash Flow
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Numbers alone do not tell the full story. Ratios provide context. Two key ratios help assess whether
            Sarah's cash situation is a temporary timing issue or a deeper problem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">Current Ratio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-3 rounded border font-mono text-sm mb-3">
                  Current Ratio = Current Assets ÷ Current Liabilities
                </div>
                <p className="text-green-700 text-sm mb-2">
                  <strong>What it measures:</strong> Can the business pay its short-term debts?
                </p>
                <p className="text-green-700 text-sm">
                  <strong>Sarah's numbers:</strong> Current Assets ($17,900) ÷ Current Liabilities ($3,200) = <strong>5.59</strong>
                </p>
                <p className="text-green-700 text-sm mt-2">
                  <strong>Interpretation:</strong> Above 2.0 is generally healthy. Sarah has more than enough current assets to cover short-term obligations. Her cash issue is timing, not solvency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg">Return on Assets (ROA)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-3 rounded border font-mono text-sm mb-3">
                  ROA = Net Income ÷ Total Assets
                </div>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>What it measures:</strong> How efficiently does the business use its assets to generate profit?
                </p>
                <p className="text-blue-700 text-sm">
                  <strong>Sarah's numbers:</strong> $4,450 ÷ $29,900 = <strong>14.9%</strong>
                </p>
                <p className="text-blue-700 text-sm mt-2">
                  <strong>Interpretation:</strong> For every dollar of assets, Sarah generates about 15 cents of profit. This is a solid return for a service business.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Step 3: Reading the Full Story
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Now combine all three statements. A strong business shows:
          </p>

          <div className="bg-white p-6 rounded-lg border mb-8">
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-600 font-bold">1.</span>
                <p className="text-gray-800"><strong>Positive operating cash flow</strong> — The core business generates cash. Sarah's $2,850 is positive, which is good.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <p className="text-gray-800"><strong>Negative investing cash flow</strong> — The business is investing in growth. Sarah's ($3,000) equipment purchase shows she is building capacity.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">3.</span>
                <p className="text-gray-800"><strong>Healthy ratios</strong> — Current ratio above 2.0 and positive ROA signal the business is fundamentally sound.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">The Complete Picture</h4>
            <p className="text-amber-800 leading-relaxed">
              Sarah's business is <strong>profitable</strong> (Net Income $4,450), <strong>growing</strong> (investing
              in equipment), and <strong>liquid</strong> (current ratio 5.59). The low cash increase is a temporary
              timing issue — customers owe her $2,100 that she will collect soon. This is the story she needs to
              tell the bank, backed by all three statements.
            </p>
          </div>

          <Card className="border-purple-200 bg-purple-50 mb-6">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Think-Pair-Share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-2">
                Discussion Prompt (5 minutes):
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>If Sarah's current ratio were 0.8 instead of 5.59, how would that change the bank's decision?</li>
                <li>Why is it actually a good sign that investing cash flow is negative for a growing business?</li>
                <li>What would happen to Sarah's ROA if she bought more equipment but revenue stayed the same?</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <DragAndDrop
          title="Cash Flow Classification Practice"
          description="Match each transaction to its correct cash flow category and treatment."
          leftColumnTitle="Transaction"
          rightColumnTitle="Category and Treatment"
          items={classificationItems}
          showHints={true}
        />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Your Practice Challenge
          </h3>
          <p className="text-amber-800 leading-relaxed">
            Now you will practice building complete cash flow statements from scratch. In the next phase, you will
            receive trial balance data and comparative Balance Sheets. Your task: classify each change, build the
            indirect-method cash flow statement, and calculate the current ratio and ROA to assess business health.
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
