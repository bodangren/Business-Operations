
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
    { value: "" },
  ],
];

const commissionPayrollData: SpreadsheetData = [
  [
    { value: "Employee", readOnly: true },
    { value: "Base Draw", readOnly: true },
    { value: "Sales This Period", readOnly: true },
    { value: "Commission Rate", readOnly: true },
    { value: "Commission Earned", readOnly: true },
    { value: "Gross Pay", readOnly: true },
    { value: "Deduction Rate", readOnly: true },
    { value: "Deductions", readOnly: true },
    { value: "Net Pay", readOnly: true },
  ],
  [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "=C2*D2", readOnly: true },
    { value: "=B2+E2", readOnly: true },
    { value: "" },
    { value: "=F2*G2", readOnly: true },
    { value: "=F2-H2", readOnly: true },
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
    { value: "" },
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
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800">Why Multiple Pay Types Matter</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Sarah pays people in three different ways, and each method changes the math inside her Payday Simulator. Hourly employees (including tipped workers) multiply hours by rate, then add tips before calculating taxes. Salaried employees convert annual pay into each paycheck and remove consistent deductions like benefits. Commission employees earn a base draw to keep cash steady, plus a percentage of sales that can spike or dip dramatically.
            </p>
            <p>
              The basic rules never change: track the promise (gross pay), apply every deduction with the right percentage, and confirm that net pay is accurate before the money leaves the bank. Misplacing one formula can make Sarah miss payroll, so you will practice all three pay types side by side.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hourly + Tips:</strong> servers, baristas, ride-share drivers. Pay swings with hours and tip reports.
                <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
                  <li><strong>Base rate:</strong> dollars paid for each hour on the schedule.</li>
                  <li><strong>Reported tips:</strong> customer money turned in so taxes stay accurate.</li>
                  <li><strong>Withholding:</strong> tax money set aside before the worker is paid.</li>
                </ul>
              </li>
              <li>
                <strong>Salaried:</strong> managers, salaried developers, operations leads. Amount per paycheck = salary ÷ pay periods.
                <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
                  <li><strong>Annualized pay:</strong> the yearly promise shown on offer letters.</li>
                  <li><strong>Pay frequency:</strong> how many checks per year (bi-weekly, semi-monthly, etc.).</li>
                  <li><strong>Pretax deduction:</strong> money for benefits removed before taxes hit.</li>
                </ul>
              </li>
              <li>
                <strong>Commission + Draw:</strong> sales reps and brokers. Draw ensures steady cash while commissions depend on closed deals.
                <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
                  <li><strong>Draw:</strong> a fixed amount advanced so the rep can pay bills.</li>
                  <li><strong>Commission rate:</strong> the percent of sales the rep keeps.</li>
                  <li><strong>Variable compensation:</strong> earnings that change with performance.</li>
                </ul>
              </li>
              <li>
                <strong>Universal Terms:</strong>
                <ul className="list-disc pl-6 text-base text-gray-700 space-y-1">
                  <li><strong>Gross pay:</strong> the full promise before any deductions.</li>
                  <li><strong>Net pay:</strong> the cash the employee actually receives.</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border border-purple-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800">Activity 1: Hourly + Tips</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Use the spreadsheet to test how hours, hourly wage, and reported tips change gross and net pay for Maria’s server. Focus on the order of operations: (hours × rate) + tips = gross pay, then multiply by the tax rate.
            </p>
            <p className="font-semibold">Enter these values to start:</p>
            <ul className="list-disc pl-6">
              <li>Employee: Maria's Server</li>
              <li>Hours: 25</li>
              <li>Base Rate/hr: 2.13</li>
              <li>Tips: 180</li>
              <li>Tax Rate: 0.10</li>
            </ul>
            <p><strong>Try It:</strong> Adjust the base rate to 2.50 and tips to 220. What new net pay do you see?</p>
          </CardContent>
        </Card>
        <SpreadsheetWrapper initialData={tippedEmployeePayrollData} />

        <Card className="bg-white border border-purple-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800">Activity 2: Salaried Employee with Deductions</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Independent practice moves here so you can compare hourly and salary entries quickly. Enter Maria’s manager details below and note how dividing the annual salary by the number of pay periods keeps cash planning predictable.
            </p>
            <ul className="list-disc pl-6">
              <li>Employee: Maria's Manager</li>
              <li>Annual Salary: 45000</li>
              <li>Pay Periods/Year: 26</li>
              <li>Health Insurance: 50</li>
              <li>Tax Rate: 0.15</li>
            </ul>
            <p>After you finish, change the pay frequency to 24 periods and record the new gross and net pay.</p>
          </CardContent>
        </Card>
        <SpreadsheetWrapper initialData={salariedEmployeePayrollData} />

        <Card className="bg-white border border-purple-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800">Activity 3: Commission-Based Employee</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Some of Sarah’s sales partners earn a base draw so they can pay bills, plus a commission on deals they close. This creates a cash flow spike when revenue lands, so the simulator must reflect the higher gross pay in those periods.
            </p>
            <p className="font-semibold">Scenario Inputs:</p>
            <ul className="list-disc pl-6">
              <li>Employee: Jordan</li>
              <li>Base Draw: 600</li>
              <li>Sales This Period: 18000</li>
              <li>Commission Rate: 0.08</li>
              <li>Deduction Rate: 0.20</li>
            </ul>
            <p>Enter those values and then model a slow week by cutting sales in half. Compare how net pay changes and note how Sarah must keep enough cash ready for big commission weeks.</p>
          </CardContent>
        </Card>
        <SpreadsheetWrapper initialData={commissionPayrollData} />

        <div className="mt-8">
          <ComprehensionCheck
            questions={[
              {
                id: "q1",
                question: "Using the tipped spreadsheet, what is the server's Net Pay if they work 35 hours and receive $150 in tips?",
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
                question: "If Maria's manager is paid 24 times per year instead of 26, what happens to the gross pay per paycheck (assume $45,000 salary)?",
                answers: [
                  "It increases to $1,875",
                  "It decreases to $1,500",
                  "It stays $1,730.77",
                  "It becomes $2,200"
                ],
                explanation: "Gross pay = $45,000 / 24 = $1,875. Fewer pay periods mean each paycheck is larger, so Sarah’s cash requirement per payday goes up."
              },
              {
                id: "q3",
                question: "Jordan earns a $600 draw, $18,000 in sales, and 8% commission. Before deductions, what is Jordan's gross pay?",
                answers: [
                  "$2,040",
                  "$1,440",
                  "$18,600",
                  "$600"
                ],
                explanation: "Commission = 18,000 × 0.08 = $1,440. Gross pay = draw (600) + commission (1,440) = $2,040 before deductions."
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
