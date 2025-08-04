'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Calculator, Info, Check, AlertTriangle } from 'lucide-react'

interface JournalEntryLine {
  id: string
  account: string
  accountType: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
  debit?: number
  credit?: number
  description?: string
}

interface JournalEntryProps {
  entryNumber: string
  date: string
  description: string
  lines: JournalEntryLine[]
  reference?: string
  showValidation?: boolean
  showExplanation?: boolean
  showAccountTypes?: boolean
  interactive?: boolean
  className?: string
  title?: string
}

export function JournalEntry({ 
  entryNumber,
  date,
  description,
  lines = [],
  reference,
  showValidation = true,
  showExplanation = false,
  showAccountTypes = true,
  interactive = true,
  className,
  title
}: JournalEntryProps) {
  const [showDetails, setShowDetails] = useState(showExplanation)

  const totalDebits = lines.reduce((sum, line) => sum + (line.debit || 0), 0)
  const totalCredits = lines.reduce((sum, line) => sum + (line.credit || 0), 0)
  const isBalanced = Math.abs(totalDebits - totalCredits) < 0.01 // Account for floating point precision

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

  const getAccountTypeSymbol = (type: string) => {
    const symbols = {
      asset: 'A',
      liability: 'L',
      equity: 'E',
      revenue: 'R',
      expense: 'X'
    }
    return symbols[type as keyof typeof symbols] || '?'
  }

  return (
    <Card className={cn("w-full max-w-4xl", className)}>
      {title && (
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            {interactive && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails(!showDetails)}
              >
                <Info className="h-4 w-4" />
                {showDetails ? 'Hide' : 'Show'} Details
              </Button>
            )}
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6">
        {/* Journal Entry Header */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Entry Number</div>
              <div className="text-lg font-semibold text-gray-800">#{entryNumber}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Date</div>
              <div className="text-lg font-semibold text-gray-800">{date}</div>
            </div>
            <div className="flex items-center gap-2">
              {showValidation && (
                isBalanced ? (
                  <div className="flex items-center gap-1 text-green-600">
                    <Check className="h-4 w-4" />
                    <span className="text-sm font-medium">Balanced</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-red-600">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-medium">Unbalanced</span>
                  </div>
                )
              )}
              {reference && (
                <Badge variant="outline" className="text-xs">
                  Ref: {reference}
                </Badge>
              )}
            </div>
          </div>
          <div className="mt-3">
            <div className="text-sm font-medium text-gray-500">Description</div>
            <div className="text-gray-800">{description}</div>
          </div>
        </div>

        {/* Journal Entry Table */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-100 border-b border-gray-300">
            <div className="grid grid-cols-12 gap-4 p-3 font-semibold text-gray-700">
              <div className="col-span-1 text-center">Type</div>
              <div className="col-span-4">Account</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-2 text-right">Debit</div>
              <div className="col-span-2 text-right">Credit</div>
            </div>
          </div>

          {/* Journal Entry Lines */}
          <div className="divide-y divide-gray-200">
            {lines.map((line, index) => (
              <div key={line.id} className="grid grid-cols-12 gap-4 p-3 hover:bg-gray-50">
                <div className="col-span-1 flex justify-center">
                  {showAccountTypes && (
                    <Badge className={cn("text-xs w-6 h-6 rounded-full flex items-center justify-center p-0", getAccountTypeColor(line.accountType))}>
                      {getAccountTypeSymbol(line.accountType)}
                    </Badge>
                  )}
                </div>
                <div className="col-span-4">
                  <div className="font-medium text-gray-800">{line.account}</div>
                  {showAccountTypes && (
                    <div className="text-xs text-gray-500 mt-1">
                      {line.accountType.charAt(0).toUpperCase() + line.accountType.slice(1)}
                    </div>
                  )}
                </div>
                <div className="col-span-3">
                  <div className="text-sm text-gray-600">
                    {line.description || description}
                  </div>
                </div>
                <div className="col-span-2 text-right">
                  {line.debit && (
                    <div className="font-mono font-semibold text-gray-800">
                      ${line.debit.toLocaleString()}
                    </div>
                  )}
                </div>
                <div className="col-span-2 text-right">
                  {line.credit && (
                    <div className="font-mono font-semibold text-gray-800">
                      ${line.credit.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Totals Row */}
          <div className="bg-gray-100 border-t-2 border-gray-800">
            <div className="grid grid-cols-12 gap-4 p-3">
              <div className="col-span-8 text-right font-semibold text-gray-700">
                TOTALS:
              </div>
              <div className="col-span-2 text-right">
                <div className={cn(
                  "font-mono font-bold text-lg",
                  isBalanced ? "text-gray-800" : "text-red-600"
                )}>
                  ${totalDebits.toLocaleString()}
                </div>
              </div>
              <div className="col-span-2 text-right">
                <div className={cn(
                  "font-mono font-bold text-lg",
                  isBalanced ? "text-gray-800" : "text-red-600"
                )}>
                  ${totalCredits.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Validation Row */}
          {showValidation && (
            <div className={cn(
              "border-t border-gray-300 p-3 text-center",
              isBalanced ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            )}>
              <div className="flex items-center justify-center gap-2">
                {isBalanced ? (
                  <>
                    <Check className="h-5 w-5" />
                    <span className="font-semibold">Entry is balanced - debits equal credits</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-semibold">
                      Entry is unbalanced - difference: ${Math.abs(totalDebits - totalCredits).toLocaleString()}
                    </span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Double-Entry Explanation */}
        {showDetails && (
          <div className="mt-6 space-y-4">
            {/* Accounting Equation Impact */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-4 w-4 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Accounting Equation Impact</h4>
              </div>
              <div className="text-sm text-blue-700 space-y-2">
                <div className="font-medium">Assets = Liabilities + Equity</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-blue-800">Assets</div>
                    <div className="text-xs text-blue-600 mt-1">
                      {lines.filter(line => line.accountType === 'asset').map(line => (
                        <div key={line.id}>
                          {line.account}: {line.debit ? `+$${line.debit.toLocaleString()}` : `-$${line.credit?.toLocaleString()}`}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-red-800">Liabilities</div>
                    <div className="text-xs text-red-600 mt-1">
                      {lines.filter(line => line.accountType === 'liability').map(line => (
                        <div key={line.id}>
                          {line.account}: {line.credit ? `+$${line.credit.toLocaleString()}` : `-$${line.debit?.toLocaleString()}`}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-purple-800">Equity</div>
                    <div className="text-xs text-purple-600 mt-1">
                      {lines.filter(line => ['equity', 'revenue', 'expense'].includes(line.accountType)).map(line => (
                        <div key={line.id}>
                          {line.account}: {
                            line.accountType === 'expense' 
                              ? (line.debit ? `-$${line.debit.toLocaleString()}` : `+$${line.credit?.toLocaleString()}`)
                              : (line.credit ? `+$${line.credit.toLocaleString()}` : `-$${line.debit?.toLocaleString()}`)
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Analysis */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Transaction Analysis</h4>
              <div className="text-sm text-green-700 space-y-1">
                <div>• This journal entry affects {lines.length} accounts</div>
                <div>• Total value: ${Math.max(totalDebits, totalCredits).toLocaleString()}</div>
                <div>• Account types involved: {[...new Set(lines.map(line => line.accountType))].join(', ')}</div>
                {isBalanced && (
                  <div className="font-medium text-green-800 mt-2">
                    ✓ The fundamental accounting equation remains in balance
                  </div>
                )}
              </div>
            </div>

            {/* Double-Entry Rules */}
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Double-Entry Bookkeeping Rules</h4>
              <div className="text-sm text-yellow-700 space-y-1">
                <div>• Every transaction affects at least two accounts</div>
                <div>• Total debits must equal total credits</div>
                <div>• Assets and expenses increase with debits, decrease with credits</div>
                <div>• Liabilities, equity, and revenue increase with credits, decrease with debits</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default JournalEntry