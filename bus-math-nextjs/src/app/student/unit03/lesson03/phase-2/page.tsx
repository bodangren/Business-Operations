import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { IncomeStatementDetailed } from "@/components/financial-reports/IncomeStatementDetailed";
import { BalanceSheetDetailed } from "@/components/financial-reports/BalanceSheetDetailed";
import { CashFlowStatementDetailed } from "@/components/financial-reports/CashFlowStatementDetailed";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[1]; // Introduction phase

const introductionQuestions = [
  {
    id: "intro-q1",
    question: "In the Income Statement formula: Revenues - Expenses = Net Income, which represents the famous 'bottom line'?",
    answers: [
      "Net Income - this is the profit left after subtracting all expenses from revenues",
      "Revenues - this shows how much money the business earned",
      "Expenses - this shows how much money the business spent", 
      "The subtraction symbol - this shows the mathematical operation"
    ],
    explanation: "Net Income is called the 'bottom line' because it appears at the bottom of the Income Statement and represents the final profit after all expenses are deducted from revenues."
  },
  {
    id: "intro-q2",
    question: "What is the main advantage of using INDEX/MATCH over VLOOKUP when building professional Income Statements?",
    answers: [
      "INDEX/MATCH can look in any direction and doesn't break when columns are moved, making it more flexible for complex models",
      "INDEX/MATCH is always faster than VLOOKUP in every situation",
      "INDEX/MATCH automatically formats numbers as currency",
      "INDEX/MATCH can only be used for financial statements, making it more specialized"
    ],
    explanation: "INDEX/MATCH's flexibility to look in any direction and resistance to column changes makes it the professional standard for building robust financial models that won't break when the underlying data structure changes."
  },
  {
    id: "intro-q3",
    question: "When Sarah builds her Income Statement with dynamic formulas, what happens when she adds a new client transaction to her trial balance?",
    answers: [
      "The Income Statement automatically updates to include the new revenue, showing current profitability",
      "Sarah must manually update every number on the Income Statement",
      "The Income Statement deletes all previous data and starts over",
      "Nothing happens because Income Statements are static documents"
    ],
    explanation: "Dynamic formulas create 'living documents' - when new transactions are added to the trial balance, the INDEX/MATCH formulas automatically pull the updated data into the Income Statement."
  },
  {
    id: "intro-q4",
    question: "In Excel's INDEX/MATCH formula structure: =INDEX(return_array, MATCH(lookup_value, lookup_array, 0)), what does the '0' at the end specify?",
    answers: [
      "It specifies an exact match - the formula will only return results for perfect matches",
      "It tells the formula to start searching from the first row",
      "It formats the result as a whole number with no decimals", 
      "It makes the formula case-sensitive for text matches"
    ],
    explanation: "The '0' in MATCH specifies exact match mode, ensuring the formula only returns results when it finds a perfect match for the lookup value, which is crucial for accurate financial reporting."
  },
  {
    id: "intro-q5",
    question: "Why do investors and banks require formal Income Statements instead of just looking at Sarah's detailed ledger?",
    answers: [
      "Income Statements present the financial story in a standardized format that allows easy comparison and professional evaluation",
      "Income Statements are required by law for all businesses regardless of size",
      "Income Statements are easier to read because they use simpler language",
      "Income Statements automatically calculate taxes owed"
    ],
    explanation: "Standardized financial statements allow investors and banks to quickly evaluate a business's performance and compare it to other opportunities using familiar formats and industry-standard presentations."
  }
];

const detailedIncomeStatementData = {
  period: "For the Month Ended April 30, 2024",
  revenues: {
    productSales: 18000,
    serviceSales: 14000,
    otherRevenues: 1200,
    totalRevenue: 33200
  },
  costOfGoodsSold: {
    beginningInventory: 5000,
    purchases: 9000,
    directLabor: 3200,
    manufacturingOverhead: 1200,
    goodsAvailableForSale: 18400,
    endingInventory: 4200,
    totalCOGS: 14200
  },
  grossProfit: 19000,
  operatingExpenses: {
    selling: {
      advertising: 1800,
      salesCommissions: 900,
      deliveryExpense: 400,
      totalSelling: 3100
    },
    administrative: {
      salaries: 7200,
      rent: 1800,
      utilities: 600,
      insurance: 350,
      depreciation: 450,
      totalAdministrative: 10400
    },
    totalOperating: 13500
  },
  operatingIncome: 5500,
  nonOperating: {
    interestIncome: 120,
    dividendIncome: 0,
    gainOnSaleOfAssets: 0,
    totalOtherIncome: 120,
    interestExpense: 300,
    totalNonOperating: -180
  },
  incomeBeforeTaxes: 5320,
  incomeTaxes: {
    currentTax: 1060,
    deferredTax: 40,
    totalTaxes: 1100
  },
  netIncome: 4220
};

const detailedBalanceSheetData = {
  asOfDate: "As of April 30, 2024",
  assets: {
    currentAssets: {
      cashAndEquivalents: {
        cashOnHand: 600,
        checkingAccount: 5200,
        savingsAccount: 3300,
        moneyMarketFunds: 1200,
        totalCash: 10300
      },
      receivables: {
        accountsReceivable: 6400,
        notesReceivable: 800,
        allowanceForDoubtfulAccounts: -200,
        netReceivables: 7000
      },
      inventory: {
        rawMaterials: 1500,
        workInProcess: 900,
        finishedGoods: 2600,
        totalInventory: 5000
      },
      otherCurrentAssets: {
        prepaidExpenses: 900,
        marketableSecurities: 1500,
        totalOtherCurrent: 2400
      },
      totalCurrentAssets: 24700
    },
    fixedAssets: {
      propertyPlantEquipment: {
        land: 7000,
        buildings: 15000,
        equipment: 12000,
        vehicles: 4800,
        furniture: 2000,
        totalPPE: 40800,
        accumulatedDepreciation: -6500,
        netPPE: 34300
      },
      intangibleAssets: {
        patents: 1800,
        trademarks: 900,
        goodwill: 0,
        totalIntangible: 2700
      },
      investments: {
        longTermInvestments: 3500,
        subsidiaryInvestments: 0,
        totalInvestments: 3500
      },
      totalFixedAssets: 40500
    },
    totalAssets: 65200
  },
  liabilities: {
    currentLiabilities: {
      payables: {
        accountsPayable: 4800,
        notesPayable: 1200,
        accruedExpenses: 900,
        totalPayables: 6900
      },
      shortTermDebt: {
        shortTermLoans: 1500,
        currentPortionLongTerm: 1000,
        totalShortTermDebt: 2500
      },
      otherCurrentLiabilities: {
        accruedWages: 1800,
        accruedTaxes: 700,
        deferredRevenue: 900,
        totalOtherCurrent: 3400
      },
      totalCurrentLiabilities: 12800
    },
    longTermLiabilities: {
      longTermDebt: {
        mortgagePayable: 8000,
        bondsPayable: 0,
        bankLoans: 6000,
        totalLongTermDebt: 14000
      },
      otherLongTermLiabilities: {
        deferredTaxLiability: 1500,
        pensionLiability: 700,
        totalOtherLongTerm: 2200
      },
      totalLongTermLiabilities: 16200
    },
    totalLiabilities: 29000
  },
  equity: {
    paidInCapital: {
      commonStock: 15000,
      preferredStock: 0,
      additionalPaidInCapital: 3500,
      totalPaidInCapital: 18500
    },
    retainedEarnings: {
      beginningRetainedEarnings: 15000,
      netIncome: 4220,
      dividendsPaid: -2000,
      endingRetainedEarnings: 17220
    },
    otherEquity: {
      treasuryStock: -720,
      accumulatedOtherIncome: 1200,
      totalOtherEquity: 480
    },
    totalEquity: 36200
  },
  totalLiabilitiesAndEquity: 65200
};

const detailedCashFlowData = {
  period: "For the Month Ended April 30, 2024",
  operatingActivities: {
    netIncome: 4220,
    adjustments: {
      depreciation: 650,
      amortization: 90,
      lossOnSaleOfAssets: 0,
      badDebtExpense: 140,
      stockBasedCompensation: 220,
      deferredTaxes: 60,
      totalAdjustments: 1160
    },
    workingCapitalChanges: {
      accountsReceivable: -600,
      inventory: -400,
      prepaidExpenses: -120,
      accountsPayable: 380,
      accruedLiabilities: 210,
      deferredRevenue: 150,
      totalWorkingCapitalChanges: -380
    },
    netOperatingCashFlow: 5000
  },
  investingActivities: {
    capitalExpenditures: {
      equipmentPurchases: -1500,
      buildingPurchases: 0,
      vehiclePurchases: -800,
      totalCapEx: -2300
    },
    assetSales: {
      equipmentSales: 400,
      buildingSales: 0,
      totalAssetSales: 400
    },
    investments: {
      purchaseOfSecurities: -600,
      saleOfSecurities: 0,
      acquisitions: 0,
      totalInvestments: -600
    },
    netInvestingCashFlow: -2500
  },
  financingActivities: {
    equity: {
      stockIssuance: 0,
      stockRepurchases: -500,
      dividendPayments: -2000,
      totalEquity: -2500
    },
    debt: {
      loanProceeds: 1500,
      loanRepayments: -900,
      bondIssuance: 0,
      bondRepayments: 0,
      totalDebt: 600
    },
    netFinancingCashFlow: -1900
  },
  supplementalDisclosures: {
    interestPaid: 300,
    taxesPaid: 1050,
    nonCashTransactions: {
      assetAcquisitionByDebt: 0,
      stockIssuedForServices: 0
    }
  },
  netChangeInCash: 600,
  beginningCash: 9700,
  endingCash: 10300
};

export default function Unit03Lesson03Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Building the Plot: Income Statement Architecture
          </h2>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200 mb-8">
            <p className="text-lg leading-relaxed text-green-900">
              Jennifer Kim taught Sarah that the Income Statement is the "plot" of any business story because it answers 
              the fundamental question every investor asks: <strong>"Is this business profitable?"</strong> Unlike the 
              detailed transaction records in her ledger, the Income Statement presents a clean, professional narrative 
              that external stakeholders can quickly understand and evaluate.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Universal Business Formula
          </h3>
          
          <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-4">
              Revenues - Expenses = Net Income
            </div>
            <p className="text-blue-700 text-lg">
              This simple formula drives every business decision and tells the complete profitability story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">📈 Revenues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  All money earned from sales of products or services. For Sarah's TechStart Solutions: 
                  website development ($2,200), social media setup ($650), SEO work ($1,100).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">📉 Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm">
                  All costs of running the business: software subscriptions, contractor payments, 
                  marketing costs, office rent, utilities—everything needed to generate revenue.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">💰 Net Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  The famous "bottom line"—profit remaining after all expenses. This number flows 
                  directly into the Balance Sheet as Retained Earnings.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Professional Excel: INDEX/MATCH Mastery
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Jennifer showed Sarah why professionals use <strong>INDEX/MATCH</strong> instead of basic lookup functions. 
            This combination is more flexible and reliable for building dynamic financial models that don't break when 
            data structures change.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-4 text-xl">INDEX/MATCH Formula Structure:</h4>
            <div className="bg-white p-4 rounded border font-mono text-sm mb-4">
              =INDEX(return_array, MATCH(lookup_value, lookup_array, 0))
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">📍 INDEX Function:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li><strong>return_array:</strong> The column containing values to return</li>
                  <li><strong>position:</strong> Which row position to return from</li>
                  <li>Think: "Give me the value from this column at this position"</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🔍 MATCH Function:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li><strong>lookup_value:</strong> What to search for</li>
                  <li><strong>lookup_array:</strong> Where to search</li>
                  <li><strong>0:</strong> Exact match required</li>
                  <li>Think: "Find the position of this item"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg">💼 Professional Example:</h4>
            <p className="text-blue-800 mb-3">
              To pull "Service Revenue" from her trial balance into the Income Statement, Sarah would write:
            </p>
            <div className="bg-white p-3 rounded border font-mono text-sm mb-3">
              =INDEX(TrialBalance[Amount], MATCH("Service Revenue", TrialBalance[Account], 0))
            </div>
            <p className="text-blue-700 text-sm">
              This formula says: "Find 'Service Revenue' in the Account column, then return the corresponding 
              Amount value." When Sarah adds new service revenue, this formula automatically updates her Income Statement.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Why Dynamic Linking Matters
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            The difference between amateur and professional financial models is automation. When Sarah's Income Statement 
            uses dynamic formulas, her financial story stays current without manual updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">✅ Professional Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Dynamic formulas that auto-update</li>
                  <li>• Live connection to source data</li>
                  <li>• Always shows current financial position</li>
                  <li>• Builds investor confidence</li>
                  <li>• Saves time on updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 text-lg">❌ Amateur Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Hard-coded numbers</li>
                  <li>• Manual updates required</li>
                  <li>• Risk of outdated information</li>
                  <li>• Prone to human error</li>
                  <li>• Time-consuming maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-purple-200 shadow-sm mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
              <CardTitle className="text-purple-900 flex flex-col gap-1">
                Detailed Storyboard Snapshots
                <span className="text-base font-normal text-purple-700">
                  These investor-ready statements add supporting detail without breaking the equations you mastered.
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="space-y-3">
                <Badge className="bg-purple-100 text-purple-800 w-fit">Income Statement Deep Dive</Badge>
                <div className="prose prose-sm max-w-none">
                  <p>
                    Every revenue stream and expense bucket now appears separately, but the math is identical:
                    <strong> $33,200 revenue − $14,200 COGS − $13,500 operating expenses = $4,220 net income.</strong>
                    Click “Show Details” to reveal the selling versus administrative breakdown and practice answering investor questions about any single line.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <IncomeStatementDetailed
                    data={detailedIncomeStatementData}
                    showCalculations={false}
                    showComparatives={false}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Badge className="bg-blue-100 text-blue-800 w-fit">Balance Sheet Structure</Badge>
                <div className="prose prose-sm max-w-none">
                  <p>
                    Notice how cash is segmented across accounts, receivables are shown net of allowances, and equity ties directly to this month’s profit.
                    Confirm that <strong>Assets ($65,200) still equal Liabilities ($29,000) + Equity ($36,200)</strong> once every section is expanded.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <BalanceSheetDetailed
                    data={detailedBalanceSheetData}
                    showRatios={true}
                    showCalculations={false}
                    showBreakdown={true}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Badge className="bg-indigo-100 text-indigo-800 w-fit">Cash Flow Diagnostics</Badge>
                <div className="prose prose-sm max-w-none">
                  <p>
                    Operating adjustments, working capital swings, capital expenditures, and financing moves are now separated.
                    Track how they reconcile to a <strong>$600 increase in cash</strong>, which must match the balance sheet snapshot.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <CashFlowStatementDetailed
                    data={detailedCashFlowData}
                    showCalculations={false}
                    showSupplemental={true}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-purple-800">
                <strong>Coach’s tip:</strong> When your own statements don’t balance, come back to these references.
                The detailed presentation is impressive, but the underlying equations are non-negotiable.
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50 mb-6">
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
                Think about Sarah's challenge of transforming her detailed ledger into an investor-ready Income Statement. 
                Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>What specific advantages does INDEX/MATCH give Sarah for building professional financial reports?</li>
                <li>How would dynamic formulas help Sarah when she lands more clients and grows TechStart Solutions?</li>
                <li>Why is the "bottom line" (Net Income) so important to investors evaluating her business?</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ComprehensionCheck
          title="Income Statement Architecture & Excel Mastery"
          description="Verify your understanding of Income Statement construction and professional Excel techniques."
          questions={introductionQuestions}
          showExplanations={true}
        />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg">🎯 Phase 2 Learning Target</h3>
          <p className="text-amber-800">
            You should now understand the Income Statement's role as the business "plot," the INDEX/MATCH formula 
            structure for dynamic data retrieval, and why professional financial models use live connections to 
            source data rather than static numbers.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  );
}
