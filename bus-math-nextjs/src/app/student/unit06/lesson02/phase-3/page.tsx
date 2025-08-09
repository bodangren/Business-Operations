import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calculator, Target, TrendingUp, Building, AlertCircle } from "lucide-react";
import BreakEvenComponents from "@/components/drag-drop-exercises/BreakEvenComponents";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[2]; // Phase 3: Guided Practice

export default function Unit06Lesson02Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Guided Practice Introduction */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Guided Practice: Apply Markup &amp; Margin to Real Business Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-green-700 leading-relaxed">
                Now that you understand the difference between markup and margin, let's practice with Sarah's 
                real business scenario. You'll work with actual cost structures to see how these concepts 
                connect to break-even analysis and pricing decisions.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Sarah's TechStart Solutions: The Real Numbers
                </h3>
                <p className="text-sm text-green-800">
                  Sarah needs to understand her cost structure to set better prices. Some costs stay the same 
                  every month (like rent and insurance), while others change based on how many projects she takes on 
                  (like materials and contractor fees). Understanding this helps her calculate accurate markup and margin.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Think-Pair-Share Setup */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Cost Structure Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-3">
                Before we dive into the interactive exercise, discuss with a partner (2 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>Why do you think it's important for Sarah to separate fixed costs from variable costs when calculating markup and margin?</li>
                <li>How might understanding her cost structure help her compete better in the local market?</li>
                <li>What would happen to her pricing if she only considered fixed costs but ignored variable costs?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Interactive Break-Even Components Exercise */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Interactive Exercise: Build Sarah's Cost Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <p className="text-orange-700 leading-relaxed">
                  Help Sarah categorize her business costs correctly. This will help her understand which costs 
                  stay the same regardless of how many projects she takes on (Fixed Costs) versus which costs 
                  change with each additional project (Variable Costs).
                </p>
                
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">Key Learning Goals:</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• <strong>Cost Behavior:</strong> Learn how different costs behave as business volume changes</li>
                    <li>• <strong>Contribution Margin:</strong> Understand how selling price minus variable costs creates profit potential</li>
                    <li>• <strong>Break-Even Foundation:</strong> See how cost structure affects the break-even point</li>
                    <li>• <strong>Pricing Strategy:</strong> Connect cost understanding to smarter pricing decisions</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900">Business Context</h4>
                      <p className="text-sm text-yellow-800">
                        You're analyzing TechStart Solutions as a growing digital marketing consultancy. 
                        Sarah provides services like website development, SEO, and social media management. 
                        Understanding her cost structure will help determine minimum sales needed to be profitable 
                        and inform competitive pricing strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Component */}
          <BreakEvenComponents />

          {/* Analysis and Reflection */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Analysis: Connecting Costs to Pricing Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-700 leading-relaxed">
                Now that you've worked with Sarah's cost structure, let's connect this back to markup and margin calculations. 
                Understanding fixed and variable costs is crucial for accurate pricing decisions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Markup Considerations</h4>
                  <p className="text-sm text-blue-800">
                    When Sarah calculates markup, she needs to include <strong>all costs</strong> (both fixed and variable) 
                    to ensure she's covering everything. If she only considers variable costs, her markup calculation 
                    will be wrong and she might price too low.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Margin Reality Check</h4>
                  <p className="text-sm text-blue-800">
                    Margin shows Sarah what percentage of each sales dollar she keeps. But remember: this is 
                    <strong>before</strong> fixed costs! She needs enough margin to cover fixed costs and still 
                    have profit left over.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Key Insight for Sarah</h4>
                <p className="text-sm text-green-800">
                  With a solid understanding of her cost structure, Sarah can now set prices that ensure:
                </p>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• All variable costs are covered (contribution margin &gt; 0)</li>
                  <li>• Enough volume to cover all fixed costs (reach break-even)</li>
                  <li>• Additional profit for business growth and sustainability</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Follow-up Discussion */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Partner Discussion: Strategic Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-3">
                Share with your partner (3 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>How did the break-even exercise change your understanding of markup vs. margin?</li>
                <li>What pricing advice would you now give Sarah based on her cost structure?</li>
                <li>How might competitors with different cost structures price differently in the same market?</li>
                <li>What would happen to Sarah's break-even point if she raised her prices by 10%?</li>
              </ul>
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