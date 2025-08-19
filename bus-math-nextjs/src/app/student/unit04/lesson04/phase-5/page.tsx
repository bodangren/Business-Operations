import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { BarChart } from "@/components/charts/BarChart"
import { LineChart } from "@/components/charts/LineChart"
import { Award, TrendingUp, Target } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[4]

const assessmentQuestions = [
  {
    id: "assess-q1",
    question: "Looking at this chart showing café revenue by hour, what business decision should the manager make about staffing?",
    answers: [
      "Schedule 2 additional staff from 10 AM - 12 PM to handle the $4,200 revenue peak",
      "Reduce staff during all hours since revenue is declining after noon",
      "Keep staffing constant throughout the day regardless of revenue patterns",
      "Only schedule extra staff during the 8 AM opening hour"
    ],
    explanation: "The chart shows peak revenue of $4,200 between 10 AM - 12 PM. This high-revenue period requires adequate staffing to maintain service quality and maximize sales potential. Strategic staffing during peaks while reducing during valleys optimizes labor costs."
  },
  {
    id: "assess-q2",
    question: "Sarah creates a pie chart showing that beverages represent 45% of total café revenue, food 35%, and desserts 20%. What inventory strategy should this drive?",
    answers: [
      "Prioritize beverage inventory and supplier relationships since they drive nearly half of revenue",
      "Focus equally on all categories since they all contribute to revenue",
      "Eliminate desserts since they have the lowest percentage",
      "Order the same quantity of all items regardless of revenue contribution"
    ],
    explanation: "Since beverages generate 45% of revenue, they should receive priority in inventory planning, supplier negotiations, and quality control. The highest revenue contributors deserve the most attention to ensure availability and quality."
  },
  {
    id: "assess-q3",
    question: "In Excel, Sarah adds a linear trendline to her scatter plot showing advertising spend vs. weekly sales. The R-squared value is 0.82. What does this tell her about the relationship?",
    answers: [
      "Strong relationship (82% of sales variation explained by advertising) - reliable for forecasting",
      "Weak relationship (only 18% correlation) - advertising doesn't affect sales",
      "Perfect relationship - advertising guarantees sales increases",
      "No relationship exists between advertising and sales"
    ],
    explanation: "R-squared of 0.82 means 82% of sales variation can be explained by advertising spend, indicating a strong relationship. Values above 0.7 are generally considered reliable for business forecasting and decision-making."
  },
  {
    id: "assess-q4",
    question: "The café manager looks at Sarah's line chart and says, 'I see customer traffic drops 30% at 2 PM every day. Should we close early?' How should Sarah respond using data visualization principles?",
    answers: [
      "Create additional charts showing revenue per customer and operational costs to provide complete context",
      "Agree immediately since the chart shows declining traffic",
      "Dismiss the manager's concern since one chart shows the full picture",
      "Recommend closing based solely on traffic patterns"
    ],
    explanation: "Good data visualization tells complete stories. Traffic decline alone doesn't justify closing - Sarah needs to analyze revenue per customer, fixed costs, and profitability during low-traffic periods to make informed recommendations."
  },
  {
    id: "assess-q5",
    question: "Sarah builds a dashboard combining 4 charts: hourly sales, product mix, seasonal trends, and cost breakdown. What makes this more valuable than individual charts?",
    answers: [
      "Reveals connections between metrics and tells a complete business story for strategic decision-making",
      "Looks more impressive to clients but provides the same information",
      "Uses more advanced Excel features but offers no additional business value",
      "Combines unrelated data that confuses rather than clarifies business insights"
    ],
    explanation: "Dashboards reveal relationships between metrics that individual charts miss. For example, seasonal trends might explain product mix changes, while cost breakdown connects to pricing strategy. Integration creates strategic business intelligence."
  },
  {
    id: "assess-q6",
    question: "When creating charts for business executives, which formatting approach demonstrates professional data visualization standards?",
    answers: [
      "Clear titles stating business insights, professional colors, minimal gridlines, and data labels only where they add value",
      "Bright colors, 3D effects, and decorative elements to make charts more visually appealing",
      "Maximum detail with every possible data label and chart element displayed",
      "Generic titles and default Excel formatting to save time"
    ],
    explanation: "Professional charts prioritize clarity and insight over decoration. Clear titles, appropriate colors, strategic use of labels, and minimal visual clutter help busy executives quickly understand and act on data insights."
  },
  {
    id: "assess-q7",
    question: "Sarah discovers that her café charts reveal a 15% revenue increase following weather-related advertising campaigns. What Excel feature would best help her forecast this relationship for future campaigns?",
    answers: [
      "Scatter plot with linear trendline showing campaign spend vs. revenue increase",
      "Pie chart showing proportion of revenue from different advertising types",
      "Column chart comparing campaign costs across different months",
      "Line chart showing general revenue trends over time"
    ],
    explanation: "Scatter plots with trendlines are specifically designed to show relationships between two variables (advertising spend and revenue) and provide forecasting capability through the trendline equation and R-squared value."
  },
  {
    id: "assess-q8",
    question: "The café wants to reduce food waste from 8% to 3%. Which combination of Excel charts would best support Sarah's waste reduction strategy?",
    answers: [
      "Line chart for daily waste trends + Column chart comparing waste by menu item + Pie chart showing waste cost breakdown",
      "Single pie chart showing current waste percentages by category",
      "Line chart showing only total monthly waste trends",
      "Column chart comparing waste to industry averages"
    ],
    explanation: "Waste reduction requires multi-dimensional analysis: trends over time (line chart), item-specific patterns (column chart), and cost impact (pie chart). This combination reveals when, what, and how much waste occurs, enabling targeted interventions."
  }
]

// Sample data for demonstration charts
const hourlyRevenueData = [
  { hour: '8 AM', revenue: 1200 },
  { hour: '9 AM', revenue: 1800 },
  { hour: '10 AM', revenue: 2800 },
  { hour: '11 AM', revenue: 3400 },
  { hour: '12 PM', revenue: 4200 },
  { hour: '1 PM', revenue: 3600 },
  { hour: '2 PM', revenue: 2400 },
  { hour: '3 PM', revenue: 1500 }
]

const performanceLevels = [
  { level: 'Expert (8/8)', score: 100, color: '#22c55e' },
  { level: 'Advanced (6-7/8)', score: 87, color: '#3b82f6' },
  { level: 'Proficient (4-5/8)', score: 62, color: '#f59e0b' },
  { level: 'Developing (1-3/8)', score: 25, color: '#ef4444' }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Charts: Professional Mastery Assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chart interpretation and business analysis with professional standards evaluation
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Assessment Introduction */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Sarah's Professional Chart Certification</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah has reached the moment of truth. The café manager is presenting her analysis to the board 
                  of directors next week, and they're relying on Sarah's charts to make critical business decisions. 
                  This assessment measures your mastery of the same professional data visualization skills that 
                  Sarah uses to create business-grade charts.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Professional Assessment Standards</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-900">Technical Skills (50%)</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>Chart type selection for business scenarios</li>
                        <li>Professional formatting and design principles</li>
                        <li>Trendline analysis and forecasting accuracy</li>
                        <li>Dashboard integration and layout design</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">Business Application (50%)</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>Chart interpretation and insight extraction</li>
                        <li>Business decision support and recommendations</li>
                        <li>Strategic thinking and data-driven analysis</li>
                        <li>Professional communication standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Each question tests both your Excel technical knowledge and your ability to translate chart insights 
                  into actionable business recommendations. This mirrors the real-world challenges that Sarah faces 
                  when consulting for businesses that depend on data-driven decisions.
                </p>
              </CardContent>
            </Card>

            {/* Sample Chart for Context */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Assessment Context: Café Hourly Revenue Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-800 text-lg leading-relaxed">
                  Several assessment questions refer to charts like this one. Study the pattern and consider 
                  what business insights and decisions this data visualization supports.
                </p>
                
                <LineChart 
                  title="Saturday Revenue by Hour - Peak Performance Analysis"
                  description="Revenue flow reveals optimal staffing and operational timing"
                  data={hourlyRevenueData}
                  config={{
                    revenue: {
                      label: 'Revenue ($)',
                      color: 'hsl(142, 71%, 45%)'
                    }
                  }}
                  xAxisKey="hour"
                  height={300}
                  showGrid={true}
                  showLegend={false}
                />
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">What Business Insights Does This Chart Reveal?</h4>
                  <p className="text-green-800 text-sm">
                    Consider: peak hours, staffing implications, inventory timing, customer experience optimization, 
                    cost management opportunities, and operational efficiency improvements. The assessment questions 
                    will test your ability to extract these insights and translate them into actionable business recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Main Assessment */}
            <ComprehensionCheck
              title="Professional Excel Chart Mastery Assessment"
              description="Apply chart interpretation and business analysis skills to real-world scenarios"
              questions={assessmentQuestions}
              showExplanations={true}
              allowRetry={true}
            />

            {/* Performance Standards */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  Professional Proficiency Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-purple-800 text-lg leading-relaxed">
                  Your assessment score indicates your readiness for different levels of professional data 
                  visualization work. These standards align with industry expectations for Excel chart expertise.
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-4 text-center">📊 Your Assessment Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {performanceLevels.map((level, index) => (
                      <div key={index} className="text-center p-4 rounded-lg border" style={{ backgroundColor: `${level.color}15`, borderColor: level.color }}>
                        <div className="text-2xl font-bold mb-2" style={{ color: level.color }}>
                          {level.score}%
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {level.level}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-purple-800 mt-4 text-sm">
                    Your assessment score will place you in one of these proficiency levels, indicating your readiness for different Excel chart responsibilities.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">🏆 Expert Level (8/8 correct)</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      <strong>Ready for:</strong> Executive dashboard design, strategic business consulting, 
                      advanced analytics projects
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1 list-disc list-inside">
                      <li>Lead data visualization projects independently</li>
                      <li>Train others in professional chart standards</li>
                      <li>Design complex integrated dashboards</li>
                      <li>Present to C-level executives with confidence</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">⭐ Advanced Level (6-7/8 correct)</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      <strong>Ready for:</strong> Department-level reporting, business analysis roles, 
                      client-facing presentations
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1 list-disc list-inside">
                      <li>Create professional charts for management reporting</li>
                      <li>Support strategic planning with data visualizations</li>
                      <li>Collaborate on cross-functional analytics projects</li>
                      <li>Mentor colleagues in chart design principles</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">✅ Proficient Level (4-5/8 correct)</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      <strong>Ready for:</strong> Operational reporting, team-level analysis, 
                      internal business presentations
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1 list-disc list-inside">
                      <li>Create standard business charts and reports</li>
                      <li>Support day-to-day operational decision-making</li>
                      <li>Present findings to immediate supervisors</li>
                      <li>Continue developing advanced visualization skills</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-900 mb-2">📚 Developing Level (1-3/8 correct)</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      <strong>Focus on:</strong> Foundational chart skills, guided practice, 
                      basic business applications
                    </p>
                    <ul className="text-purple-800 text-xs space-y-1 list-disc list-inside">
                      <li>Practice basic chart creation and formatting</li>
                      <li>Study business context for data visualization</li>
                      <li>Work with mentors on chart interpretation</li>
                      <li>Build experience with simple dashboard design</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Connection */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  Career Connections: Where Chart Skills Lead
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah's Excel chart mastery opened doors to high-value consulting opportunities and strategic 
                  business roles. Your performance on this assessment indicates your readiness for similar 
                  career paths that value data visualization expertise.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">💼 Business Analyst</h3>
                    <p className="text-green-800 text-sm mb-2">
                      Transform data into strategic insights for executive decision-making
                    </p>
                    <ul className="text-green-800 text-xs space-y-1 list-disc list-inside">
                      <li>Average salary: $65,000-$95,000</li>
                      <li>High demand across all industries</li>
                      <li>Remote work opportunities available</li>
                      <li>Clear promotion path to senior roles</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">📊 Data Consultant</h3>
                    <p className="text-green-800 text-sm mb-2">
                      Help businesses optimize operations through professional data visualization
                    </p>
                    <ul className="text-green-800 text-xs space-y-1 list-disc list-inside">
                      <li>Hourly rates: $75-$150+</li>
                      <li>Flexible project-based work</li>
                      <li>Diverse client industries</li>
                      <li>Entrepreneurial opportunities</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">🎯 Business Intelligence</h3>
                    <p className="text-green-800 text-sm mb-2">
                      Design enterprise dashboards and reporting systems for major corporations
                    </p>
                    <ul className="text-green-800 text-xs space-y-1 list-disc list-inside">
                      <li>Average salary: $75,000-$120,000</li>
                      <li>Technology-forward work environment</li>
                      <li>Strategic impact on business success</li>
                      <li>Continuous learning and growth</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">🚀 Next Steps Based on Your Performance</h4>
                  <p className="text-green-800 text-sm">
                    <strong>Advanced/Expert:</strong> Consider applying for business analyst internships, 
                    data visualization competitions, or freelance consulting projects.<br/>
                    <strong>Proficient:</strong> Build a portfolio of Excel dashboards using real business 
                    data to demonstrate your skills to potential employers.<br/>
                    <strong>Developing:</strong> Focus on completing additional practice projects and 
                    seeking mentorship from professionals in data analysis roles.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps Preview */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Looking Ahead: Advanced Forecasting Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Your chart mastery creates the foundation for even more powerful Excel skills. In lesson05, 
                  Sarah will learn regression forecasting and statistical modeling - the advanced techniques 
                  that transform good analysts into strategic business advisors.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Preview: Lesson05 Advanced Skills</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-900">Statistical Forecasting</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>LINEAR FORECAST and TREND functions</li>
                        <li>Regression analysis for demand prediction</li>
                        <li>Confidence intervals and error analysis</li>
                        <li>Seasonal adjustment techniques</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900">Business Intelligence</h4>
                      <ul className="text-blue-800 space-y-1 list-disc list-inside">
                        <li>Scenario modeling and what-if analysis</li>
                        <li>Automated reporting systems</li>
                        <li>KPI dashboard development</li>
                        <li>Strategic planning support tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Strong chart skills ensure your forecasting models will be clearly communicated and 
                  actionable for business decision-makers. Sarah's journey from spreadsheet confusion 
                  to strategic consultant continues with even more powerful analytical tools.
                </p>
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