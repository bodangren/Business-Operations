/**
 * CashFlowTimeline Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { CashFlowTimeline } from '@/components/drag-drop-exercises/CashFlowTimeline'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <CashFlowTimeline />
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
 * OBJECTIVE: Students learn to visualize and arrange cash flows on a timeline
 * to understand cash management timing, working capital needs, and liquidity planning.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Drag Cash Flow Items**: Students drag cash inflow and outflow items from 
 *    the source area onto the correct timeline positions (weeks 1-12).
 * 
 * 2. **Visual Timeline**: Students see a horizontal timeline with:
 *    - Week markers (1-12) representing 3 months of business operations
 *    - Drop zones for each week where cash flows can be placed
 *    - Color-coded areas for positive/negative cash positions
 * 
 * 3. **Cash Flow Categories**:
 *    - INFLOWS (green): Customer payments, loans, investments, asset sales
 *    - OUTFLOWS (red): Supplier payments, payroll, rent, loan payments, taxes
 * 
 * 4. **Real-time Analysis**: As students place items, they see:
 *    - Running cash balance calculated week by week
 *    - Cash position indicators (positive/negative)
 *    - Critical weeks highlighted where cash runs low
 * 
 * 5. **Validation & Feedback**: 
 *    - Check answers to validate timeline placement
 *    - See which placements are correct/incorrect
 *    - Get hints about typical business cash flow patterns
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding the timing of business cash flows
 * - Visualizing working capital cycles and cash gaps
 * - Recognizing seasonal patterns in business operations
 * - Planning for cash shortfalls and surpluses
 * - Connecting operational activities to cash management
 * - Strategic timing of major payments and collections
 */

'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle,
  RotateCcw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building,
  Users,
  Truck,
  CreditCard,
  Receipt,
  Banknote
} from 'lucide-react'

interface CashFlowItem {
  id: string
  name: string
  amount: number
  type: 'inflow' | 'outflow'
  category: string
  correctWeek: number
  currentWeek: number | null
  icon: React.ReactNode
  description: string
}

interface WeekPosition {
  week: number
  items: CashFlowItem[]
  netFlow: number
  runningBalance: number
}

const INITIAL_CASH_FLOWS: Omit<CashFlowItem, 'id' | 'currentWeek'>[] = [
  // Inflows
  { name: 'Customer Payment A', amount: 25000, type: 'inflow', category: 'Sales', correctWeek: 2, icon: <Receipt className="w-4 h-4" />, description: 'Large client payment for Q1 services' },
  { name: 'Customer Payment B', amount: 15000, type: 'inflow', category: 'Sales', correctWeek: 5, icon: <Receipt className="w-4 h-4" />, description: 'Regular monthly client payment' },
  { name: 'Equipment Sale', amount: 8000, type: 'inflow', category: 'Asset Sale', correctWeek: 7, icon: <Truck className="w-4 h-4" />, description: 'Sale of old company vehicle' },
  { name: 'Bank Loan', amount: 50000, type: 'inflow', category: 'Financing', correctWeek: 1, icon: <Building className="w-4 h-4" />, description: 'Business expansion loan approval' },
  { name: 'Customer Payment C', amount: 20000, type: 'inflow', category: 'Sales', correctWeek: 9, icon: <Receipt className="w-4 h-4" />, description: 'Quarterly contract payment' },
  { name: 'Invoice Collections', amount: 12000, type: 'inflow', category: 'Sales', correctWeek: 11, icon: <Receipt className="w-4 h-4" />, description: 'Outstanding invoice collections' },

  // Outflows
  { name: 'Supplier Payment', amount: 18000, type: 'outflow', category: 'Operations', correctWeek: 3, icon: <Truck className="w-4 h-4" />, description: 'Quarterly supplier payment for materials' },
  { name: 'Payroll Week 4', amount: 22000, type: 'outflow', category: 'Payroll', correctWeek: 4, icon: <Users className="w-4 h-4" />, description: 'Bi-weekly employee salaries' },
  { name: 'Rent Payment', amount: 8000, type: 'outflow', category: 'Operations', correctWeek: 1, icon: <Building className="w-4 h-4" />, description: 'Monthly office rent payment' },
  { name: 'Payroll Week 6', amount: 22000, type: 'outflow', category: 'Payroll', correctWeek: 6, icon: <Users className="w-4 h-4" />, description: 'Bi-weekly employee salaries' },
  { name: 'Tax Payment', amount: 15000, type: 'outflow', category: 'Taxes', correctWeek: 8, icon: <CreditCard className="w-4 h-4" />, description: 'Quarterly tax payment to IRS' },
  { name: 'Equipment Purchase', amount: 30000, type: 'outflow', category: 'Investment', correctWeek: 10, icon: <Truck className="w-4 h-4" />, description: 'New machinery for production' },
  { name: 'Loan Payment', amount: 5000, type: 'outflow', category: 'Financing', correctWeek: 12, icon: <Banknote className="w-4 h-4" />, description: 'Monthly loan repayment' }
]

const STARTING_CASH = 35000

export function CashFlowTimeline() {
  const [cashFlowItems, setCashFlowItems] = useState<CashFlowItem[]>(
    INITIAL_CASH_FLOWS.map((item, index) => ({
      ...item,
      id: `cashflow-${index}`,
      currentWeek: null
    }))
  )

  const [timelineWeeks] = useState<number[]>(Array.from({ length: 12 }, (_, i) => i + 1))
  const [showInstructions, setShowInstructions] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)

  // Calculate timeline positions and running balances
  const calculateTimelinePositions = useCallback((): WeekPosition[] => {
    const positions: WeekPosition[] = timelineWeeks.map(week => ({
      week,
      items: cashFlowItems.filter(item => item.currentWeek === week),
      netFlow: 0,
      runningBalance: 0
    }))

    // Calculate net flows for each week
    positions.forEach(pos => {
      pos.netFlow = pos.items.reduce((sum, item) => {
        return sum + (item.type === 'inflow' ? item.amount : -item.amount)
      }, 0)
    })

    // Calculate running balances
    let runningBalance = STARTING_CASH
    positions.forEach(pos => {
      runningBalance += pos.netFlow
      pos.runningBalance = runningBalance
    })

    return positions
  }, [cashFlowItems, timelineWeeks])

  const timelinePositions = calculateTimelinePositions()

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId)
    e.dataTransfer.setData('text/plain', itemId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, targetWeek: number) => {
    e.preventDefault()
    const itemId = e.dataTransfer.getData('text/plain')
    
    setCashFlowItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, currentWeek: targetWeek }
        : item
    ))
    
    setDraggedItem(null)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
  }

  const removeItemFromTimeline = (itemId: string) => {
    setCashFlowItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, currentWeek: null }
        : item
    ))
  }

  const checkAnswers = () => {
    setAttempts(prev => prev + 1)
    setShowFeedback(true)
  }

  const resetTimeline = () => {
    setCashFlowItems(prev => prev.map(item => ({ ...item, currentWeek: null })))
    setShowFeedback(false)
    setAttempts(0)
  }

  const getCorrectAnswers = () => {
    setCashFlowItems(prev => prev.map(item => ({ ...item, currentWeek: item.correctWeek })))
    setShowFeedback(true)
  }

  // Calculate score
  const correctPlacements = cashFlowItems.filter(item => 
    item.currentWeek === item.correctWeek
  ).length
  const totalPlacements = cashFlowItems.filter(item => item.currentWeek !== null).length
  const score = totalPlacements > 0 ? Math.round((correctPlacements / cashFlowItems.length) * 100) : 0

  const unplacedItems = cashFlowItems.filter(item => item.currentWeek === null)
  const inflowItems = unplacedItems.filter(item => item.type === 'inflow')
  const outflowItems = unplacedItems.filter(item => item.type === 'outflow')

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Calendar className="w-8 h-8 text-blue-600" />
            Cash Flow Timeline
          </CardTitle>
          <CardDescription className="text-lg">
            Drag cash inflows and outflows to their correct timeline positions to visualize cash management
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
              How to Play Cash Flow Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objective</h4>
              <p className="text-blue-700">
                Arrange cash inflows and outflows on the correct weeks of a 12-week timeline to visualize 
                business cash management patterns and identify potential cash flow challenges.
              </p>
            </div>

            {/* How to Play */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">🎮 How to Play</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-blue-800">Step-by-Step Instructions:</h5>
                  <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                    <li>Review the cash flow items in the source areas below</li>
                    <li>Read each item's description to understand the timing</li>
                    <li>Drag each item to the correct week on the timeline</li>
                    <li>Watch the running cash balance update in real-time</li>
                    <li>Click "Check Answers" to see your score</li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-blue-800">Timeline Features:</h5>
                  <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                    <li>Each week shows net cash flow</li>
                    <li>Running balance is calculated automatically</li>
                    <li>Negative balances are highlighted in red</li>
                    <li>Items can be moved between weeks</li>
                    <li>Click × to remove items from timeline</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">💰 Cash Flow Categories</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <h5 className="font-semibold text-green-800">Cash Inflows (Green)</h5>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Customer payments and invoice collections</li>
                    <li>• Bank loans and financing</li>
                    <li>• Asset sales (equipment, vehicles)</li>
                    <li>• Investment proceeds</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                    <h5 className="font-semibold text-red-800">Cash Outflows (Red)</h5>
                  </div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Supplier and vendor payments</li>
                    <li>• Employee payroll (bi-weekly)</li>
                    <li>• Rent, utilities, and operating expenses</li>
                    <li>• Tax payments and loan repayments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Context */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🏢 Business Context</h4>
              <p className="text-blue-700">
                You're managing cash flow for a growing manufacturing company over 3 months (12 weeks). 
                The company starts with <strong>${STARTING_CASH.toLocaleString()}</strong> in cash. 
                Your goal is to understand when cash flows occur and identify potential cash shortages.
              </p>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💡 Success Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Read descriptions carefully</strong> - They contain timing clues</li>
                <li>• <strong>Think about business cycles</strong> - Payroll is every 2 weeks, rent is monthly</li>
                <li>• <strong>Consider payment terms</strong> - Large customers may pay quarterly</li>
                <li>• <strong>Watch for cash gaps</strong> - When outflows exceed inflows</li>
                <li>• <strong>Note critical payments</strong> - Taxes and loan payments have fixed dates</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Score Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-purple-700 font-medium">Score</p>
            <p className="text-2xl font-bold text-purple-800">{score}%</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-blue-700 font-medium">Attempts</p>
            <p className="text-2xl font-bold text-blue-800">{attempts}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-green-700 font-medium">Placed</p>
            <p className="text-2xl font-bold text-green-800">{totalPlacements}/{cashFlowItems.length}</p>
          </CardContent>
        </Card>

        <Card className={`bg-gradient-to-br ${timelinePositions.some(p => p.runningBalance < 0) ? 'from-red-50 to-red-100 border-red-200' : 'from-emerald-50 to-emerald-100 border-emerald-200'}`}>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              {timelinePositions.some(p => p.runningBalance < 0) ? (
                <AlertCircle className="w-6 h-6 text-red-600" />
              ) : (
                <DollarSign className="w-6 h-6 text-emerald-600" />
              )}
            </div>
            <p className={`text-sm font-medium ${timelinePositions.some(p => p.runningBalance < 0) ? 'text-red-700' : 'text-emerald-700'}`}>
              Cash Status
            </p>
            <p className={`text-2xl font-bold ${timelinePositions.some(p => p.runningBalance < 0) ? 'text-red-800' : 'text-emerald-800'}`}>
              {timelinePositions.some(p => p.runningBalance < 0) ? 'Negative' : 'Positive'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cash Flow Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            12-Week Cash Flow Timeline
          </CardTitle>
          <CardDescription>
            Drag items to their correct week positions. Starting cash: ${STARTING_CASH.toLocaleString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Timeline Header */}
            <div className="grid grid-cols-12 gap-2">
              {timelineWeeks.map(week => (
                <div key={week} className="text-center">
                  <div className="text-xs font-medium text-gray-600 mb-1">Week {week}</div>
                </div>
              ))}
            </div>

            {/* Timeline Drop Zones */}
            <div className="grid grid-cols-12 gap-2">
              {timelinePositions.map(position => (
                <div
                  key={position.week}
                  className="min-h-32 p-2 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, position.week)}
                >
                  {/* Week Items */}
                  <div className="space-y-1">
                    {position.items.map(item => (
                      <div
                        key={item.id}
                        className={`p-2 rounded text-xs cursor-move relative group ${
                          item.type === 'inflow' 
                            ? 'bg-green-100 border border-green-200 text-green-800' 
                            : 'bg-red-100 border border-red-200 text-red-800'
                        } ${showFeedback && item.currentWeek !== item.correctWeek ? 'ring-2 ring-red-400' : ''}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.id)}
                        onDragEnd={handleDragEnd}
                      >
                        <div className="flex items-center gap-1">
                          {item.icon}
                          <span className="flex-1 truncate">{item.name}</span>
                          <button
                            onClick={() => removeItemFromTimeline(item.id)}
                            className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700"
                          >
                            ×
                          </button>
                        </div>
                        <div className="font-semibold">
                          {item.type === 'inflow' ? '+' : '-'}${item.amount.toLocaleString()}
                        </div>
                        {showFeedback && item.currentWeek !== item.correctWeek && (
                          <div className="text-xs text-red-600 mt-1">
                            Should be Week {item.correctWeek}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Week Summary */}
                  {position.items.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <div className={`text-xs font-semibold ${position.netFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        Net: {position.netFlow >= 0 ? '+' : ''}${position.netFlow.toLocaleString()}
                      </div>
                      <div className={`text-xs ${position.runningBalance >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                        Balance: ${position.runningBalance.toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Running Balance Chart */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Running Cash Balance</h4>
              <div className="flex items-end space-x-1 h-20">
                {timelinePositions.map(position => (
                  <div key={position.week} className="flex-1 flex flex-col justify-end">
                    <div 
                      className={`w-full rounded-t ${position.runningBalance >= 0 ? 'bg-green-400' : 'bg-red-400'}`}
                      style={{ 
                        height: `${Math.max(5, Math.abs(position.runningBalance) / 1000)}px`,
                        maxHeight: '60px'
                      }}
                    />
                    <div className="text-xs text-center mt-1">W{position.week}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>Starting: ${STARTING_CASH.toLocaleString()}</span>
                <span>Final: ${timelinePositions[timelinePositions.length - 1]?.runningBalance.toLocaleString() || '0'}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Source Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cash Inflows */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <TrendingUp className="w-5 h-5" />
              Cash Inflows ({inflowItems.length} remaining)
            </CardTitle>
            <CardDescription>Drag these items to the timeline above</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {inflowItems.map(item => (
              <div
                key={item.id}
                className="p-3 bg-green-50 border border-green-200 rounded-lg cursor-move hover:bg-green-100 transition-colors"
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragEnd={handleDragEnd}
              >
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <span className="font-medium text-green-800">{item.name}</span>
                  <Badge variant="outline" className="text-green-700">
                    +${item.amount.toLocaleString()}
                  </Badge>
                </div>
                <p className="text-sm text-green-600">{item.description}</p>
                <p className="text-xs text-green-500 mt-1">Category: {item.category}</p>
              </div>
            ))}
            {inflowItems.length === 0 && (
              <p className="text-center text-gray-500 py-4">All inflow items have been placed on the timeline</p>
            )}
          </CardContent>
        </Card>

        {/* Cash Outflows */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <TrendingDown className="w-5 h-5" />
              Cash Outflows ({outflowItems.length} remaining)
            </CardTitle>
            <CardDescription>Drag these items to the timeline above</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {outflowItems.map(item => (
              <div
                key={item.id}
                className="p-3 bg-red-50 border border-red-200 rounded-lg cursor-move hover:bg-red-100 transition-colors"
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragEnd={handleDragEnd}
              >
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <span className="font-medium text-red-800">{item.name}</span>
                  <Badge variant="outline" className="text-red-700">
                    -${item.amount.toLocaleString()}
                  </Badge>
                </div>
                <p className="text-sm text-red-600">{item.description}</p>
                <p className="text-xs text-red-500 mt-1">Category: {item.category}</p>
              </div>
            ))}
            {outflowItems.length === 0 && (
              <p className="text-center text-gray-500 py-4">All outflow items have been placed on the timeline</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <CheckCircle className="w-5 h-5" />
              Timeline Analysis Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Performance Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Correct Placements:</span>
                    <span className="font-medium">{correctPlacements} / {cashFlowItems.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy Score:</span>
                    <span className="font-bold text-blue-700">{score}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Attempts:</span>
                    <span>{attempts}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Cash Flow Analysis</h4>
                <div className="space-y-1 text-sm">
                  {timelinePositions.some(p => p.runningBalance < 0) ? (
                    <div className="text-red-700">
                      ⚠️ Cash shortfall detected in weeks: {timelinePositions.filter(p => p.runningBalance < 0).map(p => p.week).join(', ')}
                    </div>
                  ) : (
                    <div className="text-green-700">
                      ✅ Positive cash flow maintained throughout the period
                    </div>
                  )}
                  <div>
                    Lowest cash balance: ${Math.min(...timelinePositions.map(p => p.runningBalance)).toLocaleString()}
                  </div>
                  <div>
                    Final cash position: ${timelinePositions[timelinePositions.length - 1]?.runningBalance.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button onClick={checkAnswers} className="bg-blue-600 hover:bg-blue-700">
          Check Answers
        </Button>
        <Button onClick={getCorrectAnswers} variant="outline">
          Show Correct Timeline
        </Button>
        <Button onClick={resetTimeline} variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Timeline
        </Button>
      </div>
    </div>
  )
}
export default CashFlowTimeline
