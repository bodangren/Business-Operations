import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, TrendingUp, Award, Target } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5"

export default function Phase5Page() {
  const currentPhase = lesson01Phases[4] // Assessment phase

  const assessmentQuestions = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson01"] }).slice(0, 5)

  const masteryCheck = [
    {
      id: '1',
      text: 'The {blank} shows whether a business is profitable by comparing revenues to expenses.',
      answer: 'Income Statement',
      hint: 'This statement tells the "plot" of the business story'
    },
    {
      id: '2',
      text: 'The accounting equation that governs the Balance Sheet is: Assets = Liabilities + {blank}.',
      answer: 'Equity',
      hint: 'This represents the owner\'s financial interest in the business'
    },
    {
      id: '3',
      text: 'The {blank} reveals how cash actually moves through operating, investing, and financing activities.',
      answer: 'Statement of Cash Flows',
      hint: 'This statement shows the "action" of the business story'
    },
    {
      id: '4',
      text: 'Jennifer Kim described the three financial statements as a {blank} that tells one integrated business story.',
      answer: 'storyboard',
      hint: 'Like a movie storyboard, these documents work together to tell a complete narrative'
    }
  ]

  const comprehensiveAssessment = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson01"] }).slice(5, 8)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Assessment Introduction */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Formative Assessment: Three-Statement Storyboard Mastery
              </CardTitle>
              <CardDescription>
                Demonstrate your understanding of integrated financial statement analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  This assessment evaluates your mastery of the core concepts from today's lesson. You'll demonstrate understanding of how the three financial statements work together as an integrated storyboard to communicate business health to investors and other stakeholders.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Assessment Focus Areas
                  </h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Understanding the three-statement storyboard concept</li>
                    <li>• Explaining why standardized financial statements matter</li>
                    <li>• Applying the accounting equation to real scenarios</li>
                    <li>• Analyzing integrated financial statement information</li>
                    <li>• Connecting financial data to business performance stories</li>
                  </ul>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-yellow-800 font-semibold">Assessment Standards</p>
                    <p className="text-sm text-yellow-700">
                      This is a formative assessment designed to help you and your teacher understand your current mastery level. Retries are not available - demonstrate your best understanding on each question.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Concept Assessment */}
          <ComprehensionCheck
            questions={assessmentQuestions}
            title="Core Concept Mastery Check"
            description="Demonstrate understanding of the three-statement storyboard and its business applications"
            showExplanations={true}
            allowRetry={false}
          />

          {/* Mastery Fill-in-the-Blank */}
          <FillInTheBlank
            sentences={masteryCheck}
            title="Financial Statement Integration Vocabulary"
            description="Complete these key concept statements to demonstrate vocabulary mastery"
            showWordList={false}
            randomizeWordOrder={false}
            showHints={true}
          />

          {/* Advanced Application Assessment */}
          <Card className="border-purple-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Advanced Application: Integrated Analysis
              </CardTitle>
              <CardDescription>
                Apply your knowledge to complex business scenarios requiring integrated thinking
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                These questions require you to demonstrate the higher-level thinking skills that Sarah needed when working with Jennifer Kim to present her business story to investors.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={comprehensiveAssessment}
            title="Advanced Financial Statement Analysis"
            description="Demonstrate ability to analyze complex integrated financial scenarios"
            showExplanations={true}
            allowRetry={false}
          />

          {/* Performance Rubric */}
          <Card className="border-purple-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Assessment Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Proficient (80%+)</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Correctly explains three-statement integration</li>
                    <li>• Applies accounting equation accurately</li>
                    <li>• Connects financial data to business stories</li>
                    <li>• Demonstrates investor perspective thinking</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-700 mb-2">Developing (65-79%)</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Understands basic statement purposes</li>
                    <li>• Makes some calculation errors</li>
                    <li>• Explains concepts with some confusion</li>
                    <li>• Shows partial business application</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-2">Beginning (&lt;65%)</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Confused about statement relationships</li>
                    <li>• Frequent calculation mistakes</li>
                    <li>• Difficulty connecting concepts to business</li>
                    <li>• Needs additional support and practice</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Next Steps:</strong> Based on your performance, your teacher will provide targeted feedback and determine if you're ready to move forward with building actual financial statements in the upcoming lessons.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Self-Reflection Component */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800">Post-Assessment Self-Reflection</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                Take a moment to reflect on your assessment performance and learning from today's lesson:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Confidence Level Check</h4>
                  <p className="text-sm text-gray-600 mb-3">Rate how confident you feel about these skills (1 = Need more help, 5 = Very confident):</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Explaining the three-statement storyboard concept</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Understanding why external stakeholders need standardized statements</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Applying the accounting equation to solve problems</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Connecting financial numbers to business performance stories</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Learning Insights</h4>
                  <p className="text-sm text-yellow-700 mb-2">Consider these reflection questions:</p>
                  <ul className="text-sm text-yellow-600 space-y-1 list-disc list-inside">
                    <li>What was your biggest "aha" moment during today's lesson?</li>
                    <li>Which concept do you want to understand better before tomorrow?</li>
                    <li>How has your understanding of financial statements changed?</li>
                    <li>What questions do you want to ask your teacher about integrated statement analysis?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}