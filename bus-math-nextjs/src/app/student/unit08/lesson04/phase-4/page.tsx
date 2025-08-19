import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Rocket, Target, Download, CheckCircle, TrendingUp, AlertTriangle } from "lucide-react";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[3]; // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit08Data} 
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
              
              {/* Independent Practice Introduction */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Advanced Scenario Modeling Mastery Challenges
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Independent Mastery: Building Investor-Ready Models
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                    <p className="text-lg leading-relaxed text-orange-900 mb-4">
                      Sarah has mastered the basics of Scenario Manager. Now it's time for the real test: 
                      can she build a sophisticated financial model that handles complex business scenarios 
                      independently?
                    </p>
                    <p className="text-lg leading-relaxed text-orange-900">
                      Today, you'll tackle advanced challenges that mirror what professional 
                      analysts create for million-dollar investment decisions.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Your Advanced Challenge
                    </h3>
                    <p className="text-blue-800">
                      Create a comprehensive scenario model for TechStart Solutions that includes advanced 
                      features like sensitivity analysis, stress testing, and automated scenario summaries. 
                      This is the level of sophistication that gets startups funded.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Practice Dataset: TechStart's Real Business Challenge</h3>

                  <p className="text-lg leading-relaxed">
                    Sarah's investor meeting is next week, and she needs to model several challenging 
                    scenarios based on real market feedback. Use this comprehensive dataset to build 
                    your advanced scenario model:
                  </p>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-blue-900 flex items-center gap-2">
                        <Download className="h-5 w-5" />
                        Advanced Scenario Dataset
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-800 mb-4">
                        Complete financial modeling dataset with advanced variables, market conditions, 
                        and stress-test parameters. Includes seasonal adjustments, competitive pressures, 
                        and economic scenario factors.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Button variant="outline" className="border-blue-300 text-blue-700" asChild>
                          <a href="/resources/unit08-scenario-manager-practice.csv" download>
                            <Download className="h-4 w-4 mr-2" />
                            Scenario Variables
                          </a>
                        </Button>
                        <Button variant="outline" className="border-blue-300 text-blue-700" asChild>
                          <a href="/resources/unit08-financial-model-template.csv" download>
                            <Download className="h-4 w-4 mr-2" />
                            Model Template
                          </a>
                        </Button>
                        <Button variant="outline" className="border-blue-300 text-blue-700" asChild>
                          <a href="/resources/unit08-sensitivity-analysis-data.csv" download>
                            <Download className="h-4 w-4 mr-2" />
                            Sensitivity Data
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Advanced Challenge Scenarios</h3>

                  <p className="text-lg leading-relaxed">
                    Professional financial analysts don't just model "best, worst, realistic." They create 
                    specific business scenarios that address investor concerns. Here are the advanced 
                    scenarios Sarah needs to model for her VC presentation:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-purple-900 flex items-center gap-2 text-lg">
                          <TrendingUp className="h-5 w-5" />
                          Challenge 1: Market Penetration Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-purple-800 mb-3">
                          Model how TechStart performs if market adoption is slower than expected. 
                          What if it takes 18 months instead of 6 months to reach target market share?
                        </p>
                        <div className="bg-purple-100 p-3 rounded text-xs text-purple-900">
                          <strong>Advanced Variables:</strong><br/>
                          • Market penetration timeline: 6, 12, 18 months<br/>
                          • Competitive response delays<br/>
                          • Customer education costs<br/>
                          • Market size validation
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 bg-red-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-red-900 flex items-center gap-2 text-lg">
                          <AlertTriangle className="h-5 w-5" />
                          Challenge 2: Economic Downturn Stress Test
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-red-800 mb-3">
                          What happens if there's a recession during TechStart's growth phase? 
                          Model reduced customer spending, higher churn, and limited funding availability.
                        </p>
                        <div className="bg-red-100 p-3 rounded text-xs text-red-900">
                          <strong>Stress Variables:</strong><br/>
                          • Customer budget cuts: 20-40%<br/>
                          • Churn rate increases: 5% to 15%<br/>
                          • Funding round delays: 6-12 months<br/>
                          • Price pressure from competitors
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-green-900 flex items-center gap-2 text-lg">
                          <Rocket className="h-5 w-5" />
                          Challenge 3: Viral Growth Scenario
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-800 mb-3">
                          Model explosive growth if TechStart's product goes viral. How does rapid 
                          scaling affect costs, quality, and cash flow requirements?
                        </p>
                        <div className="bg-green-100 p-3 rounded text-xs text-green-900">
                          <strong>Growth Variables:</strong><br/>
                          • Customer acquisition: 10x normal rate<br/>
                          • Server/infrastructure scaling costs<br/>
                          • Support team hiring needs<br/>
                          • Quality control challenges
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 bg-amber-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-amber-900 flex items-center gap-2 text-lg">
                          <Users className="h-5 w-5" />
                          Challenge 4: Competitive Response Modeling
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-amber-800 mb-3">
                          What if a major competitor launches a similar product at half the price? 
                          Model pricing pressure, market share loss, and strategic responses.
                        </p>
                        <div className="bg-amber-100 p-3 rounded text-xs text-amber-900">
                          <strong>Competition Variables:</strong><br/>
                          • Price war scenarios: 25-50% cuts<br/>
                          • Market share erosion rates<br/>
                          • Differentiation investment needs<br/>
                          • Customer retention strategies
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Advanced Excel Techniques</h3>
                    <p className="text-gray-800">
                      To handle these complex scenarios, Sarah needs to implement professional-grade Excel 
                      techniques that go beyond basic Scenario Manager. Use Data Tables for sensitivity analysis, 
                      dynamic charts with scenario switching, and advanced formula techniques with INDIRECT, 
                      CHOOSE, and INDEX/MATCH functions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Self-Assessment Checklist */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Self-Assessment Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800 mb-4">
                    Before presenting to investors, verify your model meets these professional standards:
                  </p>
                  <div className="space-y-2">
                    {[
                      "All scenarios switch cleanly with no #REF! or circular reference errors",
                      "Scenario summary report generates automatically and looks professional", 
                      "At least 4 different business scenarios modeled (not just optimistic/pessimistic)",
                      "Key assumptions are clearly labeled and use absolute references",
                      "Result cells track the metrics investors care about most",
                      "Data tables show sensitivity to 2-3 most critical variables",
                      "Charts update automatically when scenarios change",
                      "Model includes validation checks to catch input errors"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-green-800">
                        <span className="text-green-600 font-semibold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Assessment phase, you'll demonstrate your professional scenario modeling mastery 
                    through comprehensive questions that test both technical Excel skills and business 
                    acumen. This assessment mirrors the analytical thinking that venture capitalists use 
                    when evaluating startup investments.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit08Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}