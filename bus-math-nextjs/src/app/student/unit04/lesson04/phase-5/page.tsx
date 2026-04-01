import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Award, Target } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[4]

const assessmentQuestions = [
  {
    id: "assess-q1",
    question: "A trend line shows sales increasing by $200 per month. If this month's sales are $10,000, what would you predict for 3 months from now?",
    answers: [
      "$10,600",
      "$10,200",
      "$10,400",
      "$9,800"
    ],
    explanation: "Starting from $10,000, add $200 × 3 months = $600. $10,000 + $600 = $10,600"
  },
  {
    id: "assess-q2",
    question: "What does a trend line with a negative slope tell you?",
    answers: [
      "The outcome decreases as the input increases",
      "The prediction is definitely wrong",
      "You should not use forecasting",
      "The data must be incorrect"
    ],
    explanation: "Negative slope means the variables move in opposite directions - as one increases, the other decreases."
  },
  {
    id: "assess-q3",
    question: "R-squared = 0.4. What does this tell you about the pattern?",
    answers: [
      "The pattern is weak - predictions will be uncertain",
      "The data is definitely wrong",
      "The relationship is negative",
      "You should never use this data"
    ],
    explanation: "R-squared of 0.4 means only 40% of variation is explained by the pattern. 60% is unexplained - predictions will be uncertain."
  },
  {
    id: "assess-q4",
    question: "Why is predicting 5 years into the future from 6 months of data problematic?",
    answers: [
      "Predictions become unreliable far outside the known data range",
      "Excel cannot calculate that far",
      "Longer predictions are always more accurate",
      "Short-term data cannot show trends"
    ],
    explanation: "The forecasting danger zone - the further you predict from your data, the less reliable the prediction becomes."
  },
  {
    id: "assess-q5",
    question: "You find that more staff = more sales, but the relationship flattens out at higher staffing levels. What is this called?",
    answers: [
      "Diminishing returns",
      "A negative relationship",
      "High R-squared",
      "A positive error"
    ],
    explanation: "Diminishing returns means each additional unit of input adds less benefit than the previous one."
  },
  {
    id: "assess-q6",
    question: "What is the most important thing to remember about any forecast?",
    answers: [
      "It shows what might happen, not what will definitely happen",
      "It is always exactly correct",
      "It accounts for all future events",
      "It replaces business judgment"
    ],
    explanation: "Good forecasting acknowledges uncertainty. A forecast is a reasonable estimate, not a guarantee."
  },
  {
    id: "assess-q7",
    question: "A scatter plot shows a strong positive relationship between advertising spend and sales. What does this mean?",
    answers: [
      "More advertising → more sales",
      "More advertising → less sales",
      "Advertising and sales are unrelated",
      "The café should stop advertising"
    ],
    explanation: "Positive relationship means both variables increase together - more advertising is associated with more sales."
  },
  {
    id: "assess-q8",
    question: "When interpreting a trend line, what does the slope tell you?",
    answers: [
      "The rate of change - how much the outcome changes per unit increase in the input",
      "Whether the data is correct",
      "What will definitely happen next month",
      "If the business is good or bad"
    ],
    explanation: "Slope quantifies the relationship - for each unit increase in the input (like $100 in ads or 1 month), the outcome changes by the slope amount."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Forecasting Logic Exit Ticket
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Short MCQ check on trend line interpretation and forecasting concepts
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Assessment Overview</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  This assessment checks your understanding of what forecasting can and cannot do - the foundational 
                  concepts you need before building Excel models in upcoming lessons.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">What This Assessment Tests</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-900">Conceptual Understanding</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>What trend lines do and don't show</li>
                        <li>Positive vs. negative relationships</li>
                        <li>What R-squared means (and doesn't mean)</li>
                        <li>When predictions become unreliable</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">Applied Skills</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>Calculating predictions from slope</li>
                        <li>Interpreting slope in business terms</li>
                        <li>Recognizing patterns like diminishing returns</li>
                        <li>Identifying forecasting limitations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Focus on understanding the concepts, not just memorizing formulas. These ideas will make your 
                  Excel forecasting work much more meaningful.
                </p>
              </CardContent>
            </Card>

            <ComprehensionCheck
              title="Forecasting Logic Exit Ticket"
              description="Complete this short assessment to check your understanding"
              questions={assessmentQuestions}
              showExplanations={true}
              allowRetry={true}
            />

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  Proficiency Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Your performance on this assessment indicates your readiness for the Excel forecasting tools coming next.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Expert (7-8 correct)</h3>
                    <p className="text-green-800 text-sm">
                      Ready for Excel forecasting. You understand the logic behind the tools you'll use.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-900 mb-2">Proficient (5-6 correct)</h3>
                    <p className="text-yellow-800 text-sm">
                      Good foundation. Review any missed concepts before Excel lessons.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">Developing (1-4 correct)</h3>
                    <p className="text-red-800 text-sm">
                      Review phases 1-3 before continuing. Make sure you understand the concepts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Connection to Excel Lessons
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Now that you understand what forecasting does (and doesn't do), you're ready to learn the Excel 
                  tools that automate this process. In upcoming lessons, you'll use Excel to:
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">What's Coming in Lessons 5-6</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-green-900">Data Cleaning</h4>
                      <ul className="text-green-800 space-y-1 list-disc list-inside">
                        <li>Import and organize café data</li>
                        <li>Handle missing or unusual values</li>
                        <li>Prepare data for analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-900">Statistical Analysis</h4>
                      <ul className="text-green-800 space-y-1 list-disc list-inside">
                        <li>Build scatter plots automatically</li>
                        <li>Add trend lines with R-squared</li>
                        <li>Use FORECAST and TREND functions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  The concepts from this lesson - slope, fit, danger zones - will now have real Excel implementations. 
                  Understanding the logic first makes you a better analyst than just clicking buttons without knowing what they do.
                </p>
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