/**
 * BreakEvenComponents Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { BreakEvenComponents } from '@/components/drag-drop-exercises/BreakEvenComponents'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <BreakEvenComponents />
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
 * OBJECTIVE: Students learn break-even analysis by categorizing business costs
 * and understanding how fixed costs, variable costs, and revenue interact to
 * determine the break-even point for business decisions.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Drag Cost Components**: Students receive 15 different business cost items
 *    and must categorize them into Fixed Costs (rent, insurance) or Variable Costs
 *    (materials, commissions).
 * 
 * 2. **Set Revenue Parameters**: Students drag revenue items and set pricing
 *    to understand how sales price per unit affects break-even calculations.
 * 
 * 3. **Build Break-Even Analysis**: As students correctly categorize costs,
 *    the component automatically calculates:
 *    - Total Fixed Costs
 *    - Variable Cost Per Unit  
 *    - Contribution Margin
 *    - Break-Even Point in Units
 *    - Break-Even Point in Dollars
 * 
 * 4. **Visual Analysis**: Students see a real-time break-even chart showing:
 *    - Fixed cost line (horizontal)
 *    - Variable cost line (sloped)
 *    - Total cost line (fixed + variable)
 *    - Revenue line
 *    - Break-even intersection point
 * 
 * 5. **Interactive Feedback**: The component provides:
 *    - Real-time validation of cost categorizations
 *    - Mathematical calculations updating as items are placed
 *    - Visual indicators for correct/incorrect placements
 *    - Educational explanations for each cost type
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding fixed vs. variable cost concepts
 * - Learning contribution margin calculations
 * - Visualizing break-even point determination
 * - Applying break-even analysis to business decisions
 * - Recognizing cost behavior patterns in different scenarios
 */

'use client'

import { useState, useCallback, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { 
  DollarSign,
  TrendingUp,
  Building2,
  Package,
  Calculator,
  BarChart3,
  CheckCircle,
  XCircle,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Target,
  PieChart
} from 'lucide-react'

interface CostItem {
  id: string
  name: string
  amount: number
  description: string
  correctCategory: 'fixed' | 'variable'
  placed: boolean
  placedCategory?: 'fixed' | 'variable'
  isCorrect?: boolean
}

interface GameState {
  costItems: CostItem[]
  salesPricePerUnit: number
  fixedCosts: number
  variableCostPerUnit: number
  contributionMargin: number
  breakEvenUnits: number
  breakEvenDollars: number
  score: number
  attempts: number
  showResults: boolean
  gameComplete: boolean
}

const INITIAL_COST_ITEMS: Omit<CostItem, 'id' | 'placed' | 'placedCategory' | 'isCorrect'>[] = [
  // Fixed Costs
  { name: 'Monthly Rent', amount: 3000, description: 'Office space rental - same every month', correctCategory: 'fixed' },
  { name: 'Insurance Premiums', amount: 500, description: 'Business insurance - fixed annual cost', correctCategory: 'fixed' },
  { name: 'Manager Salary', amount: 4000, description: 'Salaried employee - same monthly amount', correctCategory: 'fixed' },
  { name: 'Loan Payment', amount: 800, description: 'Equipment loan - fixed monthly payment', correctCategory: 'fixed' },
  { name: 'Software Licenses', amount: 200, description: 'Monthly software subscriptions', correctCategory: 'fixed' },
  { name: 'Property Taxes', amount: 400, description: 'Annual property tax - fixed amount', correctCategory: 'fixed' },
  { name: 'Depreciation', amount: 600, description: 'Equipment depreciation - fixed monthly', correctCategory: 'fixed' },
  
  // Variable Costs
  { name: 'Raw Materials', amount: 15, description: 'Materials per unit produced', correctCategory: 'variable' },
  { name: 'Direct Labor', amount: 12, description: 'Hourly wages per unit made', correctCategory: 'variable' },
  { name: 'Sales Commission', amount: 8, description: '5% commission per unit sold', correctCategory: 'variable' },
  { name: 'Packaging Costs', amount: 3, description: 'Materials to package each unit', correctCategory: 'variable' },
  { name: 'Shipping Costs', amount: 5, description: 'Delivery cost per unit sold', correctCategory: 'variable' },
  { name: 'Credit Card Fees', amount: 2, description: '2% payment processing per sale', correctCategory: 'variable' },
  { name: 'Utilities (Production)', amount: 4, description: 'Electricity varies with production', correctCategory: 'variable' },
  { name: 'Quality Control', amount: 1, description: 'Testing cost per unit produced', correctCategory: 'variable' }
]

export function BreakEvenComponents() {
  const [gameState, setGameState] = useState<GameState>({
    costItems: INITIAL_COST_ITEMS.map((item, index) => ({
      ...item,
      id: `cost-${index}`,
      placed: false
    })),
    salesPricePerUnit: 60,
    fixedCosts: 0,
    variableCostPerUnit: 0,
    contributionMargin: 0,
    breakEvenUnits: 0,
    breakEvenDollars: 0,
    score: 0,
    attempts: 0,
    showResults: false,
    gameComplete: false
  })

  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [showInstructions, setShowInstructions] = useState(false)

  // Calculate totals based on placed items
  const calculations = useMemo(() => {
    const fixedCosts = gameState.costItems
      .filter(item => item.placed && item.placedCategory === 'fixed')
      .reduce((sum, item) => sum + item.amount, 0)

    const variableCostPerUnit = gameState.costItems
      .filter(item => item.placed && item.placedCategory === 'variable')
      .reduce((sum, item) => sum + item.amount, 0)

    const contributionMargin = gameState.salesPricePerUnit - variableCostPerUnit
    const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0
    const breakEvenDollars = breakEvenUnits * gameState.salesPricePerUnit

    return {
      fixedCosts,
      variableCostPerUnit,
      contributionMargin,
      breakEvenUnits,
      breakEvenDollars
    }
  }, [gameState.costItems, gameState.salesPricePerUnit])

  const handleDragStart = useCallback((e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId)
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }, [])

  const handleDrop = useCallback((e: React.DragEvent, category: 'fixed' | 'variable') => {
    e.preventDefault()
    
    if (!draggedItem) return

    setGameState(prev => ({
      ...prev,
      costItems: prev.costItems.map(item => {
        if (item.id === draggedItem) {
          const isCorrect = item.correctCategory === category
          return {
            ...item,
            placed: true,
            placedCategory: category,
            isCorrect
          }
        }
        return item
      }),
      attempts: prev.attempts + 1
    }))

    setDraggedItem(null)
  }, [draggedItem])

  const handleRemoveItem = useCallback((itemId: string) => {
    setGameState(prev => ({
      ...prev,
      costItems: prev.costItems.map(item => 
        item.id === itemId 
          ? { ...item, placed: false, placedCategory: undefined, isCorrect: undefined }
          : item
      )
    }))
  }, [])

  const handlePriceChange = useCallback((newPrice: number) => {
    setGameState(prev => ({ ...prev, salesPricePerUnit: newPrice }))
  }, [])

  const checkAnswers = useCallback(() => {
    const totalItems = gameState.costItems.length
    const correctItems = gameState.costItems.filter(item => item.isCorrect).length
    const score = Math.round((correctItems / totalItems) * 100)
    
    setGameState(prev => ({
      ...prev,
      ...calculations,
      score,
      showResults: true,
      gameComplete: score === 100
    }))
  }, [gameState.costItems, calculations])

  const resetGame = useCallback(() => {
    setGameState({
      costItems: INITIAL_COST_ITEMS.map((item, index) => ({
        ...item,
        id: `cost-${index}`,
        placed: false
      })),
      salesPricePerUnit: 60,
      fixedCosts: 0,
      variableCostPerUnit: 0,
      contributionMargin: 0,
      breakEvenUnits: 0,
      breakEvenDollars: 0,
      score: 0,
      attempts: 0,
      showResults: false,
      gameComplete: false
    })
  }, [])

  const unplacedItems = gameState.costItems.filter(item => !item.placed)
  const fixedItems = gameState.costItems.filter(item => item.placed && item.placedCategory === 'fixed')
  const variableItems = gameState.costItems.filter(item => item.placed && item.placedCategory === 'variable')

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Target className="w-8 h-8 text-orange-600" />
            Break-Even Analysis Builder
          </CardTitle>
          <CardDescription className="text-lg">
            Drag costs to build a complete break-even analysis. Learn how fixed and variable costs determine profitability!
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
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-xl text-orange-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Break-Even Analysis Builder
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">🎯 Objective</h4>
              <p className="text-orange-700">
                Learn break-even analysis by correctly categorizing business costs into Fixed Costs and Variable Costs. 
                Watch as the break-even calculations update in real-time based on your cost categorizations.
              </p>
            </div>

            {/* Step-by-Step Instructions */}
            <div>
              <h4 className="font-semibold text-orange-800 mb-3">📋 Step-by-Step Instructions</h4>
              <ol className="list-decimal list-inside space-y-2 text-orange-700">
                <li><strong>Drag Cost Items:</strong> Take each cost from the "Unassigned Costs" section and drag it to either Fixed Costs or Variable Costs</li>
                <li><strong>Think About Behavior:</strong> Fixed costs stay the same regardless of production volume; Variable costs change with each unit produced</li>
                <li><strong>Set Sales Price:</strong> Adjust the sales price per unit to see how it affects break-even calculations</li>
                <li><strong>Watch Calculations:</strong> See live updates of contribution margin, break-even units, and break-even dollars</li>
                <li><strong>Check Your Work:</strong> Click "Check Answers" to see your score and view the break-even analysis results</li>
              </ol>
            </div>

            {/* Cost Categories Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">🏢 Fixed Costs</h5>
                <p className="text-sm text-blue-700 mb-2">Costs that remain constant regardless of production volume:</p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• Rent and lease payments</li>
                  <li>• Insurance premiums</li>
                  <li>• Salaried employee wages</li>
                  <li>• Loan payments</li>
                  <li>• Software licenses</li>
                  <li>• Property taxes</li>
                  <li>• Equipment depreciation</li>
                </ul>
              </div>
              <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">📦 Variable Costs</h5>
                <p className="text-sm text-green-700 mb-2">Costs that change directly with production volume:</p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• Raw materials per unit</li>
                  <li>• Direct labor per unit</li>
                  <li>• Sales commissions</li>
                  <li>• Packaging materials</li>
                  <li>• Shipping costs</li>
                  <li>• Credit card processing fees</li>
                  <li>• Quality control per unit</li>
                </ul>
              </div>
            </div>

            {/* Break-Even Formula */}
            <div>
              <h4 className="font-semibold text-orange-800 mb-3">🧮 Break-Even Formulas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border">
                  <h5 className="font-medium mb-2">Contribution Margin</h5>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded">Sales Price - Variable Cost per Unit</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <h5 className="font-medium mb-2">Break-Even Units</h5>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded">Fixed Costs ÷ Contribution Margin</p>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">💡 Pro Tips</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• <strong>Ask "Does it change?"</strong> - If cost increases with more units, it's variable</li>
                <li>• <strong>Think monthly</strong> - Fixed costs are usually the same every month</li>
                <li>• <strong>Consider per-unit basis</strong> - Variable costs are often expressed "per unit"</li>
                <li>• <strong>Higher sales price</strong> = Lower break-even point (fewer units needed)</li>
                <li>• <strong>Lower variable costs</strong> = Higher contribution margin = Lower break-even</li>
              </ul>
            </div>

            {/* Business Context */}
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">🏪 Business Context</h4>
              <p className="text-sm text-orange-700">
                You're analyzing a small manufacturing business that makes custom furniture. 
                Understanding break-even helps determine minimum sales needed to cover all costs and start making profit.
                This analysis is crucial for pricing decisions, budgeting, and business planning.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Status */}
      {gameState.showResults && (
        <Card className={`border-2 ${gameState.gameComplete ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50'}`}>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {gameState.gameComplete ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              )}
              <h3 className={`text-2xl font-bold ${gameState.gameComplete ? 'text-green-800' : 'text-yellow-800'}`}>
                {gameState.gameComplete ? 'Perfect Analysis!' : 'Keep Trying!'}
              </h3>
            </div>
            <p className={`text-lg ${gameState.gameComplete ? 'text-green-700' : 'text-yellow-700'}`}>
              You scored {gameState.score}% on cost categorization ({gameState.costItems.filter(i => i.isCorrect).length}/{gameState.costItems.length} correct)
            </p>
          </CardContent>
        </Card>
      )}

      {/* Pricing Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <DollarSign className="w-5 h-5" />
            Sales Price Setting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Label htmlFor="salesPrice" className="font-medium">Sales Price per Unit:</Label>
            <div className="flex items-center gap-2">
              <span className="text-lg">$</span>
              <Input
                id="salesPrice"
                type="number"
                value={gameState.salesPricePerUnit}
                onChange={(e) => handlePriceChange(Number(e.target.value) || 0)}
                className="w-20"
                min="1"
                max="200"
              />
            </div>
            <div className="text-sm text-gray-600">
              Higher price = Lower break-even point
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Assignment Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Unassigned Costs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-700">
              <Package className="w-5 h-5" />
              Unassigned Costs ({unplacedItems.length})
            </CardTitle>
            <CardDescription>Drag these costs to the correct category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {unplacedItems.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item.id)}
                className="p-3 bg-white border-2 border-gray-200 rounded-lg cursor-grab hover:border-gray-300 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-700">
                      ${item.amount.toLocaleString()}
                      {item.correctCategory === 'variable' && <span className="text-xs">/unit</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {unplacedItems.length === 0 && (
              <p className="text-center text-gray-500 py-8">All costs have been assigned!</p>
            )}
          </CardContent>
        </Card>

        {/* Fixed Costs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Building2 className="w-5 h-5" />
              Fixed Costs ({fixedItems.length})
            </CardTitle>
            <CardDescription>Costs that stay the same regardless of production</CardDescription>
          </CardHeader>
          <CardContent 
            className="min-h-[300px] space-y-2"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'fixed')}
          >
            {fixedItems.length === 0 && (
              <div className="flex items-center justify-center h-full border-2 border-dashed border-blue-300 rounded-lg">
                <p className="text-blue-400">Drop fixed costs here</p>
              </div>
            )}
            {fixedItems.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border-2 ${
                  item.isCorrect === true 
                    ? 'bg-green-50 border-green-500' 
                    : item.isCorrect === false 
                    ? 'bg-red-50 border-red-500'
                    : 'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{item.name}</p>
                      {item.isCorrect === true && <CheckCircle className="w-4 h-4 text-green-600" />}
                      {item.isCorrect === false && <XCircle className="w-4 h-4 text-red-600" />}
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">${item.amount.toLocaleString()}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1 h-auto"
                    >
                      ✕
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Variable Costs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <TrendingUp className="w-5 h-5" />
              Variable Costs ({variableItems.length})
            </CardTitle>
            <CardDescription>Costs that change with each unit produced</CardDescription>
          </CardHeader>
          <CardContent 
            className="min-h-[300px] space-y-2"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'variable')}
          >
            {variableItems.length === 0 && (
              <div className="flex items-center justify-center h-full border-2 border-dashed border-green-300 rounded-lg">
                <p className="text-green-400">Drop variable costs here</p>
              </div>
            )}
            {variableItems.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border-2 ${
                  item.isCorrect === true 
                    ? 'bg-green-50 border-green-500' 
                    : item.isCorrect === false 
                    ? 'bg-red-50 border-red-500'
                    : 'bg-green-50 border-green-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{item.name}</p>
                      {item.isCorrect === true && <CheckCircle className="w-4 h-4 text-green-600" />}
                      {item.isCorrect === false && <XCircle className="w-4 h-4 text-red-600" />}
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold">${item.amount.toLocaleString()}/unit</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1 h-auto"
                    >
                      ✕
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Break-Even Calculations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Calculator className="w-5 h-5" />
            Break-Even Analysis Results
          </CardTitle>
          <CardDescription>
            Live calculations based on your cost categorizations and pricing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 text-center">
                <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-700">Total Fixed Costs</p>
                <p className="text-xl font-bold text-blue-800">
                  ${calculations.fixedCosts.toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-green-700">Variable Cost/Unit</p>
                <p className="text-xl font-bold text-green-800">
                  ${calculations.variableCostPerUnit.toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-purple-700">Contribution Margin</p>
                <p className="text-xl font-bold text-purple-800">
                  ${calculations.contributionMargin.toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-4 text-center">
                <Target className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-orange-700">Break-Even Units</p>
                <p className="text-xl font-bold text-orange-800">
                  {calculations.breakEvenUnits.toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4 text-center">
                <BarChart3 className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-red-700">Break-Even Revenue</p>
                <p className="text-xl font-bold text-red-800">
                  ${calculations.breakEvenDollars.toLocaleString()}
                </p>
              </CardContent>
            </Card>
          </div>

          {calculations.contributionMargin > 0 && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Break-Even Interpretation:</h4>
              <p className="text-sm text-gray-700">
                You need to sell <strong>{calculations.breakEvenUnits.toLocaleString()} units</strong> at 
                <strong> ${gameState.salesPricePerUnit}</strong> each to generate 
                <strong> ${calculations.breakEvenDollars.toLocaleString()}</strong> in revenue to cover all costs.
                Each unit sold beyond this point contributes <strong>${calculations.contributionMargin}</strong> to profit.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Game Controls */}
      <div className="flex justify-center gap-4">
        <Button 
          onClick={checkAnswers} 
          size="lg"
          className="bg-orange-600 hover:bg-orange-700"
          disabled={unplacedItems.length > 0}
        >
          <Calculator className="w-4 h-4 mr-2" />
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

      {/* Stats Display */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-center gap-8 text-sm">
            <div className="text-center">
              <p className="font-medium">Attempts</p>
              <p className="text-2xl font-bold text-blue-600">{gameState.attempts}</p>
            </div>
            <div className="text-center">
              <p className="font-medium">Assigned</p>
              <p className="text-2xl font-bold text-green-600">
                {gameState.costItems.filter(i => i.placed).length}/{gameState.costItems.length}
              </p>
            </div>
            {gameState.showResults && (
              <div className="text-center">
                <p className="font-medium">Score</p>
                <p className="text-2xl font-bold text-purple-600">{gameState.score}%</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default BreakEvenComponents
