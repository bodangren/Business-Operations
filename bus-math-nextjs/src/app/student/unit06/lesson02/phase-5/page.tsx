import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award, TrendingUp, Calculator, Target } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[4]; // Phase 5: Assessment

const assessmentQuestions = [
  {
    id: "q1",
    question: "Sarah buys web hosting for $50 and charges her client $125. What is her markup percentage?",
    answers: [
      "150%",
      "60%", 
      "40%",
      "250%"
    ],
    explanation: "Markup = (Selling Price - Cost) ÷ Cost × 100% = ($125 - $50) ÷ $50 × 100% = $75 ÷ $50 × 100% = 150%"
  },
  {
    id: "q2",
    question: "Using the same example (cost $50, selling price $125), what is Sarah's margin percentage?",
    answers: [
      "60%",
      "150%",
      "40%",
      "250%"
    ],
    explanation: "Margin = (Selling Price - Cost) ÷ Selling Price × 100% = ($125 - $50) ÷ $125 × 100% = $75 ÷ $125 × 100% = 60%"
  },
  {
    id: "q3",
    question: "Why do businesses typically focus more on margin than markup when making pricing decisions?",
    answers: [
      "Margin shows what percentage of each sales dollar becomes profit, which is more useful for business planning",
      "Markup is harder to calculate than margin",
      "Margin always results in higher percentages than markup",
      "Financial reports never use markup calculations"
    ],
    explanation: "Margin is more useful because it shows how much of each sales dollar the business keeps as profit, making it easier to understand profitability and plan for expenses."
  },
  {
    id: "q4", 
    question: "If Sarah needs a 40% margin on a project that costs her $300 to deliver, what should she charge the client?",
    answers: [
      "$500",
      "$420",
      "$120",
      "$750"
    ],
    explanation: "If Margin = 40%, then Selling Price = Cost ÷ (1 - Margin%) = $300 ÷ (1 - 0.40) = $300 ÷ 0.60 = $500"
  },
  {
    id: "q5",
    question: "A competitor offers the same service for $400. If Sarah matches this price on a $300 cost project, what would be her markup?",
    answers: [
      "33.3%",
      "25%",
      "75%",
      "133.3%"
    ],
    explanation: "Markup = ($400 - $300) ÷ $300 × 100% = $100 ÷ $300 × 100% = 33.3%"
  },
  {
    id: "q6",
    question: "Sarah discovers her fixed costs are $8,000 per month and variable costs are $40 per project. If she prices at $100 per project with 40% margin, how many projects does she need to break even?",
    answers: [
      "133 projects",
      "200 projects",
      "80 projects", 
      "267 projects"
    ],
    explanation: "With $100 selling price and 40% margin, her cost per project is $60. But she also has $8,000 fixed costs. Contribution margin = $100 - $60 = $40 per project. Break-even = $8,000 ÷ $40 = 200 projects. Wait, this doesn't account for the additional $40 variable cost mentioned. Let me recalculate: If variable cost is $40 per project and price is $100, contribution margin = $100 - $40 = $60. Break-even = $8,000 ÷ $60 = 133.3 ≈ 133 projects."
  },
  {
    id: "q7",
    question: "Sarah's competitor claims a '200% markup' on their services. If their cost is $60 per project, what do they charge clients?",
    answers: [
      "$180",
      "$120",
      "$160",
      "$240"
    ],
    explanation: "200% markup means Selling Price = Cost + (Cost × 2.00) = $60 + ($60 × 2.00) = $60 + $120 = $180"
  },
  {
    id: "q8", 
    question: "What is the main business risk of confusing markup and margin when setting prices?",
    answers: [
      "You might price too low and fail to cover all costs, leading to losses even with high sales volume",
      "Customers will always notice calculation errors",
      "The IRS requires specific calculation methods",
      "It only affects large businesses, not small ones"
    ],
    explanation: "Confusing markup and margin often leads to underpricing because the percentages look different for the same profit amount. This can result in prices that seem profitable but don't actually cover all business costs."
  },
  {
    id: "q9",
    question: "Sarah wants to increase her margin from 40% to 50% on a $200 cost project. By how much must she raise her price?",
    answers: [
      "$133.33",
      "$100",
      "$50",
      "$66.67"
    ],
    explanation: "Original price at 40% margin: $200 ÷ (1-0.40) = $200 ÷ 0.60 = $333.33. New price at 50% margin: $200 ÷ (1-0.50) = $200 ÷ 0.50 = $400. Price increase = $400 - $333.33 = $66.67"
  },
  {
    id: "q10",
    question: "In competitive markets, which statement best describes the relationship between cost structure and pricing flexibility?",
    answers: [
      "Businesses with higher fixed costs and lower variable costs have more flexibility to reduce prices for competitive response",
      "Cost structure doesn't affect pricing flexibility in competitive markets", 
      "Businesses with higher variable costs always have better profit margins",
      "Fixed costs are always better than variable costs for pricing strategy"
    ],
    explanation: "Higher fixed costs with lower variable costs means each additional sale has higher contribution margin, giving more flexibility to lower prices while still covering costs and maintaining some profit."
  }
];

export default function Unit06Lesson02Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Assessment Introduction */}
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Assessment: Markup vs. Margin Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-orange-700 leading-relaxed">
                Time to demonstrate your understanding! This assessment evaluates both your technical skills 
                with markup and margin calculations and your strategic thinking about pricing decisions. 
                You'll work through problems that combine mathematical precision with business insight.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white border-green-200">
                  <CardContent className="p-4 text-center">
                    <Calculator className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">Technical Skills</h3>
                    <p className="text-sm text-green-700">Accurate calculations of markup and margin percentages</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Business Application</h3>
                    <p className="text-sm text-blue-700">Strategic thinking about pricing in competitive markets</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">Critical Analysis</h3>
                    <p className="text-sm text-purple-700">Understanding implications of pricing decisions</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Performance Expectations */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Performance Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-4">
                This assessment measures your readiness for Unit 6's advanced pricing analysis and the final 
                Town Hall Debate. Strong performance demonstrates you're prepared for professional-level 
                business analysis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Proficient Performance (70-85%)</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Correctly calculates markup and margin percentages</li>
                    <li>• Understands when to use each calculation method</li>
                    <li>• Recognizes basic business implications of pricing decisions</li>
                    <li>• Can apply concepts to straightforward business scenarios</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Advanced Performance (85-100%)</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Demonstrates computational accuracy and speed</li>
                    <li>• Shows deep understanding of cost structure relationships</li>
                    <li>• Applies strategic thinking to competitive scenarios</li>
                    <li>• Connects pricing concepts to break-even analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Relevance */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Professional Relevance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 leading-relaxed mb-4">
                The skills you're demonstrating in this assessment are used daily by:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-sm text-purple-600 space-y-2">
                  <li>• <strong>Business Consultants:</strong> Advising clients on pricing strategy</li>
                  <li>• <strong>Financial Analysts:</strong> Evaluating company profitability</li>
                  <li>• <strong>Entrepreneurs:</strong> Setting prices for new ventures</li>
                  <li>• <strong>Sales Managers:</strong> Developing pricing guidelines</li>
                </ul>
                <ul className="text-sm text-purple-600 space-y-2">
                  <li>• <strong>Product Managers:</strong> Optimizing product line profitability</li>
                  <li>• <strong>Investment Analysts:</strong> Assessing investment opportunities</li>
                  <li>• <strong>Small Business Owners:</strong> Managing day-to-day pricing decisions</li>
                  <li>• <strong>Corporate Finance Teams:</strong> Supporting strategic planning</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Assessment */}
          <ComprehensionCheck
            title="Comprehensive Assessment: Markup vs. Margin Mastery"
            description="Demonstrate your understanding through technical calculations and strategic business analysis"
            questions={assessmentQuestions}
            showExplanations={true}
          />

          {/* Next Steps Preview */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Looking Ahead: Advanced CVP Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 leading-relaxed">
                Excellent work on mastering markup vs. margin! These fundamental concepts form the foundation 
                for our next challenge: building sophisticated Cost-Volume-Profit (CVP) models. In the upcoming 
                lessons, you'll use Excel's Goal Seek and Data Tables to create investor-ready pricing 
                recommendations that Sarah can confidently present to real business stakeholders.
              </p>
              
              <div className="mt-4 p-4 bg-white rounded border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Coming Up in Unit 6:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Day 3: CVP Model Construction with Excel automation</li>
                  <li>• Day 6-7: Goal Seek and Data Tables for sensitivity analysis</li>
                  <li>• Day 10: Town Hall Pricing Debate with real business stakeholders</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}