import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, Trophy, AlertCircle, Star, Target } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson01Phases[4] // Assessment phase

  // Comprehensive VC Evaluation Questions
  const vcEvaluationQuestions = [
    {
      id: "q1",
      question: "A startup's financial model shows consistent 15% monthly growth in users but revenue only growing 5% monthly. As a VC, what would be your primary concern?",
      answers: [
        "User growth is too slow and needs to accelerate",
        "There's a disconnect between user growth and monetization that needs explanation",
        "Revenue growth should be ignored if user growth is strong",
        "The model is technically incorrect and needs rebuilding"
      ],
      explanation: "This disconnect suggests potential issues with monetization strategy, user quality, or business model effectiveness. VCs need to understand why growing users aren't translating to proportional revenue growth."
    },
    {
      id: "q2",
      question: "In a startup's three-statement model, the cash flow statement shows $100K from operations, but the income statement shows a $50K loss. This could indicate:",
      answers: [
        "The model has errors and should be rejected immediately",
        "Working capital changes and non-cash expenses may explain the difference",
        "The company is lying about their financial performance",
        "Cash flow should always equal net income in a proper model"
      ],
      explanation: "This is normal and expected. Differences between net income and operating cash flow often result from working capital changes (receivables, payables, inventory) and non-cash expenses like depreciation."
    },
    {
      id: "q3",
      question: "What's the most concerning red flag when reviewing a startup's scenario analysis?",
      answers: [
        "The optimistic scenario shows too much growth",
        "All three scenarios (best, base, worst) show the company succeeding",
        "The model includes too many different scenarios",
        "The scenarios use different Excel sheets instead of one integrated model"
      ],
      explanation: "If even the worst-case scenario shows success, it suggests the entrepreneur hasn't seriously considered downside risks or competitive threats. Realistic worst-case scenarios should show meaningful challenges."
    },
    {
      id: "q4",
      question: "A startup model shows customer acquisition cost (CAC) of $50 and lifetime value (LTV) of $150. The LTV:CAC ratio of 3:1 suggests:",
      answers: [
        "This is a red flag - the ratio is too low for sustainable growth",
        "This is acceptable but not impressive - industry standard performance",
        "This is excellent - strong unit economics that support growth",
        "The ratio is meaningless without knowing the payback period"
      ],
      explanation: "A 3:1 LTV:CAC ratio is generally healthy and indicates good unit economics. However, the payback period (how long to recover the $50) is also crucial for cash flow planning."
    },
    {
      id: "q5",
      question: "Which formula error would be most immediately disqualifying in a VC pitch?",
      answers: [
        "Minor rounding differences between sheets",
        "Circular references that prevent the model from calculating",
        "Using different number formats across sheets",
        "Complex formulas without documentation"
      ],
      explanation: "Circular references break Excel's calculation engine and prevent the model from working. This shows fundamental technical incompetence and would immediately undermine credibility."
    }
  ]

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
  const finalAssessmentQuestions = [
    {
      id: "q6",
      question: "Sarah's TechStart Solutions model shows break-even at month 24 with $2M in funding. A VC's first question would likely be:",
      answers: [
        "Why does it take so long to break even?",
        "What happens if break-even takes 6 months longer?",
        "How much additional funding would be needed if things go wrong?",
        "All of the above - comprehensive risk assessment"
      ],
      explanation: "Professional investors think systematically about risks. They want to understand not just the base case but what happens if timelines slip or additional capital is needed."
    },
    {
      id: "q7",
      question: "The most impressive thing a student can demonstrate to a VC panel is:",
      answers: [
        "Advanced Excel formulas and complex calculations",
        "Deep understanding of their business model and thoughtful risk analysis",
        "Optimistic projections showing rapid growth and profitability",
        "A model with more sheets and detail than anyone else's"
      ],
      explanation: "VCs invest in entrepreneurs who deeply understand their business. Technical Excel skills matter, but business insight and risk awareness are what separate fundable entrepreneurs from spreadsheet experts."
    }
  ]

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
          questions={finalAssessmentQuestions}
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