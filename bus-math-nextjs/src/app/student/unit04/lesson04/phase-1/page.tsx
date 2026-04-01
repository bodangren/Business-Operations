import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Users, TrendingUp, AlertTriangle } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[0]

const hookQuestions = [
  {
    id: "hook-q1",
    question: "The café manager looks at last year's data and sees that the first weekend of November had $4,200 in sales. She says, 'This year we'll probably make around $4,200 again.' What's wrong with this prediction?",
    answers: [
      "Past sales don't guarantee future results - there could be many new factors",
      "The manager should predict exactly the same amount since history repeats",
      "November is always the same as last year no matter what",
      "The café should just copy whatever they did last year exactly"
    ],
    explanation: "Forecasting is useful but never certain. The manager can use past data as a reasonable starting point, but must acknowledge that weather, competition, staffing, and many other factors can change the outcome."
  },
  {
    id: "hook-q2",
    question: "Sarah notices that café sales have been increasing each month: January $12,000, February $12,800, March $13,600. She predicts April will be $14,400. What assumption is Sarah making?",
    answers: [
      "The upward pattern will continue at the same rate",
      "Sales will definitely hit exactly $14,400 no matter what",
      "The café should stop advertising because the pattern will break",
      "All months will now have the exact same sales"
    ],
    explanation: "Sarah is extrapolating - extending the pattern forward. This can be reasonable when the underlying causes haven't changed, but it's an assumption, not a certainty. The pattern could continue, slow down, or reverse."
  },
  {
    id: "hook-q3",
    question: "A café owner uses a 10-year trend to predict next year's sales. Why might this be less reliable than using a 2-year trend?",
    answers: [
      "Old patterns may no longer apply to current business conditions",
      "More data always gives worse predictions",
      "Long-term trends are always more accurate than short-term",
      "The owner should use 50 years of data for perfect accuracy"
    ],
    explanation: "Business conditions change. A 10-year trend might include a major competitor opening nearby, a recession, or changing customer preferences. Recent data often reflects current conditions better than ancient history."
  },
  {
    id: "hook-q4",
    question: "Sarah shows the café manager a trend line and says, 'We can predict sales for next month.' The manager asks, 'But what if a competitor opens next door?' What should Sarah acknowledge?",
    answers: [
      "That forecasting can't account for unknown future events",
      "That trend lines work perfectly no matter what happens",
      "That the prediction is guaranteed to be exactly correct",
      "That forecasting is useless and should never be attempted"
    ],
    explanation: "Trend lines are powerful tools but they can't predict the unpredictable. Good forecasting acknowledges uncertainty and builds in reasonable margins rather than presenting single-point estimates as facts."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              Phase 1: Hook
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Can We Predict Next Weekend's Sales?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The café manager needs to know how much inventory and staff to plan for - but the future is uncertain
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">The Manager's Question</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  It's Thursday afternoon. The café manager is looking at her records from the past 104 weekends and 
                  turns to Sarah: "Last year this weekend, we had $4,850 in sales. Next weekend is the same holiday 
                  weekend - what should I expect this year?"
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Why This Matters</h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Too much inventory = food waste and lost money</li>
                    <li>Too little inventory = missed sales and unhappy customers</li>
                    <li>Overstaffing = unnecessary labor costs</li>
                    <li>Understaffing = slow service and damaged reputation</li>
                  </ul>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Sarah realizes this is exactly the kind of question that data can help answer - but she also knows 
                  that past patterns don't guarantee future results. Before building any Excel model, she needs to 
                  understand what forecasting can and cannot do.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  The Forecasting Tension
                </CardTitle>
              </CardHeader>
              <CardContent className="text-orange-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Here's the key tension the café manager faces:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">Why Use Historical Data</h3>
                    <ul className="text-sm text-orange-800 space-y-2 list-disc list-inside">
                      <li>Patterns exist - weekends aren't completely random</li>
                      <li>Seasonal trends are real - summer is different from winter</li>
                      <li>Growth or decline shows direction of the business</li>
                      <li>Better than guessing with no information</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">Why Past Doesn't Guarantee Future</h3>
                    <ul className="text-sm text-orange-800 space-y-2 list-disc list-inside">
                      <li>New competitors could open nearby</li>
                      <li>Weather patterns change from year to year</li>
                      <li>Staff quality and management can shift</li>
                      <li>Economic conditions affect customer spending</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed font-medium">
                  Good forecasting isn't about predicting the exact number - it's about understanding the range 
                  of reasonable outcomes and planning for uncertainty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  What a Trend Line Can (and Can't) Tell Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah pulls up a scatter plot showing monthly sales for the past year. She draws a line through 
                  the dots that represents the general direction the data is moving - a <strong>trend line</strong>.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">What a Trend Line Reveals</h3>
                  <ul className="text-sm text-purple-800 space-y-2 list-disc list-inside">
                    <li><strong>Direction:</strong> Is sales going up, down, or staying flat?</li>
                    <li><strong>Speed:</strong> How fast is it changing? (The slope)</li>
                    <li><strong>Consistency:</strong> How tightly do points cluster around the line?</li>
                    <li><strong>Pattern:</strong> Any clear relationship between time and sales?</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">What a Trend Line Does NOT Promise</h3>
                  <ul className="text-sm text-purple-800 space-y-2 list-disc list-inside">
                    <li><strong>Exact predictions:</strong> The line is an estimate, not a guarantee</li>
                    <li><strong>Account for surprises:</strong> It can't predict competitor openings, weather, etc.</li>
                    <li><strong>Work forever:</strong> Patterns that held in the past might not continue</li>
                    <li><strong>Be equally accurate:</strong> Predictions further from known data are less reliable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <ComprehensionCheck
              title="Can We Predict the Future?"
              description="Test your understanding of what forecasting can and cannot do"
              questions={hookQuestions}
              showExplanations={true}
              allowRetry={true}
            />

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Turn and Talk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-blue-800 mb-2">
                  Think about the café manager's question about next weekend's sales:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>What information from past weekends could help her plan?</li>
                  <li>What future events could completely change the prediction?</li>
                  <li>Why might relying only on last year's number be risky?</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2 text-xl">Why This Matters</h3>
              <p className="text-green-800 text-lg leading-relaxed">
                Before building any Excel forecast model, you must understand what that model can and cannot tell you. 
                A manager who treats a forecast as exact will over-order or under-order. A manager who understands the 
                range and uncertainty can plan for multiple scenarios. The goal isn't to predict the future perfectly - 
                it's to make better decisions given reasonable expectations.
              </p>
            </div>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-xl">Coming Up: Drawing and Interpreting Trend Lines</CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <p className="text-lg leading-relaxed mb-4">
                  In this lesson, you'll learn to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">Interpret Trend Lines</h4>
                    <p className="text-sm text-green-800">Read what the slope and direction tell you about the business</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">Understand "Fit"</h4>
                    <p className="text-sm text-green-800">Know how consistent the pattern is - not if it's good or bad</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">Recognize Danger Zones</h4>
                    <p className="text-sm text-green-800">Know when predictions become unreliable</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">Connect to Excel</h4>
                    <p className="text-sm text-green-800">Prepare for the Excel forecasting tools in upcoming lessons</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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