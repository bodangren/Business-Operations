'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle2, XCircle, Target, TrendingUp } from "lucide-react";

interface Account {
  name: string;
  amount: number;
  type: 'Revenue' | 'Expense' | 'Asset' | 'Liability' | 'Equity';
}

interface PracticeRound {
  companyName: string;
  accounts: Account[];
  correctRevenue: number;
  correctExpenses: number;
  correctNetIncome: number;
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

const revenuePool = [
  { name: "Service Revenue", base: 5000, range: 3000 },
  { name: "Sales Revenue", base: 3000, range: 2000 },
  { name: "Consulting Revenue", base: 4000, range: 2500 },
  { name: "Repair Revenue", base: 2500, range: 1500 },
  { name: "Delivery Revenue", base: 3500, range: 2000 },
  { name: "Training Revenue", base: 2000, range: 1500 },
];

const expensePool = [
  { name: "Rent Expense", base: 1500, range: 800 },
  { name: "Salary Expense", base: 3000, range: 1500 },
  { name: "Supplies Expense", base: 500, range: 300 },
  { name: "Utilities Expense", base: 300, range: 200 },
  { name: "Insurance Expense", base: 400, range: 200 },
  { name: "Marketing Expense", base: 600, range: 400 },
  { name: "Repairs Expense", base: 350, range: 250 },
  { name: "Interest Expense", base: 150, range: 100 },
];

const distractorPool = [
  { name: "Cash", type: "Asset" as const, base: 5000, range: 3000 },
  { name: "Accounts Receivable", type: "Asset" as const, base: 2000, range: 1500 },
  { name: "Equipment", type: "Asset" as const, base: 4000, range: 2000 },
  { name: "Accounts Payable", type: "Liability" as const, base: 1500, range: 1000 },
  { name: "Common Stock", type: "Equity" as const, base: 5000, range: 2000 },
  { name: "Owner's Draw", type: "Equity" as const, base: 1000, range: 800 },
  { name: "Notes Payable", type: "Liability" as const, base: 3000, range: 2000 },
  { name: "Prepaid Insurance", type: "Asset" as const, base: 600, range: 400 },
];

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRound(): PracticeRound {
  const companyName = companyNames[randInt(0, companyNames.length - 1)];
  
  const numRevenue = randInt(1, 3);
  const numExpense = randInt(3, 5);
  const numDistractors = randInt(3, 5);
  
  const shuffledRevenue = [...revenuePool].sort(() => Math.random() - 0.5);
  const shuffledExpense = [...expensePool].sort(() => Math.random() - 0.5);
  const shuffledDistractors = [...distractorPool].sort(() => Math.random() - 0.5);
  
  const selectedRevenue = shuffledRevenue.slice(0, numRevenue).map((r) => ({
    name: r.name,
    amount: randInt(r.base - Math.min(r.range, r.base - 100), r.base + r.range),
    type: 'Revenue' as const,
  }));
  
  const selectedExpenses = shuffledExpense.slice(0, numExpense).map((e) => ({
    name: e.name,
    amount: randInt(e.base - Math.min(e.range, e.base - 50), e.base + e.range),
    type: 'Expense' as const,
  }));
  
  const selectedDistractors = shuffledDistractors.slice(0, numDistractors).map((d) => ({
    name: d.name,
    amount: randInt(d.base - Math.min(d.range, d.base - 100), d.base + d.range),
    type: d.type,
  }));
  
  const allAccounts = [...selectedRevenue, ...selectedExpenses, ...selectedDistractors]
    .sort(() => Math.random() - 0.5);
  
  const correctRevenue = selectedRevenue.reduce((sum, a) => sum + a.amount, 0);
  const correctExpenses = selectedExpenses.reduce((sum, a) => sum + a.amount, 0);
  const correctNetIncome = correctRevenue - correctExpenses;
  
  return {
    companyName,
    accounts: allAccounts,
    correctRevenue,
    correctExpenses,
    correctNetIncome,
  };
}

const misconceptionFeedback: Record<string, string> = {
  revenueTooHigh: "Your Total Revenue is too high. Check that you only included accounts with 'Revenue' or 'Income' in the name. Asset and equity accounts do not belong here.",
  revenueTooLow: "Your Total Revenue is too low. Did you miss a revenue account? Scan the trial balance again for all accounts that represent money earned.",
  expenseTooHigh: "Your Total Expenses is too high. Check that you did not include Owner's Draw, asset purchases, or liability accounts. Only accounts with 'Expense' in the name belong here.",
  expenseTooLow: "Your Total Expenses is too low. You may have missed an expense account. Look for all accounts that represent costs of running the business.",
  netIncomeWrong: "Your Net Income does not match. Double-check: Net Income = Total Revenue minus Total Expenses. If your subtotals are correct, the subtraction should be right.",
  allCorrect: "Correct! You identified all revenue and expense accounts, calculated the totals accurately, and found the right Net Income.",
};

function checkAnswer(
  userRevenue: number,
  userExpenses: number,
  userNetIncome: number,
  correct: { revenue: number; expenses: number; netIncome: number }
): { correct: boolean; feedback: string } {
  const revenueDiff = Math.abs(userRevenue - correct.revenue);
  const expenseDiff = Math.abs(userExpenses - correct.expenses);
  const netIncomeDiff = Math.abs(userNetIncome - correct.netIncome);
  
  const tolerance = 1;
  
  if (revenueDiff <= tolerance && expenseDiff <= tolerance && netIncomeDiff <= tolerance) {
    return { correct: true, feedback: misconceptionFeedback.allCorrect };
  }
  
  let feedback = "";
  if (revenueDiff > tolerance) {
    feedback += userRevenue > correct.revenue ? misconceptionFeedback.revenueTooHigh : misconceptionFeedback.revenueTooLow;
  }
  if (expenseDiff > tolerance) {
    if (feedback) feedback += " ";
    feedback += userExpenses > correct.expenses ? misconceptionFeedback.expenseTooHigh : misconceptionFeedback.expenseTooLow;
  }
  if (netIncomeDiff > tolerance && revenueDiff <= tolerance && expenseDiff <= tolerance) {
    if (feedback) feedback += " ";
    feedback += misconceptionFeedback.netIncomeWrong;
  }
  
  return { correct: false, feedback: feedback || misconceptionFeedback.netIncomeWrong };
}

export function IncomeStatementPractice() {
  const [round, setRound] = useState<PracticeRound>(generateRound);
  const [userRevenue, setUserRevenue] = useState("");
  const [userExpenses, setUserExpenses] = useState("");
  const [userNetIncome, setUserNetIncome] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ correct: boolean; feedback: string } | null>(null);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [showWorkedExample, setShowWorkedExample] = useState(false);
  
  const masteryTarget = 3;
  
  const handleSubmit = useCallback(() => {
    const rev = parseFloat(userRevenue) || 0;
    const exp = parseFloat(userExpenses) || 0;
    const ni = parseFloat(userNetIncome) || 0;
    
    const checkResult = checkAnswer(rev, exp, ni, {
      revenue: round.correctRevenue,
      expenses: round.correctExpenses,
      netIncome: round.correctNetIncome,
    });
    
    setResult(checkResult);
    setSubmitted(true);
    setTotalAttempts((prev) => prev + 1);
    
    if (checkResult.correct) {
      setConsecutiveCorrect((prev) => prev + 1);
    } else {
      setConsecutiveCorrect(0);
    }
  }, [userRevenue, userExpenses, userNetIncome, round]);
  
  const handleNewRound = useCallback(() => {
    setRound(generateRound());
    setUserRevenue("");
    setUserExpenses("");
    setUserNetIncome("");
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
            <span>Income Statement Practice</span>
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
                You got {masteryTarget} correct in a row. You can build an Income Statement from a trial balance reliably.
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
            <p className="text-gray-600 text-xs mt-2">
              Build the Income Statement: identify revenue accounts, identify expense accounts, calculate Net Income.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Revenue
              </label>
              <input
                type="number"
                value={userRevenue}
                onChange={(e) => setUserRevenue(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 6800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Expenses
              </label>
              <input
                type="number"
                value={userExpenses}
                onChange={(e) => setUserExpenses(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 3950"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Net Income
              </label>
              <input
                type="number"
                value={userNetIncome}
                onChange={(e) => setUserNetIncome(e.target.value)}
                disabled={submitted}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-100"
                placeholder="e.g. 2850"
              />
            </div>
          </div>
          
          {!submitted ? (
            <Button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!userRevenue || !userExpenses || !userNetIncome}
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
                          <p>Correct answers: Revenue = ${round.correctRevenue.toLocaleString()}, Expenses = ${round.correctExpenses.toLocaleString()}, Net Income = ${round.correctNetIncome.toLocaleString()}</p>
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
                    <p><strong>Revenue accounts:</strong> {round.accounts.filter(a => a.type === 'Revenue').map(a => `${a.name} ($${a.amount.toLocaleString()})`).join(', ')}</p>
                    <p><strong>Total Revenue:</strong> ${round.correctRevenue.toLocaleString()}</p>
                    <p><strong>Expense accounts:</strong> {round.accounts.filter(a => a.type === 'Expense').map(a => `${a.name} ($${a.amount.toLocaleString()})`).join(', ')}</p>
                    <p><strong>Total Expenses:</strong> ${round.correctExpenses.toLocaleString()}</p>
                    <p><strong>Net Income:</strong> ${round.correctRevenue.toLocaleString()} − ${round.correctExpenses.toLocaleString()} = ${round.correctNetIncome.toLocaleString()}</p>
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
            Each round uses different numbers but the same procedure: identify revenue accounts, identify expense accounts, subtract.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
