/**
 * LemonadeStand Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { LemonadeStand } from '@/components/business-simulations/LemonadeStand'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <LemonadeStand />
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
 * OBJECTIVE: Students learn fundamental business concepts through running
 * a lemonade stand: profit/loss, pricing strategy, inventory management,
 * customer satisfaction, and external factors (weather) affecting business.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Monitor Business Dashboard**: Students see current cash ($50 starting),
 *    day counter, total revenue, and profit/loss calculations.
 * 
 * 2. **Purchase Supplies**: Students buy ingredients with different costs:
 *    - LEMONS: $3.00 for 10 lemons (bag)
 *    - SUGAR: $2.00 for 10 units (bag) 
 *    - CUPS: $1.50 for 20 cups (pack)
 * 
 * 3. **Manage Inventory**: Track remaining supplies:
 *    - Monitor current stock levels of lemons, sugar, and cups
 *    - Calculate maximum lemonade cups possible from current inventory
 *    - Balance purchasing decisions with cash flow
 * 
 * 4. **Create Recipe & Set Pricing**:
 *    - Adjust lemons per cup (1-5, affects taste and cost)
 *    - Adjust sugar per cup (0-3, affects taste and cost)
 *    - Set selling price per cup ($0.25-$5.00)
 *    - Receive real-time feedback on recipe quality and pricing strategy
 * 
 * 5. **React to Weather Conditions**: 
 *    - Weather changes daily and affects customer demand:
 *      * ☀️ Sunny: +50% demand boost
 *      * 🔥 Hot: +100% demand boost  
 *      * ☁️ Cloudy: -20% demand reduction
 *      * 🌧️ Rainy: -70% demand reduction
 * 
 * 6. **Daily Sales Simulation**: Click "Start Selling!" to begin:
 *    - Animated sales progress bar shows customers buying
 *    - Real-time updates of cups sold and revenue earned
 *    - Must have sufficient supplies to make lemonade
 * 
 * 7. **Daily Business Reports**: After each sales day:
 *    - Cups sold vs potential demand
 *    - Total revenue for the day
 *    - Cost of goods sold (ingredient costs per cup)
 *    - Daily profit/loss calculation
 *    - Customer satisfaction feedback
 * 
 * 8. **Strategic Optimization**: Students learn to:
 *    - Balance ingredient costs with selling price for profit
 *    - Adjust pricing based on weather forecasts
 *    - Manage cash flow between purchasing and sales
 *    - Optimize recipe for customer satisfaction vs cost
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding revenue vs profit concepts
 * - Price elasticity and demand sensitivity
 * - Cost of Goods Sold (COGS) calculations
 * - Inventory management and cash flow
 * - External factors affecting business (weather = market conditions)
 * - Customer satisfaction and repeat business
 * - Strategic decision-making in uncertain conditions
 * - Basic financial statements: revenue, expenses, profit
 */

'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  DollarSign, 
  Calendar, 
  TrendingUp,
  ShoppingCart,
  Package,
  Coffee,
  Zap,
  Cloud,
  CloudRain,
  Sun,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Play,
  Pause,
  BarChart3,
  Users,
  Smile,
  Frown,
  Meh
} from 'lucide-react'

interface GameState {
  cash: number
  day: number
  revenue: number
  expenses: number
  inventory: {
    lemons: number
    sugar: number
    cups: number
  }
  recipe: {
    lemons: number
    sugar: number
    price: number
  }
  weather: 'sunny' | 'cloudy' | 'rainy' | 'hot'
  customerSatisfaction: number
  isSellingActive: boolean
  dailySales: {
    cupsSold: number
    dailyRevenue: number
    dailyExpenses: number
  }
  gameStatus: 'playing' | 'ended'
}

const SUPPLY_COSTS = {
  lemons: { quantity: 10, cost: 3.00, unit: 'bag' },
  sugar: { quantity: 10, cost: 2.00, unit: 'bag' },
  cups: { quantity: 20, cost: 1.50, unit: 'pack' }
}

const WEATHER_EFFECTS = {
  sunny: { multiplier: 1.5, emoji: '☀️', description: 'Perfect lemonade weather!' },
  hot: { multiplier: 2.0, emoji: '🔥', description: 'Everyone wants cold drinks!' },
  cloudy: { multiplier: 0.8, emoji: '☁️', description: 'Moderate demand expected' },
  rainy: { multiplier: 0.3, emoji: '🌧️', description: 'Few customers today' }
}

const INITIAL_GAME_STATE: GameState = {
  cash: 50,
  day: 1,
  revenue: 0,
  expenses: 0,
  inventory: { lemons: 0, sugar: 0, cups: 0 },
  recipe: { lemons: 2, sugar: 1, price: 1.00 },
  weather: 'sunny',
  customerSatisfaction: 100,
  isSellingActive: false,
  dailySales: { cupsSold: 0, dailyRevenue: 0, dailyExpenses: 0 },
  gameStatus: 'playing'
}

export function LemonadeStand() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE)
  const [showInstructions, setShowInstructions] = useState(false)
  const [notifications, setNotifications] = useState<Array<{
    id: string
    message: string
    type: 'success' | 'warning' | 'error' | 'info'
  }>>([])
  const [salesProgress, setSalesProgress] = useState(0)

  const addNotification = useCallback((message: string, type: 'success' | 'warning' | 'error' | 'info') => {
    const id = Date.now().toString()
    setNotifications(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 4000)
  }, [])

  const buySupply = useCallback((supply: keyof typeof SUPPLY_COSTS) => {
    const supplyCost = SUPPLY_COSTS[supply]
    
    if (gameState.cash < supplyCost.cost) {
      addNotification(`Not enough cash! Need $${supplyCost.cost.toFixed(2)}`, 'error')
      return
    }

    setGameState(prev => ({
      ...prev,
      cash: prev.cash - supplyCost.cost,
      expenses: prev.expenses + supplyCost.cost,
      inventory: {
        ...prev.inventory,
        [supply]: prev.inventory[supply] + supplyCost.quantity
      }
    }))

    addNotification(
      `Bought ${supplyCost.quantity} ${supply} for $${supplyCost.cost.toFixed(2)}`,
      'success'
    )
  }, [gameState.cash, addNotification])

  const updateRecipe = useCallback((field: keyof GameState['recipe'], value: number) => {
    setGameState(prev => ({
      ...prev,
      recipe: {
        ...prev.recipe,
        [field]: value
      }
    }))
  }, [])

  const getRecipeFeedback = useCallback(() => {
    const { lemons, sugar, price } = gameState.recipe
    const totalIngredients = lemons + sugar
    
    if (totalIngredients < 2) {
      return { message: "Recipe too weak - customers won't like it!", color: 'text-red-600', icon: <Frown className="w-4 h-4" /> }
    } else if (totalIngredients > 5) {
      return { message: "Recipe too strong - too expensive to make!", color: 'text-red-600', icon: <Frown className="w-4 h-4" /> }
    } else if (price < 0.5) {
      return { message: "Price too low - you won't make profit!", color: 'text-red-600', icon: <Frown className="w-4 h-4" /> }
    } else if (price > 3) {
      return { message: "Price too high - customers won't buy!", color: 'text-red-600', icon: <Frown className="w-4 h-4" /> }
    } else {
      return { message: "Great recipe and pricing!", color: 'text-green-600', icon: <Smile className="w-4 h-4" /> }
    }
  }, [gameState.recipe])

  const getMaxCupsFromInventory = useCallback(() => {
    const { lemons, sugar, cups } = gameState.inventory
    const { lemons: lemonsPerCup, sugar: sugarPerCup } = gameState.recipe
    
    return Math.min(
      cups,
      Math.floor(lemons / lemonsPerCup),
      sugarPerCup > 0 ? Math.floor(sugar / sugarPerCup) : cups
    )
  }, [gameState.inventory, gameState.recipe])

  const generateRandomWeather = useCallback(() => {
    const weathers = ['sunny', 'cloudy', 'rainy', 'hot'] as const
    return weathers[Math.floor(Math.random() * weathers.length)]
  }, [])

  const simulateSales = useCallback(() => {
    const maxCups = getMaxCupsFromInventory()
    if (maxCups <= 0) {
      addNotification('Not enough supplies to make lemonade!', 'error')
      return
    }

    // Generate new weather for the day
    const newWeather = generateRandomWeather()
    
    setGameState(prev => ({ ...prev, weather: newWeather, isSellingActive: true }))
    setSalesProgress(0)

    // Calculate demand based on weather
    const weatherEffect = WEATHER_EFFECTS[newWeather]
    let demandMultiplier = weatherEffect.multiplier

    // Price sensitivity
    if (gameState.recipe.price > 2) demandMultiplier *= 0.5
    if (gameState.recipe.price < 1) demandMultiplier *= 1.2

    // Recipe quality effect
    const recipeQuality = (gameState.recipe.lemons + gameState.recipe.sugar) / 4
    demandMultiplier *= Math.max(0.3, Math.min(1.5, recipeQuality))

    // Base potential customers
    const potentialCustomers = Math.floor(Math.random() * 50 + 20)
    const actualCustomers = Math.min(maxCups, Math.floor(potentialCustomers * demandMultiplier))

    addNotification(`${weatherEffect.emoji} ${weatherEffect.description}`, 'info')

    // Animate sales progress
    let progress = 0
    let customerCount = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5
      customerCount = Math.floor((progress / 100) * actualCustomers)
      
      setSalesProgress(Math.min(100, progress))
      
      if (progress >= 100) {
        clearInterval(interval)
        completeSales(actualCustomers, maxCups)
      }
    }, 300)

  }, [gameState, getMaxCupsFromInventory, generateRandomWeather, addNotification])

  const completeSales = useCallback((cupsSold: number, maxCups: number) => {
    const dailyRevenue = cupsSold * gameState.recipe.price
    const ingredientCost = cupsSold * (gameState.recipe.lemons * 0.3 + gameState.recipe.sugar * 0.2 + 0.075)

    setGameState(prev => ({
      ...prev,
      revenue: prev.revenue + dailyRevenue,
      inventory: {
        lemons: prev.inventory.lemons - (cupsSold * prev.recipe.lemons),
        sugar: prev.inventory.sugar - (cupsSold * prev.recipe.sugar),
        cups: prev.inventory.cups - cupsSold
      },
      dailySales: {
        cupsSold,
        dailyRevenue,
        dailyExpenses: ingredientCost
      },
      isSellingActive: false
    }))

    // Customer feedback
    if (cupsSold > 30) {
      addNotification('🎉 Amazing sales day! Customers loved your lemonade!', 'success')
    } else if (cupsSold > 15) {
      addNotification('👍 Good sales! Customers were satisfied.', 'success')
    } else {
      addNotification('😕 Slow sales day. Try adjusting your recipe or pricing.', 'warning')
    }

    addNotification(`Sold ${cupsSold} cups for $${dailyRevenue.toFixed(2)}!`, 'success')
  }, [gameState.recipe, addNotification])

  const endDay = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      day: prev.day + 1,
      dailySales: { cupsSold: 0, dailyRevenue: 0, dailyExpenses: 0 }
    }))
    setSalesProgress(0)
  }, [])

  const resetGame = useCallback(() => {
    setGameState(INITIAL_GAME_STATE)
    setSalesProgress(0)
    setNotifications([])
    addNotification('Game reset successfully!', 'info')
  }, [addNotification])

  const profit = gameState.revenue - gameState.expenses
  const recipeFeedback = getRecipeFeedback()
  const maxCups = getMaxCupsFromInventory()
  const weatherInfo = WEATHER_EFFECTS[gameState.weather]
  const costPerCup = gameState.recipe.lemons * 0.3 + gameState.recipe.sugar * 0.2 + 0.075
  const profitPerCup = gameState.recipe.price - costPerCup

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            🍋 Lemonade Stand Tycoon
          </CardTitle>
          <CardDescription className="text-lg">
            Run your lemonade stand and learn about profit, pricing, and customer satisfaction!
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
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-xl text-yellow-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Lemonade Stand Tycoon
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">🎯 Objective</h4>
              <p className="text-yellow-700">
                Run a profitable lemonade stand by managing inventory, creating the perfect recipe, 
                setting optimal prices, and adapting to changing weather conditions!
              </p>
            </div>

            {/* Game Flow */}
            <div>
              <h4 className="font-semibold text-yellow-800 mb-3">🔄 Game Flow</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-yellow-700">1. Purchase Supplies:</h5>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Lemons: $3.00 for 10 lemons</li>
                    <li>• Sugar: $2.00 for 10 units</li>
                    <li>• Cups: $1.50 for 20 cups</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-yellow-700">2. Create Recipe:</h5>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Adjust lemons per cup (1-5)</li>
                    <li>• Adjust sugar per cup (0-3)</li>
                    <li>• Set selling price ($0.25-$5.00)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Weather Effects */}
            <div>
              <h4 className="font-semibold text-yellow-800 mb-3">🌤️ Weather Impact</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.entries(WEATHER_EFFECTS).map(([weather, info]) => (
                  <div key={weather} className="p-2 bg-white rounded border text-center text-xs">
                    <div className="text-lg mb-1">{info.emoji}</div>
                    <div className="font-medium capitalize">{weather}</div>
                    <div className="text-gray-600">
                      {info.multiplier > 1 ? '+' : ''}{((info.multiplier - 1) * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy Tips */}
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Success Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-800 mb-1">Recipe Balance</h5>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Too few ingredients = weak taste</li>
                    <li>• Too many ingredients = high costs</li>
                    <li>• Sweet spot: 2-4 total ingredients</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-1">Pricing Strategy</h5>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Consider weather for pricing</li>
                    <li>• High prices = fewer customers</li>
                    <li>• Low prices = less profit per cup</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-green-700 font-medium">Cash</p>
            <p className={`text-2xl font-bold ${gameState.cash >= 0 ? 'text-green-800' : 'text-red-800'}`}>
              ${gameState.cash.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-blue-700 font-medium">Day</p>
            <p className="text-2xl font-bold text-blue-800">{gameState.day}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-purple-700 font-medium">Total Revenue</p>
            <p className="text-2xl font-bold text-purple-800">
              ${gameState.revenue.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm text-orange-700 font-medium">Profit</p>
            <p className={`text-2xl font-bold ${profit >= 0 ? 'text-orange-800' : 'text-red-800'}`}>
              ${profit.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Weather Display */}
      <Card className="bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl">{weatherInfo.emoji}</div>
            <div>
              <h3 className="text-lg font-semibold text-sky-800 capitalize">
                Today's Weather: {gameState.weather}
              </h3>
              <p className="text-sky-600">{weatherInfo.description}</p>
              <p className="text-sm text-sky-500">
                Customer demand: {weatherInfo.multiplier > 1 ? '+' : ''}{((weatherInfo.multiplier - 1) * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Supply Shopping */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Buy Supplies
            </CardTitle>
            <CardDescription>Purchase ingredients for your lemonade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(SUPPLY_COSTS).map(([supply, info]) => (
              <div key={supply} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium capitalize">{supply} ({info.unit})</div>
                  <div className="text-sm text-gray-600">
                    {info.quantity} units - ${info.cost.toFixed(2)}
                  </div>
                </div>
                <Button
                  size="sm"
                  onClick={() => buySupply(supply as keyof typeof SUPPLY_COSTS)}
                  disabled={gameState.cash < info.cost}
                >
                  Buy
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Inventory */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Inventory
            </CardTitle>
            <CardDescription>Current supplies in stock</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-1">🍋</div>
                <div className="font-semibold">{gameState.inventory.lemons}</div>
                <div className="text-xs text-gray-600">Lemons</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border">
                <div className="text-2xl mb-1">🍬</div>
                <div className="font-semibold">{gameState.inventory.sugar}</div>
                <div className="text-xs text-gray-600">Sugar</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-1">🥤</div>
                <div className="font-semibold">{gameState.inventory.cups}</div>
                <div className="text-xs text-gray-600">Cups</div>
              </div>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded">
              <div className="text-sm text-gray-600">Max cups possible:</div>
              <div className="text-lg font-bold text-gray-800">{maxCups}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recipe & Pricing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            Recipe & Pricing
          </CardTitle>
          <CardDescription>Adjust your lemonade recipe and set the selling price</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="lemons">Lemons per cup</Label>
              <Input
                id="lemons"
                type="number"
                min="1"
                max="5"
                value={gameState.recipe.lemons}
                onChange={(e) => updateRecipe('lemons', parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sugar">Sugar per cup</Label>
              <Input
                id="sugar"
                type="number"
                min="0"
                max="3"
                value={gameState.recipe.sugar}
                onChange={(e) => updateRecipe('sugar', parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price per cup ($)</Label>
              <Input
                id="price"
                type="number"
                min="0.25"
                max="5.00"
                step="0.25"
                value={gameState.recipe.price}
                onChange={(e) => updateRecipe('price', parseFloat(e.target.value))}
              />
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Recipe Feedback</h4>
              <div className={`flex items-center gap-2 ${recipeFeedback.color}`}>
                {recipeFeedback.icon}
                <span className="text-sm">{recipeFeedback.message}</span>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Cost Analysis</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-600">Cost per cup:</span>
                  <span className="ml-2 font-semibold text-red-600">
                    ${costPerCup.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Profit per cup:</span>
                  <span className={`ml-2 font-semibold ${profitPerCup >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${profitPerCup.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sales Section */}
      {gameState.isSellingActive && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Selling Lemonade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={salesProgress} className="h-4" />
              <div className="text-center">
                <div className="text-sm text-blue-600">Sales in progress...</div>
                <div className="text-xs text-blue-500">
                  Customers are trying your lemonade!
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Daily Report */}
      {gameState.dailySales.cupsSold > 0 && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Daily Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">
                  {gameState.dailySales.cupsSold}
                </div>
                <div className="text-sm text-green-600">Cups Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">
                  ${gameState.dailySales.dailyRevenue.toFixed(2)}
                </div>
                <div className="text-sm text-green-600">Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  ${gameState.dailySales.dailyExpenses.toFixed(2)}
                </div>
                <div className="text-sm text-red-600">Expenses</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${(gameState.dailySales.dailyRevenue - gameState.dailySales.dailyExpenses) >= 0 ? 'text-green-800' : 'text-red-800'}`}>
                  ${(gameState.dailySales.dailyRevenue - gameState.dailySales.dailyExpenses).toFixed(2)}
                </div>
                <div className="text-sm text-gray-600">Daily Profit</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Controls */}
      <div className="flex justify-center gap-4">
        <Button 
          onClick={simulateSales}
          size="lg"
          className="bg-yellow-500 hover:bg-yellow-600"
          disabled={gameState.isSellingActive || maxCups <= 0}
        >
          <Play className="w-4 h-4 mr-2" />
          Start Selling!
        </Button>
        
        {gameState.dailySales.cupsSold > 0 && (
          <Button 
            onClick={endDay}
            size="lg"
            variant="outline"
          >
            <Calendar className="w-4 h-4 mr-2" />
            End Day
          </Button>
        )}
        
        <Button 
          onClick={resetGame} 
          variant="outline" 
          size="lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Game
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
export default LemonadeStand
