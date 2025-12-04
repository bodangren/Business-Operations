
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RestaurantStaffingSimulator } from "@/components/business-simulations/RestaurantStaffingSimulator";

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-900">Independent Practice: Restaurant Staffing Simulator</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-emerald-900 space-y-4">
              <p>
                You built a spreadsheet that calculates gross vs. net pay for every type of employee Sarah hires. Now it is time to run the business. In this simulation, you manage a twelve-month schedule for a growing café that feels a lot like TechStart’s catering arm. Each decision changes payroll costs, customer experience, and the cash you have left to pay people next month.
              </p>
              <p>
                Take one minute per turn. Adjust hours, shift coverage, and team size for waiters, bussers, dishwashers, cooks, and the eventual assistant manager. Notice how overtime and extra hires eat cash fast, and how missing a shift crashes morale. Your goal: finish the year without bouncing payroll and with morale above 70%.
              </p>
              <ul className="list-disc pl-6 text-emerald-900">
                <li>Watch the Monthly Ledger for a real financial report: Revenue → Food Cost → Gross Profit → Payroll → Net Cash.</li>
                <li>Food cost is 40% of revenue, but sloppy overtime in the kitchen pushes it to 45%. That one mistake can erase all profits.</li>
                <li>Once the assistant manager is on the schedule at the right time, morale jumps and the restaurant can handle surges without you burning out.</li>
              </ul>
              <p>
                Treat this as a live pilot of your Payday Simulator. Jot down the staffing ideas that worked and the warning signs that appeared before cash got tight—you will plug those insights back into your Excel model in Phase 5.
              </p>
            </CardContent>
          </Card>

          <RestaurantStaffingSimulator />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
