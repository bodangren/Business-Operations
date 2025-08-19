import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Rocket, Download, CheckCircle, Target } from "lucide-react";
import BreakEvenAnalysisCalculator from "@/components/financial-calculations/BreakEvenAnalysisCalculator";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[3]; // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Advanced Goal Seek Mastery Challenges
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Professional Excel Modeling
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                    <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Real-World Business Scenarios
                    </h3>
                    <p className="text-lg leading-relaxed text-orange-900 mb-4">
                      You've mastered the basics of Goal Seek. Now it's time to tackle the complex scenarios 
                      that Sarah faces with TechStart Solutions and other growing businesses. These challenges 
                      require the same advanced Excel skills that professional business analysts use daily.
                    </p>
                    <p className="text-orange-800">
                      Each scenario below represents a real business situation where Goal Seek provides the 
                      critical insight needed for strategic decision-making. You'll work with actual practice 
                      data and build models that are ready for professional presentations.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">Practice Data Resources</h3>
                    <p className="text-blue-800 mb-4">
                      Download the practice datasets below to complete your Goal Seek challenges. These files 
                      contain real business scenarios with varying complexity levels.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-white rounded border">
                        <Download className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-900">Goal Seek Practice Scenarios</p>
                          <p className="text-sm text-blue-700">10 escalating business challenges</p>
                          <a href="/resources/unit06-goal-seek-practice.csv" download className="text-blue-600 hover:underline text-sm">
                            Download Practice Data →
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded border">
                        <Download className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-900">Excel CVP Template</p>
                          <p className="text-sm text-blue-700">Pre-built formulas for Goal Seek</p>
                          <a href="/resources/unit06-goal-seek-template.csv" download className="text-blue-600 hover:underline text-sm">
                            Download Template →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Challenge Scenarios */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-orange-800">🎯 Goal Seek Challenge Scenarios</CardTitle>
                  <p className="text-orange-600">Complete these escalating challenges using the practice data</p>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    
                    {/* Beginner Challenges */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-green-800 flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">Level 1</Badge>
                        Beginner Scenarios
                      </h4>
                      <div className="space-y-3">
                        <Card className="border-green-200 bg-green-50">
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-green-900 mb-2">TechStart Website Projects</h5>
                            <p className="text-green-800 text-sm mb-2">
                              Sarah charges $2,500 per website and wants $50,000 profit.
                            </p>
                            <p className="text-green-700 text-xs">
                              <strong>Goal Seek:</strong> Find the exact price per project needed
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-green-200 bg-green-50">
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-green-900 mb-2">Marketing Agency Volume</h5>
                            <p className="text-green-800 text-sm mb-2">
                              Current $850 price with $25,000 profit target.
                            </p>
                            <p className="text-green-700 text-xs">
                              <strong>Goal Seek:</strong> How many clients needed?
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Advanced Challenges */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-red-800 flex items-center gap-2">
                        <Badge className="bg-red-100 text-red-800">Level 2</Badge>
                        Advanced Scenarios
                      </h4>
                      <div className="space-y-3">
                        <Card className="border-red-200 bg-red-50">
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-red-900 mb-2">Consulting Firm Growth</h5>
                            <p className="text-red-800 text-sm mb-2">
                              $5,000 projects, need $35,000 profit, complex cost structure.
                            </p>
                            <p className="text-red-700 text-xs">
                              <strong>Challenge:</strong> Multiple Goal Seek scenarios with constraints
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="border-red-200 bg-red-50">
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-red-900 mb-2">Multi-Variable Optimization</h5>
                            <p className="text-red-800 text-sm mb-2">
                              Restaurant delivery service with dynamic cost variables.
                            </p>
                            <p className="text-red-700 text-xs">
                              <strong>Challenge:</strong> Sequential Goal Seek with changing parameters
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Practice */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-orange-800">🔧 Interactive Goal Seek Practice</CardTitle>
                  <p className="text-orange-600">Test your scenarios here before building in Excel</p>
                </CardHeader>
                <CardContent>
                  <BreakEvenAnalysisCalculator />
                </CardContent>
              </Card>

              {/* Self-Assessment Checklist */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">✅ Mastery Self-Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    Complete this checklist to verify your Goal Seek mastery before moving to assessment:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Successfully completed 3+ practice scenarios</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Can identify Set Cell, To Value, By Changing Cell</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Built functional Goal Seek model in Excel</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Tested model with multiple scenarios</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Can explain Goal Seek to a business owner</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Model handles complex cost structures</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Ready for investor-style questions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-green-800 text-sm">Professional Excel formatting applied</span>
                      </div>
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
                    After completing the advanced Goal Seek challenges, share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Which challenge pushed your Excel skills the most? What did you learn?</li>
                    <li>How would Goal Seek change your approach to business planning in real life?</li>
                    <li>What investor questions could you confidently answer now?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Assessment phase, you'll demonstrate your Goal Seek mastery through comprehensive 
                    questions that blend technical Excel skills with business application. You'll show you 
                    can handle real investor scenarios with confidence.
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