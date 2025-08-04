/**
 * PieChart Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { PieChart } from '@/components/charts/PieChart'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <PieChart
 *         title="Expense Breakdown"
 *         data={{
 *           labels: ['Salaries', 'Rent', 'Marketing', 'Utilities'],
 *           datasets: [{
 *             label: 'Expenses',
 *             data: [25000, 8000, 5200, 2400],
 *             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40']
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
 * OBJECTIVE: Students learn to interpret and create pie charts for financial data visualization.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Proportional Analysis**: Students view pie charts showing proportional breakdown of financial data.
 * 2. **Interactive Segments**: Click on segments to highlight and view detailed information.
 * 3. **Legend Understanding**: Learn to read chart legends and identify different data categories.
 * 4. **Percentage Visualization**: Understand how parts relate to the whole through visual percentages.
 * 5. **Comparative Analysis**: Compare different expense categories, revenue sources, or asset distributions.
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding proportional representation of financial data
 * - Analyzing composition of financial accounts and categories
 * - Reading and interpreting pie chart legends
 * - Understanding percentage breakdowns in business contexts
 * - Professional data presentation skills for circular visualizations
 */

'use client'

import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
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

interface PieChartProps {
  title?: string
  description?: string
  data: ChartData
  height?: number
  width?: number
  showCard?: boolean
  className?: string
  showLegend?: boolean
  showPercentages?: boolean
  outerRadius?: number
}

// Default color palette for pie charts
const DEFAULT_COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0',
  '#9966FF', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'
]

// Transform data for Recharts PieChart format
function transformDataForRecharts(chartData: ChartData) {
  const { labels, datasets } = chartData
  const dataset = datasets[0] // Pie charts typically use one dataset
  
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

export function PieChart({
  title,
  description,
  data,
  height = 400,
  width,
  showCard = true,
  className = "",
  showLegend = true,
  showPercentages = true,
  outerRadius = 120
}: PieChartProps) {
  const { rechartsData, chartConfig } = transformDataForRecharts(data)
  
  const chartContent = (
    <ChartContainer
      config={chartConfig}
      className={`w-full ${className}`}
      style={{ height: `${height}px`, width: width ? `${width}px` : undefined }}
    >
      <RechartsPieChart>
        <Pie
          data={rechartsData}
          cx="50%"
          cy="50%"
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
      </RechartsPieChart>
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
export const PieChartExample = () => (
  <PieChart
    title="Expense Breakdown"
    description="Monthly expenses breakdown by category"
    data={{
      labels: ['Salaries', 'Rent', 'Marketing', 'Utilities', 'Supplies', 'Insurance'],
      datasets: [{
        label: 'Expenses',
        data: [25000, 8000, 5200, 2400, 1800, 1500],
        backgroundColor: [
          '#DC2626', // Salaries - Red
          '#EA580C', // Rent - Orange
          '#D97706', // Marketing - Yellow
          '#65A30D', // Utilities - Lime
          '#059669', // Supplies - Teal
          '#0284C7'  // Insurance - Sky
        ]
      }]
    }}
    height={400}
    showPercentages={true}
  />
)
export default PieChart
