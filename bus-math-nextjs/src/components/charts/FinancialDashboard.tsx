'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, Tooltip } from 'recharts'
import { RefreshCw, Download, TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react'

interface FinancialDashboardProps {
  title?: string
  className?: string
  refreshable?: boolean
  exportable?: boolean
}

interface ChartData {
  month: string
  revenue: number
  expenses: number
  profit: number
  cashFlow: number
}

interface AccountData {
  name: string
  value: number
  color: string
}

interface KPIData {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
}

export function FinancialDashboard({ 
  title = "Financial Dashboard", 
  className = "",
  refreshable = true,
  exportable = true 
}: FinancialDashboardProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  
  // Sample financial data - in real app would come from props or API
  const monthlyData: ChartData[] = [
    { month: 'Jan', revenue: 15000, expenses: 12000, profit: 3000, cashFlow: 2800 },
    { month: 'Feb', revenue: 18000, expenses: 14500, profit: 3500, cashFlow: 3200 },
    { month: 'Mar', revenue: 16500, expenses: 13200, profit: 3300, cashFlow: 3000 },
    { month: 'Apr', revenue: 22000, expenses: 17000, profit: 5000, cashFlow: 4700 },
    { month: 'May', revenue: 19500, expenses: 15800, profit: 3700, cashFlow: 3400 },
    { month: 'Jun', revenue: 25000, expenses: 18500, profit: 6500, cashFlow: 6200 }
  ]

  const accountBalances: AccountData[] = [
    { name: 'Cash', value: 8500, color: '#4F46E5' },
    { name: 'Accounts Receivable', value: 3200, color: '#06B6D4' },
    { name: 'Equipment', value: 15000, color: '#F59E0B' },
    { name: 'Inventory', value: 4500, color: '#10B981' },
    { name: 'Accounts Payable', value: 2800, color: '#EF4444' }
  ]

  const kpiData: KPIData[] = [
    {
      title: 'Total Revenue',
      value: '$116,000',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />
    },
    {
      title: 'Net Profit',
      value: '$25,000',
      change: '+8.3%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    },
    {
      title: 'Cash Flow',
      value: '$23,100',
      change: '-2.1%',
      trend: 'down',
      icon: <Target className="h-4 w-4" />
    },
    {
      title: 'Profit Margin',
      value: '21.6%',
      change: '+1.8%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    }
  ]

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsRefreshing(false)
  }

  const handleExport = () => {
    // In real app, would generate and download dashboard export
    const timestamp = new Date().toISOString().slice(0, 10)
    const filename = `financial-dashboard-${timestamp}.png`
    alert(`Exporting dashboard as ${filename}`)
  }

  const chartConfig = {
    revenue: {
      label: 'Revenue',
      color: 'hsl(var(--chart-1))',
    },
    expenses: {
      label: 'Expenses',
      color: 'hsl(var(--chart-2))',
    },
    profit: {
      label: 'Profit',
      color: 'hsl(var(--chart-3))',
    },
    cashFlow: {
      label: 'Cash Flow',
      color: 'hsl(var(--chart-4))',
    },
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Dashboard Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl text-blue-800">{title}</CardTitle>
              <CardDescription className="text-blue-600">
                Comprehensive financial overview and key metrics
              </CardDescription>
            </div>
            <div className="flex gap-2">
              {refreshable && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              )}
              {exportable && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExport}
                  className="border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <div className="flex items-center mt-1">
                    {kpi.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span className={`text-xs ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  {kpi.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Expenses Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Revenue vs Expenses</CardTitle>
            <CardDescription>Monthly financial performance comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="var(--color-revenue)" 
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="var(--color-expenses)" 
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Account Balances Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account Balances</CardTitle>
            <CardDescription>Current account balances distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={accountBalances}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={40}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {accountBalances.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Balance']}
                  />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Cash Flow Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cash Flow Analysis</CardTitle>
            <CardDescription>Monthly cash flow and profit tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={monthlyData}>
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Legend />
                  <Bar 
                    dataKey="profit" 
                    fill="var(--color-profit)" 
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar 
                    dataKey="cashFlow" 
                    fill="var(--color-cashFlow)" 
                    radius={[2, 2, 0, 0]}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Profit Margin Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profit Margin Analysis</CardTitle>
            <CardDescription>Monthly profit margin percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData.map(item => ({
                  ...item,
                  margin: ((item.profit / item.revenue) * 100)
                }))}>
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `${value.toFixed(1)}%`}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`${value.toFixed(1)}%`, 'Profit Margin']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="margin" 
                    stroke="var(--color-profit)" 
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Financial Summary</CardTitle>
          <CardDescription>Quick overview of key financial metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700">
                $116,000
              </div>
              <div className="text-sm text-green-600">Total Revenue (6 months)</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="text-2xl font-bold text-red-700">
                $91,000
              </div>
              <div className="text-sm text-red-600">Total Expenses (6 months)</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-700">
                $25,000
              </div>
              <div className="text-sm text-blue-600">Net Profit (6 months)</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export default FinancialDashboard
