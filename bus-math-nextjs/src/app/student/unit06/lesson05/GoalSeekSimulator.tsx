"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Target, Zap, AlertTriangle, ArrowRight } from "lucide-react";

const FIXED_COSTS = 12000;
const VARIABLE_COST = 880;
const TARGET_PROFIT = 15000;

export default function GoalSeekSimulator() {
  const [inputs, setInputs] = useState({
    setCell: "",
    toValue: "",
    byChangingCell: ""
  });
  const [feedback, setFeedback] = useState<{type: "success" | "error", message: string} | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const correctPrice = (FIXED_COSTS + TARGET_PROFIT) / 25 + VARIABLE_COST;

  const handleCheck = () => {
    const setCellVal = inputs.setCell.trim().toLowerCase();
    const toValueVal = inputs.toValue.trim().replace(/[$,]/g, "");
    const byChangingCellVal = inputs.byChangingCell.trim().toLowerCase();

    if (!setCellVal || !toValueVal || !byChangingCellVal) {
      setFeedback({ type: "error", message: "Please fill in all three fields." });
      return;
    }

    if (setCellVal !== "profit" && setCellVal !== "totalprofit" && setCellVal !== "b2") {
      setFeedback({ type: "error", message: 'Set Cell should be your Profit formula cell (e.g., "Profit" or "B2").' });
      return;
    }

    if (toValueVal !== "15000" && toValueVal !== "15000000") {
      setFeedback({ type: "error", message: "To Value should be 15000 (your target profit)." });
      return;
    }

    if (byChangingCellVal !== "price" && byChangingCellVal !== "b1") {
      setFeedback({ type: "error", message: 'By Changing Cell should be your Price input cell (e.g., "Price" or "B1").' });
      return;
    }

    setFeedback({ type: "success", message: "Perfect! You've set up Goal Seek to find the price needed for $15,000 profit." });
  };

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
            <Target className="h-5 w-5" />
            Goal Seek Simulator: Sarah's Investor Problem
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-blue-800 space-y-4">
          <p className="italic">
            "The investor wants to know: what price gives us $15,000 profit if we serve 25 projects?"
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-slate-900 mb-3">The Setup</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-slate-100 p-2 rounded">
                <span className="text-slate-500">Fixed Costs:</span> $12,000
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <span className="text-slate-500">Variable Cost:</span> $880/project
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <span className="text-slate-500">Current Price:</span> $1,350
              </div>
              <div className="bg-slate-100 p-2 rounded">
                <span className="text-slate-500">Volume:</span> 25 projects
              </div>
            </div>
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
              <span className="font-bold text-yellow-800">Target Profit: </span>
              <span className="font-mono">$15,000</span>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            Fill in the Goal Seek dialog box fields below to tell Excel how to solve this problem.
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-slate-800 text-lg">
            Goal Seek Dialog Box
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-32 text-sm font-bold text-slate-700">Set Cell:</div>
              <Input 
                className="flex-1 font-mono text-sm"
                placeholder='e.g., "Profit" or "B2"'
                value={inputs.setCell}
                onChange={e => setInputs(prev => ({ ...prev, setCell: e.target.value }))}
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-sm font-bold text-slate-700">To Value:</div>
              <Input 
                className="flex-1 font-mono text-sm"
                placeholder='e.g., "15000"'
                value={inputs.toValue}
                onChange={e => setInputs(prev => ({ ...prev, toValue: e.target.value }))}
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 text-sm font-bold text-slate-700">By Changing Cell:</div>
              <Input 
                className="flex-1 font-mono text-sm"
                placeholder='e.g., "Price" or "B1"'
                value={inputs.byChangingCell}
                onChange={e => setInputs(prev => ({ ...prev, byChangingCell: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleCheck}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Check Setup
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowSolution(true)}
              className="border-slate-200 text-slate-600"
            >
              Show Answer
            </Button>
          </div>

          {feedback && (
            <div className={`p-4 rounded-lg border flex items-start gap-2 ${
              feedback.type === "success" 
                ? "bg-green-50 border-green-200 text-green-800" 
                : "bg-red-50 border-red-200 text-red-800"
            }`}>
              {feedback.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              )}
              <p className="text-sm">{feedback.message}</p>
            </div>
          )}

          {showSolution && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-2 text-green-800 font-bold">
                <Zap className="w-5 h-5" />
                Correct Setup!
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                <div className="bg-white p-2 rounded border border-green-200">
                  <div className="text-xs text-green-600">Set Cell</div>
                  <div className="font-mono font-bold">Profit</div>
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  <div className="text-xs text-green-600">To Value</div>
                  <div className="font-mono font-bold">15000</div>
                </div>
                <div className="bg-white p-2 rounded border border-green-200">
                  <div className="text-xs text-green-600">By Changing</div>
                  <div className="font-mono font-bold">Price</div>
                </div>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                Excel will calculate that Sarah needs a price of <strong>${correctPrice.toFixed(2)}</strong> 
                to hit $15,000 profit at 25 projects. Rounding to a natural price point, 
                she could charge <strong>$1,388</strong> and still exceed her target.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-900 text-lg flex items-center gap-2">
            <ArrowRight className="h-5 w-5" />
            What Happens When You Click OK
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-purple-800 space-y-2">
          <ol className="list-decimal list-inside space-y-1">
            <li>Excel reads your Profit formula</li>
            <li>It adjusts the Price cell up or down to get closer to $15,000</li>
            <li>It repeats this in tiny steps until it hits exactly (or close to) your target</li>
            <li>The Price cell updates to show the answer</li>
          </ol>
          <p className="text-xs text-purple-700 mt-3">
            This takes Excel less than a second. Try doing that by hand for 50 different scenarios!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
