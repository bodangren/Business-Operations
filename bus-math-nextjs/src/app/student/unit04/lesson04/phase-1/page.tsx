import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import { Users } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[0]

const hookQuestions = [
  {
    id: "hook-q1",
    question: "Sarah shows the café manager two different presentations of their weekend sales data. Version A is a spreadsheet with 500 rows of numbers. Version B is a colorful chart showing sales peaks and valleys. Which version will help the manager make faster business decisions?",
    answers: [
      "Version B (the chart) because visual patterns are easier to understand quickly",
      "Version A (the spreadsheet) because exact numbers are always better",
      "Both versions are equally effective for business decisions",
      "Neither version matters - gut feelings are better than data"
    ],
    explanation: "Charts transform data into visual stories. A well-designed chart can reveal patterns in seconds that might take hours to find in a spreadsheet. This is why Sarah's data visualization skills are so valuable to businesses."
  },
  {
    id: "hook-q2", 
    question: "In Excel, Sarah wants to show how café sales change throughout the day (9 AM, 10 AM, 11 AM, etc.). Which chart type would best reveal the sales pattern over time?",
    answers: [
      "Line chart - shows trends and changes over time",
      "Pie chart - shows proportions of a whole",
      "Column chart - compares categories side by side", 
      "Scatter plot - shows relationships between two variables"
    ],
    explanation: "Line charts are perfect for showing trends over time. They help Sarah and the café manager see when sales peak and valley throughout the day, making staffing decisions much easier."
  },
  {
    id: "hook-q3",
    question: "The café manager looks at Sarah's chart and says, 'I see sales spike at 10 AM and 2 PM. Should we schedule more staff during those times?' What has Sarah's chart accomplished?",
    answers: [
      "Transformed raw data into actionable business insights",
      "Made the data look more professional but provided no value",
      "Confused the manager with too much visual information",
      "Replaced the need for business experience with statistics"
    ],
    explanation: "This is the power of data visualization! Sarah's chart didn't just display numbers - it revealed a pattern that leads directly to a business decision about staffing. Good charts bridge the gap between data and action."
  },
  {
    id: "hook-q4",
    question: "Sarah creates a dashboard combining three charts: daily sales trends, popular menu items, and customer traffic patterns. What advantage does this integrated approach provide?",
    answers: [
      "Tells a complete business story by connecting related data patterns",
      "Makes the presentation longer and more impressive",
      "Shows off Sarah's technical skills but has no practical value",
      "Guarantees that all business decisions will be correct"
    ],
    explanation: "A dashboard is like a business control panel. By combining related charts, Sarah helps the café manager see how different aspects of the business connect, leading to smarter, more informed decisions."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Sarah's Data Visualization Challenge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From spreadsheet chaos to compelling business insights with Excel charts
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Sarah's Story */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">The Visual Breakthrough Moment</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Remember Sarah Chen from TechStart Solutions? After mastering bookkeeping and month-end automation, 
                  she faced a new challenge. A potential client looked at her 47-page financial report and said, 
                  "Sarah, I don't have time to read through all these numbers. Can you show me what this means in 
                  30 seconds?"
                </p>
                
                <p className="text-lg leading-relaxed">
                  That night, Sarah realized something crucial: having perfect data means nothing if you can't 
                  communicate its story. She needed to learn data visualization - the art of transforming 
                  spreadsheets into compelling visual narratives that business leaders could understand instantly.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Sarah's "Before" Problem</h3>
                  <p className="text-blue-800 mb-2">
                    Sarah's client presentations included:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Massive Excel spreadsheets with hundreds of rows</li>
                    <li>Multiple tabs requiring constant clicking to find information</li>
                    <li>Numbers that told the truth but not the story</li>
                    <li>Clients struggling to understand what the data meant for their business</li>
                  </ul>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Now Sarah has a new mission: help the campus café analyze their weekend operations. But this time, 
                  she's determined to present her findings as clear, compelling charts that reveal actionable insights 
                  at a glance.
                </p>
              </CardContent>
            </Card>

            {/* The Café's Challenge */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl">The Café Manager's Frustration</CardTitle>
              </CardHeader>
              <CardContent className="text-orange-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  The café manager sits across from Sarah, surrounded by printouts of Excel spreadsheets. 
                  "I have all this POS data," she says, "but I can't make sense of it. When are we busiest? 
                  Which items should I order more of? How can I reduce our 8-12% food waste?"
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-2">The Raw Data Reality</h3>
                  <ul className="list-disc list-inside space-y-1 text-orange-800">
                    <li>15,000+ individual transactions across 104 weekend days</li>
                    <li>50+ menu items with varying popularity and profit margins</li>
                    <li>Hourly sales patterns hidden in timestamp data</li>
                    <li>Seasonal trends buried in months of numbers</li>
                  </ul>
                  <p className="text-orange-800 mt-2 text-sm font-medium">
                    Problem: All this valuable information is trapped in spreadsheet rows!
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Sarah realizes this is her chance to demonstrate the power of Excel data visualization. 
                  She'll transform the café's confusing data into clear, professional charts that reveal 
                  exactly when to schedule staff, what to order, and how to cut waste.
                </p>
              </CardContent>
            </Card>

            {/* Dashboard Comparison */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">The Power of Visual Storytelling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-purple-800 text-lg leading-relaxed">
                  To show the café manager what's possible, Sarah creates a sample dashboard using Excel's 
                  chart tools. Look at the difference between raw data and visual insights:
                </p>
                
                <FinancialDashboard 
                  title="Business Financial Overview"
                  refreshable={true}
                  exportable={true}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                />
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">What This Dashboard Reveals</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-purple-900">Revenue Trends</h4>
                      <p className="text-purple-800">Line chart shows seasonal patterns and growth opportunities</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-900">Product Mix</h4>
                      <p className="text-purple-800">Pie chart reveals which categories drive profitability</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-900">Cash Flow</h4>
                      <p className="text-purple-800">Bar chart identifies when the café needs more working capital</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-900">Profitability</h4>
                      <p className="text-purple-800">Trend analysis shows if margins are improving over time</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comprehension Check */}
            <ComprehensionCheck
              title="Data Visualization Readiness Check"
              description="Test your understanding of why Excel charts are crucial for business communication"
              questions={hookQuestions}
              showExplanations={true}
              allowRetry={true}
            />

            {/* Turn and Talk */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Turn and Talk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-blue-800 mb-2">
                  Think about Sarah's challenge with the café data. Share with a partner:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Why might a busy café manager prefer charts over spreadsheets?</li>
                  <li>What business decisions could the dashboard above help the manager make?</li>
                  <li>How could Sarah's chart skills help her win more TechStart clients?</li>
                </ul>
              </CardContent>
            </Card>

            {/* Why This Matters */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2 text-xl">Why This Matters</h3>
              <p className="text-green-800 text-lg leading-relaxed">
                Excel data visualization isn't just about making pretty pictures. It's about transforming 
                information into intelligence. When Sarah masters Excel charts, she gains the ability to 
                communicate complex business insights in seconds instead of hours. This skill will make 
                her presentations more persuasive, her analysis more actionable, and her value to clients 
                dramatically higher.
              </p>
            </div>

            {/* Preview of Learning */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-xl">Coming Up: Your Excel Chart Mastery Toolkit</CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <p className="text-lg leading-relaxed mb-4">
                  In this lesson, you'll learn the exact Excel techniques Sarah uses to create compelling business visualizations:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">📊 Chart Type Selection</h4>
                    <p className="text-sm text-green-800">Master when to use column, line, pie, and scatter charts for maximum impact</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">🎨 Professional Formatting</h4>
                    <p className="text-sm text-green-800">Create charts with proper titles, legends, and data labels that look investor-ready</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">📈 Trendline Analysis</h4>
                    <p className="text-sm text-green-800">Add linear trendlines to reveal patterns and forecast future performance</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-semibold text-green-900">🎯 Dashboard Design</h4>
                    <p className="text-sm text-green-800">Combine multiple charts into cohesive dashboards that tell complete business stories</p>
                  </div>
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