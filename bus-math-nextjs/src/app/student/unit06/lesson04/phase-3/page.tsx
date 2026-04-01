import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wrench, Target, TrendingUp, Sparkles, AlertTriangle, DollarSign } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[2];

const complicationQuestions = [
  {
    id: "comp-1",
    question: "When a competitor drops price to $1,200, which path becomes riskier?",
    answers: [
      "Path B (Volume)—Sarah needs 39 projects in a market where customers now have cheaper options",
      "Path A (Premium)—Sarah can charge whatever she wants",
      "Neither—both paths work the same",
      "Fixed cost reduction"
    ],
    explanation: "Path B becomes much harder because the customer has a cheaper alternative. To win 39 projects, Sarah now competes on price in a market where the floor dropped to $1,200."
  },
  {
    id: "comp-2",
    question: "If Sarah matches the competitor's $1,200 price, how many projects does she need to hit $10,000 profit?",
    answers: [
      "56 projects—far exceeding her 24-project capacity",
      "30 projects—about the same as before",
      "20 projects—less than before because higher volume",
      "45 projects—more than before"
    ],
    explanation: "At $1,200 price with $880 variable cost, Sarah's contribution margin drops to $320. She needs ($8,100 + $10,000) ÷ $320 = 56.6 projects—just not realistic."
  },
  {
    id: "comp-3", 
    question: "What is the 'margin of safety' for Sarah's current business?",
    answers: [
      "10 projects—she can lose 10 customers before hitting break-even",
      "24 projects—her full capacity",
      "0 projects—she is already at break-even",
      "39 projects—the volume target"
    ],
    explanation: "Margin of safety = current volume - break-even volume = 24 - 14 = 10 projects. She can lose 10 customers before losses begin."
  },
  {
    id: "comp-4",
    question: "If Sarah raises prices to $1,635 but the competitor stays at $1,200, she will likely:",
    answers: [
      "Lose some customers but potentially hit profit target if volume stays above break-even",
      "Automatically lose all customers to the competitor",
      "Automatically hit the profit target because prices are higher",
      "Need to reduce fixed costs to zero"
    ],
    explanation: "Premium pricing works only if Sarah's brand justifies the premium and enough customers stay. The margin of safety shrinks, making the business more fragile."
  }
];

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Complication: The Competitor Responds
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Adding Market Reality to the Analysis
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      Sarah called her friend Marcus, who runs a competing web design business in the same market. 
                      "Guess what," Marcus said. "I'm running a <strong>$1,200 promotional special</strong> this quarter. 
                      Can't hurt to test the market, right?"
                    </p>
                    <p className="text-purple-800">
                      Suddenly, Sarah's two-path comparison looked very different. The competitor's move 
                      changed the game entirely.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-red-50 rounded border border-red-200">
                      <h4 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4" />
                        Path A: Premium Pricing Risk
                      </h4>
                      <p className="text-xs text-red-800">
                        Sarah's $1,635 price is now <strong>$435 above</strong> the competitor. 
                        How many customers pay that premium? Her margin of safety shrinks 
                        as price-sensitive customers defect.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded border border-orange-200">
                      <h4 className="font-bold text-orange-900 flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4" />
                        Path B: Volume Play Risk
                      </h4>
                      <p className="text-xs text-orange-800">
                        To maintain volume, Sarah now fights a price war. The competitor's 
                        $1,200 makes winning 39 projects much harder. She's competing 
                        on the competitor's terms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Complication Calculation */}
              <Card className="border-red-200 bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-red-800 text-xl">New Scenario: Matching Competitor Price ($1,200)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Let's calculate what happens if Sarah matches the competitor's $1,200 price:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900">
                          <th className="p-2 border border-slate-200 text-left">Calculation Step</th>
                          <th className="p-2 border border-slate-200">Value</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr><td className="p-2 border border-slate-200">Price</td><td className="p-2 border border-slate-200 text-right">$1,200</td></tr>
                        <tr><td className="p-2 border border-slate-200">Variable Cost</td><td className="p-2 border border-slate-200 text-right">$880</td></tr>
                        <tr><td className="p-2 border border-slate-200">New Contribution Margin</td><td className="p-2 border border-slate-200 text-right">$320 ($1,200 - $880)</td></tr>
                        <tr><td className="p-2 border border-slate-200">Target Profit</td><td className="p-2 border border-slate-200 text-right">$10,000</td></tr>
                        <tr><td className="p-2 border border-slate-200">Required Contribution</td><td className="p-2 border border-slate-200 text-right">$18,100 ($8,100 + $10,000)</td></tr>
                        <tr className="font-bold bg-red-50"><td className="p-2 border border-slate-200">Required Volume</td><td className="p-2 border border-slate-200 text-right">56.6 projects</td></tr>
                        <tr className="bg-red-100 font-bold"><td className="p-2 border border-slate-200">Capacity?</td><td className="p-2 border border-slate-200 text-right">24 projects max</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-red-50 p-4 rounded border border-red-200 mt-4">
                    <p className="text-red-800 font-semibold">
                      🔴 At $1,200 price, Sarah would need 57 projects—more than double her capacity!
                      The competitor's move makes Path B mathematically impossible.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Testing Your Scenario Analysis"
                description="Apply the complication to see if you understand how market changes shift the analysis."
                questions={complicationQuestions}
                showExplanations={true}
                allowRetry={true}
              />

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
                  <p className="text-blue-800 mb-2 text-sm">
                    With the competitor now at $1,200, share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Which path (Premium or Volume) is now more realistic?</li>
                    <li>What options does Sarah have that the spreadsheet doesn't show?</li>
                    <li>How would you advise Sarah to respond if you were her consultant?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In Independent Practice, you'll run multiple scenarios with varied numbers 
                    and automatic checking. You'll master the art of comparing options quickly 
                    before we automate the process with Excel tools.
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
