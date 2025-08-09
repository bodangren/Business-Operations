import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Award, TrendingUp, Calculator, Lightbulb, BarChart3 } from "lucide-react";
import BreakEvenAnalysisCalculator from "@/components/financial-calculations/BreakEvenAnalysisCalculator";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[3]; // Phase 4: Independent Practice

export default function Unit06Lesson02Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Independent Practice Introduction */}
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Independent Practice: Advanced Pricing Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-purple-700 leading-relaxed">
                Time to put your markup and margin knowledge to work! You'll use professional-level analysis 
                tools to solve complex pricing challenges for Sarah's expanding business. This is the kind 
                of analysis real consultants and business analysts perform for clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white border-green-200">
                  <CardContent className="p-4 text-center">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">Professional Skills</h3>
                    <p className="text-sm text-green-700">Use advanced Excel techniques like Goal Seek and Data Tables</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-4 text-center">
                    <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Business Analysis</h3>
                    <p className="text-sm text-blue-700">Create investor-ready pricing recommendations</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-orange-200">
                  <CardContent className="p-4 text-center">
                    <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-orange-800">Strategic Thinking</h3>
                    <p className="text-sm text-orange-700">Balance profitability with market competitiveness</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Challenge Scenarios */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Your Challenge: Help Sarah Make Strategic Pricing Decisions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-indigo-700">
                Sarah's business has grown beyond her original projections. She needs sophisticated analysis to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">Scenario 1: Competitive Response</h4>
                  <p className="text-sm text-indigo-800">
                    A new competitor is undercutting Sarah's prices by 15%. Should she match their prices 
                    or focus on value? Use markup and margin analysis to find the minimum price she can offer 
                    while staying profitable.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">Scenario 2: Growth Planning</h4>
                  <p className="text-sm text-indigo-800">
                    Sarah wants to double her revenue next year. What combination of price increases and 
                    volume growth will get her there? Analyze different scenarios to find the optimal strategy.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">Scenario 3: Cost Optimization</h4>
                  <p className="text-sm text-indigo-800">
                    Rising costs are squeezing Sarah's margins. Which costs should she focus on reducing first? 
                    Use sensitivity analysis to prioritize cost reduction efforts for maximum impact.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">Scenario 4: Premium Service Launch</h4>
                  <p className="text-sm text-indigo-800">
                    Sarah is considering a premium service tier with higher margins. What price point maximizes 
                    profit while ensuring adequate sales volume? Test different pricing strategies.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Success Criteria</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Use Goal Seek to achieve specific profit targets</li>
                  <li>• Create Data Tables to analyze sensitivity to price and volume changes</li>
                  <li>• Generate professional recommendations with supporting data</li>
                  <li>• Consider both markup and margin implications in your analysis</li>
                  <li>• Present findings that balance profitability with competitive positioning</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Analysis Tool */}
          <Card className="border-teal-200 bg-teal-50">
            <CardHeader>
              <CardTitle className="text-teal-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Professional Analysis Tool
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-700 mb-4">
                Use this advanced break-even analysis calculator to work through the scenarios above. 
                This is the same type of tool used by business consultants and financial analysts to 
                provide strategic pricing recommendations to clients.
              </p>
              
              <div className="bg-white p-4 rounded border border-teal-200 mb-4">
                <h4 className="font-semibold text-teal-900 mb-2">Key Features to Explore:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-teal-800">
                  <ul className="space-y-1">
                    <li>• <strong>Goal Seek:</strong> Find required changes for profit targets</li>
                    <li>• <strong>One-Variable Tables:</strong> Test price sensitivity</li>
                    <li>• <strong>Two-Variable Tables:</strong> Analyze price vs volume combinations</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• <strong>Margin of Safety:</strong> Assess business risk</li>
                    <li>• <strong>Operating Leverage:</strong> Understand profit sensitivity</li>
                    <li>• <strong>Executive Summary:</strong> Generate professional insights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Component */}
          <BreakEvenAnalysisCalculator />

          {/* Reflection and Next Steps */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Connecting Analysis to Real-World Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The analysis you've just completed demonstrates why understanding markup vs. margin is crucial 
                for business success. Sarah's original approach of simple cost-plus pricing couldn't handle 
                the complexity of competitive markets and growth planning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Skills Gained</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Advanced Excel modeling techniques</li>
                    <li>• Sensitivity analysis and scenario planning</li>
                    <li>• Data-driven decision making</li>
                    <li>• Professional business communication</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Insights Developed</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Cost structure impact on pricing flexibility</li>
                    <li>• Risk assessment through margin of safety</li>
                    <li>• Competitive positioning strategies</li>
                    <li>• Growth planning with financial constraints</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Preparing for the Town Hall Debate</h4>
                <p className="text-sm text-blue-800">
                  The analysis skills you've developed today will be essential for Unit 6's culminating challenge: 
                  defending your pricing strategy in a town hall debate with real business stakeholders. 
                  You now have the tools to create compelling, data-driven arguments for your recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}