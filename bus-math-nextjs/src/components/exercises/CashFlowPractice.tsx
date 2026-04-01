'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle2, XCircle, Target, TrendingUp } from "lucide-react";

interface CashFlowRound {
  companyName: string;
  netIncome: number;
  depreciation: number;
  arChange: number;
  suppliesChange: number;
  apChange: number;
  equipmentPurchase: number;
  loanBorrowed: number;
  dividendsPaid: number;
  correctOperating: number;
  correctInvesting: number;
  correctFinancing: number;
  correctNetChange: number;
}

const companyNames = [
  "Sarah's TechStart Solutions",
  "Green Leaf Café",
  "Bright Tutoring Co.",
  "Summit Fitness Studio",
  "Coastal Delivery Service"
];

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRound(): CashFlowRound {
  const companyName = companyNames[randInt(0, companyNames.length - 1)];
  const netIncome = randInt(2000, 8000);
  const depreciation = randInt(200, 800);
  const arChange = randInt(500, 3000);
  const suppliesChange = randInt(100, 800);
  const apChange = randInt(200, 1500);
  const equipmentPurchase = randInt(1000, 5000);
  const loanBorrowed = randInt(0, 1) === 1 ? randInt(2000, 6000) : 0;
  const dividendsPaid = randInt(0, 1) === 1 ? randInt(500, 2000) : 0;

  const correctOperating = netIncome + depreciation - arChange - suppliesChange + apChange;
  const correctInvesting = -equipmentPurchase;
  const correctFinancing = loanBorrowed - dividendsPaid;
  const correctNetChange = correctOperating + correctInvesting + correctFinancing;

  return {
    companyName,
    netIncome,
    depreciation,
    arChange,
    suppliesChange,
    apChange,
    equipmentPurchase,
    loanBorrowed,
    dividendsPaid,
    correctOperating,
    correctInvesting,
    correctFinancing,
    correctNetChange,
  };
}

const misconceptionFeedback: Record<string, string> = {
  operatingWrong: "Your Operating Cash Flow does not match. Remember: start with Net Income, add back Depreciation, subtract increases in current assets (AR, Supplies), and add increases in current liabilities (AP).",
  investingWrong: "Your Investing Cash Flow does not match. Equipment purchases are cash outflows (negative). Only include long-term asset transactions here.",
  financingWrong: "Your Financing Cash Flow does not match. Borrowing is a cash inflow (positive). Dividends paid are a cash outflow (negative).",
  netWrong: "Your Net Change in Cash does not match. Add Operating + Investing + Financing. This should equal the change in the cash balance.",
  allCorrect: "Correct! You built the cash flow statement accurately and all three sections reconcile.",
};

function checkAnswer(
  userOperating: number,
  userInvesting: number,
  userFinancing: number,
  userNetChange: number,
  correct: { operating: number; investing: number; financing: number; netChange: number }
): { correct: boolean; feedback: string } {
  const tolerance = 1;
  const opDiff = Math.abs(userOperating - correct.operating);
  const invDiff = Math.abs(userInvesting - correct.investing);
  const finDiff = Math.abs(userFinancing - correct.financing);
  const netDiff = Math.abs(userNetChange - correct.netChange);

  if (opDiff <= tolerance && invDiff <= tolerance && finDiff <= tolerance && netDiff <= tolerance) {
    return { correct: true, feedback: misconceptionFeedback.allCorrect };
  }

  let feedback = "";
  if (opDiff > tolerance) feedback += misconceptionFeedback.operatingWrong + " ";
  if (invDiff > tolerance) feedback += misconceptionFeedback.investingWrong + " ";
  if (finDiff > tolerance) feedback += misconceptionFeedback.financingWrong + " ";
  if (netDiff > tolerance && opDiff <= tolerance && invDiff <= tolerance && finDiff <= tolerance) {
    feedback += misconceptionFeedback.netWrong;
  }

  return { correct: !!feedback, feedback: feedback.trim() || misconceptionFeedback.allCorrect };
}

export function CashFlowPractice() {
  const [round, setRound] = useState<CashFlowRound>(generateRound);
  const [userOperating, setUserOperating] = useState("");
  const [userInvesting, setUserInvesting] = useState("");
  const [userFinancing, setUserFinancing] = useState("");
  const [userNetChange, setUserNetChange] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ correct: boolean; feedback: string } | null>(null);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [showWorkedExample, setShowWorkedExample] = useState(false);

  const masteryTarget = 3;

  const handleSubmit = useCallback(() => {
    const operating = parseFloat(userOperating) || 0;
    const investing = parseFloat(userInvesting) || 0;
    const financing = parseFloat(userFinancing) || 0;
    const netChange = parseFloat(userNetChange) || 0;

    const checkResult = checkAnswer(operating, investing, financing, netChange, {
      operating: round.correctOperating,
      investing: round.correctInvesting,
      financing: round.correctFinancing,
      netChange: round.correctNetChange,
    });

    setResult(checkResult);
    setSubmitted(true);
    setTotalAttempts((prev) => prev + 1);

    if (checkResult.correct) {
      setConsecutiveCorrect((prev) => prev + 1);
    } else {
      setConsecutiveCorrect(0);
    }
  }, [userOperating, userInvesting, userFinancing, userNetChange, round]);

  const handleNewRound = useCallback(() => {
    setRound(generateRound());
    setUserOperating("");
    setUserInvesting("");
    setUserFinancing("");
    setUserNetChange("");
    setSubmitted(false);
    setResult(null);
    setShowWorkedExample(false);
  }, []);

  const isMastery = consecutiveCorrect >= masteryTarget;

  return (
    <div className="space-y-6">
      <Card className="border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
          <CardTitle className="text-purple-900 flex items-center justify-between">
            <span>Cash Flow Statement Practice</span>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Target className="h-4 w-4 text-purple-600" />
                <span className="text-purple-700">
                  Streak: {consecutiveCorrect}/{masteryTarget}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <span className="text-purple-700">Attempts: {totalAttempts}</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {isMastery && (
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-green-800 font-bold text-lg">Mastery Achieved!</p>
              <p className="text-green-700 text-sm">
                You got {masteryTarget} correct in a row. You can build an indirect-method cash flow statement reliably.
              </p>
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">{round.companyName} — Financial Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 rounded border">
                <p className="font-semibold text-gray-800 mb-2">Income Statement Data:</p>
                <p>Net Income: <strong>${round.netIncome.toLocaleString()}</strong></p>
                <p>Depreciation Expense: <strong>${round.depreciation.toLocaleString()}</strong></p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="font-semibold text-gray-800 mb-2">Balance Sheet Changes:</p>
                <p>Accounts Receivable: <strong>increased ${round.arChange.toLocaleString()}</strong></p>
                <p>Supplies: <strong>increased ${round.suppliesChange.toLocaleString()}</strong></p>
                <p>Accounts Payable: <strong>increased ${round.apChange.toLocaleString()}</strong></p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="font-semibold text-gray-800 mb-2">Investing & Financing:</p>
                <p>Equipment purchased: <strong>${round.equipmentPurchase.toLocaleString()} cash</strong></p>
                {round.loanBorrowed > 0 && <p>Loan borrowed: <strong>${round.loanBorrowed.toLocaleString()}</strong></p>}
                {round.dividendsPaid > 0 && <p>Dividends paid: <strong>${round.dividendsPaid.toLocaleString()}</strong></p>}
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-3">
              Build the indirect-method cash flow statement: calculate operating, investing, and financing cash flows, then verify the net change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Net Cash from Operating Activities
              </label>
              <input
                type="number"
                value={userOperating}
                onChange={(e) => setUserOperating(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 2850"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Net Cash from Investing Activities
              </label>
              <input
                type="number"
                value={userInvesting}
                onChange={(e) => setUserInvesting(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. -3000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Net Cash from Financing Activities
              </label>
              <input
                type="number"
                value={userFinancing}
                onChange={(e) => setUserFinancing(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Net Change in Cash
              </label>
              <input
                type="number"
                value={userNetChange}
                onChange={(e) => setUserNetChange(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. -150"
              />
            </div>
          </div>

          {!submitted ? (
            <Button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!userOperating || !userInvesting || !userFinancing || !userNetChange}
            >
              Submit Answer
            </Button>
          ) : (
            <div className="space-y-4">
              {result && (
                <div className={`p-4 rounded-lg border ${result.correct ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                  <div className="flex items-start gap-2">
                    {result.correct ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className={`font-semibold ${result.correct ? 'text-green-800' : 'text-red-800'}`}>
                        {result.correct ? 'Correct!' : 'Not quite right'}
                      </p>
                      <p className={`text-sm mt-1 ${result.correct ? 'text-green-700' : 'text-red-700'}`}>
                        {result.feedback}
                      </p>
                      {!result.correct && (
                        <div className="mt-2 text-sm text-red-700 space-y-1">
                          <p>Correct answers:</p>
                          <p>Operating: ${round.correctOperating.toLocaleString()}</p>
                          <p>Investing: ${round.correctInvesting.toLocaleString()}</p>
                          <p>Financing: ${round.correctFinancing.toLocaleString()}</p>
                          <p>Net Change: ${round.correctNetChange.toLocaleString()}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {!result?.correct && !showWorkedExample && (
                <Button
                  variant="outline"
                  onClick={() => setShowWorkedExample(true)}
                  className="text-purple-600 border-purple-300"
                >
                  Show me how to solve this one
                </Button>
              )}

              {showWorkedExample && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Worked Solution</h4>
                  <div className="text-sm text-blue-800 space-y-2">
                    <p><strong>Operating Activities:</strong></p>
                    <p className="ml-4">Net Income: ${round.netIncome.toLocaleString()}</p>
                    <p className="ml-4">+ Depreciation: +${round.depreciation.toLocaleString()}</p>
                    <p className="ml-4">− Increase in AR: −${round.arChange.toLocaleString()}</p>
                    <p className="ml-4">− Increase in Supplies: −${round.suppliesChange.toLocaleString()}</p>
                    <p className="ml-4">+ Increase in AP: +${round.apChange.toLocaleString()}</p>
                    <p className="ml-4 font-bold">= ${round.correctOperating.toLocaleString()}</p>
                    <p className="mt-2"><strong>Investing Activities:</strong></p>
                    <p className="ml-4">Purchase of equipment: −${round.equipmentPurchase.toLocaleString()}</p>
                    <p className="ml-4 font-bold">= ${round.correctInvesting.toLocaleString()}</p>
                    <p className="mt-2"><strong>Financing Activities:</strong></p>
                    {round.loanBorrowed > 0 && <p className="ml-4">+ Loan borrowed: +${round.loanBorrowed.toLocaleString()}</p>}
                    {round.dividendsPaid > 0 && <p className="ml-4">− Dividends paid: −${round.dividendsPaid.toLocaleString()}</p>}
                    {round.loanBorrowed === 0 && round.dividendsPaid === 0 && <p className="ml-4 text-gray-500">(No financing activities)</p>}
                    <p className="ml-4 font-bold">= ${round.correctFinancing.toLocaleString()}</p>
                    <p className="mt-2 font-bold">Net Change: ${round.correctOperating.toLocaleString()} + (${round.correctInvesting.toLocaleString()}) + ${round.correctFinancing.toLocaleString()} = ${round.correctNetChange.toLocaleString()}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  onClick={handleNewRound}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  New Problem
                </Button>
              </div>
            </div>
          )}

          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-sm text-purple-800">
            <strong>Mastery rule:</strong> Get {masteryTarget} correct answers in a row to complete this practice.
            Each round uses different numbers but the same procedure: calculate operating cash flow from net income adjustments, identify investing and financing activities, and verify the net change.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
