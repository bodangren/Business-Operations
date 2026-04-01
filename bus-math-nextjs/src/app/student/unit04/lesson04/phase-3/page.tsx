import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { ScatterChart } from "@/components/charts/ScatterChart"
import { Users, TrendingUp, BarChart3 } from "lucide-react"
import { lesson04Data, unit04Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[2]

// Sample data for café scenarios
const advertisingData = [
  { x: 100, y: 1200 },
  { x: 200, y: 1450 },
  { x: 300, y: 1600 },
  { x: 400, y: 1900 },
  { x: 500, y: 2100 },
  { x: 600, y: 2200 },
  { x: 700, y: 2350 },
  { x: 800, y: 2500 },
]

const temperatureData = [
  { x: 45, y: 8200 },
  { x: 55, y: 7800 },
  { x: 65, y: 6500 },
  { x: 75, y: 5200 },
  { x: 85, y: 4800 },
  { x: 95, y: 5100 },
]

const staffingData = [
  { x: 2, y: 3200 },
  { x: 3, y: 4500 },
  { x: 4, y: 5200 },
  { x: 5, y: 5800 },
  { x: 6, y: 6100 },
  { x: 7, y: 6200 },
  { x: 8, y: 6300 },
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
              Phase 3: Guided Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Interpreting Real Business Relationships
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use scatter plots to find patterns beyond just time - what else affects café sales?
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 text-2xl">Beyond Time: Other Factors That Matter</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah realized that looking only at time (month over month) isn't the only useful pattern. 
                  She can also look at <strong>relationships between two variables</strong>: Does advertising spend 
                  predict sales? Does temperature predict sales? Does staffing level predict sales?
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">This Lesson's Focus</h3>
                  <p className="text-blue-800">
                    Use scatter plots to find and interpret relationships between business variables. This is 
                    exactly what Excel's regression tools will automate in upcoming lessons - but understanding 
                    the logic first makes you a better analyst.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <BarChart3 className="h-6 w-6" />
                  Practice 1: Advertising Spending vs. Sales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">Business Question</h3>
                  <p className="text-green-800">
                    The café manager wants to know: "If I spend more on advertising, will I make more sales?"
                  </p>
                </div>
                
                <ScatterChart 
                  title="Advertising Spend vs. Weekend Sales"
                  description="Each dot represents one weekend's advertising spend and resulting sales"
                  data={advertisingData}
                  xAxisLabel="Advertising Spend ($)"
                  yAxisLabel="Weekend Sales ($)"
                  height={350}
                />
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Interpretation Questions</h4>
                  <ol className="text-green-800 text-sm space-y-2 list-decimal list-inside">
                    <li>What direction does the relationship go? (Positive or Negative?)</li>
                    <li>What does the slope tell you? (For each $100 more spent on advertising, about how much more in sales?)</li>
                    <li>How consistent is the pattern? (Are dots close to the line or scattered?)</li>
                    <li>What would you predict for a weekend with $450 in advertising?</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Answers</h4>
                  <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
                    <li><strong>Direction:</strong> Positive - more advertising → more sales</li>
                    <li><strong>Slope:</strong> About $2 per $1 spent (each $100 in ads adds ~$200 in sales)</li>
                    <li><strong>Consistency:</strong> Pretty high - points cluster reasonably close to the line</li>
                    <li><strong>Prediction:</strong> Approximately $2,000 in sales for $450 advertising</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Practice 2: Temperature vs. Sales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-900 mb-2">Business Question</h3>
                  <p className="text-orange-800">
                    "Does weather affect our sales? Should I plan for more inventory on hot days?"
                  </p>
                </div>
                
                <ScatterChart 
                  title="Temperature vs. Weekend Sales"
                  description="Each dot represents one weekend's high temperature and café sales"
                  data={temperatureData}
                  xAxisLabel="Temperature (°F)"
                  yAxisLabel="Weekend Sales ($)"
                  height={350}
                />
                
                <div className="bg-orange-100 p-4 rounded border border-orange-200">
                  <h4 className="font-medium text-orange-900 mb-2">Interpretation Questions</h4>
                  <ol className="text-orange-800 text-sm space-y-2 list-decimal list-inside">
                    <li>What direction does the relationship go? Is this surprising or expected?</li>
                    <li>What does the slope tell you? (For each degree warmer, how much do sales change?)</li>
                    <li>What might explain this pattern? (Think like a café owner - what do people want on hot vs. cold days?)</li>
                    <li>What would you predict for a 70°F weekend?</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">Answers</h4>
                  <ul className="text-orange-800 text-sm space-y-1 list-disc list-inside">
                    <li><strong>Direction:</strong> Negative - hotter days → lower sales (probably because people stay cool indoors)</li>
                    <li><strong>Slope:</strong> About -$65 per degree (each degree warmer = $65 less in sales)</li>
                    <li><strong>Pattern explanation:</strong> On hot days, people may go to air-conditioned malls or avoid the café's outdoor area</li>
                    <li><strong>Prediction:</strong> Approximately $6,000 in sales for 70°F</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl">Practice 3: Staffing Level vs. Sales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Business Question</h3>
                  <p className="text-purple-800">
                    "How many staff members do I need? Is there a point where adding more staff doesn't help?"
                  </p>
                </div>
                
                <ScatterChart 
                  title="Staff Members vs. Weekend Sales"
                  description="Each dot represents one weekend's number of staff and café sales"
                  data={staffingData}
                  xAxisLabel="Number of Staff"
                  yAxisLabel="Weekend Sales ($)"
                  height={350}
                />
                
                <div className="bg-purple-100 p-4 rounded border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">Interpretation Challenge</h4>
                  <ol className="text-purple-800 text-sm space-y-2 list-decimal list-inside">
                    <li>What happens to sales as staff increases from 2 to 5? What about 5 to 8?</li>
                    <li>What does this suggest about optimal staffing?</li>
                    <li>Why might the relationship flatten out at higher staffing levels?</li>
                    <li>What other factors might explain this pattern?</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Key Insight: Diminishing Returns</h4>
                  <p className="text-purple-800 text-sm">
                    The staffing relationship shows <strong>diminishing returns</strong>. Going from 2→3 staff adds ~$1,300 in sales. 
                    Going from 7→8 staff might add only $100. At some point, more staff creates crowding without improving service, 
                    or there's simply not enough customers to serve.
                  </p>
                  <p className="text-purple-800 text-sm mt-2">
                    This is exactly the kind of insight that makes forecasting valuable - not to get an exact number, but 
                    to understand the <em>shape</em> of the relationship and where the optimal point might be.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Collaborative Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-3">
                  Team Activity (10 minutes):
                </p>
                <div className="space-y-3 text-blue-800">
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p className="font-medium">Step 1: Choose a scenario (2 minutes)</p>
                    <p className="text-sm">Each team picks one: advertising, temperature, staffing, or invent your own</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p className="font-medium">Step 2: Make predictions (4 minutes)</p>
                    <p className="text-sm">For your scenario, predict: (a) direction, (b) approximate slope, (c) confidence level</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-3">
                    <p className="font-medium">Step 3: Share with team (4 minutes)</p>
                    <p className="text-sm">Explain your reasoning - what business knowledge informed your prediction?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl">Key Takeaways</CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Relationships Are Everywhere</h3>
                    <p className="text-green-800 text-sm">
                      Time isn't the only variable that matters. Scatter plots reveal relationships between any two 
                      business variables you can measure.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Direction Tells the Story</h3>
                    <p className="text-green-800 text-sm">
                      Positive (both go up) or negative (one goes up, one goes down) - this tells you whether 
                      increasing one variable helps or hurts the other.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Slope Quantifies Impact</h3>
                    <p className="text-green-800 text-sm">
                      The slope tells you exactly how much the outcome changes for each unit increase in the input - 
                      essential for planning and budgeting.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Fit Shows Certainty</h3>
                    <p className="text-green-800 text-sm">
                      How tightly points cluster around the line shows how reliable your predictions will be. 
                      Low fit doesn't mean "bad" - just "less certain."
                    </p>
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