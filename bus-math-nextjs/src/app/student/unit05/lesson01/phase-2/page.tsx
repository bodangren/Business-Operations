
'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type EmployeeType = 'hourly' | 'salaried' | 'commission';

interface PayrollScenario {
  employeeName: string;
  type: EmployeeType;
  grossPay: number;
  deductions: number;
  employerCost: number;
}

const SAMPLE_SCENARIOS: PayrollScenario[] = [
  { employeeName: "Alex (Developer)", type: "salaried", grossPay: 45000, deductions: 11250, employerCost: 13500 },
  { employeeName: "Maria (Server)", type: "hourly", grossPay: 800, deductions: 120, employerCost: 240 },
  { employeeName: "Jordan (Sales)", type: "commission", grossPay: 3500, deductions: 700, employerCost: 1050 },
];

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedScenario = SAMPLE_SCENARIOS[selectedIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        {/* Payroll Scoreboard */}
        <Card className="mb-8 bg-blue-50 border-blue-300">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">The Payroll Scoreboard</CardTitle>
            <CardDescription>What You'll Track Across This Unit</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-blue-800">
              Every payroll system tracks four key numbers. Keep these in mind as you build your Payday Simulator:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900">💰 Gross Pay</h4>
                <p className="text-sm text-blue-700">The total amount earned before any deductions. This is the promise you make to your employee.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900">📉 Deductions</h4>
                <p className="text-sm text-blue-700">Money taken out for taxes, insurance, retirement, and other benefits. These reduce what the employee takes home.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900">🏢 Employer Cost</h4>
                <p className="text-sm text-blue-700">What you pay beyond the employee's paycheck—employer taxes, benefits, insurance. This is often 20-30% more than gross pay.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900">💸 Cash Out</h4>
                <p className="text-sm text-blue-700">The actual cash that leaves your business on payday. Gross pay + employer cost = total payroll cash need.</p>
              </div>
            </div>
            <p className="text-center font-bold text-lg bg-blue-100 p-4 rounded-md mt-6">
              Cash Out = Gross Pay + Employer Cost
            </p>
          </CardContent>
        </Card>

        {/* Bounded Interactive: Scan the Payroll System */}
        <Card className="mb-8 bg-white border-blue-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Interactive: Scan the Payroll System</CardTitle>
            <CardDescription>Click through these sample employees to see how the scoreboard applies in practice.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {SAMPLE_SCENARIOS.map((scenario, index) => (
                <Button
                  key={index}
                  variant={selectedIndex === index ? "default" : "outline"}
                  onClick={() => setSelectedIndex(index)}
                  className={selectedIndex === index ? "bg-blue-600" : ""}
                >
                  {scenario.employeeName}
                </Button>
              ))}
            </div>
            {selectedScenario && (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-500">Gross Pay</p>
                    <p className="text-xl font-bold text-blue-900">
                      {selectedScenario.type === 'salaried' 
                        ? `$${(selectedScenario.grossPay / 26).toFixed(0)}/check`
                        : `$${selectedScenario.grossPay.toFixed(0)}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deductions</p>
                    <p className="text-xl font-bold text-red-600">
                      -${selectedScenario.deductions.toFixed(0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Net Pay</p>
                    <p className="text-xl font-bold text-green-600">
                      ${(selectedScenario.grossPay - selectedScenario.deductions).toFixed(0)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Cash Out</p>
                    <p className="text-xl font-bold text-purple-900">
                      ${(selectedScenario.grossPay + selectedScenario.employerCost).toFixed(0)}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  {selectedScenario.type === 'salaried' 
                    ? "Annual salary paid bi-weekly (26 pay periods)"
                    : selectedScenario.type === 'hourly'
                    ? "Hourly employee (40 hrs/week)"
                    : "Commission-based with base draw"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

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
