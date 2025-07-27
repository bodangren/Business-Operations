/**
 * BusinessTransactionCategorization Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { BusinessTransactionCategorization } from '@/components/drag-drop/BusinessTransactionCategorization'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <BusinessTransactionCategorization />
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
 * OBJECTIVE: Students learn to categorize business transactions into the three 
 * main categories of cash flow activities: Operating, Investing, and Financing.
 * This builds understanding of cash flow statement structure and business activity classification.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Read Transaction Description**: Students see realistic business transactions
 *    with clear descriptions like "Sold inventory to customers for cash" or 
 *    "Purchased equipment for operations".
 * 
 * 2. **Drag and Drop Categorization**: Students drag each transaction card to the
 *    correct category zone:
 *    - OPERATING: Day-to-day business operations (sales, expenses, working capital)
 *    - INVESTING: Purchase/sale of long-term assets (equipment, property, investments)
 *    - FINANCING: Activities with owners/creditors (loans, stock issues, dividends)
 * 
 * 3. **Real-time Feedback**: Visual feedback shows correct/incorrect placements:
 *    - Green border and checkmark for correct categorization
 *    - Red border and X mark for incorrect categorization
 *    - Immediate color coding helps reinforce learning
 * 
 * 4. **Progressive Difficulty**: Transactions start simple and become more nuanced:
 *    - Clear examples: "Received cash from customers" (Operating)
 *    - Challenging cases: "Received cash from sale of equipment" (Investing)
 *    - Edge cases: "Paid interest on loan" (Operating vs Financing debate)
 * 
 * 5. **Score Tracking**: Performance metrics encourage improvement:
 *    - Percentage score updates with each attempt
 *    - Attempt counter tracks learning progression
 *    - High scores (90%+) indicate mastery
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding cash flow statement organization
 * - Distinguishing between operating, investing, and financing activities
 * - Recognizing transaction types in real business contexts
 * - Building foundation for cash flow analysis skills
 * - Preparing for advanced financial statement analysis
 */

'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Building2,
  TrendingUp,
  Banknote,
  Move,
  CheckCircle,
  XCircle,
  RotateCcw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Target,
  Star,
  Award
} from 'lucide-react'

interface Transaction {
  id: string
  description: string
  amount: number
  correctCategory: 'operating' | 'investing' | 'financing'
  currentCategory: 'operating' | 'investing' | 'financing' | 'unassigned'
  isCorrect?: boolean
  difficulty: 'easy' | 'medium' | 'hard'
}

interface GameState {
  transactions: Transaction[]
  score: number
  attempts: number
  completed: boolean
  totalTransactions: number
}

const INITIAL_TRANSACTIONS: Omit<Transaction, 'id' | 'currentCategory' | 'isCorrect'>[] = [
  // Easy Operating Activities
  { description: 'Received cash from customers for sales', amount: 25000, correctCategory: 'operating', difficulty: 'easy' },
  { description: 'Paid employees their monthly salaries', amount: -18000, correctCategory: 'operating', difficulty: 'easy' },
  { description: 'Paid rent for office space', amount: -3000, correctCategory: 'operating', difficulty: 'easy' },
  { description: 'Purchased inventory for resale', amount: -15000, correctCategory: 'operating', difficulty: 'easy' },
  
  // Easy Investing Activities
  { description: 'Purchased new delivery truck for business', amount: -35000, correctCategory: 'investing', difficulty: 'easy' },
  { description: 'Sold old computer equipment', amount: 2500, correctCategory: 'investing', difficulty: 'easy' },
  { description: 'Bought shares in another company', amount: -10000, correctCategory: 'investing', difficulty: 'easy' },
  
  // Easy Financing Activities
  { description: 'Received loan from bank', amount: 50000, correctCategory: 'financing', difficulty: 'easy' },
  { description: 'Owner invested additional cash in business', amount: 20000, correctCategory: 'financing', difficulty: 'easy' },
  { description: 'Paid dividends to shareholders', amount: -8000, correctCategory: 'financing', difficulty: 'easy' },
  
  // Medium Difficulty
  { description: 'Received interest income from investments', amount: 1500, correctCategory: 'operating', difficulty: 'medium' },
  { description: 'Paid interest on business loan', amount: -2400, correctCategory: 'operating', difficulty: 'medium' },
  { description: 'Purchased patent rights', amount: -25000, correctCategory: 'investing', difficulty: 'medium' },
  { description: 'Received proceeds from insurance on damaged equipment', amount: 12000, correctCategory: 'investing', difficulty: 'medium' },
  
  // Hard Difficulty
  { description: 'Paid principal payment on mortgage loan', amount: -5000, correctCategory: 'financing', difficulty: 'hard' },
  { description: 'Received cash from sale of subsidiary company', amount: 75000, correctCategory: 'investing', difficulty: 'hard' },
]

const CATEGORY_DEFINITIONS = {
  operating: {
    title: 'Operating Activities',
    icon: TrendingUp,
    color: 'blue',
    description: 'Day-to-day business operations',
    examples: ['Sales to customers', 'Employee salaries', 'Rent payments', 'Inventory purchases', 'Interest payments']
  },
  investing: {
    title: 'Investing Activities',
    icon: Building2,
    color: 'green',
    description: 'Purchase/sale of long-term assets',
    examples: ['Equipment purchases', 'Property sales', 'Investment securities', 'Patent acquisitions', 'Asset disposals']
  },
  financing: {
    title: 'Financing Activities',
    icon: Banknote,
    color: 'purple',
    description: 'Activities with owners and creditors',
    examples: ['Bank loans', 'Owner investments', 'Dividend payments', 'Stock issues', 'Loan repayments']
  }
}

export function BusinessTransactionCategorization() {
  const [gameState, setGameState] = useState<GameState>({
    transactions: INITIAL_TRANSACTIONS.map((transaction, index) => ({
      ...transaction,
      id: `transaction-${index}`,
      currentCategory: 'unassigned',
      isCorrect: undefined
    })),
    score: 0,
    attempts: 0,
    completed: false,
    totalTransactions: INITIAL_TRANSACTIONS.length
  })

  const [showInstructions, setShowInstructions] = useState(false)
  const [draggedTransaction, setDraggedTransaction] = useState<string | null>(null)

  const handleDragStart = useCallback((e: React.DragEvent, transactionId: string) => {
    setDraggedTransaction(transactionId)
    e.dataTransfer.setData('text/plain', transactionId)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent, category: 'operating' | 'investing' | 'financing') => {
    e.preventDefault()
    const transactionId = e.dataTransfer.getData('text/plain')
    
    setGameState(prev => ({
      ...prev,
      transactions: prev.transactions.map(transaction =>
        transaction.id === transactionId
          ? { 
              ...transaction, 
              currentCategory: category,
              isCorrect: transaction.correctCategory === category
            }
          : transaction
      )
    }))
    
    setDraggedTransaction(null)
  }, [])

  const handleDragEnd = useCallback(() => {
    setDraggedTransaction(null)
  }, [])

  const checkAnswers = useCallback(() => {
    const assignedTransactions = gameState.transactions.filter(t => t.currentCategory !== 'unassigned')
    if (assignedTransactions.length === 0) return

    const correctCount = assignedTransactions.filter(t => t.isCorrect).length
    const score = Math.round((correctCount / assignedTransactions.length) * 100)
    const completed = assignedTransactions.length === gameState.totalTransactions && score === 100

    setGameState(prev => ({
      ...prev,
      score,
      attempts: prev.attempts + 1,
      completed
    }))
  }, [gameState])

  const resetGame = useCallback(() => {
    setGameState({
      transactions: INITIAL_TRANSACTIONS.map((transaction, index) => ({
        ...transaction,
        id: `transaction-${index}`,
        currentCategory: 'unassigned',
        isCorrect: undefined
      })),
      score: 0,
      attempts: 0,
      completed: false,
      totalTransactions: INITIAL_TRANSACTIONS.length
    })
  }, [])

  const unassignedTransactions = gameState.transactions.filter(t => t.currentCategory === 'unassigned')
  const operatingTransactions = gameState.transactions.filter(t => t.currentCategory === 'operating')
  const investingTransactions = gameState.transactions.filter(t => t.currentCategory === 'investing')
  const financingTransactions = gameState.transactions.filter(t => t.currentCategory === 'financing')
  const assignedCount = gameState.totalTransactions - unassignedTransactions.length

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            Business Transaction Categorization
          </CardTitle>
          <CardDescription className="text-lg">
            Drag transactions to their correct cash flow category: Operating, Investing, or Financing
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
              How to Play Business Transaction Categorization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Objective
              </h4>
              <p className="text-blue-700">
                Learn to categorize business transactions into the three main cash flow categories. 
                This skill is essential for understanding how businesses generate and use cash in their operations.
              </p>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📋 Step-by-Step Instructions</h4>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li><strong>Read each transaction</strong> carefully in the "Unassigned Transactions" section</li>
                <li><strong>Drag the transaction card</strong> to the category you think is correct</li>
                <li><strong>Drop it in the appropriate zone</strong>: Operating, Investing, or Financing</li>
                <li><strong>Continue until all transactions</strong> are categorized</li>
                <li><strong>Click "Check Answers"</strong> to see your score and correct/incorrect classifications</li>
                <li><strong>Review mistakes</strong> and try again to improve your understanding</li>
              </ol>
            </div>

            {/* Categories Explanation */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">💡 Cash Flow Categories</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(CATEGORY_DEFINITIONS).map(([key, category]) => (
                  <div key={key} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <category.icon className={`w-5 h-5 text-${category.color}-600`} />
                      <h5 className="font-semibold">{category.title}</h5>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <div>
                      <h6 className="font-medium text-xs text-gray-800 mb-1">Examples:</h6>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {category.examples.map((example, index) => (
                          <li key={index}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty Levels */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">⭐ Difficulty Levels</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-green-600" />
                    <h5 className="font-medium text-green-800">Easy</h5>
                  </div>
                  <p className="text-sm text-green-700">Clear, straightforward transactions with obvious categories</p>
                  <p className="text-xs text-green-600 mt-1">Example: "Received cash from customers"</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-600" />
                    <Star className="w-4 h-4 text-yellow-600" />
                    <h5 className="font-medium text-yellow-800">Medium</h5>
                  </div>
                  <p className="text-sm text-yellow-700">Requires understanding of business context and accounting rules</p>
                  <p className="text-xs text-yellow-600 mt-1">Example: "Paid interest on business loan"</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-red-600" />
                    <Star className="w-4 h-4 text-red-600" />
                    <Star className="w-4 h-4 text-red-600" />
                    <h5 className="font-medium text-red-800">Hard</h5>
                  </div>
                  <p className="text-sm text-red-700">Complex transactions that might seem to fit multiple categories</p>
                  <p className="text-xs text-red-600 mt-1">Example: "Paid principal on mortgage"</p>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🏆 Success Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Operating:</strong> Focus on day-to-day business activities and revenue generation</li>
                <li>• <strong>Investing:</strong> Look for purchases/sales of long-term assets and investments</li>
                <li>• <strong>Financing:</strong> Identify interactions with owners (equity) and creditors (debt)</li>
                <li>• <strong>Interest payments</strong> are usually Operating, but loan principal payments are Financing</li>
                <li>• <strong>Equipment purchases</strong> are Investing, but inventory purchases are Operating</li>
                <li>• When unsure, think: "Is this part of daily operations, asset investment, or funding?"</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Completion Banner */}
      {gameState.completed && (
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Perfect Score!</h3>
            </div>
            <p className="text-lg text-green-700">
              Congratulations! You correctly categorized all {gameState.totalTransactions} transactions. 
              You now understand the three main cash flow categories!
            </p>
          </CardContent>
        </Card>
      )}

      {/* Score Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-purple-700">Score</p>
            <p className="text-2xl font-bold text-purple-800">{gameState.score}%</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <RotateCcw className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-blue-700">Attempts</p>
            <p className="text-2xl font-bold text-blue-800">{gameState.attempts}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm font-medium text-green-700">Assigned</p>
            <p className="text-2xl font-bold text-green-800">{assignedCount}/{gameState.totalTransactions}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm font-medium text-orange-700">Progress</p>
            <p className="text-2xl font-bold text-orange-800">
              {Math.round((assignedCount / gameState.totalTransactions) * 100)}%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Game Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Unassigned Transactions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Move className="w-5 h-5 text-gray-600" />
              Unassigned Transactions
            </CardTitle>
            <CardDescription>
              Drag these to the correct category
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {unassignedTransactions.length === 0 ? (
              <p className="text-gray-500 text-center py-8">All transactions assigned!</p>
            ) : (
              unassignedTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, transaction.id)}
                  onDragEnd={handleDragEnd}
                  className={`
                    p-4 bg-white border-2 border-dashed border-gray-300 rounded-lg cursor-grab 
                    hover:border-blue-400 hover:bg-blue-50 transition-all duration-200
                    ${draggedTransaction === transaction.id ? 'opacity-50 transform rotate-2' : ''}
                  `}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-gray-800 leading-tight">
                      {transaction.description}
                    </p>
                    <Badge 
                      variant="outline" 
                      className={`
                        ml-2 text-xs
                        ${transaction.difficulty === 'easy' ? 'border-green-500 text-green-700' :
                          transaction.difficulty === 'medium' ? 'border-yellow-500 text-yellow-700' :
                          'border-red-500 text-red-700'}
                      `}
                    >
                      {transaction.difficulty}
                    </Badge>
                  </div>
                  <p className={`text-lg font-bold ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Category Drop Zones */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Operating Activities */}
          <Card 
            className="border-2 border-blue-200 bg-blue-50"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'operating')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                <TrendingUp className="w-5 h-5" />
                Operating Activities
              </CardTitle>
              <CardDescription className="text-blue-600">
                Day-to-day business operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 min-h-[300px]">
              {operatingTransactions.length === 0 ? (
                <div className="flex items-center justify-center h-32 border-2 border-dashed border-blue-300 rounded-lg">
                  <p className="text-blue-500 text-sm">Drop operating transactions here</p>
                </div>
              ) : (
                operatingTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200
                      ${transaction.isCorrect === true ? 'bg-green-100 border-green-400' :
                        transaction.isCorrect === false ? 'bg-red-100 border-red-400' :
                        'bg-white border-blue-200'}
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{transaction.description}</p>
                        <p className={`text-md font-bold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                        </p>
                      </div>
                      {transaction.isCorrect !== undefined && (
                        <div className="ml-2">
                          {transaction.isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Investing Activities */}
          <Card 
            className="border-2 border-green-200 bg-green-50"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'investing')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                <Building2 className="w-5 h-5" />
                Investing Activities
              </CardTitle>
              <CardDescription className="text-green-600">
                Purchase/sale of long-term assets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 min-h-[300px]">
              {investingTransactions.length === 0 ? (
                <div className="flex items-center justify-center h-32 border-2 border-dashed border-green-300 rounded-lg">
                  <p className="text-green-500 text-sm">Drop investing transactions here</p>
                </div>
              ) : (
                investingTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200
                      ${transaction.isCorrect === true ? 'bg-green-100 border-green-400' :
                        transaction.isCorrect === false ? 'bg-red-100 border-red-400' :
                        'bg-white border-green-200'}
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{transaction.description}</p>
                        <p className={`text-md font-bold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                        </p>
                      </div>
                      {transaction.isCorrect !== undefined && (
                        <div className="ml-2">
                          {transaction.isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Financing Activities */}
          <Card 
            className="border-2 border-purple-200 bg-purple-50"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'financing')}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-purple-800">
                <Banknote className="w-5 h-5" />
                Financing Activities
              </CardTitle>
              <CardDescription className="text-purple-600">
                Activities with owners and creditors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 min-h-[300px]">
              {financingTransactions.length === 0 ? (
                <div className="flex items-center justify-center h-32 border-2 border-dashed border-purple-300 rounded-lg">
                  <p className="text-purple-500 text-sm">Drop financing transactions here</p>
                </div>
              ) : (
                financingTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200
                      ${transaction.isCorrect === true ? 'bg-green-100 border-green-400' :
                        transaction.isCorrect === false ? 'bg-red-100 border-red-400' :
                        'bg-white border-purple-200'}
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{transaction.description}</p>
                        <p className={`text-md font-bold ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                        </p>
                      </div>
                      {transaction.isCorrect !== undefined && (
                        <div className="ml-2">
                          {transaction.isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button 
          onClick={checkAnswers}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={assignedCount === 0}
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Check Answers
        </Button>
        <Button 
          onClick={resetGame}
          variant="outline" 
          size="lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Exercise
        </Button>
      </div>
    </div>
  )
}