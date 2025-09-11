/**
 * TrialBalanceSorting Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { TrialBalanceSorting } from '@/components/drag-drop-exercises/TrialBalanceSorting'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <TrialBalanceSorting />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * It supports optional props for configuration; if omitted, it initializes
 * with a balanced default dataset and standard UI copy.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn to organize accounts into a trial balance format,
 * understanding which accounts have normal debit or credit balances and
 * verifying that total debits equal total credits.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **View Account List**: Students see a shuffled list of accounts with their
 *    dollar amounts that need to be sorted into the correct trial balance columns.
 * 
 * 2. **Drag and Drop Sorting**: Students drag each account from the unsorted list
 *    to either the "Debit Balances" or "Credit Balances" column based on the
 *    account's normal balance.
 * 
 * 3. **Real-time Balance Tracking**: As accounts are placed, students see:
 *    - Running totals for both debit and credit sides
 *    - Balance status indicator showing if trial balance is balanced
 *    - Visual feedback for each placement
 * 
 * 4. **Account Classification Understanding**: Students learn which accounts typically have:
 *    - DEBIT balances: Assets (Cash, Equipment, etc.) and Expenses
 *    - CREDIT balances: Liabilities (Accounts Payable, etc.), Equity, and Revenues
 * 
 * 5. **Trial Balance Verification**: Students experience the fundamental accounting principle
 *    that total debits must equal total credits for the books to be "in balance."
 * 
 * 6. **Feedback and Correction**: Students receive:
 *    - Immediate feedback when dragging accounts to wrong sides
 *    - Success indicators when trial balance is properly balanced
 *    - Option to reset and try again with different arrangements
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding normal account balances (debit vs credit)
 * - Recognizing account types and their typical balance sides
 * - Experiencing the trial balance as a verification tool
 * - Learning that Assets + Expenses = Liabilities + Equity + Revenue
 * - Developing familiarity with account classification systems
 * - Building confidence with drag-and-drop accounting interactions
 */

'use client'

import { useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Scale,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Building2,
  Wallet,
  CreditCard,
  Target
} from 'lucide-react'

interface Account {
  id: string
  name: string
  balance: number
  correctSide: 'debit' | 'credit'
  category: 'Assets' | 'Liabilities' | 'Equity' | 'Revenue' | 'Expenses'
}

interface DroppedAccount extends Account {
  placedSide: 'debit' | 'credit'
  isCorrect: boolean
}

interface GameState {
  unplacedAccounts: Account[]
  debitAccounts: DroppedAccount[]
  creditAccounts: DroppedAccount[]
  attempts: number
  isComplete: boolean
  showFeedback: boolean
}

interface TrialBalanceSortingProps {
  title?: string
  description?: string
  accounts?: Omit<Account, 'id'>[]
  initialShuffle?: boolean // default: true
  showInstructionsDefaultOpen?: boolean // default: false
  showCategoryBadges?: boolean // default: true
}

// Default dataset (balanced totals)
const TRIAL_BALANCE_ACCOUNTS: Omit<Account, 'id'>[] = [
  { name: 'Cash', balance: 5000, correctSide: 'debit', category: 'Assets' },
  { name: 'Accounts Receivable', balance: 2500, correctSide: 'debit', category: 'Assets' },
  { name: 'Equipment', balance: 15000, correctSide: 'debit', category: 'Assets' },
  { name: 'Inventory', balance: 3200, correctSide: 'debit', category: 'Assets' },
  { name: 'Accounts Payable', balance: 3200, correctSide: 'credit', category: 'Liabilities' },
  { name: 'Notes Payable', balance: 8000, correctSide: 'credit', category: 'Liabilities' },
  { name: 'Owner\'s Equity', balance: 12000, correctSide: 'credit', category: 'Equity' },
  { name: 'Retained Earnings', balance: 1500, correctSide: 'credit', category: 'Equity' },
  // Adjusted to ensure debits equal credits for the default set
  { name: 'Service Revenue', balance: 7300, correctSide: 'credit', category: 'Revenue' },
  { name: 'Rent Expense', balance: 1200, correctSide: 'debit', category: 'Expenses' },
  { name: 'Salary Expense', balance: 4300, correctSide: 'debit', category: 'Expenses' },
  { name: 'Utilities Expense', balance: 800, correctSide: 'debit', category: 'Expenses' }
]

export function TrialBalanceSorting({
  title,
  description,
  accounts,
  initialShuffle = true,
  showInstructionsDefaultOpen = false,
  showCategoryBadges = true,
}: TrialBalanceSortingProps) {
  const baseAccounts = useMemo(() => accounts ?? TRIAL_BALANCE_ACCOUNTS, [accounts])

  const [gameState, setGameState] = useState<GameState>(() => {
    const prepared = [...baseAccounts].map((account, index) => ({
      ...account,
      id: `account-${index}`
    }))
    const unplaced = initialShuffle ? prepared.sort(() => Math.random() - 0.5) : prepared

    return {
      unplacedAccounts: unplaced,
      debitAccounts: [],
      creditAccounts: [],
      attempts: 0,
      isComplete: false,
      showFeedback: false
    }
  })

  const [draggedAccount, setDraggedAccount] = useState<Account | null>(null)
  const [showInstructions, setShowInstructions] = useState(showInstructionsDefaultOpen)

  const getDebitTotal = useCallback(() => {
    return gameState.debitAccounts.reduce((sum, account) => sum + account.balance, 0)
  }, [gameState.debitAccounts])

  const getCreditTotal = useCallback(() => {
    return gameState.creditAccounts.reduce((sum, account) => sum + account.balance, 0)
  }, [gameState.creditAccounts])

  const getBalanceStatus = useCallback(() => {
    const debitTotal = getDebitTotal()
    const creditTotal = getCreditTotal()
    const difference = Math.abs(debitTotal - creditTotal)
    
    if (gameState.debitAccounts.length === 0 && gameState.creditAccounts.length === 0) {
      return { status: 'Drag accounts to see balance status', color: 'text-gray-600', icon: Scale }
    }
    
    if (difference < 0.01) {
      return { status: 'Trial Balance is Balanced! ✅', color: 'text-green-600', icon: CheckCircle }
    }
    
    return { 
      status: `Trial Balance is OFF by $${difference.toLocaleString()} ❌`, 
      color: 'text-red-600', 
      icon: XCircle 
    }
  }, [gameState.debitAccounts, gameState.creditAccounts, getDebitTotal, getCreditTotal])

  const handleDragStart = useCallback((account: Account) => {
    setDraggedAccount(account)
  }, [])

  const handleDragEnd = useCallback(() => {
    setDraggedAccount(null)
  }, [])

  const handleDrop = useCallback((targetSide: 'debit' | 'credit') => {
    if (!draggedAccount) return

    const isCorrect = draggedAccount.correctSide === targetSide
    const droppedAccount: DroppedAccount = {
      ...draggedAccount,
      placedSide: targetSide,
      isCorrect
    }

    setGameState(prev => ({
      ...prev,
      unplacedAccounts: prev.unplacedAccounts.filter(account => account.id !== draggedAccount.id),
      debitAccounts: targetSide === 'debit' 
        ? [...prev.debitAccounts, droppedAccount]
        : prev.debitAccounts,
      creditAccounts: targetSide === 'credit'
        ? [...prev.creditAccounts, droppedAccount]
        : prev.creditAccounts
    }))

    setDraggedAccount(null)
  }, [draggedAccount])

  const removeAccount = useCallback((accountId: string, fromSide: 'debit' | 'credit') => {
    setGameState(prev => {
      const accountToRemove = fromSide === 'debit' 
        ? prev.debitAccounts.find(acc => acc.id === accountId)
        : prev.creditAccounts.find(acc => acc.id === accountId)
      
      if (!accountToRemove) return prev

      const { placedSide, isCorrect, ...originalAccount } = accountToRemove

      return {
        ...prev,
        unplacedAccounts: [...prev.unplacedAccounts, originalAccount],
        debitAccounts: fromSide === 'debit' 
          ? prev.debitAccounts.filter(acc => acc.id !== accountId)
          : prev.debitAccounts,
        creditAccounts: fromSide === 'credit'
          ? prev.creditAccounts.filter(acc => acc.id !== accountId)
          : prev.creditAccounts
      }
    })
  }, [])

  const checkTrialBalance = useCallback(() => {
    const debitTotal = getDebitTotal()
    const creditTotal = getCreditTotal()
    const isBalanced = Math.abs(debitTotal - creditTotal) < 0.01
    
    const allPlaced = gameState.unplacedAccounts.length === 0
    const allCorrect = [...gameState.debitAccounts, ...gameState.creditAccounts]
      .every(account => account.isCorrect)

    setGameState(prev => ({
      ...prev,
      attempts: prev.attempts + 1,
      isComplete: allPlaced && allCorrect && isBalanced,
      showFeedback: true
    }))
  }, [gameState, getDebitTotal, getCreditTotal])

  const resetExercise = useCallback(() => {
    const prepared = [...baseAccounts].map((account, index) => ({
      ...account,
      id: `account-${index}-${Date.now()}`
    }))
    const unplaced = initialShuffle ? prepared.sort(() => Math.random() - 0.5) : prepared

    setGameState({
      unplacedAccounts: unplaced,
      debitAccounts: [],
      creditAccounts: [],
      attempts: 0,
      isComplete: false,
      showFeedback: false
    })
  }, [baseAccounts, initialShuffle])

  const balanceStatus = getBalanceStatus()
  const debitTotal = getDebitTotal()
  const creditTotal = getCreditTotal()
  const correctPlacements = [...gameState.debitAccounts, ...gameState.creditAccounts]
    .filter(account => account.isCorrect).length
  const totalPlacements = gameState.debitAccounts.length + gameState.creditAccounts.length
  const score = totalPlacements > 0 ? Math.round((correctPlacements / totalPlacements) * 100) : 0

  const expectedTotals = useMemo(() => {
    const debit = baseAccounts.filter(a => a.correctSide === 'debit').reduce((s, a) => s + a.balance, 0)
    const credit = baseAccounts.filter(a => a.correctSide === 'credit').reduce((s, a) => s + a.balance, 0)
    return { debit, credit }
  }, [baseAccounts])

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Scale className="w-8 h-8 text-blue-600" />
            {title ?? 'Trial Balance Sorting Challenge'}
          </CardTitle>
          <CardDescription className="text-lg">
            {description ?? 'Drag each account to the correct side of the trial balance. Make sure debits equal credits!'}
          </CardDescription>
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              How to Play
              {showInstructions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Trial Balance Sorting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objective</h4>
              <p className="text-blue-700">
                Organize all accounts into the correct sides of a trial balance. Accounts with normal debit balances 
                go on the left, and accounts with normal credit balances go on the right. The goal is to achieve 
                total debits = total credits.
              </p>
            </div>

            {/* Step-by-Step Instructions */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📋 Step-by-Step Instructions</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium">Study the Accounts</p>
                    <p className="text-sm text-gray-600">Look at the list of accounts and their balances. Consider what type each account is.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium">Drag to Correct Side</p>
                    <p className="text-sm text-gray-600">Drag each account to either "Debit Balances" (left) or "Credit Balances" (right).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium">Watch the Totals</p>
                    <p className="text-sm text-gray-600">Monitor the running totals at the bottom of each column as you place accounts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <p className="font-medium">Check Balance</p>
                    <p className="text-sm text-gray-600">Click "Check Trial Balance" when done to see if debits equal credits and all accounts are placed correctly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Categories Explanation */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📊 Account Categories & Normal Balances</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    DEBIT Balances (Left Side)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-green-600" />
                      <span><strong>Assets:</strong> Cash, Equipment, Inventory</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-green-600" />
                      <span><strong>Expenses:</strong> Rent, Salaries, Utilities</span>
                    </div>
                  </div>
                  <p className="text-xs text-green-700 mt-2 italic">
                    These accounts increase with debits and have normal debit balances.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" />
                    CREDIT Balances (Right Side)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      <span><strong>Liabilities:</strong> Accounts Payable, Notes Payable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-blue-600" />
                      <span><strong>Equity:</strong> Owner's Equity, Retained Earnings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <span><strong>Revenue:</strong> Service Revenue, Sales Revenue</span>
                    </div>
                  </div>
                  <p className="text-xs text-blue-700 mt-2 italic">
                    These accounts increase with credits and have normal credit balances.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💡 Success Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Remember the equation:</strong> Assets + Expenses = Liabilities + Equity + Revenue</li>
                <li>• <strong>Think about increases:</strong> What makes this account balance go up?</li>
                <li>• <strong>Use the categories:</strong> Assets and Expenses are typically debit balances</li>
                <li>• <strong>Check your work:</strong> The totals must be equal for a balanced trial balance</li>
                <li>• <strong>Don't worry about mistakes:</strong> You can drag accounts back to the unsorted area</li>
              </ul>
            </div>

            {/* Expected Outcome */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🏆 Expected Outcome</h4>
              <p className="text-sm text-green-700">
                When completed correctly, you should have <strong>${expectedTotals.debit.toLocaleString()}</strong> in total debits and 
                <strong>${expectedTotals.credit.toLocaleString()}</strong> in total credits, with all accounts placed on their correct sides.
                {Math.abs(expectedTotals.debit - expectedTotals.credit) > 0.01 && (
                  <span className="block mt-1 text-yellow-700">
                    Note: The provided dataset is not balanced. To complete with a balanced trial balance, use a balanced account set.
                  </span>
                )}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-purple-700 font-medium">Attempts</p>
            <p className="text-2xl font-bold text-purple-800">{gameState.attempts}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-blue-700 font-medium">Accuracy</p>
            <p className="text-2xl font-bold text-blue-800">{score}%</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-green-700 font-medium">Debit Total</p>
            <p className="text-2xl font-bold text-green-800">${debitTotal.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-sm text-red-700 font-medium">Credit Total</p>
            <p className="text-2xl font-bold text-red-800">${creditTotal.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>

      {/* Balance Status */}
      <Card className={`border-2 ${
        balanceStatus.color.includes('green') ? 'border-green-500 bg-green-50' :
        balanceStatus.color.includes('red') ? 'border-red-500 bg-red-50' :
        'border-gray-300 bg-gray-50'
      }`}>
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <balanceStatus.icon className={`w-6 h-6 ${balanceStatus.color}`} />
            <h3 className={`text-xl font-bold ${balanceStatus.color}`}>
              {balanceStatus.status}
            </h3>
          </div>
        </CardContent>
      </Card>

      {/* Unsorted Accounts */}
      {gameState.unplacedAccounts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-gray-600" />
              Accounts to Sort ({gameState.unplacedAccounts.length} remaining)
            </CardTitle>
            <CardDescription>
              Drag each account to the correct side of the trial balance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {gameState.unplacedAccounts.map((account) => (
                <div
                  key={account.id}
                  draggable
                  onDragStart={() => handleDragStart(account)}
                  onDragEnd={handleDragEnd}
                  className="p-3 bg-white border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-400 hover:shadow-md transition-all duration-200 active:cursor-grabbing"
                >
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">{account.name}</p>
                    <p className="text-lg font-bold text-gray-700">${account.balance.toLocaleString()}</p>
                    {showCategoryBadges && (
                      <Badge variant="outline" className="text-xs mt-1">
                        {account.category}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Trial Balance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Debit Side */}
        <Card className="border-green-200">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <TrendingUp className="w-5 h-5" />
              Debit Balances
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('debit')}
              className="min-h-64 p-4 border-2 border-dashed border-green-300 rounded-lg bg-green-50/30 space-y-2"
            >
              {gameState.debitAccounts.length === 0 ? (
                <p className="text-center text-green-600 py-8">Drop debit balance accounts here</p>
              ) : (
                gameState.debitAccounts.map((account) => (
                  <div
                    key={account.id}
                    className={`p-3 rounded-lg border flex items-center justify-between ${
                      account.isCorrect 
                        ? 'bg-green-100 border-green-300' 
                        : 'bg-red-100 border-red-300'
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{account.name}</p>
                      {showCategoryBadges && (
                        <Badge variant="outline" className="text-xs">
                          {account.category}
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${account.balance.toLocaleString()}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAccount(account.id, 'debit')}
                        className="text-xs h-6 px-2"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <Separator className="my-4" />
            <div className="text-center p-3 bg-green-100 rounded-lg">
              <p className="text-sm text-green-700 font-medium">Total Debits</p>
              <p className="text-2xl font-bold text-green-800">${debitTotal.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        {/* Credit Side */}
        <Card className="border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <TrendingDown className="w-5 h-5" />
              Credit Balances
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop('credit')}
              className="min-h-64 p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50/30 space-y-2"
            >
              {gameState.creditAccounts.length === 0 ? (
                <p className="text-center text-blue-600 py-8">Drop credit balance accounts here</p>
              ) : (
                gameState.creditAccounts.map((account) => (
                  <div
                    key={account.id}
                    className={`p-3 rounded-lg border flex items-center justify-between ${
                      account.isCorrect 
                        ? 'bg-green-100 border-green-300' 
                        : 'bg-red-100 border-red-300'
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{account.name}</p>
                      {showCategoryBadges && (
                        <Badge variant="outline" className="text-xs">
                          {account.category}
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${account.balance.toLocaleString()}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAccount(account.id, 'credit')}
                        className="text-xs h-6 px-2"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <Separator className="my-4" />
            <div className="text-center p-3 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-700 font-medium">Total Credits</p>
              <p className="text-2xl font-bold text-blue-800">${creditTotal.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback */}
      {gameState.showFeedback && (
        <Card className={`border-2 ${gameState.isComplete ? 'border-green-500 bg-green-50' : 'border-orange-500 bg-orange-50'}`}>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {gameState.isComplete ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <XCircle className="w-8 h-8 text-orange-600" />
              )}
              <h3 className={`text-2xl font-bold ${gameState.isComplete ? 'text-green-800' : 'text-orange-800'}`}>
                {gameState.isComplete ? 'Excellent Work!' : 'Keep Trying!'}
              </h3>
            </div>
            <p className={`text-lg ${gameState.isComplete ? 'text-green-700' : 'text-orange-700'}`}>
              {gameState.isComplete 
                ? `Perfect! You correctly organized all accounts and balanced the trial balance with ${correctPlacements}/${totalPlacements} accounts placed correctly.`
                : `You have ${correctPlacements}/${totalPlacements} accounts placed correctly. ${
                    gameState.unplacedAccounts.length > 0 
                      ? `Place the remaining ${gameState.unplacedAccounts.length} accounts and `
                      : ''
                  }make sure debits equal credits!`
              }
            </p>
          </CardContent>
        </Card>
      )}

      {/* Control Buttons */}
      <div className="flex justify-center gap-4">
        <Button 
          onClick={checkTrialBalance}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={gameState.debitAccounts.length === 0 && gameState.creditAccounts.length === 0}
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Check Trial Balance
        </Button>
        <Button 
          onClick={resetExercise}
          variant="outline" 
          size="lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Exercise
        </Button>
      </div>
    </div>
  )
}
export default TrialBalanceSorting
