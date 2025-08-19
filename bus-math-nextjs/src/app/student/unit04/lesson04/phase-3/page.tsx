import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { BarChart } from "@/components/charts/BarChart"
import { LineChart } from "@/components/charts/LineChart"
import { PieChart } from "@/components/charts/PieChart"
import { Users, TrendingUp, BarChart3, PieChart as PieChartIcon } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[2]

// Step-by-step chart building data
const step1Data = [
  { category: 'Coffee', sales: 8500 },
  { category: 'Tea', sales: 2800 },
  { category: 'Smoothies', sales: 1200 }
]

const step2Data = [
  { hour: '8 AM', customers: 45 },
  { hour: '9 AM', customers: 78 },
  { hour: '10 AM', customers: 125 },
  { hour: '11 AM', customers: 98 },
  { hour: '12 PM', customers: 142 },
  { hour: '1 PM', customers: 118 },
  { hour: '2 PM', customers: 89 }
]

const step3Data = [
  { expense: 'Staff Wages', amount: 8200, color: '#8884d8' },
  { expense: 'Food Costs', amount: 6500, color: '#82ca9d' },
  { expense: 'Rent', amount: 4800, color: '#ffc658' },
  { expense: 'Utilities', amount: 1200, color: '#ff7c7c' },
  { expense: 'Other', amount: 800, color: '#8dd1e1' }
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Building Sarah's Excel Chart System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step chart creation for café data analysis using Excel's professional tools
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction to the Building Process */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Sarah's Chart Building Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah sits down with the café manager to build their Excel chart system step by step. 
                  She starts with the most urgent business questions and creates charts that provide 
                  immediate actionable insights. Let's follow her systematic approach.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Sarah's 3-Step Chart Building Process</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-200 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">1</span>
                      <span><strong>Identify the Business Question:</strong> What specific decision does this chart need to support?</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-200 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">2</span>
                      <span><strong>Choose the Right Chart Type:</strong> Match the data pattern to the most effective visualization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-200 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">3</span>
                      <span><strong>Format for Impact:</strong> Add professional formatting that highlights key insights</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  The café manager's three biggest questions are: "Which beverages sell best?", "When are our peak hours?", 
                  and "Where does our money go?" Sarah will create one chart for each question using Excel's Insert &gt; Charts tools.
                </p>
              </CardContent>
            </Card>

            {/* Step 1: Column Chart for Category Comparison */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <BarChart3 className="h-6 w-6" />
                  Step 1: Beverage Performance Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">Business Question: "Which beverages generate the most revenue?"</h3>
                  <p className="text-green-800 text-sm mb-3">
                    The café manager needs to know which drinks to prioritize in inventory ordering and promotion.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-900 mb-2">Excel Steps:</h4>
                      <ol className="text-sm text-green-800 space-y-1 list-decimal list-inside">
                        <li>Select beverage data range (A1:B4)</li>
                        <li>Insert &gt; Charts &gt; Column Chart</li>
                        <li>Chart Design &gt; Add Chart Elements &gt; Chart Title</li>
                        <li>Format Axis &gt; Number &gt; Currency format</li>
                        <li>Chart Design &gt; Quick Layout &gt; Layout 3</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-900 mb-2">Professional Formatting:</h4>
                      <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                        <li>Title: "Weekend Beverage Revenue"</li>
                        <li>Y-axis: Revenue ($)</li>
                        <li>Data labels showing exact values</li>
                        <li>Professional color scheme</li>
                        <li>Remove unnecessary gridlines</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <BarChart 
                  title="Weekend Beverage Revenue Analysis"
                  data={{
                    labels: step1Data.map(item => item.category),
                    datasets: [{
                      label: 'Revenue ($)',
                      data: step1Data.map(item => item.sales),
                      backgroundColor: ['#2563eb', '#10b981', '#f59e0b']
                    }]
                  }}
                  height={300}
                />
                
                <div className="bg-green-100 p-3 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-1">Business Insight Generated:</h4>
                  <p className="text-green-800 text-sm">
                    Coffee dominates with 68% of beverage revenue ($8,500 of $12,500 total). The café should 
                    ensure premium coffee beans are always in stock and consider training staff on coffee 
                    preparation techniques to maintain quality during peak hours.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Line Chart for Time Trends */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Step 2: Peak Hours Traffic Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-2">Business Question: "When do we have the most customers?"</h3>
                  <p className="text-orange-800 text-sm mb-3">
                    Optimal staffing requires understanding hourly customer flow patterns to avoid over/understaffing.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-orange-900 mb-2">Excel Steps:</h4>
                      <ol className="text-sm text-orange-800 space-y-1 list-decimal list-inside">
                        <li>Select hourly traffic data (A1:B8)</li>
                        <li>Insert &gt; Charts &gt; Line Chart</li>
                        <li>Chart Elements &gt; Trendline &gt; Linear</li>
                        <li>Format Data Series &gt; Marker Options</li>
                        <li>Chart Elements &gt; Data Labels &gt; Above</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-900 mb-2">Professional Formatting:</h4>
                      <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside">
                        <li>Title: "Hourly Customer Traffic - Saturday"</li>
                        <li>X-axis: Time of Day</li>
                        <li>Y-axis: Number of Customers</li>
                        <li>Markers at each data point</li>
                        <li>Professional line color and thickness</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <LineChart 
                  title="Saturday Customer Traffic Pattern"
                  description="Peak hours analysis for optimal staffing"
                  data={step2Data}
                  config={{
                    customers: {
                      label: 'Customers',
                      color: 'hsl(25, 95%, 53%)'
                    }
                  }}
                  xAxisKey="hour"
                  height={300}
                  showGrid={true}
                  showLegend={false}
                />
                
                <div className="bg-orange-100 p-3 rounded border border-orange-200">
                  <h4 className="font-medium text-orange-900 mb-1">Business Insight Generated:</h4>
                  <p className="text-orange-800 text-sm">
                    Clear double peak at 10 AM (125 customers) and 12 PM (142 customers). Schedule additional 
                    staff from 9:30 AM - 12:30 PM and maintain skeleton crew during 2-4 PM valley. This 
                    prevents customer wait times while controlling labor costs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Pie Chart for Expense Breakdown */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                  <PieChartIcon className="h-6 w-6" />
                  Step 3: Operating Expense Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Business Question: "Where does our money go each month?"</h3>
                  <p className="text-purple-800 text-sm mb-3">
                    Understanding expense composition helps identify the biggest opportunities for cost reduction.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-purple-900 mb-2">Excel Steps:</h4>
                      <ol className="text-sm text-purple-800 space-y-1 list-decimal list-inside">
                        <li>Select expense data range (A1:B6)</li>
                        <li>Insert &gt; Charts &gt; Pie Chart</li>
                        <li>Chart Elements &gt; Data Labels &gt; Percentage</li>
                        <li>Chart Design &gt; Color Scheme &gt; Professional</li>
                        <li>Chart Elements &gt; Legend &gt; Right</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-900 mb-2">Professional Formatting:</h4>
                      <ul className="text-sm text-purple-800 space-y-1 list-disc list-inside">
                        <li>Title: "Monthly Operating Expenses"</li>
                        <li>Data labels show percentages</li>
                        <li>Legend with clear category names</li>
                        <li>Consistent color scheme</li>
                        <li>3D effect removed for clarity</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <PieChart 
                  title="Monthly Operating Expense Breakdown"
                  data={{
                    labels: step3Data.map(item => item.expense),
                    datasets: [{
                      label: 'Expenses',
                      data: step3Data.map(item => item.amount),
                      backgroundColor: step3Data.map(item => item.color)
                    }]
                  }}
                  height={350}
                />
                
                <div className="bg-purple-100 p-3 rounded border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-1">Business Insight Generated:</h4>
                  <p className="text-purple-800 text-sm">
                    Staff wages (38%) and food costs (30%) represent 68% of total expenses. Any waste reduction 
                    or scheduling optimization in these areas will have maximum impact. Focus improvement 
                    efforts here rather than on utilities (6%) or other minor expenses.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Collaborative Practice Activity */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Collaborative Chart Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-3">
                  Team Activity (15 minutes):
                </p>
                <div className="space-y-3 text-blue-800">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p className="font-medium">Step 1: Choose Your Focus (2 minutes)</p>
                    <p className="text-sm">Each team member selects one chart type and café business question to tackle</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p className="font-medium">Step 2: Build in Excel (8 minutes)</p>
                    <p className="text-sm">Create your chart following Sarah's 3-step process, focusing on professional formatting</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p className="font-medium">Step 3: Share Insights (5 minutes)</p>
                    <p className="text-sm">Present your chart to the team and explain the business insight it reveals</p>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded border border-blue-200 mt-4">
                  <h4 className="font-medium text-blue-900 mb-2">Success Criteria:</h4>
                  <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                    <li>Chart answers a specific business question clearly</li>
                    <li>Professional formatting with proper titles and labels</li>
                    <li>Insight statement connects chart to actionable business decision</li>
                    <li>Excel formula references are structured and updateable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Professional Standards Review */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl">Professional Chart Standards Checklist</CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Before moving to independent practice, Sarah reviews the professional standards that make 
                  charts credible and actionable for business decision-makers. Use this checklist for every 
                  chart you create.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">✅ Chart Quality Standards</h3>
                    <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                      <li>Descriptive title states the business insight</li>
                      <li>Axis labels include units (%, $, customers, etc.)</li>
                      <li>Professional color scheme (avoid neon or clashing)</li>
                      <li>Appropriate chart size for intended audience</li>
                      <li>Legend present when multiple data series shown</li>
                      <li>Data labels where space allows and adds value</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">🎯 Business Impact Standards</h3>
                    <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                      <li>Chart answers a specific business question</li>
                      <li>Scale emphasizes most important data ranges</li>
                      <li>Colors highlight actionable insights</li>
                      <li>Layout draws attention to key findings</li>
                      <li>Underlying data updates automatically</li>
                      <li>Insight statement connects to business decisions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">📁 Practice Data Files for Students</h3>
                  <p className="text-sm text-green-800 mb-2">Download these CSV files to practice building the same charts Sarah creates:</p>
                  <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                    <li><strong><a href="/cafe-hourly-sales.csv" download className="underline">Hourly Sales Data</a>:</strong> Weekend traffic patterns by hour</li>
                    <li><strong><a href="/cafe-menu-sales.csv" download className="underline">Menu Category Sales</a>:</strong> Revenue breakdown by item and category</li>
                    <li><strong><a href="/cafe-expenses.csv" download className="underline">Operating Expenses</a>:</strong> Monthly cost breakdown by category</li>
                    <li><strong><a href="/cafe-seasonal-trends.csv" download className="underline">Seasonal Trends</a>:</strong> 12 months of performance data</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">💡 Excel Pro Tips from Sarah</h3>
                  <ul className="text-sm text-green-800 space-y-1 list-disc list-inside">
                    <li><strong>Use structured references:</strong> =Table[Revenue] instead of =B2:B50 for updateable charts</li>
                    <li><strong>Group related charts:</strong> Place on same worksheet for dashboard effect</li>
                    <li><strong>Test with real users:</strong> Can a busy manager understand it in 10 seconds?</li>
                    <li><strong>Save as template:</strong> Create reusable chart formats for consistent branding</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}