import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[1]

export default function Phase2Page() {
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
              <CardTitle className="text-purple-900 text-2xl">The Z-Score: A "Weirdness Meter" for Data</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800">
              <p className="text-lg leading-relaxed">
                Sarah needs a way to measure exactly how unusual each transaction is. She can't just look at 
                numbers and guess - she needs an objective standard. That's where z-scores come in.
              </p>
              
              <p className="text-lg leading-relaxed mt-4">
                A <strong>z-score</strong> tells you how many standard deviations away from the average a 
                particular value sits. It's like a "weirdness meter" - the farther from zero, the more unusual the value.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-xl">The Z-Score Formula</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800 space-y-4">
              <div className="bg-white p-6 rounded-lg border border-blue-200 text-center">
                <p className="text-2xl font-mono text-blue-900 font-bold">
                  z = (x - μ) / σ
                </p>
                <div className="text-left mt-4 space-y-2 text-blue-800">
                  <p><strong className="text-blue-900">x</strong> = the individual transaction amount</p>
                  <p><strong className="text-blue-900">μ (mu)</strong> = the mean (average) of all transactions</p>
                  <p><strong className="text-blue-900">σ (sigma)</strong> = the standard deviation</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">What the Score Means</h4>
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li><strong className="text-green-700">z = 0:</strong> Exactly average - totally normal</li>
                    <li><strong className="text-green-700">z = ±1:</strong> Within normal range</li>
                    <li><strong className="text-yellow-700">z = ±2:</strong> Unusual - worth checking</li>
                    <li><strong className="text-red-700">z &gt; 2 or z &lt; -2:</strong> Likely outlier - needs investigation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Why 2 is the Magic Number</h4>
                  <p className="text-blue-800 text-sm">
                    In a normal distribution, about 95% of values fall within 2 standard deviations of the mean. 
                    Anything beyond that is statistically unusual - only about 5% of data points. That's rare enough 
                    to investigate!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-xl">Step-by-Step: Sarah Calculates Z-Scores</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-800 space-y-4">
              <p className="text-lg">
                Let's walk through Sarah's calculation for the catering order of $127.50:
              </p>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3">Step 1: Find the mean and standard deviation</h4>
                <p className="text-orange-800">
                  From earlier analysis, Sarah knows: Mean (μ) = $12.50, Standard Deviation (σ) = $8.25
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3">Step 2: Calculate the z-score</h4>
                <div className="font-mono text-lg text-orange-900 bg-orange-100 p-3 rounded">
                  z = (127.50 - 12.50) / 8.25<br/>
                  z = 115.00 / 8.25<br/>
                  <strong>z = 13.94</strong>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3">Step 3: Interpret the result</h4>
                <p className="text-orange-800">
                  A z-score of <strong>13.94</strong> is way more than 2. This transaction is roughly 14 
                  standard deviations above average - that's essentially impossible in normal circumstances. 
                  Sarah knows immediately this needs investigation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 text-xl">Now Try It: Calculate the Z-Score</CardTitle>
            </CardHeader>
            <CardContent className="text-red-800 space-y-4">
              <p className="text-lg">
                Now calculate the z-score for the suspicious $0.05 transaction:
              </p>

              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="text-red-800 mb-3">Given: Mean = $12.50, Standard Deviation = $8.25, Transaction = $0.05</p>
                <p className="font-mono text-red-900">
                  z = (0.05 - 12.50) / 8.25 = ?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">Your calculation:</h4>
                  <p className="text-red-800 text-sm">z = -12.45 / 8.25 = -1.51</p>
                  <p className="text-red-800 text-sm mt-2">Wait, that's only -1.51, which is less than 2... so it's not an outlier by the numbers?</p>
                </div>
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">But wait!</h4>
                  <p className="text-red-800 text-sm">
                    Actually, -1.51 is just outside the ±2 range when you consider direction. More importantly, 
                    <strong>$0.05 makes no business sense</strong> - no menu item costs that little. This is 
                    clearly a data entry error that needs correction regardless of the z-score.
                  </p>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <h4 className="font-semibold text-red-900 mb-2">Key Insight: Statistics + Business Context</h4>
                <p className="text-red-800">
                  Z-scores tell you what's unusual <em>mathematically</em>. But you also need business judgment 
                  to decide what's unusual <em>practically</em>. $127.50 with z=13.94 is clearly a real transaction 
                  (catering order). $0.05 with z=-1.51 is clearly an error (no items cost 5 cents).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-xl">The Three Data Quality Decisions</CardTitle>
            </CardHeader>
            <CardContent className="text-green-800 space-y-4">
              <p className="text-lg">
                Once Sarah identifies an outlier, she has three choices:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900">1. KEEP - If it's legitimate business</h4>
                  <p className="text-green-800 text-sm mt-1">
                    The $127.50 catering order is real business. Sarah keeps it but notes it separately for planning.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900">2. FLAG - If it's uncertain</h4>
                  <p className="text-green-800 text-sm mt-1">
                    Sarah marks unusual values so she can analyze both with and without them to see the impact.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900">3. CORRECT/REMOVE - If it's clearly an error</h4>
                  <p className="text-green-800 text-sm mt-1">
                    The $0.05 data entry error should be corrected to the actual value or removed from analysis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-900 text-xl">Next: Applied Outlier Detection</CardTitle>
          </CardHeader>
          <CardContent className="text-indigo-800">
            <p className="text-lg leading-relaxed">
              Now you'll practice the complete outlier detection workflow with the actual café data - 
              calculating z-scores, making business decisions, and defending your choices with evidence.
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