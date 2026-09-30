import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckSquare, TrendingUp, AlertTriangle } from "lucide-react"

const practiceScenarios = [
  {
    id: "scenario-1",
    scenario: "A café tracks weekend sales and finds: Month 1: $9,200, Month 2: $9,600, Month 3: $10,000, Month 4: $10,400",
    question: "Based on this pattern, predict Month 6 sales.",
    answer: "$11,200",
    hint: "The pattern shows $400 increase per month. Month 6 is 5 months after Month 1."
  },
  {
    id: "scenario-2", 
    scenario: "A restaurant finds that when they have 4 staff members, sales are $5,200. With 5 staff, sales are $5,600. With 6 staff, sales are $5,900.",
    question: "What is happening to the relationship as staff increases beyond 4?",
    answer: "Diminishing returns - each additional staff member adds less than the previous one",
    hint: "4→5 adds $400, 5→6 adds $300. The additional benefit is shrinking."
  },
  {
    id: "scenario-3",
    scenario: "A coffee shop's data shows a strong positive relationship between morning temperature and iced coffee sales.",
    question: "What would you predict for a very hot day (95°F)?",
    answer: "High iced coffee sales - the pattern suggests more hot weather = more iced coffee demand",
    hint: "Positive relationship means both increase together. Very hot = very high predicted sales."
  }
]

export default function Phase4Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 4: Independent Practice
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Forecasting Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apply your trend line interpretation skills to new scenarios with auto-checking
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Challenge 2: Pattern Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-purple-800 text-lg leading-relaxed">
                  Read each scenario and identify what the pattern suggests. Focus on the relationship shape and what it implies.
                </p>
                
                {practiceScenarios.map((scenario, idx) => (
                  <div key={scenario.id} className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Scenario {idx + 1}: {scenario.question}</h4>
                    <p className="text-purple-800 text-sm mb-2">{scenario.scenario}</p>
                    <div className="bg-purple-100 p-3 rounded border border-purple-200">
                      <p className="text-purple-800 text-sm">
                        <strong>Hint:</strong> {scenario.hint}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="bg-purple-100 p-4 rounded border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2">Discussion: What patterns do you notice?</h4>
                  <ul className="text-purple-800 text-sm space-y-2 list-disc list-inside">
                    <li>How did you calculate the Month 6 prediction?</li>
                    <li>What does "diminishing returns" mean for business planning?</li>
                    <li>Why is it important to think about the relationship shape, not just the final number?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900 text-2xl flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Challenge 3: When NOT to Trust Predictions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-orange-800 text-lg leading-relaxed">
                  Good analysts know the limits of their models. Here's where forecasting breaks down.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">Danger Signs</h3>
                    <ul className="text-orange-800 text-sm space-y-2 list-disc list-inside">
                      <li>Low R-squared - pattern is weak</li>
                      <li>Predicting far outside data range</li>
                      <li>Major changes in business conditions</li>
                      <li>New competitors or regulations</li>
                      <li>Single unusual event in the data</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-900 mb-2">What To Do Instead</h3>
                    <ul className="text-orange-800 text-sm space-y-2 list-disc list-inside">
                      <li>Use ranges, not single numbers</li>
                      <li>Build in safety margins</li>
                      <li>Plan for multiple scenarios</li>
                      <li>Update predictions frequently</li>
                      <li>Combine with expert judgment</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-100 p-4 rounded border border-red-200">
                  <h4 className="font-medium text-red-900 mb-2">Common Forecasting Mistakes</h4>
                  <div className="space-y-2 text-red-800 text-sm">
                    <p><strong>False precision:</strong> "Sales will be exactly $9,847" - instead say "likely between $9,000-$10,500"</p>
                    <p><strong>Ignoring uncertainty:</strong> Treating the prediction as a guarantee rather than a reasonable estimate</p>
                    <p><strong>Extrapolation abuse:</strong> Using a short trend to predict far into the future</p>
                    <p><strong>Assuming no change:</strong> "The pattern will continue exactly" when conditions may change</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                  <CheckSquare className="h-6 w-6" />
                  Self-Assessment Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-800 text-lg leading-relaxed">
                  Before moving to the assessment, check that you can do each of these:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Conceptual Understanding</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I can explain what a trend line shows and what it doesn't promise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I can distinguish between positive and negative relationships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I understand what R-squared means (consistency, not quality)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I know when predictions become unreliable</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Applied Skills</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I can calculate a simple prediction from slope and starting value</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I can interpret what the slope means in business terms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I can identify diminishing returns patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>I can explain why forecasting has limits</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">Mastery Target</h4>
                  <p className="text-green-800 text-sm">
                    If you can check all 8 items, you're ready for the assessment. If you have gaps, review the relevant phase before continuing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

    </div>
  )
}