'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
  HelpCircle,
  LineChart,
  Table2,
  Target,
} from 'lucide-react'

type MarketPosition = 'budget' | 'mid-market' | 'premium'
type GoalMode = 'price' | 'units'
type RiskPlan = 'watch-costs' | 'watch-demand' | 'watch-competitors'

interface Competitor {
  name: string
  price: number
  speed: string
}

interface MarketProfile {
  label: string
  description: string
  startPrice: number
  startUnits: number
}

const COMPETITORS: Competitor[] = [
  { name: 'Northside Web Co.', price: 95, speed: '3 weeks' },
  { name: 'Pixel Harbor', price: 108, speed: '2.5 weeks' },
  { name: 'ClearFrame Studio', price: 122, speed: '2 weeks' },
  { name: 'Brightline Digital', price: 136, speed: '10 days' },
]

const MARKET_PROFILES: Record<MarketPosition, MarketProfile> = {
  budget: {
    label: 'Budget',
    description: 'Lower price, higher sales target',
    startPrice: 98,
    startUnits: 160,
  },
  'mid-market': {
    label: 'Mid-Market',
    description: 'Balanced price and sales target',
    startPrice: 115,
    startUnits: 120,
  },
  premium: {
    label: 'Premium',
    description: 'Higher price, lower sales target',
    startPrice: 136,
    startUnits: 90,
  },
}

const FIXED_COST = 2400
const VARIABLE_COST = 72

const STEPS = [
  { id: 'market', title: 'Step 1: Scan the Market' },
  { id: 'pricing', title: 'Step 2: Price and Profit %' },
  { id: 'profit', title: 'Step 3: Sales and Total Profit' },
  { id: 'goal', title: 'Step 4: Hit a Profit Goal' },
  { id: 'table', title: 'Step 5: Compare Many Scenarios' },
  { id: 'decision', title: 'Step 6: Choose a Strategy and Risk Plan' },
] as const

export function PriceLabCommandCenter() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showInstructions, setShowInstructions] = useState(false)
  const [marketPosition, setMarketPosition] = useState<MarketPosition | null>(null)
  const [price, setPrice] = useState(110)
  const [units, setUnits] = useState(120)
  const [targetProfit, setTargetProfit] = useState(3000)
  const [goalMode, setGoalMode] = useState<GoalMode>('price')
  const [finalStrategy, setFinalStrategy] = useState<MarketPosition | null>(null)
  const [riskPlan, setRiskPlan] = useState<RiskPlan | null>(null)
  const [hasAdjustedPrice, setHasAdjustedPrice] = useState(false)
  const [hasAdjustedUnits, setHasAdjustedUnits] = useState(false)
  const [hasSetTarget, setHasSetTarget] = useState(false)
  const [hasSelectedScenario, setHasSelectedScenario] = useState(false)

  const competitorAveragePrice = useMemo(() => {
    return COMPETITORS.reduce((sum, item) => sum + item.price, 0) / COMPETITORS.length
  }, [])

  const contributionPerJob = useMemo(() => {
    return price - VARIABLE_COST
  }, [price])

  const totalSales = useMemo(() => {
    return price * units
  }, [price, units])

  const totalVariableCost = useMemo(() => {
    return VARIABLE_COST * units
  }, [units])

  const totalCost = useMemo(() => {
    return FIXED_COST + totalVariableCost
  }, [totalVariableCost])

  const currentProfit = useMemo(() => {
    return totalSales - totalCost
  }, [totalSales, totalCost])

  const breakEvenUnits = useMemo(() => {
    if (contributionPerJob <= 0) return Infinity
    return Math.ceil(FIXED_COST / contributionPerJob)
  }, [contributionPerJob])

  const markupPercent = useMemo(() => {
    return ((price - VARIABLE_COST) / VARIABLE_COST) * 100
  }, [price])

  const marginPercent = useMemo(() => {
    return ((price - VARIABLE_COST) / price) * 100
  }, [price])

  const requiredPriceForTarget = useMemo(() => {
    if (units <= 0) return Infinity
    return (targetProfit + FIXED_COST + VARIABLE_COST * units) / units
  }, [targetProfit, units])

  const requiredUnitsForTarget = useMemo(() => {
    if (contributionPerJob <= 0) return Infinity
    return Math.ceil((targetProfit + FIXED_COST) / contributionPerJob)
  }, [targetProfit, contributionPerJob])

  const tablePriceOptions = useMemo(() => {
    const values = [price - 15, price, price + 15]
    return Array.from(new Set(values.map(v => Math.max(80, Math.min(170, Math.round(v)))))).sort((a, b) => a - b)
  }, [price])

  const tableUnitOptions = useMemo(() => {
    const values = [units - 30, units, units + 30]
    return Array.from(new Set(values.map(v => Math.max(40, Math.min(260, Math.round(v)))))).sort((a, b) => a - b)
  }, [units])

  const strategyOutcomes = useMemo(() => {
    const entries = Object.entries(MARKET_PROFILES) as Array<[MarketPosition, MarketProfile]>
    return entries.map(([key, profile]) => {
      const baseProfit = (profile.startPrice - VARIABLE_COST) * profile.startUnits - FIXED_COST
      return {
        key,
        label: profile.label,
        description: profile.description,
        price: profile.startPrice,
        units: profile.startUnits,
        profit: baseProfit,
      }
    })
  }, [])

  const suggestedStrategy = useMemo<MarketPosition>(() => {
    if (price <= competitorAveragePrice - 8) return 'budget'
    if (price >= competitorAveragePrice + 8) return 'premium'
    return 'mid-market'
  }, [price, competitorAveragePrice])

  const projectedProfitAfterRiskPlan = useMemo(() => {
    if (!finalStrategy || !riskPlan) return null

    const base = MARKET_PROFILES[finalStrategy]
    let adjustedPrice = base.startPrice
    let adjustedUnits = base.startUnits
    let adjustedVariableCost = VARIABLE_COST

    if (riskPlan === 'watch-costs') {
      adjustedVariableCost = Math.max(0, VARIABLE_COST - 4)
    }

    if (riskPlan === 'watch-demand') {
      adjustedUnits = base.startUnits + 20
    }

    if (riskPlan === 'watch-competitors') {
      adjustedPrice = Math.max(80, base.startPrice - 5)
    }

    return {
      adjustedPrice,
      adjustedUnits,
      adjustedVariableCost,
      profit: (adjustedPrice - adjustedVariableCost) * adjustedUnits - FIXED_COST,
    }
  }, [finalStrategy, riskPlan])

  const completedCount = useMemo(() => {
    let completed = 0
    if (marketPosition) completed += 1
    if (hasAdjustedPrice) completed += 1
    if (hasAdjustedUnits) completed += 1
    if (hasSetTarget) completed += 1
    if (hasSelectedScenario) completed += 1
    if (finalStrategy && riskPlan) completed += 1
    return completed
  }, [marketPosition, hasAdjustedPrice, hasAdjustedUnits, hasSetTarget, hasSelectedScenario, finalStrategy, riskPlan])

  const previewProgress = Math.round((completedCount / STEPS.length) * 100)
  const stepProgress = Math.round(((currentStep + 1) / STEPS.length) * 100)

  const canGoNext = useMemo(() => {
    if (currentStep === 0) return marketPosition !== null
    return currentStep < STEPS.length - 1
  }, [currentStep, marketPosition])

  const nextStep = () => {
    if (!canGoNext) return
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1))
  }

  const previousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const formatCurrency = (value: number) => {
    if (!Number.isFinite(value)) return 'Not possible'
    return `$${Math.round(value).toLocaleString()}`
  }

  const getProfitColor = (value: number) => {
    if (value > 0) return 'text-green-700'
    if (value < 0) return 'text-red-700'
    return 'text-amber-700'
  }

  const chooseMarket = (position: MarketPosition) => {
    const profile = MARKET_PROFILES[position]
    setMarketPosition(position)
    setPrice(profile.startPrice)
    setUnits(profile.startUnits)
  }

  const renderStepContent = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-4">
          <p className="text-sm text-slate-700">
            Look at competitor prices, then choose a market position. This choice now sets your starting numbers for the next steps.
          </p>
          <div className="rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold">Competitor</th>
                  <th className="text-left px-3 py-2 font-semibold">Typical Price</th>
                  <th className="text-left px-3 py-2 font-semibold">Delivery Time</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map(item => (
                  <tr key={item.name} className="border-t border-slate-200">
                    <td className="px-3 py-2">{item.name}</td>
                    <td className="px-3 py-2">${item.price}</td>
                    <td className="px-3 py-2">{item.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(Object.keys(MARKET_PROFILES) as MarketPosition[]).map(position => (
              <Button
                key={position}
                variant={marketPosition === position ? 'default' : 'outline'}
                onClick={() => chooseMarket(position)}
              >
                {MARKET_PROFILES[position].label}
              </Button>
            ))}
          </div>
          {marketPosition && (
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="pt-4 text-sm text-emerald-900 space-y-1">
                <p>
                  <strong>Impact:</strong> {MARKET_PROFILES[marketPosition].label} set your starting model to
                  {' '}<strong>Price = {formatCurrency(price)}</strong> and <strong>Jobs = {units}</strong>.
                </p>
                <p>
                  These values carry into Steps 2, 3, 4, and 5.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )
    }

    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <p className="text-sm text-slate-700">
            Change price and see exactly how the percentages are calculated.
          </p>
          <div className="space-y-2">
            <Label htmlFor="price-slider">Set price per job: ${price}</Label>
            <input
              id="price-slider"
              type="range"
              min={80}
              max={170}
              step={1}
              value={price}
              onChange={e => {
                setPrice(Number(e.target.value))
                setHasAdjustedPrice(true)
              }}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card className="border-slate-200">
              <CardContent className="pt-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Markup</p>
                <p className="text-slate-700">(Price - Cost) / Cost</p>
                <p className="text-slate-700">({price} - {VARIABLE_COST}) / {VARIABLE_COST}</p>
                <p className="text-lg font-bold text-slate-900">{markupPercent.toFixed(1)}%</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="pt-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Margin</p>
                <p className="text-slate-700">(Price - Cost) / Price</p>
                <p className="text-slate-700">({price} - {VARIABLE_COST}) / {price}</p>
                <p className="text-lg font-bold text-slate-900">{marginPercent.toFixed(1)}%</p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-cyan-200 bg-cyan-50">
            <CardContent className="pt-4 text-sm text-cyan-900">
              Cost per job is fixed at {formatCurrency(VARIABLE_COST)} in this preview. In class, you will build this in Excel so you can change all assumptions.
            </CardContent>
          </Card>
        </div>
      )
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <p className="text-sm text-slate-700">
            Change jobs sold and see total sales, total costs, and final profit.
          </p>
          <div className="space-y-2">
            <Label htmlFor="units-slider">Expected jobs sold: {units}</Label>
            <input
              id="units-slider"
              type="range"
              min={40}
              max={260}
              step={5}
              value={units}
              onChange={e => {
                setUnits(Number(e.target.value))
                setHasAdjustedUnits(true)
              }}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card className="border-slate-200">
              <CardContent className="pt-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Total Sales</p>
                <p className="text-slate-700">Price x Jobs</p>
                <p className="text-slate-700">{price} x {units}</p>
                <p className="text-lg font-bold text-slate-900">{formatCurrency(totalSales)}</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="pt-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Total Variable Cost</p>
                <p className="text-slate-700">Cost per Job x Jobs</p>
                <p className="text-slate-700">{VARIABLE_COST} x {units}</p>
                <p className="text-lg font-bold text-slate-900">{formatCurrency(totalVariableCost)}</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="pt-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Total Cost</p>
                <p className="text-slate-700">Fixed + Variable Cost</p>
                <p className="text-slate-700">{FIXED_COST} + {formatCurrency(totalVariableCost)}</p>
                <p className="text-lg font-bold text-slate-900">{formatCurrency(totalCost)}</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardContent className="pt-4 space-y-1 text-sm">
                <p className="font-semibold text-slate-900">Profit</p>
                <p className="text-slate-700">Total Sales - Total Cost</p>
                <p className="text-slate-700">{formatCurrency(totalSales)} - {formatCurrency(totalCost)}</p>
                <p className={`text-lg font-bold ${getProfitColor(currentProfit)}`}>{formatCurrency(currentProfit)}</p>
              </CardContent>
            </Card>
          </div>
          <Card className="border-slate-200">
            <CardContent className="pt-4 text-sm text-slate-800">
              Break-even jobs = Fixed Cost / (Price - Cost per Job) = {FIXED_COST} / ({price} - {VARIABLE_COST}) =
              {' '}<strong>{Number.isFinite(breakEvenUnits) ? breakEvenUnits : 'Not possible'}</strong>
            </CardContent>
          </Card>
        </div>
      )
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-4">
          <p className="text-sm text-slate-700">
            This step uses your current values from Steps 2 and 3. You set a goal, then solve for a missing number.
          </p>
          <Card className="border-cyan-200 bg-cyan-50">
            <CardContent className="pt-4 text-sm text-cyan-900 space-y-1">
              <p><strong>From previous steps:</strong> Price = {formatCurrency(price)}, Jobs = {units}, Current Profit = {formatCurrency(currentProfit)}</p>
              <p><strong>Same model:</strong> Profit = (Price - Cost per Job) x Jobs - Fixed Cost</p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card className="border-slate-200">
              <CardContent className="pt-4 space-y-3">
                <Label htmlFor="target-profit">Target profit</Label>
                <Input
                  id="target-profit"
                  type="number"
                  min={0}
                  step={100}
                  value={targetProfit}
                  onChange={e => {
                    setTargetProfit(Math.max(0, Number(e.target.value) || 0))
                    setHasSetTarget(true)
                  }}
                />
                <div className="flex gap-2">
                  <Button
                    variant={goalMode === 'price' ? 'default' : 'outline'}
                    onClick={() => setGoalMode('price')}
                    size="sm"
                  >
                    Solve for Price
                  </Button>
                  <Button
                    variant={goalMode === 'units' ? 'default' : 'outline'}
                    onClick={() => setGoalMode('units')}
                    size="sm"
                  >
                    Solve for Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-cyan-200 bg-cyan-50">
              <CardContent className="pt-4 space-y-2 text-sm text-cyan-900">
                {goalMode === 'price' ? (
                  <>
                    <p className="font-semibold">Needed price to hit target</p>
                    <p>({targetProfit} + {FIXED_COST} + ({VARIABLE_COST} x {units})) / {units}</p>
                    <p className="text-2xl font-bold">{formatCurrency(requiredPriceForTarget)}</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold">Needed jobs to hit target</p>
                    <p>({targetProfit} + {FIXED_COST}) / ({price} - {VARIABLE_COST})</p>
                    <p className="text-2xl font-bold">{Number.isFinite(requiredUnitsForTarget) ? requiredUnitsForTarget : 'Not possible'}</p>
                  </>
                )}
                <p className="text-xs">In class, Goal Seek does this instantly inside Excel.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }

    if (currentStep === 4) {
      return (
        <div className="space-y-4">
          <p className="text-sm text-slate-700">
            A scenario table checks many combinations at once. Click any cell to load that scenario into your model.
          </p>
          <Card className="border-slate-200">
            <CardContent className="pt-4 text-sm text-slate-800">
              Rows change price. Columns change jobs. Each cell shows profit for that combo.
            </CardContent>
          </Card>
          <div className="rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Price \ Jobs</th>
                  {tableUnitOptions.map(unit => (
                    <th key={unit} className="px-3 py-2 text-left font-semibold">
                      {unit}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tablePriceOptions.map(priceOption => (
                  <tr key={priceOption} className="border-t border-slate-200">
                    <td className="px-3 py-2 font-medium">${priceOption}</td>
                    {tableUnitOptions.map(unitOption => {
                      const profit = (priceOption - VARIABLE_COST) * unitOption - FIXED_COST
                      const tone =
                        profit > 0
                          ? 'bg-emerald-50 text-emerald-800'
                          : profit < 0
                            ? 'bg-red-50 text-red-800'
                            : 'bg-amber-50 text-amber-800'

                      const isCurrent = priceOption === price && unitOption === units

                      return (
                        <td
                          key={`${priceOption}-${unitOption}`}
                          className={`px-3 py-2 ${tone} ${isCurrent ? 'ring-2 ring-slate-700 ring-inset font-semibold' : ''}`}
                        >
                          <button
                            type="button"
                            className="w-full text-left"
                            aria-label={`Set scenario to price ${priceOption} and jobs ${unitOption}`}
                            onClick={() => {
                              setPrice(priceOption)
                              setUnits(unitOption)
                              setHasSelectedScenario(true)
                            }}
                          >
                            {formatCurrency(profit)}
                          </button>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Green = profit, red = loss. Selected scenario updates Step 6 decisions.
          </p>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-700">
          Use your numbers to choose a strategy. Then pick one risk plan and see its impact.
        </p>
        <Card className="border-cyan-200 bg-cyan-50">
          <CardContent className="pt-4 text-sm text-cyan-900 space-y-1">
            <p><strong>Your current model:</strong> Price {formatCurrency(price)}, Jobs {units}, Profit {formatCurrency(currentProfit)}</p>
            <p><strong>Suggested strategy from current price:</strong> {MARKET_PROFILES[suggestedStrategy].label}</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {strategyOutcomes.map(option => (
            <Card key={option.key} className={`border ${finalStrategy === option.key ? 'border-cyan-500' : 'border-slate-200'}`}>
              <CardContent className="pt-4 space-y-2 text-sm">
                <p className="font-semibold text-slate-900">{option.label}</p>
                <p className="text-slate-600">{option.description}</p>
                <p className="text-slate-700">Price: {formatCurrency(option.price)}</p>
                <p className="text-slate-700">Jobs: {option.units}</p>
                <p className={getProfitColor(option.profit)}>Profit: {formatCurrency(option.profit)}</p>
                <Button
                  size="sm"
                  variant={finalStrategy === option.key ? 'default' : 'outline'}
                  onClick={() => {
                    setFinalStrategy(option.key)
                    setPrice(option.price)
                    setUnits(option.units)
                  }}
                >
                  Choose {option.label}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Button
            variant={riskPlan === 'watch-costs' ? 'default' : 'outline'}
            onClick={() => setRiskPlan('watch-costs')}
            size="sm"
          >
            Watch Costs
          </Button>
          <Button
            variant={riskPlan === 'watch-demand' ? 'default' : 'outline'}
            onClick={() => setRiskPlan('watch-demand')}
            size="sm"
          >
            Watch Demand
          </Button>
          <Button
            variant={riskPlan === 'watch-competitors' ? 'default' : 'outline'}
            onClick={() => setRiskPlan('watch-competitors')}
            size="sm"
          >
            Watch Competitors
          </Button>
        </div>
        {finalStrategy && riskPlan && projectedProfitAfterRiskPlan && (
          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="pt-4 space-y-2 text-sm text-emerald-900">
              <p className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Preview Complete
              </p>
              <p>
                Strategy: <strong>{MARKET_PROFILES[finalStrategy].label}</strong> | Risk plan: <strong>{riskPlan.replace('-', ' ')}</strong>
              </p>
              <p>
                Projected result after risk plan: <strong>{formatCurrency(projectedProfitAfterRiskPlan.profit)}</strong>
              </p>
              <p>
                (Price {formatCurrency(projectedProfitAfterRiskPlan.adjustedPrice)}, Jobs {projectedProfitAfterRiskPlan.adjustedUnits}, Cost per job {formatCurrency(projectedProfitAfterRiskPlan.adjustedVariableCost)})
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card className="bg-gradient-to-r from-cyan-50 to-teal-50 border-cyan-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl flex items-center justify-center gap-2">
            <Compass className="h-7 w-7 text-cyan-700" />
            PriceLab Command Center
          </CardTitle>
          <CardDescription className="text-base">
            A quick preview of Unit 6. Each step changes the next step.
          </CardDescription>
          <div className="mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInstructions(prev => !prev)}
              className="inline-flex items-center gap-2"
            >
              <HelpCircle className="h-4 w-4" />
              How This Preview Works
              {showInstructions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {showInstructions && (
        <Card className="border-cyan-200 bg-cyan-50">
          <CardContent className="pt-6 space-y-2 text-sm text-cyan-900">
            <p>Step 1 picks your starting model.</p>
            <p>Steps 2 and 3 show the math behind the model.</p>
            <p>Step 4 solves for a target using your current model values.</p>
            <p>Step 5 lets you compare many what-if combinations and load one.</p>
            <p>Step 6 asks you to pick a strategy and risk plan based on those results.</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <Card className="border-slate-200">
          <CardContent className="pt-4">
            <p className="text-xs text-slate-500">Current Step</p>
            <p className="font-semibold text-slate-900">{currentStep + 1} of {STEPS.length}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-4">
            <p className="text-xs text-slate-500">Preview Progress</p>
            <p className="font-semibold text-slate-900">{previewProgress}%</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-4">
            <p className="text-xs text-slate-500">Market Choice</p>
            <p className="font-semibold text-slate-900">{marketPosition ? MARKET_PROFILES[marketPosition].label : 'Not set'}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-4">
            <p className="text-xs text-slate-500">Current Profit</p>
            <p className={`font-semibold ${getProfitColor(currentProfit)}`}>{formatCurrency(currentProfit)}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200">
          <CardContent className="pt-4">
            <p className="text-xs text-slate-500">Break-Even Jobs</p>
            <p className="font-semibold text-slate-900">{Number.isFinite(breakEvenUnits) ? breakEvenUnits : 'Not possible'}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-cyan-200">
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <div>
              <CardTitle className="text-xl text-slate-900">{STEPS[currentStep].title}</CardTitle>
              <CardDescription>Unit 6 concept preview checkpoint</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
              {stepProgress}% through steps
            </Badge>
          </div>
          <Progress value={stepProgress} className="h-2" />
        </CardHeader>
        <CardContent className="space-y-5">
          {renderStepContent()}

          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={previousStep} disabled={currentStep === 0}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <Button onClick={nextStep} disabled={!canGoNext || currentStep === STEPS.length - 1}>
              Next
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-slate-50">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900">What This Preview Covers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-700">
          <p className="flex items-start gap-2">
            <Compass className="h-4 w-4 mt-0.5 text-slate-500" />
            Market scan and competitor pricing (Lesson 1)
          </p>
          <p className="flex items-start gap-2">
            <Target className="h-4 w-4 mt-0.5 text-slate-500" />
            Markup, margin, break-even, and CVP math flow (Lessons 2-3)
          </p>
          <p className="flex items-start gap-2">
            <LineChart className="h-4 w-4 mt-0.5 text-slate-500" />
            Goal solving and scenario testing (Lessons 4-6)
          </p>
          <p className="flex items-start gap-2">
            <Table2 className="h-4 w-4 mt-0.5 text-slate-500" />
            Strategy selection, risk planning, and recommendation logic (Lessons 7-10)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PriceLabCommandCenter
