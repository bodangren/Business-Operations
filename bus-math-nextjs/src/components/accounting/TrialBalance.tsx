'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Calculator, Info, Check, AlertTriangle, Eye, EyeOff } from 'lucide-react'

interface TrialBalanceAccount {
  id: string
  accountNumber?: string
  accountName: string
  accountType: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
  normalBalance: 'debit' | 'credit'
  debitBalance?: number
  creditBalance?: number
}

interface TrialBalanceProps {
  companyName: string
  periodEnding: string
  accounts: TrialBalanceAccount[]
  showAccountNumbers?: boolean
  showAccountTypes?: boolean
  showValidation?: boolean
  showSummary?: boolean
  groupByType?: boolean
  interactive?: boolean
  className?: string
  title?: string
}

export function TrialBalance({ 
  companyName,
  periodEnding,
  accounts = [],
  showAccountNumbers = true,
  showAccountTypes = false,
  showValidation = true,
  showSummary = true,
  groupByType = false,
  interactive = true,
  className,
  title
}: TrialBalanceProps) {
  const [showDetails, setShowDetails] = useState(showSummary)
  const [groupedView, setGroupedView] = useState(groupByType)

  const totalDebits = accounts.reduce((sum, account) => sum + (account.debitBalance || 0), 0)
  const totalCredits = accounts.reduce((sum, account) => sum + (account.creditBalance || 0), 0)
  const isBalanced = Math.abs(totalDebits - totalCredits) < 0.01

  const getAccountTypeColor = (type: string) => {
    const colors = {
      asset: 'bg-blue-100 text-blue-700 border-blue-200',
      liability: 'bg-red-100 text-red-700 border-red-200',
      equity: 'bg-purple-100 text-purple-700 border-purple-200',
      revenue: 'bg-green-100 text-green-700 border-green-200',
      expense: 'bg-orange-100 text-orange-700 border-orange-200'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  const groupAccountsByType = (accounts: TrialBalanceAccount[]) => {
    const grouped = accounts.reduce((acc, account) => {
      if (!acc[account.accountType]) {
        acc[account.accountType] = []
      }
      acc[account.accountType].push(account)
      return acc
    }, {} as Record<string, TrialBalanceAccount[]>)

    // Sort groups in financial statement order
    const order = ['asset', 'liability', 'equity', 'revenue', 'expense']
    return order.map(type => ({
      type,
      accounts: grouped[type] || []
    })).filter(group => group.accounts.length > 0)
  }

  const getTypeTotal = (accounts: TrialBalanceAccount[], side: 'debit' | 'credit') => {
    return accounts.reduce((sum, account) => {
      return sum + (side === 'debit' ? (account.debitBalance || 0) : (account.creditBalance || 0))
    }, 0)
  }

  const sortedAccounts = [...accounts].sort((a, b) => {
    if (showAccountNumbers && a.accountNumber && b.accountNumber) {
      return a.accountNumber.localeCompare(b.accountNumber)
    }
    return a.accountName.localeCompare(b.accountName)
  })

  const accountGroups = groupedView ? groupAccountsByType(sortedAccounts) : [{ type: 'all', accounts: sortedAccounts }]

  return (
    <Card className={cn("w-full max-w-5xl", className)}>
      {title && (
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            {interactive && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setGroupedView(!groupedView)}
                >
                  {groupedView ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  {groupedView ? 'List View' : 'Group View'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  <Info className="h-4 w-4" />
                  {showDetails ? 'Hide' : 'Show'} Details
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6">
        {/* Trial Balance Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{companyName}</h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-1">Trial Balance</h3>
          <div className="text-lg text-gray-600 mt-1">As of {periodEnding}</div>
        </div>

        {/* Validation Status */}
        {showValidation && (
          <div className={cn(
            "p-3 rounded-lg border mb-6 text-center",
            isBalanced ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
          )}>
            <div className="flex items-center justify-center gap-2">
              {isBalanced ? (
                <>
                  <Check className="h-5 w-5" />
                  <span className="font-semibold">Trial Balance is balanced</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="h-5 w-5" />
                  <span className="font-semibold">
                    Trial Balance is out of balance by ${Math.abs(totalDebits - totalCredits).toLocaleString()}
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Trial Balance Table */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-100 border-b border-gray-300">
            <div className={cn(
              "grid gap-4 p-3 font-semibold text-gray-700",
              showAccountNumbers ? "grid-cols-8" : "grid-cols-6"
            )}>
              {showAccountNumbers && <div className="col-span-1 text-center">Account #</div>}
              <div className={showAccountNumbers ? "col-span-3" : "col-span-2"}>Account Name</div>
              {showAccountTypes && <div className="col-span-1 text-center">Type</div>}
              <div className="col-span-2 text-right">Debit Balance</div>
              <div className="col-span-2 text-right">Credit Balance</div>
            </div>
          </div>

          {/* Account Rows */}
          <div className="divide-y divide-gray-200">
            {accountGroups.map((group, groupIndex) => (
              <div key={group.type}>
                {/* Group Header (if grouped view) */}
                {groupedView && group.type !== 'all' && (
                  <div className="bg-gray-50 border-b border-gray-200">
                    <div className="p-3">
                      <div className="flex items-center gap-2">
                        <Badge className={getAccountTypeColor(group.type)}>
                          {group.type.charAt(0).toUpperCase() + group.type.slice(1)} Accounts
                        </Badge>
                        <span className="text-sm text-gray-600">
                          ({group.accounts.length} accounts)
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Account Rows */}
                {group.accounts.map((account, index) => (
                  <div key={account.id} className={cn(
                    "grid gap-4 p-3 hover:bg-gray-50",
                    showAccountNumbers ? "grid-cols-8" : "grid-cols-6"
                  )}>
                    {showAccountNumbers && (
                      <div className="col-span-1 text-center">
                        <div className="font-mono text-sm text-gray-600">
                          {account.accountNumber || '—'}
                        </div>
                      </div>
                    )}
                    <div className={showAccountNumbers ? "col-span-3" : "col-span-2"}>
                      <div className="font-medium text-gray-800">{account.accountName}</div>
                      {showAccountTypes && (
                        <Badge className={cn("text-xs mt-1", getAccountTypeColor(account.accountType))}>
                          {account.accountType}
                        </Badge>
                      )}
                    </div>
                    {showAccountTypes && !showAccountTypes && (
                      <div className="col-span-1 text-center">
                        <Badge className={cn("text-xs", getAccountTypeColor(account.accountType))}>
                          {account.accountType.charAt(0).toUpperCase()}
                        </Badge>
                      </div>
                    )}
                    <div className="col-span-2 text-right">
                      {account.debitBalance && account.debitBalance > 0 && (
                        <div className="font-mono font-semibold text-gray-800">
                          ${account.debitBalance.toLocaleString()}
                        </div>
                      )}
                    </div>
                    <div className="col-span-2 text-right">
                      {account.creditBalance && account.creditBalance > 0 && (
                        <div className="font-mono font-semibold text-gray-800">
                          ${account.creditBalance.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Group Subtotals (if grouped view) */}
                {groupedView && group.type !== 'all' && showDetails && (
                  <div className="bg-gray-50 border-t border-gray-200">
                    <div className={cn(
                      "grid gap-4 p-3 font-semibold text-gray-700",
                      showAccountNumbers ? "grid-cols-8" : "grid-cols-6"
                    )}>
                      {showAccountNumbers && <div className="col-span-1"></div>}
                      <div className={showAccountNumbers ? "col-span-3" : "col-span-2"}>
                        {group.type.charAt(0).toUpperCase() + group.type.slice(1)} Subtotal:
                      </div>
                      {showAccountTypes && <div className="col-span-1"></div>}
                      <div className="col-span-2 text-right">
                        <div className="font-mono">
                          ${getTypeTotal(group.accounts, 'debit').toLocaleString()}
                        </div>
                      </div>
                      <div className="col-span-2 text-right">
                        <div className="font-mono">
                          ${getTypeTotal(group.accounts, 'credit').toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Totals Row */}
          <div className="bg-gray-100 border-t-2 border-gray-800">
            <div className={cn(
              "grid gap-4 p-4 font-bold text-lg",
              showAccountNumbers ? "grid-cols-8" : "grid-cols-6"
            )}>
              {showAccountNumbers && <div className="col-span-1"></div>}
              <div className={showAccountNumbers ? "col-span-3" : "col-span-2"}>
                TOTALS:
              </div>
              {showAccountTypes && <div className="col-span-1"></div>}
              <div className="col-span-2 text-right">
                <div className={cn(
                  "font-mono",
                  isBalanced ? "text-gray-800" : "text-red-600"
                )}>
                  ${totalDebits.toLocaleString()}
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className={cn(
                  "font-mono",
                  isBalanced ? "text-gray-800" : "text-red-600"
                )}>
                  ${totalCredits.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary and Analysis */}
        {showDetails && (
          <div className="mt-6 space-y-4">
            {/* Balance Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">
                    {accounts.length}
                  </div>
                  <div className="text-sm text-blue-600">Total Accounts</div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">
                    ${Math.max(totalDebits, totalCredits).toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600">Total Activity</div>
                </div>
              </div>
              <div className={cn(
                "p-4 rounded-lg border text-center",
                isBalanced ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
              )}>
                <div className={cn(
                  "text-2xl font-bold",
                  isBalanced ? "text-green-800" : "text-red-800"
                )}>
                  ${Math.abs(totalDebits - totalCredits).toLocaleString()}
                </div>
                <div className={cn(
                  "text-sm",
                  isBalanced ? "text-green-600" : "text-red-600"
                )}>
                  {isBalanced ? "Perfect Balance" : "Out of Balance"}
                </div>
              </div>
            </div>

            {/* Account Type Breakdown */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Account Type Breakdown</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                {['asset', 'liability', 'equity', 'revenue', 'expense'].map(type => {
                  const typeAccounts = accounts.filter(acc => acc.accountType === type)
                  const typeDebits = typeAccounts.reduce((sum, acc) => sum + (acc.debitBalance || 0), 0)
                  const typeCredits = typeAccounts.reduce((sum, acc) => sum + (acc.creditBalance || 0), 0)
                  
                  return (
                    <div key={type} className="bg-white p-3 rounded border">
                      <div className="font-medium text-gray-800 capitalize mb-1">
                        {type === 'equity' ? 'Equity' : type === 'liability' ? 'Liabilities' : `${type.charAt(0).toUpperCase() + type.slice(1)}s`}
                      </div>
                      <div className="text-xs text-gray-600">
                        <div>{typeAccounts.length} accounts</div>
                        <div>Debits: ${typeDebits.toLocaleString()}</div>
                        <div>Credits: ${typeCredits.toLocaleString()}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Trial Balance Purpose */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-4 w-4 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Trial Balance Purpose</h4>
              </div>
              <div className="text-sm text-blue-700 space-y-1">
                <div>• Verifies that total debits equal total credits in the general ledger</div>
                <div>• Detects mathematical errors in posting journal entries</div>
                <div>• Provides a summary of all account balances at a specific date</div>
                <div>• Serves as the starting point for preparing financial statements</div>
                {!isBalanced && (
                  <div className="text-red-700 font-medium mt-2">
                    ⚠️ This trial balance is out of balance - review journal entries for errors
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}