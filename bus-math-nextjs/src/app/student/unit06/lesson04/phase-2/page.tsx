import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Calculator, Target } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[1]; // Introduction phase

const vocabularyExercise = [
  {
    id: "vocab-1",
    text: "Goal Seek helps you work {blank} from your desired result instead of guessing different values.",
    answer: "backward",
    hint: "Goal Seek reverses the typical calculation process"
  },
  {
    id: "vocab-2", 
    text: "The {blank} Cell parameter contains the formula you want to change, like your 'Total Profit' cell.",
    answer: "Set",
    hint: "This parameter identifies which cell contains your target formula"
  },
  {
    id: "vocab-3",
    text: "The {blank} Value parameter is the specific target number you want your formula to reach.",
    answer: "To", 
    hint: "This parameter specifies your exact target number"
  },
  {
    id: "vocab-4",
    text: "The By Changing {blank} parameter is the single input cell that Excel will automatically adjust.",
    answer: "Cell",
    hint: "This parameter identifies which input Excel will modify"
  },
  {
    id: "vocab-5",
    text: "Instead of asking 'If I charge $X, what profit will I make?', Goal Seek asks 'If I want $Y profit, what {blank} should I charge?'",
    answer: "price",
    hint: "Goal Seek helps determine what to charge customers"
  },
  {
    id: "vocab-6",
    text: "Goal Seek makes financial planning much faster and more {blank} than manual trial-and-error.",
    answer: "accurate",
    hint: "Goal Seek eliminates guesswork and provides precise results"
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Core Content */}
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                    Goal Seek: The Professional Foundation
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Working Backward from Business Targets
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  
                  {/* Main Educational Content - From unit06-text.md Day 6 */}
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Sarah not only needed to know her break-even point; she also needed to know how to reach her 
                      <em>profit goals</em>. If she wanted to make a certain amount of money, what price should she charge? 
                      Or how many new clients would she need? Trying to guess these numbers by changing values in a 
                      spreadsheet over and over again can be really slow and frustrating. This is where a powerful 
                      Excel tool called <strong>Goal Seek</strong> comes in.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        The Goal Seek Advantage
                      </h3>
                      <p className="text-blue-800 mb-4">
                        Think of Goal Seek as a magic button that helps you work backward. Instead of saying, "If I sell 
                        100 items at $20, what's my profit?", Goal Seek lets you say, "I want my profit to be $50,000—what 
                        price do I need to charge to make that happen?"
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h3 className="font-semibold text-yellow-900 mb-4 flex items-center gap-2">
                        <Calculator className="w-5 h-5" />
                        Goal Seek Has Three Main Parts:
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <p className="font-semibold text-yellow-900">Set Cell:</p>
                            <p className="text-yellow-800">This is the cell in your spreadsheet that contains the formula you want to change, like your "Total Profit" cell.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <p className="font-semibold text-yellow-900">To Value:</p>
                            <p className="text-yellow-800">This is the specific number you want your "Set Cell" to reach, like $50,000.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-yellow-200 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <p className="font-semibold text-yellow-900">By Changing Cell:</p>
                            <p className="text-yellow-800">This is the one input cell that Excel will change to reach your target, like your "Price per Unit" cell.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <h3 className="font-semibold text-purple-900 mb-3">Professional Goal Seek Applications</h3>
                      <p className="text-purple-800 mb-3">
                        Today, you'll get hands-on with Goal Seek. You'll practice using it to answer important "what if" 
                        questions for your CVP model, such as:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-purple-800">
                        <li>What price do we need to charge to reach a profit target of $X?</li>
                        <li>How many units do we need to sell to break even if our costs suddenly go up?</li>
                        <li>What's the maximum variable cost we can have and still be profitable at a certain price?</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                      <p className="text-green-800">
                        By using Goal Seek, you can quickly explore different scenarios and find the exact numbers you need 
                        to hit your business targets. This makes your financial planning much faster and more accurate! When 
                        Sarah shows investors her Goal Seek capabilities, they see a business owner who can instantly adapt 
                        to changing market conditions and make data-driven decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vocabulary Exercise */}
              <FillInTheBlank
                sentences={vocabularyExercise}
                title="Goal Seek Vocabulary Mastery"
                description="Complete the sentences using the correct Goal Seek terminology."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
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
                    Think about the three components of Goal Seek (Set Cell, To Value, By Changing Cell). 
                    Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>How is Goal Seek different from regular Excel formulas that work "forward"?</li>
                    <li>What business scenarios would benefit from "working backward" from a target?</li>
                    <li>Why might Goal Seek be essential for professional investor presentations?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Guided Practice phase, you'll build Sarah's automated Goal Seek system step-by-step. 
                    We'll create professional Excel models that can instantly answer complex pricing questions 
                    and prepare you for real investor meetings.
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