/**
 * BreakEvenChart Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { BreakEvenChart } from '@/components/charts/BreakEvenChart'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <BreakEvenChart
 *         fixedCosts={10000}
 *         variableCostRate={0.6}
 *         sellingPrice={25}
 *         interactive={true}
 *       />
 *     </div>
 *   )
 * }
 * ```
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn break-even analysis through interactive visualization.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Parameter Adjustment**: Students modify fixed costs, variable cost rate, and selling price using input controls.
 * 2. **Visual Analysis**: Students observe how the revenue and total cost lines intersect at the break-even point.
 * 3. **Breakeven Calculations**: Students see real-time calculations of break-even units, revenue, and contribution margin.
 * 4. **Scenario Testing**: Students experiment with different cost structures to understand business impact.
 * 5. **Interactive Tooltips**: Hover over chart points to see exact values at different production levels.
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding the relationship between fixed costs, variable costs, and revenue
 * - Calculating break-even points in units and dollars
 * - Analyzing contribution margin and its impact on profitability
 * - Visualizing cost-volume-profit relationships
 * - Making informed business decisions based on break-even analysis
 */

'use client'

import { useState, useMemo } from 'react'
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ReferenceLine } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'

interface BreakEvenChartProps {
  fixedCosts?: number
  variableCostRate?: number
  sellingPrice?: number
  interactive?: boolean
  showCard?: boolean
  className?: string
  height?: number
}

interface BreakEvenData {
  units: number
  revenue: number
  totalCosts: number
  profit: number
}

interface BreakEvenResults {
  breakEvenUnits: number
  breakEvenRevenue: number
  contributionMargin: number
  contributionMarginRatio: number
}

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(142, 76%, 36%)"
  },
  totalCosts: {
    label: "Total Costs", 
    color: "hsl(0, 84%, 60%)"
  },
  profit: {
    label: "Profit/Loss",
    color: "hsl(217, 91%, 60%)"
  }
} satisfies ChartConfig

export function BreakEvenChart({
  fixedCosts: initialFixedCosts = 10000,
  variableCostRate: initialVariableCostRate = 0.6,
  sellingPrice: initialSellingPrice = 25,
  interactive = true,
  showCard = true,
  className = "",
  height = 400
}: BreakEvenChartProps) {
  const [fixedCosts, setFixedCosts] = useState(initialFixedCosts)
  const [variableCostRate, setVariableCostRate] = useState(initialVariableCostRate)
  const [sellingPrice, setSellingPrice] = useState(initialSellingPrice)

  // Calculate break-even analysis
  const results: BreakEvenResults = useMemo(() => {
    const contributionMargin = sellingPrice - (sellingPrice * variableCostRate)
    const contributionMarginRatio = contributionMargin / sellingPrice
    const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0
    const breakEvenRevenue = breakEvenUnits * sellingPrice

    return {
      breakEvenUnits,
      breakEvenRevenue,
      contributionMargin,
      contributionMarginRatio
    }
  }, [fixedCosts, variableCostRate, sellingPrice])

  // Generate chart data
  const chartData: BreakEvenData[] = useMemo(() => {
    const maxUnits = Math.max(results.breakEvenUnits * 2, 100)
    const step = Math.ceil(maxUnits / 20)
    const data: BreakEvenData[] = []

    for (let units = 0; units <= maxUnits; units += step) {
      const revenue = units * sellingPrice
      const totalCosts = fixedCosts + (units * sellingPrice * variableCostRate)
      const profit = revenue - totalCosts

      data.push({
        units,
        revenue,
        totalCosts,
        profit
      })
    }

    return data
  }, [fixedCosts, variableCostRate, sellingPrice, results.breakEvenUnits])

  const resetToDefaults = () => {
    setFixedCosts(initialFixedCosts)
    setVariableCostRate(initialVariableCostRate)
    setSellingPrice(initialSellingPrice)
  }

  const chartContent = (
    <div className="space-y-4">
      {interactive && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="fixed-costs">Fixed Costs ($)</Label>
            <Input
              id="fixed-costs"
              type="number"
              value={fixedCosts}
              onChange={(e) => setFixedCosts(Number(e.target.value) || 0)}
              min={0}
              step={100}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="variable-rate">Variable Cost Rate</Label>
            <Input
              id="variable-rate"
              type="number"
              value={variableCostRate}
              onChange={(e) => setVariableCostRate(Number(e.target.value) || 0)}
              min={0}
              max={1}
              step={0.01}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="selling-price">Selling Price ($)</Label>
            <Input
              id="selling-price"
              type="number"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(Number(e.target.value) || 0)}
              min={0}
              step={1}
            />
          </div>
          
          <div className="flex items-end">
            <Button onClick={resetToDefaults} variant="outline" size="sm">
              Reset
            </Button>
          </div>
        </div>
      )}

      <ChartContainer
        config={chartConfig}
        className={`w-full ${className}`}
        style={{ height: `${height}px` }}
      >
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          
          <XAxis 
            dataKey="units"
            className="text-xs"
            label={{ value: 'Units Sold', position: 'insideBottom', offset: -5 }}
          />
          
          <YAxis 
            className="text-xs"
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
          />
          
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatter={(value, name) => [
                  `$${Number(value).toLocaleString()}`,
                  name
                ]}
                labelFormatter={(label) => `Units: ${label}`}
                indicator="dot"
              />
            }
          />
          
          <ChartLegend content={<ChartLegendContent />} />
          
          {/* Break-even point reference line */}
          <ReferenceLine 
            x={results.breakEvenUnits} 
            stroke="hsl(0, 0%, 50%)" 
            strokeDasharray="5 5"
            label={{ value: "Break-Even", position: "top" }}
          />
          
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-revenue)"
            strokeWidth={3}
            dot={false}
            name="Revenue"
          />
          
          <Line
            type="monotone"
            dataKey="totalCosts"
            stroke="var(--color-totalCosts)"
            strokeWidth={3}
            dot={false}
            name="Total Costs"
          />
        </LineChart>
      </ChartContainer>

      {/* Results Display */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="text-center">
          <div className="text-sm text-gray-600">Break-Even Units</div>
          <div className="text-xl font-bold text-gray-900">
            {results.breakEvenUnits.toLocaleString()}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-gray-600">Break-Even Revenue</div>
          <div className="text-xl font-bold text-gray-900">
            ${results.breakEvenRevenue.toLocaleString()}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-gray-600">Contribution Margin</div>
          <div className="text-xl font-bold text-gray-900">
            ${results.contributionMargin.toFixed(2)}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-gray-600">Margin Ratio</div>
          <div className="text-xl font-bold text-gray-900">
            {(results.contributionMarginRatio * 100).toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  )

  if (!showCard) {
    return chartContent
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Break-Even Analysis</CardTitle>
        <CardDescription>
          Interactive visualization showing the relationship between costs, volume, and profit
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {chartContent}
      </CardContent>
    </Card>
  )
}

// Export a simple usage example
export const BreakEvenChartExample = () => (
  <BreakEvenChart
    fixedCosts={15000}
    variableCostRate={0.65}
    sellingPrice={30}
    interactive={true}
  />
)