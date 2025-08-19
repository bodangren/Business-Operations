import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ClipboardCheck, TrendingUp, Briefcase } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[4]; // Assessment phase

const assessmentQuestions = [
  {
    id: "assessment-1",
    question: "Sarah wants her TechStart Solutions to generate exactly $60,000 profit next year. Her current model shows $35,000 profit at $3,000 per website project. What Excel tool and approach should she use?",
    answers: [
      "Use Goal Seek with Set Cell = Profit Cell ($60,000), By Changing Cell = Price per Project",
      "Use SUM function to add up all her potential projects",
      "Use VLOOKUP to find the right price in a competitor table",
      "Manually try different prices until she gets close to $60,000"
    ],
    explanation: "Goal Seek is designed for this exact scenario. Sarah sets her profit target ($60,000) and Goal Seek calculates the precise price needed, which would be approximately $3,714 per project."
  },
  {
    id: "assessment-2",
    question: "In Excel Goal Seek, what does the 'By Changing Cell' parameter represent?",
    answers: [
      "The single input cell that Excel will automatically adjust to reach your target",
      "The cell containing the formula you want to change",
      "The target value you want to achieve",
      "The cell that displays the final result"
    ],
    explanation: "The 'By Changing Cell' is the input variable Excel will modify. It must contain a single value (not a formula) that affects the Set Cell formula."
  },
  {
    id: "assessment-3",
    question: "An investor asks Sarah: 'If your fixed costs increase by 20% but you want to maintain current profit levels, what's the minimum price increase needed?' What makes Goal Seek the best tool for this question?",
    answers: [
      "Goal Seek can instantly calculate the exact price needed for any profit target, even with changing cost structures",
      "Goal Seek automatically updates all competitor pricing data",
      "Goal Seek creates professional charts for investor presentations",
      "Goal Seek sends automatic alerts when costs change"
    ],
    explanation: "Goal Seek excels at reverse-engineering solutions from targets. Sarah can update her fixed costs (+20%), keep profit constant, and Goal Seek finds the precise price increase needed."
  },
  {
    id: "assessment-4",
    question: "Sarah's CVP model shows break-even at 85 units. She wants to reduce break-even to 60 units through price increases only. How should she set up Goal Seek?",
    answers: [
      "Set Cell = Break-even formula, To Value = 60, By Changing Cell = Price per unit",
      "Set Cell = Price per unit, To Value = 60, By Changing Cell = Break-even formula", 
      "Set Cell = Fixed costs, To Value = 60, By Changing Cell = Variable costs",
      "Set Cell = Volume, To Value = 85, By Changing Cell = Break-even formula"
    ],
    explanation: "The break-even formula should be the Set Cell since it contains the calculation. Goal Seek will adjust the price to make the formula equal exactly 60 units."
  },
  {
    id: "assessment-5",
    question: "Why is Goal Seek mastery essential for professional investor presentations?",
    answers: [
      "Investors ask complex 'what-if' questions and expect immediate, precise answers during meetings",
      "Goal Seek automatically creates PowerPoint slides for presentations",
      "Investors only invest in businesses that use advanced Excel features",
      "Goal Seek guarantees higher profits for all business models"
    ],
    explanation: "Professional credibility requires the ability to instantly answer scenario questions like 'What price achieves 25% profit margin?' Goal Seek provides precise, immediate responses."
  },
  {
    id: "assessment-6",
    question: "A consulting firm needs to determine: 'What's the maximum variable cost per project that still allows 30% profit margin at current pricing?' Which Goal Seek setup is correct?",
    answers: [
      "Set Cell = Profit margin formula, To Value = 30%, By Changing Cell = Variable cost per project",
      "Set Cell = Variable cost per project, To Value = 30%, By Changing Cell = Profit margin",
      "Set Cell = Price per project, To Value = 30%, By Changing Cell = Fixed costs",
      "Set Cell = Total revenue, To Value = 30%, By Changing Cell = Volume"
    ],
    explanation: "The profit margin formula must be the Set Cell since it calculates the percentage. Goal Seek adjusts variable costs to achieve exactly 30% margin."
  },
  {
    id: "assessment-7",
    question: "Sarah's goal is $75,000 profit. Her current model shows this requires either $4,200 per project (at current volume) or 95 projects (at current price). What does this demonstrate about Goal Seek?",
    answers: [
      "Goal Seek can solve the same profit target through different business levers (price OR volume)",
      "Goal Seek always provides multiple solutions simultaneously",
      "Goal Seek can only work with price changes, not volume changes",
      "Goal Seek calculations are inaccurate when results are too high"
    ],
    explanation: "Goal Seek finds solutions by adjusting whatever variable you specify. Sarah can reach $75k profit by increasing price OR volume, depending on which cell she designates as 'By Changing Cell'."
  },
  {
    id: "assessment-8",
    question: "During a team meeting, Sarah's partner asks: 'If we hire 2 more developers (increasing fixed costs by $8,000/month), what volume do we need to break even?' How does Goal Seek help?",
    answers: [
      "Update fixed costs (+$8,000), set Goal Seek to find volume needed for $0 profit (break-even)",
      "Goal Seek automatically calculates salary costs for new employees",
      "Goal Seek compares hiring costs across different industries",
      "Goal Seek creates job descriptions for the new developer positions"
    ],
    explanation: "After updating the cost structure, Sarah sets Profit = $0 (break-even) and Goal Seek determines the exact volume needed. This is critical for expansion planning."
  },
  {
    id: "assessment-9",
    question: "What's the key business advantage of Goal Seek over manual trial-and-error pricing?",
    answers: [
      "Goal Seek provides mathematically precise solutions instantly, enabling confident decision-making under pressure",
      "Goal Seek is more colorful and impressive in presentations",
      "Goal Seek works faster than calculators",
      "Goal Seek eliminates the need for business planning"
    ],
    explanation: "Goal Seek's precision and speed enable professional-level analysis. Instead of guessing and checking, business leaders get exact answers they can stake their reputation on."
  },
  {
    id: "assessment-10",
    question: "Sarah needs to present three scenarios to investors: conservative (20% profit growth), optimistic (40% profit growth), and stretch (60% profit growth). Each requires different pricing. What's the most professional approach using Goal Seek?",
    answers: [
      "Run Goal Seek three times with different profit targets, documenting the required price for each scenario",
      "Use Goal Seek once with the middle scenario and guess the other two",
      "Create three separate business models instead of using Goal Seek",
      "Ask investors to choose their preferred scenario before running any analysis"
    ],
    explanation: "Professional scenario analysis requires precise calculations for each case. Goal Seek enables Sarah to provide exact pricing requirements for conservative ($42k profit = $X price), optimistic ($49k profit = $Y price), and stretch ($56k profit = $Z price) scenarios."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <ClipboardCheck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    Goal Seek: Professional Mastery Assessment
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Business Application & Technical Proficiency
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                    <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Assessment Overview
                    </h3>
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      This assessment evaluates your mastery of Goal Seek as both an Excel tool and a professional 
                      business capability. You'll demonstrate understanding of Goal Seek mechanics, business 
                      applications, and the strategic thinking that impresses investors and business stakeholders.
                    </p>
                    <p className="text-yellow-800">
                      Each question blends technical Excel knowledge with real business scenarios that Sarah 
                      and other entrepreneurs face. Your success here shows you're ready to handle complex 
                      financial modeling in professional settings.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">Assessment Focus Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900">Technical Proficiency (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Goal Seek parameter setup (Set Cell, To Value, By Changing Cell)</li>
                          <li>Formula requirements and constraints</li>
                          <li>Multiple scenario handling</li>
                          <li>Integration with CVP models</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900">Business Application (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Strategic scenario analysis</li>
                          <li>Investor presentation readiness</li>
                          <li>Professional decision-making under pressure</li>
                          <li>Cost structure optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Performance Standards */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Professional Performance Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-900">🟢 Exemplary (90-100%)</h4>
                      <p className="text-green-800 text-sm">
                        Masters all Goal Seek parameters, handles complex multi-variable scenarios, 
                        demonstrates investor-ready analytical thinking, explains business rationale 
                        for all decisions.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-yellow-900">🟡 Proficient (80-89%)</h4>
                      <p className="text-yellow-800 text-sm">
                        Solid Goal Seek mechanics, completes standard business scenarios, shows 
                        good business understanding, minor gaps in advanced applications.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-900">🔴 Developing (Below 80%)</h4>
                      <p className="text-red-800 text-sm">
                        Basic Goal Seek understanding, struggles with parameter setup or business 
                        context, needs additional practice before professional application.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehensive Assessment */}
              <ComprehensionCheck
                title="Goal Seek Professional Mastery Assessment"
                description="Demonstrate your comprehensive understanding of Goal Seek for business applications"
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={false}
              />

              {/* Career Connection */}
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800">🚀 Career Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 mb-4">
                    Goal Seek mastery opens doors in many business careers:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-900">Financial Analyst Roles:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li>Investment banking scenario modeling</li>
                        <li>Corporate finance planning</li>
                        <li>Risk assessment and stress testing</li>
                        <li>Merger & acquisition analysis</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-900">Business Management:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li>Strategic planning and budgeting</li>
                        <li>Pricing optimization</li>
                        <li>Operations management</li>
                        <li>Startup financial modeling</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-blue-900 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-blue-800 mb-2">
                    After completing the Goal Seek mastery assessment, reflect with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Which assessment question challenged your thinking the most?</li>
                    <li>How has Goal Seek changed your understanding of business decision-making?</li>
                    <li>What professional situations would you now feel confident handling?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Closing phase, we'll celebrate your Goal Seek mastery and connect this powerful 
                    skill to Unit 6's overall PriceLab Challenge. You'll preview how Goal Seek integrates 
                    with data tables for comprehensive sensitivity analysis in lesson05.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}