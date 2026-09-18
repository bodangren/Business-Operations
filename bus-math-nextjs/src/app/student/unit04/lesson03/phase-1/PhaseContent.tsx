import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Phase1Content() {
  return (
    <div className="bg-gray-50">
      
      <div className="max-w-4xl space-y-8">
        <div className="prose prose-lg max-w-none">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-2xl">The Problem Sarah Can't Ignore</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <p className="text-lg leading-relaxed">
                Sarah has analyzed the café's weekend data and calculated that the average (mean) transaction 
                is $12.50. She's ready to use this number to help the café predict revenue and plan inventory.
              </p>
              
              <p className="text-lg leading-relaxed mt-4">
                But there's a problem. When she looks more closely at individual transactions, something 
                doesn't add up.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-xl">⚠️ The Data Doesn't Look Right</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-800">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <p className="font-medium text-orange-900">Sarah calculates: Average = $12.50</p>
                  <p className="text-orange-800 text-sm mt-1">But then she notices these transactions:</p>
                  <ul className="list-disc list-inside text-orange-800 text-sm mt-2 space-y-1">
                    <li>Coffee: $4.25</li>
                    <li>Muffin: $2.75</li>
                    <li>Latte: $5.25</li>
                    <li>Lunch combo: $12.95</li>
                    <li>Catering Order: <span className="font-bold text-red-600">$127.50</span></li>
                    <li>Data Entry: <span className="font-bold text-red-600">$0.05</span></li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">The Friction Point</h4>
                  <p className="text-orange-800">
                    If most transactions are $3-15, how can the average be $12.50? And more importantly - 
                    what should Sarah do with those unusual values? Are they errors? Legitimate business events?
                    Something in between?
                  </p>
                  <p className="text-orange-800 font-medium mt-2">
                    This is where outlier detection becomes essential for every data analyst.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-xl">In This Lesson, You'll Learn To:</CardTitle>
            </CardHeader>
            <CardContent className="text-green-800">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900">🔍 Detect Outliers</h4>
                  <p className="text-sm text-green-800">Use z-scores to objectively measure how unusual each data point is</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900">⚖️ Make Quality Decisions</h4>
                  <p className="text-sm text-green-800">Decide whether to keep, flag, or remove outliers based on business context</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900">💼 Explain Your Reasoning</h4>
                  <p className="text-sm text-green-800">Defend data cleaning decisions to café management with evidence</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900">📊 Improve Analysis Accuracy</h4>
                  <p className="text-sm text-green-800">Ensure forecasts and recommendations are based on reliable data</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

    </div>
  )
}