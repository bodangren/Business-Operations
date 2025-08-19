import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import DragAndDrop from "@/components/exercises/DragAndDrop"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import { Target, CheckSquare, TrendingUp } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[3]

const chartSelectionExercise = [
  {
    id: "1",
    content: "Compare monthly revenue across different product categories",
    matchId: "column",
    hint: "Best for side-by-side category comparisons"
  },
  {
    id: "2", 
    content: "Show how customer satisfaction scores change over 12 months",
    matchId: "line",
    hint: "Perfect for displaying trends over time"
  },
  {
    id: "3",
    content: "Display what percentage of total costs each expense category represents",
    matchId: "pie",
    hint: "Shows parts of a whole as percentages"
  },
  {
    id: "4",
    content: "Analyze the relationship between advertising spend and weekly sales",
    matchId: "scatter",
    hint: "Reveals relationships between two variables"
  },
  {
    id: "5",
    content: "Track daily cash flow changes during a busy holiday season",
    matchId: "line",
    hint: "Shows patterns and trends over time periods"
  },
  {
    id: "6",
    content: "Compare Q4 performance across different store locations",
    matchId: "column",
    hint: "Compares performance across categories or groups"
  },
  {
    id: "column",
    content: "Column Chart",
    matchId: "1"
  },
  {
    id: "line",
    content: "Line Chart", 
    matchId: "2"
  },
  {
    id: "pie",
    content: "Pie Chart",
    matchId: "3"
  },
  {
    id: "scatter",
    content: "Scatter Plot",
    matchId: "4"
  }
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Advanced Excel Chart Mastery Challenges
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complex dashboard creation and business insight development using professional chart techniques
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Challenge Introduction */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Sarah's Advanced Chart Mastery Challenge</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  The café manager is so impressed with Sarah's initial charts that they've asked her to create 
                  a comprehensive executive dashboard. This advanced challenge requires Sarah to make strategic 
                  chart selection decisions and combine multiple visualizations into a cohesive business intelligence system.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">The Executive Dashboard Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-900">Performance Metrics</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>Weekend vs. weekday revenue comparison</li>
                        <li>Seasonal trends over 2 years of data</li>
                        <li>Profit margin analysis by menu category</li>
                        <li>Customer traffic patterns throughout the day</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">Operational Insights</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>Staff productivity during peak vs. off-peak hours</li>
                        <li>Inventory turnover rates for perishable items</li>
                        <li>Weather impact on beverage vs. food sales</li>
                        <li>Cost breakdown with waste reduction opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Sarah needs to choose the most effective chart types for each business question and create 
                  a dashboard that tells a complete story about café operations. This is her chance to demonstrate 
                  true data visualization mastery.
                </p>
              </CardContent>
            </Card>

            {/* Chart Selection Exercise */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Challenge 1: Strategic Chart Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-purple-800 text-lg leading-relaxed">
                  Before building her dashboard, Sarah must choose the right chart type for each business scenario. 
                  Match each business question to the most effective Excel chart type.
                </p>
                
                <DragAndDrop
                  title="Business Question to Chart Type Matching"
                  description="Drag each business scenario to its most effective chart type"
                  items={chartSelectionExercise}
                  leftColumnTitle="Business Scenarios"
                  rightColumnTitle="Excel Chart Types"
                  showHints={true}
                  shuffleItems={true}
                />
                
                <div className="bg-purple-100 p-4 rounded border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">🎯 Professional Decision-Making</h4>
                  <p className="text-purple-800 text-sm">
                    Notice how each business question has a natural "shape" that corresponds to a specific chart type. 
                    Mastering this pattern recognition is what separates amateur chart makers from professional 
                    data visualization consultants like Sarah.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Building Challenge */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Challenge 2: Executive Dashboard Creation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-800 text-lg leading-relaxed">
                  Now Sarah combines her individual charts into a comprehensive executive dashboard. This integrated 
                  approach tells a complete business story and provides the café manager with a "control panel" 
                  for making data-driven decisions.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">Sarah's Professional Dashboard Strategy</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="border-l-4 border-green-400 pl-3">
                      <h4 className="font-medium text-green-900">Layout Design</h4>
                      <ul className="text-green-800 space-y-1 list-disc list-inside">
                        <li>Most important metrics at top</li>
                        <li>Related charts grouped together</li>
                        <li>Consistent color scheme throughout</li>
                        <li>Clear navigation and labels</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-3">
                      <h4 className="font-medium text-green-900">Technical Excellence</h4>
                      <ul className="text-green-800 space-y-1 list-disc list-inside">
                        <li>Linked data sources for auto-updates</li>
                        <li>Professional formatting standards</li>
                        <li>Appropriate chart sizes for screen viewing</li>
                        <li>Interactive elements where helpful</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <h4 className="font-medium text-green-900">Business Focus</h4>
                      <ul className="text-green-800 space-y-1 list-disc list-inside">
                        <li>Each chart answers specific questions</li>
                        <li>Insights lead to actionable decisions</li>
                        <li>Performance against targets highlighted</li>
                        <li>Problem areas clearly identified</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <FinancialDashboard 
                  title="Café Operations Executive Dashboard"
                  refreshable={true}
                  exportable={true}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                />
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Dashboard Impact Analysis</h4>
                  <p className="text-green-800 text-sm mb-2">
                    Sarah's integrated dashboard transforms raw POS data into executive-level business intelligence:
                  </p>
                  <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                    <li><strong>Revenue Trends:</strong> Identifies seasonal patterns for inventory planning</li>
                    <li><strong>Product Performance:</strong> Reveals which categories drive profitability</li>
                    <li><strong>Cash Flow Management:</strong> Shows when working capital needs are highest</li>
                    <li><strong>Operational Efficiency:</strong> Tracks profit margins and operational metrics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Techniques */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl">Challenge 3: Advanced Excel Chart Techniques</CardTitle>
              </CardHeader>
              <CardContent className="text-orange-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  To create truly professional dashboards, Sarah learns advanced Excel chart techniques that go 
                  beyond basic chart creation. These techniques make her visualizations more impactful and actionable.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">🎯 Trendline Mastery</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-orange-800">Add forecasting power to line and scatter charts:</p>
                      <ul className="text-orange-800 space-y-1 list-disc list-inside">
                        <li>Right-click data series &gt; Add Trendline</li>
                        <li>Select Linear for steady growth patterns</li>
                        <li>Display equation and R-squared value</li>
                        <li>Extend trendline to forecast future periods</li>
                        <li>Use R-squared &gt; 0.7 for reliable predictions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">📊 Dynamic Data Ranges</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-orange-800">Create charts that update automatically:</p>
                      <ul className="text-orange-800 space-y-1 list-disc list-inside">
                        <li>Use Excel Tables (Ctrl+T) for source data</li>
                        <li>Reference table columns in chart data</li>
                        <li>Charts expand automatically with new data</li>
                        <li>Structured references update formulas</li>
                        <li>Professional naming conventions for clarity</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">🎨 Professional Formatting</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-orange-800">Apply business-grade visual standards:</p>
                      <ul className="text-orange-800 space-y-1 list-disc list-inside">
                        <li>Consistent color schemes across all charts</li>
                        <li>Professional fonts (Calibri, Arial, or Segoe UI)</li>
                        <li>Appropriate chart sizes for presentation medium</li>
                        <li>Strategic use of white space and alignment</li>
                        <li>Data labels only where they add clear value</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">💡 Business Intelligence Features</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-orange-800">Transform charts into decision-making tools:</p>
                      <ul className="text-orange-800 space-y-1 list-disc list-inside">
                        <li>Conditional formatting for performance alerts</li>
                        <li>Target lines showing goals vs. actual performance</li>
                        <li>Color coding for problem identification</li>
                        <li>Interactive elements using form controls</li>
                        <li>Export-ready formatting for presentations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Self-Assessment Checklist */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl flex items-center gap-2">
                  <CheckSquare className="h-6 w-6" />
                  Self-Assessment: Chart Mastery Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Before moving to the assessment phase, use this checklist to evaluate your Excel chart mastery. 
                  Sarah uses this same checklist to ensure her charts meet professional standards.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">✅ Technical Proficiency</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>I can select the appropriate chart type for any business scenario</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>I can format charts with professional titles, labels, and legends</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>I can add and interpret trendlines for forecasting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>I can create charts linked to dynamic data ranges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>I can combine multiple charts into a cohesive dashboard</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">🎯 Business Application</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>My charts answer specific business questions clearly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>I can extract actionable insights from chart patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>My visualizations lead to concrete business recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>I can explain chart insights to non-technical audiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">□</span>
                        <span>My dashboards tell complete business stories</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-100 p-4 rounded border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">🌟 Mastery Indicator</h4>
                  <p className="text-blue-800 text-sm">
                    <strong>Advanced Proficiency:</strong> Check 8+ boxes - You're ready for complex business 
                    intelligence projects like Sarah's executive dashboard work.<br/>
                    <strong>Developing Skills:</strong> Check 5-7 boxes - You have solid foundations but need 
                    more practice with advanced techniques.<br/>
                    <strong>Building Foundations:</strong> Check 1-4 boxes - Focus on mastering basic chart 
                    creation before advancing to dashboard design.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Creative Application Challenge */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">Challenge 4: Creative Business Application</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah's final challenge is to apply her chart mastery to a new business scenario. Choose one 
                  of these real-world situations and create a comprehensive Excel chart solution that demonstrates 
                  professional-level data visualization skills.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">🏪 Retail Store Analysis</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      A clothing store wants to optimize their inventory and staffing for the holiday season.
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1 list-disc list-inside">
                      <li>Compare sales by product category</li>
                      <li>Analyze seasonal shopping patterns</li>
                      <li>Track customer foot traffic trends</li>
                      <li>Show profit margins by department</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">🏥 Healthcare Practice</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      A medical practice needs to analyze patient satisfaction and operational efficiency.
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1 list-disc list-inside">
                      <li>Patient satisfaction trends over time</li>
                      <li>Appointment types and duration analysis</li>
                      <li>Resource utilization by department</li>
                      <li>Revenue per service category</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">🎓 Educational Institution</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      A community college wants to improve student success and optimize course offerings.
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1 list-disc list-inside">
                      <li>Enrollment trends by program</li>
                      <li>Student retention and completion rates</li>
                      <li>Course demand vs. capacity analysis</li>
                      <li>Financial performance by department</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-100 p-4 rounded border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">📁 Excel Practice Data Files</h4>
                  <p className="text-purple-800 text-sm mb-2">Use these CSV files to build your advanced dashboards:</p>
                  <ul className="text-purple-800 text-sm space-y-1 list-disc list-inside">
                    <li><strong><a href="/cafe-hourly-sales.csv" download className="underline">Hourly Sales Data</a>:</strong> For line chart time series analysis</li>
                    <li><strong><a href="/cafe-menu-sales.csv" download className="underline">Menu Category Sales</a>:</strong> For column chart category comparisons</li>
                    <li><strong><a href="/cafe-expenses.csv" download className="underline">Operating Expenses</a>:</strong> For pie chart percentage breakdowns</li>
                    <li><strong><a href="/cafe-seasonal-trends.csv" download className="underline">Seasonal Trends</a>:</strong> For scatter plot relationship analysis</li>
                  </ul>
                </div>
                
                <div className="bg-purple-100 p-4 rounded border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">🎯 Success Criteria for Your Creative Challenge</h4>
                  <ul className="text-purple-800 text-sm space-y-1 list-disc list-inside">
                    <li>Use at least 3 different chart types appropriately matched to data patterns</li>
                    <li>Create an integrated dashboard layout with consistent professional formatting</li>
                    <li>Include at least one chart with trendline analysis for forecasting</li>
                    <li>Write business insight statements for each chart explaining actionable recommendations</li>
                    <li>Demonstrate understanding of your chosen industry's specific data visualization needs</li>
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