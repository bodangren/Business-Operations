import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { BarChart } from "@/components/charts/BarChart"
import { LineChart } from "@/components/charts/LineChart"
import { PieChart } from "@/components/charts/PieChart"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[1]

const chartTerminologyExercise = [
  {
    id: "1",
    text: "When comparing café sales across different menu categories (beverages, pastries, meals), Sarah should use a {blank} chart to show which category performs best.",
    answer: "column",
    hint: "Best for comparing categories side by side"
  },
  {
    id: "2", 
    text: "To show how café sales change throughout the day from 7 AM to 9 PM, the most effective chart type is a {blank} chart.",
    answer: "line",
    hint: "Perfect for displaying trends over time"
  },
  {
    id: "3",
    text: "When Sarah wants to show what percentage of total revenue comes from each menu category, she should create a {blank} chart.",
    answer: "pie",
    hint: "Shows parts of a whole as percentages"
  },
  {
    id: "4",
    text: "The horizontal line that shows measurement values in a chart is called the {blank}-axis.",
    answer: "y",
    hint: "The vertical axis that typically shows values"
  },
  {
    id: "5",
    text: "To help viewers understand what each data series represents in her chart, Sarah should always include a {blank}.",
    answer: "legend",
    hint: "The key that explains what colors or symbols mean"
  },
  {
    id: "6",
    text: "When Sarah adds a {blank} to her scatter plot, Excel can show the general direction of the relationship between two variables.",
    answer: "trendline",
    hint: "A line that shows the general pattern in data"
  }
]

// Sample data for chart demonstrations
const cafeHourlySales = [
  { hour: '7 AM', sales: 850 },
  { hour: '8 AM', sales: 1200 },
  { hour: '9 AM', sales: 1800 },
  { hour: '10 AM', sales: 2400 },
  { hour: '11 AM', sales: 2100 },
  { hour: '12 PM', sales: 2800 },
  { hour: '1 PM', sales: 2600 },
  { hour: '2 PM', sales: 2200 },
  { hour: '3 PM', sales: 1400 },
  { hour: '4 PM', sales: 900 }
]

const cafeCategorySales = [
  { category: 'Beverages', sales: 12500, color: '#8884d8' },
  { category: 'Pastries', sales: 6800, color: '#82ca9d' },
  { category: 'Sandwiches', sales: 9200, color: '#ffc658' },
  { category: 'Salads', sales: 4100, color: '#ff7c7c' },
  { category: 'Desserts', sales: 3900, color: '#8dd1e1' }
]

const weeklyTrend = [
  { week: 'Week 1', revenue: 18500, expenses: 12200 },
  { week: 'Week 2', revenue: 19800, expenses: 13100 },
  { week: 'Week 3', revenue: 17200, expenses: 11800 },
  { week: 'Week 4', revenue: 21300, expenses: 14500 }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Charts: The Professional Foundation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform café data into actionable business intelligence with the right chart types
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Core Concept Introduction */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">The Chart Selection Foundation</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah quickly learned that choosing the wrong chart type is like using the wrong tool for a job. 
                  You might eventually get results, but they won't be effective or professional. In Excel, each 
                  chart type is designed to reveal specific types of business insights.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3">The Four Essential Chart Types for Business</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="border border-blue-100 p-3 rounded">
                      <h4 className="font-medium text-blue-900">📊 Column Charts</h4>
                      <p className="text-blue-800">Compare categories side by side</p>
                      <p className="text-xs text-blue-600 mt-1">Use for: Menu item sales, staff performance, monthly comparisons</p>
                    </div>
                    <div className="border border-blue-100 p-3 rounded">
                      <h4 className="font-medium text-blue-900">📈 Line Charts</h4>
                      <p className="text-blue-800">Show trends and changes over time</p>
                      <p className="text-xs text-blue-600 mt-1">Use for: Daily sales patterns, seasonal trends, hourly traffic</p>
                    </div>
                    <div className="border border-blue-100 p-3 rounded">
                      <h4 className="font-medium text-blue-900">🥧 Pie Charts</h4>
                      <p className="text-blue-800">Display parts of a whole as percentages</p>
                      <p className="text-xs text-blue-600 mt-1">Use for: Revenue breakdown, expense categories, market share</p>
                    </div>
                    <div className="border border-blue-100 p-3 rounded">
                      <h4 className="font-medium text-blue-900">🎯 Scatter Plots</h4>
                      <p className="text-blue-800">Reveal relationships between two variables</p>
                      <p className="text-xs text-blue-600 mt-1">Use for: Price vs. demand, temperature vs. sales, advertising vs. revenue</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  For the café analysis, Sarah will use all four types to tell a complete story about weekend 
                  operations. Each chart type reveals different insights that together paint a picture of how 
                  the business really operates.
                </p>
              </CardContent>
            </Card>

            {/* Chart Examples with Café Data */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">Sarah's Café Chart Gallery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-purple-800 text-lg leading-relaxed">
                  Let's see how Sarah transforms the café's raw POS data into compelling visual insights using 
                  Excel's chart tools. Each chart below answers a specific business question.
                </p>
                
                {/* Column Chart Example */}
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Business Question: "Which menu categories drive the most revenue?"</h3>
                  <BarChart 
                    title="Weekend Revenue by Menu Category"
                    data={{
                      labels: cafeCategorySales.map(item => item.category),
                      datasets: [{
                        label: 'Revenue ($)',
                        data: cafeCategorySales.map(item => item.sales),
                        backgroundColor: cafeCategorySales.map(item => item.color)
                      }]
                    }}
                    height={300}
                  />
                  <p className="text-sm text-purple-800 mt-2">
                    <strong>Insight:</strong> Beverages generate the highest revenue, suggesting the café should ensure 
                    adequate coffee and drink supplies during peak weekend hours.
                  </p>
                </div>

                {/* Line Chart Example */}
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Business Question: "When do we experience peak sales throughout the day?"</h3>
                  <LineChart 
                    title="Hourly Sales Pattern - Saturday"
                    description="Revenue flow from opening to mid-afternoon"
                    data={cafeHourlySales}
                    config={{
                      sales: {
                        label: 'Sales ($)',
                        color: 'hsl(220, 70%, 50%)'
                      }
                    }}
                    xAxisKey="hour"
                    height={300}
                    showGrid={true}
                    showLegend={false}
                  />
                  <p className="text-sm text-purple-800 mt-2">
                    <strong>Insight:</strong> Clear peaks at 10 AM and 12 PM suggest scheduling additional staff 
                    from 9:30 AM - 12:30 PM to handle the rush efficiently.
                  </p>
                </div>

                {/* Pie Chart Example */}
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Business Question: "What percentage of revenue comes from each category?"</h3>
                  <PieChart 
                    title="Revenue Composition - Weekend"
                    data={{
                      labels: cafeCategorySales.map(item => item.category),
                      datasets: [{
                        label: 'Revenue Share',
                        data: cafeCategorySales.map(item => item.sales),
                        backgroundColor: cafeCategorySales.map(item => item.color)
                      }]
                    }}
                    height={350}
                  />
                  <p className="text-sm text-purple-800 mt-2">
                    <strong>Insight:</strong> Beverages account for 34% of revenue, making coffee supply and barista 
                    training the highest priority for weekend success.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Standards */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl">Professional Chart Standards</CardTitle>
              </CardHeader>
              <CardContent className="text-orange-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah discovered that creating effective business charts isn't just about selecting the right type. 
                  Professional charts follow specific formatting standards that make them credible and actionable 
                  for business decision-makers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">📝 Essential Elements</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Descriptive title that states the business insight</li>
                      <li>• Clear axis labels with units ($, %, hours, etc.)</li>
                      <li>• Legend when multiple data series are shown</li>
                      <li>• Data labels for key values when space allows</li>
                      <li>• Professional color scheme (avoid neon or clashing colors)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">🎯 Business Impact Focus</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Title reveals the business question being answered</li>
                      <li>• Scale emphasizes the most important data ranges</li>
                      <li>• Colors highlight actionable insights (red for problems, green for success)</li>
                      <li>• Layout draws attention to key findings</li>
                      <li>• Size is appropriate for presentation medium</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-2">💡 Sarah's Pro Tip</h3>
                  <p className="text-orange-800 text-sm">
                    "Every chart should answer a specific business question in under 10 seconds. If a busy café 
                    manager can't understand your chart immediately, you need to simplify it or choose a different 
                    chart type. The goal is insight, not decoration."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fill in the Blank Exercise */}
            <FillInTheBlank
              title="Excel Chart Mastery Check"
              description="Complete these sentences about choosing and formatting Excel charts for business analysis"
              sentences={chartTerminologyExercise}
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
            />

            {/* Excel Formula Connection */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl">Connecting Charts to Excel Formulas</CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah learned that powerful charts start with well-organized data. Before creating any chart, 
                  she uses Excel formulas to prepare her data for visualization.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">📊 Pre-Chart Data Preparation</h3>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="font-medium text-green-900">For Column Charts (Category Comparison)</p>
                      <p className="text-green-800">Use SUMIF to total sales by category: <code>=SUMIF(Category_Range,"Beverages",Sales_Range)</code></p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-3">
                      <p className="font-medium text-green-900">For Line Charts (Time Trends)</p>
                      <p className="text-green-800">Use SUMIFS for hourly totals: <code>=SUMIFS(Sales_Range,Hour_Range,"10 AM",Date_Range,"Saturday")</code></p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="font-medium text-green-900">For Pie Charts (Percentages)</p>
                      <p className="text-green-800">Calculate percentages: <code>=Individual_Category_Total/Grand_Total*100</code></p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-3">
                      <p className="font-medium text-green-900">For Scatter Plots (Relationships)</p>
                      <p className="text-green-800">Use structured data with X and Y columns, add trendlines in chart options</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  These formula-driven data summaries become the foundation for charts that update automatically 
                  when new POS data is added. This automation is what makes Sarah's analysis scalable and valuable 
                  to busy business owners.
                </p>
              </CardContent>
            </Card>

            {/* Why This Matters */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2 text-xl">Why This Matters</h3>
              <p className="text-blue-800 text-lg leading-relaxed">
                Mastering Excel chart selection and formatting transforms Sarah from a data processor into a 
                strategic business advisor. When she can quickly create charts that reveal actionable insights, 
                she becomes indispensable to clients who need to make fast, informed decisions. These visual 
                communication skills are what separate amateur analysts from professional consultants who 
                command premium rates.
              </p>
            </div>
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