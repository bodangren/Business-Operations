import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Calculator, Target, ArrowRight, Zap } from "lucide-react";
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
                    Working Backward to Win
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Goal Seek Mechanics & Strategy
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-800">
                    Sarah realized that knowing her break-even point ($8,100 fixed costs ÷ contribution margin) was just 
                    the beginning. To attract real investment, she needed to show how TechStart would reach its 
                    <strong> profit milestones</strong>.
                  </p>
                  
                  <p className="text-slate-700">
                    "Jennifer," Sarah asked, "If I want to earn $10,000 profit next month to hire another developer, 
                    should I raise my price or try to find more clients? How do I find the exact numbers without 
                    spending all day guessing?"
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      The Goal Seek Solution
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Excel's <strong>Goal Seek</strong> tool is built for this exact problem. While most formulas 
                      work "forward" (Input → Calculation → Result), Goal Seek works "backward" 
                      (Target Result → Calculation → Required Input).
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-sm font-medium">
                      <div className="bg-white p-3 rounded border border-blue-200 shadow-sm w-full md:w-auto text-center">
                        Standard: Input → Result
                      </div>
                      <ArrowRight className="hidden md:block text-blue-400" />
                      <div className="bg-blue-600 text-white p-3 rounded shadow-md w-full md:w-auto text-center">
                        Goal Seek: Target → Input
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">The Three Parameters</h3>
                  <p className="text-slate-700 mb-6">
                    To use Goal Seek (found under <em>Data &gt; What-If Analysis</em>), you must define three things:
                  </p>

                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900">Set Cell</h4>
                        <p className="text-slate-600 text-sm">The cell containing the formula you want to change (e.g., your <strong>Total Profit</strong> cell).</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900">To Value</h4>
                        <p className="text-slate-600 text-sm">The specific number you want that cell to reach (e.g., <strong>$10,000</strong>).</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900">By Changing Cell</h4>
                        <p className="text-slate-600 text-sm">The single input cell Excel should adjust to make the math work (e.g., <strong>Selling Price</strong>).</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vocabulary Exercise */}
              <FillInTheBlank
                sentences={vocabularyExercise}
                title="Goal Seek Vocabulary Mastery"
                description="Sarah needs to speak the language of professional analysts. Complete the sentences below."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

              {/* Business Reality Note */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Strategy Note: Choosing the Right "Lever"
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-amber-900 text-sm leading-relaxed">
                    Goal Seek is powerful, but it doesn't know if your answer is <em>realistic</em>. 
                    If Goal Seek tells Sarah she needs to charge $5,000 per website to hit her goal, 
                    but competitors charge $1,500, the tool has found a mathematical solution that isn't a 
                    business solution. 
                  </p>
                  <p className="text-amber-900 text-sm font-semibold">
                    Always ask: Is the change Goal Seek suggests actually possible in the real market?
                  </p>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready to Solve for Sarah?</h3>
                  <p className="text-gray-700">
                    In Guided Practice, you'll help Sarah pull different "levers" (Price vs. Volume) 
                    to see how she can hit her $10,000 profit milestone.
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