import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit01Phase5ComprehensionCheckItems } from "@/data/question-banks/unit01-phase5"
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[4]

const assessmentQuestions = getUnit01Phase5ComprehensionCheckItems({ lessonIds: ["lesson04"] })

export default function Phase5Page() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        lesson={lesson04Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Assessment Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Tables & SUMIF: Professional Mastery Assessment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Time to demonstrate your mastery of Excel Tables and SUMIF functions! This 
              assessment combines technical Excel knowledge with real-world business applications, 
              just like the challenges you'll face in professional finance roles.
            </p>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              These questions reflect the same expertise that impresses investors, hiring managers, 
              and business stakeholders. Take your time and think through both the technical mechanics 
              and the business implications of each scenario.
            </p>
          </div>
        </section>

        {/* Assessment Objectives */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Assessment Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Technical Excel Mastery</h4>
                <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                  <li>Excel Table creation and structured references</li>
                  <li>SUMIF formula construction and troubleshooting</li>
                  <li>Professional spreadsheet design standards</li>
                  <li>System scalability and automation principles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Business Application</h4>
                <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                  <li>Investor presentation and confidence building</li>
                  <li>Financial control systems and error detection</li>
                  <li>Career relevance and professional development</li>
                  <li>Real-world business problem solving</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Performance Standards */}
        <section className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2 text-sm">
                <Award className="h-4 w-4" />
                Exemplary (90-100%)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <p className="text-green-700">
                Demonstrates comprehensive understanding of both Excel techniques and their 
                strategic business applications. Answers reflect professional-level insight 
                and career readiness.
              </p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4" />
                Proficient (70-89%)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <p className="text-yellow-700">
                Shows solid grasp of Excel Tables and SUMIF functions with good understanding 
                of business applications. Ready for advanced Excel modeling with some additional 
                practice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                Developing (&lt;70%)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <p className="text-orange-700">
                Indicates need for additional practice with Excel automation concepts. 
                Review lesson materials and seek peer tutoring before moving to advanced topics.
              </p>
            </CardContent>
          </Card>
          </div>
        </section>

        {/* Main Assessment */}
        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
          questions={assessmentQuestions}
          title="Excel Tables & SUMIF Functions: Professional Mastery Assessment"
          description="10 comprehensive questions covering technical skills, business applications, and career relevance"
          showExplanations={true}
          allowRetry={true}
          />
        </section>

        {/* Next Steps Based on Performance */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">After the Assessment: Your Learning Path</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">High Performance (80%+)</h4>
                <p className="text-purple-800 mb-2">You're ready for advanced Excel modeling!</p>
                <ul className="text-purple-700 space-y-1 list-disc list-inside">
                  <li>Practice with more complex business scenarios</li>
                  <li>Explore advanced functions like SUMIFS, INDEX/MATCH</li>
                  <li>Begin building your professional portfolio</li>
                  <li>Consider mentoring peers who need additional support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">Need Additional Practice (&lt;80%)</h4>
                <p className="text-purple-800 mb-2">Focus on strengthening your foundation:</p>
                <ul className="text-purple-700 space-y-1 list-disc list-inside">
                  <li>Review Excel Table creation and structured references</li>
                  <li>Practice SUMIF formula construction with TechStart data</li>
                  <li>Work with a study partner on business applications</li>
                  <li>Schedule office hours to discuss challenging concepts</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Professional Insight */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Career Connection</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Entry-Level Positions Using These Skills</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>Financial Analyst:</strong> Build automated reporting models</li>
                <li>• <strong>Business Analyst:</strong> Analyze operational data trends</li>
                <li>• <strong>Accounting Associate:</strong> Maintain client ledger systems</li>
                <li>• <strong>Investment Banking Analyst:</strong> Financial modeling and valuation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced Career Applications</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>CFO:</strong> Design enterprise financial control systems</li>
                <li>• <strong>Management Consultant:</strong> Optimize client business processes</li>
                <li>• <strong>Investment Manager:</strong> Portfolio analysis and risk modeling</li>
                <li>• <strong>Entrepreneur:</strong> Build investor-ready financial presentations</li>
              </ul>
            </div>
          </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson04Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}
