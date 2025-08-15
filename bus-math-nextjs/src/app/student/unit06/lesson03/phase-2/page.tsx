import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Building2, TrendingUp, DollarSign, Target, Calculator } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { BreakEvenChart } from "@/components/charts/BreakEvenChart";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[1]; // Introduction phase

const introductionQuestions = [
  {
    id: "intro-1",
    question: "What is the key difference between fixed costs and variable costs?",
    answers: [
      "Fixed costs stay the same regardless of sales volume; variable costs change with each unit sold",
      "Fixed costs are always higher than variable costs",
      "Fixed costs are paid monthly; variable costs are paid daily",
      "Fixed costs are optional; variable costs are required"
    ],
    explanation: "Fixed costs like rent and insurance remain constant whether you sell 1 unit or 1,000 units. Variable costs like materials and shipping change with each unit produced or sold."
  },
  {
    id: "intro-2",
    question: "If your selling price is $50 and your variable costs are $30 per unit, your contribution margin is:",
    answers: [
      "$20 per unit",
      "$30 per unit", 
      "$50 per unit",
      "$80 per unit"
    ],
    explanation: "Contribution margin = Selling price - Variable costs per unit = $50 - $30 = $20. This $20 contributes toward covering fixed costs and profit."
  },
  {
    id: "intro-3",
    question: "The break-even point formula is:",
    answers: [
      "Fixed Costs ÷ Contribution Margin per Unit",
      "Total Costs ÷ Selling Price",
      "Variable Costs ÷ Fixed Costs",
      "Revenue ÷ Total Costs"
    ],
    explanation: "Break-even units = Fixed Costs ÷ (Selling Price - Variable Cost per Unit). This tells you how many units you must sell to cover all costs."
  },
  {
    id: "intro-4",
    question: "Why does the CVP formula help with pricing decisions?",
    answers: [
      "It shows how price changes affect the number of units needed to break even",
      "It tells you exactly what price customers will pay",
      "It calculates your income taxes automatically",
      "It determines your employee wages"
    ],
    explanation: "CVP analysis shows the relationship between price, costs, and volume. Higher prices mean fewer units needed to break even; lower prices mean more units needed."
  },
  {
    id: "intro-5",
    question: "If Sarah has fixed costs of $8,000, variable costs of $25 per website, and charges $75 per website, her break-even point is:",
    answers: [
      "160 websites",
      "107 websites",
      "320 websites",
      "80 websites"
    ],
    explanation: "Break-even = $8,000 ÷ ($75 - $25) = $8,000 ÷ $50 = 160 websites. Sarah needs to complete 160 websites to cover all costs."
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction Content */}
          <Card className="border-blue-200 bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
                Cost-Volume-Profit Model Fundamentals
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                Building Your Profit Roadmap
              </Badge>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Jennifer showed Sarah a powerful business tool that would solve her pricing puzzle: 
                the <strong>Cost-Volume-Profit (CVP) Model</strong>. Think of it as a GPS for your 
                business finances—it shows you exactly where you are, where you need to go, and 
                the best route to get there profitably.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-blue-900 text-xl">Fixed Costs</h3>
                  </div>
                  <p className="text-blue-800 mb-3">
                    These are expenses that stay the same no matter how much you sell. 
                    Whether Sarah completes 1 website or 50 websites this month, these costs don't change:
                  </p>
                  <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                    <li>Office rent: $1,500/month</li>
                    <li>Alex's salary: $3,200/month</li>
                    <li>Business insurance: $400/month</li>
                    <li>Software licenses: $300/month</li>
                    <li>Phone & internet: $150/month</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-100 rounded border">
                    <p className="font-semibold text-blue-900">Total Fixed Costs: $5,550/month</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-green-900 text-xl">Variable Costs</h3>
                  </div>
                  <p className="text-green-800 mb-3">
                    These expenses change with every project Sarah takes on. 
                    More projects = higher variable costs:
                  </p>
                  <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                    <li>Web hosting per client: $25</li>
                    <li>Stock photos/graphics: $50</li>
                    <li>Third-party plugins: $75</li>
                    <li>Client communication tools: $15</li>
                    <li>Project management: $35</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded border">
                    <p className="font-semibold text-green-900">Total Variable Cost per Website: $200</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-purple-900 text-xl">Contribution Margin</h3>
                </div>
                <p className="text-purple-800 mb-4">
                  This is the money left over from each sale after paying variable costs. 
                  It "contributes" toward covering fixed costs and generating profit.
                </p>
                <div className="bg-white p-4 rounded border border-purple-200">
                  <p className="text-center text-lg font-semibold text-purple-900">
                    Contribution Margin = Selling Price - Variable Costs
                  </p>
                  <p className="text-center text-purple-700 mt-2">
                    If Sarah charges $800 per website: $800 - $200 = <strong>$600 contribution margin</strong>
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                  <h3 className="font-bold text-orange-900 text-xl">Break-Even Point</h3>
                </div>
                <p className="text-orange-800 mb-4">
                  This is the exact number of sales needed to cover all costs—where profit = $0. 
                  Every sale beyond this point generates pure profit!
                </p>
                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="text-center text-lg font-semibold text-orange-900 mb-2">
                    Break-Even Point (Units) = Fixed Costs ÷ Contribution Margin
                  </p>
                  <p className="text-center text-orange-700">
                    Sarah's break-even: $5,550 ÷ $600 = <strong>9.25 → 10 websites per month</strong>
                  </p>
                  <p className="text-center text-orange-700 mt-2 text-sm">
                    Break-even in dollars: 10 websites × $800 = <strong>$8,000 revenue</strong>
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-red-900 text-xl">The Complete CVP Formula</h3>
                </div>
                <div className="bg-white p-4 rounded border border-red-200">
                  <p className="text-center text-lg font-semibold text-red-900 mb-3">
                    Profit = (Price per Unit × Units Sold) - (Variable Cost per Unit × Units Sold) - Total Fixed Costs
                  </p>
                  <p className="text-center text-red-700 text-sm">
                    Or simplified: <strong>Profit = (Contribution Margin × Units Sold) - Fixed Costs</strong>
                  </p>
                </div>
                <p className="text-red-800 mt-4">
                  This formula is Sarah's roadmap to profitability. It shows exactly how pricing, 
                  costs, and sales volume work together to generate profit.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                <p className="text-green-800">
                  CVP analysis isn't just math—it's strategic thinking. Sarah can now answer critical 
                  questions: "What if I raise my prices?" "How many sales do I need to afford a new 
                  employee?" "Should I accept this low-price contract?" The CVP model provides 
                  data-driven answers that protect and grow her business.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Break-Even Chart */}
          <BreakEvenChart
            fixedCosts={5550}
            variableCostRate={0.25} // $200 variable cost with $800 price = 25% rate
            sellingPrice={800}
            interactive={true}
          />

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="CVP Model Understanding"
            description="Test your grasp of the key Cost-Volume-Profit concepts."
            questions={introductionQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          {/* Key Takeaways */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <Target className="w-5 w-5" />
                Key Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  Fixed costs remain constant regardless of sales volume
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  Variable costs increase with each unit sold
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  Contribution margin per unit = Selling price - Variable cost per unit
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  Break-even point = Fixed costs ÷ Contribution margin per unit
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-1">5</Badge>
                  CVP analysis enables data-driven pricing and volume decisions
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
              <p className="text-gray-700">
                In the Guided Practice phase, we'll use Excel to build Sarah's actual CVP model 
                step by step, creating the formulas and charts that bring these concepts to life.
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