'use client'

import React from 'react'
import {
  Scatter,
  ScatterChart as RechartsScatterChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

interface ScatterChartProps {
  title?: string
  description?: string
  data: Array<{ x: number; y: number }>
  xAxisLabel?: string
  yAxisLabel?: string
  height?: number
  showGrid?: boolean
  className?: string
}

export function ScatterChart({
  title,
  description,
  data,
  xAxisLabel = 'X',
  yAxisLabel = 'Y',
  height = 400,
  showGrid = true,
  className = ''
}: ScatterChartProps) {
  // Transform data for recharts
  const chartData = data.map((point, index) => ({
    ...point,
    name: `Point ${index + 1}`
  }))

  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
          {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
        </div>
      )}
      
      <ChartContainer
        config={{
          value: {
            label: yAxisLabel,
            color: 'hsl(220, 70%, 50%)'
          }
        }}
        className="min-h-[200px] w-full"
        style={{ height }}
      >
        <RechartsScatterChart
          data={chartData}
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
              className="stroke-muted"
            />
          )}
          
          <XAxis
            dataKey="x"
            name={xAxisLabel}
            type="number"
            tickLine={false}
            axisLine={false}
            className="text-xs"
            tickMargin={8}
            label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }}
          />
          
          <YAxis
            dataKey="y"
            name={yAxisLabel}
            type="number"
            tickLine={false}
            axisLine={false}
            className="text-xs"
            tickMargin={8}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
          />
          
          <ChartTooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={
              <ChartTooltipContent
                formatter={(value: any) => [
                  typeof value === 'number' && value > 1000 
                    ? `${yAxisLabel}: $${value.toLocaleString()}` 
                    : `${xAxisLabel}: ${value}`,
                  ''
                ]}
              />
            }
          />
          
          <Scatter
            name="Data Points"
            data={chartData}
            fill="hsl(220, 70%, 50%)"
          />
        </RechartsScatterChart>
      </ChartContainer>
    </div>
  )
}

export default ScatterChart