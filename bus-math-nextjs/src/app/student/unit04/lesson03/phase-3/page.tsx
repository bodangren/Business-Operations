import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[2]

const transactionData = [
  { id: 1, item: "Coffee", amount: 4.25 },
  { id: 2, item: "Muffin", amount: 2.75 },
  { id: 3, item: "Latte", amount: 5.25 },
  { id: 4, item: "Lunch Combo", amount: 12.95 },
  { id: 5, item: "Catering Order", amount: 127.50 },
  { id: 6, item: "Tea", amount: 3.50 },
  { id: 7, item: "Salad", amount: 8.75 },
  { id: 8, item: "Data Error", amount: 0.05 },
  { id: 9, item: "Breakfast Sandwhich", amount: 6.95 },
  { id: 10, item: "Cookie", amount: 2.25 }
]

const mean = 17.42
const stdDev = 38.47

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="prose prose-lg max-w-none">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl">Sarah's First Investigation</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800">
              <p className="text-lg leading-relaxed">
                Sarah selects a sample of 10 transactions from last Saturday. She calculates the statistics 
                and now needs your help to identify and decide what to do with the outliers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-xl">The Sample Data</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="text-left p-2">Transaction</th>
                    <th className="text-right p-2">Amount ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((t) => (
                    <tr key={t.id} className="border-b border-blue-100">
                      <td className="p-2">{t.item}</td>
                      <td className="text-right p-2 font-mono">{t.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="font-semibold bg-blue-50">
                    <td className="p-2">Mean (μ)</td>
                    <td className="text-right p-2 font-mono">{mean.toFixed(2)}</td>
                  </tr>
                  <tr className="font-semibold bg-blue-50">
                    <td className="p-2">Standard Deviation (σ)</td>
                    <td className="text-right p-2 font-mono">{stdDev.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-xl">Your Task: Complete the Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-800 space-y-6">
              <p className="text-lg">
                Using z = (x - μ) / σ, calculate the z-score for each transaction and decide:
              </p>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3">Analysis Template</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-orange-200">
                      <th className="text-left p-2">Transaction</th>
                      <th className="text-right p-2">x</th>
                      <th className="text-right p-2">z = (x-μ)/σ</th>
                      <th className="text-center p-2">|z| &gt; 2?</th>
                      <th className="text-left p-2">Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-orange-100">
                      <td className="p-2">Coffee</td>
                      <td className="text-right p-2 font-mono">4.25</td>
                      <td className="text-right p-2 font-mono">{(4.25 - mean) / stdDev}</td>
                      <td className="text-center p-2">No</td>
                      <td className="p-2">Keep</td>
                    </tr>
                    <tr className="border-b border-orange-100">
                      <td className="p-2">Muffin</td>
                      <td className="text-right p-2 font-mono">2.75</td>
                      <td className="text-right p-2 font-mono">{(2.75 - mean) / stdDev}</td>
                      <td className="text-center p-2">No</td>
                      <td className="p-2">Keep</td>
                    </tr>
                    <tr className="border-b border-orange-100 bg-red-50">
                      <td className="p-2 font-semibold">Catering Order</td>
                      <td className="text-right p-2 font-mono font-semibold">127.50</td>
                      <td className="text-right p-2 font-mono font-semibold text-red-600">13.94</td>
                      <td className="text-center p-2 font-bold text-red-600">YES</td>
                      <td className="p-2">Investigate</td>
                    </tr>
                    <tr className="border-b border-orange-100 bg-yellow-50">
                      <td className="p-2 font-semibold">Data Error</td>
                      <td className="text-right p-2 font-mono font-semibold">0.05</td>
                      <td className="text-right p-2 font-mono font-semibold text-yellow-600">-1.51</td>
                      <td className="text-center p-2 font-bold text-yellow-600">Close</td>
                      <td className="p-2">Correct</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Discussion Questions</h4>
                <ol className="list-decimal list-inside text-orange-800 space-y-2">
                  <li>Why does the catering order have such a huge z-score while the data error doesn't?</li>
                  <li>Despite the different z-scores, why should both be treated as outliers?</li>
                  <li>How would your analysis change if the catering order was actually $12.75 (a typo)?</li>
                  <li>What additional information would help Sarah make better decisions about these outliers?</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-xl">Complication: The Impact of Outliers on Statistics</CardTitle>
            </CardHeader>
            <CardContent className="text-green-800 space-y-4">
              <p className="text-lg">
                Here's something important Sarah noticed: the catering order changes everything about the statistics.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">With Outliers</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>Mean = $17.42</li>
                    <li>Std Dev = $38.47</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Without Outliers</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>Mean = $5.19</li>
                    <li>Std Dev = $3.32</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-900 mb-2">Why This Matters</h4>
                <p className="text-green-800">
                  The mean more than tripled when the outlier is included! This is why Sarah must decide what 
                  to do with outliers <em>before</em> calculating statistics for planning. Her recommendation 
                  to the café depends on this choice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-900 text-xl">Next: Your Turn</CardTitle>
          </CardHeader>
          <CardContent className="text-indigo-800">
            <p className="text-lg leading-relaxed">
              In the next phase, you'll work with a larger dataset, develop your own outlier detection workflow, 
              and practice defending your data quality decisions with clear reasoning.
            </p>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit04Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  )
}