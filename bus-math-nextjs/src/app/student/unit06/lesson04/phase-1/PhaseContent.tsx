import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, AlertCircle } from "lucide-react";

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">
      
      <div className="space-y-8">
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
                    Sarah's Crossroads
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Two Paths to $10,000 Profit
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <p className="text-lg leading-relaxed text-red-900 mb-4">
                      Sarah had done her homework. Her CVP model showed she could hit her $10,000 monthly 
                      profit target <strong>two completely different ways</strong>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="bg-white p-4 rounded border border-red-300">
                        <h4 className="font-bold text-red-900 text-center mb-2">Path A: Premium Pricing</h4>
                        <p className="text-red-800 text-sm text-center">
                          Keep 24 projects<br/>
                          Raise price to <strong>$1,635</strong><br/>
                          Profit: $10,000
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border border-red-300">
                        <h4 className="font-bold text-red-900 text-center mb-2">Path B: Volume Play</h4>
                        <p className="text-red-800 text-sm text-center">
                          Keep $1,350 price<br/>
                          Serve <strong>39 projects</strong><br/>
                          Profit: $10,000
                        </p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-red-900">
                      "Both paths work on paper," Sarah told her mentor Jennifer. "But which one actually 
                      works in <em>my</em> business? How do I choose?"
                    </p>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
                    <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      The Friction Point
                    </h3>
                    <p className="text-amber-800 mb-4">
                      The math says both scenarios work. But real business has constraints that math doesn't see:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-amber-800">
                      <li>Can Sarah's current team actually handle 39 projects?</li>
                      <li>Will customers pay $1,635 when the competitor charges $1,350?</li>
                      <li>If she raises prices and loses customers, does she end up worse off?</li>
                      <li>Which variable (price, volume, costs) is most sensitive to small changes?</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Why Scenario Comparison Matters
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Before Sarah can use powerful Excel tools like Goal Seek and Data Tables, she needs 
                      to understand the <strong>business logic</strong> of comparing scenarios. Today's lesson 
                      builds that intuition by comparing pricing options by hand.
                    </p>
                    <p className="text-blue-800">
                      When you understand <em>why</em> one scenario beats another, automated tools become 
                      powerful accelerators. Without that intuition, you're just pressing buttons.
                    </p>
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
                    Think about Sarah's two paths. Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>What business information would help Sarah choose between Path A and Path B?</li>
                    <li>What could go wrong with each path that the math doesn't show?</li>
                    <li>Why might it be dangerous to just "let Excel figure it out"?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Introduction phase, we'll build structured comparison tables to analyze 
                    multiple pricing scenarios systematically. You'll learn to see exactly which 
                    variables matter most in pricing decisions.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}
