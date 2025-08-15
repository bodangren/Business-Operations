import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wrench, Calculator, Building2, TrendingUp } from "lucide-react";
import SpreadsheetWrapper from "@/components/spreadsheet/SpreadsheetWrapper";
import { BreakEvenComponents } from "@/components/drag-drop-exercises/BreakEvenComponents";
import { breakEvenTemplate } from "@/components/spreadsheet/SpreadsheetTemplates";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[2]; // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Guided Practice Introduction */}
          <Card className="border-green-200 bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                Building Sarah's CVP Model
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                From Theory to Practice
              </Badge>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Now it's time to put the CVP theory into practice! Jennifer is going to walk Sarah 
                through building her actual Cost-Volume-Profit model in Excel. You'll follow along, 
                learning the step-by-step process of creating a professional CVP analysis tool.
              </p>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                <h3 className="font-semibold text-green-900 mb-3">What We'll Build Today</h3>
                <ul className="list-disc list-inside text-green-800 space-y-2">
                  <li>Interactive cost categorization exercise to understand fixed vs. variable costs</li>
                  <li>Excel CVP model with input cells, calculation cells, and output cells</li>
                  <li>Break-even analysis with units and dollar calculations</li>
                  <li>Scenario analysis showing different sales volumes and their profit impact</li>
                  <li>Visual CVP chart showing cost lines, revenue line, and break-even intersection</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Professional Standards</h3>
                <p className="text-blue-800">
                  The CVP model we're building follows professional business analysis standards. 
                  When Sarah shows this to potential investors or bank loan officers, they'll 
                  immediately recognize it as sophisticated financial planning.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Cost Categorization Exercise */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Calculator className="w-5 w-5" />
                Step 1: Master Cost Categorization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 mb-4">
                Before building the Excel model, let's make sure you can correctly identify fixed 
                and variable costs. This interactive exercise will test your understanding and 
                show you how cost categorization affects break-even calculations in real-time.
              </p>
            </CardContent>
          </Card>

          <BreakEvenComponents />

          {/* Excel Model Building */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Building2 className="w-5 w-5" />
                Step 2: Build the Excel CVP Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-4">
                Now let's build Sarah's CVP model in Excel. This template shows the professional 
                structure Jennifer recommended—clear input areas, calculation formulas, and 
                scenario analysis. Pay attention to how the formulas reference cells to create 
                a dynamic, updateable model.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">Excel Model Structure:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-blue-50 rounded border">
                    <h5 className="font-medium text-blue-800">Input Section</h5>
                    <p className="text-blue-700">Fixed costs, variable costs per unit, selling price</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border">
                    <h5 className="font-medium text-blue-800">Calculations</h5>
                    <p className="text-blue-700">Contribution margin, break-even formulas</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border">
                    <h5 className="font-medium text-blue-800">Scenario Analysis</h5>
                    <p className="text-blue-700">Different sales volumes and profit projections</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 w-5 text-gray-700" />
                Sarah's CVP Model Template
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                This Excel template matches exactly what Jennifer showed Sarah. Notice how:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm">
                <li>Fixed costs are entered once and don't change with unit volume</li>
                <li>Variable costs are calculated per unit for accurate scaling</li>
                <li>The break-even formulas use cell references for dynamic updates</li>
                <li>Scenario analysis shows profit at different sales levels</li>
              </ul>
              
              <div className="border rounded-lg overflow-hidden">
                <SpreadsheetWrapper
                  initialData={breakEvenTemplate.data}
                  className="max-w-full"
                />
              </div>
              
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Key Excel Skills Demonstrated:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-yellow-700">
                  <div>
                    <p><strong>=B5-B4</strong> - Contribution margin calculation</p>
                    <p><strong>=B3/B7</strong> - Break-even units formula</p>
                  </div>
                  <div>
                    <p><strong>=B8*B5</strong> - Break-even revenue calculation</p>
                    <p><strong>=B13-B16</strong> - Profit calculation in scenarios</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Turn and Talk */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-2">
                Discussion Prompt (5 minutes):
              </p>
              <p className="text-purple-800 mb-2">
                Look at the Excel CVP model we just built. Discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>What happens to the break-even point if Sarah raises her prices to $900?</li>
                <li>How would hiring another employee (increasing fixed costs) affect break-even?</li>
                <li>Why is it important that the formulas use cell references instead of hard-coded numbers?</li>
                <li>How could Sarah use the scenario analysis for business planning?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Professional Tips */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <Calculator className="w-5 w-5" />
                Professional CVP Model Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Excel Best Practices:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Use clear labels for all inputs and calculations</li>
                    <li>• Separate input cells from formula cells</li>
                    <li>• Use cell references, not hard-coded values</li>
                    <li>• Format currency cells appropriately</li>
                    <li>• Include scenario analysis for different volumes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Business Applications:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Pricing strategy development</li>
                    <li>• Investment decision analysis</li>
                    <li>• Capacity planning and resource allocation</li>
                    <li>• Risk assessment for new ventures</li>
                    <li>• Performance target setting</li>
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
                In the Independent Practice phase, you'll build your own complete CVP model from 
                scratch using Excel, applying what you've learned to a new business scenario.
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase} 
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}