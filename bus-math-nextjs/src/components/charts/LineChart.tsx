'use client'

import React from 'react'
import {
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'

interface LineChartProps {
  title?: string
  description?: string
  data: Array<Record<string, any>>
  config: ChartConfig
  height?: number
  showGrid?: boolean
  showLegend?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  xAxisKey?: string
  className?: string
  formatValue?: (value: number) => string
}

export function LineChart({
  title,
  description,
  data,
  config,
  height = 400,
  showGrid = true,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  xAxisKey = 'month',
  className = '',
  formatValue = (value: number) => `$${value.toLocaleString()}`
}: LineChartProps) {
  const chartHeight = height || 400

  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
      )}
      
      <ChartContainer
        config={config}
        className="min-h-[200px] w-full"
        style={{ height: chartHeight }}
      >
        <RechartsLineChart
          data={data}
          margin={{
            top: 20,
            left: 12,
            right: 12,
            bottom: 12,
          }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              className="stroke-muted"
            />
          )}
          
          {showXAxis && (
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              className="text-xs"
              tickMargin={8}
            />
          )}
          
          {showYAxis && (
            <YAxis
              tickLine={false}
              axisLine={false}
              className="text-xs"
              tickMargin={8}
              tickFormatter={formatValue}
            />
          )}
          
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                formatter={(value, name) => [formatValue(Number(value)), name]}
                labelFormatter={(value) => `${xAxisKey}: ${value}`}
              />
            }
          />
          
          {Object.entries(config).map(([key, configItem]) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={`var(--color-${key})`}
              strokeWidth={2}
              dot={{
                fill: `var(--color-${key})`,
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                r: 6,
                stroke: `var(--color-${key})`,
                strokeWidth: 2,
              }}
            />
          ))}
          
          {showLegend && (
            <ChartLegend content={<ChartLegendContent />} />
          )}
        </RechartsLineChart>
      </ChartContainer>
    </div>
  )
}
export default LineChart
