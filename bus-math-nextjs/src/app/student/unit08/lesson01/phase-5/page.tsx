import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Trophy, AlertCircle, Star, Target } from "lucide-react"
import { getUnit08Phase5ComprehensionCheckItems } from "@/data/question-banks/unit08-phase5"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson01Phases[4] // Assessment phase

  const vcEvaluationQuestions = getUnit08Phase5ComprehensionCheckItems({
    lessonIds: ["lesson01"],
    tags: ["phase5-vc-eval"]
  })

  const capstoneQuestions = getUnit08Phase5ComprehensionCheckItems({
    lessonIds: ["lesson01"],
    tags: ["phase5-capstone"]
  })

  // Investment Decision Framework
  const decisionFrameworkItems = [
    { id: '1', content: 'Balance sheet balances and cash flow ties correctly', matchId: '2', hint: 'Foundation of model credibility' },
    { id: '2', content: 'Technical Excellence (25%)', matchId: '1' },
    { id: '3', content: 'Growth rates backed by market research and customer data', matchId: '4', hint: 'Evidence-based business planning' },
    { id: '4', content: 'Assumption Quality (30%)', matchId: '3' },
    { id: '5', content: 'Realistic scenarios including meaningful downside cases', matchId: '6', hint: 'Demonstrates risk awareness' },
    { id: '6', content: 'Risk Analysis (25%)', matchId: '5' },
    { id: '7', content: 'Professional formatting with clear navigation and documentation', matchId: '8', hint: 'Investment-ready presentation' },
    { id: '8', content: 'Presentation Quality (20%)', matchId: '7' },
  ]

  // Final Assessment Challenge
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        {/* Assessment Introduction */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Assessment: Master VC Evaluation Skills</h1>
          
          <p className="text-lg leading-relaxed">
            You've learned to identify red flags, understand integration principles, and analyze startup models from a venture capitalist's perspective. Now it's time to demonstrate your mastery of these critical skills through comprehensive assessment.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This assessment evaluates your ability to think like a professional investor making real funding decisions. Remember: venture capitalists don't just look for perfect models—they look for entrepreneurs who understand their business deeply and have built credible, risk-aware financial projections.
          </p>
        </div>

        {/* Assessment Overview */}
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5" />
              Assessment Structure: Professional VC Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-800 dark:text-blue-300">
              This assessment mirrors the evaluation process used by real venture capital firms. You'll demonstrate:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Technical Analysis Skills
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Red flag identification</li>
                  <li>• Formula integrity evaluation</li>
                  <li>• Three-statement integration assessment</li>
                  <li>• Model structure and navigation</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Business Judgment Skills
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Assumption reasonableness</li>
                  <li>• Risk awareness and scenario thinking</li>
                  <li>• Unit economics evaluation</li>
                  <li>• Investment decision making</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-100 p-3 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">
                ⚠️ Note: This is authentic assessment. Questions are designed to challenge your thinking and mirror real investor decision-making processes.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive VC Skills Assessment */}
        <ComprehensionCheck
          questions={vcEvaluationQuestions}
          title="Venture Capital Evaluation Mastery"
          description="Demonstrate your ability to analyze startup financial models with the same rigor as professional investors. Consider both technical quality and business viability."
          showExplanations={true}
          allowRetry={false}
        />

        {/* Investment Decision Framework */}
        <DragAndDrop
          items={decisionFrameworkItems}
          title="Professional Investment Decision Framework"
          description="Match evaluation criteria with their relative importance in VC decision-making. Understanding these weightings will guide your own model development."
          leftColumnTitle="Evaluation Criteria"
          rightColumnTitle="Importance & Weight"
          showHints={true}
          shuffleItems={true}
        />

        {/* Final Challenge Assessment */}
        <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/10">
          <CardHeader>
            <CardTitle className="text-yellow-900 dark:text-yellow-200 flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Final Challenge: Investment Committee Decision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-yellow-800 dark:text-yellow-300">
              You are presenting to your VC firm's investment committee. Your analysis and recommendation will influence a real $500,000 funding decision.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-yellow-900 mb-3">Investment Committee Scenario:</h4>
              <p className="text-sm text-yellow-800 mb-3">
                Three startups have made it through initial screening. The committee has 30 minutes to hear your analysis and make funding decisions. Your role is to provide clear, evidence-based recommendations.
              </p>
              
              <div className="space-y-2">
                <div className="bg-yellow-100 p-3 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Your Task:</strong> Based on everything you've learned about VC evaluation, prepare a 2-minute verbal recommendation for each startup. Include technical assessment, business viability, and your investment decision with clear reasoning.
                  </p>
                </div>
                
                <div className="bg-yellow-100 p-3 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Success Criteria:</strong> Your recommendations should demonstrate professional-level analysis, consider both opportunities and risks, and provide actionable insights for investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Capstone Assessment Questions */}
        <ComprehensionCheck
          questions={capstoneQuestions}
          title="Capstone Assessment: Investment Readiness"
          description="Final evaluation of your understanding of what makes entrepreneurs and financial models investment-ready from a VC perspective."
          showExplanations={true}
          allowRetry={false}
        />

        {/* Assessment Reflection */}
        <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
          <CardHeader>
            <CardTitle className="text-green-900 dark:text-green-200 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Self-Assessment Reflection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-green-800 dark:text-green-300">
              Before moving to the next phase, honestly assess your current readiness:
            </p>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-green-900 mb-1">Technical Skills:</p>
                <p className="text-green-700 text-sm">
                  Can you identify formula errors, circular references, and integration problems? Do you understand what makes a model technically sound?
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-green-900 mb-1">Business Judgment:</p>
                <p className="text-green-700 text-sm">
                  Can you evaluate whether growth assumptions are realistic? Do you understand unit economics and what makes a business model viable?
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-green-900 mb-1">Investment Perspective:</p>
                <p className="text-green-700 text-sm">
                  Do you think like an investor considering risks and returns? Can you balance optimism with realistic risk assessment?
                </p>
              </div>
            </div>
            
            <div className="bg-green-100 p-3 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                🎯 Your goal: Use this assessment feedback to identify areas for improvement before building your own investment-ready model.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Preparation for Next Phase */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mastery Achieved: Ready for Integration</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            You've now demonstrated your ability to analyze startup financial models with the rigor of a professional venture capitalist. You can identify technical red flags, evaluate business assumptions, assess risk scenarios, and make informed investment decisions.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This evaluation expertise is crucial because when you start building your own integrated financial model in the coming lessons, you'll need to avoid the same pitfalls you've learned to identify. The best entrepreneurs are their own harshest critics—they build models that would pass their own rigorous evaluation standards.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            In the closing phase, you'll reflect on your learning journey and prepare for the exciting challenge ahead: building a comprehensive financial model that could actually attract real investment from professional VCs.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
