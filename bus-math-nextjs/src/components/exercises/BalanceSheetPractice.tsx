'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle2, XCircle, Target, TrendingUp } from "lucide-react";

interface Account {
  name: string;
  amount: number;
  type: 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
  category: 'current-asset' | 'long-asset' | 'current-liability' | 'long-liability' | 'equity' | 'revenue' | 'expense';
}

interface PracticeRound {
  companyName: string;
  accounts: Account[];
  correctAssets: number;
  correctLiabilities: number;
  correctEquity: number;
  correctRetainedEarnings: number;
  netIncome: number;
  beginningRE: number;
  dividends: number;
}

const companyNames = [
  "Sarah's TechStart Solutions",
  "Green Leaf Café",
  "Bright Tutoring Co.",
  "Summit Fitness Studio",
  "Coastal Delivery Service",
  "Maple Street Bakery",
  "Peak Consulting Group",
  "Riverfront Auto Repair"
];

const assetPool = [
  { name: "Cash", category: "current-asset" as const, base: 5000, range: 3000 },
  { name: "Accounts Receivable", category: "current-asset" as const, base: 2000, range: 1500 },
  { name: "Supplies", category: "current-asset" as const, base: 500, range: 300 },
  { name: "Prepaid Insurance", category: "current-asset" as const, base: 600, range: 400 },
  { name: "Equipment", category: "long-asset" as const, base: 8000, range: 4000 },
  { name: "Accumulated Depreciation", category: "long-asset" as const, base: -1500, range: 800 },
  { name: "Buildings", category: "long-asset" as const, base: 15000, range: 5000 },
  { name: "Vehicles", category: "long-asset" as const, base: 6000, range: 3000 },
];

const liabilityPool = [
  { name: "Accounts Payable", category: "current-liability" as const, base: 2000, range: 1500 },
  { name: "Wages Payable", category: "current-liability" as const, base: 800, range: 500 },
  { name: "Unearned Revenue", category: "current-liability" as const, base: 1000, range: 600 },
  { name: "Notes Payable (short-term)", category: "current-liability" as const, base: 3000, range: 2000 },
  { name: "Notes Payable (long-term)", category: "long-liability" as const, base: 10000, range: 5000 },
  { name: "Mortgage Payable", category: "long-liability" as const, base: 12000, range: 6000 },
];

const equityPool = [
  { name: "Common Stock", category: "equity" as const, base: 10000, range: 5000 },
  { name: "Owner's Capital", category: "equity" as const, base: 8000, range: 4000 },
];

const distractorPool = [
  { name: "Service Revenue", type: "Revenue" as const, base: 6000, range: 3000 },
  { name: "Rent Expense", type: "Expense" as const, base: 1500, range: 800 },
  { name: "Salary Expense", type: "Expense" as const, base: 3000, range: 1500 },
  { name: "Supplies Expense", type: "Expense" as const, base: 500, range: 300 },
  { name: "Sales Revenue", type: "Revenue" as const, base: 4000, range: 2000 },
];

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRound(): PracticeRound {
  const companyName = companyNames[randInt(0, companyNames.length - 1)];
  
  const numAssets = randInt(4, 6);
  const numLiabilities = randInt(2, 4);
  const numEquityBase = randInt(1, 2);
  const numDistractors = randInt(2, 4);
  
  const shuffledAssets = [...assetPool].sort(() => Math.random() - 0.5);
  const shuffledLiabilities = [...liabilityPool].sort(() => Math.random() - 0.5);
  const shuffledEquity = [...equityPool].sort(() => Math.random() - 0.5);
  const shuffledDistractors = [...distractorPool].sort(() => Math.random() - 0.5);
  
  const selectedAssets = shuffledAssets.slice(0, numAssets).map((a) => ({
    name: a.name,
    amount: a.base < 0 ? -randInt(Math.abs(a.base) - Math.min(Math.abs(a.range), Math.abs(a.base) - 50), Math.abs(a.base) + Math.abs(a.range)) : randInt(a.base - Math.min(a.range, a.base - 100), a.base + a.range),
    type: 'Asset' as const,
    category: a.category,
  }));
  
  const selectedLiabilities = shuffledLiabilities.slice(0, numLiabilities).map((l) => ({
    name: l.name,
    amount: randInt(l.base - Math.min(l.range, l.base - 100), l.base + l.range),
    type: 'Liability' as const,
    category: l.category,
  }));
  
  const selectedEquity = shuffledEquity.slice(0, numEquityBase).map((e) => ({
    name: e.name,
    amount: randInt(e.base - Math.min(e.range, e.base - 1000), e.base + e.range),
    type: 'Equity' as const,
    category: e.category,
  }));
  
  const selectedDistractors = shuffledDistractors.slice(0, numDistractors).map((d) => ({
    name: d.name,
    amount: randInt(d.base - Math.min(d.range, d.base - 100), d.base + d.range),
    type: d.type,
    category: (d.type === 'Revenue' ? 'revenue' : 'expense') as 'revenue' | 'expense',
  }));
  
  const allAccounts = [...selectedAssets, ...selectedLiabilities, ...selectedEquity, ...selectedDistractors]
    .sort(() => Math.random() - 0.5);
  
  const correctAssets = selectedAssets.reduce((sum, a) => sum + a.amount, 0);
  const correctLiabilities = selectedLiabilities.reduce((sum, l) => sum + l.amount, 0);
  
  const beginningRE = randInt(2000, 8000);
  const netIncome = randInt(1500, 6000);
  const dividends = randInt(0, Math.min(2000, netIncome));
  const correctRetainedEarnings = beginningRE + netIncome - dividends;
  const correctEquity = selectedEquity.reduce((sum, e) => sum + e.amount, 0) + correctRetainedEarnings;
  
  return {
    companyName,
    accounts: allAccounts,
    correctAssets,
    correctLiabilities,
    correctEquity,
    correctRetainedEarnings,
    netIncome,
    beginningRE,
    dividends,
  };
}

const misconceptionFeedback: Record<string, string> = {
  assetsWrong: "Your Total Assets do not match. Check that you included all asset accounts (Cash, Receivables, Supplies, Equipment, etc.). Remember: assets are what the business owns.",
  liabilitiesWrong: "Your Total Liabilities do not match. Check that you included all liability accounts (Payables, Notes, Mortgages). Remember: liabilities are what the business owes.",
  equityWrong: "Your Total Equity does not match. Don't forget: Ending Retained Earnings = Beginning RE + Net Income − Dividends. Then add Common Stock or Owner's Capital.",
  reWrong: "Your Retained Earnings calculation is off. The formula is: Beginning RE + Net Income − Dividends = Ending RE. Use the given net income and dividends from the problem.",
  allCorrect: "Correct! You classified all accounts, calculated retained earnings correctly, and the balance sheet balances: Assets = Liabilities + Equity.",
};

function checkAnswer(
  userAssets: number,
  userLiabilities: number,
  userEquity: number,
  userRE: number,
  correct: { assets: number; liabilities: number; equity: number; re: number }
): { correct: boolean; feedback: string } {
  const tolerance = 1;
  const assetsDiff = Math.abs(userAssets - correct.assets);
  const liabDiff = Math.abs(userLiabilities - correct.liabilities);
  const equityDiff = Math.abs(userEquity - correct.equity);
  const reDiff = Math.abs(userRE - correct.re);
  
  if (assetsDiff <= tolerance && liabDiff <= tolerance && equityDiff <= tolerance && reDiff <= tolerance) {
    return { correct: true, feedback: misconceptionFeedback.allCorrect };
  }
  
  let feedback = "";
  if (reDiff > tolerance) {
    feedback += misconceptionFeedback.reWrong;
  }
  if (assetsDiff > tolerance) {
    if (feedback) feedback += " ";
    feedback += misconceptionFeedback.assetsWrong;
  }
  if (liabDiff > tolerance) {
    if (feedback) feedback += " ";
    feedback += misconceptionFeedback.liabilitiesWrong;
  }
  if (equityDiff > tolerance && reDiff <= tolerance) {
    if (feedback) feedback += " ";
    feedback += misconceptionFeedback.equityWrong;
  }
  
  return { correct: false, feedback: feedback || misconceptionFeedback.allCorrect };
}

export function BalanceSheetPractice() {
  const [round, setRound] = useState<PracticeRound>(generateRound);
  const [userAssets, setUserAssets] = useState("");
  const [userLiabilities, setUserLiabilities] = useState("");
  const [userEquity, setUserEquity] = useState("");
  const [userRE, setUserRE] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ correct: boolean; feedback: string } | null>(null);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [showWorkedExample, setShowWorkedExample] = useState(false);
  
  const masteryTarget = 3;
  
  const handleSubmit = useCallback(() => {
    const assets = parseFloat(userAssets) || 0;
    const liabilities = parseFloat(userLiabilities) || 0;
    const equity = parseFloat(userEquity) || 0;
    const re = parseFloat(userRE) || 0;
    
    const checkResult = checkAnswer(assets, liabilities, equity, re, {
      assets: round.correctAssets,
      liabilities: round.correctLiabilities,
      equity: round.correctEquity,
      re: round.correctRetainedEarnings,
    });
    
    setResult(checkResult);
    setSubmitted(true);
    setTotalAttempts((prev) => prev + 1);
    
    if (checkResult.correct) {
      setConsecutiveCorrect((prev) => prev + 1);
    } else {
      setConsecutiveCorrect(0);
    }
  }, [userAssets, userLiabilities, userEquity, userRE, round]);
  
  const handleNewRound = useCallback(() => {
    setRound(generateRound());
    setUserAssets("");
    setUserLiabilities("");
    setUserEquity("");
    setUserRE("");
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
            <span>Balance Sheet Practice</span>
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
                You got {masteryTarget} correct in a row. You can build a balance sheet and calculate retained earnings reliably.
              </p>
            </div>
          )}
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">{round.companyName} — Trial Balance</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Account</th>
                    <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {round.accounts.map((a, i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 px-4 py-2">{a.name}</td>
                      <td className="border border-gray-300 px-4 py-2 text-right">${a.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200 text-sm text-blue-800">
              <strong>Additional information:</strong> Beginning Retained Earnings = ${round.beginningRE.toLocaleString()}. Net Income this period = ${round.netIncome.toLocaleString()}. Dividends paid = ${round.dividends.toLocaleString()}.
            </div>
            <p className="text-gray-600 text-xs mt-2">
              Build the balance sheet: classify assets, liabilities, and equity. Calculate ending retained earnings. Verify Assets = Liabilities + Equity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Assets
              </label>
              <input
                type="number"
                value={userAssets}
                onChange={(e) => setUserAssets(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 18500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Liabilities
              </label>
              <input
                type="number"
                value={userLiabilities}
                onChange={(e) => setUserLiabilities(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 8200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ending Retained Earnings
              </label>
              <input
                type="number"
                value={userRE}
                onChange={(e) => setUserRE(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 7500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Equity
              </label>
              <input
                type="number"
                value={userEquity}
                onChange={(e) => setUserEquity(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 15500"
              />
            </div>
          </div>
          
          {!submitted ? (
            <Button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!userAssets || !userLiabilities || !userEquity || !userRE}
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
                        <div className="mt-2 text-sm text-red-700">
                          <p>Correct answers: Assets = ${round.correctAssets.toLocaleString()}, Liabilities = ${round.correctLiabilities.toLocaleString()}, Ending RE = ${round.correctRetainedEarnings.toLocaleString()}, Total Equity = ${round.correctEquity.toLocaleString()}</p>
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
                  <div className="text-sm text-blue-800 space-y-1">
                    <p><strong>Asset accounts:</strong> {round.accounts.filter(a => a.type === 'Asset').map(a => `${a.name} ($${a.amount.toLocaleString()})`).join(', ')}</p>
                    <p><strong>Total Assets:</strong> ${round.correctAssets.toLocaleString()}</p>
                    <p><strong>Liability accounts:</strong> {round.accounts.filter(a => a.type === 'Liability').map(a => `${a.name} ($${a.amount.toLocaleString()})`).join(', ')}</p>
                    <p><strong>Total Liabilities:</strong> ${round.correctLiabilities.toLocaleString()}</p>
                    <p><strong>Retained Earnings:</strong> ${round.beginningRE.toLocaleString()} (beginning) + ${round.netIncome.toLocaleString()} (net income) − ${round.dividends.toLocaleString()} (dividends) = ${round.correctRetainedEarnings.toLocaleString()}</p>
                    <p><strong>Equity accounts:</strong> {round.accounts.filter(a => a.type === 'Equity').map(a => `${a.name} ($${a.amount.toLocaleString()})`).join(', ')} + Ending RE ($${round.correctRetainedEarnings.toLocaleString()})</p>
                    <p><strong>Total Equity:</strong> ${round.correctEquity.toLocaleString()}</p>
                    <p><strong>Check:</strong> Assets ($${round.correctAssets.toLocaleString()}) = Liabilities ($${round.correctLiabilities.toLocaleString()}) + Equity ($${round.correctEquity.toLocaleString()}) ✓</p>
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
            Each round uses different numbers but the same procedure: classify accounts, calculate retained earnings, verify the equation.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
