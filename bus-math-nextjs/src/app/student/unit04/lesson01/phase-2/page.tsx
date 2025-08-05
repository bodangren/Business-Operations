
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit04Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

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
            <CardTitle className="text-2xl text-orange-800">The Campus Café Challenge</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Imagine walking into the campus café on a Saturday morning. The line is long, some staff look overwhelmed, while others seem to be waiting for something to do. Behind the counter, you see a box of unsold pastries, likely destined for the trash. This scene represents a massive, and common, business challenge: balancing customer satisfaction with operational efficiency.
            </p>
            <p>
              The café manager has come to you for help. They know they have problems with overstocking some items (which leads to waste) and understaffing during peak rushes (which leads to lost sales and unhappy customers). Their goal is clear and challenging: they want you to create a plan that boosts their profits but also cuts their current food waste rate of 8-12% down to a target of 3% or less.
            </p>
            <p>
              To do this, they’ve handed you a treasure chest of information: two years of anonymized weekend Point-of-Sale (POS) data. This isn't a small, simple spreadsheet. It’s the real deal. Inside, you'll find:
            </p>
            <ul>
              <li>Data from 104 weekend days, covering a full two years.</li>
              <li>Over 15,000 individual transactions, each with a timestamp so you know exactly when it happened.</li>
              <li>More than 50 different menu items, from coffee to pastries to full meals.</li>
              <li>Even notes on weather and special campus events, because a rainy day might change what customers buy.</li>
            </ul>
            <p>
              Your first task is to form your analysis team. Just like in a real consulting firm, you'll work together to tackle this problem. Once you've formed your team, you'll need to choose a focus area. Trying to solve everything at once can be overwhelming, so you'll specialize in one of three key areas:
            </p>
            <ol>
              <li><strong>Beverage Mix Optimization:</strong> Which drinks are most popular and when?</li>
              <li><strong>Pastry Inventory Management:</strong> How many croissants, muffins, and cookies should be ordered for the weekend?</li>
              <li><strong>Staffing Optimization:</strong> When are the true peak hours, and how can scheduling be improved to save money without sacrificing service?</li>
            </ol>
            <p>
              This is your first step into the world of data analytics. You have the data, you have the challenge, and you have your team. It's time to dig in and see what secrets the numbers are hiding.
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck
          questions={[
            {
              id: "q1",
              question: "What is the primary goal of the Campus Café Challenge?",
              answers: [
                "To reduce food waste to 3% or less while boosting profits.",
                "To increase the number of menu items.",
                "To hire more staff to reduce customer wait times.",
                "To get rid of the POS system."
              ],
              explanation: "The core challenge is to use data to improve profitability and efficiency, with a specific target for waste reduction."
            }
          ]}
        />

        <ComprehensionCheck
          questions={[
            {
              id: "q2",
              question: "Which of the following is NOT a focus area for the analysis teams?",
              answers: [
                "Redesigning the Café Layout",
                "Beverage Mix Optimization",
                "Pastry Inventory Management",
                "Staffing Optimization"
              ],
              explanation: "The focus areas are on analyzing the existing POS data for beverage, pastry, and staffing optimization, not physical layout changes."
            }
          ]}
        />
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
