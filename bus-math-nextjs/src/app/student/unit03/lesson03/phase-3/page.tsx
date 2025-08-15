import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import { incomeStatementTemplate } from "@/components/spreadsheet/SpreadsheetTemplates";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calculator, TrendingUp, AlertCircle } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[2]; // Guided Practice phase

export default function Unit03Lesson03Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Guided Practice: Building Sarah's Income Statement
          </h2>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200 mb-8">
            <p className="text-lg leading-relaxed text-green-900">
              Now we'll work together to build Sarah's Income Statement using the professional INDEX/MATCH approach. 
              Follow along as we transform her raw trial balance data into a compelling financial story that investors 
              can understand and trust. Remember: every number will be dynamically linked—no hard-coded values allowed!
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Step-by-Step Construction Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Step 1: Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Set up the main sections: Header, Revenues, Expenses, and Net Income. 
                  Use professional formatting with clear section breaks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Step 2: Formulas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Build INDEX/MATCH formulas to pull revenue and expense data from the 
                  trial balance. Each formula creates a live link to source data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Step 3: Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  Check that all revenue and expense accounts are included and that 
                  the Net Income calculation is mathematically correct.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Interactive Income Statement Template
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Below is Sarah's Income Statement template. Notice how it's structured with clear sections and uses formulas 
            for calculations. In a real model, the individual revenue and expense amounts would be pulled from the trial 
            balance using INDEX/MATCH formulas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            TechStart Solutions - Income Statement Template
          </h3>
          <SpreadsheetWrapper 
            initialData={incomeStatementTemplate.data}
            className="border rounded-lg"
          />
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Key Formula Insights:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-green-700">
                  <strong>Revenue Formulas:</strong> In a professional model, cells B5-B6 would use INDEX/MATCH to pull 
                  "Sales Revenue" and "Service Revenue" from the trial balance automatically.
                </p>
              </div>
              <div>
                <p className="text-green-700">
                  <strong>Expense Formulas:</strong> Cells B10-B13 would dynamically pull expense amounts, ensuring 
                  the Income Statement always reflects current trial balance data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Professional Formula Examples
          </h3>
          
          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-4">INDEX/MATCH Formulas for Sarah's Data:</h4>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Revenue Section:</h5>
                <div className="font-mono text-sm text-blue-600 mb-2">
                  =INDEX(TrialBalance[Amount], MATCH("Website Development Revenue", TrialBalance[Account], 0))
                </div>
                <p className="text-gray-700 text-xs">
                  This pulls Sarah's website development revenue ($2,200) directly from her trial balance.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Expense Section:</h5>
                <div className="font-mono text-sm text-red-600 mb-2">
                  =INDEX(TrialBalance[Amount], MATCH("Software Subscriptions", TrialBalance[Account], 0))
                </div>
                <p className="text-gray-700 text-xs">
                  This pulls her software subscription expenses automatically from the trial balance.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Summary Calculations:</h5>
                <div className="font-mono text-sm text-green-600 mb-2">
                  =SUM(B5:B6) - SUM(B10:B13)
                </div>
                <p className="text-gray-700 text-xs">
                  Net Income calculation: Total Revenues minus Total Expenses.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">💡 Professional Insight</h4>
            <p className="text-blue-800">
              Notice how we use <strong>named ranges</strong> like "TrialBalance[Account]" instead of cell references 
              like "A2:A20". Named ranges make formulas more readable and less prone to breaking when data is moved. 
              This is a hallmark of professional financial modeling.
            </p>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-6">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Formula Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-blue-800 mb-2">
                Look at the Income Statement template above and discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Why are the Total formulas (=SUM(B5:B6)) better than adding individual cells (=B5+B6)?</li>
                <li>How would you modify this template if Sarah added a new revenue stream like "Consulting Services"?</li>
                <li>What happens to Net Income when Sarah's expenses increase but revenues stay the same?</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Building Investor Confidence
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            The professional approach we're using creates more than just accurate numbers—it builds trust. When investors 
            see dynamic formulas and live connections to source data, they know the financial model is robust and current.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">🏆 What Impresses Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Dynamic formulas that auto-update</li>
                  <li>• Professional formatting and structure</li>
                  <li>• Clear traceability to source data</li>
                  <li>• Industry-standard presentation</li>
                  <li>• Error-checking and validation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-800 text-lg">⚠️ Red Flags for Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>• Hard-coded numbers with no source</li>
                  <li>• Inconsistent formatting</li>
                  <li>• Manual calculations prone to error</li>
                  <li>• Outdated or static information</li>
                  <li>• No clear methodology</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">🎯 Guided Practice Success Criteria</h4>
            <p className="text-green-800 mb-3">
              You've successfully completed guided practice when you understand:
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>How to structure a professional Income Statement with clear sections</li>
              <li>Why INDEX/MATCH formulas create superior financial models</li>
              <li>How dynamic linking ensures reports stay current with source data</li>
              <li>What makes financial models trustworthy to investors</li>
            </ul>
          </div>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  );
}