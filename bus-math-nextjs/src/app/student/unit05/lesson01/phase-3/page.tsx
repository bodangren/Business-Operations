
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpreadsheetWrapper, { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

const tippedEmployeePayrollData: SpreadsheetData = [
  [
    { value: "Employee", readOnly: true },
    { value: "Hours", readOnly: true },
    { value: "Base Rate/hr", readOnly: true },
    { value: "Tips", readOnly: true },
    { value: "Gross Pay", readOnly: true },
    { value: "Tax Rate", readOnly: true },
    { value: "Tax", readOnly: true },
    { value: "Net Pay", readOnly: true },
  ],
  [
    { value: "Maria's Server" },
    { value: 25 },
    { value: 2.13 },
    { value: 180 },
    { value: "=(B2*C2)+D2", readOnly: true },
    { value: 0.10, readOnly: true },
    { value: "=E2*F2", readOnly: true },
    { value: "=E2-G2", readOnly: true },
  ],
  [
    { value: "" }, 
    { value: "" }, 
    { value: "" }, 
    { value: "" }, 
    { value: "" }, 
    { value: "" }, 
    { value: "" }, 
    { value: "" }
  ],
];

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

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
            <CardTitle className="text-2xl text-purple-800">Guided Practice: Tipped Employee Payroll</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Let's practice calculating pay for a tipped employee. The spreadsheet below is set up with the correct formulas for this scenario.
            </p>
            <p>
              <strong>Your Task:</strong> Use the interactive spreadsheet to answer the questions below. You can change the values in the 'Hours', 'Base Rate/hr', and 'Tips' columns (Row 2) to see how the Gross Pay and Net Pay change automatically.
            </p>
             <p>
              <strong>Base Scenario:</strong> A server at Maria’s café works 25 hours. Their base wage is $2.13 per hour, and they earned $180 in tips. The federal tax rate is 10%.
            </p>
          </CardContent>
        </Card>

        <SpreadsheetWrapper initialData={tippedEmployeePayrollData} />

        <div className="mt-8">
          <ComprehensionCheck
            questions={[
              {
                id: "q1",
                question: "Using the spreadsheet, what is the server's Net Pay if they work 35 hours and receive $150 in tips?",
                answers: [
                  "$202.10",
                  "$224.55",
                  "$150.00",
                  "$245.00"
                ],
                explanation: "Gross Pay = (35 * 2.13) + 150 = 74.55 + 150 = $224.55. Tax = 224.55 * 0.10 = $22.46. Net Pay = 224.55 - 22.46 = $202.095, which rounds to $202.10."
              },
              {
                id: "q2",
                question: "Using the spreadsheet, if the server works 40 hours and their tips are $250, what is their Gross Pay?",
                answers: [
                  "$335.20",
                  "$250.00",
                  "$85.20",
                  "$301.68"
                ],
                explanation: "Gross Pay = (40 * 2.13) + 250 = 85.20 + 250 = $335.20."
              }
            ]}
          />
        </div>
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
