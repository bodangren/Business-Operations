'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import AccountCategorization from "@/components/drag-drop-exercises/AccountCategorization"
import TrialBalanceSorting from "@/components/drag-drop-exercises/TrialBalanceSorting"
import { IncomeStatementSimple } from "@/components/financial-reports/IncomeStatementSimple"
import { BalanceSheetSimple } from "@/components/financial-reports/BalanceSheetSimple"
import { CashFlowStatementSimple } from "@/components/financial-reports/CashFlowStatementSimple"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson02Phases[2] // Guided Practice phase

  const guidedIncomeStatement = {
    period: "For the Month Ended March 31, 2024",
    revenue: 4200,
    costOfGoodsSold: 1200,
    grossProfit: 3000,
    operatingExpenses: 1300,
    operatingIncome: 1700,
    otherIncome: 0,
    interestExpense: 100,
    netIncomeBeforeTaxes: 1600,
    taxes: 320,
    netIncome: 1280
  }

  const guidedBalanceSheet = {
    asOfDate: "As of March 31, 2024",
    assets: {
      currentAssets: {
        cash: 3200,
        accountsReceivable: 1800,
        inventory: 1200,
        prepaidExpenses: 300,
        totalCurrentAssets: 6500
      },
      fixedAssets: {
        equipment: 4000,
        accumulatedDepreciation: -500,
        netEquipment: 3500,
        buildings: 0,
        land: 0,
        totalFixedAssets: 3500
      },
      totalAssets: 10000
    },
    liabilities: {
      currentLiabilities: {
        accountsPayable: 1700,
        accruedLiabilities: 300,
        shortTermDebt: 500,
        totalCurrentLiabilities: 2500
      },
      longTermLiabilities: {
        longTermDebt: 1500,
        mortgagePayable: 0,
        totalLongTermLiabilities: 1500
      },
      totalLiabilities: 4000
    },
    equity: {
      commonStock: 4500,
      retainedEarnings: 1500,
      totalEquity: 6000
    },
    totalLiabilitiesAndEquity: 10000
  }

  const guidedCashFlow = {
    period: "For the Month Ended March 31, 2024",
    operatingActivities: {
      netIncome: 1280,
      depreciation: 200,
      changeInReceivables: -400,
      changeInInventory: -200,
      changeInPayables: 150,
      netOperatingCashFlow: 1030
    },
    investingActivities: {
      equipmentPurchases: -700,
      equipmentSales: 0,
      investmentPurchases: 0,
      investmentSales: 0,
      netInvestingCashFlow: -700
    },
    financingActivities: {
      stockIssuance: 0,
      dividendPayments: -200,
      loanProceeds: 500,
      loanRepayments: -300,
      netFinancingCashFlow: 0
    },
    netChangeInCash: 330,
    beginningCash: 2870,
    endingCash: 3200
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        {/* Guided Practice Introduction */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 text-2xl">Guided Practice: From Trial Balance to Income Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Now that you understand the Income Statement formula, let's practice the foundational 
                skills you need to build one. Before Sarah could create her professional financial 
                statements, she needed to make sure she could correctly categorize her accounts and 
                organize them in a trial balance.
              </p>

              <p className="text-lg leading-relaxed">
                Today we'll work through the step-by-step process that Jennifer Kim taught Sarah, 
                starting with account classification and moving toward Income Statement construction. 
                Remember: these aren't just accounting exercises—they're the building blocks of 
                financial storytelling that investors understand.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">🎯 Today's Learning Objectives</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• Practice categorizing business accounts into the correct financial statement categories</li>
                <li>• Understand which accounts flow into Revenue and Expense sections of the Income Statement</li>
                <li>• Build confidence with the trial balance structure that feeds into financial statements</li>
                <li>• Prepare for building dynamic Income Statements using INDEX/MATCH formulas</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Simple Statement Reference */}
        <Card className="border-purple-200 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
            <CardTitle className="text-purple-900 flex flex-col gap-1">
              Simple Statements in Action
              <span className="text-base font-normal text-purple-700">
                Use these lightweight statements to double-check every classification decision.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="space-y-3">
              <Badge className="bg-purple-100 text-purple-800 w-fit">1 · Review Profit</Badge>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
                <div className="prose prose-sm max-w-none">
                  <p>
                    Before you sort accounts, look at <strong>the finished product we are aiming for.</strong>
                    Notice how every line connects directly to a ledger category.
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li>Verify the Income Statement still follows Revenue − Expenses = Net Income.</li>
                    <li>Highlight which accounts in your trial balance will feed Revenue versus Expenses.</li>
                    <li>Check that Net Income ($1,280) will later flow into retained earnings.</li>
                  </ol>
                </div>
                <IncomeStatementSimple
                  data={guidedIncomeStatement}
                  className="max-w-xl mx-auto lg:mx-0"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Badge className="bg-blue-100 text-blue-800 w-fit">2 · Confirm Balance</Badge>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
                <div className="prose prose-sm max-w-none">
                  <p>
                    As you classify assets and liabilities, <strong>use this balance sheet to sanity-check totals.</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li>Match Cash ($3,200) to the Ending Cash figure from the cash flow report.</li>
                    <li>Ensure each liability you categorize will land in either current or long-term buckets.</li>
                    <li>Confirm Assets ($10,000) = Liabilities ($4,000) + Equity ($6,000) after every adjustment.</li>
                  </ol>
                </div>
                <BalanceSheetSimple
                  data={guidedBalanceSheet}
                  showRatios={false}
                  showCalculations={false}
                  className="max-w-xl mx-auto lg:mx-0"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Badge className="bg-indigo-100 text-indigo-800 w-fit">3 · Track Cash</Badge>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
                <div className="prose prose-sm max-w-none">
                  <p>
                    When you adjust receivables or payables during guided practice, <strong>watch how it changes cash.</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li>Identify which account moves should appear as operating adjustments.</li>
                    <li>Keep investing activity simple—just the $700 equipment purchase.</li>
                    <li>Reconcile Ending Cash ($3,200) with the balance sheet to close the loop.</li>
                  </ol>
                </div>
                <CashFlowStatementSimple
                  data={guidedCashFlow}
                  showCalculations={false}
                  className="max-w-xl mx-auto lg:mx-0"
                />
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-purple-800">
              <strong>Guided practice checklist:</strong> before moving on, make sure the equation on each statement holds,
              your trial balance accounts have a clear destination, and your classmates can follow the story by glancing at these snapshots.
            </div>
          </CardContent>
        </Card>

        {/* Think-Pair-Share Activity */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk: Revenue vs. Expense Classification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-blue-800 mb-2">
                Think about Sarah's TechStart Solutions business. With a partner, discuss:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Why is it crucial that Revenue and Expense accounts are categorized correctly?</li>
                <li>What would happen if Sarah accidentally classified a major expense as revenue?</li>
                <li>How would incorrect categorization affect her ability to get that business loan?</li>
              </ul>
              
              <div className="bg-white p-3 rounded border border-blue-200 mt-4">
                <p className="text-blue-700 text-sm">
                  <strong>Key Insight:</strong> Accurate account classification is essential for financial integrity. 
                  One misclassified account can make a losing business appear profitable, or vice versa. 
                  This is why banks and investors demand properly categorized financial statements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Activity 1: Account Categorization */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Practice Activity 1: Master Account Classification</CardTitle>
            <p className="text-muted-foreground">
              Before building an Income Statement, you must know how to categorize every account correctly. 
              Practice with Sarah's business accounts to build this foundational skill.
            </p>
          </CardHeader>
          <CardContent>
            <AccountCategorization />
          </CardContent>
        </Card>

        {/* Guided Reflection */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Guided Reflection: Connecting to Income Statements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Great work on the account categorization! Now let's connect what you just practiced 
                to Income Statement construction:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">📈 Revenue Accounts</h4>
                  <p className="text-green-700 text-sm mb-2">
                    These accounts flow into the <strong>Revenue</strong> section of the Income Statement:
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Service Revenue (Sarah's client projects)</li>
                    <li>• Sales Revenue (if selling products)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">📉 Expense Accounts</h4>
                  <p className="text-red-700 text-sm mb-2">
                    These accounts flow into the <strong>Expenses</strong> section of the Income Statement:
                  </p>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Rent Expense</li>
                    <li>• Salary Expense</li>
                    <li>• All other operating costs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🔗 The Connection</h4>
                <p className="text-blue-700">
                  Assets, Liabilities, and Equity accounts don't appear on the Income Statement—they 
                  go on the Balance Sheet. Only Revenue and Expense accounts are used to calculate 
                  Net Income. This is why correct categorization is so critical!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Activity 2: Trial Balance Sorting */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Practice Activity 2: Trial Balance Organization</CardTitle>
            <p className="text-muted-foreground">
              Now practice organizing accounts in a trial balance format. This skill is essential because 
              your Income Statement will pull data from a properly organized trial balance using INDEX/MATCH formulas.
            </p>
          </CardHeader>
          <CardContent>
            {(() => {
              const incomeStatementPrepAccounts = [
                { name: 'Cash', balance: 800, correctSide: 'debit' as const, category: 'Assets' as const },
                { name: 'Accounts Receivable', balance: 600, correctSide: 'debit' as const, category: 'Assets' as const },
                { name: 'Supplies Expense', balance: 300, correctSide: 'debit' as const, category: 'Expenses' as const },
                { name: 'Salary Expense', balance: 300, correctSide: 'debit' as const, category: 'Expenses' as const },
                { name: 'Service Revenue', balance: 1200, correctSide: 'credit' as const, category: 'Revenue' as const },
                { name: 'Sales Revenue', balance: 800, correctSide: 'credit' as const, category: 'Revenue' as const },
              ]

              return (
                <TrialBalanceSorting 
                  title="Trial Balance: Income Statement Prep"
                  accounts={incomeStatementPrepAccounts}
                  initialShuffle={true}
                />
              )
            })()}
          </CardContent>
        </Card>

        {/* Step-by-Step Process Preview */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">Next Steps: Building Your Dynamic Income Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Excellent work on mastering account classification and trial balance organization! 
                These skills directly prepare you for the Income Statement construction process:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">Step 1</Badge>
                    <h4 className="font-semibold text-purple-800">Organize Trial Balance</h4>
                  </div>
                  <p className="text-purple-700 text-sm">
                    Use the trial balance structure you just practiced to organize all account balances
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">Step 2</Badge>
                    <h4 className="font-semibold text-purple-800">Create INDEX/MATCH Formulas</h4>
                  </div>
                  <p className="text-purple-700 text-sm">
                    Build dynamic formulas that pull Revenue and Expense data from your trial balance
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">Step 3</Badge>
                    <h4 className="font-semibold text-purple-800">Calculate Net Income</h4>
                  </div>
                  <p className="text-purple-700 text-sm">
                    Apply the formula: Revenues - Expenses = Net Income with live-updating calculations
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-purple-400 mt-4">
                <h4 className="font-semibold text-purple-800 mb-2">🚀 Why This Matters</h4>
                <p className="text-purple-700">
                  The guided practice you just completed mirrors exactly what Jennifer Kim taught Sarah. 
                  When you can classify accounts correctly and organize them systematically, you can 
                  build the professional-grade financial statements that give businesses credibility 
                  with banks, investors, and partners.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
