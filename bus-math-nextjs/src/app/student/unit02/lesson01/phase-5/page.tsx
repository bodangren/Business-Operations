import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { CheckCircle2, Award, Target } from "lucide-react"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!

  const summativeAssessmentQuestions = toComprehensionCheckFormat(
    getQuestionsForLesson("lesson01")
  )

  const businessScenarioItems = [
    { id: '1', content: 'A dental practice manually scheduling 200+ appointments weekly', matchId: '5', hint: 'High-volume, repetitive administrative task' },
    { id: '2', content: 'A lawyer negotiating settlement terms with opposing counsel', matchId: '6', hint: 'Requires professional judgment and expertise' },
    { id: '3', content: 'A bakery calculating daily ingredient inventory needs', matchId: '7', hint: 'Mathematical calculations based on standard recipes' },
    { id: '4', content: 'A therapist conducting patient counseling sessions', matchId: '8', hint: 'Requires human empathy and professional expertise' },
    { id: '5', content: 'High Automation Priority', matchId: '1' },
    { id: '6', content: 'Keep Human Control', matchId: '2' },
    { id: '7', content: 'High Automation Priority', matchId: '3' },
    { id: '8', content: 'Keep Human Control', matchId: '4' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        {/* Assessment Introduction */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Formative Assessment: Automation Analysis Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                This assessment evaluates your understanding of the key concepts from Sarah's automation journey and your ability to apply automation analysis skills to new business scenarios. You'll demonstrate mastery of process analysis, cost-benefit thinking, and strategic automation decision-making.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Assessment Focus Areas</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Conceptual Understanding:</strong> Sarah's automation journey and the business case for process improvement</li>
                  <li>• <strong>Analytical Skills:</strong> Identifying bottlenecks, evaluating costs, and prioritizing automation opportunities</li>
                  <li>• <strong>Strategic Application:</strong> Applying automation principles to new business contexts and scenarios</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed">
                Take your time and think carefully about each question. This assessment will help you demonstrate your readiness to build your own Month-End Wizard in the upcoming lessons.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Summative Assessment */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <ComprehensionCheck
              title="Automation Analysis Mastery Assessment"
              description="Demonstrate your understanding of automation principles and business process analysis"
              questions={summativeAssessmentQuestions}
              showExplanations={true}
              allowRetry={false}
            />
          </CardContent>
        </Card>

        {/* Applied Skills Assessment */}
        <Card className="border-purple-200 bg-purple-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Applied Skills Assessment: Professional Service Automation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <p className="text-purple-700 leading-relaxed">
                Apply your automation analysis skills to professional service scenarios. Demonstrate your ability to distinguish between tasks that should be automated and those that require human expertise and judgment.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-purple-800 font-medium text-sm">
                  🎯 <strong>Assessment Task:</strong> Analyze each professional service activity and determine the appropriate automation strategy.
                </p>
              </div>
            </div>
            <DragAndDrop
              title="Professional Service Automation Analysis"
              description="Classify each professional service task as either automation-ready or requiring human control"
              leftColumnTitle="Professional Service Tasks"
              rightColumnTitle="Automation Strategy"
              items={businessScenarioItems}
              showHints={true}
              shuffleItems={true}
            />
          </CardContent>
        </Card>

        {/* Self-Assessment and Reflection */}
        <Card className="border-amber-200 bg-amber-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Learning Objectives Self-Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-amber-700 leading-relaxed mb-4">
                Review the lesson's learning objectives and honestly assess your current mastery level:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3">Learning Objective 1</h4>
                  <p className="text-amber-700 text-sm mb-3">
                    <strong>"Understand that automation reduces human error and increases efficiency in financial processes"</strong>
                  </p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj1" value="mastered" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Mastered</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj1" value="developing" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Developing</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj1" value="beginning" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Beginning</span>
                    </label>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3">Learning Objective 2</h4>
                  <p className="text-amber-700 text-sm mb-3">
                    <strong>"Explain how time savings through automation creates competitive advantage for businesses"</strong>
                  </p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj2" value="mastered" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Mastered</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj2" value="developing" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Developing</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj2" value="beginning" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Beginning</span>
                    </label>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-3">Learning Objective 3</h4>
                  <p className="text-amber-700 text-sm mb-3">
                    <strong>"Identify how user interface design determines the usability and adoption of financial tools"</strong>
                  </p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj3" value="mastered" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Mastered</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj3" value="developing" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Developing</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="obj3" value="beginning" className="text-amber-600" />
                      <span className="text-amber-700 text-sm">Beginning</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  ✅ <strong>Assessment Complete:</strong> Your responses help identify areas for continued learning as you move into building your own Month-End Wizard automation system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}