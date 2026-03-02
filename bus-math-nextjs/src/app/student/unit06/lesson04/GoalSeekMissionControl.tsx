"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Target, Zap, TrendingUp, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FIXED_COSTS = 8100;
const VARIABLE_COST = 880;

// Part 1: Matching Terminology
const TERMS = [
  { id: "set", label: "Set Cell", description: "The formula cell we want to reach a target (e.g., Total Profit)" },
  { id: "to", label: "To Value", description: "The specific target number we want to achieve (e.g., $10,000)" },
  { id: "by", label: "By Changing Cell", description: "The input cell Excel adjusts to reach the goal (e.g., Selling Price)" },
];

// Part 2: Scenarios
const SCENARIOS = [
  {
    id: "target-profit-1",
    task: "Sarah wants $10,000 monthly profit at her current $1,350 price.",
    question: "How many projects does she need to complete?",
    formula: "(Fixed Costs + Target Profit) ÷ (Price - Variable Cost)",
    calculation: "($8,100 + $10,000) ÷ ($1,350 - $880) = $18,100 ÷ $470",
    answer: 39,
    unit: "projects",
    hint: "Round UP to the next whole project."
  },
  {
    id: "target-profit-2",
    task: "Sarah can only deliver 24 projects max. She still wants $10,000 profit.",
    question: "What price per project must she charge?",
    formula: "Variable Cost + (Fixed Costs + Target Profit) ÷ Units",
    calculation: "$880 + ($8,100 + $10,000) ÷ 24 = $880 + ($18,100 ÷ 24)",
    answer: 1635,
    unit: "$",
    hint: "Round to the nearest dollar."
  }
];

export default function GoalSeekMissionControl() {
  // Part 1 State
  const [termMatches, setTermMatches] = useState<Record<string, string>>({
    set: "", to: "", by: ""
  });
  const [p1Checked, setP1Checked] = useState(false);

  // Part 2 State
  const [scenarioInputs, setScenarioInputs] = useState<Record<string, string>>({
    "target-profit-1": "",
    "target-profit-2": ""
  });
  const [p2Checked, setP2Checked] = useState(false);
  const [p2Revealed, setP2Revealed] = useState(false);

  // Logic helpers
  const tol = (val: string, target: number) => {
    const n = Number(val.replace(/[$,]/g, "").trim());
    return Math.abs(n - target) < 1;
  };

  const p1AllCorrect = termMatches.set === "Total Profit" && termMatches.to === "$10,000" && termMatches.by === "Price";
  const p2AllCorrect = SCENARIOS.every(s => tol(scenarioInputs[s.id], s.answer));

  return (
    <div className="space-y-8">
      {/* ── Part 1: Goal Seek Logic Match ── */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Part 1: The Goal Seek Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-blue-800 text-sm italic">
            "Sarah, before we run the tool, we have to tell Excel exactly what we're looking for."
          </p>
          
          <div className="grid gap-4 md:grid-cols-3">
            {TERMS.map(term => (
              <div key={term.id} className="bg-white p-4 rounded border border-blue-200 space-y-2">
                <Badge variant="outline" className="mb-1 text-blue-700 border-blue-200">{term.label}</Badge>
                <p className="text-xs text-slate-600">{term.description}</p>
                <Input 
                  placeholder="Select target..."
                  className="text-xs"
                  value={termMatches[term.id]}
                  onChange={e => {
                    setTermMatches(prev => ({ ...prev, [term.id]: e.target.value }));
                    setP1Checked(false);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-xs bg-white/50 p-2 rounded border border-blue-100">
            <p className="font-semibold text-blue-900 mb-1">Available Options (Drag/Type):</p>
            <div className="flex gap-2 flex-wrap">
              {["Total Profit", "$10,000", "Price"].map(opt => (
                <Badge key={opt} variant="secondary" className="cursor-pointer">{opt}</Badge>
              ))}
            </div>
          </div>

          <Button 
            onClick={() => setP1Checked(true)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Verify Parameters
          </Button>

          {p1Checked && p1AllCorrect && (
            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
              <p className="text-green-800 text-sm">
                Correct! In Excel, you'd set the <strong>Profit</strong> cell <strong>To $10,000</strong> by changing the <strong>Price</strong>. 
                Part 2 is now unlocked.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ── Part 2: Reverse-Solving for Sarah ── */}
      <Card className={`border-purple-200 ${p1AllCorrect ? "bg-purple-50" : "bg-slate-50 opacity-50 grayscale"}`}>
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Part 2: Target-Profit Reverse Solve
          </CardTitle>
        </CardHeader>
        <CardContent className={`space-y-6 ${!p1AllCorrect && "pointer-events-none"}`}>
          <div className="grid gap-6 md:grid-cols-2">
            {SCENARIOS.map(scenario => (
              <div key={scenario.id} className="bg-white p-5 rounded-lg border border-purple-200 shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-purple-900 leading-tight">{scenario.task}</h3>
                  <Badge variant="outline" className="text-purple-600">{scenario.unit === "$" ? "Solve for Price" : "Solve for Volume"}</Badge>
                </div>
                
                <p className="text-sm text-slate-700">{scenario.question}</p>
                
                <div className="bg-slate-50 p-3 rounded text-[10px] font-mono text-slate-500">
                  <p className="font-bold mb-1">FORMULA REFERENCE:</p>
                  <p>{scenario.formula}</p>
                  <p className="mt-1 text-purple-600">{scenario.calculation}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    {scenario.unit === "$" && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>}
                    <Input 
                      className={`pl-${scenario.unit === "$" ? "7" : "3"} text-center font-bold text-lg`}
                      placeholder="?"
                      value={scenarioInputs[scenario.id]}
                      onChange={e => {
                        setScenarioInputs(prev => ({ ...prev, [scenario.id]: e.target.value }));
                        setP2Checked(false);
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-600">{scenario.unit === "$" ? "" : "projects"}</span>
                  
                  {p2Checked && (
                    tol(scenarioInputs[scenario.id], scenario.answer) 
                      ? <CheckCircle2 className="text-green-600 w-6 h-6 shrink-0" />
                      : <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                  )}
                </div>
                
                {p2Revealed && !tol(scenarioInputs[scenario.id], scenario.answer) && (
                  <p className="text-center text-xs text-green-700 font-bold">
                    Correct: {scenario.unit === "$" ? "$" : ""}{scenario.answer} {scenario.unit === "$" ? "" : "projects"}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={() => setP2Checked(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Check Solutions
            </Button>
            {p2Checked && !p2AllCorrect && (
              <Button variant="outline" onClick={() => setP2Revealed(true)}>
                Reveal Answers
              </Button>
            )}
          </div>

          {p2Checked && p2AllCorrect && (
            <div className="bg-green-50 border border-green-200 rounded p-4 space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-green-600 w-5 h-5" />
                <h4 className="font-bold text-green-900">Analysis Complete!</h4>
              </div>
              <p className="text-sm text-green-800 leading-relaxed">
                Great job. You've just performed the mathematical logic that Goal Seek automates. 
                Sarah can now see that hitting $10,000 profit requires either a <strong>huge volume jump (39 projects)</strong> 
                or a <strong>significant price increase ($1,635)</strong>. 
              </p>
              <p className="text-sm text-green-800">
                In the next phase, you'll use Goal Seek in Excel to test even more scenarios instantly.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ── Why it matters card ── */}
      <Card className="border-slate-200 bg-slate-50 border-dashed">
        <CardContent className="p-4 flex items-start gap-4">
          <div className="bg-white p-2 rounded-full shadow-sm border border-slate-200">
            <DollarSign className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-sm">Professional Context</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              When investors like Michael Chen ask "What if?", they aren't just checking your math. 
              They are checking if you know which "levers" to pull. Goal Seek allows you to explore 
              these levers (Price vs. Volume vs. Cost) in seconds, making you look like a seasoned 
              pro during high-stakes meetings.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
