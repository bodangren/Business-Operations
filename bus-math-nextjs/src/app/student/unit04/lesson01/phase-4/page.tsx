
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit04Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BudgetCategorySort from "@/components/drag-drop-exercises/BudgetCategorySort";

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!

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
            <CardTitle className="text-2xl text-orange-800">Independent Practice: Analyzing Beverage Sales</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Now it's your turn to apply what you've learned to a new dataset. Your team has been tasked with analyzing the café's beverage sales. Understanding which costs are which is a critical first step.
            </p>
            <p>
              Below is a list of expenses related to the café's beverage operations. Your task is to categorize these expenses into the correct budget categories. This will help the café manager understand the true cost of their beverage offerings and make smarter decisions about pricing and promotions.
            </p>
          </CardContent>
        </Card>

        <BudgetCategorySort />
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
