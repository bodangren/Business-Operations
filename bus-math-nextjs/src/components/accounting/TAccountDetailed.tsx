'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Eye, EyeOff, Calculator, Info } from 'lucide-react'

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  reference?: string
  journalEntry?: string
  category?: string
}

interface TAccountDetailedProps {
  accountName: string
  accountType: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
  accountNumber?: string
  debits: Transaction[]
  credits: Transaction[]
  beginningBalance?: number
  showBalance?: boolean
  showFormulas?: boolean
  showJournalReferences?: boolean
  showRunningBalance?: boolean
  interactive?: boolean
  className?: string
  title?: string
}

export function TAccountDetailed({ 
  accountName, 
  accountType, 
  accountNumber,
  debits = [], 
  credits = [],
  beginningBalance = 0,
  showBalance = true,
  showFormulas = false,
  showJournalReferences = true,
  showRunningBalance = false,
  interactive = true,
  className,
  title
}: TAccountDetailedProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [showCalculations, setShowCalculations] = useState(showFormulas)

  const totalDebits = debits.reduce((sum, transaction) => sum + transaction.amount, 0)
  const totalCredits = credits.reduce((sum, transaction) => sum + transaction.amount, 0)
  
  // Determine normal balance side based on account type
  const normalBalanceSide = ['asset', 'expense'].includes(accountType) ? 'debit' : 'credit'
  const endingBalance = normalBalanceSide === 'debit' 
    ? beginningBalance + totalDebits - totalCredits 
    : beginningBalance + totalCredits - totalDebits
  
  const getAccountTypeColor = (type: string) => {
    const colors = {
      asset: 'bg-blue-100 text-blue-800 border-blue-200',
      liability: 'bg-red-100 text-red-800 border-red-200',
      equity: 'bg-purple-100 text-purple-800 border-purple-200',
      revenue: 'bg-green-100 text-green-800 border-green-200',
      expense: 'bg-orange-100 text-orange-800 border-orange-200'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      'operating': 'bg-green-100 text-green-700',
      'investing': 'bg-blue-100 text-blue-700',
      'financing': 'bg-purple-100 text-purple-700',
      'adjustment': 'bg-yellow-100 text-yellow-700',
      'closing': 'bg-gray-100 text-gray-700'
    }
    return category ? colors[category] || 'bg-gray-50 text-gray-600' : 'bg-gray-50 text-gray-600'
  }

  // Calculate running balance for display
  const getRunningBalance = (transactions: Transaction[], isDebitSide: boolean, index: number) => {
    let runningBalance = beginningBalance
    const allTransactions = [...debits, ...credits].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    
    for (let i = 0; i <= index; i++) {
      const transaction = allTransactions[i]
      if (debits.includes(transaction)) {
        runningBalance += normalBalanceSide === 'debit' ? transaction.amount : -transaction.amount
      } else {
        runningBalance += normalBalanceSide === 'credit' ? transaction.amount : -transaction.amount
      }
    }
    return runningBalance
  }

  return (
    <Card className={cn("w-full max-w-4xl", className)}>
      {title && (
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            {interactive && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  {showDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCalculations(!showCalculations)}
                >
                  <Calculator className="h-4 w-4" />
                  Formulas
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6">
        {/* Account Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-800">{accountName}</h3>
            {accountNumber && (
              <Badge variant="outline" className="text-xs">
                #{accountNumber}
              </Badge>
            )}
          </div>
          <Badge className={getAccountTypeColor(accountType)}>
            {accountType.charAt(0).toUpperCase() + accountType.slice(1)} Account
          </Badge>
          {beginningBalance !== 0 && (
            <div className="mt-2 text-sm text-gray-600">
              Beginning Balance: ${beginningBalance.toLocaleString()}
            </div>
          )}
        </div>

        {/* T-Account Structure */}
        <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-2 border-b-2 border-gray-800">
            <div className="bg-blue-50 p-3 text-center font-semibold text-blue-800 border-r-2 border-gray-800">
              Debits {normalBalanceSide === 'debit' && <span className="text-xs">(+)</span>}
            </div>
            <div className="bg-red-50 p-3 text-center font-semibold text-red-800">
              Credits {normalBalanceSide === 'credit' && <span className="text-xs">(+)</span>}
            </div>
          </div>

          {/* Beginning Balance Row */}
          {beginningBalance !== 0 && (
            <div className="grid grid-cols-2 border-b border-gray-300">
              {normalBalanceSide === 'debit' ? (
                <>
                  <div className="border-r-2 border-gray-800 p-3 bg-blue-25">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Beginning Balance</span>
                      <span className="font-mono text-sm font-semibold">
                        ${beginningBalance.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="p-3"></div>
                </>
              ) : (
                <>
                  <div className="border-r-2 border-gray-800 p-3"></div>
                  <div className="p-3 bg-red-25">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Beginning Balance</span>
                      <span className="font-mono text-sm font-semibold">
                        ${beginningBalance.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Transaction Rows */}
          <div className="grid grid-cols-2 min-h-[300px]">
            {/* Debit Side */}
            <div className="border-r-2 border-gray-800 p-4">
              <div className="space-y-3">
                {debits.map((transaction, index) => (
                  <div key={transaction.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">
                          {transaction.description}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {transaction.date}
                          {showJournalReferences && transaction.reference && ` • ${transaction.reference}`}
                        </div>
                        {showDetails && transaction.category && (
                          <Badge className={cn("text-xs mt-1", getCategoryColor(transaction.category))}>
                            {transaction.category}
                          </Badge>
                        )}
                        {showDetails && transaction.journalEntry && (
                          <div className="text-xs text-blue-600 mt-1">
                            JE: {transaction.journalEntry}
                          </div>
                        )}
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-mono text-sm font-semibold">
                          ${transaction.amount.toLocaleString()}
                        </div>
                        {showRunningBalance && (
                          <div className="text-xs text-gray-500 mt-1">
                            Bal: ${getRunningBalance(debits, true, index).toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {debits.length === 0 && (
                  <div className="text-gray-400 text-center py-12">
                    No debit transactions
                  </div>
                )}
              </div>
            </div>

            {/* Credit Side */}
            <div className="p-4">
              <div className="space-y-3">
                {credits.map((transaction, index) => (
                  <div key={transaction.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">
                          {transaction.description}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {transaction.date}
                          {showJournalReferences && transaction.reference && ` • ${transaction.reference}`}
                        </div>
                        {showDetails && transaction.category && (
                          <Badge className={cn("text-xs mt-1", getCategoryColor(transaction.category))}>
                            {transaction.category}
                          </Badge>
                        )}
                        {showDetails && transaction.journalEntry && (
                          <div className="text-xs text-blue-600 mt-1">
                            JE: {transaction.journalEntry}
                          </div>
                        )}
                      </div>
                      <div className="text-right ml-2">
                        <div className="font-mono text-sm font-semibold">
                          ${transaction.amount.toLocaleString()}
                        </div>
                        {showRunningBalance && (
                          <div className="text-xs text-gray-500 mt-1">
                            Bal: ${getRunningBalance(credits, false, index).toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {credits.length === 0 && (
                  <div className="text-gray-400 text-center py-12">
                    No credit transactions
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Totals Row */}
          {(debits.length > 0 || credits.length > 0) && (
            <div className="grid grid-cols-2 border-t-2 border-gray-800 bg-gray-50">
              <div className="border-r-2 border-gray-800 p-3">
                <div className="flex justify-between font-semibold">
                  <span>Total Debits:</span>
                  <span className="font-mono">${totalDebits.toLocaleString()}</span>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between font-semibold">
                  <span>Total Credits:</span>
                  <span className="font-mono">${totalCredits.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Balance Row */}
          {showBalance && (
            <div className="border-t border-gray-400 bg-gray-100">
              <div className="p-3 text-center">
                <div className="font-semibold text-lg">
                  Ending Balance: 
                  <span className={cn(
                    "ml-2 font-mono",
                    endingBalance >= 0 ? "text-green-600" : "text-red-600"
                  )}>
                    ${Math.abs(endingBalance).toLocaleString()}
                    {endingBalance < 0 && " (Abnormal Balance)"}
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Normal balance side: {normalBalanceSide.charAt(0).toUpperCase() + normalBalanceSide.slice(1)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Account Summary */}
        {showDetails && (debits.length > 0 || credits.length > 0) && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="font-semibold text-blue-800">Transaction Count</div>
              <div className="text-blue-700">
                {debits.length} Debits • {credits.length} Credits
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="font-semibold text-green-800">Activity Period</div>
              <div className="text-green-700">
                {debits.length > 0 || credits.length > 0 ? (
                  `${Math.min(...[...debits, ...credits].map(t => new Date(t.date).getTime()))} - ${Math.max(...[...debits, ...credits].map(t => new Date(t.date).getTime()))}`
                ) : 'No transactions'}
              </div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <div className="font-semibold text-purple-800">Net Activity</div>
              <div className="text-purple-700">
                ${Math.abs(endingBalance - beginningBalance).toLocaleString()}
              </div>
            </div>
          </div>
        )}

        {/* Formula Explanation */}
        {showCalculations && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-4 w-4 text-blue-600" />
              <h4 className="font-semibold text-blue-800">Balance Calculation:</h4>
            </div>
            <div className="text-sm text-blue-700 space-y-1">
              {normalBalanceSide === 'debit' ? (
                <>
                  <div>• Asset/Expense accounts have normal DEBIT balances</div>
                  <div>• Ending Balance = Beginning Balance + Total Debits - Total Credits</div>
                  <div>• ${beginningBalance.toLocaleString()} + ${totalDebits.toLocaleString()} - ${totalCredits.toLocaleString()} = ${endingBalance.toLocaleString()}</div>
                </>
              ) : (
                <>
                  <div>• Liability/Equity/Revenue accounts have normal CREDIT balances</div>
                  <div>• Ending Balance = Beginning Balance + Total Credits - Total Debits</div>
                  <div>• ${beginningBalance.toLocaleString()} + ${totalCredits.toLocaleString()} - ${totalDebits.toLocaleString()} = ${endingBalance.toLocaleString()}</div>
                </>
              )}
              {endingBalance < 0 && (
                <div className="text-red-600 font-medium">
                  ⚠️ This account shows an abnormal balance (negative for {normalBalanceSide} accounts)
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TAccountDetailed