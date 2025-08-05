
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpreadsheetWrapper, { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";

const salariedEmployeePayrollData: SpreadsheetData = [
  [
    { value: "Employee", readOnly: true },
    { value: "Annual Salary", readOnly: true },
    { value: "Pay Periods/Year", readOnly: true },
    { value: "Gross Pay", readOnly: true },
    { value: "Health Insurance", readOnly: true },
    { value: "Taxable Income", readOnly: true },
    { value: "Tax Rate", readOnly: true },
    { value: "Tax", readOnly: true },
    { value: "Net Pay", readOnly: true },
  ],
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "=B2/C2", readOnly: true },
    { value: "" },
    { value: "=D2-E2", readOnly: true },
    { value: "" },
    { value: "=F2*G2", readOnly: true },
    { value: "=D2-E2-H2", readOnly: true },
  ],
  [
    { value: "" }, 
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

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Independent Practice: Salaried Employee with Deductions</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Now it's time to apply your skills to a more complex scenario. Use the payroll spreadsheet template to calculate the net pay for a salaried employee with additional deductions.
            </p>
            <p>
              <strong>Your Task:</strong> Input the following information into the spreadsheet to calculate the manager's net pay.
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Employee:</strong> Maria's Manager</li>
              <li><strong>Annual Salary:</strong> $45,000</li>
              <li><strong>Pay Periods/Year:</strong> 26</li>
              <li><strong>Health Insurance:</strong> $50</li>
              <li><strong>Tax Rate:</strong> 15% (enter as 0.15)</li>
            </ul>
          </CardContent>
        </Card>

        <SpreadsheetWrapper initialData={salariedEmployeePayrollData} />
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
