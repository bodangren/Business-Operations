import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calculator, Lightbulb, CheckCircle, ArrowRight } from "lucide-react"
import SpreadsheetWrapper from "@/components/spreadsheet/SpreadsheetWrapper"
import { payrollTemplate } from "@/components/spreadsheet/SpreadsheetTemplates"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[2] // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        {/* Introduction to Guided Practice */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Building Sarah's Payroll Calculator Step-by-Step
          </h2>
          
          <p className="text-lg leading-relaxed">
            Now it's time to put theory into practice. You'll work with a payroll template to understand 
            how the formulas we discussed actually work in Excel. Sarah needs a tool that can handle 
            her current freelance team and scale as she grows TechStart Solutions.
          </p>
        </div>

        {/* Template Overview */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Payroll Template Walkthrough
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800">
              The template below shows a basic payroll structure that Sarah might use. Examine the formulas 
              in columns D (Gross Pay), F (Tax), and G (Net Pay). Notice how Excel calculates everything 
              automatically once you enter the hours and rates.
            </p>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-purple-900 mb-3">Template Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Automatic gross pay calculations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Fixed 25% tax rate for simplicity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Net pay formula integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Summary totals at bottom</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Spreadsheet */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900">
              Interactive Payroll Calculator
            </CardTitle>
            <p className="text-green-800 text-sm">
              Try changing the hours or rates in columns B and C to see how the calculations update automatically.
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded-lg border">
              <SpreadsheetWrapper
                initialData={payrollTemplate.data}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Analysis */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Understanding the Formulas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-900 mb-2">Column D: Gross Pay</h4>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mb-2">
                  =B2*C2
                </div>
                <p className="text-sm text-blue-800">
                  Multiplies hours worked (B2) by hourly rate (C2) to calculate gross pay.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-900 mb-2">Column F: Taxes</h4>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mb-2">
                  =D2*E2
                </div>
                <p className="text-sm text-blue-800">
                  Multiplies gross pay (D2) by tax rate (E2) to calculate total tax withholding.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-900 mb-2">Column G: Net Pay</h4>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mb-2">
                  =D2-F2
                </div>
                <p className="text-sm text-blue-800">
                  Subtracts taxes (F2) from gross pay (D2) to calculate what the employee receives.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-blue-900 mb-2">Row 6: Summary Formulas</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-1">Total Hours</Badge>
                  <div className="bg-gray-100 p-1 rounded font-mono text-xs">=SUM(B2:B4)</div>
                </div>
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-1">Total Gross</Badge>
                  <div className="bg-gray-100 p-1 rounded font-mono text-xs">=SUM(D2:D4)</div>
                </div>
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-1">Total Net</Badge>
                  <div className="bg-gray-100 p-1 rounded font-mono text-xs">=SUM(G2:G4)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guided Scenarios */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900">
              Practice Scenarios
            </CardTitle>
            <p className="text-orange-800 text-sm">
              Try these scenarios in the spreadsheet above to see how different situations affect payroll costs.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-orange-900 mb-2">Scenario 1: Alex's Full-Time Position</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li><strong>Employee:</strong> Alex Rodriguez (row 2)</li>
                  <li><strong>Hours:</strong> 40 per week</li>
                  <li><strong>Rate:</strong> $31.25/hour ($65k ÷ 52 weeks ÷ 40 hours)</li>
                </ul>
                <p className="text-xs text-orange-700 mt-2">
                  What's Alex's weekly net pay? How much does Sarah need for her business account?
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-orange-900 mb-2">Scenario 2: Mixed Team</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li><strong>Alex:</strong> 40 hours at $31.25/hour</li>
                  <li><strong>Part-time designer:</strong> 20 hours at $25/hour</li>
                  <li><strong>Freelance writer:</strong> 15 hours at $30/hour</li>
                </ul>
                <p className="text-xs text-orange-700 mt-2">
                  What's Sarah's total weekly payroll cost? How does this compare to her project revenue?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Think-Pair-Share */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Collaborate and Discuss
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-green-900 mb-2">
              Discussion Prompt (5 minutes):
            </p>
            <p className="text-green-800 mb-3">
              Work with a partner to analyze the spreadsheet. Share your observations:
            </p>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li>What happens to total costs when you increase someone's hourly rate by $5?</li>
              <li>How does adding overtime hours (45 instead of 40) affect the calculations?</li>
              <li>What questions would Sarah need to ask before hiring a second full-time employee?</li>
            </ul>
            
            <div className="mt-4 p-3 bg-white rounded border">
              <p className="text-sm text-green-700">
                <strong>Extension Challenge:</strong> The template uses a simplified 25% tax rate. In reality, 
                different employees might have different withholding rates based on their W-4 forms. How could 
                you modify this template to handle variable tax rates?
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <ArrowRight className="h-5 w-5" />
            Key Insights from This Practice
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <div>
              <h4 className="font-medium mb-2">For Sarah as an Employer:</h4>
              <ul className="text-sm space-y-1">
                <li>• Gross pay is only part of the total employment cost</li>
                <li>• Tax withholding requires careful tracking and remittance</li>
                <li>• Excel automation reduces payroll errors and saves time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">For Business Operations:</h4>
              <ul className="text-sm space-y-1">
                <li>• Predictable formulas enable cash flow planning</li>
                <li>• Summary totals help with budgeting and forecasting</li>
                <li>• Template structure scales as the team grows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}