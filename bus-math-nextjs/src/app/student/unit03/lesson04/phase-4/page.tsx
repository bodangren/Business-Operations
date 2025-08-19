import DragAndDrop from "@/components/exercises/DragAndDrop";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, CheckSquare, AlertCircle } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[3]; // Independent Practice phase

const advancedScenarioItems = [
  {
    id: "scenario-1",
    content: "Multi-month revenue tracking that automatically updates when new monthly data is added",
    matchId: "solution-1",
    hint: "Think about scenarios where data ranges might expand over time"
  },
  {
    id: "solution-1",
    content: "Use INDIRECT with named ranges: =INDEX(INDIRECT(\"TrialBalance_Amounts\"),MATCH(\"Q\"&QUARTER(TODAY())&\"_Revenue\",INDIRECT(\"TrialBalance_Accounts\"),0))",
    matchId: "scenario-1"
  },
  {
    id: "scenario-2", 
    content: "Expense categorization that groups similar accounts automatically without manual updates",
    matchId: "solution-2",
    hint: "Consider wildcard matching for account names with similar patterns"
  },
  {
    id: "solution-2",
    content: "Use SUMPRODUCT with wildcard matching: =SUMPRODUCT((ISNUMBER(SEARCH(\"*Marketing*\",TrialBalance_Accounts)))*(TrialBalance_Amounts))",
    matchId: "scenario-2"
  },
  {
    id: "scenario-3",
    content: "Cross-referencing multiple trial balances from different periods for trend analysis",
    matchId: "solution-3", 
    hint: "Think about connecting data from multiple worksheets or workbooks"
  },
  {
    id: "solution-3",
    content: "Use 3D references with INDEX/MATCH: =INDEX('Q1 2024'!TrialBalance_Amounts,MATCH(\"Revenue\",'Q1 2024'!TrialBalance_Accounts,0))",
    matchId: "scenario-3"
  },
  {
    id: "scenario-4",
    content: "Error-proofing formulas to handle missing accounts gracefully in investor presentations",
    matchId: "solution-4",
    hint: "Consider what happens when an account doesn't exist in the trial balance"
  },
  {
    id: "solution-4", 
    content: "Use nested IFERROR functions: =IFERROR(INDEX(TrialBalance_Amounts,MATCH(\"Account\",TrialBalance_Accounts,0)),\"Account Not Found\")",
    matchId: "scenario-4"
  }
];

export default function Unit03Lesson04Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Advanced INDEX/MATCH Mastery Challenges
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Beyond the Basics: Professional-Level Financial Model Building
              </h1>
              
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-lg border border-orange-200 mb-8">
                <p className="text-lg leading-relaxed text-orange-900">
                  Sarah's basic INDEX/MATCH Income Statement was a success—her second investor meeting went perfectly, and she secured 
                  her line of credit. But six months later, as TechStart Solutions grew rapidly, new challenges emerged. Her clients 
                  needed quarterly reports, trend analysis, and multi-period comparisons. Jennifer Kim returned to help Sarah build 
                  what she called "Wall Street-grade financial models"—systems that handle complex scenarios with the same elegance 
                  and reliability that major corporations demand.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Challenge 1: Dynamic Date-Based Lookups
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Sarah's biggest new challenge was tracking revenue by quarter automatically. Instead of manually updating formulas 
                each quarter, she needed a system that would pull the right period's data based on today's date. Jennifer introduced 
                her to the power of combining INDEX/MATCH with date functions and dynamic range references.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-semibold text-blue-900 mb-3 text-xl">The INDIRECT Function: Dynamic Range Building</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-blue-800 mb-2">Basic Dynamic Range:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      =INDEX(INDIRECT("TrialBalance_" & TEXT(TODAY(),"YYYY") & "_Amounts"), MATCH("Revenue", INDIRECT("TrialBalance_" & TEXT(TODAY(),"YYYY") & "_Accounts"), 0))
                    </div>
                    <p className="text-blue-700 text-sm mt-2">
                      This formula automatically references the current year's trial balance ranges, updating as years change.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-blue-800 mb-2">Quarterly Revenue Tracking:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      =INDEX(TrialBalance_Amounts, MATCH("Q" & QUARTER(TODAY()) & "_Revenue", TrialBalance_Accounts, 0))
                    </div>
                    <p className="text-blue-700 text-sm mt-2">
                      Automatically pulls revenue for the current quarter (Q1, Q2, Q3, or Q4) based on today's date.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Challenge 2: Advanced Pattern Matching with SUMPRODUCT
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                As Sarah's business grew, she found herself with dozens of marketing-related accounts: "Digital Marketing," 
                "Social Media Marketing," "Content Marketing," etc. Instead of writing separate INDEX/MATCH formulas for each, 
                Jennifer showed her how to use pattern matching to automatically group similar accounts.
              </p>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                <h3 className="font-semibold text-green-900 mb-3 text-xl">Wildcard Matching for Account Groups</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-green-800 mb-2">All Marketing Expenses:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      =SUMPRODUCT((ISNUMBER(SEARCH("*Marketing*", TrialBalance_Accounts))) * (TrialBalance_Amounts))
                    </div>
                    <p className="text-green-700 text-sm mt-2">
                      Automatically sums any account containing "Marketing" in its name, regardless of prefix or suffix.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-green-800 mb-2">Professional Services Category:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      =SUMPRODUCT(((ISNUMBER(SEARCH("*Legal*", TrialBalance_Accounts))) + (ISNUMBER(SEARCH("*Accounting*", TrialBalance_Accounts))) + (ISNUMBER(SEARCH("*Consulting*", TrialBalance_Accounts)))) * (TrialBalance_Amounts))
                    </div>
                    <p className="text-green-700 text-sm mt-2">
                      Groups multiple related account types into a single professional services category.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Challenge 3: Multi-Period Analysis and Trend Tracking
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Investors don't just want to see current performance—they want trends. Sarah needed to build models that could 
                pull data from multiple periods and show growth rates, variance analysis, and seasonal patterns. This required 
                mastering 3D references and advanced range management.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                <h3 className="font-semibold text-purple-900 mb-3 text-xl">Cross-Sheet and Cross-Period Analysis</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-purple-800 mb-2">Year-over-Year Revenue Growth:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded mb-2">
                      Current Year: =INDEX('2024'!TrialBalance_Amounts, MATCH("Revenue", '2024'!TrialBalance_Accounts, 0))
                    </div>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      Previous Year: =INDEX('2023'!TrialBalance_Amounts, MATCH("Revenue", '2023'!TrialBalance_Accounts, 0))
                    </div>
                    <p className="text-purple-700 text-sm mt-2">
                      References specific worksheets for each year, enabling automatic trend calculations.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-purple-800 mb-2">Dynamic Period Comparison:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      =INDEX(INDIRECT("'"&TEXT(DATE(YEAR(TODAY())-1,MONTH(TODAY()),1),"YYYY")&"'!TrialBalance_Amounts"), MATCH("Revenue", INDIRECT("'"&TEXT(DATE(YEAR(TODAY())-1,MONTH(TODAY()),1),"YYYY")&"'!TrialBalance_Accounts"), 0))
                    </div>
                    <p className="text-purple-700 text-sm mt-2">
                      Automatically references the same period from the previous year, updating as time progresses.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Challenge 4: Bulletproof Error Handling for Investor Presentations
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Nothing destroys investor confidence faster than seeing "#N/A" or "#REF!" errors in a financial model. 
                Jennifer taught Sarah advanced error handling techniques that ensure her models always display professional, 
                meaningful information, even when data is missing or ranges change.
              </p>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-8">
                <h3 className="font-semibold text-red-900 mb-3 text-xl flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Professional Error Handling Strategies
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-800 mb-2">Graceful Account Missing Handling:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      =IFERROR(INDEX(TrialBalance_Amounts, MATCH("Account_Name", TrialBalance_Accounts, 0)), "Account not yet established")
                    </div>
                    <p className="text-red-700 text-sm mt-2">
                      Shows a professional message instead of errors when accounts don't exist yet.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-800 mb-2">Nested Error Handling for Multiple Scenarios:</h4>
                    <div className="font-mono text-sm bg-gray-100 p-2 rounded">
                      =IFERROR(INDEX(TrialBalance_Amounts, MATCH("Revenue", TrialBalance_Accounts, 0)), IFERROR(INDEX(TrialBalance_Amounts, MATCH("Sales", TrialBalance_Accounts, 0)), 0))
                    </div>
                    <p className="text-red-700 text-sm mt-2">
                      Tries multiple account names and defaults to zero if none are found.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DragAndDrop
          title="Advanced INDEX/MATCH Scenario Mastery"
          description="Match each complex business scenario with the appropriate advanced INDEX/MATCH solution."
          leftColumnTitle="Business Challenges"
          rightColumnTitle="Advanced Excel Solutions"
          items={advancedScenarioItems}
          showHints={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Your Advanced Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 mb-4">
                Now it's time to push your INDEX/MATCH skills to the professional level. Choose one of these advanced 
                scenarios to implement in your own financial model:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-700 text-sm">
                <li>Build a quarterly revenue tracker that updates automatically</li>
                <li>Create pattern-matching expense categories for all similar accounts</li>
                <li>Implement year-over-year comparison formulas with growth calculations</li>
                <li>Add comprehensive error handling throughout your Income Statement</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckSquare className="h-5 w-5" />
                Professional Quality Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                Your advanced INDEX/MATCH model should meet these Wall Street standards:
              </p>
              <ul className="list-disc list-inside space-y-2 text-green-700 text-sm">
                <li>All formulas use meaningful named ranges, not cell references</li>
                <li>Error handling prevents any #N/A or #REF! displays</li>
                <li>Dynamic ranges automatically adjust for new data</li>
                <li>Pattern matching groups similar accounts automatically</li>
                <li>Multi-period analysis enables trend calculations</li>
                <li>Formula structure is clear and audit-ready</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200 max-w-4xl mx-auto">
          <h3 className="font-semibold text-amber-900 mb-2 text-xl flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            The Professional Advantage
          </h3>
          <p className="text-amber-800 leading-relaxed">
            These advanced INDEX/MATCH techniques aren't just Excel tricks—they're the foundation of enterprise-level 
            financial modeling. The same techniques you're learning today are used by analysts at Goldman Sachs, 
            McKinsey, and Fortune 500 companies. When you master dynamic ranges, pattern matching, and bulletproof 
            error handling, you're developing skills that separate you from 95% of business graduates. Sarah's investor 
            was so impressed with her advanced models that he recommended her to three other portfolio companies. 
            Professional-grade Excel skills open doors.
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