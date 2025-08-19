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
  data?: {
    monthlyData?: ChartData[]
    accountBalances?: AccountData[]
    kpiData?: KPIData[]
  }
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
  exportable = true,
  data
}: FinancialDashboardProps) {
  const [isRefreshing, setIsRefreshing] = useState(false)
  
  // Default data for complete dashboard
  const defaultMonthlyData: ChartData[] = [
    { month: 'Jan', revenue: 15000, expenses: 12000, profit: 3000, cashFlow: 2800 },
    { month: 'Feb', revenue: 18000, expenses: 14500, profit: 3500, cashFlow: 3200 },
    { month: 'Mar', revenue: 16500, expenses: 13200, profit: 3300, cashFlow: 3000 },
    { month: 'Apr', revenue: 22000, expenses: 17000, profit: 5000, cashFlow: 4700 },
    { month: 'May', revenue: 19500, expenses: 15800, profit: 3700, cashFlow: 3400 },
    { month: 'Jun', revenue: 25000, expenses: 18500, profit: 6500, cashFlow: 6200 }
  ]

  // Compact dashboard uses different data
  const compactMonthlyData: ChartData[] = [
    { month: 'Jan', revenue: 8500, expenses: 6800, profit: 1700, cashFlow: 1500 },
    { month: 'Feb', revenue: 9200, expenses: 7100, profit: 2100, cashFlow: 1900 },
    { month: 'Mar', revenue: 11000, expenses: 8200, profit: 2800, cashFlow: 2600 },
    { month: 'Apr', revenue: 12500, expenses: 9300, profit: 3200, cashFlow: 3000 },
    { month: 'May', revenue: 10800, expenses: 8600, profit: 2200, cashFlow: 2000 },
    { month: 'Jun', revenue: 13200, expenses: 9800, profit: 3400, cashFlow: 3200 }
  ]

  const defaultAccountBalances: AccountData[] = [
    { name: 'Cash', value: 8500, color: '#4F46E5' },
    { name: 'Accounts Receivable', value: 3200, color: '#06B6D4' },
    { name: 'Equipment', value: 15000, color: '#F59E0B' },
    { name: 'Inventory', value: 4500, color: '#10B981' },
    { name: 'Accounts Payable', value: 2800, color: '#EF4444' }
  ]

  const compactAccountBalances: AccountData[] = [
    { name: 'Cash', value: 4200, color: '#4F46E5' },
    { name: 'Receivables', value: 1800, color: '#06B6D4' },
    { name: 'Equipment', value: 8500, color: '#F59E0B' },
    { name: 'Inventory', value: 2200, color: '#10B981' },
    { name: 'Payables', value: 1500, color: '#EF4444' }
  ]

  const defaultKpiData: KPIData[] = [
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

  const compactKpiData: KPIData[] = [
    {
      title: 'Total Revenue',
      value: '$65,200',
      change: '+6.8%',
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />
    },
    {
      title: 'Net Profit',
      value: '$14,400',
      change: '+4.2%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    },
    {
      title: 'Cash Flow',
      value: '$13,200',
      change: '+1.8%',
      trend: 'up',
      icon: <Target className="h-4 w-4" />
    },
    {
      title: 'Profit Margin',
      value: '22.1%',
      change: '+2.1%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    }
  ]

  // Café-specific data for café operations dashboard
  const cafeMonthlyData: ChartData[] = [
    { month: 'Jan', revenue: 12500, expenses: 8900, profit: 3600, cashFlow: 3400 },
    { month: 'Feb', revenue: 14200, expenses: 9800, profit: 4400, cashFlow: 4100 },
    { month: 'Mar', revenue: 16800, expenses: 11200, profit: 5600, cashFlow: 5300 },
    { month: 'Apr', revenue: 18900, expenses: 12800, profit: 6100, cashFlow: 5800 },
    { month: 'May', revenue: 21500, expenses: 14200, profit: 7300, cashFlow: 7000 },
    { month: 'Jun', revenue: 23800, expenses: 15600, profit: 8200, cashFlow: 7900 }
  ]

  const cafeAccountBalances: AccountData[] = [
    { name: 'Cash Register', value: 2800, color: '#4F46E5' },
    { name: 'Daily Sales', value: 4200, color: '#06B6D4' },
    { name: 'Café Equipment', value: 18500, color: '#F59E0B' },
    { name: 'Food Inventory', value: 3500, color: '#10B981' },
    { name: 'Supplier Payables', value: 1800, color: '#EF4444' }
  ]

  const cafeKpiData: KPIData[] = [
    {
      title: 'Weekend Revenue',
      value: '$107,700',
      change: '+18.5%',
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />
    },
    {
      title: 'Café Profit',
      value: '$35,200',
      change: '+24.3%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    },
    {
      title: 'Food Waste',
      value: '2.8%',
      change: '-1.2%',
      trend: 'up',
      icon: <Target className="h-4 w-4" />
    },
    {
      title: 'Customer Traffic',
      value: '1,240/day',
      change: '+15.6%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    }
  ]

  // Portfolio data for student mastery demonstration
  const portfolioMonthlyData: ChartData[] = [
    { month: 'Q1', revenue: 28500, expenses: 19200, profit: 9300, cashFlow: 8800 },
    { month: 'Q2', revenue: 32100, expenses: 21600, profit: 10500, cashFlow: 10200 },
    { month: 'Q3', revenue: 29800, expenses: 20800, profit: 9000, cashFlow: 8700 },
    { month: 'Q4', revenue: 38900, expenses: 26400, profit: 12500, cashFlow: 12100 }
  ]

  const portfolioAccountBalances: AccountData[] = [
    { name: 'Project Revenue', value: 45200, color: '#4F46E5' },
    { name: 'Client Retainers', value: 12800, color: '#06B6D4' },
    { name: 'Tech Assets', value: 8500, color: '#F59E0B' },
    { name: 'Working Capital', value: 15600, color: '#10B981' },
    { name: 'Business Expenses', value: 6200, color: '#EF4444' }
  ]

  const portfolioKpiData: KPIData[] = [
    {
      title: 'Annual Revenue',
      value: '$129,300',
      change: '+34.2%',
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />
    },
    {
      title: 'Net Profit Margin',
      value: '32.1%',
      change: '+8.4%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    },
    {
      title: 'Client Retention',
      value: '94%',
      change: '+12%',
      trend: 'up',
      icon: <Target className="h-4 w-4" />
    },
    {
      title: 'Growth Rate',
      value: '156%',
      change: '+45%',
      trend: 'up',
      icon: <TrendingUp className="h-4 w-4" />
    }
  ]

  // Use provided data or defaults based on dashboard type
  const getDashboardData = () => {
    if (title.includes('Quick') || title.includes('Compact')) {
      return {
        monthly: compactMonthlyData,
        accounts: compactAccountBalances,
        kpis: compactKpiData
      }
    } else if (title.includes('Café') || title.includes('Operations')) {
      return {
        monthly: cafeMonthlyData,
        accounts: cafeAccountBalances,
        kpis: cafeKpiData
      }
    } else if (title.includes('Portfolio') || title.includes('Mastery')) {
      return {
        monthly: portfolioMonthlyData,
        accounts: portfolioAccountBalances,
        kpis: portfolioKpiData
      }
    } else {
      return {
        monthly: defaultMonthlyData,
        accounts: defaultAccountBalances,
        kpis: defaultKpiData
      }
    }
  }

  const dashboardData = getDashboardData()
  const monthlyData = data?.monthlyData || dashboardData.monthly
  const accountBalances = data?.accountBalances || dashboardData.accounts
  const kpiData = data?.kpiData || dashboardData.kpis

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
    <div className={`w-full space-y-6 ${className}`}>
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
        {/* Revenue vs Expenses Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Revenue vs Expenses</CardTitle>
            <CardDescription>Monthly financial performance comparison</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                    axisLine={true}
                    tickLine={true}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={true}
                    tickLine={true}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#3b82f6' }}
                    activeDot={{ r: 6, fill: '#3b82f6' }}
                    connectNulls={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="#ef4444" 
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#ef4444' }}
                    activeDot={{ r: 6, fill: '#ef4444' }}
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Account Balances Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account Balances</CardTitle>
            <CardDescription>Current account balances distribution</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={accountBalances}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    innerRadius={50}
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
            </div>
          </CardContent>
        </Card>

        {/* Cash Flow Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cash Flow Analysis</CardTitle>
            <CardDescription>Monthly cash flow and profit tracking</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                    axisLine={true}
                    tickLine={true}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={true}
                    tickLine={true}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Legend />
                  <Bar 
                    dataKey="profit" 
                    fill="#10b981" 
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar 
                    dataKey="cashFlow" 
                    fill="#3b82f6" 
                    radius={[2, 2, 0, 0]}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Profit Margin Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Profit Margin Analysis</CardTitle>
            <CardDescription>Monthly profit margin percentage</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={monthlyData.map(item => ({
                    ...item,
                    margin: ((item.profit / item.revenue) * 100)
                  }))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                    axisLine={true}
                    tickLine={true}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    axisLine={true}
                    tickLine={true}
                    tickFormatter={(value) => `${value.toFixed(1)}%`}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`${value.toFixed(1)}%`, 'Profit Margin']}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="margin" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#10b981' }}
                    activeDot={{ r: 7, fill: '#10b981' }}
                    connectNulls={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
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
