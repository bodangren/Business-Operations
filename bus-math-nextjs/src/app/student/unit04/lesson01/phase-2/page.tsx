
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit04Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  const scoreboardMetrics = [
    { 
      metric: "Weekend Profit", 
      definition: "Total revenue minus total costs for Saturday and Sunday operations",
      unit: " dollars",
      target: " Maximize "
    },
    { 
      metric: "Waste %", 
      definition: "Unsold inventory divided by total inventory ordered, expressed as percentage",
      unit: " %",
      target: " ≤ 3%"
    },
    { 
      metric: "Inventory Accuracy", 
      definition: "How close your predicted demand matches actual sales",
      unit: " %",
      target: " ≥ 95%"
    },
    { 
      metric: "Staffing Efficiency", 
      definition: "Labor cost as percentage of revenue",
      unit: " %",
      target: " 15-25%"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">The Unit Scoreboard: Weekend Decision Frame</CardTitle>
            <CardDescription className="text-green-700 mt-2">
              These are the metrics you'll track throughout this unit. Master them, and you'll be able to help any business optimize its weekend operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {scoreboardMetrics.map((item) => (
                <div key={item.metric} className="p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <div className="font-bold text-lg text-green-900">{item.metric}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.definition}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500">Target:</span>
                    <span className="text-sm font-semibold text-green-700">{item.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800">The Core Tension</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Here's the problem in plain English: The campus café wants to <strong>maximize profit</strong> on weekends, but they currently waste between 8-12% of their inventory. Their target is 3% or less.
            </p>
            <div className="bg-white p-4 rounded-lg border border-orange-200 my-4">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">The Trade-off</div>
                <div className="text-xl font-bold text-orange-900">
                  More inventory → More sales but higher waste
                </div>
                <div className="text-xl font-bold text-green-800 mt-2">
                  Less inventory → Lower waste but potentially lost sales
                </div>
              </div>
            </div>
            <p>
              Your job, as the data consultant, is to find the sweet spot. You'll use descriptive statistics to understand what's "normal," then use forecasting to predict what will happen next. The whole unit leads to one deliverable: a recommendation backed by data.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What You'll Learn in This Unit</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">→</span>
                <span><strong>Lesson 2:</strong> Descriptive statistics—what does "normal" café data look like?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">→</span>
                <span><strong>Lesson 3:</strong> Outliers and data quality—when should you ignore a weird number?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">→</span>
                <span><strong>Lesson 4:</strong> Forecasting logic—how do you predict next weekend's sales?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">→</span>
                <span><strong>Lessons 5-6:</strong> Build the analysis in Excel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">→</span>
                <span><strong>Lessons 7-10:</strong> Put it all together in your final project</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
