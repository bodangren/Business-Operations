'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { IncomeStatementSimple } from '@/components/financial-reports/IncomeStatementSimple'
import { IncomeStatementDetailed } from '@/components/financial-reports/IncomeStatementDetailed'
import { CashFlowStatementSimple } from '@/components/financial-reports/CashFlowStatementSimple'
import { CashFlowStatementDetailed } from '@/components/financial-reports/CashFlowStatementDetailed'
import { BalanceSheetSimple } from '@/components/financial-reports/BalanceSheetSimple'
import { BalanceSheetDetailed } from '@/components/financial-reports/BalanceSheetDetailed'

export default function FinancialReportsDebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-green-800">Financial Reports Debug Page</CardTitle>
            <CardDescription className="text-lg">
              Testing and debugging financial reporting components for educational use
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Income Statement Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Income Statement Components</CardTitle>
            <CardDescription>
              Simple and detailed income statement components for teaching profit & loss analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Simple Income Statement */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple Income Statement</h3>
              <IncomeStatementSimple 
                showCalculations={true}
                className="max-w-none"
              />
            </div>

            {/* Detailed Income Statement */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Detailed Income Statement</h3>
              <IncomeStatementDetailed 
                showCalculations={true}  
                className="max-w-none"
              />
            </div>

            {/* Loss Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Loss Example (Teaching Scenario)</h3>
              <IncomeStatementSimple 
                data={{
                  period: "For the Year Ended December 31, 2024",
                  revenue: 150000,
                  costOfGoodsSold: 120000,
                  grossProfit: 30000,
                  operatingExpenses: 45000,
                  operatingIncome: -15000,
                  otherIncome: 1000,
                  interestExpense: 2000,
                  netIncomeBeforeTaxes: -16000,
                  taxes: 0,
                  netIncome: -16000
                }}
                title="Income Statement - Loss Example"
                showCalculations={true}
                className="max-w-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Cash Flow Statement Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Cash Flow Statement Components</CardTitle>
            <CardDescription>
              Simple and detailed cash flow statement components for teaching cash management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Simple Cash Flow Statement */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple Cash Flow Statement</h3>
              <CashFlowStatementSimple 
                showCalculations={true}
                className="max-w-none"
              />
            </div>

            {/* Detailed Cash Flow Statement */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Detailed Cash Flow Statement</h3>
              <CashFlowStatementDetailed 
                showCalculations={true}
                className="max-w-none"
              />
            </div>

            {/* Cash Decrease Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Cash Decrease Example (Teaching Scenario)</h3>
              <CashFlowStatementSimple 
                data={{
                  period: "For the Year Ended December 31, 2024",
                  operatingActivities: {
                    netIncome: -5000,
                    depreciation: 8000,
                    changeInReceivables: -10000,
                    changeInInventory: -8000,
                    changeInPayables: 3000,
                    netOperatingCashFlow: -12000
                  },
                  investingActivities: {
                    equipmentPurchases: -25000,
                    equipmentSales: 0,
                    investmentPurchases: -5000,
                    investmentSales: 0,
                    netInvestingCashFlow: -30000
                  },
                  financingActivities: {
                    stockIssuance: 15000,
                    dividendPayments: 0,
                    loanProceeds: 20000,
                    loanRepayments: -5000,
                    netFinancingCashFlow: 30000
                  },
                  netChangeInCash: -12000,
                  beginningCash: 25000,
                  endingCash: 13000
                }}
                title="Cash Flow Statement - Cash Decrease Example"
                showCalculations={true}
                className="max-w-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Balance Sheet Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Balance Sheet Components</CardTitle>
            <CardDescription>
              Simple and detailed balance sheet components for teaching financial position analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Simple Balance Sheet */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple Balance Sheet</h3>
              <BalanceSheetSimple 
                showCalculations={true}
                showRatios={true}
                className="max-w-none"
              />
            </div>

            {/* Detailed Balance Sheet */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Detailed Balance Sheet</h3>
              <BalanceSheetDetailed 
                showCalculations={true}
                showRatios={true}
                className="max-w-none"
              />
            </div>

            {/* Small Business Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Small Business Example (Teaching Scenario)</h3>
              <BalanceSheetSimple 
                data={{
                  asOfDate: "As of December 31, 2024",
                  assets: {
                    currentAssets: {
                      cash: 15000,
                      accountsReceivable: 8500,
                      inventory: 12000,
                      prepaidExpenses: 2000,
                      totalCurrentAssets: 37500
                    },
                    fixedAssets: {
                      equipment: 25000,
                      accumulatedDepreciation: -8000,
                      netEquipment: 17000,
                      buildings: 0,
                      land: 0,
                      totalFixedAssets: 17000
                    },
                    totalAssets: 54500
                  },
                  liabilities: {
                    currentLiabilities: {
                      accountsPayable: 6500,
                      accruedLiabilities: 2200,
                      shortTermDebt: 4000,
                      totalCurrentLiabilities: 12700
                    },
                    longTermLiabilities: {
                      longTermDebt: 15000,
                      mortgagePayable: 0,
                      totalLongTermLiabilities: 15000
                    },
                    totalLiabilities: 27700
                  },
                  equity: {
                    commonStock: 20000,
                    retainedEarnings: 6800,
                    totalEquity: 26800
                  },
                  totalLiabilitiesAndEquity: 54500
                }}
                title="Balance Sheet - Small Business Example"
                showCalculations={true}
                showRatios={true}
                className="max-w-none"
              />
            </div>
          </CardContent>
        </Card>

        {/* Component Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Financial Reporting Component Usage</CardTitle>
            <CardDescription>
              Code examples for implementing financial reporting components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Financial Reporting Components Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { IncomeStatementSimple } from '@/components/financial-reports/IncomeStatementSimple'
import { IncomeStatementDetailed } from '@/components/financial-reports/IncomeStatementDetailed'
import { CashFlowStatementSimple } from '@/components/financial-reports/CashFlowStatementSimple'
import { CashFlowStatementDetailed } from '@/components/financial-reports/CashFlowStatementDetailed'
import { BalanceSheetSimple } from '@/components/financial-reports/BalanceSheetSimple'
import { BalanceSheetDetailed } from '@/components/financial-reports/BalanceSheetDetailed'

// Simple Income Statement
<IncomeStatementSimple 
  showCalculations={true}
  title="Company Income Statement"
/>

// Detailed Income Statement with Custom Data
<IncomeStatementDetailed 
  data={{
    period: "For the Year Ended December 31, 2024",
    revenues: {
      productSales: 180000,
      serviceSales: 65000,
      otherRevenues: 5000,
      totalRevenue: 250000
    },
    // ... other data properties
  }}
  showCalculations={true}
  showComparatives={false}
/>

// Simple Cash Flow Statement
<CashFlowStatementSimple 
  showCalculations={true}
  title="Cash Flow Statement"
/>

// Detailed Cash Flow Statement
<CashFlowStatementDetailed 
  showCalculations={true}
  showSupplemental={true}
/>

// Simple Balance Sheet
<BalanceSheetSimple 
  showCalculations={true}
  showRatios={true}
  title="Balance Sheet"
/>

// Detailed Balance Sheet
<BalanceSheetDetailed 
  showCalculations={true}
  showRatios={true}
  showBreakdown={false}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Financial Component Features:</h4>
                <div className="text-sm space-y-2">
                  <div><strong>Income Statement:</strong> Shows profit/loss with detailed revenue and expense breakdowns</div>
                  <div><strong>Cash Flow Statement:</strong> Tracks cash from operating, investing, and financing activities</div>
                  <div><strong>Balance Sheet:</strong> Displays financial position with assets, liabilities, and equity</div>
                  <div><strong>Interactive Features:</strong> Toggle details, export functionality, calculation explanations</div>
                  <div><strong>Educational Tools:</strong> Built-in ratio analysis, formulas, and financial health indicators</div>
                  <div><strong>Shadcn Integration:</strong> Uses shadcn/ui components for consistent styling and interactions</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}