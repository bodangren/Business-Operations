'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, FileText, Download, Calculator, Eye } from 'lucide-react'
import { useState } from 'react'

interface DetailedIncomeStatementData {
  period: string
  revenues: {
    productSales: number
    serviceSales: number
    otherRevenues: number
    totalRevenue: number
  }
  costOfGoodsSold: {
    beginningInventory: number
    purchases: number
    directLabor: number
    manufacturingOverhead: number
    goodsAvailableForSale: number
    endingInventory: number
    totalCOGS: number
  }
  grossProfit: number
  operatingExpenses: {
    selling: {
      advertising: number
      salesCommissions: number  
      deliveryExpense: number
      totalSelling: number
    }
    administrative: {
      salaries: number
      rent: number
      utilities: number
      insurance: number
      depreciation: number
      totalAdministrative: number
    }
    totalOperating: number
  }
  operatingIncome: number
  nonOperating: {
    interestIncome: number
    dividendIncome: number
    gainOnSaleOfAssets: number
    totalOtherIncome: number
    interestExpense: number
    totalNonOperating: number
  }
  incomeBeforeTaxes: number
  incomeTaxes: {
    currentTax: number
    deferredTax: number
    totalTaxes: number
  }
  netIncome: number
}

interface IncomeStatementDetailedProps {
  data?: DetailedIncomeStatementData
  title?: string
  showCalculations?: boolean
  showComparatives?: boolean
  className?: string
}

export function IncomeStatementDetailed({ 
  data,
  title = "Detailed Income Statement",
  showCalculations = false,
  showComparatives = false,
  className = ""
}: IncomeStatementDetailedProps) {
  
  const [showBreakdown, setShowBreakdown] = useState(false)

  const defaultData: DetailedIncomeStatementData = {
    period: "For the Year Ended December 31, 2024",
    revenues: {
      productSales: 180000,
      serviceSales: 65000,
      otherRevenues: 5000,
      totalRevenue: 250000
    },
    costOfGoodsSold: {
      beginningInventory: 25000,
      purchases: 120000,
      directLabor: 45000,
      manufacturingOverhead: 18000,
      goodsAvailableForSale: 208000,
      endingInventory: 35000,
      totalCOGS: 173000
    },
    grossProfit: 77000,
    operatingExpenses: {
      selling: {
        advertising: 12000,
        salesCommissions: 8000,
        deliveryExpense: 3000,
        totalSelling: 23000
      },
      administrative: {
        salaries: 35000,
        rent: 18000,
        utilities: 4500,
        insurance: 3500,
        depreciation: 8000,
        totalAdministrative: 69000
      },
      totalOperating: 92000
    },
    operatingIncome: -15000,
    nonOperating: {
      interestIncome: 1200,
      dividendIncome: 800,
      gainOnSaleOfAssets: 2000,
      totalOtherIncome: 4000,
      interestExpense: 3500,
      totalNonOperating: 500
    },
    incomeBeforeTaxes: -14500,
    incomeTaxes: {
      currentTax: 0,
      deferredTax: -2175,
      totalTaxes: -2175
    },
    netIncome: -12325
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

  const getProfitabilityBadge = (netIncome: number) => {
    if (netIncome > 0) {
      return <Badge variant="default" className="bg-green-100 text-green-800 border-green-300">
        <TrendingUp className="w-3 h-3 mr-1" />
        Profitable
      </Badge>
    } else {
      return <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-300">
        <TrendingDown className="w-3 h-3 mr-1" />
        Loss
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

  return (
    <Card className={`max-w-4xl mx-auto ${className}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {title}
            </CardTitle>
            <CardDescription className="text-lg mt-1">
              {statementData.period}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {getProfitabilityBadge(statementData.netIncome)}
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowBreakdown(!showBreakdown)}
            >
              <Eye className="w-4 h-4 mr-1" />
              {showBreakdown ? 'Hide' : 'Show'} Details
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-1">
        <div className="bg-gray-50 p-6 rounded-lg">
          {/* Revenue Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">REVENUES</h3>
            <LineItem label="Product Sales" amount={statementData.revenues.productSales} indent={1} />
            <LineItem label="Service Sales" amount={statementData.revenues.serviceSales} indent={1} />
            <LineItem label="Other Revenues" amount={statementData.revenues.otherRevenues} indent={1} />
            <LineItem label="Total Revenue" amount={statementData.revenues.totalRevenue} isSubtotal />
          </div>

          {/* Cost of Goods Sold Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">COST OF GOODS SOLD</h3>
            {showBreakdown && (
              <>
                <LineItem label="Beginning Inventory" amount={statementData.costOfGoodsSold.beginningInventory} indent={1} />
                <LineItem label="Purchases" amount={statementData.costOfGoodsSold.purchases} indent={1} />
                <LineItem label="Direct Labor" amount={statementData.costOfGoodsSold.directLabor} indent={1} />
                <LineItem label="Manufacturing Overhead" amount={statementData.costOfGoodsSold.manufacturingOverhead} indent={1} />
                <LineItem label="Goods Available for Sale" amount={statementData.costOfGoodsSold.goodsAvailableForSale} indent={1} isSubtotal />
                <LineItem label="Less: Ending Inventory" amount={statementData.costOfGoodsSold.endingInventory} indent={1} negative />
              </>
            )}
            <LineItem label="Total Cost of Goods Sold" amount={statementData.costOfGoodsSold.totalCOGS} isSubtotal negative />
            <LineItem label="GROSS PROFIT" amount={statementData.grossProfit} isSubtotal />
          </div>

          {/* Operating Expenses Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">OPERATING EXPENSES</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Selling Expenses:</h4>
              <LineItem label="Advertising" amount={statementData.operatingExpenses.selling.advertising} indent={2} />
              <LineItem label="Sales Commissions" amount={statementData.operatingExpenses.selling.salesCommissions} indent={2} />
              <LineItem label="Delivery Expense" amount={statementData.operatingExpenses.selling.deliveryExpense} indent={2} />
              <LineItem label="Total Selling Expenses" amount={statementData.operatingExpenses.selling.totalSelling} indent={1} isSubtotal />
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Administrative Expenses:</h4>
              <LineItem label="Salaries & Benefits" amount={statementData.operatingExpenses.administrative.salaries} indent={2} />
              <LineItem label="Rent" amount={statementData.operatingExpenses.administrative.rent} indent={2} />
              <LineItem label="Utilities" amount={statementData.operatingExpenses.administrative.utilities} indent={2} />
              <LineItem label="Insurance" amount={statementData.operatingExpenses.administrative.insurance} indent={2} />
              <LineItem label="Depreciation" amount={statementData.operatingExpenses.administrative.depreciation} indent={2} />
              <LineItem label="Total Administrative Expenses" amount={statementData.operatingExpenses.administrative.totalAdministrative} indent={1} isSubtotal />
            </div>

            <LineItem label="Total Operating Expenses" amount={statementData.operatingExpenses.totalOperating} isSubtotal negative />
            <LineItem label="OPERATING INCOME (LOSS)" amount={statementData.operatingIncome} isSubtotal />
          </div>

          {/* Non-Operating Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">OTHER INCOME (EXPENSE)</h3>
            <LineItem label="Interest Income" amount={statementData.nonOperating.interestIncome} indent={1} />
            <LineItem label="Dividend Income" amount={statementData.nonOperating.dividendIncome} indent={1} />
            <LineItem label="Gain on Sale of Assets" amount={statementData.nonOperating.gainOnSaleOfAssets} indent={1} />
            <LineItem label="Total Other Income" amount={statementData.nonOperating.totalOtherIncome} indent={1} isSubtotal />
            <LineItem label="Interest Expense" amount={statementData.nonOperating.interestExpense} indent={1} negative />
            <LineItem label="Net Non-Operating Income" amount={statementData.nonOperating.totalNonOperating} isSubtotal />
            <LineItem label="INCOME (LOSS) BEFORE TAXES" amount={statementData.incomeBeforeTaxes} isSubtotal />
          </div>

          {/* Tax Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">INCOME TAXES</h3>
            {showBreakdown && (
              <>
                <LineItem label="Current Tax Expense" amount={statementData.incomeTaxes.currentTax} indent={1} />
                <LineItem label="Deferred Tax Benefit" amount={statementData.incomeTaxes.deferredTax} indent={1} />
              </>
            )}
            <LineItem label="Total Income Tax Expense (Benefit)" amount={statementData.incomeTaxes.totalTaxes} isSubtotal negative />
          </div>

          <LineItem label="NET INCOME (LOSS)" amount={statementData.netIncome} isTotal />
        </div>

        {showCalculations && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Key Formulas:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>• Gross Profit = Total Revenue - Cost of Goods Sold</div>
              <div>• Operating Income = Gross Profit - Operating Expenses</div>
              <div>• Income Before Taxes = Operating Income + Non-Operating Income</div>
              <div>• Net Income = Income Before Taxes - Income Taxes</div>
              <div>• Gross Margin = (Gross Profit / Revenue) × 100</div>
              <div>• Operating Margin = (Operating Income / Revenue) × 100</div>
            </div>
          </div>
        )}

        {/* Key Ratios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4 bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">
              {((statementData.grossProfit / statementData.revenues.totalRevenue) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Gross Margin</div>
          </div>
          <div className="text-center">  
            <div className="text-xl font-bold text-blue-600">
              {((statementData.operatingIncome / statementData.revenues.totalRevenue) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Operating Margin</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-purple-600">
              {((statementData.netIncome / statementData.revenues.totalRevenue) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Net Margin</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-orange-600">
              {((statementData.operatingExpenses.totalOperating / statementData.revenues.totalRevenue) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Expense Ratio</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default IncomeStatementDetailed
