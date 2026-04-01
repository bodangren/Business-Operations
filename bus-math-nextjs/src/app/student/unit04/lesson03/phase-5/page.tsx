import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4]

const exitTicketQuestions = [
  {
    id: "q1",
    question: "What does a z-score measure?",
    answers: [
      "How many standard deviations a value is from the mean",
      "The total revenue of a business",
      "How popular a product is",
      "The difference between revenue and expenses"
    ],
    explanation: "A z-score tells you how far away a data point is from the average, measured in standard deviations. It's a way to objectively measure how unusual a value is."
  },
  {
    id: "q2",
    question: "According to the ±2 standard deviation rule, which transaction is most likely an outlier?",
    answers: [
      "A $50 transaction when the mean is $12 and std dev is $8",
      "A $15 transaction when the mean is $12 and std dev is $8",
      "A $10 transaction when the mean is $12 and std dev is $8",
      "A $8 transaction when the mean is $12 and std dev is $8"
    ],
    explanation: "z = (50-12)/8 = 4.75. This is greater than 2, so it's an outlier. The others: z=0.375, z=-0.25, z=-0.5 - all within normal range."
  },
  {
    id: "q3",
    question: "Sarah finds a $0.10 transaction in the data. The z-score is only -1.2, so it's not a statistical outlier. What should she do?",
    answers: [
      "Still investigate it - $0.10 makes no business sense for a café",
      "Keep it in the analysis without question",
      "Delete it immediately",
      "Ignore it because z-score is less than 2"
    ],
    explanation: "Business context matters! No menu item costs $0.10. This is clearly a data entry error regardless of the z-score. Always combine statistics with business judgment."
  },
  {
    id: "q4",
    question: "Why should Sarah calculate statistics both with and without outliers?",
    answers: [
      "Outliers significantly change mean and std dev, affecting all planning decisions",
      "It takes extra time but doesn't help",
      "To make the data look better",
      "Outliers don't actually affect the statistics"
    ],
    explanation: "One outlier can change the mean dramatically. Sarah needs to show café management what 'typical' sales look like vs. total sales including all business."
  },
  {
    id: "q5",
    question: "When presenting analysis to the café manager, what is Sarah's BEST approach to outliers?",
    answers: [
      "Explain which outliers were kept, flagged, or removed and why",
      "Delete all outliers so the data looks clean",
      "Pretend the outliers don't exist",
      "Show only the outliers, not the cleaned data"
    ],
    explanation: "Professional analysts document every data quality decision. This builds trust - the manager can see exactly how Sarah handled unusual values and why."
  }
]

export default function Phase5Page() {
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
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-2xl">Outlier Detection Exit Ticket</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-800">
              <p className="text-lg leading-relaxed">
                Demonstrate your ability to detect outliers, make data quality decisions, and explain your reasoning 
                using business context.
              </p>
            </CardContent>
          </Card>
        </div>

        <ComprehensionCheck
          title="Outlier Detection & Data Quality Assessment"
          description="Show that you can identify unusual values, interpret z-scores, and make appropriate data cleaning decisions"
          questions={exitTicketQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 text-xl">What You've Mastered</CardTitle>
          </CardHeader>
          <CardContent className="text-green-800">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">🔍 Detection</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✓ Calculate z-scores correctly</li>
                  <li>✓ Apply the ±2 rule</li>
                  <li>✓ Identify outliers in both directions</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">⚖️ Decision-Making</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✓ Distinguish errors from real events</li>
                  <li>✓ Choose keep/flag/remove appropriately</li>
                  <li>✓ Consider business context</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">📊 Analysis</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✓ Calculate with and without outliers</li>
                  <li>✓ Compare impact on statistics</li>
                  <li>✓ Document decisions</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900">💼 Communication</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✓ Explain reasoning to stakeholders</li>
                  <li>✓ Defend data quality choices</li>
                  <li>✓ Present cleaned vs. raw analysis</li>
                </ul>
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