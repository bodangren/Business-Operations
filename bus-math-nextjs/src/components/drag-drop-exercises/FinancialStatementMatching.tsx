/**
 * FinancialStatementMatching Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { FinancialStatementMatching } from '@/components/drag-drop-exercises/FinancialStatementMatching'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <FinancialStatementMatching />
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
 * OBJECTIVE: Students learn to identify and categorize financial statement line items,
 * understanding which items belong to the Income Statement, Balance Sheet, and Cash Flow Statement.
 * This builds foundational knowledge for financial statement analysis and business accounting.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **View Line Items**: Students see various financial line items like "Sales Revenue", 
 *    "Cash", "Accounts Payable", "Operating Expenses", etc. displayed as draggable cards.
 * 
 * 2. **Drag to Correct Statement**: Students drag each line item to the appropriate 
 *    financial statement drop zone:
 *    - INCOME STATEMENT: Revenue and expense items (Sales, Cost of Goods Sold, Operating Expenses)
 *    - BALANCE SHEET: Assets, liabilities, and equity items (Cash, Equipment, Accounts Payable)
 *    - CASH FLOW STATEMENT: Cash flow activities (Cash from Operations, Cash from Investing)
 * 
 * 3. **Real-time Feedback**: As students drag items:
 *    - Correct placements show green highlighting and positive feedback
 *    - Incorrect placements show red highlighting with helpful hints
 *    - Items can be moved between statements until correct
 * 
 * 4. **Built-in Instructions**: Expandable "How to Play" panel includes:
 *    - Objective explanation and win conditions
 *    - Statement definitions with key characteristics
 *    - Examples of items for each statement type
 *    - Pro tips for remembering categorization rules
 * 
 * 5. **Scoring System**: Students receive:
 *    - Percentage score based on correct placements
 *    - Attempts tracking to encourage improvement
 *    - Success celebration when all items are correctly placed
 * 
 * 6. **Reset & Retry**: Students can reset the exercise to practice multiple times
 *    with the same or shuffled item sets.
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding the purpose and components of each financial statement
 * - Recognition of revenue vs. expense vs. asset vs. liability items
 * - Distinction between operating, investing, and financing activities
 * - Foundation for more advanced financial analysis concepts
 * - Development of accounting vocabulary and categorization skills
 * 
 * EDUCATIONAL CONTEXT:
 * This exercise connects to real-world scenarios students encounter:
 * - Reading company annual reports and financial statements
 * - Understanding business performance through financial data
 * - Preparing for careers in business, accounting, or finance
 * - Making informed investment and business decisions
 */

'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  FileText, 
  Calculator, 
  DollarSign,
  TrendingUp,
  Building2,
  RefreshCw,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Target,
  BookOpen,
  Lightbulb
} from 'lucide-react'

interface LineItem {
  id: string
  name: string
  description: string
  correctStatement: 'income' | 'balance' | 'cashflow'
  category: string
  hint: string
}

interface GameState {
  items: LineItem[]
  placements: {
    income: LineItem[]
    balance: LineItem[]
    cashflow: LineItem[]
    unplaced: LineItem[]
  }
  score: number
  attempts: number
  isComplete: boolean
}

const FINANCIAL_LINE_ITEMS: Omit<LineItem, 'id'>[] = [
  // Income Statement Items
  {
    name: 'Sales Revenue',
    description: 'Money earned from selling products or services',
    correctStatement: 'income',
    category: 'Revenue',
    hint: 'This represents money coming INTO the business from sales'
  },
  {
    name: 'Cost of Goods Sold',
    description: 'Direct costs to produce products sold',
    correctStatement: 'income',
    category: 'Expense',
    hint: 'This is a direct expense that reduces gross profit'
  },
  {
    name: 'Operating Expenses',
    description: 'Day-to-day business expenses like rent and salaries',
    correctStatement: 'income',
    category: 'Expense',
    hint: 'These are ongoing costs to run the business operations'
  },
  {
    name: 'Interest Expense',
    description: 'Cost of borrowing money',
    correctStatement: 'income',
    category: 'Expense',
    hint: 'This reduces net income and appears below operating income'
  },
  {
    name: 'Net Income',
    description: 'Bottom line profit after all expenses',
    correctStatement: 'income',
    category: 'Profit',
    hint: 'This is the final result showing overall profitability'
  },
  
  // Balance Sheet Items
  {
    name: 'Cash',
    description: 'Money on hand and in bank accounts',
    correctStatement: 'balance',
    category: 'Current Asset',
    hint: 'This is the most liquid asset a company owns'
  },
  {
    name: 'Accounts Receivable',
    description: 'Money customers owe to the company',
    correctStatement: 'balance',
    category: 'Current Asset',
    hint: 'This represents future cash the company will collect'
  },
  {
    name: 'Equipment',
    description: 'Long-term physical assets used in business',
    correctStatement: 'balance',
    category: 'Fixed Asset',
    hint: 'This is a long-term asset that helps generate revenue'
  },
  {
    name: 'Accounts Payable',
    description: 'Money the company owes to suppliers',
    correctStatement: 'balance',
    category: 'Current Liability',
    hint: 'This represents money the company must pay soon'
  },
  {
    name: 'Long-term Debt',
    description: 'Loans and debt payable beyond one year',
    correctStatement: 'balance',
    category: 'Long-term Liability',
    hint: 'This is money owed but not due within the current year'
  },
  {
    name: 'Owner\'s Equity',
    description: 'Owner\'s investment and retained earnings',
    correctStatement: 'balance',
    category: 'Equity',
    hint: 'This represents the owner\'s stake in the business'
  },
  
  // Cash Flow Statement Items
  {
    name: 'Cash from Operations',
    description: 'Cash generated from core business activities',
    correctStatement: 'cashflow',
    category: 'Operating Activity',
    hint: 'This shows cash from day-to-day business operations'
  },
  {
    name: 'Cash from Investing',
    description: 'Cash from buying/selling long-term assets',
    correctStatement: 'cashflow',
    category: 'Investing Activity',
    hint: 'This involves purchasing or selling equipment, investments'
  },
  {
    name: 'Cash from Financing',
    description: 'Cash from loans, investments, or stock sales',
    correctStatement: 'cashflow',
    category: 'Financing Activity',
    hint: 'This involves getting money from investors or lenders'
  }
]

export function FinancialStatementMatching() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const itemsWithIds = FINANCIAL_LINE_ITEMS.map((item, index) => ({
      ...item,
      id: `item-${index}`
    }))
    
    // Shuffle items for randomization
    const shuffledItems = [...itemsWithIds].sort(() => Math.random() - 0.5)
    
    return {
      items: shuffledItems,
      placements: {
        income: [],
        balance: [],
        cashflow: [],
        unplaced: shuffledItems
      },
      score: 0,
      attempts: 0,
      isComplete: false
    }
  })

  const [draggedItem, setDraggedItem] = useState<LineItem | null>(null)
  const [showInstructions, setShowInstructions] = useState(false)
  const [feedback, setFeedback] = useState<{
    message: string
    type: 'success' | 'error' | 'info'
  } | null>(null)

  const showFeedback = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    setFeedback({ message, type })
    setTimeout(() => setFeedback(null), 3000)
  }, [])

  const handleDragStart = useCallback((item: LineItem) => {
    setDraggedItem(item)
  }, [])

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null)
  }, [])

  const handleDrop = useCallback((targetStatement: 'income' | 'balance' | 'cashflow') => {
    if (!draggedItem) return

    setGameState(prev => {
      // Remove item from current placement
      const newPlacements = {
        income: prev.placements.income.filter(item => item.id !== draggedItem.id),
        balance: prev.placements.balance.filter(item => item.id !== draggedItem.id),
        cashflow: prev.placements.cashflow.filter(item => item.id !== draggedItem.id),
        unplaced: prev.placements.unplaced.filter(item => item.id !== draggedItem.id)
      }

      // Add to new placement
      newPlacements[targetStatement].push(draggedItem)

      // Check if placement is correct
      const isCorrect = draggedItem.correctStatement === targetStatement
      
      if (isCorrect) {
        showFeedback(`Correct! ${draggedItem.name} belongs in the ${getStatementDisplayName(targetStatement)}`, 'success')
      } else {
        showFeedback(`${draggedItem.name} doesn't belong here. ${draggedItem.hint}`, 'error')
      }

      return {
        ...prev,
        placements: newPlacements
      }
    })
  }, [draggedItem, showFeedback])

  const getStatementDisplayName = (statement: 'income' | 'balance' | 'cashflow') => {
    switch (statement) {
      case 'income': return 'Income Statement'
      case 'balance': return 'Balance Sheet'
      case 'cashflow': return 'Cash Flow Statement'
    }
  }

  const checkAnswers = useCallback(() => {
    const totalItems = gameState.items.length
    let correctCount = 0

    // Count correct placements
    gameState.placements.income.forEach(item => {
      if (item.correctStatement === 'income') correctCount++
    })
    gameState.placements.balance.forEach(item => {
      if (item.correctStatement === 'balance') correctCount++
    })
    gameState.placements.cashflow.forEach(item => {
      if (item.correctStatement === 'cashflow') correctCount++
    })

    const score = Math.round((correctCount / totalItems) * 100)
    const attempts = gameState.attempts + 1
    const isComplete = correctCount === totalItems

    setGameState(prev => ({
      ...prev,
      score,
      attempts,
      isComplete
    }))

    if (isComplete) {
      showFeedback(`🎉 Excellent! You correctly placed all ${totalItems} items!`, 'success')
    } else {
      showFeedback(`You got ${correctCount} out of ${totalItems} correct (${score}%). Keep trying!`, 'info')
    }
  }, [gameState, showFeedback])

  const resetGame = useCallback(() => {
    const shuffledItems = [...gameState.items].sort(() => Math.random() - 0.5)
    
    setGameState(prev => ({
      ...prev,
      placements: {
        income: [],
        balance: [],
        cashflow: [],
        unplaced: shuffledItems
      },
      score: 0,
      isComplete: false
    }))
    
    setFeedback(null)
    showFeedback('Game reset! Try again with a fresh arrangement.', 'info')
  }, [gameState.items, showFeedback])

  const DropZone = ({ 
    statement, 
    title, 
    icon: Icon, 
    description, 
    items 
  }: {
    statement: 'income' | 'balance' | 'cashflow'
    title: string
    icon: React.ComponentType<{ className?: string }>
    description: string
    items: LineItem[]
  }) => (
    <Card className="min-h-[300px] border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent
        className="min-h-[200px] relative"
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(statement)}
      >
        {items.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            Drop items here
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border ${
                  item.correctStatement === statement
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs opacity-75">{item.category}</p>
                  </div>
                  {item.correctStatement === statement ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )

  const DraggableItem = ({ item }: { item: LineItem }) => (
    <div
      draggable
      onDragStart={() => handleDragStart(item)}
      onDragEnd={handleDragEnd}
      className="p-3 bg-white border border-gray-200 rounded-lg cursor-grab hover:shadow-md transition-all hover:border-blue-300 active:cursor-grabbing"
      title={item.description}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
        <Badge variant="outline" className="text-xs">
          {item.category}
        </Badge>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            Financial Statement Matching
          </CardTitle>
          <CardDescription className="text-lg">
            Drag each line item to the correct financial statement. Learn to identify Income Statement, Balance Sheet, and Cash Flow items!
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
              How to Play Financial Statement Matching
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                🎯 Objective
              </h4>
              <p className="text-blue-700">
                Learn to identify which financial line items belong to each of the three main financial statements. 
                Drag each item to the correct statement to score points and master financial statement fundamentals!
              </p>
            </div>

            {/* Win/Lose Conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-1">✅ Win Condition</h5>
                <p className="text-sm text-green-700">Correctly place all {FINANCIAL_LINE_ITEMS.length} line items in their proper financial statements</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-1">📊 Scoring</h5>
                <p className="text-sm text-blue-700">Get percentage score based on correct placements. Aim for 100%!</p>
              </div>
            </div>

            {/* Financial Statements Guide */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                📋 Financial Statements Guide
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-4 h-4 text-purple-600" />
                    <h5 className="font-medium">Income Statement</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Shows revenues and expenses over a period</p>
                  <div className="text-xs text-gray-500">
                    <p><strong>Includes:</strong> Sales Revenue, Cost of Goods Sold, Operating Expenses, Net Income</p>
                    <p><strong>Purpose:</strong> Measures profitability</p>
                  </div>
                </div>
                
                <div className="p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-4 h-4 text-green-600" />
                    <h5 className="font-medium">Balance Sheet</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Shows assets, liabilities, and equity at a point in time</p>
                  <div className="text-xs text-gray-500">
                    <p><strong>Includes:</strong> Cash, Equipment, Accounts Payable, Owner's Equity</p>
                    <p><strong>Formula:</strong> Assets = Liabilities + Equity</p>
                  </div>
                </div>
                
                <div className="p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <h5 className="font-medium">Cash Flow Statement</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Shows cash inflows and outflows by activity type</p>
                  <div className="text-xs text-gray-500">
                    <p><strong>Includes:</strong> Operating, Investing, and Financing Activities</p>
                    <p><strong>Purpose:</strong> Tracks cash movement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                💡 Pro Tips for Success
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="p-2 bg-white rounded border">
                    <p className="text-sm"><strong>Income Statement:</strong> Look for items that show business performance over time (revenues, expenses, profits)</p>
                  </div>
                  <div className="p-2 bg-white rounded border">
                    <p className="text-sm"><strong>Balance Sheet:</strong> Look for items the company owns (assets) or owes (liabilities), plus owner's stake (equity)</p>
                  </div>
                  <div className="p-2 bg-white rounded border">
                    <p className="text-sm"><strong>Cash Flow:</strong> Look for items that specifically mention "Cash from" different business activities</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-sm text-yellow-800"><strong>Remember:</strong> Revenue and expenses = Income Statement</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded border border-green-200">
                    <p className="text-sm text-green-800"><strong>Remember:</strong> Things owned or owed = Balance Sheet</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded border border-blue-200">
                    <p className="text-sm text-blue-800"><strong>Remember:</strong> Cash movements = Cash Flow Statement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Reference */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">📖 Quick Reference Examples</h4>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="p-2 bg-purple-50 rounded border">
                  <h6 className="font-medium text-purple-800 mb-1">Income Statement</h6>
                  <ul className="text-purple-700 space-y-1">
                    <li>• Sales Revenue</li>
                    <li>• Cost of Goods Sold</li>
                    <li>• Operating Expenses</li>
                    <li>• Net Income</li>
                  </ul>
                </div>
                <div className="p-2 bg-green-50 rounded border">
                  <h6 className="font-medium text-green-800 mb-1">Balance Sheet</h6>
                  <ul className="text-green-700 space-y-1">
                    <li>• Cash</li>
                    <li>• Equipment</li>
                    <li>• Accounts Payable</li>
                    <li>• Owner's Equity</li>
                  </ul>
                </div>
                <div className="p-2 bg-blue-50 rounded border">
                  <h6 className="font-medium text-blue-800 mb-1">Cash Flow Statement</h6>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Cash from Operations</li>
                    <li>• Cash from Investing</li>
                    <li>• Cash from Financing</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Complete Message */}
      {gameState.isComplete && (
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Excellent Work!</h3>
            </div>
            <p className="text-lg text-green-700">
              You successfully identified all {FINANCIAL_LINE_ITEMS.length} financial statement items! 
              You now understand the key components of Income Statements, Balance Sheets, and Cash Flow Statements.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Score Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-blue-700 font-medium">Current Score</p>
            <p className="text-2xl font-bold text-blue-800">{gameState.score}%</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-purple-700 font-medium">Attempts</p>
            <p className="text-2xl font-bold text-purple-800">{gameState.attempts}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-green-700 font-medium">Items Remaining</p>
            <p className="text-2xl font-bold text-green-800">{gameState.placements.unplaced.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Unplaced Items */}
      {gameState.placements.unplaced.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Financial Line Items to Classify
            </CardTitle>
            <CardDescription>
              Drag each item to the correct financial statement below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {gameState.placements.unplaced.map((item) => (
                <DraggableItem key={item.id} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Financial Statements Drop Zones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DropZone
          statement="income"
          title="Income Statement"
          icon={Calculator}
          description="Revenue and expense items that show profitability"
          items={gameState.placements.income}
        />
        
        <DropZone
          statement="balance"
          title="Balance Sheet"
          icon={Building2}
          description="Assets, liabilities, and equity at a point in time"
          items={gameState.placements.balance}
        />
        
        <DropZone
          statement="cashflow"
          title="Cash Flow Statement"
          icon={DollarSign}
          description="Cash inflows and outflows by activity type"
          items={gameState.placements.cashflow}
        />
      </div>

      {/* Game Controls */}
      <div className="flex justify-center gap-4">
        <Button 
          onClick={checkAnswers} 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={gameState.placements.unplaced.length > 0}
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Check Answers
        </Button>
        <Button 
          onClick={resetGame} 
          variant="outline" 
          size="lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Exercise
        </Button>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="fixed bottom-4 right-4 z-50">
          <Card className={`
            max-w-sm border-l-4 ${
              feedback.type === 'success' ? 'border-l-green-500 bg-green-50' :
              feedback.type === 'error' ? 'border-l-red-500 bg-red-50' :
              'border-l-blue-500 bg-blue-50'
            }
          `}>
            <CardContent className="p-3">
              <p className={`text-sm font-medium ${
                feedback.type === 'success' ? 'text-green-800' :
                feedback.type === 'error' ? 'text-red-800' :
                'text-blue-800'
              }`}>
                {feedback.message}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}