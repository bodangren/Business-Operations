'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, Scale, Download, AlertCircle, Calculator, Eye, Info } from 'lucide-react'
import { useState } from 'react'

interface DetailedBalanceSheetData {
  asOfDate: string
  assets: {
    currentAssets: {
      cashAndEquivalents: {
        cashOnHand: number
        checkingAccount: number
        savingsAccount: number
        moneyMarketFunds: number
        totalCash: number
      }
      receivables: {
        accountsReceivable: number
        notesReceivable: number
        allowanceForDoubtfulAccounts: number
        netReceivables: number
      }
      inventory: {
        rawMaterials: number
        workInProcess: number
        finishedGoods: number
        totalInventory: number
      }
      otherCurrentAssets: {
        prepaidExpenses: number
        marketableSecurities: number
        totalOtherCurrent: number
      }
      totalCurrentAssets: number
    }
    fixedAssets: {
      propertyPlantEquipment: {
        land: number
        buildings: number
        equipment: number
        vehicles: number
        furniture: number
        totalPPE: number
        accumulatedDepreciation: number
        netPPE: number
      }
      intangibleAssets: {
        patents: number
        trademarks: number
        goodwill: number
        totalIntangible: number
      }
      investments: {
        longTermInvestments: number
        subsidiaryInvestments: number
        totalInvestments: number
      }
      totalFixedAssets: number
    }
    totalAssets: number
  }
  liabilities: {
    currentLiabilities: {
      payables: {
        accountsPayable: number
        notesPayable: number
        accruedExpenses: number
        totalPayables: number
      }
      shortTermDebt: {
        shortTermLoans: number
        currentPortionLongTerm: number
        totalShortTermDebt: number
      }
      otherCurrentLiabilities: {
        accruedWages: number
        accruedTaxes: number
        deferredRevenue: number
        totalOtherCurrent: number
      }
      totalCurrentLiabilities: number
    }
    longTermLiabilities: {
      longTermDebt: {
        mortgagePayable: number
        bondsPayable: number
        bankLoans: number
        totalLongTermDebt: number
      }
      otherLongTermLiabilities: {
        deferredTaxLiability: number
        pensionLiability: number
        totalOtherLongTerm: number
      }
      totalLongTermLiabilities: number
    }
    totalLiabilities: number
  }
  equity: {
    paidInCapital: {
      commonStock: number
      preferredStock: number
      additionalPaidInCapital: number
      totalPaidInCapital: number
    }
    retainedEarnings: {
      beginningRetainedEarnings: number
      netIncome: number
      dividendsPaid: number
      endingRetainedEarnings: number
    }
    otherEquity: {
      treasuryStock: number
      accumulatedOtherIncome: number
      totalOtherEquity: number
    }
    totalEquity: number
  }
  totalLiabilitiesAndEquity: number
}

interface BalanceSheetDetailedProps {
  data?: DetailedBalanceSheetData
  title?: string
  showCalculations?: boolean
  showRatios?: boolean
  showBreakdown?: boolean
  className?: string
}

export function BalanceSheetDetailed({ 
  data,
  title = "Detailed Balance Sheet",
  showCalculations = false,
  showRatios = true,
  showBreakdown = false,
  className = ""
}: BalanceSheetDetailedProps) {
  
  const [showDetails, setShowDetails] = useState(showBreakdown)

  const defaultData: DetailedBalanceSheetData = {
    asOfDate: "As of December 31, 2024",
    assets: {
      currentAssets: {
        cashAndEquivalents: {
          cashOnHand: 2500,
          checkingAccount: 18750,
          savingsAccount: 12500,
          moneyMarketFunds: 8000,
          totalCash: 41750
        },
        receivables: {
          accountsReceivable: 22000,
          notesReceivable: 3500,
          allowanceForDoubtfulAccounts: -2000,
          netReceivables: 23500
        },
        inventory: {
          rawMaterials: 8000,
          workInProcess: 5000,
          finishedGoods: 15000,
          totalInventory: 28000
        },
        otherCurrentAssets: {
          prepaidExpenses: 4500,
          marketableSecurities: 6000,
          totalOtherCurrent: 10500
        },
        totalCurrentAssets: 103750
      },
      fixedAssets: {
        propertyPlantEquipment: {
          land: 35000,
          buildings: 95000,
          equipment: 58000,
          vehicles: 25000,
          furniture: 12000,
          totalPPE: 225000,
          accumulatedDepreciation: -45000,
          netPPE: 180000
        },
        intangibleAssets: {
          patents: 15000,
          trademarks: 8000,
          goodwill: 22000,
          totalIntangible: 45000
        },
        investments: {
          longTermInvestments: 18000,
          subsidiaryInvestments: 12000,
          totalInvestments: 30000
        },
        totalFixedAssets: 255000
      },
      totalAssets: 358750
    },
    liabilities: {
      currentLiabilities: {
        payables: {
          accountsPayable: 15500,
          notesPayable: 8000,
          accruedExpenses: 6200,
          totalPayables: 29700
        },
        shortTermDebt: {
          shortTermLoans: 12000,
          currentPortionLongTerm: 8500,
          totalShortTermDebt: 20500
        },
        otherCurrentLiabilities: {
          accruedWages: 4200,
          accruedTaxes: 3800,
          deferredRevenue: 2500,
          totalOtherCurrent: 10500
        },
        totalCurrentLiabilities: 60700
      },
      longTermLiabilities: {
        longTermDebt: {
          mortgagePayable: 75000,
          bondsPayable: 50000,
          bankLoans: 35000,
          totalLongTermDebt: 160000
        },
        otherLongTermLiabilities: {
          deferredTaxLiability: 8500,
          pensionLiability: 12000,
          totalOtherLongTerm: 20500
        },
        totalLongTermLiabilities: 180500
      },
      totalLiabilities: 241200
    },
    equity: {
      paidInCapital: {
        commonStock: 50000,
        preferredStock: 25000,
        additionalPaidInCapital: 15000,
        totalPaidInCapital: 90000
      },
      retainedEarnings: {
        beginningRetainedEarnings: 35000,
        netIncome: 29250,
        dividendsPaid: -8000,
        endingRetainedEarnings: 56250
      },
      otherEquity: {
        treasuryStock: -5000,
        accumulatedOtherIncome: -23700,
        totalOtherEquity: -28700
      },
      totalEquity: 117550
    },
    totalLiabilitiesAndEquity: 358750
  }

  const statementData = data || defaultData

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const isBalanced = statementData.totalAssets === statementData.totalLiabilitiesAndEquity

  const getBalanceBadge = () => {
    if (isBalanced) {
      return <Badge variant="default" className="bg-green-100 text-green-800 border-green-300">
        <Scale className="w-3 h-3 mr-1" />
        Balanced
      </Badge>
    } else {
      return <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-300">
        <AlertCircle className="w-3 h-3 mr-1" />
        Out of Balance
      </Badge>
    }
  }

  const LineItem = ({ label, amount, isSubtotal = false, isTotal = false, indent = 0, negative = false }: {
    label: string
    amount: number
    isSubtotal?: boolean
    isTotal?: boolean
    indent?: number
    negative?: boolean
  }) => (
    <div className={`flex justify-between items-center py-1 ${
      isTotal ? 'border-t-2 border-gray-800 font-bold text-lg pt-2' : 
      isSubtotal ? 'border-t border-gray-300 font-semibold pt-2' : ''
    }`} style={{ paddingLeft: `${indent * 1.5}rem` }}>
      <span className={`${isTotal ? 'text-gray-900' : 'text-gray-700'} ${negative ? 'text-red-600' : ''}`}>
        {label}
      </span>
      <span className={`${isTotal ? 'text-gray-900' : 'text-gray-600'} font-mono ${negative ? 'text-red-600' : ''}`}>
        {negative && amount > 0 ? `(${formatCurrency(amount)})` : formatCurrency(amount)}
      </span>
    </div>
  )

  // Financial Ratios
  const currentRatio = statementData.assets.currentAssets.totalCurrentAssets / statementData.liabilities.currentLiabilities.totalCurrentLiabilities
  const quickRatio = (statementData.assets.currentAssets.totalCurrentAssets - statementData.assets.currentAssets.inventory.totalInventory) / statementData.liabilities.currentLiabilities.totalCurrentLiabilities
  const debtToEquityRatio = statementData.liabilities.totalLiabilities / statementData.equity.totalEquity
  const debtToAssetsRatio = statementData.liabilities.totalLiabilities / statementData.assets.totalAssets
  const workingCapital = statementData.assets.currentAssets.totalCurrentAssets - statementData.liabilities.currentLiabilities.totalCurrentLiabilities
  const equityRatio = statementData.equity.totalEquity / statementData.assets.totalAssets

  return (
    <Card className={`max-w-6xl mx-auto ${className}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
              <Scale className="w-6 h-6" />
              {title}
            </CardTitle>
            <CardDescription className="text-lg mt-1">
              {statementData.asOfDate}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {getBalanceBadge()}
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
            >
              <Eye className="w-4 h-4 mr-1" />
              {showDetails ? 'Hide' : 'Show'} Details
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Assets Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-6">ASSETS</h3>
            
            {/* Current Assets */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-700 mb-4">Current Assets</h4>
              
              {/* Cash and Cash Equivalents */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Cash and Cash Equivalents:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Cash on Hand" amount={statementData.assets.currentAssets.cashAndEquivalents.cashOnHand} indent={2} />
                    <LineItem label="Checking Account" amount={statementData.assets.currentAssets.cashAndEquivalents.checkingAccount} indent={2} />
                    <LineItem label="Savings Account" amount={statementData.assets.currentAssets.cashAndEquivalents.savingsAccount} indent={2} />
                    <LineItem label="Money Market Funds" amount={statementData.assets.currentAssets.cashAndEquivalents.moneyMarketFunds} indent={2} />
                  </>
                )}
                <LineItem label="Total Cash and Cash Equivalents" amount={statementData.assets.currentAssets.cashAndEquivalents.totalCash} indent={1} isSubtotal />
              </div>

              {/* Receivables */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Receivables:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Accounts Receivable" amount={statementData.assets.currentAssets.receivables.accountsReceivable} indent={2} />
                    <LineItem label="Notes Receivable" amount={statementData.assets.currentAssets.receivables.notesReceivable} indent={2} />
                    <LineItem label="Less: Allowance for Doubtful Accounts" amount={statementData.assets.currentAssets.receivables.allowanceForDoubtfulAccounts} indent={2} negative />
                  </>
                )}
                <LineItem label="Net Receivables" amount={statementData.assets.currentAssets.receivables.netReceivables} indent={1} isSubtotal />
              </div>

              {/* Inventory */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Inventory:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Raw Materials" amount={statementData.assets.currentAssets.inventory.rawMaterials} indent={2} />
                    <LineItem label="Work in Process" amount={statementData.assets.currentAssets.inventory.workInProcess} indent={2} />
                    <LineItem label="Finished Goods" amount={statementData.assets.currentAssets.inventory.finishedGoods} indent={2} />
                  </>
                )}
                <LineItem label="Total Inventory" amount={statementData.assets.currentAssets.inventory.totalInventory} indent={1} isSubtotal />
              </div>

              {/* Other Current Assets */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Other Current Assets:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Prepaid Expenses" amount={statementData.assets.currentAssets.otherCurrentAssets.prepaidExpenses} indent={2} />
                    <LineItem label="Marketable Securities" amount={statementData.assets.currentAssets.otherCurrentAssets.marketableSecurities} indent={2} />
                  </>
                )}
                <LineItem label="Total Other Current Assets" amount={statementData.assets.currentAssets.otherCurrentAssets.totalOtherCurrent} indent={1} isSubtotal />
              </div>

              <LineItem label="TOTAL CURRENT ASSETS" amount={statementData.assets.currentAssets.totalCurrentAssets} isSubtotal />
            </div>

            {/* Fixed Assets */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-700 mb-4">Non-Current Assets</h4>
              
              {/* Property, Plant & Equipment */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Property, Plant & Equipment:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Land" amount={statementData.assets.fixedAssets.propertyPlantEquipment.land} indent={2} />
                    <LineItem label="Buildings" amount={statementData.assets.fixedAssets.propertyPlantEquipment.buildings} indent={2} />
                    <LineItem label="Equipment" amount={statementData.assets.fixedAssets.propertyPlantEquipment.equipment} indent={2} />
                    <LineItem label="Vehicles" amount={statementData.assets.fixedAssets.propertyPlantEquipment.vehicles} indent={2} />
                    <LineItem label="Furniture & Fixtures" amount={statementData.assets.fixedAssets.propertyPlantEquipment.furniture} indent={2} />
                    <LineItem label="Total PP&E (Cost)" amount={statementData.assets.fixedAssets.propertyPlantEquipment.totalPPE} indent={2} isSubtotal />
                    <LineItem label="Less: Accumulated Depreciation" amount={statementData.assets.fixedAssets.propertyPlantEquipment.accumulatedDepreciation} indent={2} negative />
                  </>
                )}
                <LineItem label="Net Property, Plant & Equipment" amount={statementData.assets.fixedAssets.propertyPlantEquipment.netPPE} indent={1} isSubtotal />
              </div>

              {/* Intangible Assets */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Intangible Assets:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Patents" amount={statementData.assets.fixedAssets.intangibleAssets.patents} indent={2} />
                    <LineItem label="Trademarks" amount={statementData.assets.fixedAssets.intangibleAssets.trademarks} indent={2} />
                    <LineItem label="Goodwill" amount={statementData.assets.fixedAssets.intangibleAssets.goodwill} indent={2} />
                  </>
                )}
                <LineItem label="Total Intangible Assets" amount={statementData.assets.fixedAssets.intangibleAssets.totalIntangible} indent={1} isSubtotal />
              </div>

              {/* Investments */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Long-term Investments:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Long-term Investments" amount={statementData.assets.fixedAssets.investments.longTermInvestments} indent={2} />
                    <LineItem label="Subsidiary Investments" amount={statementData.assets.fixedAssets.investments.subsidiaryInvestments} indent={2} />
                  </>
                )}
                <LineItem label="Total Investments" amount={statementData.assets.fixedAssets.investments.totalInvestments} indent={1} isSubtotal />
              </div>

              <LineItem label="TOTAL NON-CURRENT ASSETS" amount={statementData.assets.fixedAssets.totalFixedAssets} isSubtotal />
            </div>

            <LineItem label="TOTAL ASSETS" amount={statementData.assets.totalAssets} isTotal />
          </div>

          {/* Liabilities and Equity Section */}
          <div className="space-y-6">
            {/* Liabilities */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-800 mb-6">LIABILITIES</h3>
              
              {/* Current Liabilities */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-red-700 mb-4">Current Liabilities</h4>
                
                {/* Payables */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Payables:</h5>
                  {showDetails && (
                    <>
                      <LineItem label="Accounts Payable" amount={statementData.liabilities.currentLiabilities.payables.accountsPayable} indent={2} />
                      <LineItem label="Notes Payable" amount={statementData.liabilities.currentLiabilities.payables.notesPayable} indent={2} />
                      <LineItem label="Accrued Expenses" amount={statementData.liabilities.currentLiabilities.payables.accruedExpenses} indent={2} />
                    </>
                  )}
                  <LineItem label="Total Payables" amount={statementData.liabilities.currentLiabilities.payables.totalPayables} indent={1} isSubtotal />
                </div>

                {/* Short-term Debt */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Short-term Debt:</h5>
                  {showDetails && (
                    <>
                      <LineItem label="Short-term Loans" amount={statementData.liabilities.currentLiabilities.shortTermDebt.shortTermLoans} indent={2} />
                      <LineItem label="Current Portion of Long-term Debt" amount={statementData.liabilities.currentLiabilities.shortTermDebt.currentPortionLongTerm} indent={2} />
                    </>
                  )}
                  <LineItem label="Total Short-term Debt" amount={statementData.liabilities.currentLiabilities.shortTermDebt.totalShortTermDebt} indent={1} isSubtotal />
                </div>

                {/* Other Current Liabilities */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Other Current Liabilities:</h5>
                  {showDetails && (
                    <>
                      <LineItem label="Accrued Wages" amount={statementData.liabilities.currentLiabilities.otherCurrentLiabilities.accruedWages} indent={2} />
                      <LineItem label="Accrued Taxes" amount={statementData.liabilities.currentLiabilities.otherCurrentLiabilities.accruedTaxes} indent={2} />
                      <LineItem label="Deferred Revenue" amount={statementData.liabilities.currentLiabilities.otherCurrentLiabilities.deferredRevenue} indent={2} />
                    </>
                  )}
                  <LineItem label="Total Other Current Liabilities" amount={statementData.liabilities.currentLiabilities.otherCurrentLiabilities.totalOtherCurrent} indent={1} isSubtotal />
                </div>

                <LineItem label="TOTAL CURRENT LIABILITIES" amount={statementData.liabilities.currentLiabilities.totalCurrentLiabilities} isSubtotal />
              </div>

              {/* Long-term Liabilities */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-red-700 mb-4">Long-term Liabilities</h4>
                
                {/* Long-term Debt */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Long-term Debt:</h5>
                  {showDetails && (
                    <>
                      <LineItem label="Mortgage Payable" amount={statementData.liabilities.longTermLiabilities.longTermDebt.mortgagePayable} indent={2} />
                      <LineItem label="Bonds Payable" amount={statementData.liabilities.longTermLiabilities.longTermDebt.bondsPayable} indent={2} />
                      <LineItem label="Bank Loans" amount={statementData.liabilities.longTermLiabilities.longTermDebt.bankLoans} indent={2} />
                    </>
                  )}
                  <LineItem label="Total Long-term Debt" amount={statementData.liabilities.longTermLiabilities.longTermDebt.totalLongTermDebt} indent={1} isSubtotal />
                </div>

                {/* Other Long-term Liabilities */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-700 mb-2">Other Long-term Liabilities:</h5>
                  {showDetails && (
                    <>
                      <LineItem label="Deferred Tax Liability" amount={statementData.liabilities.longTermLiabilities.otherLongTermLiabilities.deferredTaxLiability} indent={2} />
                      <LineItem label="Pension Liability" amount={statementData.liabilities.longTermLiabilities.otherLongTermLiabilities.pensionLiability} indent={2} />
                    </>
                  )}
                  <LineItem label="Total Other Long-term Liabilities" amount={statementData.liabilities.longTermLiabilities.otherLongTermLiabilities.totalOtherLongTerm} indent={1} isSubtotal />
                </div>

                <LineItem label="TOTAL LONG-TERM LIABILITIES" amount={statementData.liabilities.longTermLiabilities.totalLongTermLiabilities} isSubtotal />
              </div>

              <LineItem label="TOTAL LIABILITIES" amount={statementData.liabilities.totalLiabilities} isSubtotal />
            </div>

            {/* Equity */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-6">STOCKHOLDERS' EQUITY</h3>
              
              {/* Paid-in Capital */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Paid-in Capital:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Common Stock" amount={statementData.equity.paidInCapital.commonStock} indent={2} />
                    <LineItem label="Preferred Stock" amount={statementData.equity.paidInCapital.preferredStock} indent={2} />
                    <LineItem label="Additional Paid-in Capital" amount={statementData.equity.paidInCapital.additionalPaidInCapital} indent={2} />
                  </>
                )}
                <LineItem label="Total Paid-in Capital" amount={statementData.equity.paidInCapital.totalPaidInCapital} indent={1} isSubtotal />
              </div>

              {/* Retained Earnings */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Retained Earnings:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Beginning Retained Earnings" amount={statementData.equity.retainedEarnings.beginningRetainedEarnings} indent={2} />
                    <LineItem label="Net Income" amount={statementData.equity.retainedEarnings.netIncome} indent={2} />
                    <LineItem label="Dividends Paid" amount={statementData.equity.retainedEarnings.dividendsPaid} indent={2} negative />
                  </>
                )}
                <LineItem label="Ending Retained Earnings" amount={statementData.equity.retainedEarnings.endingRetainedEarnings} indent={1} isSubtotal />
              </div>

              {/* Other Equity */}
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">Other Equity Items:</h5>
                {showDetails && (
                  <>
                    <LineItem label="Treasury Stock" amount={statementData.equity.otherEquity.treasuryStock} indent={2} negative />
                    <LineItem label="Accumulated Other Comprehensive Income" amount={statementData.equity.otherEquity.accumulatedOtherIncome} indent={2} />
                  </>
                )}
                <LineItem label="Total Other Equity" amount={statementData.equity.otherEquity.totalOtherEquity} indent={1} isSubtotal />
              </div>

              <LineItem label="TOTAL STOCKHOLDERS' EQUITY" amount={statementData.equity.totalEquity} isSubtotal />
              
              <div className="mt-6 pt-4 border-t-2 border-gray-800">
                <LineItem label="TOTAL LIABILITIES & EQUITY" amount={statementData.totalLiabilitiesAndEquity} isTotal />
              </div>
            </div>
          </div>
        </div>

        {showCalculations && (
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Fundamental Accounting Equation:
            </h4>
            <div className="text-center text-xl font-bold mb-4">
              <span className="text-blue-600">Assets</span> = <span className="text-red-600">Liabilities</span> + <span className="text-green-600">Equity</span>
            </div>
            <div className="text-center text-lg">
              {formatCurrency(statementData.assets.totalAssets)} = {formatCurrency(statementData.liabilities.totalLiabilities)} + {formatCurrency(statementData.equity.totalEquity)}
            </div>
            {!isBalanced && (
              <div className="text-center text-red-600 text-lg mt-3 font-semibold">
                ⚠️ Balance Sheet does not balance! 
                <br />
                Difference: {formatCurrency(Math.abs(statementData.assets.totalAssets - statementData.totalLiabilitiesAndEquity))}
              </div>
            )}
          </div>
        )}

        {showRatios && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 p-4 bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600">
                {currentRatio.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">Current Ratio</div>
              <div className="text-xs text-gray-500 mt-1">
                {currentRatio >= 2 ? 'Strong' : currentRatio >= 1 ? 'Adequate' : 'Weak'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-cyan-600">
                {quickRatio.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">Quick Ratio</div>
              <div className="text-xs text-gray-500 mt-1">
                Acid test
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-600">
                {formatCurrency(workingCapital)}
              </div>
              <div className="text-sm text-gray-600">Working Capital</div>
              <div className="text-xs text-gray-500 mt-1">
                Liquidity cushion
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600">
                {debtToEquityRatio.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">Debt-to-Equity</div>
              <div className="text-xs text-gray-500 mt-1">
                {debtToEquityRatio <= 1 ? 'Conservative' : 'Leveraged'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-600">
                {(debtToAssetsRatio * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Debt-to-Assets</div>
              <div className="text-xs text-gray-500 mt-1">
                Leverage ratio
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-indigo-600">
                {(equityRatio * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Equity Ratio</div>
              <div className="text-xs text-gray-500 mt-1">
                Owner's stake
              </div>
            </div>
          </div>
        )}

        {/* Financial Health Indicators */}
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
            <Info className="w-4 h-4" />
            Financial Health Indicators:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Liquidity Analysis:</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Current Ratio: {currentRatio >= 2 ? 'Excellent' : currentRatio >= 1.5 ? 'Good' : currentRatio >= 1 ? 'Adequate' : 'Poor'} liquidity position</li>
                <li>Quick Ratio: {quickRatio >= 1 ? 'Strong' : 'Weak'} ability to meet short-term obligations</li>
                <li>Working Capital: {formatCurrency(workingCapital)} available for operations</li>
              </ul>
            </div>
            <div>
              <strong>Leverage Analysis:</strong>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Debt-to-Equity: {debtToEquityRatio <= 1 ? 'Conservative' : debtToEquityRatio <= 2 ? 'Moderate' : 'High'} leverage</li>
                <li>Equity Ratio: {(equityRatio * 100).toFixed(1)}% of assets financed by equity</li>
                <li>Asset Structure: {((statementData.assets.currentAssets.totalCurrentAssets / statementData.assets.totalAssets) * 100).toFixed(1)}% current assets</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}