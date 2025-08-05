
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">Becoming a Price Detective</CardTitle>
            <CardDescription>Introduction to the PriceLab Challenge</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Welcome to the PriceLab Challenge! In this unit, you'll learn how to set prices that are both competitive and profitable. We'll explore the story of Sarah, a growing business owner who realized her pricing strategy was flawed. Her story will guide us as we learn to analyze competitor data and build powerful pricing models.
            </p>
            <p>
              Our essential question is: <strong>What pricing strategy hits our profit target while staying competitive in the local market?</strong>
            </p>
            <p>
              Today, we start by becoming "price detectives." We'll learn how to gather and clean competitor pricing data, a crucial first step in making informed pricing decisions.
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck
          questions={[
            {
              id: "q1",
              question: "What is the main goal of the PriceLab Challenge?",
              answers: [
                "To learn how to set profitable and competitive prices.",
                "To build a website for a new business.",
                "To learn how to manage employees.",
                "To create a marketing plan."
              ],
              explanation: "The main goal is to develop a pricing strategy that is both profitable and competitive, as stated in the essential question."
            },
            {
              id: "q2",
              question: "What is the first step in becoming a 'price detective'?",
              answers: [
                "Gathering and cleaning competitor pricing data.",
                "Setting your own prices.",
                "Hiring a private investigator.",
                "Creating a CVP model."
              ],
              explanation: "The first step is to gather and clean data about what competitors are charging. This is the foundation of a smart pricing strategy."
            }
          ]}
        />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
