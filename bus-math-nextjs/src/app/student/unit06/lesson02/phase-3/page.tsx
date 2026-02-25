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
          {/* Bridge: Connect Phase 2 → Phase 3 */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Guided Practice: Build Sarah's Cost Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-green-700 leading-relaxed">
                Now that you can calculate markup and margin, the next question is: <strong>where do those costs come from?</strong>{' '}
                Understanding your cost structure is what makes pricing decisions defensible — not just to yourself,
                but to an investor or stakeholder sitting across the table.
              </p>
              <p className="text-green-700 leading-relaxed">
                Sarah's business has two kinds of costs: ones she pays every month no matter what (fixed),
                and ones that only appear when she takes on a client project (variable). Getting this distinction
                right is the foundation for calculating an accurate margin — and knowing how many projects she
                needs each month just to break even.
              </p>

              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Why This Connects to Markup &amp; Margin
                </h3>
                <p className="text-sm text-green-800">
                  Margin is only meaningful when you're using <em>total</em> costs — not just the obvious ones.
                  If Sarah forgets to include her contractor fees or platform charges in her per-project costs,
                  her "60% margin" is an illusion. The exercise below uses Sarah's actual expense list so the
                  numbers you work with here will carry forward into the advanced analysis in Phase 4.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Think-Pair-Share Setup */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Cost Behavior
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-3">
                Before sorting, discuss with a partner (2 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>If Sarah had zero client projects this month, which bills would she still have to pay?</li>
                <li>How does knowing her fixed costs help Sarah set a <em>minimum</em> price for each project?</li>
                <li>What would happen to her margin calculation if she accidentally treated a variable cost as fixed?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Interactive Break-Even Components Exercise */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Sort Sarah's Real Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <p className="text-orange-700 leading-relaxed">
                  Drag each of TechStart's expenses into the correct bucket. As you sort, the cost-volume-profit
                  chart below will update live — watch the break-even intersection shift with every item you place.
                </p>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900">The sorting test</h4>
                      <p className="text-sm text-yellow-800">
                        Ask yourself: <em>"Would Sarah pay this cost if she had no client projects this month?"</em>{' '}
                        If yes — it's Fixed. If it only happens per project — it's Variable.
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
                What the Chart Is Telling You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-700 leading-relaxed">
                Look at where the revenue line and total cost line cross on the CVP chart — that's Sarah's break-even point.
                To the left of it she's losing money. To the right, every additional project adds pure profit.
                Now connect this back to what you learned in Phase 2:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Margin needs all costs</h4>
                  <p className="text-sm text-blue-800">
                    When Sarah calculates margin on a project, she must include <strong>all variable costs</strong> —
                    contractor fees, design, platform charges, everything. If she leaves any out, her margin
                    looks healthier than it actually is and she'll under-price.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Fixed costs shift the floor</h4>
                  <p className="text-sm text-blue-800">
                    The dashed blue line on the chart represents Sarah's fixed costs — the floor she has to rise
                    above before a single dollar of profit appears. A higher contribution margin per project means
                    a steeper revenue line and a <em>lower</em> break-even point.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">What Sarah now knows</h4>
                <p className="text-sm text-green-800">
                  With her cost structure mapped, Sarah can answer three essential pricing questions:
                </p>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• What is the <strong>minimum price</strong> she can charge per project and still cover her variable costs?</li>
                  <li>• How many projects does she need at that price just to <strong>break even</strong> each month?</li>
                  <li>• What price gives her the margin needed to also cover fixed costs and <strong>generate profit</strong>?</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Follow-up Discussion */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Partner Discussion: Reading the Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-3">
                Share with your partner (3 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>What happened to the break-even point on the chart as you classified more costs correctly?</li>
                <li>If Sarah raised her average project price by $200, how would the chart change? Would the break-even move left or right?</li>
                <li>A competitor runs their business from home with no office lease. How does that shift their break-even compared to Sarah's?</li>
                <li>Based on TechStart's cost structure, what pricing advice would you give Sarah for her next client proposal?</li>
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