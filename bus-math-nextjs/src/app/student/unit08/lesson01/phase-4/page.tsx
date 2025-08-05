import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Brain, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase4Page() {
  const currentPhase = lesson01Phases[3] // Independent Practice phase

  // Investment Decision Factors (different from Phase 3)
  const investmentFactorsItems = [
    { id: '1', content: 'Market size of $50B but only 0.1% market share targeted', matchId: '2', hint: 'Consider if the opportunity is realistic' },
    { id: '2', content: 'Realistic Market Opportunity', matchId: '1' },
    { id: '3', content: 'Revenue projections growing 500% year-over-year', matchId: '4', hint: 'Consider sustainability of growth rate' },
    { id: '4', content: 'Unrealistic Growth Assumptions', matchId: '3' },
    { id: '5', content: 'Model shows break-even by month 18 with clear path to profitability', matchId: '6', hint: 'Clear timeline to financial sustainability' },
    { id: '6', content: 'Credible Path to Profitability', matchId: '5' },
    { id: '7', content: 'Customer acquisition cost equals 200% of lifetime value', matchId: '8', hint: 'Unit economics that don\'t work long-term' },
    { id: '8', content: 'Unsustainable Unit Economics', matchId: '7' },
  ]

  // Independent Analysis Questions
  const analysisQuestions = [
    {
      id: "q1",
      question: "A startup's financial model shows 300% revenue growth every year for 5 years. What should a VC's primary concern be?",
      answers: [
        "The company might become too successful too quickly",
        "This growth rate is unsustainable and unrealistic without strong justification",
        "The model needs to show even higher growth to be interesting",
        "The company should focus on profitability instead of growth"
      ],
      explanation: "While high growth is attractive, 300% annually for 5 years is extremely rare and requires extraordinary justification. VCs want to see realistic growth backed by market research and a clear customer acquisition strategy."
    },
    {
      id: "q2",
      question: "In a startup model, you notice that increasing revenue by 10% causes the cash balance to become negative. This suggests:",
      answers: [
        "The model is working correctly and showing growth requires investment",
        "There may be errors in how working capital or cash flow is calculated",
        "The startup should avoid growing too quickly",
        "The revenue assumptions are too conservative"
      ],
      explanation: "A well-built model should handle reasonable growth without breaking. If small revenue increases cause cash problems, there may be errors in working capital calculations or cash flow timing that need investigation."
    },
    {
      id: "q3",
      question: "What's the most important reason VCs want to see scenario analysis in financial models?",
      answers: [
        "It makes the Excel file more impressive and complex",
        "It shows the entrepreneur has considered risks and different outcomes",
        "It proves the entrepreneur knows advanced Excel functions",
        "It allows VCs to choose which scenario they prefer"
      ],
      explanation: "Scenario analysis demonstrates that entrepreneurs understand business risk and have thought through different possibilities. It shows mature business thinking and helps VCs assess potential downside risks."
    }
  ]

  // Model Audit Checklist (different scenarios from Phase 3)
  const auditItems = [
    { id: '1', content: 'Balance Sheet assets equal liabilities plus equity', matchId: '2', hint: 'Fundamental accounting equation must hold' },
    { id: '2', content: 'Formula Integrity Check', matchId: '1' },
    { id: '3', content: 'Revenue growth based on specific customer acquisition plans', matchId: '4', hint: 'Growth assumptions have clear business logic' },
    { id: '4', content: 'Assumption Reasonableness Check', matchId: '3' },
    { id: '5', content: 'Cash flow statement ties to balance sheet cash changes', matchId: '6', hint: 'Three statements must be properly integrated' },
    { id: '6', content: 'Integration Accuracy Check', matchId: '5' },
    { id: '7', content: 'Charts and formatting follow professional standards', matchId: '8', hint: 'Model looks investment-ready' },
    { id: '8', content: 'Presentation Quality Check', matchId: '7' },
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
        {/* Independent Practice Introduction */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Independent Practice: Advanced VC Analysis</h1>
          
          <p className="text-lg leading-relaxed">
            You've learned to identify red flags and understand VC evaluation criteria with teacher guidance. Now it's time to work independently, applying these skills to new startup scenarios that you haven't seen before. This mirrors how real venture capitalists work—each investment opportunity is unique and requires fresh analysis.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            In this phase, you'll analyze more complex business models and make investment decisions based on your evaluation skills. Remember, the goal isn't just to find problems—it's to think like an investor who needs to make smart decisions with real money at stake.
          </p>
        </div>

        {/* Advanced Investment Scenarios */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            Advanced Investment Decision Making
          </h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Professional VCs don't just look for obvious red flags—they also evaluate the business logic behind financial projections. A model can be technically perfect but still represent a poor investment if the underlying business assumptions don't make sense.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Beyond Red Flags: Business Viability</h3>
            <p className="text-purple-800 mb-3">
              Consider these deeper questions that separate experienced investors from beginners:
            </p>
            <ul className="list-disc list-inside space-y-2 text-purple-800">
              <li><strong>Unit Economics:</strong> Does the business make money on each customer after accounting for all costs?</li>
              <li><strong>Market Reality:</strong> Are the market size and penetration assumptions based on real research?</li>
              <li><strong>Competitive Advantage:</strong> What prevents competitors from copying this business model?</li>
              <li><strong>Capital Efficiency:</strong> How much money is needed to reach profitability and sustainability?</li>
            </ul>
          </div>
        </div>

        {/* Investment Decision Exercise */}
        <DragAndDrop
          items={investmentFactorsItems}
          title="Investment Decision Analysis"
          description="Analyze these financial model characteristics and categorize them as positive or negative investment factors. Think like a VC making real funding decisions."
          leftColumnTitle="Model Characteristics"
          rightColumnTitle="Investment Impact"
          showHints={true}
          shuffleItems={true}
        />

        {/* Independent Analysis Challenge */}
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Independent Challenge: Portfolio Company Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-800 dark:text-blue-300">
              You are a junior analyst at a venture capital firm. Your managing partner has asked you to evaluate three different startup models for potential investment. Each represents a different industry and business model:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">GreenTech Solar</h4>
                <p className="text-sm text-green-800 mb-2">B2B solar installation startup</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Hardware + service model</li>
                  <li>• Long sales cycles (6-12 months)</li>
                  <li>• High upfront costs</li>
                  <li>• Recurring maintenance revenue</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">MealPlan AI</h4>
                <p className="text-sm text-blue-800 mb-2">Consumer subscription app</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• SaaS subscription model</li>
                  <li>• Freemium to premium conversion</li>
                  <li>• Low marginal costs</li>
                  <li>• Network effects potential</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2">LogisticsPro</h4>
                <p className="text-sm text-orange-800 mb-2">B2B logistics platform</p>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• Marketplace model</li>
                  <li>• Transaction-based revenue</li>
                  <li>• Two-sided network</li>
                  <li>• Capital-light scaling</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-100 p-4 rounded-lg mt-4">
              <p className="text-sm text-blue-800 font-medium">
                Your Task: Review the financial models for each company (provided by your teacher) and prepare a 2-minute investment recommendation for each. Focus on model quality, business viability, and investment attractiveness.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={analysisQuestions}
          title="Advanced VC Analysis Skills"
          description="Test your ability to think like a professional investor evaluating complex financial models and business scenarios."
          showExplanations={true}
        />

        {/* Model Audit Practice */}
        <DragAndDrop
          items={auditItems}
          title="Professional Model Audit Framework"
          description="Match audit procedures with their categories. This systematic approach ensures you catch both technical errors and business logic flaws."
          leftColumnTitle="Audit Procedures"
          rightColumnTitle="Audit Categories"
          showHints={true}
          shuffleItems={true}
        />

        {/* Independent Reflection */}
        <Card className="border-gray-200 bg-gray-50 dark:bg-gray-950/10">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-200 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Individual Reflection: Your Investment Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-800 dark:text-gray-300">
              Take 5 minutes to reflect on your independent analysis work. Consider these questions:
            </p>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Business Judgment:</p>
                <p className="text-gray-700 text-sm">
                  Which investment factors do you find most important when evaluating startups? Why do some red flags matter more than others?
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Technical vs. Strategic:</p>
                <p className="text-gray-700 text-sm">
                  When is a technically perfect model still a bad investment? When might you overlook minor technical issues for a great business opportunity?
                </p>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Building Your Own Model:</p>
                <p className="text-gray-700 text-sm">
                  Based on your analysis today, what are the top 3 things you want to ensure your own startup model does well?
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              Keep notes on your reflections—you'll use these insights when building your own investment-ready model later in the unit.
            </p>
          </CardContent>
        </Card>

        {/* Challenge Summary */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">From Analysis to Action</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            You've now practiced both guided and independent analysis of startup financial models. You can identify red flags, evaluate business assumptions, and think critically about investment opportunities from a VC perspective.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This analytical foundation is crucial because when you build your own model later in this unit, you'll need to avoid the same pitfalls you've learned to spot in other entrepreneurs' work. The best way to build an investment-ready model is to understand exactly what investors are looking for—and what immediately disqualifies a startup from consideration.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            In the next phase, you'll demonstrate your mastery of these evaluation skills through a formal assessment that tests your ability to analyze financial models like a professional investor.
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