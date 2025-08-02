'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  reference?: string
}

interface TAccount {
  id: string
  name: string
  type: 'asset' | 'liability' | 'equity'
  debits: Transaction[]
  credits: Transaction[]
}

interface TAccountsVisualizationProps {
  accounts?: TAccount[]
  showAccountingEquation?: boolean
  showBalances?: boolean
  interactive?: boolean
  className?: string
  title?: string
}

const defaultAccounts: TAccount[] = [
  {
    id: 'cash',
    name: 'Cash',
    type: 'asset',
    debits: [
      { id: '1', date: '2024-01-01', description: 'Initial Investment', amount: 50000 },
      { id: '2', date: '2024-01-05', description: 'Cash Sale', amount: 5000 },
    ],
    credits: [
      { id: '3', date: '2024-01-03', description: 'Equipment Purchase', amount: 15000 },
      { id: '4', date: '2024-01-07', description: 'Rent Payment', amount: 2000 },
    ]
  },
  {
    id: 'equipment',
    name: 'Equipment',
    type: 'asset',
    debits: [
      { id: '5', date: '2024-01-03', description: 'Office Equipment', amount: 15000 },
    ],
    credits: []
  },
  {
    id: 'accounts-payable',
    name: 'Accounts Payable',
    type: 'liability',
    debits: [],
    credits: [
      { id: '6', date: '2024-01-04', description: 'Supplier Invoice', amount: 3000 },
    ]
  },
  {
    id: 'common-stock',
    name: 'Common Stock',
    type: 'equity',
    debits: [],
    credits: [
      { id: '7', date: '2024-01-01', description: 'Stock Issuance', amount: 50000 },
    ]
  }
]

export function TAccountsVisualization({
  accounts = defaultAccounts,
  showAccountingEquation = true,
  showBalances = true,
  interactive = false,
  className,
  title = "T-Accounts Visualization"
}: TAccountsVisualizationProps) {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null)
  const [highlightEquation, setHighlightEquation] = useState(false)

  // Calculate totals for accounting equation
  const { totalAssets, totalLiabilities, totalEquity } = useMemo(() => {
    const assets = accounts.filter(acc => acc.type === 'asset')
    const liabilities = accounts.filter(acc => acc.type === 'liability')
    const equity = accounts.filter(acc => acc.type === 'equity')

    const calculateBalance = (account: TAccount) => {
      const totalDebits = account.debits.reduce((sum, t) => sum + t.amount, 0)
      const totalCredits = account.credits.reduce((sum, t) => sum + t.amount, 0)
      
      if (account.type === 'asset') {
        return totalDebits - totalCredits
      } else {
        return totalCredits - totalDebits
      }
    }

    return {
      totalAssets: assets.reduce((sum, acc) => sum + calculateBalance(acc), 0),
      totalLiabilities: liabilities.reduce((sum, acc) => sum + calculateBalance(acc), 0),
      totalEquity: equity.reduce((sum, acc) => sum + calculateBalance(acc), 0)
    }
  }, [accounts])

  const getAccountTypeColor = (type: string) => {
    const colors = {
      asset: 'bg-blue-100 text-blue-800 border-blue-200',
      liability: 'bg-red-100 text-red-800 border-red-200',
      equity: 'bg-purple-100 text-purple-800 border-purple-200'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const renderTAccount = (account: TAccount) => {
    const totalDebits = account.debits.reduce((sum, t) => sum + t.amount, 0)
    const totalCredits = account.credits.reduce((sum, t) => sum + t.amount, 0)
    const balance = account.type === 'asset' ? totalDebits - totalCredits : totalCredits - totalDebits
    const isSelected = selectedAccount === account.id

    return (
      <Card 
        key={account.id}
        className={cn(
          "transition-all duration-200",
          isSelected && "ring-2 ring-blue-500 shadow-lg",
          interactive && "cursor-pointer hover:shadow-md"
        )}
        onClick={() => interactive && setSelectedAccount(isSelected ? null : account.id)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">{account.name}</CardTitle>
            <Badge className={getAccountTypeColor(account.type)}>
              {account.type.charAt(0).toUpperCase() + account.type.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          {/* T-Account Structure */}
          <div className="border-2 border-gray-700 rounded-md overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 border-b-2 border-gray-700">
              <div className="bg-blue-50 p-2 text-center text-sm font-medium text-blue-800 border-r-2 border-gray-700">
                Debits
              </div>
              <div className="bg-red-50 p-2 text-center text-sm font-medium text-red-800">
                Credits
              </div>
            </div>

            {/* Transactions */}
            <div className="grid grid-cols-2 min-h-[120px]">
              {/* Debit Side */}
              <div className="border-r-2 border-gray-700 p-2">
                <div className="space-y-1">
                  {account.debits.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between text-xs">
                      <span className="truncate flex-1 mr-1">{transaction.description}</span>
                      <span className="font-mono">${transaction.amount.toLocaleString()}</span>
                    </div>
                  ))}
                  {account.debits.length === 0 && (
                    <div className="text-gray-400 text-center py-4 text-xs">
                      No debits
                    </div>
                  )}
                </div>
              </div>

              {/* Credit Side */}
              <div className="p-2">
                <div className="space-y-1">
                  {account.credits.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between text-xs">
                      <span className="truncate flex-1 mr-1">{transaction.description}</span>
                      <span className="font-mono">${transaction.amount.toLocaleString()}</span>
                    </div>
                  ))}
                  {account.credits.length === 0 && (
                    <div className="text-gray-400 text-center py-4 text-xs">
                      No credits
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Totals */}
            {(account.debits.length > 0 || account.credits.length > 0) && (
              <div className="grid grid-cols-2 border-t border-gray-400 bg-gray-50">
                <div className="border-r border-gray-400 p-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Total:</span>
                    <span className="font-mono">${totalDebits.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Total:</span>
                    <span className="font-mono">${totalCredits.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Balance */}
            {showBalances && (account.debits.length > 0 || account.credits.length > 0) && (
              <div className="border-t border-gray-400 bg-gray-100 p-2">
                <div className="text-center text-xs font-medium">
                  Balance: 
                  <span className={cn(
                    "ml-1 font-mono",
                    balance >= 0 ? "text-green-600" : "text-red-600"
                  )}>
                    ${Math.abs(balance).toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  const assetAccounts = accounts.filter(acc => acc.type === 'asset')
  const liabilityAccounts = accounts.filter(acc => acc.type === 'liability')
  const equityAccounts = accounts.filter(acc => acc.type === 'equity')

  const isEquationBalanced = Math.abs(totalAssets - (totalLiabilities + totalEquity)) < 0.01

  return (
    <div className={cn("w-full space-y-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          {interactive && (
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setHighlightEquation(!highlightEquation)}
              >
                {highlightEquation ? 'Hide' : 'Show'} Equation
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent>
          {/* Accounting Equation */}
          {showAccountingEquation && (
            <Card className={cn(
              "mb-6 transition-all duration-300",
              highlightEquation && "ring-2 ring-yellow-400 shadow-lg",
              !isEquationBalanced && "bg-red-50 border-red-200"
            )}>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-center mb-4">
                  Accounting Equation
                </h3>
                <div className="flex items-center justify-center text-lg font-mono">
                  <div className="text-center">
                    <div className="text-blue-600 font-bold">ASSETS</div>
                    <div className="text-2xl">${totalAssets.toLocaleString()}</div>
                  </div>
                  <div className="mx-6 text-2xl font-bold">=</div>
                  <div className="text-center">
                    <div className="text-red-600 font-bold">LIABILITIES</div>
                    <div className="text-2xl">${totalLiabilities.toLocaleString()}</div>
                  </div>
                  <div className="mx-4 text-xl">+</div>
                  <div className="text-center">
                    <div className="text-purple-600 font-bold">EQUITY</div>
                    <div className="text-2xl">${totalEquity.toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Badge 
                    className={cn(
                      isEquationBalanced 
                        ? "bg-green-100 text-green-800 border-green-200" 
                        : "bg-red-100 text-red-800 border-red-200"
                    )}
                  >
                    {isEquationBalanced ? '✓ BALANCED' : '⚠ NOT BALANCED'}
                  </Badge>
                  <div className="text-xs text-gray-600 mt-1">
                    Difference: ${Math.abs(totalAssets - (totalLiabilities + totalEquity)).toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* T-Accounts Grid */}
          <div className="space-y-6">
            {/* Assets Section */}
            {assetAccounts.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded mr-2"></span>
                  Assets
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {assetAccounts.map(renderTAccount)}
                </div>
              </div>
            )}

            {/* Liabilities Section */}
            {liabilityAccounts.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded mr-2"></span>
                  Liabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {liabilityAccounts.map(renderTAccount)}
                </div>
              </div>
            )}

            {/* Equity Section */}
            {equityAccounts.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-3 flex items-center">
                  <span className="w-4 h-4 bg-purple-600 rounded mr-2"></span>
                  Equity
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {equityAccounts.map(renderTAccount)}
                </div>
              </div>
            )}
          </div>

          {/* Selected Account Details */}
          {interactive && selectedAccount && (
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Selected Account: {accounts.find(acc => acc.id === selectedAccount)?.name}
                </h4>
                <div className="text-sm text-blue-700">
                  Click on other accounts to compare or click the selected account again to deselect.
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}