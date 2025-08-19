import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wrench, Target, TrendingUp } from "lucide-react";
import BreakEvenAnalysisCalculator from "@/components/financial-calculations/BreakEvenAnalysisCalculator";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[2]; // Guided Practice phase

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
                    Building Sarah's Goal Seek System
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Hands-On Excel Automation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Sarah's Professional Challenge
                    </h3>
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      Remember Sarah's embarrassing moment when investor Michael Chen asked about profit 
                      targets? Today, you'll build the exact Goal Seek system that would have saved her 
                      credibility and impressed the entire room.
                    </p>
                    <p className="text-purple-800">
                      With TechStart Solutions, Sarah needs to instantly answer questions like: "What price 
                      gets us to $75,000 profit?" or "How many clients do we need to break even if costs 
                      increase 15%?" Professional investors expect immediate, precise answers.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Step-by-Step Goal Seek Mastery
                    </h3>
                    <p className="text-blue-800 mb-4">
                      The interactive calculator below includes a full Goal Seek simulator. You'll practice:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-blue-800 mb-4">
                      <li><strong>Setting Target Profits:</strong> Use Goal Seek to find exact pricing for profit goals</li>
                      <li><strong>Volume Planning:</strong> Determine sales needed if costs change unexpectedly</li>
                      <li><strong>Cost Optimization:</strong> Find maximum allowable costs while maintaining profitability</li>
                      <li><strong>Professional Scenarios:</strong> Handle complex investor questions with confidence</li>
                    </ul>
                    <p className="text-blue-800">
                      Each calculation shows you the exact Excel Goal Seek setup, so you can replicate this 
                      in your own business models.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Professional Standards</h3>
                    <p className="text-green-800">
                      This isn't just about learning Excel—it's about building the professional analytical 
                      capabilities that investors expect. Sarah's Goal Seek mastery shows she can adapt 
                      quickly to changing market conditions and make data-driven decisions under pressure.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Goal Seek Calculator */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800 text-xl">
                    Interactive Goal Seek Practice System
                  </CardTitle>
                  <p className="text-purple-600">
                    Use the Goal Seek feature in this calculator to practice reverse-engineering business scenarios
                  </p>
                </CardHeader>
                <CardContent>
                  <BreakEvenAnalysisCalculator />
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
                    After practicing with the Goal Seek calculator, share your experience with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Which Goal Seek scenario was most challenging? Why?</li>
                    <li>How does Goal Seek change your approach to business planning?</li>
                    <li>What questions could you now answer instantly in an investor meeting?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Professional Tips */}
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800">💡 Professional Goal Seek Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-yellow-900">Excel Setup Best Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                        <li>Always use clear cell references</li>
                        <li>Label your Set Cell clearly (e.g., "Target Profit")</li>
                        <li>Ensure By Changing Cell contains a single value</li>
                        <li>Test with simple scenarios first</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-yellow-900">Investor Presentation Tips:</h4>
                      <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                        <li>Prepare Goal Seek scenarios in advance</li>
                        <li>Practice common "what-if" questions</li>
                        <li>Have backup calculations ready</li>
                        <li>Explain your assumptions clearly</li>
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
                    In the Independent Practice phase, you'll tackle advanced Goal Seek challenges with 
                    real business scenarios. You'll work with actual practice data and build professional 
                    Excel models ready for investor presentations.
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