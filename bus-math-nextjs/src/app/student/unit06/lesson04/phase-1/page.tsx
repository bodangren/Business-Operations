import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "Sarah wants to make $50,000 profit next year. Instead of guessing different prices, what Excel tool can instantly tell her the exact price needed?",
    answers: [
      "Goal Seek - it works backward from profit target to find the required price",
      "SUM function - it adds up all the costs",
      "IF function - it checks if profit is high enough",
      "VLOOKUP - it finds prices in a table"
    ],
    explanation: "Goal Seek is designed for exactly this scenario. You set your profit target ($50,000) and Excel automatically calculates what price you need to charge to hit that target."
  },
  {
    id: "hook-2",
    question: "What makes Goal Seek more powerful than manually changing values in a spreadsheet?",
    answers: [
      "It finds the exact answer instantly, even with complex formulas",
      "It changes multiple cells at once",
      "It makes graphs automatically",
      "It saves the file for you"
    ],
    explanation: "Goal Seek uses mathematical algorithms to find precise solutions instantly, even when your formulas are complex with many interconnected variables."
  },
  {
    id: "hook-3", 
    question: "If Sarah's current break-even point is 100 units, and she wants to break even at only 75 units, Goal Seek could help her find:",
    answers: [
      "The exact price increase or cost reduction needed to achieve 75-unit break-even",
      "How many customers she needs to call",
      "What color her logo should be",
      "Which software to buy"
    ],
    explanation: "Goal Seek can determine precisely what operational changes (pricing or cost reductions) are needed to reach her new break-even target of 75 units."
  },
  {
    id: "hook-4",
    question: "Why is Goal Seek essential for professional investor presentations?",
    answers: [
      "Investors ask 'what-if' questions and expect immediate, accurate answers",
      "It makes the spreadsheet look more colorful",
      "It automatically creates PowerPoint slides",
      "It sends emails to investors"
    ],
    explanation: "Investors constantly ask scenario questions like 'What if costs go up 10%?' or 'What price do you need for 20% profit?' Goal Seek lets you answer these instantly with precision."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Hook Introduction */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    Sarah's Goal Seek Challenge
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    The "What-If" Revolution
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <p className="text-lg leading-relaxed text-red-900 mb-4">
                      Sarah was in the middle of an important investor meeting when venture capitalist 
                      Michael Chen asked the question that stopped her cold: "Sarah, your CVP model shows 
                      you'll make $30,000 profit at current prices. But what if you want to make $75,000? 
                      What price would you need to charge?"
                    </p>
                    <p className="text-lg leading-relaxed text-red-900 mb-4">
                      Sarah's mind raced. She knew she could manually try different prices in her spreadsheet, 
                      but that would take forever and look unprofessional. "Um, let me calculate that and 
                      get back to you," she said, knowing she was losing credibility.
                    </p>
                    <p className="text-lg leading-relaxed text-red-900">
                      Later, her CPA Jennifer Kim smiled. "Sarah, there's an Excel tool called Goal Seek 
                      that would have given you that answer in seconds. It's exactly what professional 
                      analysts use for investor meetings."
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      The Goal Seek Solution
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Goal Seek works backward from your desired result. Instead of asking "If I charge 
                      $X, what profit will I make?", it asks "If I want to make $Y profit, what price 
                      should I charge?" It's like having a business consultant that can instantly solve 
                      complex pricing puzzles.
                    </p>
                    <p className="text-blue-800">
                      With Goal Seek, Sarah could have immediately answered: "To make $75,000 profit, 
                      I need to charge $127 per project" — and the math would be perfect every time.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                    <p className="text-green-800">
                      Goal Seek isn't just about convenience—it's about professional credibility. When 
                      Sarah can answer complex "what-if" questions instantly during investor presentations, 
                      she demonstrates that she truly understands her business model and can make data-driven 
                      decisions under pressure.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Understanding Sarah's Goal Seek Challenge"
                description="Test your understanding of how Goal Seek transforms business decision-making."
                questions={hookQuestions}
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
                  <p className="text-blue-800 mb-2">
                    Think about Sarah's investor meeting situation where she couldn't instantly 
                    answer the pricing question. Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>What business decisions might require "working backward" from a target result?</li>
                    <li>How could Goal Seek help small business owners make faster, better decisions?</li>
                    <li>Why is speed of analysis crucial during investor presentations or client meetings?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Introduction phase, we'll master Goal Seek mechanics: Set Cell, To Value, 
                    and By Changing Cell. You'll learn to set up professional Goal Seek scenarios 
                    and build automated "what-if" analysis systems for business decision-making.
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