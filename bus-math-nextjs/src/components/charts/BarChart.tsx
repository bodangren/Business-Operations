/**
 * BarChart Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { BarChart } from '@/components/charts/BarChart'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <BarChart
 *         title="Monthly Sales"
 *         data={{
 *           labels: ['Jan', 'Feb', 'Mar'],
 *           datasets: [{
 *             label: 'Sales',
 *             data: [1000, 1500, 1200],
 *             backgroundColor: 'rgba(54, 162, 235, 0.8)'
 *           }]
 *         }}
 *         height={300}
 *       />
 *     </div>
 *   )
 * }
 * ```
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn to interpret and create bar charts for financial data visualization.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Visual Data Analysis**: Students view bar charts showing financial metrics like revenue, expenses, and account balances.
 * 2. **Interactive Tooltips**: Hover over bars to see exact values and additional context.
 * 3. **Comparative Analysis**: Compare multiple data series (e.g., revenue vs expenses) side by side.
 * 4. **Legend Understanding**: Learn to read chart legends and identify different data categories.
 * 5. **Data Input Practice**: In interactive versions, students can modify data to see chart updates.
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding visual representation of financial data
 * - Comparing multiple financial metrics using bar charts
 * - Reading and interpreting chart legends and axes
 * - Identifying trends and patterns in business data
 * - Professional data presentation skills
 */

'use client'

import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
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
  backgroundColor?: string | string[]
  borderColor?: string | string[]
  borderWidth?: number
}

interface ChartData {
  labels: string[]
  datasets: Dataset[]
}

interface BarChartProps {
  title?: string
  description?: string
  data: ChartData
  height?: number
  width?: number
  options?: {
    indexAxis?: 'x' | 'y'
    responsive?: boolean
    plugins?: {
      legend?: {
        display?: boolean
        position?: 'top' | 'bottom' | 'left' | 'right'
      }
      title?: {
        display?: boolean
        text?: string
      }
    }
    scales?: {
      x?: {
        title?: {
          display?: boolean
          text?: string
        }
      }
      y?: {
        title?: {
          display?: boolean
          text?: string
        }
      }
    }
  }
  showCard?: boolean
  className?: string
}

// Transform data for Recharts format
function transformDataForRecharts(chartData: ChartData) {
  const { labels, datasets } = chartData
  
  // Create chart config for styling
  const chartConfig: ChartConfig = datasets.reduce((config, dataset, index) => {
    const key = dataset.label.toLowerCase().replace(/\s+/g, '_')
    const colors = Array.isArray(dataset.backgroundColor) 
      ? dataset.backgroundColor 
      : [dataset.backgroundColor || `hsl(${index * 60}, 70%, 50%)`]
    
    config[key] = {
      label: dataset.label,
      color: colors[0] || `hsl(${index * 60}, 70%, 50%)`
    }
    return config
  }, {} as ChartConfig)

  // Transform data to Recharts format
  const rechartsData = labels.map((label, labelIndex) => {
    const dataPoint: any = { name: label }
    
    datasets.forEach((dataset) => {
      const key = dataset.label.toLowerCase().replace(/\s+/g, '_')
      dataPoint[key] = dataset.data[labelIndex] || 0
    })
    
    return dataPoint
  })

  return { rechartsData, chartConfig }
}

export function BarChart({
  title,
  description,
  data,
  height = 400,
  width,
  options = {},
  showCard = true,
  className = ""
}: BarChartProps) {
  const { rechartsData, chartConfig } = transformDataForRecharts(data)
  const isHorizontal = options.indexAxis === 'y'
  
  const chartContent = (
    <ChartContainer
      config={chartConfig}
      className={`w-full ${className}`}
      style={{ height: `${height}px`, width: width ? `${width}px` : undefined }}
    >
      <RechartsBarChart
        data={rechartsData}
        layout={isHorizontal ? 'horizontal' : 'vertical'}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        
        {isHorizontal ? (
          <>
            <XAxis 
              type="number" 
              className="text-xs"
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              className="text-xs"
              width={80}
            />
          </>
        ) : (
          <>
            <XAxis 
              dataKey="name" 
              className="text-xs"
              angle={data.labels.some(label => label.length > 8) ? -45 : 0}
              textAnchor={data.labels.some(label => label.length > 8) ? 'end' : 'middle'}
              height={data.labels.some(label => label.length > 8) ? 80 : 50}
            />
            <YAxis 
              className="text-xs"
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
          </>
        )}
        
        <ChartTooltip
          cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          content={
            <ChartTooltipContent
              formatter={(value, name) => [
                `$${Number(value).toLocaleString()}`,
                name
              ]}
              labelFormatter={(label) => `${label}`}
              indicator="dot"
            />
          }
        />
        
        {options.plugins?.legend?.display !== false && (
          <ChartLegend content={<ChartLegendContent />} />
        )}
        
        {data.datasets.map((dataset, index) => {
          const key = dataset.label.toLowerCase().replace(/\s+/g, '_')
          const colors = Array.isArray(dataset.backgroundColor) 
            ? dataset.backgroundColor 
            : [dataset.backgroundColor || chartConfig[key]?.color]
          
          return (
            <Bar
              key={key}
              dataKey={key}
              fill={chartConfig[key]?.color}
              name={dataset.label}
              radius={[2, 2, 0, 0]}
            />
          )
        })}
      </RechartsBarChart>
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
      </CardContent>
    </Card>
  )
}

// Export a simple usage example
export const BarChartExample = () => (
  <BarChart
    title="Sample Financial Data"
    description="Monthly revenue vs expenses comparison"
    data={{
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Revenue',
          data: [15000, 18000, 16500, 22000, 19500, 25000],
          backgroundColor: 'rgba(54, 162, 235, 0.8)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Expenses',
          data: [12000, 14500, 13200, 17000, 15800, 18500],
          backgroundColor: 'rgba(255, 99, 132, 0.8)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    }}
    height={300}
  />
)
export default BarChart
