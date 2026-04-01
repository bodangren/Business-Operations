import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[1]

const terminologyExercise = [
  {
    id: "1",
    text: "A {blank} is a line that shows the general direction data is moving over time.",
    answer: "trend",
    hint: "A line that shows the pattern direction"
  },
  {
    id: "2", 
    text: "The {blank} of a trend line tells you how fast the data is changing.",
    answer: "slope",
    hint: "Rate of change - steep or flat"
  },
  {
    id: "3",
    text: "If the trend line goes up from left to right, the relationship is {blank} (as X increases, Y increases).",
    answer: "positive",
    hint: "Same direction movement"
  },
  {
    id: "4",
    text: "If sales drop when advertising spending drops, this is a {blank} relationship.",
    answer: "positive",
    hint: "Both go in the same direction"
  },
  {
    id: "5",
    text: "R-squared measures how {blank} the data points are around the trend line.",
    answer: "close",
    hint: "How tightly clustered"
  },
  {
    id: "6",
    text: "A low R-squared means the pattern is {blank} - predictions will be less certain.",
    answer: "weak",
    hint: "Not very consistent"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              Phase 2: Introduction
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Trend Lines: Finding the Story in Your Data
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn to draw and interpret trend lines that reveal the pattern behind the numbers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">What Is a Trend Line?</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah pulls up a scatter plot showing each weekend's sales for the past 3 months. The dots look 
                  scattered - some high, some low - but she notices a general tendency for the dots to creep upward 
                  over time. She draws a straight line through the middle that represents this general tendency. 
                  This is a <strong>trend line</strong>.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3">Trend Line Definition</h3>
                  <p className="text-blue-800">
                    A <strong>trend line</strong> is a straight line drawn through a scatter plot that represents 
                    the general direction data is moving. It summarizes "on average" where the data points fall.
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed">
                  The key insight: trend lines don't tell you what will happen - they tell you what has been happening. 
                  If the pattern holds, you can use it to make reasonable predictions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">Understanding Slope</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah looks at her trend line and notices it's not flat - it tilts upward. The <strong>slope</strong> 
                  of a trend line tells you how fast the data is changing.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">Positive Slope</h3>
                    <p className="text-purple-800 text-sm">
                      Line goes up from left to right. As time increases, sales increase.
                    </p>
                    <p className="text-purple-800 text-sm mt-2">
                      <strong>Café example:</strong> Each month, average sales go up by about $400
                    </p>
                    <p className="text-purple-800 text-sm font-mono mt-2">
                      → Month 1: $8,000<br/>
                      → Month 2: $8,400<br/>
                      → Month 3: $8,800
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">Negative Slope</h3>
                    <p className="text-purple-800 text-sm">
                      Line goes down from left to right. As time increases, sales decrease.
                    </p>
                    <p className="text-purple-800 text-sm mt-2">
                      <strong>Café example:</strong> Each month, average sales drop by about $200
                    </p>
                    <p className="text-purple-800 text-sm font-mono mt-2">
                      → January: $10,000<br/>
                      → February: $9,800<br/>
                      → March: $9,600
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">Zero Slope</h3>
                    <p className="text-purple-800 text-sm">
                      Line is perfectly flat. No clear increase or decrease over time.
                    </p>
                    <p className="text-purple-800 text-sm mt-2">
                      <strong>Café example:</strong> Sales stay around $9,000 every month
                    </p>
                    <p className="text-purple-800 text-sm font-mono mt-2">
                      → January: $9,000<br/>
                      → February: $9,100<br/>
                      → March: $8,900
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">What Slope Tells You</h3>
                    <p className="text-purple-800 text-sm">
                      Slope is the rate of change. For each unit of time (month, week), the outcome changes by this amount.
                    </p>
                    <p className="text-purple-800 text-sm mt-2">
                      <strong>Business use:</strong> "If this pattern continues, sales will increase/decrease by [slope] each [time unit]"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl">Understanding Fit (R-squared)</CardTitle>
              </CardHeader>
              <CardContent className="text-orange-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah notices that in some months, the dots are very close to her trend line. In other months, 
                  the dots are scattered far from the line. This is <strong>fit</strong> - how closely the data 
                  follows the pattern.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">High Fit (Close to 1.0)</h3>
                    <p className="text-orange-800 text-sm">
                      Data points cluster tightly around the trend line. The pattern is consistent.
                    </p>
                    <p className="text-orange-800 text-sm mt-2">
                      <strong>Café example:</strong> Sales vary predictably by about $200-300 each month
                    </p>
                    <p className="text-orange-800 text-sm mt-2 font-medium text-green-700">
                      Predictions are more reliable when fit is high
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">Low Fit (Close to 0)</h3>
                    <p className="text-orange-800 text-sm">
                      Data points are scattered widely around the trend line. The pattern is weak.
                    </p>
                    <p className="text-orange-800 text-sm mt-2">
                      <strong>Café example:</strong> Sales jump from $8,000 to $12,000 to $7,500 - no clear pattern
                    </p>
                    <p className="text-orange-800 text-sm mt-2 font-medium text-red-700">
                      Predictions are less certain when fit is low
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-2">Critical Understanding: Fit ≠ Quality</h3>
                  <p className="text-orange-800 text-sm">
                    A low R-squared doesn't mean something is "wrong" with your data. It means the pattern is <em>less consistent</em>. 
                    A sales figure that varies wildly from month to month might still be a perfectly normal business - it just has 
                    more variability that can't be explained by time alone.
                  </p>
                  <p className="text-orange-800 text-sm mt-2">
                    <strong>Fit tells you how much you can trust the prediction, not whether the business is good or bad.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl">The Forecasting Danger Zone</CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah wants to use her trend line to predict sales for next year. But here's the critical rule: 
                  predictions become less reliable the further you go from your known data.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">The Danger Zone Rule</h3>
                  <ul className="text-green-800 space-y-2 list-disc list-inside">
                    <li><strong>Within data range:</strong> Most reliable - predicting for times similar to your data</li>
                    <li><strong>Slightly outside:</strong> Reasonable - a few months beyond the data</li>
                    <li><strong>Far outside:</strong> Unreliable - predicting years into the future</li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-100 p-4 rounded border border-green-200">
                    <h4 className="font-medium text-green-900 mb-2">Reliable Prediction</h4>
                    <p className="text-green-800 text-sm">
                      Using 12 months of data to predict the next 1-2 months
                    </p>
                    <p className="text-green-800 text-sm mt-1">
                      "We have summer data, let's plan for late summer"
                    </p>
                  </div>
                  <div className="bg-red-100 p-4 rounded border border-red-200">
                    <h4 className="font-medium text-red-900 mb-2">Unreliable Prediction</h4>
                    <p className="text-red-800 text-sm">
                      Using 12 months of data to predict 3+ years ahead
                    </p>
                    <p className="text-red-800 text-sm mt-1">
                      "Let's plan our 2028 budget based on 2024 sales"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <FillInTheBlank
              title="Trend Line Terminology Check"
              description="Complete these sentences to check your understanding of trend line vocabulary"
              sentences={terminologyExercise}
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
            />

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Putting It All Together</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah can now read a trend line like a pro. When she looks at any scatter plot with a trend line, 
                  she asks three questions:
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3">Sarah's Trend Line Checklist</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-400 pl-3">
                      <p className="font-medium text-blue-900">1. Direction (Positive or Negative?)</p>
                      <p className="text-blue-800 text-sm">Is sales going up or down over time?</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="font-medium text-blue-900">2. Speed (What is the slope?)</p>
                      <p className="text-blue-800 text-sm">How fast is it changing per time period?</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-3">
                      <p className="font-medium text-blue-900">3. Consistency (What is R-squared?)</p>
                      <p className="text-blue-800 text-sm">How tightly do points cluster around the line?</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed font-medium">
                  With this checklist, Sarah can interpret any trend line and understand what it does - and doesn't - tell her about the business.
                </p>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2 text-xl">Why This Matters</h3>
              <p className="text-blue-800 text-lg leading-relaxed">
                Before building Excel forecasting tools, you need to understand what they're doing. A trend line is simply 
                a visual summary of the pattern in your data. When you add Excel's FORECAST or TREND functions, they're 
                doing the same math automatically. Understanding the logic first makes you a better analyst - you won't 
                trust the numbers more than you should, and you'll know when to question the predictions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}