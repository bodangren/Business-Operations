import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, FileSpreadsheet, CheckCircle, DollarSign, BarChart3, Calculator, AlertTriangle } from "lucide-react";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[3]; // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Independent Practice Introduction */}
          <Card className="border-purple-200 bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                Build Your Own CVP Model
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                Independent Excel Mastery
              </Badge>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                You've learned the theory and seen the guided practice. Now it's your turn to 
                demonstrate mastery by building a complete CVP model from scratch. You'll create 
                a professional-grade break-even analysis for a real business scenario using 
                advanced Excel features.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">Your Challenge: TechRepair Solutions</h3>
                <p className="text-purple-800">
                  Marcus Johnson is launching TechRepair Solutions, a mobile device repair service. 
                  He needs a comprehensive CVP model to determine his pricing strategy and understand 
                  his break-even requirements. Your job is to build this model using Excel's 
                  advanced functions and create professional charts for his investor presentation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Excel Assignment */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2 text-xl">
                <FileSpreadsheet className="w-6 h-6" />
                Excel Assignment: Complete CVP Analysis Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Assignment Overview */}
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-4 text-xl">Assignment Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">What You'll Create:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Complete CVP analysis workbook</li>
                      <li>• Dynamic break-even calculations</li>
                      <li>• Professional data visualization</li>
                      <li>• Scenario analysis with data tables</li>
                      <li>• Executive summary dashboard</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Excel Skills Applied:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Advanced formulas and cell references</li>
                      <li>• Data tables for sensitivity analysis</li>
                      <li>• Professional chart creation</li>
                      <li>• Conditional formatting</li>
                      <li>• Named ranges and structured references</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-4 text-xl">Step-by-Step Instructions</h3>
                
                {/* Step 1 */}
                <div className="mb-6">
                  <div className="bg-green-50 p-4 rounded border border-green-200 mb-3">
                    <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2">
                      <Badge className="bg-green-600">1</Badge>
                      Workbook Setup &amp; Data Entry
                    </h4>
                  </div>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-2 ml-4">
                    <li>Open Excel and create a new workbook named "<strong>TechRepair_CVP_Analysis_[YourName]</strong>"</li>
                    <li>Create three worksheets: "<strong>CVP Model</strong>", "<strong>Scenarios</strong>", "<strong>Dashboard</strong>"</li>
                    <li>Set up professional headers and formatting on each sheet</li>
                    <li>In the CVP Model sheet, create the following data sections:</li>
                  </ul>
                  
                  <div className="mt-3 ml-8 p-3 bg-gray-50 rounded border text-sm">
                    <h5 className="font-medium text-gray-800 mb-2">TechRepair Solutions Data:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <strong>Fixed Costs (Monthly):</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          <li>• Equipment lease: $800</li>
                          <li>• Van payment: $450</li>
                          <li>• Insurance: $300</li>
                          <li>• Business license: $50</li>
                          <li>• Marketing: $200</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Variable Costs (Per Repair):</strong>
                        <ul className="mt-1 space-y-1 text-gray-700">
                          <li>• Parts &amp; components: $25</li>
                          <li>• Travel/gas: $8</li>
                          <li>• Processing fees: $3</li>
                          <li>• Packaging: $2</li>
                        </ul>
                        <p className="mt-2"><strong>Target Price:</strong> $80 per repair</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-6">
                  <div className="bg-orange-50 p-4 rounded border border-orange-200 mb-3">
                    <h4 className="font-medium text-orange-900 mb-2 flex items-center gap-2">
                      <Badge className="bg-orange-600">2</Badge>
                      CVP Formulas &amp; Calculations
                    </h4>
                  </div>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-2 ml-4">
                    <li>Create named ranges for all input values (e.g., FixedCosts, VariableCost, SellingPrice)</li>
                    <li>Build the following calculated fields using Excel formulas:</li>
                  </ul>
                  
                  <div className="mt-3 ml-8 p-3 bg-gray-50 rounded border text-sm">
                    <h5 className="font-medium text-gray-800 mb-2">Required Formula Calculations:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li><strong>Total Fixed Costs:</strong> =SUM(FixedCostRange)</li>
                      <li><strong>Total Variable Cost per Unit:</strong> =SUM(VariableCostRange)</li>
                      <li><strong>Contribution Margin:</strong> =SellingPrice-VariableCostPerUnit</li>
                      <li><strong>Contribution Margin Ratio:</strong> =ContributionMargin/SellingPrice</li>
                      <li><strong>Break-Even Units:</strong> =TotalFixedCosts/ContributionMargin</li>
                      <li><strong>Break-Even Revenue:</strong> =BreakEvenUnits*SellingPrice</li>
                      <li><strong>Margin of Safety:</strong> =(ActualSales-BreakEvenSales)/ActualSales</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-6">
                  <div className="bg-purple-50 p-4 rounded border border-purple-200 mb-3">
                    <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2">
                      <Badge className="bg-purple-600">3</Badge>
                      Scenario Analysis with Data Tables
                    </h4>
                  </div>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-2 ml-4">
                    <li>In the "Scenarios" worksheet, create a one-variable data table showing profit at different sales volumes (50-200 repairs)</li>
                    <li>Create a two-variable data table showing profit with varying prices ($70-$90) and volumes (80-150 repairs)</li>
                    <li>Use conditional formatting to highlight profitable scenarios in green and losses in red</li>
                    <li>Add a "Goal Seek" section to find required sales for $5,000 monthly profit</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="mb-6">
                  <div className="bg-red-50 p-4 rounded border border-red-200 mb-3">
                    <h4 className="font-medium text-red-900 mb-2 flex items-center gap-2">
                      <Badge className="bg-red-600">4</Badge>
                      Professional Charts &amp; Visualization
                    </h4>
                  </div>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-2 ml-4">
                    <li>Create a break-even chart showing Fixed Costs, Total Costs, and Revenue lines</li>
                    <li>Add a vertical line marking the break-even point</li>
                    <li>Format professionally with proper titles, axis labels, and legend</li>
                    <li>Create a column chart showing cost breakdown (Fixed vs. Variable)</li>
                    <li>Add a pie chart showing contribution margin vs. variable costs</li>
                  </ul>
                </div>

                {/* Step 5 */}
                <div className="mb-6">
                  <div className="bg-indigo-50 p-4 rounded border border-indigo-200 mb-3">
                    <h4 className="font-medium text-indigo-900 mb-2 flex items-center gap-2">
                      <Badge className="bg-indigo-600">5</Badge>
                      Executive Dashboard Creation
                    </h4>
                  </div>
                  <ul className="list-disc list-inside text-blue-800 text-sm space-y-2 ml-4">
                    <li>In the "Dashboard" worksheet, create a one-page executive summary</li>
                    <li>Include key metrics: Break-even point, contribution margin, margin of safety</li>
                    <li>Add your break-even chart and cost analysis charts</li>
                    <li>Create a "Key Insights" text box with 3-4 strategic recommendations</li>
                    <li>Format professionally using consistent colors and fonts</li>
                  </ul>
                </div>
              </div>

              {/* Validation Requirements */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Validation &amp; Quality Check
                </h3>
                <p className="text-yellow-800 mb-3">Before submitting, verify your model meets these requirements:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Formula Accuracy:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>✓ All formulas use cell references, not hard-coded values</li>
                      <li>✓ Break-even calculation matches manual verification</li>
                      <li>✓ Data tables update when input values change</li>
                      <li>✓ Charts reflect current data automatically</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Professional Standards:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>✓ Currency formatted correctly ($1,234.56)</li>
                      <li>✓ Percentages displayed as % format</li>
                      <li>✓ Charts have proper titles and axis labels</li>
                      <li>✓ Consistent color scheme throughout</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Expected Results */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Expected Results (Self-Check)
                </h3>
                <p className="text-green-800 mb-3">Your completed model should show these key metrics for TechRepair Solutions:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-white rounded border border-green-200">
                    <h5 className="font-medium text-green-800">Break-Even Analysis</h5>
                    <p className="text-green-700">Break-even units: ~42 repairs/month</p>
                    <p className="text-green-700">Break-even revenue: ~$3,360/month</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-green-200">
                    <h5 className="font-medium text-green-800">Contribution Analysis</h5>
                    <p className="text-green-700">Contribution margin: $42 per repair</p>
                    <p className="text-green-700">Margin ratio: 52.5%</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-green-200">
                    <h5 className="font-medium text-green-800">Profitability</h5>
                    <p className="text-green-700">At 80 repairs: $1,560 profit</p>
                    <p className="text-green-700">For $5,000 profit: ~161 repairs needed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Context & Applications */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <BarChart3 className="w-5 w-5" />
                Real-World Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">How Businesses Use CVP Models:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Setting competitive yet profitable prices</li>
                    <li>• Determining minimum sales targets for profitability</li>
                    <li>• Evaluating the impact of cost changes</li>
                    <li>• Making expansion and investment decisions</li>
                    <li>• Assessing business risk and financial stability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Your Model's Strategic Value:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Shows investors you understand unit economics</li>
                    <li>• Provides data-driven pricing justification</li>
                    <li>• Enables scenario planning for growth</li>
                    <li>• Supports loan applications with financial projections</li>
                    <li>• Creates framework for performance monitoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submission Instructions */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="w-5 w-5" />
                Submission Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">File Requirements:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Save as: TechRepair_CVP_Analysis_[YourName].xlsx</li>
                      <li>• Include all three worksheets</li>
                      <li>• Ensure all formulas are working</li>
                      <li>• Charts display properly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Quality Standards:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Professional formatting throughout</li>
                      <li>• No hard-coded values in formulas</li>
                      <li>• Error-free calculations</li>
                      <li>• Clear, readable layout</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border border-red-200">
                  <p className="text-red-800 text-sm">
                    <strong>Due:</strong> End of class period. Upload your completed Excel file to the class portal. 
                    Be prepared to present your key findings and demonstrate your model's functionality in the next class.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
              <p className="text-gray-700">
                In the Assessment phase, we'll test your comprehensive understanding of CVP concepts, 
                Excel modeling skills, and business application knowledge through a detailed evaluation.
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