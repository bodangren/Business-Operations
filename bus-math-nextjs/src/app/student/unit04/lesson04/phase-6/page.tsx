import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import { Award, ArrowRight, TrendingUp, Users } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[5]

const reflectionPrompts = [
  {
    id: "courage-charts",
    category: "courage" as const,
    prompt: "Describe a moment when you showed courage while learning Excel chart creation. What was challenging about moving from raw data to visual insights?",
    placeholder: "The most challenging part of chart creation was... but I showed courage by..."
  },
  {
    id: "courage-business",
    category: "courage" as const,
    prompt: "How did you push through any uncertainty when interpreting business data and making recommendations? What gave you confidence?",
    placeholder: "I felt uncertain about... but I built confidence by..."
  },
  {
    id: "adaptability-feedback",
    category: "adaptability" as const,
    prompt: "How did you adapt your chart designs when you discovered they weren't telling the right business story? What changes did you make?",
    placeholder: "I had to change my approach when... by adapting in this way..."
  },
  {
    id: "adaptability-audience",
    category: "adaptability" as const,
    prompt: "How did you adjust your visualization style to communicate effectively with different audiences (technical vs. executive)? What did you learn?",
    placeholder: "I adapted my communication style by... and learned that different audiences need..."
  },
  {
    id: "persistence-complexity",
    category: "persistence" as const,
    prompt: "Describe how you persisted through the complexity of creating professional dashboards. What kept you motivated when the work got challenging?",
    placeholder: "The most complex part was... but I persisted because..."
  },
  {
    id: "persistence-mastery",
    category: "persistence" as const,
    prompt: "How did you persist in developing chart interpretation skills that connect data patterns to business decisions? What breakthrough moments did you experience?",
    placeholder: "I kept working on interpretation skills even when... and my breakthrough came when..."
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit04Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Chart Mastery Complete
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building your future with professional data visualization skills and strategic business insights
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Achievement Celebration */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  Sarah's Data Visualization Breakthrough
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah stands in front of the café board of directors, confidently presenting her Excel dashboard. 
                  Gone are the days of 47-page spreadsheet reports that confused rather than clarified. Her charts 
                  tell a compelling story: optimal staffing schedules, inventory strategies, and waste reduction 
                  plans that will save the café $12,000 annually while improving customer satisfaction.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">What Sarah Achieved in This Lesson</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-green-900">Technical Mastery</h4>
                      <ul className="text-green-800 space-y-1 list-disc list-inside">
                        <li>Excel chart type selection for any business scenario</li>
                        <li>Professional formatting that meets executive standards</li>
                        <li>Trendline analysis for forecasting and decision support</li>
                        <li>Dashboard integration for comprehensive business intelligence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-900">Strategic Impact</h4>
                      <ul className="text-green-800 space-y-1 list-disc list-inside">
                        <li>Transform raw data into actionable business insights</li>
                        <li>Support executive decision-making with visual evidence</li>
                        <li>Communicate complex analysis in seconds, not hours</li>
                        <li>Build credibility as a strategic business advisor</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  The board approves Sarah's recommendations unanimously. More importantly, they ask her to design 
                  similar analytics systems for their other business ventures. Sarah's Excel chart mastery has 
                  transformed her from a bookkeeper into a strategic consultant commanding premium rates.
                </p>
              </CardContent>
            </Card>

            {/* Skills Integration Summary */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Your Data Visualization Toolkit</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  You've mastered the same Excel chart skills that Sarah uses to create business-grade visualizations. 
                  This toolkit positions you to tackle complex data analysis challenges and communicate insights 
                  effectively to any business audience.
                </p>
                
                <FinancialDashboard 
                  title="Your Professional Chart Mastery Portfolio"
                  refreshable={false}
                  exportable={true}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                />
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Foundation Skills
                    </h3>
                    <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                      <li>Strategic chart type selection</li>
                      <li>Professional formatting standards</li>
                      <li>Business-focused title and labeling</li>
                      <li>Data source organization and preparation</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Advanced Techniques
                    </h3>
                    <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                      <li>Trendline analysis and forecasting</li>
                      <li>Dashboard design and integration</li>
                      <li>Interactive elements and dynamic ranges</li>
                      <li>Executive-level presentation quality</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Business Impact
                    </h3>
                    <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                      <li>Chart interpretation for decision-making</li>
                      <li>Strategic insight extraction from data patterns</li>
                      <li>Business recommendation development</li>
                      <li>Professional stakeholder communication</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connection to Unit Driving Question */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">Solving the Café's Challenge</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Remember the unit's driving question: <em>"Given two years of POS data, what inventory and 
                  staffing plan will maximize weekend profits without raising waste above 3%?"</em> Your Excel 
                  chart mastery provides the visualization foundation for answering this complex question.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">How Charts Support Data-Driven Decisions</h3>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="font-medium text-purple-900">Staffing Optimization</p>
                      <p className="text-purple-800">Line charts reveal peak customer traffic patterns, enabling precise staffing schedules that reduce labor costs while maintaining service quality.</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-3">
                      <p className="font-medium text-purple-900">Inventory Management</p>
                      <p className="text-purple-800">Column charts compare item-level sales performance, identifying which products to stock heavily and which to minimize to reduce waste.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="font-medium text-purple-900">Profit Maximization</p>
                      <p className="text-purple-800">Pie charts show profit margin distribution, highlighting which menu categories deserve promotion and resource allocation.</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-3">
                      <p className="font-medium text-purple-900">Waste Reduction</p>
                      <p className="text-purple-800">Scatter plots with trendlines identify relationships between ordering patterns and waste levels, enabling predictive inventory management.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  In lesson05, you'll build on these visualization skills to create the statistical models and 
                  forecasting systems that provide the quantitative answers to the café's optimization challenge.
                </p>
              </CardContent>
            </Card>

            {/* CAP Framework Reflection */}
            <ReflectionJournal
              unitTitle="Unit 4: Data-Driven Café - Excel Chart Mastery"
              prompts={reflectionPrompts}
            />

            {/* Future Learning Path */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  Building Your Future with Data Visualization Skills
                  <ArrowRight className="h-6 w-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Your Excel chart mastery opens doors to exciting career opportunities and advanced analytical skills. 
                  Like Sarah, you now possess professional-grade data visualization capabilities that businesses value highly.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">🎯 Immediate Opportunities</h3>
                    <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                      <li>Volunteer to create charts for school or community organizations</li>
                      <li>Offer dashboard design services to local small businesses</li>
                      <li>Apply for business analyst internships or entry-level positions</li>
                      <li>Build a portfolio of chart examples using real business data</li>
                      <li>Join data visualization communities and competitions</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">📈 Advanced Skills Pipeline</h3>
                    <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                      <li><strong>Lesson05:</strong> Statistical forecasting and regression modeling</li>
                      <li><strong>Unit 5:</strong> Financial modeling and cash flow optimization</li>
                      <li><strong>Unit 6:</strong> Cost-volume-profit analysis and pricing strategy</li>
                      <li><strong>Capstone:</strong> Integrated business model with investor presentation</li>
                      <li><strong>Career:</strong> Business intelligence, data science, strategic consulting</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">🌟 Your Competitive Advantage</h4>
                  <p className="text-green-800 text-sm">
                    In an increasingly data-driven business environment, your ability to transform complex information 
                    into clear, actionable visualizations sets you apart. Employers value candidates who can not only 
                    analyze data but also communicate insights effectively to stakeholders at all levels. You're 
                    building skills that will remain valuable throughout your career as businesses continue to rely 
                    more heavily on data-driven decision making.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Completion Celebration */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl text-center">🎉 Lesson 4 Complete: Excel Chart Mastery Achieved</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-blue-800 text-lg leading-relaxed">
                  You've successfully mastered professional Excel chart creation and business data visualization. 
                  Like Sarah, you can now transform confusing spreadsheets into compelling visual stories that 
                  drive smart business decisions.
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-4">Ready for Lesson 5: Advanced Forecasting & Statistical Analysis</h3>
                  <p className="text-blue-800 mb-4">
                    Build on your chart mastery to create predictive models that forecast café demand, optimize 
                    inventory levels, and provide quantitative answers to complex business questions.
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-700 font-medium">
                    <span>Continue to Lesson 5</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                
                <p className="text-blue-800 font-medium">
                  Your journey from data confusion to strategic insight continues. The advanced analytical skills 
                  you'll learn next will complete your transformation into a professional business intelligence expert.
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