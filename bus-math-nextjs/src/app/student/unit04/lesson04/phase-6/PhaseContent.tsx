import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ArrowRight } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              Phase 6: Closing
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Forecasting Logic Complete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You've learned to read trend lines and understand what predictions can and cannot do
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6" />
                  What You've Learned
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah now understands that forecasting isn't about predicting the exact future - it's about 
                  understanding the range of reasonable outcomes and planning accordingly. She's ready to move 
                  from understanding the logic to using Excel to automate the process.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Core Concepts Mastered</h3>
                    <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                      <li>Trend lines show pattern, not certainty</li>
                      <li>Slope quantifies rate of change</li>
                      <li>R-squared shows consistency, not quality</li>
                      <li>Predictions become unreliable far from data</li>
                      <li>Relationships can be positive or negative</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Business Skills Developed</h3>
                    <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                      <li>Interpret scatter plots for business decisions</li>
                      <li>Calculate simple predictions from patterns</li>
                      <li>Recognize diminishing returns patterns</li>
                      <li>Know when to trust and question forecasts</li>
                      <li>Communicate limits of predictions clearly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Connection to Unit Problem</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Remember the unit's driving question: <em>"Given two years of weekend POS data, what inventory 
                  and staffing plan will maximize weekend profits without raising waste above 3%?"</em>
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">How Forecasting Helps Answer This</h3>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-400 pl-3">
                      <p className="font-medium text-blue-900">Predict demand</p>
                      <p className="text-blue-800">Use past weekend patterns to forecast next weekend's customer count, guiding inventory and staffing decisions.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-3">
                      <p className="font-medium text-blue-900">Identify optimal levels</p>
                      <p className="text-blue-800">Find where adding more staff or inventory stops giving returns - the "sweet spot" that maximizes profit.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-3">
                      <p className="font-medium text-blue-900">Plan for waste limits</p>
                      <p className="text-blue-800">Balance ordering enough to meet demand while staying under the 3% waste threshold.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed">
                  In upcoming Excel lessons, you'll build the tools that actually calculate these forecasts automatically, 
                  starting with data cleaning and statistical analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  Next: Building Forecasts in Excel
                  <ArrowRight className="h-6 w-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  You're now ready to move from understanding forecasting logic to building the Excel tools that automate it. 
                  In Lessons 5-6, you'll learn to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Lesson 5: Data Cleaning & Analysis</h3>
                    <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                      <li>Import and organize café data</li>
                      <li>Identify and handle outliers</li>
                      <li>Calculate basic statistics</li>
                      <li>Prepare data for visualization</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Lesson 6: Visualizations & Recommendations</h3>
                    <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                      <li>Build scatter plots automatically</li>
                      <li>Add trend lines and R-squared</li>
                      <li>Use FORECAST and TREND functions</li>
                      <li>Create evidence-based recommendations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Why This Lesson Was Essential</h4>
                  <p className="text-green-800 text-sm">
                    You now understand what those Excel tools are actually doing. A analyst who just clicks "add trendline" 
                    without understanding slope, fit, and danger zones will make dangerous over-confident predictions. 
                    You're prepared to use these tools wisely.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl text-center">
                  Lesson 4 Complete: Forecasting Logic Achieved
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-blue-800 text-lg leading-relaxed">
                  You've mastered the foundational concepts of forecasting logic. You can now read trend lines, 
                  interpret slope and fit, and most importantly - understand what predictions can and cannot tell you.
                  This makes you ready for the Excel build lessons that will automate these calculations.
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-4">Ready for Lesson 5: Data Cleaning and Analysis</h3>
                  <p className="text-blue-800 mb-4">
                    Move from understanding the logic to building the Excel tools that apply it.
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-700 font-medium">
                    <span>Continue to Lesson 5</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                
                <p className="text-blue-800 font-medium">
                  You're building skills that will make you a smarter analyst - one who uses tools wisely rather than 
                  blindly trusting any number.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

    </div>
  )
}