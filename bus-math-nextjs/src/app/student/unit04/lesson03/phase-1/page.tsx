import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[0]

const hookQuestions = [
  {
    id: "hook-q1",
    question: "Sarah notices a transaction for $127.50 in the café data when most transactions are between $3-15. Before calculating anything, what is the FIRST question she should ask about this unusual value?",
    answers: [
      "Is this a legitimate business event or a data entry error?",
      "How much did the café earn today?",
      "What is the median transaction amount?",
      "Should I delete this value immediately?"
    ],
    explanation: "The first question is always: is this real or an error? Until you investigate, you don't know whether to keep, flag, or remove the value. This is the friction point that makes outlier detection necessary."
  },
  {
    id: "hook-q2",
    question: "The café manager says Saturday's average (mean) transaction was $18.50. However, when Sarah looks at individual transactions, she sees mostly $4-12 values with just a few very high ones. Why is this difference important?",
    answers: [
      "The mean is pulled up by extreme values, so median might be more representative",
      "The manager is wrong about the average",
      "The data must be corrupted",
      "This difference doesn't matter for business decisions"
    ],
    explanation: "When outliers are present, the mean can be misleading. A few very high transactions pull the average up, making typical customers seem to spend more than they actually do. This is why we need multiple measures and outlier detection."
  },
  {
    id: "hook-q3",
    question: "Sarah finds two unusual values in the data: $0.05 (likely a data entry error) and $127.50 (could be a catering order). What makes these different from regular transactions beyond just being unusual numbers?",
    answers: [
      "One is almost certainly an error while the other might be real business - they need different treatment",
      "Both should be deleted from the data",
      "Neither matters for the analysis",
      "They are both normal and should be kept as-is"
    ],
    explanation: "Not all unusual values are the same type of problem. Some are clearly errors ($0.05 makes no sense) while others might be legitimate large events. The decision about what to do with outliers is a judgment call, not just a calculation."
  },
  {
    id: "hook-q4",
    question: "If the café's typical Saturday has 300 transactions with an average of $12, what approximate total revenue would you expect?",
    answers: [
      "$3,600",
      "$1,200",
      "$12,000",
      "$36,000"
    ],
    explanation: "300 transactions × $12 average = $3,600 total revenue. This quick estimate helps Sarah spot when something is clearly wrong - if the data shows $36,000, something is very wrong!"
  }
]

export default function Phase1Page() {
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

        <ComprehensionCheck
          title="Data Detective Readiness Check"
          description="Test your understanding of why outlier detection matters"
          questions={hookQuestions}
          showExplanations={true}
          allowRetry={true}
        />
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