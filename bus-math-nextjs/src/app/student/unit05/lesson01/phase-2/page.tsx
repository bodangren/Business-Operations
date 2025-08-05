
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">From Gross to Net</CardTitle>
            <CardDescription>Understanding the Math Behind Every Paycheck</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              When you agree to pay an employee, you talk in terms of <strong>Gross Pay</strong>. This is the total amount of money an employee earns before any deductions are taken out. For example, if you hire an employee for $20 per hour and they work 40 hours, their gross pay is $800. But the employee doesn't actually receive $800 in their bank account. The amount they take home is called <strong>Net Pay</strong>, and it’s what’s left over after all the taxes and other deductions are withheld.
            </p>
            <p>
              Getting this right is critical. Under-withholding taxes means your employee could owe a lot of money at tax time. Over-withholding means they have less money in their pocket each month. To be a good employer, you need to get this exactly right.
            </p>
            <h3 className="text-purple-700">Common Deductions:</h3>
            <ul>
              <li><strong>Federal and State Income Tax:</strong> Money withheld for the government, based on earnings and W-4 form information.</li>
              <li><strong>FICA Taxes:</strong> A federal tax for Social Security (6.2%) and Medicare (1.45%).</li>
              <li><strong>Other Deductions:</strong> Health insurance premiums, retirement plan contributions, etc.</li>
            </ul>
            <p className="text-center font-bold text-lg bg-purple-100 p-4 rounded-md">
              Gross Pay - Deductions = Net Pay
            </p>
          </CardContent>
        </Card>

        <ComprehensionCheck
          questions={[
            {
              id: "q1",
              question: "What is the difference between Gross Pay and Net Pay?",
              answers: [
                "Gross pay is take-home pay after taxes, while net pay is the total earned.",
                "Gross pay is the total amount earned, while net pay is the amount an employee takes home after deductions.",
                "There is no difference; the terms are interchangeable.",
                "Gross pay is for salaried employees, and net pay is for hourly employees."
              ],
              explanation: "Gross pay is the full amount of money an employee earns. Net pay is the actual amount of money the employee receives in their paycheck after all deductions (like taxes and insurance) have been taken out."
            },
            {
              id: "q2",
              question: "What does FICA tax fund?",
              answers: [
                "Social Security and Medicare",
                "Federal and State income taxes",
                "Unemployment insurance",
                "Employee retirement plans"
              ],
              explanation: "FICA (Federal Insurance Contributions Act) is a U.S. federal payroll tax that funds Social Security and Medicare."
            }
          ]}
        />
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
