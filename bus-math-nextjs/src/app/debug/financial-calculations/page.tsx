'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import InterestCalculationBuilder from '@/components/financial-calculations/InterestCalculationBuilder';
import { BreakEvenAnalysisCalculator } from '@/components/financial-calculations/BreakEvenAnalysisCalculator';
import DepreciationMethodBuilder from '@/components/financial-calculations/DepreciationMethodBuilder';

export default function FinancialCalculationsDebugPage() {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-green-800">Financial Calculations Debug Page</CardTitle>
            <CardDescription className="text-lg">
              Interactive financial calculation components for business math education
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Interest Calculation Builder Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Interest Calculation Builder Component</CardTitle>
            <CardDescription>
              Interactive calculator for different types of interest calculations focused on PayDay Simulator cash flow scenarios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Financial Calculator</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <InterestCalculationBuilder />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Break-Even Analysis Calculator Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Break-Even Analysis Calculator Component</CardTitle>
            <CardDescription>
              Advanced break-even analysis with Goal Seek, Data Tables, and Sensitivity Analysis for Unit 6 PriceLab Challenge
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Advanced CVP Analysis Calculator</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <BreakEvenAnalysisCalculator />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Depreciation Method Builder Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Depreciation Method Builder Component</CardTitle>
            <CardDescription>
              Interactive depreciation calculator for different asset depreciation methods focused on Unit 7 Asset & Inventory Tracker
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Asset Depreciation Calculator</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <DepreciationMethodBuilder />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Component Usage Examples</CardTitle>
            <CardDescription>
              Code examples for implementing financial calculation components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">InterestCalculationBuilder Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import InterestCalculationBuilder from '@/components/financial-calculations/InterestCalculationBuilder'

// Basic usage
<InterestCalculationBuilder />

// The component includes:
// - 6 realistic business scenarios for cash flow and payroll management
// - Simple Interest, Compound Interest, Annuity, and Present Value calculations
// - Interactive input fields with real-time validation
// - Excel formula integration and SafeFormulaEvaluator security
// - Step-by-step calculation building with business context
// - Connects to Unit 5 PayDay Simulator theme
// - Calculation history tracking for comparison`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">BreakEvenAnalysisCalculator Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { BreakEvenAnalysisCalculator } from '@/components/financial-calculations/BreakEvenAnalysisCalculator'

// Basic usage
<BreakEvenAnalysisCalculator />

// The component includes:
// - Advanced break-even analysis with tabbed interface
// - Goal Seek functionality for target profit scenarios
// - One-variable and two-variable data tables for sensitivity analysis
// - Interactive CVP visualization with real-time calculations
// - Margin of Safety and Operating Leverage analysis
// - Risk assessment with business recommendations
// - Excel export functionality for professional presentations
// - Connects to Unit 6 PriceLab Challenge theme`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">DepreciationMethodBuilder Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import DepreciationMethodBuilder from '@/components/financial-calculations/DepreciationMethodBuilder'

// Basic usage
<DepreciationMethodBuilder />

// The component includes:
// - 4 realistic asset scenarios (Commercial Oven, Delivery Truck, POS System, Manufacturing Equipment)
// - Straight-Line, Double Declining Balance, Sum-of-Years-Digits, and Units of Production methods
// - Interactive asset input fields with real-time validation
// - Year-by-year depreciation schedule display
// - Excel depreciation function integration (SLN, DB, SYD functions)
// - Business strategy advice for tax optimization
// - Connects to Unit 7 Asset & Inventory Tracker theme
// - Professional asset management interface`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Business Scenarios Included:</h4>
                <pre className="text-sm overflow-x-auto">
{`// Payroll Bridge Loan - Simple Interest
// Calculate short-term financing costs for payroll timing

// Equipment Financing - Annuity Calculations
// Monthly payments for POS system to improve efficiency

// Invoice Factoring - Immediate Cash Flow
// Cost analysis for selling invoices at discount

// Emergency Fund Planning - Compound Interest
// Building reserves to avoid future financing needs

// Credit Line Interest - Operational Flexibility
// Understanding costs of maintaining credit availability

// Lease vs Buy Analysis - Present Value
// Comparing financing options for equipment decisions`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Educational Features:</h4>
                <pre className="text-sm overflow-x-auto">
{`// Safety Features:
// - SafeFormulaEvaluator prevents code injection
// - Input validation and error handling
// - Mathematical formula verification

// Excel Integration:
// - Real Excel functions (PMT, PV, FV, RATE)
// - Copy-paste ready formulas
// - Business context for each calculation

// Learning Support:
// - Step-by-step instructions
// - Business advice and interpretation
// - Calculation history for comparison
// - Progressive difficulty levels`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Required Dependencies:</h4>
                <pre className="text-sm overflow-x-auto">
{`// Component dependencies are built-in:
// - React hooks (useState, useCallback)
// - shadcn/ui components (Card, Button, Input, Tabs, Label)
// - Lucide React icons
// - TypeScript interfaces

// No additional npm packages required beyond existing project setup`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Financial Calculations Component Status</CardTitle>
            <CardDescription>
              Current status of financial calculation components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Interest Calculation Builder</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive calculator for business interest calculations including simple interest, compound interest, annuities, and present value
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Break-Even Analysis Calculator</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Advanced break-even analysis with Goal Seek, Data Tables, and Sensitivity Analysis for comprehensive CVP modeling
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Inventory Valuation Calculator</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive calculator for FIFO, LIFO, and weighted average inventory valuation methods
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <h3 className="font-semibold mb-2">Depreciation Method Builder</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive calculator for straight-line, double-declining, sum-of-years-digits, and units-of-production depreciation methods
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                  ✅ Complete
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Payroll Calculator</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive calculator for payroll processing including gross pay, deductions, and net pay calculations
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg bg-yellow-50">
                <h3 className="font-semibold mb-2">Financial Ratio Calculator</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Interactive calculator for key financial ratios including liquidity, profitability, and efficiency ratios
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                  🔄 Planned
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}