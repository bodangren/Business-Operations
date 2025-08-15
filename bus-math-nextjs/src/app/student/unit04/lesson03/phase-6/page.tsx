import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[5]

const reflectionPrompts = [
  {
    id: 'courage-statistical-thinking',
    category: 'courage' as const,
    prompt: 'Statistical analysis can be intimidating at first. Describe a moment in this lesson when you felt uncertain about your calculations or interpretations but pushed through anyway. What gave you the courage to trust your analytical process?',
    placeholder: 'Think about times when you questioned your z-score calculations, felt unsure about outlier decisions, or hesitated before using Analysis ToolPak...'
  },
  {
    id: 'adaptability-data-detective',
    category: 'adaptability' as const,
    prompt: 'When you discovered outliers in the café data, you had to shift from pure mathematical thinking to business detective work. How did you adapt your approach when statistics alone wasn\'t enough to make decisions?',
    placeholder: 'Consider how you adjusted when faced with the $127 catering order vs. the $0.05 error, or when explaining technical concepts in business terms...'
  },
  {
    id: 'persistence-complex-analysis',
    category: 'persistence' as const,
    prompt: 'Working through comprehensive statistical analysis requires sustained focus and attention to detail. Describe a specific moment when you wanted to give up on a complex calculation or Excel formula but kept working. What strategies helped you persist?',
    placeholder: 'Reflect on challenges with Analysis ToolPak, formula troubleshooting, or making sense of conflicting data patterns...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Closing Content */}
        <div className="prose prose-lg max-w-none">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 text-2xl">From Numbers to Insights: Your Statistical Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-800">
              <p className="text-lg leading-relaxed">
                Today you've experienced what it feels like to be a professional data detective. You started 
                with a chaotic pile of café transaction data - numbers that seemed meaningless at first glance. 
                But through the power of descriptive statistics, z-score analysis, and Excel's Analysis ToolPak, 
                you transformed that chaos into actionable business intelligence.
              </p>
              
              <p className="text-lg leading-relaxed">
                More importantly, you've learned to think like Sarah Chen - combining statistical rigor with 
                business judgment to make decisions that matter. When you investigated that $127.50 transaction, 
                you weren't just calculating z-scores; you were asking the critical question every consultant 
                must answer: "What does this data mean for the business?"
              </p>

              <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
                <h3 className="font-semibold text-indigo-900 mb-2">Your Statistical Detective Toolkit</h3>
                <p className="text-indigo-800 mb-3">
                  You now possess the same analytical tools that professional data consultants use every day:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-indigo-900 text-sm">Core Statistical Skills</h4>
                    <ul className="text-xs text-indigo-800 space-y-1 mt-1">
                      <li>• Calculate mean, median, and standard deviation</li>
                      <li>• Interpret z-scores for outlier detection</li>
                      <li>• Use Analysis ToolPak for professional reports</li>
                      <li>• Apply AVERAGEIF and SUMIF for category analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-900 text-sm">Business Intelligence Skills</h4>
                    <ul className="text-xs text-indigo-800 space-y-1 mt-1">
                      <li>• Distinguish data errors from business insights</li>
                      <li>• Translate statistics into actionable recommendations</li>
                      <li>• Communicate findings to non-technical stakeholders</li>
                      <li>• Apply statistical thinking to real-world problems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Connection to Unit Goals */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 text-xl">Building Toward the Café's Success</CardTitle>
          </CardHeader>
          <CardContent className="text-green-800 space-y-4">
            <p className="text-lg leading-relaxed">
              Your statistical analysis work today is the foundation for everything that follows in the 
              Data-Driven Café unit. Sarah now has clean, reliable data and knows which patterns are 
              real versus which are errors. This is the bedrock that supports all future analysis.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Coming Next: Visualization</h4>
                <p className="text-xs text-green-800 mt-1">
                  You'll create histograms, box plots, and scatterplots to reveal patterns that statistics 
                  alone can't show - turning your numbers into compelling visual stories.
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Then: Forecasting Models</h4>
                <p className="text-xs text-green-800 mt-1">
                  Using linear regression and correlation analysis, you'll predict future café demand 
                  to optimize inventory and staffing decisions.
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Finally: Client Presentation</h4>
                <p className="text-xs text-green-800 mt-1">
                  You'll present your complete analysis to the café manager with professional recommendations 
                  for achieving their 3% waste reduction goal.
                </p>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">The Power of Statistical Foundation</h4>
              <p className="text-green-800 text-sm">
                Without today's rigorous statistical groundwork, all future analysis would be built on 
                shaky assumptions. By mastering descriptive statistics and outlier detection, you've 
                ensured that every recommendation you make will be backed by solid, reliable data. 
                This is what separates professional consultants from amateurs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Real-World Impact */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 text-xl">Beyond the Classroom: Where These Skills Lead</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <p className="text-lg leading-relaxed mb-4">
              The statistical detective skills you've developed today extend far beyond analyzing café data. 
              You're now equipped with the analytical foundation that drives decision-making in every 
              modern industry.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Healthcare</h4>
                <p className="text-xs text-blue-800 mb-2">
                  <strong>Application:</strong> Analyzing patient outcome data to identify treatment patterns
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Detect unusual medical test results requiring investigation</li>
                  <li>• Calculate average recovery times by treatment type</li>
                  <li>• Identify hospitals with statistically different success rates</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Manufacturing</h4>
                <p className="text-xs text-blue-800 mb-2">
                  <strong>Application:</strong> Quality control and process optimization
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Identify defective products using control charts</li>
                  <li>• Calculate production efficiency by shift and operator</li>
                  <li>• Detect equipment problems before they cause failures</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Finance</h4>
                <p className="text-xs text-blue-800 mb-2">
                  <strong>Application:</strong> Risk assessment and fraud detection
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Flag unusual spending patterns for fraud investigation</li>
                  <li>• Calculate portfolio risk using standard deviation</li>
                  <li>• Analyze market volatility and trading anomalies</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Marketing</h4>
                <p className="text-xs text-blue-800 mb-2">
                  <strong>Application:</strong> Customer behavior analysis and campaign optimization
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Identify high-value customer segments</li>
                  <li>• Detect unusual purchasing patterns for targeting</li>
                  <li>• Calculate campaign effectiveness by demographic</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 mt-4">
              <p className="text-blue-800 text-sm">
                <strong>The Common Thread:</strong> In every one of these applications, professionals start 
                exactly where you started today - with messy data that needs cleaning, outliers that need 
                investigation, and patterns that need statistical analysis to become actionable insights.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reflection Journal */}
        <ReflectionJournal
          unitTitle="Statistical Analysis & Data Detective Work - Lesson 3 Reflection"
          prompts={reflectionPrompts}
        />

        {/* Looking Forward */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 text-xl">Ready for Data Visualization Adventures</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-800">
            <p className="text-lg leading-relaxed">
              You've built a strong statistical foundation, but numbers in tables can only tell part of 
              the story. In our next lesson, Sarah will show you how to transform your statistical analysis 
              into powerful visualizations that instantly reveal patterns invisible in spreadsheet cells.
            </p>

            <div className="bg-white p-4 rounded-lg border border-purple-200 mt-4">
              <h3 className="font-semibold text-purple-900 mb-2">Preview: From Statistics to Stories</h3>
              <p className="text-purple-800 text-sm mb-2">
                Coming up, you'll learn to create:
              </p>
              <ul className="text-purple-800 space-y-1 text-sm">
                <li>• <strong>Histograms</strong> that show the true shape of customer spending patterns</li>
                <li>• <strong>Box plots</strong> that instantly compare weekend vs. weekday performance</li>
                <li>• <strong>Scatterplots</strong> that reveal hidden relationships between variables</li>
                <li>• <strong>Professional dashboards</strong> that communicate insights at a glance</li>
              </ul>
              <p className="text-purple-800 text-sm mt-3">
                By combining today's statistical rigor with compelling visualizations, you'll have 
                everything needed to deliver the complete consulting package that transforms the café's operations.
              </p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg border border-purple-200 mt-4">
              <h4 className="font-semibold text-purple-900 mb-2">Congratulations on Your Progress!</h4>
              <p className="text-purple-800 text-sm">
                Today you've taken a major step in your journey from student to data professional. 
                You've proven you can handle complex statistical concepts, use professional-grade tools, 
                and most importantly, think critically about what data means for business success. 
                Sarah would be proud to have you as her analysis partner!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit04Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  )
}