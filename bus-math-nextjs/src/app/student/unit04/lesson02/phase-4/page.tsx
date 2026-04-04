'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, RefreshCw, CheckCircle, XCircle } from "lucide-react";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";
import { useState } from "react";

export default function Phase4Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 4)!;

  type Problem = {
    id: number;
    data: number[];
    question: string;
    answer: number;
    explanation: string;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [streak, setStreak] = useState(0);
  const [mastery, setMastery] = useState(0);

  const problems: Problem[] = [
    {
      id: 1,
      data: [120, 135, 142, 128, 115],
      question: "Calculate the mean of these weekend sales totals.",
      answer: 128,
      explanation: "Sum = 640, Count = 5, Mean = 640 ÷ 5 = 128"
    },
    {
      id: 2,
      data: [85, 92, 78, 95, 88, 72],
      question: "Find the median of these 6 daily sales amounts.",
      answer: 86,
      explanation: "Sorted: 72, 78, 85, 88, 92, 95. Median = (85+88)÷2 = 86.5. Rounded to nearest dollar: 87 or use exact 86.5"
    },
    {
      id: 3,
      data: [250, 275, 300, 250, 225, 275],
      question: "What is the median of these weekly totals?",
      answer: 262.5,
      explanation: "Sorted: 225, 250, 250, 275, 275, 300. Middle two are 250 and 275. Median = (250+275)÷2 = 262.5"
    },
    {
      id: 4,
      data: [45, 52, 48, 51, 49, 55, 53],
      question: "Calculate the mean of these 7 daily customer counts.",
      answer: 50.43,
      explanation: "Sum = 353, Count = 7, Mean = 353 ÷ 7 = 50.43 (rounded to 2 decimal places)"
    },
    {
      id: 5,
      data: [1800, 1950, 2100, 1850, 4200],
      question: "If you exclude the outlier, what is the mean of the remaining values?",
      answer: 1925,
      explanation: "Without 4200: Sum = 1800+1950+2100+1850 = 7700. Mean = 7700 ÷ 4 = 1925"
    },
    {
      id: 6,
      data: [320, 340, 310, 330, 350],
      question: "What is the range of these daily revenues?",
      answer: 40,
      explanation: "Range = Maximum - Minimum = 350 - 310 = 40"
    }
  ];

  const currentProblem = problems[currentIndex];

  const handleSubmit = () => {
    const userNum = parseFloat(userAnswer);
    const isCorrect = Math.abs(userNum - currentProblem.answer) < 0.1;
    setCorrect(isCorrect);
    setSubmitted(true);
    
    if (isCorrect) {
      setStreak(streak + 1);
      if (streak + 1 >= 3) {
        setMastery(mastery + 1);
      }
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setUserAnswer("");
    setSubmitted(false);
    setCorrect(false);
  };

  const handleNewNumbers = () => {
    setCurrentIndex(Math.floor(Math.random() * problems.length));
    setUserAnswer("");
    setSubmitted(false);
    setCorrect(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Phase 4 Introduction */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Independent Practice: Statistics Mastery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-4">
                Practice calculating mean, median, and range with varied data. Get 3 correct in a row to demonstrate mastery.
              </p>
              
              <div className="flex gap-4 mb-4">
                <div className="bg-white px-4 py-2 rounded-lg border border-purple-200">
                  <span className="text-purple-600 text-sm">Streak: </span>
                  <span className="font-bold text-purple-800">{streak}</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-purple-200">
                  <span className="text-purple-600 text-sm">Mastery: </span>
                  <span className="font-bold text-purple-800">{mastery}/3</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problem Card */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Problem {currentIndex + 1} of {problems.length}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
                <p className="font-mono text-lg text-blue-900 mb-4">
                  {currentProblem.data.join(", ")}
                </p>
                <p className="text-blue-800 font-medium">
                  {currentProblem.question}
                </p>
              </div>

              {!submitted ? (
                <div className="space-y-4">
                  <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="w-full p-3 border border-blue-200 rounded-lg text-lg"
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={!userAnswer}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
                  >
                    Check Answer
                  </button>
                </div>
              ) : (
                <div className={`p-4 rounded-lg border ${correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className={`font-medium ${correct ? 'text-green-800' : 'text-red-800'}`}>
                      {correct ? "Correct!" : "Not quite"}
                    </span>
                  </div>
                  <p className="text-sm mb-2">
                    {correct ? currentProblem.explanation : `The correct answer is ${currentProblem.answer}. ${currentProblem.explanation}`}
                  </p>
                  <button
                    onClick={handleNext}
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
                  >
                    Next Problem →
                  </button>
                </div>
              )}

              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleNewNumbers}
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span className="text-sm">New Numbers</span>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Mastery Check */}
          {mastery >= 3 && (
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Mastery Achieved!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">
                  You've demonstrated statistical calculation mastery. You can calculate mean, median, and range 
                  accurately and consistently. Ready to move on!
                </p>
              </CardContent>
            </Card>
          )}

          {/* Reference */}
          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-700 text-sm">Quick Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-600 space-y-1">
                <p><strong>Mean:</strong> Sum all values ÷ Count</p>
                <p><strong>Median:</strong> Sort data, find middle (or average of two middles)</p>
                <p><strong>Range:</strong> Maximum - Minimum</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}