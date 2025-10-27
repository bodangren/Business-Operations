import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import { incomeStatementTemplate } from "@/components/spreadsheet/SpreadsheetTemplates";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IncomeStatementDetailed } from "@/components/financial-reports/IncomeStatementDetailed";
import { BalanceSheetDetailed } from "@/components/financial-reports/BalanceSheetDetailed";
import { CashFlowStatementDetailed } from "@/components/financial-reports/CashFlowStatementDetailed";
import { Users, Calculator, TrendingUp, AlertCircle } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[2]; // Guided Practice phase

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

export default function Unit03Lesson03Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Guided Practice: Building Sarah's Income Statement
          </h2>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200 mb-8">
            <p className="text-lg leading-relaxed text-green-900">
              Now we'll work together to build Sarah's Income Statement using the professional INDEX/MATCH approach. 
              Follow along as we transform her raw trial balance data into a compelling financial story that investors 
              can understand and trust. Remember: every number will be dynamically linked—no hard-coded values allowed!
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Step-by-Step Construction Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Step 1: Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Set up the main sections: Header, Revenues, Expenses, and Net Income. 
                  Use professional formatting with clear section breaks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Step 2: Formulas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Build INDEX/MATCH formulas to pull revenue and expense data from the 
                  trial balance. Each formula creates a live link to source data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Step 3: Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  Check that all revenue and expense accounts are included and that 
                  the Net Income calculation is mathematically correct.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Interactive Income Statement Template
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Below is Sarah's Income Statement template. Notice how it's structured with clear sections and uses formulas 
            for calculations. In a real model, the individual revenue and expense amounts would be pulled from the trial 
            balance using INDEX/MATCH formulas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            TechStart Solutions - Income Statement Template
          </h3>
          <SpreadsheetWrapper 
            initialData={incomeStatementTemplate.data}
            className="border rounded-lg"
          />
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Key Formula Insights:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-green-700">
                  <strong>Revenue Formulas:</strong> In a professional model, cells B5-B6 would use INDEX/MATCH to pull 
                  "Sales Revenue" and "Service Revenue" from the trial balance automatically.
                </p>
              </div>
              <div>
                <p className="text-green-700">
                  <strong>Expense Formulas:</strong> Cells B10-B13 would dynamically pull expense amounts, ensuring 
                  the Income Statement always reflects current trial balance data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="border-purple-200 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
            <CardTitle className="text-purple-900 flex flex-col gap-1">
              Reference: Detailed Statements for Quality Checks
              <span className="text-base font-normal text-purple-700">
                Keep these on screen while you build—your spreadsheet should reconcile to every subtotal shown here.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="space-y-3">
              <Badge className="bg-purple-100 text-purple-800 w-fit">Income Statement</Badge>
              <div className="prose prose-sm max-w-none">
                <p>
                  Before you hit submit, <strong>toggle the breakdown</strong> and verify that each INDEX/MATCH formula you wrote feeds the correct section.
                  Selling expenses should total $3,100, administrative expenses $10,400, and net income $4,220—if any number is off, trace that account in your workbook.
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
              <Badge className="bg-blue-100 text-blue-800 w-fit">Balance Sheet</Badge>
              <div className="prose prose-sm max-w-none">
                <p>
                  Use this as your balancing report: <strong>Assets ($65,200)</strong> must equal <strong>Liabilities + Equity ($29,000 + $36,200)</strong>.
                  Pay careful attention to net receivables and ending retained earnings—they are common trouble spots when trial balance links are off.
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
              <Badge className="bg-indigo-100 text-indigo-800 w-fit">Cash Flow</Badge>
              <div className="prose prose-sm max-w-none">
                <p>
                  Confirm that your cash reconciles by section: +$5,000 operating, −$2,500 investing, −$1,900 financing. 
                  The supplemental disclosures (interest and taxes paid) should match the supporting schedules you maintain in the workbook.
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
              <strong>Quick audit routine:</strong> After each major formula change, flip back to these statements. 
              If the totals no longer match, you’ve introduced an error—fix it before moving forward.
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none mt-8">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Professional Formula Examples
          </h3>
          
          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-4">INDEX/MATCH Formulas for Sarah's Data:</h4>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Revenue Section:</h5>
                <div className="font-mono text-sm text-blue-600 mb-2">
                  =INDEX(TrialBalance[Amount], MATCH("Website Development Revenue", TrialBalance[Account], 0))
                </div>
                <p className="text-gray-700 text-xs">
                  This pulls Sarah's website development revenue ($2,200) directly from her trial balance.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Expense Section:</h5>
                <div className="font-mono text-sm text-red-600 mb-2">
                  =INDEX(TrialBalance[Amount], MATCH("Software Subscriptions", TrialBalance[Account], 0))
                </div>
                <p className="text-gray-700 text-xs">
                  This pulls her software subscription expenses automatically from the trial balance.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Summary Calculations:</h5>
                <div className="font-mono text-sm text-green-600 mb-2">
                  =SUM(B5:B6) - SUM(B10:B13)
                </div>
                <p className="text-gray-700 text-xs">
                  Net Income calculation: Total Revenues minus Total Expenses.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">💡 Professional Insight</h4>
            <p className="text-blue-800">
              Notice how we use <strong>named ranges</strong> like "TrialBalance[Account]" instead of cell references 
              like "A2:A20". Named ranges make formulas more readable and less prone to breaking when data is moved. 
              This is a hallmark of professional financial modeling.
            </p>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-6">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Formula Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-blue-800 mb-2">
                Look at the Income Statement template above and discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Why are the Total formulas (=SUM(B5:B6)) better than adding individual cells (=B5+B6)?</li>
                <li>How would you modify this template if Sarah added a new revenue stream like "Consulting Services"?</li>
                <li>What happens to Net Income when Sarah's expenses increase but revenues stay the same?</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Building Investor Confidence
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            The professional approach we're using creates more than just accurate numbers—it builds trust. When investors 
            see dynamic formulas and live connections to source data, they know the financial model is robust and current.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">🏆 What Impresses Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Dynamic formulas that auto-update</li>
                  <li>• Professional formatting and structure</li>
                  <li>• Clear traceability to source data</li>
                  <li>• Industry-standard presentation</li>
                  <li>• Error-checking and validation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-800 text-lg">⚠️ Red Flags for Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>• Hard-coded numbers with no source</li>
                  <li>• Inconsistent formatting</li>
                  <li>• Manual calculations prone to error</li>
                  <li>• Outdated or static information</li>
                  <li>• No clear methodology</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">🎯 Guided Practice Success Criteria</h4>
            <p className="text-green-800 mb-3">
              You've successfully completed guided practice when you understand:
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>How to structure a professional Income Statement with clear sections</li>
              <li>Why INDEX/MATCH formulas create superior financial models</li>
              <li>How dynamic linking ensures reports stay current with source data</li>
              <li>What makes financial models trustworthy to investors</li>
            </ul>
          </div>
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
