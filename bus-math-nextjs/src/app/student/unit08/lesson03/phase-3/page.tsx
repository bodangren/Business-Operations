'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Lightbulb, Building2, Calculator, DollarSign, ArrowRight } from "lucide-react";
import { FinancialStatementMatching } from "@/components/drag-drop-exercises/FinancialStatementMatching";

const phase3 = lesson03Phases.find(p => p.sequence === 3)!;

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase3}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          {/* Guided Practice Introduction */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Building Sarah's Integrated Model</h2>
            
            <p className="text-lg leading-relaxed">
              Jennifer spreads out Sarah's financial statements on the conference table. "Before we link 
              everything together in Excel," she says, "let's make sure you can identify which items 
              belong to each statement. This is the foundation—if you don't understand where each 
              piece of financial information belongs, your integrated model will be built on shaky ground."
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h3 className="text-blue-900 font-semibold mb-3">Practice Scenario: TechStart Solutions</h3>
              <p className="text-blue-800">
                Sarah has identified key financial line items from her business operations. Your job is to 
                help her categorize these items correctly so she can build her three-statement model with 
                confidence. Remember: each item has a specific "home" in one of the three financial statements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <Calculator className="h-4 w-4" />
                    Income Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800 mb-2">Performance over time</p>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Revenue items (what comes IN)</li>
                    <li>• Expense items (what goes OUT)</li>
                    <li>• Profit calculations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-base">
                    <Building2 className="h-4 w-4" />
                    Balance Sheet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800 mb-2">What you own &amp; owe right now</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Assets (what you OWN)</li>
                    <li>• Liabilities (what you OWE)</li>
                    <li>• Equity (your STAKE)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-base">
                    <DollarSign className="h-4 w-4" />
                    Cash Flow Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-800 mb-2">Where cash actually moves</p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Operating cash flows</li>
                    <li>• Investing cash flows</li>
                    <li>• Financing cash flows</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interactive Exercise */}
          <FinancialStatementMatching />

          {/* Think-Pair-Share Discussion */}
          <div className="space-y-6">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Think-Pair-Share Discussion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-orange-900 mb-2">
                  Discussion Prompt (4 minutes):
                </p>
                <p className="text-orange-800 mb-4">
                  Now that you've categorized financial line items, think about Sarah's investor meeting. 
                  The VCs want to see how her three statements connect. Discuss with a partner:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-white border border-orange-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-orange-900 text-sm flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        Part A: Connection Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• How does Net Income from the Income Statement connect to the Balance Sheet?</li>
                        <li>• Why would cash on the Balance Sheet be different from Net Income?</li>
                        <li>• What questions might the VCs ask about these connections?</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-orange-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-orange-900 text-sm flex items-center gap-1">
                        <Lightbulb className="h-4 w-4" />
                        Part B: Real-World Application
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-orange-800 text-sm space-y-1">
                        <li>• If Sarah buys a new computer for $2,000, which statements are affected?</li>
                        <li>• How would taking out a $50,000 loan impact all three statements?</li>
                        <li>• Why do investors care about these relationships?</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Key Integration Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Statement Connections</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="text-sm font-medium text-green-800">Income Statement → Balance Sheet</p>
                        <p className="text-xs text-green-700">Net Income flows into Retained Earnings (Equity section)</p>
                      </div>
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="text-sm font-medium text-green-800">Balance Sheet → Cash Flow</p>
                        <p className="text-xs text-green-700">Changes in Balance Sheet accounts create cash flows</p>
                      </div>
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="text-sm font-medium text-green-800">Cash Flow → Balance Sheet</p>
                        <p className="text-xs text-green-700">Net cash change updates the Cash account</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Why Investors Care</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="text-xs text-green-700">
                          <strong>Consistency Check:</strong> Connected statements prove the numbers are reliable
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="text-xs text-green-700">
                          <strong>Cash Reality:</strong> Shows if the business can actually pay its bills
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="text-xs text-green-700">
                          <strong>Future Planning:</strong> Integrated models can test different scenarios
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded border border-green-200">
                        <p className="text-xs text-green-700">
                          <strong>Professional Standard:</strong> Shows the entrepreneur understands finance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Example: Sarah's Computer Purchase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-800 mb-4">
                  Let's trace how buying a $2,000 computer affects all three statements:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h5 className="font-medium text-purple-900 mb-2">Balance Sheet Impact</h5>
                    <p className="text-xs text-purple-700 mb-1">Equipment (Asset) +$2,000</p>
                    <p className="text-xs text-purple-700">Cash (Asset) -$2,000</p>
                    <p className="text-xs text-purple-600 mt-2">✓ Assets stay balanced</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h5 className="font-medium text-purple-900 mb-2">Cash Flow Impact</h5>
                    <p className="text-xs text-purple-700 mb-1">Investing Activities: -$2,000</p>
                    <p className="text-xs text-purple-700">(Cash used to buy equipment)</p>
                    <p className="text-xs text-purple-600 mt-2">✓ Cash decreases by $2,000</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h5 className="font-medium text-purple-900 mb-2">Income Statement Impact</h5>
                    <p className="text-xs text-purple-700 mb-1">No immediate impact</p>
                    <p className="text-xs text-purple-700">(Future depreciation expense)</p>
                    <p className="text-xs text-purple-600 mt-2">✓ Connected through time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase3}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}