
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit04Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!

  const weekendScenarios = [
    {
      id: "s1",
      scenario: "It's Saturday morning and you have 50 croissants left. The bakery manager asks: Should we discount the remaining croissants or throw them out?",
      choices: [
        { id: "a", text: "Full price all day", consequence: "May sell 30, waste 20" },
        { id: "b", text: "Discount after 2pm", consequence: "May sell 45, waste 5" },
        { id: "c", text: "Donate to food bank", consequence: "Zero profit but good PR" }
      ],
      correctChoice: "b",
      explanation: "A 2pm discount strategy typically captures price-sensitive customers while there's still time to sell. This reduces waste without sacrificing morning full-price sales."
    },
    {
      id: "s2",
      scenario: "Weather forecast says rain for Sunday. Historical data shows 30% drop in foot traffic. You normally stock 90 croissants. How many should you order?",
      choices: [
        { id: "a", text: "90 (same as normal)", consequence: "Likely 20+ unsold" },
        { id: "b", text: "65 (30% reduction)", consequence: "May run out near closing" },
        { id: "c", text: "75 (moderate cut)", consequence: "Balanced risk" }
      ],
      correctChoice: "c",
      explanation: "A moderate reduction accounts for the rain but preserves some buffer for unexpected walk-by traffic. Exact prediction is impossible, but the 30% guideline is a reasonable starting point."
    },
    {
      id: "s3",
      scenario: "Staff scheduling: You can schedule 2 or 3 baristas. Two costs $100, three costs $150. Saturday sales average $800. Which choice gives better profit?",
      choices: [
        { id: "a", text: "2 baristas", consequence: "May lose some customers, profit ~$700" },
        { id: "b", text: "3 baristas", consequence: "Better service, profit ~$650" },
        { id: "c", text: "Need more data first", consequence: "Wise to gather info before deciding" }
      ],
      correctChoice: "c",
      explanation: "The right answer is 'need more data.' Before choosing, you'd want to know: How many customers are lost with 2 baristas? Is the $50 difference worth the customer experience? This is exactly what descriptive statistics will help calculate."
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
        <Card className="mb-8 bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800">Independent Practice: Weekend Decision Simulator</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Now it's your turn to make some bounded business decisions. Remember: you don't have all the answers yet—that's what the rest of this unit will teach you. But you can use your business judgment to make reasonable choices.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Instructions:</strong> Read each scenario, choose the option you think is best, then see the consequence. Think about why your choice matters to profit and waste.
            </p>
          </CardContent>
        </Card>

        {weekendScenarios.map((scenario) => (
          <Card key={scenario.id} className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">{scenario.scenario}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scenario.choices.map((choice) => (
                  <div 
                    key={choice.id}
                    className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium">{choice.text}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      <strong>Consequence:</strong> {choice.consequence}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Analysis:</strong> {scenario.explanation}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mb-8 bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-lg text-amber-800">Reflection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Notice how each decision involves trade-offs between profit and waste? In scenario 3, the right answer was "need more data"—because without numbers, you're just guessing. That's exactly why this unit exists. By the end, you'll have the statistical tools to make these decisions with confidence.
            </p>
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
