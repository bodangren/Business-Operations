import DragAndDrop from "@/components/exercises/DragAndDrop";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, AlertTriangle, CheckCircle, Users } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[2]; // Guided Practice phase

const formulaMatchingItems = [
  {
    id: "formula-1",
    content: "=INDEX(TrialBalance_Amounts,MATCH(\"Revenue\",TrialBalance_Accounts,0))",
    matchId: "explanation-1",
    hint: "Look for the formula that uses named ranges professionally"
  },
  {
    id: "explanation-1",
    content: "Professional dynamic lookup using named ranges - investor-ready and maintainable",
    matchId: "formula-1"
  },
  {
    id: "formula-2",
    content: "=INDEX(B2:B50,MATCH(\"Cash\",A2:A50,0))",
    matchId: "explanation-2",
    hint: "This formula uses INDEX/MATCH but still has cell references"
  },
  {
    id: "explanation-2",
    content: "INDEX/MATCH with cell references - better than VLOOKUP but not yet professional grade",
    matchId: "formula-2"
  },
  {
    id: "formula-3",
    content: "=VLOOKUP(\"Revenue\",A2:B50,2,FALSE)",
    matchId: "explanation-3",
    hint: "This is the old, fragile formula type"
  },
  {
    id: "explanation-3",
    content: "VLOOKUP formula - fragile, will break when columns are inserted or moved",
    matchId: "formula-3"
  },
  {
    id: "formula-4",
    content: "=INDEX(IncomeStatement_Amounts,MATCH(\"Total Revenue\",IncomeStatement_Labels,0))",
    matchId: "explanation-4",
    hint: "This shows advanced named range usage for Income Statements"
  },
  {
    id: "explanation-4",
    content: "Advanced named range formula for Income Statement automation - Wall Street quality",
    matchId: "formula-4"
  }
];

export default function Unit03Lesson04Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Building Sarah's Dynamic Income Statement System
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Step-by-Step: From Broken VLOOKUP to Professional INDEX/MATCH
              </h1>
              
              <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-6 rounded-lg border border-purple-200 mb-8">
                <p className="text-lg leading-relaxed text-purple-900">
                  After her investor meeting disaster, Sarah sat down with Jennifer Kim for an emergency Excel training session. 
                  "We're going to rebuild your Income Statement from scratch," Jennifer said, "but this time we'll use professional-grade 
                  formulas that won't break under pressure." Today, you'll follow the exact same step-by-step process they used to 
                  transform Sarah's fragile financial model into an investor-ready system.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Step 1: Creating Professional Named Ranges
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Jennifer started by fixing the foundation. "Before we write any formulas," she explained, "we need to give meaningful 
                names to our data ranges. This isn't just for show—it's what separates amateur spreadsheets from professional financial models."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800 text-lg">🎯 Trial Balance Named Ranges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        <strong>TrialBalance_Accounts:</strong> A2:A50<br/>
                        <em>Contains all account names</em>
                      </div>
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        <strong>TrialBalance_Amounts:</strong> B2:B50<br/>
                        <em>Contains all account balances</em>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg">📊 Income Statement Named Ranges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        <strong>IncomeStatement_Labels:</strong> D2:D25<br/>
                        <em>Revenue and expense categories</em>
                      </div>
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        <strong>IncomeStatement_Amounts:</strong> E2:E25<br/>
                        <em>Calculated amounts using INDEX/MATCH</em>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Step 2: Building the Dynamic Revenue Section
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                With named ranges in place, Jennifer showed Sarah how to build the revenue section of her Income Statement. 
                "Each line item needs to pull dynamically from your trial balance," she explained. "That way, when you add new 
                revenue transactions, your Income Statement updates automatically."
              </p>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                <h3 className="font-semibold text-green-900 mb-3 text-xl">Revenue Formula Construction</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">For Website Development Revenue:</h4>
                    <div className="bg-white p-4 rounded border font-mono text-sm">
                      =INDEX(TrialBalance_Amounts,MATCH("Website Development Revenue",TrialBalance_Accounts,0))
                    </div>
                    <p className="text-green-700 text-sm mt-2">
                      This formula searches for "Website Development Revenue" in the account names and returns its balance.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">For Total Revenue Calculation:</h4>
                    <div className="bg-white p-4 rounded border font-mono text-sm">
                      =SUM(INDEX(TrialBalance_Amounts,MATCH("*Revenue*",TrialBalance_Accounts,0)):INDEX(TrialBalance_Amounts,MATCH("*Revenue*",TrialBalance_Accounts,0)+2))
                    </div>
                    <p className="text-green-700 text-sm mt-2">
                      Advanced: This sums all revenue accounts automatically, regardless of how many Sarah adds.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Step 3: Building the Dynamic Expense Section
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Next, Jennifer tackled the expense section. "Expenses are trickier," she noted, "because we need to organize them 
                by category and ensure proper classification between operating and non-operating expenses."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-800 text-lg">Operating Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="bg-white p-2 rounded border">
                        <strong>Software Subscriptions:</strong><br/>
                        =INDEX(TrialBalance_Amounts,MATCH("Software Expense",TrialBalance_Accounts,0))
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Marketing Costs:</strong><br/>
                        =INDEX(TrialBalance_Amounts,MATCH("Marketing Expense",TrialBalance_Accounts,0))
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Professional Services:</strong><br/>
                        =INDEX(TrialBalance_Amounts,MATCH("Professional Fees",TrialBalance_Accounts,0))
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 text-lg">Error Prevention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-red-800 text-sm font-medium">IFERROR Wrapper</p>
                          <p className="text-red-700 text-xs">Wrap formulas in IFERROR to handle missing accounts gracefully</p>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded border font-mono text-xs">
                        =IFERROR(INDEX(TrialBalance_Amounts,MATCH("Account Name",TrialBalance_Accounts,0)),0)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Step 4: Professional Quality Control
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Jennifer's final lesson was about quality control. "Professional financial models include built-in checks," 
                she explained. "Investors expect to see validation that your numbers add up correctly."
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                <h3 className="font-semibold text-blue-900 mb-3 text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Sarah's Quality Control Checklist
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>All formulas use named ranges for clarity and maintainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>INDEX/MATCH formulas won't break when trial balance columns change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>IFERROR functions handle missing accounts without displaying errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Revenue minus expenses equals net income calculation validates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Professional formatting with clear section headers and totals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <DragAndDrop
          title="Formula Quality Assessment"
          description="Match each Excel formula with its professional quality level and explanation."
          leftColumnTitle="Excel Formulas"
          rightColumnTitle="Quality Assessment"
          items={formulaMatchingItems}
          showHints={true}
        />

        <Card className="border-purple-200 bg-purple-50 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Think-Pair-Share Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-purple-900 mb-2">
              Discussion Prompt (5 minutes):
            </p>
            <p className="text-purple-800 mb-2">
              Consider the transformation from Sarah's broken VLOOKUP model to her professional INDEX/MATCH system. 
              Discuss with a partner:
            </p>
            <ul className="list-disc list-inside space-y-1 text-purple-800">
              <li>Why is it worth the extra effort to create named ranges instead of using simple cell references?</li>
              <li>How might this attention to Excel details reflect on Sarah's overall business professionalism?</li>
              <li>What would you do differently if you were building a financial model for your own startup?</li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 max-w-4xl mx-auto">
          <h3 className="font-semibold text-amber-900 mb-2 text-xl flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Your Practice Challenge
          </h3>
          <p className="text-amber-800 leading-relaxed">
            Now it's your turn to build what Sarah built. Using your Unit 1 trial balance data, you'll create a dynamic 
            Income Statement with INDEX/MATCH formulas and named ranges. Follow Jennifer's step-by-step process: create 
            named ranges first, then build revenue formulas, add expense calculations, and finish with quality control checks. 
            When you're done, your Income Statement will automatically update whenever you add new transactions to your trial balance.
          </p>
        </div>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  );
}