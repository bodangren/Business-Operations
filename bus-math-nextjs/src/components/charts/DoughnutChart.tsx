/**
 * DoughnutChart Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { DoughnutChart } from '@/components/charts/DoughnutChart'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <DoughnutChart
 *         title="Account Balances"
 *         data={{
 *           labels: ['Cash', 'Accounts Receivable', 'Equipment'],
 *           datasets: [{
 *             label: 'Account Balances',
 *             data: [8500, 3200, 15000],
 *             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
 *           }]
 *         }}
 *         height={400}
 *       />
 *     </div>
 *   )
 * }
 * ```
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn to interpret and create doughnut charts for financial data visualization.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Proportional Analysis**: Students view doughnut charts showing proportional breakdown of financial data.
 * 2. **Interactive Segments**: Click on segments to highlight and view detailed information.
 * 3. **Legend Understanding**: Learn to read chart legends and identify different data categories.
 * 4. **Percentage Visualization**: Understand how parts relate to the whole through visual percentages.
 * 5. **Comparative Analysis**: Compare different account balances, expenses, or revenue sources.
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding proportional representation of financial data
 * - Analyzing composition of financial accounts and categories
 * - Reading and interpreting pie/doughnut chart legends
 * - Understanding percentage breakdowns in business contexts
 * - Professional data presentation skills for circular visualizations
 */

'use client'

import { PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'

interface Dataset {
  label: string
  data: number[]
  backgroundColor?: string[]
  borderColor?: string[]
  borderWidth?: number
}

interface ChartData {
  labels: string[]
  datasets: Dataset[]
}

interface DoughnutChartProps {
  title?: string
  description?: string
  data: ChartData
  height?: number
  width?: number
  innerRadius?: number
  outerRadius?: number
  showCard?: boolean
  className?: string
  showLegend?: boolean
  showPercentages?: boolean
}

// Default color palette for doughnut charts
const DEFAULT_COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0',
  '#9966FF', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'
]

// Transform data for Recharts PieChart format
function transformDataForRecharts(chartData: ChartData) {
  const { labels, datasets } = chartData
  const dataset = datasets[0] // Doughnut charts typically use one dataset
  
  if (!dataset) {
    return { rechartsData: [], chartConfig: {} }
  }

  const total = dataset.data.reduce((sum, value) => sum + value, 0)
  
  // Create chart config for styling
  const chartConfig: ChartConfig = {}
  
  // Transform data to Recharts format
  const rechartsData = labels.map((label, index) => {
    const value = dataset.data[index] || 0
    const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0'
    const key = label.toLowerCase().replace(/\s+/g, '_')
    const color = dataset.backgroundColor?.[index] || DEFAULT_COLORS[index % DEFAULT_COLORS.length]
    
    // Add to chart config
    chartConfig[key] = {
      label: label,
      color: color
    }
    
    return {
      name: label,
      value: value,
      percentage: percentage,
      fill: color,
      key: key
    }
  })

  return { rechartsData, chartConfig }
}

export function DoughnutChart({
  title,
  description,
  data,
  height = 400,
  width,
  innerRadius = 60,
  outerRadius = 120,
  showCard = true,
  className = "",
  showLegend = true,
  showPercentages = true
}: DoughnutChartProps) {
  const { rechartsData, chartConfig } = transformDataForRecharts(data)
  
  const chartContent = (
    <ChartContainer
      config={chartConfig}
      className={`w-full ${className}`}
      style={{ height: `${height}px`, width: width ? `${width}px` : undefined }}
    >
      <PieChart>
        <Pie
          data={rechartsData}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          dataKey="value"
        >
          {rechartsData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={entry.fill}
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth={1}
            />
          ))}
        </Pie>
        
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name) => [
                showPercentages 
                  ? `$${Number(value).toLocaleString()} (${rechartsData.find(d => d.name === name)?.percentage}%)`
                  : `$${Number(value).toLocaleString()}`,
                name
              ]}
              labelFormatter={() => ''}
              indicator="dot"
            />
          }
        />
        
        {showLegend && (
          <ChartLegend 
            content={<ChartLegendContent />}
            verticalAlign="bottom"
            height={36}
          />
        )}
      </PieChart>
    </ChartContainer>
  )

  if (!showCard) {
    return chartContent
  }

  return (
    <Card className="w-full">
      {(title || description) && (
        <CardHeader className="pb-4">
          {title && <CardTitle className="text-xl">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="p-6">
        {chartContent}
        
        {/* Optional data summary */}
        {showPercentages && rechartsData.length > 0 && (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {rechartsData.map((item) => (
              <div key={item.key} className="flex items-center gap-2 p-2 rounded bg-muted/50">
                <div 
                  className="w-3 h-3 rounded-sm shrink-0" 
                  style={{ backgroundColor: item.fill }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{item.name}</div>
                  <div className="text-muted-foreground">
                    ${item.value.toLocaleString()} ({item.percentage}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Export a simple usage example
export const DoughnutChartExample = () => (
  <DoughnutChart
    title="Account Balances Distribution"
    description="Breakdown of current account balances by category"
    data={{
      labels: ['Cash', 'Accounts Receivable', 'Equipment', 'Inventory', 'Accounts Payable'],
      datasets: [{
        label: 'Account Balances',
        data: [8500, 3200, 15000, 4500, 2800],
        backgroundColor: [
          '#4F46E5', // Cash - Indigo
          '#06B6D4', // Accounts Receivable - Cyan  
          '#F59E0B', // Equipment - Amber
          '#10B981', // Inventory - Emerald
          '#EF4444'  // Accounts Payable - Red
        ]
      }]
    }}
    height={400}
    showPercentages={true}
  />
)