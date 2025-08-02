/**
 * InventoryFlowDiagram Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import InventoryFlowDiagram from '@/components/drag-drop-exercises/InventoryFlowDiagram'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <InventoryFlowDiagram />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with default inventory transactions and randomization.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn to visualize and arrange inventory costs using FIFO (First-In, First-Out) 
 * and LIFO (Last-In, First-Out) methods, supporting Unit 7's Asset & Inventory Tracker theme.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Visual Inventory Layers**: Students see a warehouse diagram with inventory purchases shown as
 *    stacked layers, each with purchase date, quantity, and unit cost information.
 * 
 * 2. **Drag & Drop Flow Arrangement**: Students drag inventory lots to arrange them in the correct
 *    order for either FIFO or LIFO cost flow assumptions:
 *    - FIFO: First purchased inventory is sold first (oldest costs to COGS)
 *    - LIFO: Last purchased inventory is sold first (newest costs to COGS)
 * 
 * 3. **Cost of Goods Sold Calculation**: As students arrange inventory flow, they see real-time
 *    calculation of COGS based on their arrangement and specified sales quantity.
 * 
 * 4. **Business Context Scenarios**: Students work with realistic business scenarios:
 *    - "Technology retailer selling laptops during price volatility"
 *    - "Café restocking coffee beans with fluctuating commodity prices"
 *    - "Automotive parts dealer managing seasonal demand cycles"
 * 
 * 5. **Method Comparison**: Students can switch between FIFO and LIFO modes to see how the same
 *    inventory transactions result in different COGS and ending inventory values.
 * 
 * 6. **Financial Impact Analysis**: The interface shows:
 *    - Total COGS under each method
 *    - Ending inventory value
 *    - Gross profit impact
 *    - Tax implications of method choice
 * 
 * 7. **Audit Trail Visualization**: Students see a clear audit trail showing which specific
 *    inventory lots were used to fulfill sales orders.
 * 
 * 8. **Immediate Feedback**: When students check their arrangements:
 *    - Correct FIFO/LIFO sequencing turns green with cost calculations
 *    - Incorrect arrangements turn red (students can rearrange to try again)
 *    - Running totals update in real-time
 * 
 * EDUCATIONAL VALUE:
 * ==================
 * - Reinforces inventory valuation principles for financial reporting
 * - Prepares students for Excel array formulas and inventory layer calculations
 * - Connects cost flow assumptions to business strategy and tax planning
 * - Supports advanced financial modeling with method selection dropdowns
 * - Builds foundation for ratio analysis (inventory turnover) and cash flow impact
 * - Demonstrates real auditor scenarios with inventory misvaluation consequences
 */

'use client'

import { useState, useCallback } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Package,
  TrendingUp,
  TrendingDown,
  Calculator,
  CheckCircle,
  XCircle,
  RotateCcw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Warehouse,
  DollarSign,
  Calendar,
  BarChart3,
  AlertTriangle,
  Target,
  ShoppingCart,
  Edit3,
  Hash
} from 'lucide-react'

// Types
interface InventoryLot {
  id: string
  purchaseDate: string
  quantity: number
  unitCost: number
  description: string
  isUsed: boolean
  usedQuantity: number
}

interface BusinessScenario {
  id: string
  name: string
  description: string
  context: string
  salesQuantity: number
  lots: InventoryLot[]
  salesTransactions: SalesTransaction[]
  correctFifoOrder: string[]
  correctLifoOrder: string[]
}

interface SalesTransaction {
  id: string
  date: string
  description: string
  quantityRequested: number
  quantityEntered: number
  isActive: boolean
}

interface FlowDiagramState {
  currentScenario: BusinessScenario
  selectedMethod: 'FIFO' | 'LIFO'
  availableLots: InventoryLot[]
  arrangementZone: InventoryLot[]
  salesTransactions: SalesTransaction[]
  showResults: boolean
  attempts: number
  score: number
}

// Default business scenarios for inventory flow
const DEFAULT_SCENARIOS: BusinessScenario[] = [
  {
    id: 'tech-retailer',
    name: 'TechZone Laptop Sales',
    description: 'Technology retailer managing laptop inventory during market volatility',
    context: 'Your electronics store purchased laptops over 4 months. Laptop prices have been volatile due to chip shortages. You need to fulfill customer orders.',
    salesQuantity: 25,
    lots: [
      {
        id: 'lot-jan',
        purchaseDate: '2024-01-15',
        quantity: 10,
        unitCost: 800,
        description: 'Pre-shortage inventory',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-feb',
        purchaseDate: '2024-02-20',
        quantity: 15,
        unitCost: 850,
        description: 'Price increase begins',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-mar',
        purchaseDate: '2024-03-10',
        quantity: 12,
        unitCost: 920,
        description: 'Peak shortage pricing',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-apr',
        purchaseDate: '2024-04-05',
        quantity: 8,
        unitCost: 880,
        description: 'Slight price recovery',
        isUsed: false,
        usedQuantity: 0
      }
    ],
    salesTransactions: [
      {
        id: 'sale-1',
        date: '2024-04-10',
        description: 'Corporate bulk order for new employees',
        quantityRequested: 18,
        quantityEntered: 18,
        isActive: true
      },
      {
        id: 'sale-2',
        date: '2024-04-15',
        description: 'University student discount sale',
        quantityRequested: 7,
        quantityEntered: 7, 
        isActive: true
      }
    ],
    correctFifoOrder: ['lot-jan', 'lot-feb'],
    correctLifoOrder: ['lot-apr', 'lot-mar']
  },
  {
    id: 'coffee-cafe',
    name: 'Roasted Bean Café',
    description: 'Café managing coffee bean inventory with commodity price fluctuations',
    context: 'Your café stocks premium coffee beans. Global coffee prices have fluctuated significantly due to weather and trade issues. You need to fulfill roasting orders.',
    salesQuantity: 180,
    lots: [
      {
        id: 'lot-batch1',
        purchaseDate: '2024-03-01',
        quantity: 100,
        unitCost: 12.50,
        description: 'Pre-frost pricing',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-batch2',
        purchaseDate: '2024-03-15',
        quantity: 80,
        unitCost: 14.25,
        description: 'Post-frost premium',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-batch3',
        purchaseDate: '2024-03-25',
        quantity: 75,
        unitCost: 15.80,
        description: 'Peak commodity prices',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-batch4',
        purchaseDate: '2024-04-02',
        quantity: 90,
        unitCost: 13.90,
        description: 'Market stabilization',
        isUsed: false,
        usedQuantity: 0
      }
    ],
    salesTransactions: [
      {
        id: 'sale-1',
        date: '2024-04-05',
        description: 'Monthly roasting for retail bags',
        quantityRequested: 120,
        quantityEntered: 120,
        isActive: true
      },
      {
        id: 'sale-2',
        date: '2024-04-10',
        description: 'Wholesale order to local restaurants',
        quantityRequested: 60,
        quantityEntered: 60,
        isActive: true
      }
    ],
    correctFifoOrder: ['lot-batch1', 'lot-batch2'],
    correctLifoOrder: ['lot-batch4', 'lot-batch3']
  },
  {
    id: 'auto-parts',
    name: 'AutoPro Parts Dealer',
    description: 'Automotive parts dealer managing seasonal brake pad inventory',
    context: 'Your auto parts business stocks brake pads. Prices vary seasonally due to demand cycles and raw material costs. You need to fulfill customer orders.',
    salesQuantity: 320,
    lots: [
      {
        id: 'lot-q1',
        purchaseDate: '2024-01-10',
        quantity: 150,
        unitCost: 45.00,
        description: 'Off-season low pricing',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-q2',
        purchaseDate: '2024-02-20',
        quantity: 200,
        unitCost: 48.50,
        description: 'Pre-spring preparation',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-q3',
        purchaseDate: '2024-03-15',
        quantity: 180,
        unitCost: 52.75,
        description: 'Peak season demand',
        isUsed: false,
        usedQuantity: 0
      },
      {
        id: 'lot-q4',
        purchaseDate: '2024-04-01',
        quantity: 120,
        unitCost: 49.25,
        description: 'Post-peak adjustment',
        isUsed: false,
        usedQuantity: 0
      }
    ],
    salesTransactions: [
      {
        id: 'sale-1',
        date: '2024-04-05',
        description: 'Spring service season - auto shops',
        quantityRequested: 200,
        quantityEntered: 200,
        isActive: true
      },
      {
        id: 'sale-2',
        date: '2024-04-12',
        description: 'Fleet maintenance contract',
        quantityRequested: 120,
        quantityEntered: 120,
        isActive: true
      }
    ],
    correctFifoOrder: ['lot-q1', 'lot-q2'],
    correctLifoOrder: ['lot-q4', 'lot-q3']
  }
]

// Helper function to randomize array order
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function InventoryFlowDiagram() {
  const [gameState, setGameState] = useState<FlowDiagramState>(() => {
    const scenario = DEFAULT_SCENARIOS[0]
    return {
      currentScenario: scenario,
      selectedMethod: 'FIFO',
      availableLots: shuffleArray([...scenario.lots]), // Randomize initial order
      arrangementZone: [],
      salesTransactions: [...scenario.salesTransactions],
      showResults: false,
      attempts: 0,
      score: 0
    }
  })

  const [showInstructions, setShowInstructions] = useState(false)
  const [showCalculations, setShowCalculations] = useState(true)

  // Calculate current COGS and ending inventory based on arrangement
  const calculateCosts = useCallback(() => {
    const { arrangementZone, salesTransactions } = gameState
    
    // Calculate total sales quantity from active transactions
    const totalSalesQuantity = salesTransactions
      .filter(tx => tx.isActive)
      .reduce((sum, tx) => sum + tx.quantityEntered, 0)
    
    let remainingToSell = totalSalesQuantity
    let totalCogs = 0
    let usedLots: { lot: InventoryLot; quantityUsed: number }[] = []

    // Process arranged lots in order
    for (const lot of arrangementZone) {
      if (remainingToSell <= 0) break
      
      const quantityToUse = Math.min(remainingToSell, lot.quantity)
      totalCogs += quantityToUse * lot.unitCost
      usedLots.push({ lot, quantityUsed: quantityToUse })
      remainingToSell -= quantityToUse
    }

    // Calculate ending inventory value
    const endingInventoryValue = gameState.currentScenario.lots.reduce((total, lot) => {
      const usedFromThisLot = usedLots.find(ul => ul.lot.id === lot.id)?.quantityUsed || 0
      const remainingQuantity = lot.quantity - usedFromThisLot
      return total + (remainingQuantity * lot.unitCost)
    }, 0)

    const totalInventoryValue = gameState.currentScenario.lots.reduce((total, lot) => 
      total + (lot.quantity * lot.unitCost), 0
    )

    return {
      totalCogs,
      endingInventoryValue,
      totalInventoryValue,
      usedLots,
      remainingToSell,
      totalSalesQuantity
    }
  }, [gameState])

  // Handle drag and drop
  const onDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) return

    setGameState(prev => {
      const newState = { ...prev }

      // Find the lot being moved
      const lot = prev.availableLots.find(l => l.id === draggableId) ||
                  prev.arrangementZone.find(l => l.id === draggableId)
      
      if (!lot) return prev

      // Remove from source
      if (source.droppableId === 'available-lots') {
        newState.availableLots = prev.availableLots.filter(l => l.id !== draggableId)
      } else if (source.droppableId === 'arrangement-zone') {
        newState.arrangementZone = prev.arrangementZone.filter(l => l.id !== draggableId)
      }

      // Add to destination
      if (destination.droppableId === 'available-lots') {
        const newAvailable = [...newState.availableLots]
        newAvailable.splice(destination.index, 0, lot)
        newState.availableLots = newAvailable
      } else if (destination.droppableId === 'arrangement-zone') {
        const newArrangement = [...newState.arrangementZone]
        newArrangement.splice(destination.index, 0, lot)
        newState.arrangementZone = newArrangement
      }

      // Clear results when arrangement changes
      newState.showResults = false

      return newState
    })
  }, [])

  // Update sales transaction quantity
  const updateSalesTransaction = useCallback((transactionId: string, quantity: number) => {
    setGameState(prev => ({
      ...prev,
      salesTransactions: prev.salesTransactions.map(tx =>
        tx.id === transactionId
          ? { ...tx, quantityEntered: Math.max(0, quantity) }
          : tx
      ),
      showResults: false // Clear results when quantities change
    }))
  }, [])

  // Toggle sales transaction active state
  const toggleSalesTransaction = useCallback((transactionId: string) => {
    setGameState(prev => ({
      ...prev,
      salesTransactions: prev.salesTransactions.map(tx =>
        tx.id === transactionId
          ? { ...tx, isActive: !tx.isActive }
          : tx
      ),
      showResults: false
    }))
  }, [])

  // Check arrangement correctness
  const checkArrangement = useCallback(() => {
    const { arrangementZone, currentScenario, selectedMethod, salesTransactions } = gameState
    const correctOrder = selectedMethod === 'FIFO' 
      ? currentScenario.correctFifoOrder 
      : currentScenario.correctLifoOrder

    const totalSalesQuantity = salesTransactions
      .filter(tx => tx.isActive)
      .reduce((sum, tx) => sum + tx.quantityEntered, 0)

    // Check if enough lots are arranged to fulfill the sales quantity
    let totalArrangedQuantity = 0
    for (const lot of arrangementZone) {
      totalArrangedQuantity += lot.quantity
      if (totalArrangedQuantity >= totalSalesQuantity) break
    }

    const isQuantitySufficient = totalArrangedQuantity >= totalSalesQuantity

    // Check if the arrangement matches the correct order
    const arrangedIds = arrangementZone.slice(0, correctOrder.length).map(lot => lot.id)
    const isOrderCorrect = arrangedIds.every((id, index) => id === correctOrder[index])

    const isCorrect = isQuantitySufficient && isOrderCorrect
    const newScore = isCorrect ? 100 : Math.max(0, 100 - (gameState.attempts * 10))

    setGameState(prev => ({
      ...prev,
      showResults: true,
      attempts: prev.attempts + 1,
      score: isCorrect ? newScore : prev.score
    }))
  }, [gameState])

  // Reset the exercise
  const resetExercise = useCallback(() => {
    const scenario = gameState.currentScenario
    setGameState(prev => ({
      ...prev,
      availableLots: shuffleArray([...scenario.lots]), // Randomize on reset
      arrangementZone: [],
      salesTransactions: [...scenario.salesTransactions], // Reset sales transactions
      showResults: false,
      score: 0
    }))
  }, [gameState.currentScenario])

  // Switch scenario
  const switchScenario = useCallback((scenarioId: string) => {
    const scenario = DEFAULT_SCENARIOS.find(s => s.id === scenarioId)
    if (!scenario) return

    setGameState({
      currentScenario: scenario,
      selectedMethod: 'FIFO',
      availableLots: shuffleArray([...scenario.lots]), // Randomize new scenario
      arrangementZone: [],
      salesTransactions: [...scenario.salesTransactions],
      showResults: false,
      attempts: 0,
      score: 0
    })
  }, [])

  // Switch method
  const switchMethod = useCallback((method: 'FIFO' | 'LIFO') => {
    setGameState(prev => ({
      ...prev,
      selectedMethod: method,
      showResults: false
    }))
  }, [])

  const costs = calculateCosts()
  const { currentScenario, selectedMethod, availableLots, arrangementZone, showResults } = gameState

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl">📦</span>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Flow Diagram</h1>
          <span className="text-4xl">🔄</span>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Arrange inventory costs in FIFO or LIFO patterns to understand cost flow assumptions 
          and their impact on financial statements. Essential for Unit 7's inventory valuation strategies.
        </p>
        
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
      </div>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Inventory Flow Diagram
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objective</h4>
              <p className="text-blue-700">
                Learn to arrange inventory costs using FIFO (First-In, First-Out) and LIFO (Last-In, First-Out) methods.
                Understand how different cost flow assumptions impact Cost of Goods Sold and ending inventory values.
              </p>
            </div>
            
            {/* Method Explanations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  📈 FIFO (First-In, First-Out)
                </h5>
                <p className="text-sm text-green-700 mb-2">
                  <strong>Concept:</strong> Oldest inventory costs are used first for COGS
                </p>
                <ul className="text-xs text-green-600 space-y-1">
                  <li>• Matches physical flow for most businesses</li>
                  <li>• In rising prices: Lower COGS, Higher profits</li>
                  <li>• Higher ending inventory values on balance sheet</li>
                  <li>• More current costs remain in inventory</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-100 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  📉 LIFO (Last-In, First-Out)
                </h5>
                <p className="text-sm text-orange-700 mb-2">
                  <strong>Concept:</strong> Newest inventory costs are used first for COGS
                </p>
                <ul className="text-xs text-orange-600 space-y-1">
                  <li>• Matches current costs with current revenues</li>
                  <li>• In rising prices: Higher COGS, Lower profits</li>
                  <li>• Lower ending inventory values on balance sheet</li>
                  <li>• Tax advantages in inflationary periods</li>
                </ul>
              </div>
            </div>
            
            {/* How to Play */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">🎮 How to Play</h4>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li><strong>Choose a Method:</strong> Select FIFO or LIFO at the top</li>
                <li><strong>Study the Scenario:</strong> Review the business context and inventory lots</li>
                <li><strong>Drag Lots:</strong> Arrange inventory lots in the correct order for your chosen method</li>
                <li><strong>Watch Calculations:</strong> See real-time COGS and ending inventory calculations</li>
                <li><strong>Check Your Work:</strong> Click "Check Arrangement" to verify correctness</li>
                <li><strong>Compare Methods:</strong> Switch between FIFO and LIFO to see the difference</li>
              </ol>
            </div>
            
            {/* Business Impact */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💼 Business Impact</h4>
              <p className="text-sm text-blue-700">
                Inventory method choice affects financial statements, taxes, and business decisions. 
                In Unit 7, you'll see how auditors verify proper inventory valuation and help businesses 
                choose methods that align with their cash flow and tax strategies.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Scenario and Method Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Business Scenario</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {DEFAULT_SCENARIOS.map((scenario) => (
                <Button
                  key={scenario.id}
                  variant={currentScenario.id === scenario.id ? "default" : "outline"}
                  size="sm"
                  className="w-full justify-start text-left"
                  onClick={() => switchScenario(scenario.id)}
                >
                  <div>
                    <div className="font-medium text-xs">{scenario.name}</div>
                    <div className="text-xs opacity-70">{scenario.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Inventory Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button
                variant={selectedMethod === 'FIFO' ? "default" : "outline"}
                size="sm"
                className="w-full"
                onClick={() => switchMethod('FIFO')}
              >
                FIFO (First-In, First-Out)
              </Button>
              <Button
                variant={selectedMethod === 'LIFO' ? "default" : "outline"}
                size="sm"
                className="w-full"
                onClick={() => switchMethod('LIFO')}
              >
                LIFO (Last-In, First-Out)
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Current Scenario</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div><strong>Total Sales:</strong> {costs.totalSalesQuantity} units</div>
              <div><strong>Method:</strong> {selectedMethod}</div>
              <div><strong>Arranged:</strong> {arrangementZone.length} lots</div>
              {gameState.attempts > 0 && (
                <div><strong>Score:</strong> {gameState.score}%</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scenario Context */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-lg text-yellow-800">{currentScenario.name}</CardTitle>
          <CardDescription className="text-yellow-700">
            {currentScenario.context}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Sales Transactions */}
      <Card className="bg-orange-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-lg text-orange-800 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Sales Transactions
          </CardTitle>
          <CardDescription className="text-orange-700">
            Edit quantities to see how they affect COGS calculations. Toggle transactions on/off to practice different scenarios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gameState.salesTransactions.map((transaction) => (
              <Card key={transaction.id} className={`border-2 transition-colors ${
                transaction.isActive ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-sm">{transaction.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleSalesTransaction(transaction.id)}
                        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                          transaction.isActive 
                            ? 'bg-green-200 text-green-800' 
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {transaction.isActive ? 'Active' : 'Inactive'}
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3 leading-tight">
                    {transaction.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Label className="text-xs font-medium">Quantity:</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="0"
                        max={transaction.quantityRequested}
                        value={transaction.quantityEntered}
                        onChange={(e) => updateSalesTransaction(transaction.id, parseInt(e.target.value) || 0)}
                        className="w-20 h-8 text-sm"
                        disabled={!transaction.isActive}
                      />
                      <span className="text-xs text-gray-500">
                        / {transaction.quantityRequested} requested
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-white rounded-lg border">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600">Total Sales Quantity</div>
              <div className="text-2xl font-bold text-orange-600">
                {costs.totalSalesQuantity} units
              </div>
              <div className="text-xs text-gray-500 mt-1">
                From {gameState.salesTransactions.filter(tx => tx.isActive).length} active transaction(s)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost Calculations */}
      {showCalculations && (
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-lg text-green-800 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Real-Time Cost Calculations ({selectedMethod})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-sm font-medium text-gray-600">Cost of Goods Sold</div>
                <div className="text-2xl font-bold text-red-600">
                  ${costs.totalCogs.toLocaleString()}
                </div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-sm font-medium text-gray-600">Ending Inventory</div>
                <div className="text-2xl font-bold text-blue-600">
                  ${costs.endingInventoryValue.toLocaleString()}
                </div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-sm font-medium text-gray-600">Total Inventory Value</div>
                <div className="text-2xl font-bold text-purple-600">
                  ${costs.totalInventoryValue.toLocaleString()}
                </div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-sm font-medium text-gray-600">Remaining to Sell</div>
                <div className="text-2xl font-bold text-orange-600">
                  {costs.remainingToSell} units
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Drag and Drop Interface */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Inventory Lots */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Warehouse className="w-5 h-5" />
                Available Inventory Lots
                <Badge variant="secondary">{availableLots.length}</Badge>
              </CardTitle>
              <CardDescription>
                Drag inventory lots to arrange them in {selectedMethod} order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Droppable droppableId="available-lots">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`min-h-[400px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                      snapshot.isDraggingOver 
                        ? 'border-blue-400 bg-blue-50' 
                        : 'border-gray-200'
                    }`}
                  >
                    {availableLots.map((lot, index) => (
                      <Draggable key={lot.id} draggableId={lot.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`mb-3 p-4 bg-white rounded-lg border-2 shadow-sm cursor-move transition-all ${
                              snapshot.isDragging ? 'rotate-2 shadow-lg border-blue-300' : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <span className="font-medium text-sm">{lot.purchaseDate}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {lot.quantity} units
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-gray-600">Unit Cost:</span>
                                <span className="font-semibold text-green-600 ml-1">
                                  ${lot.unitCost.toFixed(2)}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-600">Total Value:</span>
                                <span className="font-semibold text-blue-600 ml-1">
                                  ${(lot.quantity * lot.unitCost).toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2 italic">
                              {lot.description}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CardContent>
          </Card>

          {/* Arrangement Zone */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                {selectedMethod} Cost Flow Arrangement
                <Badge variant="secondary">{arrangementZone.length}</Badge>
              </CardTitle>
              <CardDescription>
                Arrange lots in {selectedMethod === 'FIFO' ? 'chronological' : 'reverse chronological'} order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Droppable droppableId="arrangement-zone">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`min-h-[400px] p-4 rounded-lg border-2 border-dashed transition-colors ${
                      snapshot.isDraggingOver 
                        ? 'border-green-400 bg-green-50' 
                        : 'border-gray-200'
                    }`}
                  >
                    {arrangementZone.length === 0 && (
                      <div className="flex flex-col items-center justify-center h-full text-gray-400">
                        <Package className="w-12 h-12 mb-2" />
                        <p className="text-sm">Drag inventory lots here</p>
                        <p className="text-xs">{selectedMethod} order: {selectedMethod === 'FIFO' ? 'Oldest first' : 'Newest first'}</p>
                      </div>
                    )}
                    {arrangementZone.map((lot, index) => {
                      const isCorrectPosition = showResults && (
                        selectedMethod === 'FIFO' 
                          ? currentScenario.correctFifoOrder.indexOf(lot.id) === index
                          : currentScenario.correctLifoOrder.indexOf(lot.id) === index
                      )
                      
                      return (
                        <Draggable key={lot.id} draggableId={lot.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`mb-3 p-4 bg-white rounded-lg border-2 shadow-sm cursor-move transition-all ${
                                snapshot.isDragging ? 'rotate-2 shadow-lg border-green-300' : 
                                showResults ? (isCorrectPosition ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') :
                                'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1">
                                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                      #{index + 1}
                                    </span>
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <span className="font-medium text-sm">{lot.purchaseDate}</span>
                                  </div>
                                  {showResults && (
                                    isCorrectPosition ? 
                                      <CheckCircle className="w-4 h-4 text-green-600" /> : 
                                      <XCircle className="w-4 h-4 text-red-600" />
                                  )}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {lot.quantity} units
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-gray-600">Unit Cost:</span>
                                  <span className="font-semibold text-green-600 ml-1">
                                    ${lot.unitCost.toFixed(2)}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-600">Total Value:</span>
                                  <span className="font-semibold text-blue-600 ml-1">
                                    ${(lot.quantity * lot.unitCost).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500 mt-2 italic">
                                {lot.description}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CardContent>
          </Card>
        </div>
      </DragDropContext>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => setShowCalculations(!showCalculations)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          {showCalculations ? 'Hide' : 'Show'} Calculations
        </Button>
        
        <Button
          onClick={checkArrangement}
          disabled={arrangementZone.length === 0}
          className="flex items-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Check Arrangement
        </Button>
        
        <Button
          onClick={resetExercise}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>

      {/* Results Summary */}
      {showResults && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Inventory Flow Analysis Results</h3>
              <p className="text-gray-600 mb-4">
                Understanding cost flow assumptions is critical for accurate financial reporting and tax strategy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Method</div>
                  <div className="text-2xl font-bold text-blue-600">{selectedMethod}</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Accuracy Score</div>
                  <div className="text-2xl font-bold text-green-600">{gameState.score}%</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">COGS</div>
                  <div className="text-2xl font-bold text-red-600">${costs.totalCogs.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <div className="font-medium">Attempts</div>
                  <div className="text-2xl font-bold text-orange-600">{gameState.attempts}</div>
                </div>
              </div>
              {gameState.score >= 80 && (
                <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Excellent! You understand {selectedMethod} cost flow.</span>
                  </div>
                </div>
              )}
              {gameState.score < 60 && (
                <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <div className="text-yellow-800">
                    <span className="font-medium">Review the {selectedMethod} method and try again.</span>
                    <div className="text-sm mt-1">
                      {selectedMethod === 'FIFO' ? 'Arrange oldest purchases first.' : 'Arrange newest purchases first.'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}