"use client";

import { useState } from "react";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, CheckCircle, XCircle, RefreshCw, ArrowRight, BarChart3 } from "lucide-react";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[3];

interface ScenarioProblem {
  id: number;
  fixedCosts: number;
  variableCost: number;
  currentPrice: number;
  currentVolume: number;
  targetProfit: number;
  premiumPrice: number;
  premiumVolume: number;
  volumePrice: number;
  volumeVolume: number;
  answer: "premium" | "volume" | "neither";
  explanation: string;
}

const generateProblem = (seed: number): ScenarioProblem => {
  const targetProfit = 3000;
  const variants = [
    { fixedCosts: 5000, variableCost: 200, currentPrice: 500, currentVolume: 15 },
    { fixedCosts: 8000, variableCost: 150, currentPrice: 400, currentVolume: 30 },
    { fixedCosts: 10000, variableCost: 300, currentPrice: 800, currentVolume: 20 },
    { fixedCosts: 6000, variableCost: 250, currentPrice: 600, currentVolume: 18 },
  ];
  const v = variants[seed % variants.length];
  
  const cm = v.currentPrice - v.variableCost;
  const currentProfit = (cm * v.currentVolume) - v.fixedCosts;
  const targetCM = v.fixedCosts + targetProfit;
  
  const premiumVolume = v.currentVolume;
  const premiumPrice = Math.ceil(targetCM / premiumVolume + v.variableCost);
  
  const volumePrice = v.currentPrice;
  const volumeVolume = Math.ceil(targetCM / cm);
  
  const answers: ("premium" | "volume" | "neither")[] = ["premium", "volume"];
  const answer = answers[seed % 2];
  
  return {
    id: seed,
    ...v,
    targetProfit,
    premiumPrice,
    premiumVolume,
    volumePrice,
    volumeVolume: volumeVolume + (seed % 3),
    answer,
    explanation: answer === "premium" 
      ? `Premium path: $${premiumPrice} × ${premiumVolume} projects hits target with lower volume risk.`
      : `Volume path: ${volumeVolume + (seed % 3)} projects at $${volumePrice} is more achievable.`
  };
};

export default function Phase4Page() {
  const [problemNum, setProblemNum] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  
  const problem = generateProblem(problemNum);
  
  const handleAnswer = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
    setTotalAttempts(prev => prev + 1);
    if (answer === problem.answer) {
      setCorrectCount(prev => prev + 1);
    }
  };
  
  const nextProblem = () => {
    setProblemNum(prev => prev + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  };
  
  const masteryPercent = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">

              {/* Instructions */}
              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-900 flex items-center gap-2 text-xl">
                    <BarChart3 className="w-5 h-5" />
                    Scenario Comparison Practice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-cyan-900">
                  <p>
                    For each problem, determine which pricing path (Premium Pricing or Volume) is more 
                    <strong>realistic</strong> given the business constraints.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Premium path:</strong> Keep current volume, raise price to hit target</li>
                    <li><strong>Volume path:</strong> Keep current price, increase volume to hit target</li>
                    <li><strong>Neither:</strong> Both require unrealistic changes</li>
                  </ul>
                  <p className="font-semibold">
                    Consider: Which path requires fewer fundamental changes to the business model?
                  </p>
                </CardContent>
              </Card>
              
              {/* Practice Problem */}
              <Card className="border-orange-200 bg-white shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                    Problem {problemNum + 1}
                  </CardTitle>
                  <p className="text-slate-600">
                    Target Profit: ${problem.targetProfit.toLocaleString()}
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Scenario Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-900">
                          <th className="p-2 border border-slate-200 text-left">Metric</th>
                          <th className="p-2 border border-slate-200">Current</th>
                          <th className="p-2 border border-slate-200 bg-green-50 text-green-900">Premium</th>
                          <th className="p-2 border border-slate-200 bg-blue-50 text-blue-900">Volume</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr><td className="p-2 border border-slate-200">Fixed Costs</td><td className="p-2 border border-slate-200 text-right">${problem.fixedCosts.toLocaleString()}</td><td className="p-2 border border-slate-200 text-right">${problem.fixedCosts.toLocaleString()}</td><td className="p-2 border border-slate-200 text-right">${problem.fixedCosts.toLocaleString()}</td></tr>
                        <tr><td className="p-2 border border-slate-200">Variable Cost</td><td className="p-2 border border-slate-200 text-right">${problem.variableCost}</td><td className="p-2 border border-slate-200 text-right">${problem.variableCost}</td><td className="p-2 border border-slate-200 text-right">${problem.variableCost}</td></tr>
                        <tr><td className="p-2 border border-slate-200">Price</td><td className="p-2 border border-slate-200 text-right">${problem.currentPrice}</td><td className="p-2 border border-slate-200 text-right font-semibold text-green-700">${problem.premiumPrice}</td><td className="p-2 border border-slate-200 text-right">${problem.volumePrice}</td></tr>
                        <tr><td className="p-2 border border-slate-200">Volume</td><td className="p-2 border border-slate-200 text-right">{problem.currentVolume} units</td><td className="p-2 border border-slate-200 text-right">{problem.premiumVolume} units</td><td className="p-2 border border-slate-200 text-right font-semibold text-blue-700">{problem.volumeVolume} units</td></tr>
                        <tr className="font-bold bg-slate-50"><td className="p-2 border border-slate-200">Profit</td><td className="p-2 border border-slate-200 text-right">{(problem.currentPrice - problem.variableCost) * problem.currentVolume - problem.fixedCosts >= 0 ? "✓" : "✗"}</td><td className="p-2 border border-slate-200 text-right">✓ Target</td><td className="p-2 border border-slate-200 text-right">✓ Target</td></tr>
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Answer Options */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handleAnswer("premium")}
                      disabled={showResult}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        showResult
                          ? problem.answer === "premium"
                            ? "border-green-500 bg-green-50"
                            : selectedAnswer === "premium"
                              ? "border-red-500 bg-red-50"
                              : "border-slate-200"
                          : "border-slate-200 hover:border-orange-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {showResult && (
                          problem.answer === "premium" ? <CheckCircle className="w-5 h-5 text-green-600" /> : (selectedAnswer === "premium" ? <XCircle className="w-5 h-5 text-red-600" /> : null)
                        )}
                        <div>
                          <p className="font-semibold">Premium Path</p>
                          <p className="text-sm text-slate-600">Raise price to ${problem.premiumPrice}, keep {problem.premiumVolume} volume</p>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => handleAnswer("volume")}
                      disabled={showResult}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        showResult
                          ? problem.answer === "volume"
                            ? "border-green-500 bg-green-50"
                            : selectedAnswer === "volume"
                              ? "border-red-500 bg-red-50"
                              : "border-slate-200"
                          : "border-slate-200 hover:border-orange-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {showResult && (
                          problem.answer === "volume" ? <CheckCircle className="w-5 h-5 text-green-600" /> : (selectedAnswer === "volume" ? <XCircle className="w-5 h-5 text-red-600" /> : null)
                        )}
                        <div>
                          <p className="font-semibold">Volume Path</p>
                          <p className="text-sm text-slate-600">Keep ${problem.volumePrice} price, increase to {problem.volumeVolume} volume</p>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => handleAnswer("neither")}
                      disabled={showResult}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        showResult
                          ? problem.answer === "neither"
                            ? "border-green-500 bg-green-50"
                            : selectedAnswer === "neither"
                              ? "border-red-500 bg-red-50"
                              : "border-slate-200"
                          : "border-slate-200 hover:border-orange-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {showResult && (
                          problem.answer === "neither" ? <CheckCircle className="w-5 h-5 text-green-600" /> : (selectedAnswer === "neither" ? <XCircle className="w-5 h-5 text-red-600" /> : null)
                        )}
                        <div>
                          <p className="font-semibold">Neither</p>
                          <p className="text-sm text-slate-600">Both require unrealistic changes</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  
                  {/* Explanation */}
                  {showResult && (
                    <div className={`mt-4 p-4 rounded-lg ${selectedAnswer === problem.answer ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}>
                      <p className="font-semibold mb-1">{selectedAnswer === problem.answer ? "✓ Correct!" : "✗ Not quite"}</p>
                      <p className="text-sm">{problem.explanation}</p>
                    </div>
                  )}
                  
                  {/* Next Button */}
                  {showResult && (
                    <button
                      onClick={nextProblem}
                      className="mt-4 w-full py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 flex items-center justify-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Next Problem
                    </button>
                  )}
                </CardContent>
              </Card>

              {/* Mastery Progress */}
              <Card className="border-violet-200 bg-violet-50">
                <CardHeader>
                  <CardTitle className="text-violet-800 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Mastery Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-white rounded-full h-4 overflow-hidden border border-violet-200">
                      <div 
                        className="h-full bg-violet-600 transition-all duration-300"
                        style={{ width: `${masteryPercent}%` }}
                      />
                    </div>
                    <span className="font-semibold text-violet-800">{masteryPercent}% ({correctCount}/{totalAttempts})</span>
                  </div>
                  <p className="text-xs text-violet-700 mt-2">
                    {masteryPercent >= 80 ? "✓ Mastery achieved! Ready for Excel automation." : "Keep practicing to build scenario intuition."}
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}
