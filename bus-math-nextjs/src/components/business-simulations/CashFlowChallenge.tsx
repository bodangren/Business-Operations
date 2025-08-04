/**
 * CashFlowChallenge Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { CashFlowChallenge } from '@/components/business-simulations/CashFlowChallenge'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <CashFlowChallenge />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with default values.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn cash flow management for growing businesses,
 * understanding the timing of payments and liquidity management.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Monitor Cash Position**: Students see current cash ($25,000 starting), 
 *    day counter, and cash health status (Healthy/Tight/Critical).
 * 
 * 2. **Track Payment Flows**: Students view upcoming:
 *    - INCOMING payments (customer payments, invoice collections)
 *    - OUTGOING payments (supplier payments, payroll, rent)
 * 
 * 3. **Take Strategic Actions**: 
 *    - Call clients for early payment (accelerate incoming cash)
 *    - Negotiate payment terms (modify timing/amounts)
 *    - Apply for line of credit (emergency funding with costs)
 *    - Delay non-critical expenses (push back payments with penalties)
 * 
 * 4. **Advance Through Days**: Click "Advance Day" to progress and see results:
 *    - Payments process automatically when due
 *    - Cash position updates with each transaction
 *    - Health status changes based on cash levels
 * 
 * 5. **Maintain Liquidity**: Goal is to survive 30 days with positive cash flow:
 *    - Avoid going bankrupt (cash below $0)
 *    - Make strategic decisions to optimize cash timing
 *    - Balance growth opportunities with liquidity needs
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding cash flow vs. profitability
 * - Importance of payment timing in business operations
 * - Strategic options for managing cash shortfalls
 * - Working capital management and liquidity planning
 * - Impact of payment terms on business viability
 */

'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  DollarSign, 
  Calendar, 
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Phone,
  FileText,
  Building2,
  Clock,
  RefreshCw,
  CheckCircle,
  XCircle,
  Heart,
  Wallet,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

interface CashFlow {
  id: string
  description: string
  amount: number
  daysLeft: number
  type: 'incoming' | 'outgoing'
  canModify: boolean
}

interface GameState {
  cashPosition: number
  day: number
  maxDays: number
  incomingFlows: CashFlow[]
  outgoingFlows: CashFlow[]
  lineOfCredit: number
  creditUsed: number
  creditInterestRate: number
  actionsUsed: {
    requestPayment: number
    negotiateTerms: number
    lineOfCredit: number
    delayExpense: number
  }
  gameStatus: 'playing' | 'won' | 'lost'
}

const INITIAL_INCOMING_FLOWS: Omit<CashFlow, 'id'>[] = [
  { description: 'Customer Payment A', amount: 15000, daysLeft: 5, type: 'incoming', canModify: true },
  { description: 'Customer Payment B', amount: 20000, daysLeft: 12, type: 'incoming', canModify: true },
  { description: 'Invoice Collection', amount: 10000, daysLeft: 25, type: 'incoming', canModify: true }
]

const INITIAL_OUTGOING_FLOWS: Omit<CashFlow, 'id'>[] = [
  { description: 'Supplier Payment', amount: 12000, daysLeft: 3, type: 'outgoing', canModify: true },
  { description: 'Payroll', amount: 18000, daysLeft: 15, type: 'outgoing', canModify: false },
  { description: 'Rent Payment', amount: 8000, daysLeft: 30, type: 'outgoing', canModify: true }
]

export function CashFlowChallenge() {
  const [gameState, setGameState] = useState<GameState>({
    cashPosition: 25000,
    day: 1,
    maxDays: 30,
    incomingFlows: INITIAL_INCOMING_FLOWS.map((flow, index) => ({
      ...flow,
      id: `incoming-${index}`
    })),
    outgoingFlows: INITIAL_OUTGOING_FLOWS.map((flow, index) => ({
      ...flow,
      id: `outgoing-${index}`
    })),
    lineOfCredit: 0,
    creditUsed: 0,
    creditInterestRate: 0.05,
    actionsUsed: {
      requestPayment: 0,
      negotiateTerms: 0,
      lineOfCredit: 0,
      delayExpense: 0
    },
    gameStatus: 'playing'
  })

  const [notifications, setNotifications] = useState<Array<{
    id: string
    message: string
    type: 'success' | 'warning' | 'error' | 'info'
  }>>([])

  const [showInstructions, setShowInstructions] = useState(false)

  const addNotification = useCallback((message: string, type: 'success' | 'warning' | 'error' | 'info') => {
    const id = Date.now().toString()
    setNotifications(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }, [])

  const getCashHealthStatus = (cash: number) => {
    if (cash >= 20000) return { status: 'Healthy', color: 'text-green-600', bgColor: 'bg-green-50' }
    if (cash >= 10000) return { status: 'Good', color: 'text-blue-600', bgColor: 'bg-blue-50' }
    if (cash >= 5000) return { status: 'Tight', color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
    if (cash >= 0) return { status: 'Critical', color: 'text-orange-600', bgColor: 'bg-orange-50' }
    return { status: 'Bankrupt', color: 'text-red-600', bgColor: 'bg-red-50' }
  }

  const processFlows = useCallback((flows: CashFlow[], amount: number) => {
    return flows.map(flow => ({
      ...flow,
      daysLeft: Math.max(0, flow.daysLeft - 1)
    })).map(flow => {
      if (flow.daysLeft === 0) {
        const flowAmount = flow.type === 'incoming' ? flow.amount : -flow.amount
        return { flow: { ...flow, daysLeft: -1 }, cashChange: flowAmount }
      }
      return { flow, cashChange: 0 }
    })
  }, [])

  const advanceDay = useCallback(() => {
    if (gameState.gameStatus !== 'playing') return

    setGameState(prev => {
      const newDay = prev.day + 1
      let cashChange = 0
      const notifications: string[] = []

      // Process incoming flows
      const newIncomingFlows = prev.incomingFlows.map(flow => {
        const newFlow = { ...flow, daysLeft: Math.max(0, flow.daysLeft - 1) }
        if (flow.daysLeft === 1) {
          cashChange += flow.amount
          notifications.push(`Received ${flow.description}: +$${flow.amount.toLocaleString()}`)
          return { ...newFlow, daysLeft: -1 }
        }
        return newFlow
      }).filter(flow => flow.daysLeft !== -1)

      // Process outgoing flows
      const newOutgoingFlows = prev.outgoingFlows.map(flow => {
        const newFlow = { ...flow, daysLeft: Math.max(0, flow.daysLeft - 1) }
        if (flow.daysLeft === 1) {
          cashChange -= flow.amount
          notifications.push(`Paid ${flow.description}: -$${flow.amount.toLocaleString()}`)
          return { ...newFlow, daysLeft: -1 }
        }
        return newFlow
      }).filter(flow => flow.daysLeft !== -1)

      // Apply daily interest on credit used
      const dailyInterest = prev.creditUsed * (prev.creditInterestRate / 365)
      cashChange -= dailyInterest

      const newCashPosition = prev.cashPosition + cashChange
      
      // Determine game status
      let newGameStatus = prev.gameStatus
      if (newCashPosition < 0) {
        newGameStatus = 'lost'
      } else if (newDay > prev.maxDays) {
        newGameStatus = 'won'
      }

      // Show notifications
      notifications.forEach(msg => {
        if (msg.includes('+$')) {
          addNotification(msg, 'success')
        } else {
          addNotification(msg, 'info')
        }
      })

      if (dailyInterest > 0) {
        addNotification(`Credit interest: -$${dailyInterest.toFixed(2)}`, 'warning')
      }

      return {
        ...prev,
        day: newDay,
        cashPosition: newCashPosition,
        incomingFlows: newIncomingFlows,
        outgoingFlows: newOutgoingFlows,
        gameStatus: newGameStatus
      }
    })
  }, [gameState.gameStatus, addNotification])

  const requestPayment = useCallback(() => {
    const availableFlows = gameState.incomingFlows.filter(flow => 
      flow.canModify && flow.daysLeft > 2
    )
    
    if (availableFlows.length === 0) {
      addNotification('No payments available to expedite', 'warning')
      return
    }

    const flowToModify = availableFlows[0]
    const cost = Math.round(flowToModify.amount * 0.05) // 5% fee

    setGameState(prev => ({
      ...prev,
      cashPosition: prev.cashPosition - cost,
      incomingFlows: prev.incomingFlows.map(flow =>
        flow.id === flowToModify.id
          ? { ...flow, daysLeft: Math.min(flow.daysLeft, 2), canModify: false }
          : flow
      ),
      actionsUsed: {
        ...prev.actionsUsed,
        requestPayment: prev.actionsUsed.requestPayment + 1
      }
    }))

    addNotification(
      `Called ${flowToModify.description} - payment expedited for $${cost.toLocaleString()} fee`,
      'success'
    )
  }, [gameState, addNotification])

  const negotiateTerms = useCallback(() => {
    const availableFlows = gameState.outgoingFlows.filter(flow => 
      flow.canModify && flow.daysLeft <= 5
    )
    
    if (availableFlows.length === 0) {
      addNotification('No urgent payments available to negotiate', 'warning')
      return
    }

    const flowToModify = availableFlows[0]
    const extension = 7 // Extend by 7 days
    const penalty = Math.round(flowToModify.amount * 0.02) // 2% penalty

    setGameState(prev => ({
      ...prev,
      outgoingFlows: prev.outgoingFlows.map(flow =>
        flow.id === flowToModify.id
          ? { 
              ...flow, 
              daysLeft: flow.daysLeft + extension,
              amount: flow.amount + penalty,
              canModify: false
            }
          : flow
      ),
      actionsUsed: {
        ...prev.actionsUsed,
        negotiateTerms: prev.actionsUsed.negotiateTerms + 1
      }
    }))

    addNotification(
      `Negotiated ${flowToModify.description} - extended by ${extension} days with $${penalty.toLocaleString()} penalty`,
      'info'
    )
  }, [gameState, addNotification])

  const getLineOfCredit = useCallback(() => {
    if (gameState.lineOfCredit > 0) {
      addNotification('Line of credit already established', 'warning')
      return
    }

    const creditAmount = 15000
    const setupFee = 500

    setGameState(prev => ({
      ...prev,
      cashPosition: prev.cashPosition - setupFee,
      lineOfCredit: creditAmount,
      actionsUsed: {
        ...prev.actionsUsed,
        lineOfCredit: prev.actionsUsed.lineOfCredit + 1
      }
    }))

    addNotification(
      `Line of credit established: $${creditAmount.toLocaleString()} available (Setup fee: $${setupFee})`,
      'success'
    )
  }, [gameState, addNotification])

  const useCredit = useCallback((amount: number) => {
    const available = gameState.lineOfCredit - gameState.creditUsed
    const amountToUse = Math.min(amount, available)

    if (amountToUse <= 0) {
      addNotification('No credit available', 'warning')
      return
    }

    setGameState(prev => ({
      ...prev,
      cashPosition: prev.cashPosition + amountToUse,
      creditUsed: prev.creditUsed + amountToUse
    }))

    addNotification(`Used $${amountToUse.toLocaleString()} from line of credit`, 'info')
  }, [gameState, addNotification])

  const delayExpense = useCallback(() => {
    const availableFlows = gameState.outgoingFlows.filter(flow => 
      flow.canModify && flow.daysLeft <= 7 && flow.description !== 'Payroll'
    )
    
    if (availableFlows.length === 0) {
      addNotification('No expenses available to delay', 'warning')
      return
    }

    const flowToModify = availableFlows[0]
    const delay = 5 // Delay by 5 days
    const penalty = Math.round(flowToModify.amount * 0.03) // 3% penalty

    setGameState(prev => ({
      ...prev,
      outgoingFlows: prev.outgoingFlows.map(flow =>
        flow.id === flowToModify.id
          ? { 
              ...flow, 
              daysLeft: flow.daysLeft + delay,
              amount: flow.amount + penalty,
              canModify: false
            }
          : flow
      ),
      actionsUsed: {
        ...prev.actionsUsed,
        delayExpense: prev.actionsUsed.delayExpense + 1
      }
    }))

    addNotification(
      `Delayed ${flowToModify.description} by ${delay} days with $${penalty.toLocaleString()} penalty`,
      'warning'
    )
  }, [gameState, addNotification])

  const resetGame = useCallback(() => {
    setGameState({
      cashPosition: 25000,
      day: 1,
      maxDays: 30,
      incomingFlows: INITIAL_INCOMING_FLOWS.map((flow, index) => ({
        ...flow,
        id: `incoming-${index}`
      })),
      outgoingFlows: INITIAL_OUTGOING_FLOWS.map((flow, index) => ({
        ...flow,
        id: `outgoing-${index}`
      })),
      lineOfCredit: 0,
      creditUsed: 0,
      creditInterestRate: 0.05,
      actionsUsed: {
        requestPayment: 0,
        negotiateTerms: 0,
        lineOfCredit: 0,
        delayExpense: 0
      },
      gameStatus: 'playing'
    })
    setNotifications([])
    addNotification('Game reset successfully', 'info')
  }, [addNotification])

  const healthStatus = getCashHealthStatus(gameState.cashPosition)
  const totalIncoming = gameState.incomingFlows.reduce((sum, flow) => sum + flow.amount, 0)
  const totalOutgoing = gameState.outgoingFlows.reduce((sum, flow) => sum + flow.amount, 0)
  const netFlow = totalIncoming - totalOutgoing

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Wallet className="w-8 h-8 text-blue-600" />
            Cash Flow Challenge
          </CardTitle>
          <CardDescription className="text-lg">
            Manage business cash flow for 30 days. Balance incoming and outgoing payments to stay solvent!
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
              How to Play Cash Flow Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objective</h4>
              <p className="text-blue-700">
                Survive 30 days without going bankrupt by managing your business cash flow. 
                You start with $25,000 and must balance incoming payments from customers with outgoing expenses.
              </p>
            </div>

            {/* Win/Lose Conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-1">✅ Win Condition</h5>
                <p className="text-sm text-green-700">Maintain positive cash (above $0) for all 30 days</p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-800 mb-1">❌ Lose Condition</h5>
                <p className="text-sm text-red-700">Cash drops below $0 (bankruptcy)</p>
              </div>
            </div>

            {/* Cash Health Status */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💚 Cash Health Status</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
                <div className="p-2 bg-green-100 rounded text-center">
                  <div className="font-medium text-green-800">Healthy</div>
                  <div className="text-green-600">$20,000+</div>
                </div>
                <div className="p-2 bg-blue-100 rounded text-center">
                  <div className="font-medium text-blue-800">Good</div>
                  <div className="text-blue-600">$10k-$19k</div>
                </div>
                <div className="p-2 bg-yellow-100 rounded text-center">
                  <div className="font-medium text-yellow-800">Tight</div>
                  <div className="text-yellow-600">$5k-$9k</div>
                </div>
                <div className="p-2 bg-orange-100 rounded text-center">
                  <div className="font-medium text-orange-800">Critical</div>
                  <div className="text-orange-600">$1-$4k</div>
                </div>
                <div className="p-2 bg-red-100 rounded text-center">
                  <div className="font-medium text-red-800">Bankrupt</div>
                  <div className="text-red-600">Below $0</div>
                </div>
              </div>
            </div>

            {/* Strategic Actions */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">🎮 Strategic Actions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <h5 className="font-medium">Request Payment</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Speed up customer payments to arrive in 2 days</p>
                  <p className="text-xs text-gray-500"><strong>Cost:</strong> 5% of payment amount</p>
                </div>
                
                <div className="p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-purple-600" />
                    <h5 className="font-medium">Negotiate Terms</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Extend outgoing payment deadlines by 7 days</p>
                  <p className="text-xs text-gray-500"><strong>Cost:</strong> 2% penalty added to payment</p>
                </div>
                
                <div className="p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-green-600" />
                    <h5 className="font-medium">Line of Credit</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Get access to $15,000 emergency funds</p>
                  <p className="text-xs text-gray-500"><strong>Cost:</strong> $500 setup + daily interest</p>
                </div>
                
                <div className="p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <h5 className="font-medium">Delay Expense</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Push back non-critical payments by 5 days</p>
                  <p className="text-xs text-gray-500"><strong>Cost:</strong> 3% penalty (Cannot delay Payroll)</p>
                </div>
              </div>
            </div>

            {/* Payment Timeline */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📅 Key Payment Timeline</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm"><strong>Day 3:</strong> Supplier Payment</span>
                  <span className="text-red-600 font-medium">-$12,000</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm"><strong>Day 5:</strong> Customer Payment A</span>
                  <span className="text-green-600 font-medium">+$15,000</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border border-yellow-300 bg-yellow-50">
                  <span className="text-sm"><strong>Day 15:</strong> Payroll (CRITICAL)</span>
                  <span className="text-red-600 font-medium">-$18,000</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm"><strong>Day 12:</strong> Customer Payment B</span>
                  <span className="text-green-600 font-medium">+$20,000</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm"><strong>Day 30:</strong> Rent + Invoice</span>
                  <span className="text-blue-600 font-medium">-$8,000 / +$10,000</span>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Day 15 is critical</strong> - The $18,000 payroll cannot be delayed</li>
                <li>• <strong>Get line of credit early</strong> - It&apos;s insurance even if you don&apos;t use it</li>
                <li>• <strong>Customer Payment B ($20k)</strong> is your lifeline for payroll</li>
                <li>• <strong>Plan 3-5 days ahead</strong> - Don&apos;t wait until the last minute</li>
                <li>• <strong>Early actions are cheaper</strong> - Fees compound over time</li>
              </ul>
            </div>

            {/* Success Strategy */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🏆 Winning Strategy</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-800 mb-1">Conservative Approach</h5>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Monitor cash carefully</li>
                    <li>• Use actions only when critical</li>
                    <li>• Focus on surviving Day 15 payroll</li>
                    <li>• Request Customer Payment A if needed</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h5 className="font-medium text-orange-800 mb-1">Aggressive Approach</h5>
                  <ul className="text-xs text-orange-700 space-y-1">
                    <li>• Get line of credit immediately</li>
                    <li>• Request payments early for buffer</li>
                    <li>• Negotiate/delay strategically</li>
                    <li>• Build cash reserves quickly</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Status */}
      {gameState.gameStatus !== 'playing' && (
        <Card className={`border-2 ${gameState.gameStatus === 'won' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {gameState.gameStatus === 'won' ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <XCircle className="w-8 h-8 text-red-600" />
              )}
              <h3 className={`text-2xl font-bold ${gameState.gameStatus === 'won' ? 'text-green-800' : 'text-red-800'}`}>
                {gameState.gameStatus === 'won' ? 'Challenge Complete!' : 'Game Over'}
              </h3>
            </div>
            <p className={`text-lg ${gameState.gameStatus === 'won' ? 'text-green-700' : 'text-red-700'}`}>
              {gameState.gameStatus === 'won' 
                ? `Successfully managed cash flow for 30 days with $${gameState.cashPosition.toLocaleString()} remaining!`
                : 'Ran out of cash! Better luck next time.'
              }
            </p>
          </CardContent>
        </Card>
      )}

      {/* Cash Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className={`${healthStatus.bgColor} border-2`}>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className={`w-6 h-6 ${healthStatus.color}`} />
            </div>
            <p className="text-sm font-medium">Cash Position</p>
            <p className={`text-2xl font-bold ${healthStatus.color}`}>
              ${gameState.cashPosition.toLocaleString()}
            </p>
            <Badge variant="outline" className={`mt-1 ${healthStatus.color}`}>
              {healthStatus.status}
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-purple-700 font-medium">Day</p>
            <p className="text-2xl font-bold text-purple-800">
              {gameState.day} / {gameState.maxDays}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-green-700 font-medium">Incoming</p>
            <p className="text-2xl font-bold text-green-800">
              ${totalIncoming.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-sm text-red-700 font-medium">Outgoing</p>
            <p className="text-2xl font-bold text-red-800">
              ${totalOutgoing.toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cash Flows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Incoming Flows */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <TrendingUp className="w-5 h-5" />
              Incoming Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {gameState.incomingFlows.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No pending incoming payments</p>
            ) : (
              gameState.incomingFlows.map((flow) => (
                <div key={flow.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                  <div>
                    <p className="font-medium text-green-800">{flow.description}</p>
                    <p className="text-sm text-green-600">
                      {flow.daysLeft === 0 ? 'Due today' : `${flow.daysLeft} days left`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-700">+${flow.amount.toLocaleString()}</p>
                    {!flow.canModify && (
                      <Badge variant="outline" className="text-xs">Modified</Badge>
                    )}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Outgoing Flows */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <TrendingDown className="w-5 h-5" />
              Outgoing Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {gameState.outgoingFlows.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No pending outgoing payments</p>
            ) : (
              gameState.outgoingFlows.map((flow) => (
                <div key={flow.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                  <div>
                    <p className="font-medium text-red-800">{flow.description}</p>
                    <p className="text-sm text-red-600">
                      {flow.daysLeft === 0 ? 'Due today' : `${flow.daysLeft} days left`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-700">-${flow.amount.toLocaleString()}</p>
                    {!flow.canModify && (
                      <Badge variant="outline" className="text-xs">Modified</Badge>
                    )}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      {/* Actions Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Actions</CardTitle>
          <CardDescription>
            Take actions to manage your cash flow. Each action has costs and limitations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              onClick={requestPayment}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2"
              disabled={gameState.gameStatus !== 'playing'}
            >
              <Phone className="w-6 h-6 text-blue-600" />
              <div className="text-center">
                <p className="font-medium">Request Payment</p>
                <p className="text-xs text-gray-500">Expedite customer payment (5% fee)</p>
                <Badge variant="secondary" className="mt-1">
                  Used: {gameState.actionsUsed.requestPayment}
                </Badge>
              </div>
            </Button>

            <Button
              onClick={negotiateTerms}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2"
              disabled={gameState.gameStatus !== 'playing'}
            >
              <FileText className="w-6 h-6 text-purple-600" />
              <div className="text-center">
                <p className="font-medium">Negotiate Terms</p>
                <p className="text-xs text-gray-500">Extend payment terms (2% penalty)</p>
                <Badge variant="secondary" className="mt-1">
                  Used: {gameState.actionsUsed.negotiateTerms}
                </Badge>
              </div>
            </Button>

            <Button
              onClick={getLineOfCredit}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2"
              disabled={gameState.gameStatus !== 'playing' || gameState.lineOfCredit > 0}
            >
              <Building2 className="w-6 h-6 text-green-600" />
              <div className="text-center">
                <p className="font-medium">Line of Credit</p>
                <p className="text-xs text-gray-500">Get $15k credit ($500 setup)</p>
                {gameState.lineOfCredit > 0 && (
                  <Badge variant="secondary" className="mt-1">
                    Available: ${(gameState.lineOfCredit - gameState.creditUsed).toLocaleString()}
                  </Badge>
                )}
              </div>
            </Button>

            <Button
              onClick={delayExpense}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2"
              disabled={gameState.gameStatus !== 'playing'}
            >
              <Clock className="w-6 h-6 text-orange-600" />
              <div className="text-center">
                <p className="font-medium">Delay Expense</p>
                <p className="text-xs text-gray-500">Delay payment (3% penalty)</p>
                <Badge variant="secondary" className="mt-1">
                  Used: {gameState.actionsUsed.delayExpense}
                </Badge>
              </div>
            </Button>
          </div>

          {gameState.lineOfCredit > 0 && gameState.creditUsed < gameState.lineOfCredit && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Emergency Credit Available</h4>
              <div className="flex items-center gap-4">
                <p className="text-sm text-blue-700">
                  Available: ${(gameState.lineOfCredit - gameState.creditUsed).toLocaleString()}
                </p>
                <Button
                  onClick={() => useCredit(5000)}
                  size="sm"
                  disabled={gameState.gameStatus !== 'playing'}
                >
                  Use $5,000
                </Button>
                <Button
                  onClick={() => useCredit(gameState.lineOfCredit - gameState.creditUsed)}
                  size="sm"
                  variant="outline"
                  disabled={gameState.gameStatus !== 'playing'}
                >
                  Use All
                </Button>
              </div>
              {gameState.creditUsed > 0 && (
                <p className="text-xs text-blue-600 mt-2">
                  Daily interest: ${(gameState.creditUsed * gameState.creditInterestRate / 365).toFixed(2)}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Game Controls */}
      <div className="flex justify-center gap-4">
        <Button 
          onClick={advanceDay} 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={gameState.gameStatus !== 'playing'}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Advance Day
        </Button>
        <Button 
          onClick={resetGame} 
          variant="outline" 
          size="lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Challenge
        </Button>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed bottom-4 right-4 space-y-2 z-50">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`
              max-w-sm border-l-4 ${
                notification.type === 'success' ? 'border-l-green-500 bg-green-50' :
                notification.type === 'warning' ? 'border-l-yellow-500 bg-yellow-50' :
                notification.type === 'error' ? 'border-l-red-500 bg-red-50' :
                'border-l-blue-500 bg-blue-50'
              }
            `}>
              <CardContent className="p-3">
                <p className={`text-sm font-medium ${
                  notification.type === 'success' ? 'text-green-800' :
                  notification.type === 'warning' ? 'text-yellow-800' :
                  notification.type === 'error' ? 'text-red-800' :
                  'text-blue-800'
                }`}>
                  {notification.message}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
export default CashFlowChallenge
