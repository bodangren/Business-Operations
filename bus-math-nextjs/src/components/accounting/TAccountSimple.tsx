'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  reference?: string
}

interface TAccountSimpleProps {
  accountName: string
  accountType: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
  debits: Transaction[]
  credits: Transaction[]
  showBalance?: boolean
  showFormulas?: boolean
  className?: string
  title?: string
}

export function TAccountSimple({ 
  accountName, 
  accountType, 
  debits = [], 
  credits = [],
  showBalance = true,
  showFormulas = false,
  className,
  title
}: TAccountSimpleProps) {
  const totalDebits = debits.reduce((sum, transaction) => sum + transaction.amount, 0)
  const totalCredits = credits.reduce((sum, transaction) => sum + transaction.amount, 0)
  
  // Determine normal balance side based on account type
  const normalBalanceSide = ['asset', 'expense'].includes(accountType) ? 'debit' : 'credit'
  const balance = normalBalanceSide === 'debit' ? totalDebits - totalCredits : totalCredits - totalDebits
  
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

  return (
    <Card className={cn("w-full max-w-2xl", className)}>
      {title && (
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-center">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-6">
        {/* Account Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{accountName}</h3>
          <Badge className={getAccountTypeColor(accountType)}>
            {accountType.charAt(0).toUpperCase() + accountType.slice(1)} Account
          </Badge>
        </div>

        {/* T-Account Structure */}
        <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-2 border-b-2 border-gray-800">
            <div className="bg-blue-50 p-3 text-center font-semibold text-blue-800 border-r-2 border-gray-800">
              Debits
            </div>
            <div className="bg-red-50 p-3 text-center font-semibold text-red-800">
              Credits
            </div>
          </div>

          {/* Transaction Rows */}
          <div className="grid grid-cols-2 min-h-[200px]">
            {/* Debit Side */}
            <div className="border-r-2 border-gray-800 p-4">
              <div className="space-y-3">
                {debits.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">
                        {transaction.description}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.date}
                        {transaction.reference && ` • ${transaction.reference}`}
                      </div>
                    </div>
                    <div className="text-right font-mono text-sm ml-2">
                      ${transaction.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
                {debits.length === 0 && (
                  <div className="text-gray-400 text-center py-8">
                    No debit transactions
                  </div>
                )}
              </div>
            </div>

            {/* Credit Side */}
            <div className="p-4">
              <div className="space-y-3">
                {credits.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">
                        {transaction.description}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.date}
                        {transaction.reference && ` • ${transaction.reference}`}
                      </div>
                    </div>
                    <div className="text-right font-mono text-sm ml-2">
                      ${transaction.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
                {credits.length === 0 && (
                  <div className="text-gray-400 text-center py-8">
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
          {showBalance && (debits.length > 0 || credits.length > 0) && (
            <div className="border-t border-gray-400 bg-gray-100">
              <div className="p-3 text-center">
                <div className="font-semibold text-lg">
                  Account Balance: 
                  <span className={cn(
                    "ml-2 font-mono",
                    balance >= 0 ? "text-green-600" : "text-red-600"
                  )}>
                    ${Math.abs(balance).toLocaleString()}
                    {balance < 0 && " (Credit Balance)"}
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Normal balance side: {normalBalanceSide.charAt(0).toUpperCase() + normalBalanceSide.slice(1)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Formula Explanation */}
        {showFormulas && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Balance Calculation:</h4>
            <div className="text-sm text-blue-700 space-y-1">
              {normalBalanceSide === 'debit' ? (
                <>
                  <div>• Asset/Expense accounts have normal DEBIT balances</div>
                  <div>• Balance = Total Debits - Total Credits</div>
                  <div>• ${totalDebits.toLocaleString()} - ${totalCredits.toLocaleString()} = ${balance.toLocaleString()}</div>
                </>
              ) : (
                <>
                  <div>• Liability/Equity/Revenue accounts have normal CREDIT balances</div>
                  <div>• Balance = Total Credits - Total Debits</div>
                  <div>• ${totalCredits.toLocaleString()} - ${totalDebits.toLocaleString()} = ${balance.toLocaleString()}</div>
                </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TAccountSimple