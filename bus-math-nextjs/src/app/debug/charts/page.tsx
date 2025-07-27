'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart } from '@/components/charts/BarChart'
import { BreakEvenChart } from '@/components/charts/BreakEvenChart'
import { DoughnutChart } from '@/components/charts/DoughnutChart'
import { FinancialDashboard } from '@/components/charts/FinancialDashboard'
import { LineChart } from '@/components/charts/LineChart'
import { PieChart } from '@/components/charts/PieChart'

export default function ChartsDebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-blue-800">Charts Debug Page</CardTitle>
            <CardDescription className="text-lg">
              Testing and debugging chart components
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Financial Dashboard Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Financial Dashboard Component</CardTitle>
            <CardDescription>
              Comprehensive financial dashboard with KPIs, multiple chart types, and interactive features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Full Featured Dashboard */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Complete Financial Dashboard</h3>
              <FinancialDashboard
                title="Business Financial Overview"
                refreshable={true}
                exportable={true}
                className="bg-white rounded-lg border border-gray-200 p-6"
              />
            </div>

            {/* Compact Dashboard Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Compact Dashboard</h3>
              <FinancialDashboard
                title="Quick Financial Summary"
                refreshable={false}
                exportable={false}
                className="bg-gray-50 rounded-lg border border-gray-300 p-4"
              />
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Bar Chart Component</CardTitle>
            <CardDescription>
              Interactive bar chart with customizable data and styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Financial Revenue & Expenses Bar Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Financial Revenue vs Expenses</h3>
              <BarChart
                title="Monthly Financial Performance"
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
                height={400}
              />
            </div>

            {/* Account Balances Bar Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Account Balances</h3>
              <BarChart
                title="Current Account Balances"
                data={{
                  labels: ['Cash', 'Accounts Receivable', 'Equipment', 'Inventory', 'Accounts Payable'],
                  datasets: [
                    {
                      label: 'Balance ($)',
                      data: [8500, 3200, 15000, 4500, -2800],
                      backgroundColor: [
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 99, 132, 0.8)'
                      ],
                      borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 99, 132, 1)'
                      ],
                      borderWidth: 1
                    }
                  ]
                }}
                height={300}
              />
            </div>

            {/* Quarterly Profit Analysis */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quarterly Profit Analysis</h3>
              <BarChart
                title="Quarterly Performance"
                data={{
                  labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
                  datasets: [
                    {
                      label: 'Gross Revenue',
                      data: [45000, 52000, 48000, 65000],
                      backgroundColor: 'rgba(34, 197, 94, 0.8)',
                      borderColor: 'rgba(34, 197, 94, 1)',
                      borderWidth: 1
                    },
                    {
                      label: 'Net Income',
                      data: [8500, 12500, 9800, 16200],
                      backgroundColor: 'rgba(59, 130, 246, 0.8)',
                      borderColor: 'rgba(59, 130, 246, 1)',
                      borderWidth: 1
                    }
                  ]
                }}
                height={350}
              />
            </div>

            {/* Department Expenses */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Department Expenses Breakdown</h3>
              <BarChart
                title="Monthly Department Expenses"
                data={{
                  labels: ['Marketing', 'Operations', 'HR', 'IT', 'Finance', 'R&D'],
                  datasets: [
                    {
                      label: 'Expenses ($)',
                      data: [5200, 8900, 3400, 4100, 2800, 6700],
                      backgroundColor: 'rgba(168, 85, 247, 0.8)',
                      borderColor: 'rgba(168, 85, 247, 1)',
                      borderWidth: 1
                    }
                  ]
                }}
                height={300}
                options={{
                  indexAxis: 'y' as const, // Horizontal bar chart
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Break-Even Chart Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Break-Even Chart Component</CardTitle>
            <CardDescription>
              Interactive break-even analysis with cost-volume-profit visualization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Interactive Break-Even Analysis */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Interactive Break-Even Analysis</h3>
              <BreakEvenChart
                fixedCosts={10000}
                variableCostRate={0.6}
                sellingPrice={25}
                interactive={true}
              />
            </div>

            {/* Retail Business Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Retail Business Example</h3>
              <BreakEvenChart
                fixedCosts={15000}
                variableCostRate={0.65}
                sellingPrice={40}
                interactive={true}
              />
            </div>

            {/* Service Business Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Business Example</h3>
              <BreakEvenChart
                fixedCosts={8000}
                variableCostRate={0.35}
                sellingPrice={150}
                interactive={true}
              />
            </div>

            {/* Manufacturing Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Manufacturing Example</h3>
              <BreakEvenChart
                fixedCosts={50000}
                variableCostRate={0.70}
                sellingPrice={75}
                interactive={true}
              />
            </div>

            {/* Static Example (Non-Interactive) */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Static Break-Even Chart</h3>
              <BreakEvenChart
                fixedCosts={12000}
                variableCostRate={0.55}
                sellingPrice={35}
                interactive={false}
                height={300}
              />
            </div>
          </CardContent>
        </Card>

        {/* Doughnut Chart Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Doughnut Chart Component</CardTitle>
            <CardDescription>
              Interactive doughnut charts for proportional data visualization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Account Balances Doughnut */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Account Balances Distribution</h3>
              <DoughnutChart
                title="Current Account Balances"
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
            </div>

            {/* Revenue Sources Breakdown */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Revenue Sources</h3>
              <DoughnutChart
                title="Monthly Revenue by Source"
                data={{
                  labels: ['Product Sales', 'Services', 'Consulting', 'Subscriptions', 'Other'],
                  datasets: [{
                    label: 'Revenue Sources',
                    data: [45000, 28000, 15000, 12000, 3000],
                    backgroundColor: [
                      '#8B5CF6', // Purple
                      '#F59E0B', // Amber
                      '#10B981', // Emerald
                      '#3B82F6', // Blue
                      '#6B7280'  // Gray
                    ]
                  }]
                }}
                height={350}
                showPercentages={true}
              />
            </div>

            {/* Expense Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
              <DoughnutChart
                title="Monthly Expenses Breakdown"
                data={{
                  labels: ['Salaries', 'Rent', 'Marketing', 'Utilities', 'Supplies', 'Insurance'],
                  datasets: [{
                    label: 'Expenses',
                    data: [25000, 8000, 5200, 2400, 1800, 1500],
                    backgroundColor: [
                      '#DC2626', // Red
                      '#EA580C', // Orange
                      '#D97706', // Yellow
                      '#65A30D', // Lime
                      '#059669', // Teal
                      '#0284C7'  // Sky
                    ]
                  }]
                }}
                height={350}
                innerRadius={50}
                outerRadius={110}
                showPercentages={true}
              />
            </div>

            {/* Market Share Analysis */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Market Share Analysis</h3>
              <DoughnutChart
                title="Competitor Market Share"
                data={{
                  labels: ['Our Company', 'Competitor A', 'Competitor B', 'Competitor C', 'Others'],
                  datasets: [{
                    label: 'Market Share',
                    data: [25, 22, 18, 15, 20],
                    backgroundColor: [
                      '#059669', // Our Company - Emerald
                      '#DC2626', // Competitor A - Red
                      '#EA580C', // Competitor B - Orange
                      '#7C3AED', // Competitor C - Violet
                      '#6B7280'  // Others - Gray
                    ]
                  }]
                }}
                height={400}
                showPercentages={true}
              />
            </div>

            {/* Department Budget Allocation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Department Budget Allocation</h3>
              <DoughnutChart
                title="Annual Budget by Department"
                data={{
                  labels: ['Engineering', 'Sales', 'Marketing', 'Operations', 'HR', 'Finance'],
                  datasets: [{
                    label: 'Budget Allocation',
                    data: [180000, 150000, 120000, 90000, 60000, 45000],
                    backgroundColor: [
                      '#3B82F6', // Engineering - Blue
                      '#10B981', // Sales - Emerald
                      '#F59E0B', // Marketing - Amber
                      '#8B5CF6', // Operations - Purple
                      '#EF4444', // HR - Red
                      '#6366F1'  // Finance - Indigo
                    ]
                  }]
                }}
                height={400}
                innerRadius={70}
                outerRadius={130}
                showPercentages={true}
              />
            </div>

            {/* Compact Doughnut Example */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Compact Doughnut Chart</h3>
              <DoughnutChart
                title="Asset Allocation"
                description="Current vs Fixed Assets"
                data={{
                  labels: ['Current Assets', 'Fixed Assets'],
                  datasets: [{
                    label: 'Asset Types',
                    data: [75000, 125000],
                    backgroundColor: ['#06B6D4', '#8B5CF6']
                  }]
                }}
                height={300}
                innerRadius={40}
                outerRadius={80}
                showPercentages={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Line Chart Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Line Chart Component</CardTitle>
            <CardDescription>
              Interactive line charts for time series and trend visualization using shadcn/ui charts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Revenue vs Expenses Trend */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Revenue vs Expenses Trend</h3>
              <LineChart
                title="Monthly Financial Performance"
                description="Tracking revenue and expenses over time"
                data={[
                  { month: 'Jan', revenue: 15000, expenses: 12000 },
                  { month: 'Feb', revenue: 18000, expenses: 14500 },
                  { month: 'Mar', revenue: 16500, expenses: 13200 },
                  { month: 'Apr', revenue: 22000, expenses: 17000 },
                  { month: 'May', revenue: 19500, expenses: 15800 },
                  { month: 'Jun', revenue: 25000, expenses: 18500 },
                  { month: 'Jul', revenue: 24500, expenses: 19200 },
                  { month: 'Aug', revenue: 28000, expenses: 20500 }
                ]}
                config={{
                  revenue: {
                    label: 'Revenue',
                    color: 'hsl(var(--chart-1))',
                  },
                  expenses: {
                    label: 'Expenses', 
                    color: 'hsl(var(--chart-2))',
                  },
                }}
                height={400}
                xAxisKey="month"
              />
            </div>

            {/* Cash Flow Trend */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Cash Flow Analysis</h3>
              <LineChart
                title="Quarterly Cash Flow"
                description="Operating, investing, and financing cash flows"
                data={[
                  { quarter: 'Q1 2023', operating: 15000, investing: -8000, financing: 5000 },
                  { quarter: 'Q2 2023', operating: 18500, investing: -12000, financing: 8000 },
                  { quarter: 'Q3 2023', operating: 22000, investing: -15000, financing: 12000 },
                  { quarter: 'Q4 2023', operating: 28000, investing: -18000, financing: 15000 },
                  { quarter: 'Q1 2024', operating: 32000, investing: -22000, financing: 18000 },
                  { quarter: 'Q2 2024', operating: 35000, investing: -25000, financing: 20000 }
                ]}
                config={{
                  operating: {
                    label: 'Operating Cash Flow',
                    color: 'hsl(142, 76%, 36%)',
                  },
                  investing: {
                    label: 'Investing Cash Flow',
                    color: 'hsl(346, 87%, 43%)',
                  },
                  financing: {
                    label: 'Financing Cash Flow',
                    color: 'hsl(217, 91%, 60%)',
                  },
                }}
                height={350}
                xAxisKey="quarter"
              />
            </div>

            {/* Stock Price Performance */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stock Price Performance</h3>
              <LineChart
                title="Company Stock Price"
                description="Daily closing price and trading volume indicator"
                data={[
                  { date: 'Jan 1', price: 45.20, volume: 125000 },
                  { date: 'Jan 15', price: 48.75, volume: 138000 },
                  { date: 'Feb 1', price: 52.10, volume: 142000 },
                  { date: 'Feb 15', price: 49.85, volume: 156000 },
                  { date: 'Mar 1', price: 55.30, volume: 167000 },
                  { date: 'Mar 15', price: 58.95, volume: 178000 },
                  { date: 'Apr 1', price: 61.40, volume: 189000 },
                  { date: 'Apr 15', price: 59.20, volume: 195000 }
                ]}
                config={{
                  price: {
                    label: 'Stock Price ($)',
                    color: 'hsl(262, 83%, 58%)',
                  },
                }}
                height={320}
                xAxisKey="date"
                formatValue={(value) => `$${value.toFixed(2)}`}
              />
            </div>

            {/* Sales Performance by Department */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sales Performance by Department</h3>
              <LineChart
                title="Department Sales Trends"
                description="Monthly sales performance across different departments"
                data={[
                  { month: 'Jan', electronics: 28000, clothing: 22000, home: 18000, books: 12000 },
                  { month: 'Feb', electronics: 32000, clothing: 25000, home: 20000, books: 14000 },
                  { month: 'Mar', electronics: 35000, clothing: 28000, home: 22000, books: 15000 },
                  { month: 'Apr', electronics: 38000, clothing: 30000, home: 25000, books: 16000 },
                  { month: 'May', electronics: 42000, clothing: 33000, home: 28000, books: 18000 },
                  { month: 'Jun', electronics: 45000, clothing: 35000, home: 30000, books: 20000 }
                ]}
                config={{
                  electronics: {
                    label: 'Electronics',
                    color: 'hsl(12, 76%, 61%)',
                  },
                  clothing: {
                    label: 'Clothing',
                    color: 'hsl(173, 58%, 39%)',
                  },
                  home: {
                    label: 'Home & Garden',
                    color: 'hsl(197, 37%, 24%)',
                  },
                  books: {
                    label: 'Books',
                    color: 'hsl(43, 74%, 66%)',
                  },
                }}
                height={380}
                xAxisKey="month"
              />
            </div>

            {/* Profit Margin Analysis */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Profit Margin Trends</h3>
              <LineChart
                title="Quarterly Profit Margins"
                description="Gross, operating, and net profit margins over time"
                data={[
                  { quarter: 'Q1', gross: 42.5, operating: 18.2, net: 12.8 },
                  { quarter: 'Q2', gross: 45.1, operating: 20.5, net: 15.2 },
                  { quarter: 'Q3', gross: 43.8, operating: 19.8, net: 14.1 },
                  { quarter: 'Q4', gross: 47.2, operating: 22.1, net: 16.5 },
                  { quarter: 'Q1', gross: 48.5, operating: 23.8, net: 17.9 },
                  { quarter: 'Q2', gross: 46.9, operating: 21.5, net: 16.2 }
                ]}
                config={{
                  gross: {
                    label: 'Gross Margin (%)',
                    color: 'hsl(142, 71%, 45%)',
                  },
                  operating: {
                    label: 'Operating Margin (%)',
                    color: 'hsl(47, 96%, 53%)',
                  },
                  net: {
                    label: 'Net Margin (%)',
                    color: 'hsl(351, 95%, 71%)',
                  },
                }}
                height={350}
                xAxisKey="quarter"
                formatValue={(value) => `${value.toFixed(1)}%`}
              />
            </div>

            {/* Simple Two-Line Comparison */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple Revenue Comparison</h3>
              <LineChart
                title="This Year vs Last Year"
                description="Comparing current year performance with previous year"
                data={[
                  { month: 'Jan', thisYear: 45000, lastYear: 38000 },
                  { month: 'Feb', thisYear: 52000, lastYear: 41000 },
                  { month: 'Mar', thisYear: 48000, lastYear: 44000 },
                  { month: 'Apr', thisYear: 58000, lastYear: 47000 },
                  { month: 'May', thisYear: 62000, lastYear: 49000 },
                  { month: 'Jun', thisYear: 68000, lastYear: 52000 }
                ]}
                config={{
                  thisYear: {
                    label: '2024 Revenue',
                    color: 'hsl(221, 83%, 53%)',
                  },
                  lastYear: {
                    label: '2023 Revenue',
                    color: 'hsl(212, 95%, 68%)',
                  },
                }}
                height={300}
                xAxisKey="month"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Pie Chart Component</CardTitle>
            <CardDescription>
              Interactive pie charts for proportional data visualization using shadcn/ui charts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Expense Breakdown Pie Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
              <PieChart
                title="Monthly Expenses Breakdown"
                description="Breakdown of monthly business expenses by category"
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
            </div>

            {/* Revenue Sources Pie Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Revenue Sources</h3>
              <PieChart
                title="Revenue by Source"
                description="Quarterly revenue breakdown by source"
                data={{
                  labels: ['Product Sales', 'Services', 'Consulting', 'Subscriptions', 'Other'],
                  datasets: [{
                    label: 'Revenue Sources',
                    data: [45000, 28000, 15000, 12000, 3000],
                    backgroundColor: [
                      '#8B5CF6', // Product Sales - Purple
                      '#F59E0B', // Services - Amber
                      '#10B981', // Consulting - Emerald
                      '#3B82F6', // Subscriptions - Blue
                      '#6B7280'  // Other - Gray
                    ]
                  }]
                }}
                height={350}
                showPercentages={true}
              />
            </div>

            {/* Market Share Pie Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Market Share Analysis</h3>
              <PieChart
                title="Competitor Market Share"
                description="Current market share distribution among competitors"
                data={{
                  labels: ['Our Company', 'Competitor A', 'Competitor B', 'Competitor C', 'Others'],
                  datasets: [{
                    label: 'Market Share',
                    data: [25, 22, 18, 15, 20],
                    backgroundColor: [
                      '#059669', // Our Company - Emerald
                      '#DC2626', // Competitor A - Red
                      '#EA580C', // Competitor B - Orange
                      '#7C3AED', // Competitor C - Violet
                      '#6B7280'  // Others - Gray
                    ]
                  }]
                }}
                height={400}
                showPercentages={true}
              />
            </div>

            {/* Asset Distribution Pie Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Asset Distribution</h3>
              <PieChart
                title="Company Assets Breakdown"
                description="Distribution of company assets by category"
                data={{
                  labels: ['Cash & Cash Equivalents', 'Equipment', 'Inventory', 'Accounts Receivable', 'Investments'],
                  datasets: [{
                    label: 'Assets',
                    data: [45000, 75000, 32000, 28000, 20000],
                    backgroundColor: [
                      '#06B6D4', // Cash - Cyan
                      '#F59E0B', // Equipment - Amber
                      '#10B981', // Inventory - Emerald
                      '#3B82F6', // AR - Blue
                      '#8B5CF6'  // Investments - Purple
                    ]
                  }]
                }}
                height={350}
                showPercentages={true}
              />
            </div>

            {/* Simple Two-Category Pie Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Simple Asset Categories</h3>
              <PieChart
                title="Current vs Fixed Assets"
                description="Simple breakdown of asset types"
                data={{
                  labels: ['Current Assets', 'Fixed Assets'],
                  datasets: [{
                    label: 'Asset Types',
                    data: [75000, 125000],
                    backgroundColor: ['#06B6D4', '#8B5CF6']
                  }]
                }}
                height={300}
                showPercentages={true}
                outerRadius={100}
              />
            </div>

            {/* Department Budget Pie Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Department Budget Allocation</h3>
              <PieChart
                title="Annual Budget by Department"
                description="Allocation of annual budget across departments"
                data={{
                  labels: ['Engineering', 'Sales', 'Marketing', 'Operations', 'HR', 'Finance'],
                  datasets: [{
                    label: 'Budget Allocation',
                    data: [180000, 150000, 120000, 90000, 60000, 45000],
                    backgroundColor: [
                      '#3B82F6', // Engineering - Blue
                      '#10B981', // Sales - Emerald
                      '#F59E0B', // Marketing - Amber
                      '#8B5CF6', // Operations - Purple
                      '#EF4444', // HR - Red
                      '#6366F1'  // Finance - Indigo
                    ]
                  }]
                }}
                height={400}
                showPercentages={true}
              />
            </div>
          </CardContent>
        </Card>


        {/* Component Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Chart Component Usage Examples</CardTitle>
            <CardDescription>
              Code examples for implementing chart components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">BarChart Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { BarChart } from '@/components/charts/BarChart'

<BarChart
  title="Monthly Sales"
  data={{
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Sales',
      data: [1000, 1500, 1200],
      backgroundColor: 'rgba(54, 162, 235, 0.8)'
    }]
  }}
  height={300}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">BreakEvenChart Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { BreakEvenChart } from '@/components/charts/BreakEvenChart'

// Interactive Break-Even Analysis
<BreakEvenChart
  fixedCosts={10000}
  variableCostRate={0.6}
  sellingPrice={25}
  interactive={true}
/>

// Static Break-Even Chart
<BreakEvenChart
  fixedCosts={8000}
  variableCostRate={0.4}
  sellingPrice={50}
  interactive={false}
  height={300}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">DoughnutChart Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { DoughnutChart } from '@/components/charts/DoughnutChart'

// Account Balances Doughnut Chart
<DoughnutChart
  title="Account Balances"
  data={{
    labels: ['Cash', 'Equipment', 'Inventory'],
    datasets: [{
      label: 'Account Balances',
      data: [8500, 15000, 4500],
      backgroundColor: ['#4F46E5', '#F59E0B', '#10B981']
    }]
  }}
  height={400}
  showPercentages={true}
/>

// Simple Two-Category Chart
<DoughnutChart
  title="Asset Types"
  data={{
    labels: ['Current Assets', 'Fixed Assets'],
    datasets: [{
      label: 'Assets',
      data: [75000, 125000],
      backgroundColor: ['#06B6D4', '#8B5CF6']
    }]
  }}
  height={300}
  innerRadius={40}
  outerRadius={80}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">PieChart Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { PieChart } from '@/components/charts/PieChart'

// Expense Breakdown Pie Chart
<PieChart
  title="Expense Breakdown"
  data={{
    labels: ['Salaries', 'Rent', 'Marketing', 'Utilities'],
    datasets: [{
      label: 'Expenses',
      data: [25000, 8000, 5200, 2400],
      backgroundColor: ['#DC2626', '#EA580C', '#D97706', '#65A30D']
    }]
  }}
  height={400}
  showPercentages={true}
/>

// Simple Two-Category Chart
<PieChart
  title="Asset Types"
  data={{
    labels: ['Current Assets', 'Fixed Assets'],
    datasets: [{
      label: 'Assets',
      data: [75000, 125000],
      backgroundColor: ['#06B6D4', '#8B5CF6']
    }]
  }}
  height={300}
  outerRadius={100}
/>`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">FinancialDashboard Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { FinancialDashboard } from '@/components/charts/FinancialDashboard'

// Full Featured Dashboard
<FinancialDashboard
  title="Business Financial Overview"
  refreshable={true}
  exportable={true}
  className="bg-white rounded-lg border border-gray-200 p-6"
/>

// Simple Dashboard
<FinancialDashboard
  title="Quick Financial Summary"
  refreshable={false}
  exportable={false}
/>

// Minimal Dashboard
<FinancialDashboard />`}
                </pre>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">LineChart Usage:</h4>
                <pre className="text-sm overflow-x-auto">
{`import { LineChart } from '@/components/charts/LineChart'

// Revenue vs Expenses Line Chart
<LineChart
  title="Monthly Financial Performance"
  description="Tracking revenue and expenses over time"
  data={[
    { month: 'Jan', revenue: 15000, expenses: 12000 },
    { month: 'Feb', revenue: 18000, expenses: 14500 },
    { month: 'Mar', revenue: 16500, expenses: 13200 }
  ]}
  config={{
    revenue: {
      label: 'Revenue',
      color: 'hsl(var(--chart-1))',
    },
    expenses: {
      label: 'Expenses', 
      color: 'hsl(var(--chart-2))',
    },
  }}
  height={400}
  xAxisKey="month"
/>

// Single Line Chart with Custom Formatting
<LineChart
  title="Stock Price Performance"
  data={[
    { date: 'Jan 1', price: 45.20 },
    { date: 'Jan 15', price: 48.75 },
    { date: 'Feb 1', price: 52.10 }
  ]}
  config={{
    price: {
      label: 'Stock Price ($)',
      color: 'hsl(262, 83%, 58%)',
    },
  }}
  height={320}
  xAxisKey="date"
  formatValue={(value) => \`$\${value.toFixed(2)}\`}
/>`}
                </pre>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}