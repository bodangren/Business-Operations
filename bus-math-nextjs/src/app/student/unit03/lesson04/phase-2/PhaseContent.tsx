import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function Phase2Content() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            The Indirect Method: Bridging Profit to Cash
          </h2>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200 mb-8">
            <p className="text-lg leading-relaxed text-green-900">
              Jennifer Kim, Sarah's CPA, sat down with her two completed statements. <strong>"We have your profit
              and your financial position,"</strong> she said. <strong>"Now let's build the bridge between them —
              the Statement of Cash Flows using the indirect method. It starts with your net income and explains
              every difference between profit and actual cash."</strong>
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Three Categories of Cash Flow
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Operating Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  <strong>Cash from day-to-day business.</strong> Start with Net Income, add back non-cash expenses
                  (depreciation), adjust for changes in working capital (receivables, payables, inventory).
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Investing Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  <strong>Cash for long-term assets.</strong> Purchasing or selling equipment, buildings, vehicles,
                  or investments. Cash out when buying, cash in when selling.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Financing Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  <strong>Cash from owners and creditors.</strong> Borrowing or repaying loans, issuing stock,
                  paying dividends.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Step-by-Step: The Indirect Method
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-4 text-xl">The Procedure</h4>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 1: Start with Net Income</h5>
                <p className="text-gray-700 text-sm">
                  Take the Net Income figure directly from the Income Statement. This is your starting point.
                </p>
                <div className="bg-green-50 p-2 rounded mt-2 text-sm text-green-800">
                  <strong>Net Income</strong> = from Income Statement
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 2: Add Back Non-Cash Expenses</h5>
                <p className="text-gray-700 text-sm">
                  Depreciation and amortization reduced Net Income but required no cash. Add them back.
                </p>
                <div className="bg-green-50 p-2 rounded mt-2 text-sm text-green-800">
                  <strong>+ Depreciation</strong> (non-cash expense)
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 3: Adjust for Changes in Working Capital</h5>
                <p className="text-gray-700 text-sm mb-2">
                  Compare beginning and ending Balance Sheet amounts for current assets and liabilities:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-red-700"><strong>− Increase in current assets</strong> (AR, supplies, prepaid) = cash used</p>
                  <p className="text-green-700"><strong>+ Decrease in current assets</strong> = cash freed up</p>
                  <p className="text-green-700"><strong>+ Increase in current liabilities</strong> (AP, wages payable) = cash saved (not yet paid)</p>
                  <p className="text-red-700"><strong>− Decrease in current liabilities</strong> = cash paid out</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 4: List Investing Activities</h5>
                <p className="text-gray-700 text-sm">
                  Cash spent on or received from long-term assets. Compare equipment/buildings on the Balance Sheet.
                </p>
                <div className="bg-blue-50 p-2 rounded mt-2 text-sm text-blue-800">
                  <strong>Purchase of equipment</strong> = cash outflow (negative)
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 5: List Financing Activities</h5>
                <p className="text-gray-700 text-sm">
                  Cash from or to owners and creditors. Look at loans, stock, and dividends.
                </p>
                <div className="bg-purple-50 p-2 rounded mt-2 text-sm text-purple-800">
                  <strong>Borrowing</strong> = cash inflow (positive) | <strong>Dividends paid</strong> = cash outflow (negative)
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 6: Verify the Cash Change</h5>
                <p className="text-gray-700 text-sm">
                  Operating + Investing + Financing must equal the change in cash on the Balance Sheet.
                </p>
                <div className="bg-amber-50 p-2 rounded mt-2 text-sm text-amber-800">
                  <strong>Net Change in Cash</strong> = Ending Cash − Beginning Cash
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Worked Example: Sarah's TechStart Solutions
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Here is the data Sarah gathered from her Income Statement and comparative Balance Sheets.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Income Statement (month ended April 30):</h4>
            <table className="min-w-full text-sm border-collapse border border-gray-300 mb-4">
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Service Revenue</td><td className="border border-gray-300 px-4 py-2 text-right">$8,400</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Rent Expense</td><td className="border border-gray-300 px-4 py-2 text-right">($1,800)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Salary Expense</td><td className="border border-gray-300 px-4 py-2 text-right">($1,200)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Supplies Expense</td><td className="border border-gray-300 px-4 py-2 text-right">($650)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Depreciation Expense</td><td className="border border-gray-300 px-4 py-2 text-right">($300)</td></tr>
                <tr className="bg-green-50"><td className="border border-gray-300 px-4 py-2 font-bold">Net Income</td><td className="border border-gray-300 px-4 py-2 text-right font-bold">$4,450</td></tr>
              </tbody>
            </table>

            <h4 className="font-semibold text-gray-800 mb-3 mt-6">Balance Sheet Changes:</h4>
            <table className="min-w-full text-sm border-collapse border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Account</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Beginning</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Ending</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Cash</td><td className="border border-gray-300 px-4 py-2 text-right">$9,500</td><td className="border border-gray-300 px-4 py-2 text-right">$10,300</td><td className="border border-gray-300 px-4 py-2 text-right text-green-700">+$800</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accounts Receivable</td><td className="border border-gray-300 px-4 py-2 text-right">$4,300</td><td className="border border-gray-300 px-4 py-2 text-right">$6,400</td><td className="border border-gray-300 px-4 py-2 text-right text-red-700">+$2,100</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Supplies</td><td className="border border-gray-300 px-4 py-2 text-right">$800</td><td className="border border-gray-300 px-4 py-2 text-right">$1,200</td><td className="border border-gray-300 px-4 py-2 text-right text-red-700">+$400</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Equipment</td><td className="border border-gray-300 px-4 py-2 text-right">$9,000</td><td className="border border-gray-300 px-4 py-2 text-right">$12,000</td><td className="border border-gray-300 px-4 py-2 text-right text-red-700">+$3,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accounts Payable</td><td className="border border-gray-300 px-4 py-2 text-right">$2,600</td><td className="border border-gray-300 px-4 py-2 text-right">$3,200</td><td className="border border-gray-300 px-4 py-2 text-right text-green-700">+$600</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Notes Payable</td><td className="border border-gray-300 px-4 py-2 text-right">$8,000</td><td className="border border-gray-300 px-4 py-2 text-right">$8,000</td><td className="border border-gray-300 px-4 py-2 text-right">—</td></tr>
              </tbody>
            </table>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-800">
              <strong>Additional information:</strong> No equipment was sold. No dividends were paid. No new stock issued.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-lg mb-6">
            <h4 className="font-bold text-green-900 mb-4 text-center text-lg">
              TechStart Solutions<br/>
              Statement of Cash Flows (Indirect Method)<br/>
              Month Ended April 30, 2024
            </h4>

            <div className="space-y-4 text-sm">
              <div>
                <h5 className="font-bold text-green-800 border-b border-green-300 pb-1 mb-2">Cash Flows from Operating Activities</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Net Income</span><span className="text-right">$4,450</span>
                  <span className="text-gray-600 italic">Adjustments to reconcile net income to net cash:</span><span></span>
                  <span>&nbsp;&nbsp;+ Depreciation Expense</span><span className="text-right">$300</span>
                  <span>&nbsp;&nbsp;− Increase in Accounts Receivable</span><span className="text-right">($2,100)</span>
                  <span>&nbsp;&nbsp;− Increase in Supplies</span><span className="text-right">($400)</span>
                  <span>&nbsp;&nbsp;+ Increase in Accounts Payable</span><span className="text-right">$600</span>
                  <span className="font-bold border-t border-green-300 pt-1">Net Cash from Operating Activities</span><span className="font-bold border-t border-green-300 pt-1 text-right">$2,850</span>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-blue-800 border-b border-blue-300 pb-1 mb-2">Cash Flows from Investing Activities</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Purchase of Equipment</span><span className="text-right">($3,000)</span>
                  <span className="font-bold border-t border-blue-300 pt-1">Net Cash from Investing Activities</span><span className="font-bold border-t border-blue-300 pt-1 text-right">($3,000)</span>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-purple-800 border-b border-purple-300 pb-1 mb-2">Cash Flows from Financing Activities</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span className="text-gray-500 italic">(No financing activities this period)</span><span className="text-right">$0</span>
                  <span className="font-bold border-t border-purple-300 pt-1">Net Cash from Financing Activities</span><span className="font-bold border-t border-purple-300 pt-1 text-right">$0</span>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded border border-amber-300">
                <div className="grid grid-cols-2 gap-2 font-bold text-amber-900">
                  <span>Net Change in Cash</span><span className="text-right">$2,850 − $3,000 + $0 = ($150)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <span>Beginning Cash</span><span className="text-right">$9,500</span>
                </div>
                <div className="grid grid-cols-2 gap-2 font-bold border-t border-amber-300 pt-2 mt-2">
                  <span>Ending Cash</span><span className="text-right">$9,350</span>
                </div>
                <p className="text-amber-700 text-xs mt-2">
                  Note: The ending cash should reconcile to the Balance Sheet. Any difference signals a classification error.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">Key Insight</h4>
            <p className="text-amber-800 leading-relaxed">
              Sarah's Net Income was $4,450, but her operating cash flow was only $2,850. The $1,600 difference
              came from: customers who had not yet paid ($2,100 in receivables), supplies purchased but not yet
              used ($400), partially offset by bills she had not yet paid ($600 in payables) and depreciation that
              required no cash ($300). <strong>This is the story the Cash Flow Statement tells.</strong>
            </p>
          </div>

          <Card className="border-green-200 bg-green-50 mb-6">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-green-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <ul className="list-disc list-inside space-y-1 text-green-800">
                <li>Why would a bank care more about operating cash flow than net income?</li>
                <li>If Sarah's Accounts Receivable had decreased instead of increased, how would that affect operating cash flow?</li>
                <li>What does it mean that Sarah spent more on equipment than she generated from operations?</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg">Phase 2 Learning Target</h3>
          <p className="text-amber-800">
            You should now understand the three categories of cash flow, how to start with Net Income and adjust
            for non-cash items and working capital changes, how to classify investing and financing activities,
            and how to verify that the net change in cash matches the Balance Sheet.
          </p>
        </div>
      </div>

    </div>
  );
}
