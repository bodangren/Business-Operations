import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Award, TrendingUp } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[4]; // Assessment phase

const assessmentQuestions = [
  {
    id: "assess-1",
    question: "A startup has fixed costs of $12,000, variable costs of $30 per unit, and sells products for $80 per unit. What is their break-even point in units?",
    answers: [
      "240 units",
      "400 units", 
      "150 units",
      "200 units"
    ],
    explanation: "Break-even units = Fixed Costs ÷ Contribution Margin = $12,000 ÷ ($80 - $30) = $12,000 ÷ $50 = 240 units."
  },
  {
    id: "assess-2",
    question: "If the same startup wants to earn a $15,000 profit, how many units must they sell?",
    answers: [
      "540 units",
      "300 units",
      "480 units", 
      "600 units"
    ],
    explanation: "Target units = (Fixed Costs + Target Profit) ÷ Contribution Margin = ($12,000 + $15,000) ÷ $50 = 540 units."
  },
  {
    id: "assess-3",
    question: "Which Excel function would you use to automatically find the sales price needed to achieve a specific profit target?",
    answers: [
      "Goal Seek (in Data Tools)",
      "VLOOKUP function",
      "PMT function",
      "SUMIF function"
    ],
    explanation: "Goal Seek allows you to work backwards from a desired result (profit) to find the required input (price). It's perfect for CVP analysis."
  },
  {
    id: "assess-4",
    question: "A company's contribution margin ratio is 40%. If they sell $100,000 worth of products, how much contributes to covering fixed costs and profit?",
    answers: [
      "$40,000",
      "$60,000",
      "$100,000",
      "$25,000"
    ],
    explanation: "Contribution = Revenue × Contribution Margin Ratio = $100,000 × 0.40 = $40,000 contributes to fixed costs and profit."
  },
  {
    id: "assess-5",
    question: "What happens to the break-even point when fixed costs increase but selling price and variable costs stay the same?",
    answers: [
      "Break-even point increases (need to sell more units)",
      "Break-even point decreases (need to sell fewer units)",
      "Break-even point stays the same",
      "Cannot be determined without specific numbers"
    ],
    explanation: "Higher fixed costs require more contribution margin to break even, so more units must be sold. Break-even = Fixed Costs ÷ Contribution Margin."
  },
  {
    id: "assess-6",
    question: "In Excel CVP modeling, why should you use cell references in formulas instead of typing numbers directly?",
    answers: [
      "Makes the model dynamic - changing inputs automatically updates all calculations",
      "Excel formulas don't work with typed numbers",
      "It makes the file smaller",
      "It prevents other people from using your model"
    ],
    explanation: "Cell references create dynamic models where changing one input (like price) automatically recalculates all dependent values (break-even, profit, etc.)."
  },
  {
    id: "assess-7",
    question: "A restaurant has a 35% contribution margin ratio. If they want to increase profit by $7,000 per month, how much additional revenue do they need?",
    answers: [
      "$20,000",
      "$7,000",
      "$2,450",
      "$24,500"
    ],
    explanation: "Additional Revenue = Target Profit Increase ÷ Contribution Margin Ratio = $7,000 ÷ 0.35 = $20,000 in additional revenue needed."
  },
  {
    id: "assess-8",
    question: "When creating a break-even chart in Excel, which three lines should be displayed to show the complete CVP relationship?",
    answers: [
      "Fixed Costs (horizontal), Total Costs (sloped), and Revenue (sloped)",
      "Variable Costs, Fixed Costs, and Profit",
      "Revenue, Expenses, and Net Income",
      "Units Sold, Price per Unit, and Total Sales"
    ],
    explanation: "The classic break-even chart shows Fixed Costs as a horizontal line, Total Costs rising with volume, and Revenue rising with volume. Their intersection is the break-even point."
  },
  {
    id: "assess-9",
    question: "What is the primary business advantage of understanding your break-even point?",
    answers: [
      "Enables data-driven pricing decisions and minimum sales targets",
      "Automatically increases your profit margins",
      "Eliminates all business risk",
      "Guarantees customer satisfaction"
    ],
    explanation: "Break-even analysis provides the foundation for strategic decisions about pricing, sales targets, cost management, and business planning based on actual numbers."
  },
  {
    id: "assess-10",
    question: "If a business operates at 150% of its break-even point, what does this indicate?",
    answers: [
      "The business is profitable and has a 50% margin of safety",
      "The business is losing money",
      "The business is exactly at break-even",
      "The business needs to reduce its prices"
    ],
    explanation: "Operating at 150% of break-even means the business is 50% above the minimum required sales, indicating profitability and a 50% cushion (margin of safety)."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Assessment Introduction */}
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                CVP Model Mastery Assessment
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                Comprehensive Evaluation
              </Badge>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Time to demonstrate your mastery of Cost-Volume-Profit analysis! This comprehensive 
                assessment covers both theoretical understanding and practical Excel application. 
                Your performance here shows whether you're ready to build professional CVP models 
                for real business scenarios.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                <h3 className="font-semibold text-orange-900 mb-3">What This Assessment Covers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">Technical Skills:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Break-even calculations and formulas</li>
                      <li>• Contribution margin analysis</li>
                      <li>• Excel CVP modeling techniques</li>
                      <li>• Goal Seek and scenario analysis</li>
                      <li>• Professional chart creation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">Business Application:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Strategic pricing decisions</li>
                      <li>• Risk assessment and margin of safety</li>
                      <li>• Operational planning and targets</li>
                      <li>• Investment and expansion analysis</li>
                      <li>• Performance monitoring frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Assessment Format</h3>
                <p className="text-blue-800">
                  This assessment includes 10 comprehensive questions that test your understanding 
                  of CVP concepts, Excel skills, and business applications. Take your time to 
                  think through each question carefully—these represent the types of analysis 
                  you'll perform in real business situations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Assessment */}
          <ComprehensionCheck
            title="CVP Model Mastery Assessment"
            description="Demonstrate your comprehensive understanding of Cost-Volume-Profit analysis, Excel modeling, and business applications."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          {/* Performance Standards */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Award className="w-5 w-5" />
                Performance Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Proficient (70-84%)</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Demonstrates solid understanding of CVP fundamentals and can apply 
                    concepts to basic business scenarios with Excel support.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Advanced (85-94%)</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Shows strong CVP analysis skills, Excel proficiency, and ability to 
                    connect models to strategic business decisions.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Expert (95-100%)</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Demonstrates mastery of advanced CVP concepts, sophisticated Excel 
                    modeling, and strategic business insight.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Connections */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <TrendingUp className="w-5 w-5" />
                Professional Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 mb-4">
                The CVP analysis skills you've demonstrated are essential in many business careers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-purple-800 mb-2">Career Paths:</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Financial Analyst</li>
                    <li>• Business Controller</li>
                    <li>• Management Consultant</li>
                    <li>• Startup Founder/Entrepreneur</li>
                    <li>• Operations Manager</li>
                    <li>• Investment Banker</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-800 mb-2">Professional Skills Demonstrated:</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Data-driven decision making</li>
                    <li>• Financial modeling and analysis</li>
                    <li>• Strategic planning and forecasting</li>
                    <li>• Risk assessment and management</li>
                    <li>• Excel proficiency for business</li>
                    <li>• Clear communication of complex concepts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800">Assessment Complete - What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Excellent work completing this comprehensive CVP assessment! Your performance 
                demonstrates your readiness to tackle real-world business analysis challenges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-gray-800 mb-2">Immediate Applications:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Apply CVP analysis to your capstone business model</li>
                    <li>• Use Excel skills for upcoming financial statement projects</li>
                    <li>• Practice scenario analysis for business planning</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h4 className="font-semibold text-gray-800 mb-2">Continued Learning:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Advanced Excel features (Solver, Data Tables)</li>
                    <li>• Monte Carlo simulation for risk analysis</li>
                    <li>• Integration with other financial models</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
              <p className="text-gray-700">
                In the Closing phase, you'll reflect on your CVP learning journey and consider 
                how these powerful analysis skills connect to your broader business education 
                and career goals.
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase} 
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}