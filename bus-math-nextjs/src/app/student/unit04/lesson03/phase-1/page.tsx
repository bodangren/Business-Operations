import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[0]

const hookQuestions = [
  {
    id: "hook-q1",
    question: "The campus café has a problem with weekend food waste. Sarah from TechStart Solutions was hired as a data consultant to analyze their POS data. If the café serves 300 customers on Saturday with an average transaction of $12, what is their total Saturday revenue?",
    answers: [
      "$3,600",
      "$2,400", 
      "$4,200",
      "$3,000"
    ],
    explanation: "300 customers × $12 average transaction = $3,600 total revenue. This is exactly the kind of calculation Sarah would make when analyzing the café's weekend performance."
  },
  {
    id: "hook-q2", 
    question: "In the café's data, Sarah notices one transaction for $125 when most transactions are around $8-15. What statistical term describes this unusual data point?",
    answers: [
      "Outlier",
      "Average",
      "Median", 
      "Mode"
    ],
    explanation: "An outlier is a data point that is significantly different from other values. This $125 transaction could be a large catering order or a data entry error - Sarah needs to investigate!"
  },
  {
    id: "hook-q3",
    question: "The café manager tells Sarah they want to reduce food waste from 8-12% down to 3% or less. Why is data analysis crucial for achieving this goal?",
    answers: [
      "Data reveals patterns in customer demand that guide ordering decisions",
      "Data analysis is only used for financial reporting",
      "Customer preferences don't change over time",
      "Food waste is impossible to predict"
    ],
    explanation: "By analyzing sales patterns, Sarah can identify which items sell well on which days, helping the café order the right quantities to minimize waste while meeting customer demand."
  },
  {
    id: "hook-q4",
    question: "Sarah discovers that the café sells 40% more coffee on rainy days compared to sunny days. This relationship between weather and sales is an example of what?",
    answers: [
      "A correlation that can guide business decisions",
      "Random chance with no business value",
      "A guarantee that rain always increases profits", 
      "Data that should be ignored"
    ],
    explanation: "Correlations help businesses understand relationships between variables. Sarah can use weather forecasts to adjust staffing and inventory, though correlation doesn't guarantee causation."
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
        {/* Hook Content */}
        <div className="prose prose-lg max-w-none">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-2xl">The Data Detective Challenge</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <p className="text-lg leading-relaxed">
                Remember Sarah Chen from TechStart Solutions? She's mastered bookkeeping and automated her month-end 
                processes. Now she's facing her biggest challenge yet: becoming a data consultant for the campus café.
              </p>
              
              <p className="text-lg leading-relaxed">
                Picture this: It's a busy Saturday morning at the campus café. The line stretches out the door, some 
                staff look overwhelmed while others seem to be waiting around. Behind the counter, you see a box of 
                yesterday's unsold pastries heading straight for the trash. The café manager approaches Sarah with 
                a desperate plea.
              </p>
              
              <p className="text-lg leading-relaxed">
                "Sarah, we're losing money every weekend. Our food waste is between 8-12%, and we either have too 
                much staff during slow periods or too few during rushes. Can you help us use our two years of POS 
                data to create a plan that boosts profits while cutting waste to 3%?"
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200 my-4">
                <h3 className="font-semibold text-blue-900 mb-2">The Data Treasure Chest</h3>
                <p className="text-blue-800 mb-2">
                  Sarah opens the café's data files and discovers she has access to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>104 weekend days of sales data covering two full years</li>
                  <li>Over 15,000 individual transactions with exact timestamps</li>
                  <li>More than 50 different menu items from coffee to full meals</li>
                  <li>Weather data and campus events that might affect sales patterns</li>
                </ul>
              </div>
              
              <p className="text-lg leading-relaxed">
                But there's a problem. When Sarah first looks at the raw data, she notices something strange. 
                Most coffee transactions are between $3-6, but she spots one for $47. Most pastry sales are 
                $2-4, but there's one for $127. Are these errors or legitimate business events?
              </p>
              
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Why This Matters</h3>
                <p className="text-blue-800">
                  Sarah quickly realizes that mastering outlier detection and descriptive statistics isn't just 
                  about math - it's about uncovering the truth hidden in business data. These skills will help 
                  the café save thousands of dollars while improving customer satisfaction. The same techniques 
                  Sarah learns here could transform any business operation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          title="Data Detective Readiness Check"
          description="Test your understanding of the café's data analysis challenge"
          questions={hookQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Preview of Learning */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 text-xl">Coming Up: Your Data Analysis Toolkit</CardTitle>
          </CardHeader>
          <CardContent className="text-green-800">
            <p className="text-lg leading-relaxed mb-4">
              In this lesson, you'll learn the exact techniques Sarah uses to solve the café's challenges:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">📊 Descriptive Statistics</h4>
                <p className="text-sm text-green-800">Master mean, median, and standard deviation using Excel's Analysis ToolPak</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">🎯 Outlier Detection</h4>
                <p className="text-sm text-green-800">Use z-scores to identify unusual data points that need investigation</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">🔍 Data Detective Skills</h4>
                <p className="text-sm text-green-800">Decide which outliers are errors vs. valuable business insights</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">💼 Professional Analysis</h4>
                <p className="text-sm text-green-800">Apply the same standards used by real data consulting firms</p>
              </div>
            </div>
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