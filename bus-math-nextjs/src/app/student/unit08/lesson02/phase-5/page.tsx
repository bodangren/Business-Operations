import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, TrendingUp } from "lucide-react";
import { getUnit08Phase5ComprehensionCheckItems } from "@/data/question-banks/unit08-phase5";
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[4]; // Assessment phase

const assessmentQuestions = getUnit08Phase5ComprehensionCheckItems({ lessonIds: ["lesson02"] });

export default function Unit08Lesson02Phase5() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit08Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* Assessment Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Assessment: Three-Statement Integration Mastery
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            This assessment evaluates your comprehensive understanding of three-statement integration - 
            both the technical skills and the strategic business thinking that impressed investors in 
            Sarah's pitch meeting. You'll need to demonstrate mastery of formula integrity, cross-sheet 
            linking principles, and the business logic that makes integrated models so powerful.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The questions combine technical knowledge with practical application, mirroring the kinds 
            of integration challenges that professional financial modelers face when building 
            investor-ready business models. Take your time and think through each scenario carefully.
          </p>
        </div>

        {/* Learning Objectives Reminder */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-4 text-xl flex items-center gap-2">
            <Target className="h-5 w-5" />
            Assessment Coverage: Learning Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-blue-900">Primary Objective</h4>
              </div>
              <p className="text-blue-800 mb-2 font-medium">
                Link income statement, balance sheet, and cash flow with formula integrity
              </p>
              <p className="text-blue-700 text-sm">
                Questions assess your ability to understand and apply the connections between 
                statements, including how changes in one statement automatically affect others 
                through proper formula construction.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-blue-900">Secondary Objective</h4>
              </div>
              <p className="text-blue-800 mb-2 font-medium">
                Build dynamic cross-sheet references that maintain integrity
              </p>
              <p className="text-blue-700 text-sm">
                Questions test your knowledge of professional reference techniques, validation 
                methods, and the technical standards that make models robust and investor-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Standards */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-4 text-xl flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Performance Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <div className="text-center mb-2">
                <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  A
                </div>
                <h4 className="font-semibold text-yellow-900">Mastery (90-100%)</h4>
              </div>
              <p className="text-yellow-800 text-sm">
                Demonstrates comprehensive understanding of integration principles, formula integrity, 
                and business applications. Ready for advanced modeling work.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <div className="text-center mb-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  B
                </div>
                <h4 className="font-semibold text-yellow-900">Proficient (80-89%)</h4>
              </div>
              <p className="text-yellow-800 text-sm">
                Solid grasp of integration concepts with minor gaps. Can apply principles 
                effectively in most scenarios.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <div className="text-center mb-2">
                <div className="bg-orange-100 text-orange-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  C
                </div>
                <h4 className="font-semibold text-yellow-900">Developing (&lt;80%)</h4>
              </div>
              <p className="text-yellow-800 text-sm">
                Basic understanding present but needs additional practice with integration 
                concepts and formula construction.
              </p>
            </div>
          </div>
        </div>

        {/* Assessment Questions */}
        <ComprehensionCheck
          title="Integration Mastery Assessment"
          description="Demonstrate your comprehensive understanding of three-statement integration principles, technical implementation, and business applications."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Assessment Reflection Prompts */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Post-Assessment Reflection</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            After completing the assessment, take a few minutes to reflect on your learning journey. 
            Consider these questions as you review your results:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800 text-lg">Technical Mastery</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>• Which integration concepts felt most natural to you?</p>
                <p>• Where do you still need additional practice?</p>
                <p>• How comfortable are you with cross-sheet reference syntax?</p>
                <p>• Can you explain why validation checks are critical?</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800 text-lg">Business Application</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>• How does integration thinking change your view of business decisions?</p>
                <p>• What investor benefits of integrated models are most compelling?</p>
                <p>• How would you explain integration value to a non-technical founder?</p>
                <p>• What integration skills will you prioritize developing further?</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Steps Preview */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-900 mb-3 text-xl">Looking Ahead: Building Your Integrated Model</h3>
          <p className="text-green-800 leading-relaxed mb-4">
            You've mastered the theoretical foundation of three-statement integration. In the upcoming lessons, 
            you'll put these principles into practice by building Sarah's complete integrated financial model 
            from scratch. You'll experience firsthand how the integration techniques you've learned create the 
            dynamic, professional-grade models that win investor confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-green-800 text-sm">
            <div className="bg-white p-3 rounded border border-green-300">
              <strong>Lesson 3:</strong> Complete Balance Sheet integration with working capital models
            </div>
            <div className="bg-white p-3 rounded border border-green-300">
              <strong>Lesson 4:</strong> Advanced scenario analysis using integrated models
            </div>
            <div className="bg-white p-3 rounded border border-green-300">
              <strong>Lessons 5-8:</strong> Professional model refinement and investor presentation prep
            </div>
          </div>
        </div>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}
