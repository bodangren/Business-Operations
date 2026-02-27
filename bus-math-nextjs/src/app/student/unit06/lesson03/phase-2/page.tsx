import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, DollarSign, Target, Calculator } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import BreakEvenGraphExplorer from "../BreakEvenGraphExplorer";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[1]; // Introduction phase

// All comprehension questions use TechStart's actual numbers so students
// build mental models on the same dataset they'll use in Guided Practice.
const introductionQuestions = [
  {
    id: "intro-1",
    question: "What is the key difference between fixed costs and variable costs?",
    answers: [
      "Fixed costs stay the same regardless of sales volume; variable costs change with each project",
      "Fixed costs are always higher than variable costs",
      "Fixed costs are paid monthly; variable costs are paid daily",
      "Fixed costs are optional; variable costs are required"
    ],
    explanation:
      "Fixed costs like rent and salaries remain constant whether TechStart completes 1 project or 24 projects this month. Variable costs like hosting setup and graphics change with every project added."
  },
  {
    id: "intro-2",
    question:
      "TechStart charges $1,350 per project and spends $880 per project on variable costs. What is the contribution margin per project?",
    answers: [
      "$470 per project",
      "$880 per project",
      "$1,350 per project",
      "$320 per project"
    ],
    explanation:
      "Contribution margin = Selling price − Variable costs = $1,350 − $880 = $470. Each project at this price contributes $470 toward covering TechStart's $8,100 in monthly fixed costs."
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
    explanation:
      "Break-even units = Fixed Costs ÷ Contribution Margin per Unit. This tells you exactly how many projects you must complete before you stop losing money and start generating profit."
  },
  {
    id: "intro-4",
    question: "Why does a higher selling price make it easier to reach break-even?",
    answers: [
      "A higher price increases contribution margin, so each sale covers more fixed costs",
      "A higher price reduces variable costs automatically",
      "A higher price attracts more clients, increasing total volume",
      "A higher price reduces total fixed costs"
    ],
    explanation:
      "When price rises and variable cost stays the same, contribution margin grows. A larger contribution margin means fewer projects are needed to cover fixed costs—so break-even is reached sooner."
  },
  {
    id: "intro-5",
    question:
      "TechStart has fixed costs of $8,100/month and a contribution margin of $470 per project (at the $1,350 price). What is the break-even volume?",
    answers: [
      "18 projects",
      "26 projects",
      "14 projects",
      "24 projects"
    ],
    explanation:
      "Break-even = ⌈$8,100 ÷ $470⌉ = ⌈17.23⌉ = 18 projects. Sarah must complete 18 projects in a month before she earns her first dollar of profit at the $1,350 price."
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
          {/* Opening — picks up from Hook, no re-introduction */}
          <Card className="border-blue-200 bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
                The CVP Model: Sarah&apos;s Profit Roadmap
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                Building the Tools to Answer the Pricing Puzzle
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-800">
                Jennifer handed Sarah a blank spreadsheet. &ldquo;Before you pick a price,&rdquo; she said,
                &ldquo;you need to understand exactly where your money goes and how many projects it takes
                to break even. Let&apos;s map it out.&rdquo; That map is called a{" "}
                <strong>Cost-Volume-Profit (CVP) model</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A CVP model has three building blocks: <strong>fixed costs</strong> (what Sarah pays
                no matter what), <strong>variable costs</strong> (what each project costs to deliver),
                and <strong>contribution margin</strong> (what each project contributes toward covering
                those fixed costs). Once you have all three, you can calculate break-even and work
                backward from any profit target.
              </p>
            </CardContent>
          </Card>

          {/* Fixed and Variable Costs — using TechStart's real $8,100 / $880 dataset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-blue-900 text-xl">Fixed Costs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-blue-800 text-sm">
                  These costs exist every month whether Sarah completes 1 project or 24. They do not
                  change with volume.
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li className="flex justify-between">
                    <span>Office rent</span>
                    <span className="font-medium">$1,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Alex&apos;s salary</span>
                    <span className="font-medium">$3,200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Business insurance</span>
                    <span className="font-medium">$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Software licenses</span>
                    <span className="font-medium">$600</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Phone &amp; internet</span>
                    <span className="font-medium">$150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Equipment lease</span>
                    <span className="font-medium">$1,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Marketing &amp; client acquisition</span>
                    <span className="font-medium">$1,250</span>
                  </li>
                </ul>
                <div className="p-3 bg-blue-100 rounded border border-blue-200">
                  <p className="font-bold text-blue-900 text-center">Total: $8,100 / month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-green-900 text-xl">Variable Costs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-green-800 text-sm">
                  These costs rise with every project Sarah takes on. Deliver more projects and these
                  costs grow proportionally.
                </p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li className="flex justify-between">
                    <span>Domain &amp; hosting setup</span>
                    <span className="font-medium">$150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Stock photos &amp; graphics</span>
                    <span className="font-medium">$180</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Third-party plugins &amp; tools</span>
                    <span className="font-medium">$200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Client revisions &amp; communications</span>
                    <span className="font-medium">$120</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Subcontracted copywriting/SEO</span>
                    <span className="font-medium">$230</span>
                  </li>
                </ul>
                <div className="p-3 bg-green-100 rounded border border-green-200">
                  <p className="font-bold text-green-900 text-center">Total: $880 / project</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contribution Margin — uses real TechStart prices */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-purple-900 text-xl">Contribution Margin</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-800">
                Each project brings in revenue, but Sarah must first pay her variable costs out of
                that revenue. Whatever is left over <em>contributes</em> to covering fixed costs and
                generating profit. That amount is called the{" "}
                <strong>contribution margin (CM)</strong>.
              </p>
              <div className="bg-white p-4 rounded border border-purple-200 text-center space-y-2">
                <p className="text-lg font-semibold text-purple-900">
                  Contribution Margin = Selling Price − Variable Cost per Project
                </p>
                <p className="text-purple-700 text-sm">
                  CM also expressed as a percentage of price: CM Ratio = CM ÷ Price
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                {[
                  { label: "Value Launch", price: 1200, cm: 320 },
                  { label: "Balanced Core", price: 1350, cm: 470 },
                  { label: "Premium Plus", price: 1500, cm: 620 }
                ].map(option => (
                  <div
                    key={option.label}
                    className="bg-white p-3 rounded border border-purple-200 text-center"
                  >
                    <p className="font-semibold text-purple-900">{option.label}</p>
                    <p className="text-purple-700">${option.price} − $880</p>
                    <p className="text-lg font-bold text-purple-800">
                      CM = ${option.cm}
                    </p>
                    <p className="text-xs text-purple-600">
                      CM ratio: {((option.cm / option.price) * 100).toFixed(1)}%
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-purple-800 text-sm">
                Notice: the variable cost stays fixed at $880 no matter which price Sarah chooses.
                Picking a higher price directly increases her CM without adding any cost.
              </p>
            </CardContent>
          </Card>

          {/* Graph explorer — students read the break-even crossing point before seeing the formula */}
          <BreakEvenGraphExplorer />

          {/* Break-Even */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-orange-900 text-xl">Break-Even Point</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800">
                The break-even point is the number of projects Sarah must complete in a month for
                revenue to exactly cover all costs—where profit equals zero. Every project above
                break-even is pure profit.
              </p>
              <div className="bg-white p-4 rounded border border-orange-200 space-y-3">
                <p className="text-center text-lg font-semibold text-orange-900">
                  Break-Even (Projects) = Fixed Costs ÷ Contribution Margin per Project
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-center">
                  {[
                    { label: "Value Launch", cm: 320, be: 26 },
                    { label: "Balanced Core", cm: 470, be: 18 },
                    { label: "Premium Plus", cm: 620, be: 14 }
                  ].map(option => (
                    <div
                      key={option.label}
                      className="bg-orange-50 p-3 rounded border border-orange-200"
                    >
                      <p className="font-semibold text-orange-900">{option.label}</p>
                      <p className="text-orange-700">$8,100 ÷ ${option.cm}</p>
                      <p className="text-lg font-bold text-orange-800">
                        = {option.be} projects
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-orange-700 text-sm">
                  Higher price → larger CM → <strong>fewer projects needed to break even.</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CVP Formula */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calculator className="w-6 h-6 text-red-600" />
                <CardTitle className="text-red-900 text-xl">The Complete CVP Formula</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-white p-4 rounded border border-red-200 space-y-2 text-center">
                <p className="text-lg font-semibold text-red-900">
                  Profit = (CM per Project × Projects Completed) − Fixed Costs
                </p>
                <p className="text-red-700 text-sm">
                  Example: $470 × 24 projects − $8,100 ={" "}
                  <strong>$3,180 monthly profit</strong> at the $1,350 price and full capacity.
                </p>
              </div>
              <p className="text-red-800 text-sm">
                This formula is Sarah&apos;s decision engine. Change the price, and CM changes.
                Change the volume, and profit changes. In Guided Practice you&apos;ll run all three
                options through this formula to find the strategy worth defending to investors.
              </p>
            </CardContent>
          </Card>

          {/* Comprehension Check — all questions use TechStart's real numbers */}
          <ComprehensionCheck
            title="CVP Fundamentals Check"
            description="All questions use TechStart's real cost structure. Get these right before moving to Guided Practice."
            questions={introductionQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          {/* Key Takeaways */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800">Key Takeaways Before Guided Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                {[
                  "TechStart's fixed costs are $8,100/month — the same no matter how many projects she delivers.",
                  "Variable cost is $880 per project — it rises exactly in step with each new project.",
                  "Contribution margin = Price − $880. The three options give CM of $320, $470, or $620.",
                  "Break-even = $8,100 ÷ CM. Higher CM means fewer projects to reach break-even.",
                  "Every project above break-even adds pure profit equal to the CM per project."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 shrink-0">
                      {index + 1}
                    </Badge>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Up: Guided Practice</h3>
              <p className="text-gray-700">
                You&apos;ll run a four-step decision sequence with these same numbers: Contribution
                Margin Sprint → Break-Even Ladder → Capacity Reality Check → Target-Profit Reverse
                Solve. The goal is a pricing recommendation Sarah can defend to investors.
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
