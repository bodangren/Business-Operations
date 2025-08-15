'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Building2, DollarSign, Calculator, AlertTriangle, CheckCircle } from "lucide-react";
import { BusinessTransactionCategorization } from "@/components/drag-drop/BusinessTransactionCategorization";

const phase4 = lesson03Phases.find(p => p.sequence === 4)!;

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase4}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          {/* Independent Practice Introduction */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Independent Challenge: Building Sarah's Cash Flow Statement</h2>
            
            <p className="text-lg leading-relaxed">
              Sarah sits down with her laptop and a stack of TechStart Solutions' transaction records. 
              "I can build the Income Statement and Balance Sheet," she tells Jennifer, "but the Cash Flow 
              Statement is where I'm getting stuck. I need to understand exactly which transactions belong 
              in Operating, Investing, or Financing activities."
            </p>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg my-6">
              <h3 className="text-orange-900 font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                The Investor's Cash Flow Test
              </h3>
              <p className="text-orange-800">
                "VCs scrutinize the Cash Flow Statement more than any other statement," Jennifer explains. 
                "They want to see positive Operating Activities—that proves your business model works. 
                They expect negative Investing Activities—that shows you're growing. And they want to 
                understand your Financing Activities—that tells them about your funding strategy."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Your Independent Challenge</h3>
            
            <p className="text-lg leading-relaxed">
              Below are real business transactions from Sarah's TechStart Solutions and other companies. 
              Your job is to correctly categorize each transaction into the three cash flow categories. 
              This skill is critical for understanding how the Cash Flow Statement integrates with the 
              other financial statements and tells the complete story of a business's financial health.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-base">
                    <Calculator className="h-4 w-4" />
                    Operating Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-800 mb-2">Daily business operations</p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Customer payments received</li>
                    <li>• Salaries and rent paid</li>
                    <li>• Inventory purchases</li>
                    <li>• Interest paid/received</li>
                  </ul>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Core Business</Badge>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-base">
                    <Building2 className="h-4 w-4" />
                    Investing Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800 mb-2">Long-term asset transactions</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Equipment purchases</li>
                    <li>• Asset sales</li>
                    <li>• Investment securities</li>
                    <li>• Patent acquisitions</li>
                  </ul>
                  <Badge className="mt-2 bg-green-100 text-green-800">Growth Investment</Badge>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <DollarSign className="h-4 w-4" />
                    Financing Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800 mb-2">Funding and capital structure</p>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Bank loans received</li>
                    <li>• Owner investments</li>
                    <li>• Loan principal payments</li>
                    <li>• Dividend distributions</li>
                  </ul>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">Capital Structure</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-6">
              <h4 className="text-green-900 font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Success Criteria
              </h4>
              <ul className="text-green-800 space-y-2">
                <li>• <strong>90%+ accuracy</strong> demonstrates mastery of cash flow categorization</li>
                <li>• <strong>Understanding complexity</strong> of edge cases like interest payments</li>
                <li>• <strong>Speed and confidence</strong> in categorizing typical business transactions</li>
                <li>• <strong>Practical application</strong> to Sarah's TechStart Solutions scenarios</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Key Integration Insights</h4>
            
            <p className="text-lg leading-relaxed">
              Remember: each transaction you categorize here will eventually affect Sarah's integrated 
              financial model. Operating Activities connect to the Income Statement. Investing Activities 
              change the asset accounts on the Balance Sheet. Financing Activities alter the debt and 
              equity structure. Getting these categories right is essential for building the investor-ready 
              model Sarah needs.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-6">
              <h5 className="text-blue-900 font-medium mb-2">Pro Tips for Success:</h5>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Ask: "Is this part of daily operations?" → Operating</li>
                <li>• Ask: "Are we buying/selling long-term assets?" → Investing</li>
                <li>• Ask: "Does this involve owners or lenders?" → Financing</li>
                <li>• Remember: Interest payments are Operating, but principal payments are Financing</li>
                <li>• Equipment purchases are Investing, but inventory purchases are Operating</li>
              </ul>
            </div>
          </div>

          {/* Interactive Exercise */}
          <BusinessTransactionCategorization />

          {/* Integration Analysis */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Three-Statement Integration Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 mb-4">
                Now that you've mastered cash flow categorization, consider how these transactions 
                integrate across all three financial statements:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Real-World Integration Example</h4>
                  <div className="bg-white p-4 rounded border border-amber-200">
                    <h5 className="font-medium text-amber-900 mb-2">Sarah buys a $5,000 computer:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-amber-700">Balance Sheet:</span>
                        <span className="text-amber-800">Equipment +$5,000, Cash -$5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Cash Flow:</span>
                        <span className="text-amber-800">Investing Activities -$5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Income Statement:</span>
                        <span className="text-amber-800">Future depreciation expense</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">Investor Validation Check</h4>
                  <div className="bg-white p-4 rounded border border-amber-200">
                    <h5 className="font-medium text-amber-900 mb-2">The numbers must reconcile:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-amber-700">Net Income:</span>
                        <span className="text-amber-800">→ Retained Earnings (Balance Sheet)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Cash Changes:</span>
                        <span className="text-amber-800">Cash Flow = Balance Sheet Δ</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Accounting Equation:</span>
                        <span className="text-amber-800">Assets = Liabilities + Equity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded border border-amber-200">
                <h5 className="font-medium text-amber-900 mb-2">What VCs Look For:</h5>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• <strong>Positive Operating Cash Flow:</strong> Proves the business model generates cash</li>
                  <li>• <strong>Strategic Investing Activities:</strong> Shows growth-oriented asset investments</li>
                  <li>• <strong>Controlled Financing Activities:</strong> Demonstrates thoughtful capital management</li>
                  <li>• <strong>Perfect Integration:</strong> All three statements tie together flawlessly</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase4}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}