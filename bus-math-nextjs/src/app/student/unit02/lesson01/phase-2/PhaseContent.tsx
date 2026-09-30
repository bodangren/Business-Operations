import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

export default function Phase2Content() {

  const fillInBlankSentences = [
    {
      id: '1',
      text: 'The {blank} dimension of the month-end close scoreboard measures how quickly a business can produce accurate financial statements.',
      answer: 'Timing',
      hint: 'Refers to the speed of completing month-end closing'
    },
    {
      id: '2',  
      text: '{blank} entries record revenue when earned and expenses when incurred, even if cash hasn\'t changed hands yet.',
      answer: 'Accrual',
      hint: 'The fundamental concept of accrual accounting'
    },
    {
      id: '3',
      text: 'Closing entries transfer the net income or loss from the income statement to {blank} earnings.',
      answer: 'retained',
      hint: 'The equity account that accumulates business profits'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="space-y-6">
      
        <div className="max-w-4xl mx-auto space-y-8">
        {/* Month-End Close Workflow Scoreboard */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl">The Month-End Close Workflow Scoreboard</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                Month-end closing is a critical business control process. In this unit, you'll track your progress on the <strong>Month-End Close Workflow Scoreboard</strong>. This scoreboard measures the three dimensions that matter most for growing businesses.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⏱️</div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Timing</h3>
                    <p className="text-green-700 text-sm">How many days does it take to close the month?</p>
                    <div className="mt-4 p-3 bg-white rounded border border-green-300">
                      <p className="text-green-800 font-bold">Target: &lt; 2 days</p>
                      <p className="text-green-600 text-xs">Sarah's Problem: Weekend (2+ days)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Accuracy</h3>
                    <p className="text-blue-700 text-sm">Is the close error-free and balanced?</p>
                    <div className="mt-4 p-3 bg-white rounded border border-blue-300">
                      <p className="text-blue-800 font-bold">Target: Zero errors</p>
                      <p className="text-blue-600 text-xs">Sarah's Problem: Multiple errors, uncertain numbers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📋</div>
                    <h3 className="text-xl font-bold text-purple-800 mb-2">Compliance</h3>
                    <p className="text-purple-700 text-sm">Are all GAAP adjustments complete?</p>
                    <div className="mt-4 p-3 bg-white rounded border border-purple-300">
                      <p className="text-purple-800 font-bold">Target: All adjustments complete</p>
                      <p className="text-purple-600 text-xs">Sarah's Problem: Missed accruals, incomplete adjustments</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Why This Scoreboard Matters</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• <strong>Slow timing</strong> = Delayed decisions, missed opportunities</li>
                  <li>• <strong>Poor accuracy</strong> = Uncertain strategy, stakeholder mistrust</li>
                  <li>• <strong>Weak compliance</strong> = Incorrect financial statements, audit risks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Month-End Close Workflow Overview */}
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardTitle className="text-2xl">The Complete Month-End Close Workflow</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                Every business must complete these steps to close the month properly. You'll learn each step in detail over the next few lessons.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Identify Accruals</h4>
                    <p className="text-blue-700 text-sm">Revenue earned but not yet billed, expenses incurred but not yet paid</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Record Deferrals</h4>
                    <p className="text-blue-700 text-sm">Prepaid expenses used, unearned revenue recognized</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Make Adjusting Entries</h4>
                    <p className="text-blue-700 text-sm">Update account balances for depreciation, inventory adjustments, etc.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Prepare Financial Statements</h4>
                    <p className="text-blue-700 text-sm">Generate accurate income statement, balance sheet, statement of changes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-blue-800">Close Temporary Accounts</h4>
                    <p className="text-blue-700 text-sm">Transfer net income to retained earnings, reset accounts for next period</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fill in the Blank Exercise */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <FillInTheBlank
              title="Key Terms and Concepts"
              description="Complete these important statements from the month-end close workflow"
              sentences={fillInBlankSentences}
              showHints={true}
              showWordList={false}
            />
          </CardContent>
        </Card>
        </div>

      </div>
    </div>
  )
}
