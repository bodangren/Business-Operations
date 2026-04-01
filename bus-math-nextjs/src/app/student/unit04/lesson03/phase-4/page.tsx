"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"
import { useState } from "react"

const currentPhase = lesson03Phases[3]

const problems = [
  {
    id: 1,
    question: "Mean = $15.00, Std Dev = $5.00, Transaction = $25.00",
    answer: "z = 2.0, borderline (not quite outlier)",
    options: ["z = 2.0 - Outlier", "z = 2.0 - Borderline", "z = 1.67 - Normal", "z = 0.67 - Normal"]
  },
  {
    id: 2,
    question: "Mean = $12.50, Std Dev = $3.25, Transaction = $3.00",
    answer: "z = -2.92 - Outlier (low)",
    options: ["z = -2.92 - Outlier", "z = -0.38 - Normal", "z = -1.5 - Normal", "z = -2.92 - Borderline"]
  },
  {
    id: 3,
    question: "Mean = $20.00, Std Dev = $8.00, Transaction = $44.00",
    answer: "z = 3.0 - Outlier",
    options: ["z = 2.2 - Outlier", "z = 3.0 - Outlier", "z = 0.55 - Normal", "z = 1.5 - Normal"]
  },
  {
    id: 4,
    question: "Mean = $10.00, Std Dev = $2.50, Transaction = $10.00",
    answer: "z = 0 - Normal",
    options: ["z = 4.0 - Outlier", "z = 0 - Normal", "z = -4.0 - Outlier", "z = 2.5 - Borderline"]
  },
  {
    id: 5,
    question: "Mean = $18.00, Std Dev = $4.50, Transaction = $9.00",
    answer: "z = -2.0 - Borderline",
    options: ["z = -2.0 - Borderline", "z = -0.2 - Normal", "z = -4.0 - Outlier", "z = 1.0 - Normal"]
  }
]

function ProblemCard({ problem, onAnswer, selectedAnswer }: { problem: typeof problems[0], onAnswer: (id: number, answer: string) => void, selectedAnswer: string | null }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <p className="font-medium text-gray-900 mb-3">{problem.question}</p>
      <div className="space-y-2">
        {problem.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(problem.id, option)}
            className={`w-full text-left p-2 rounded text-sm ${
              selectedAnswer === option
                ? 'bg-purple-100 border-purple-500'
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            } border`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Phase4Page() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (id: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [id]: answer }))
  }

  const score = problems.filter(p => 
    answers[p.id]?.includes(p.answer.split(' - ')[0])
  ).length

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="prose prose-lg max-w-none">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl">Outlier Detection Mastery Practice</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800">
              <p className="text-lg leading-relaxed">
                Calculate z-scores and identify outliers. Get 4 correct to show mastery.
              </p>
              <div className="bg-purple-100 p-3 rounded mt-3 text-sm">
                <strong>Mastery target:</strong> 4 correct out of 5 | 
                <strong> Current:</strong> {score} correct
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {problems.map((problem) => (
            <ProblemCard 
              key={problem.id} 
              problem={problem} 
              onAnswer={handleAnswer}
              selectedAnswer={answers[problem.id] || null}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setShowResults(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Check Answers
          </button>
          <button
            onClick={() => { setAnswers({}); setShowResults(false); }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Try Again
          </button>
        </div>

        {showResults && (
          <Card className={`border ${score >= 4 ? 'border-green-300 bg-green-50' : 'border-yellow-300 bg-yellow-50'}`}>
            <CardContent className="py-4">
              <p className={`font-medium ${score >= 4 ? 'text-green-800' : 'text-yellow-800'}`}>
                {score >= 4 
                  ? "🎉 Mastery achieved! You can correctly identify outliers using z-scores."
                  : "Keep practicing. Review z-score calculations and the ±2 rule."}
              </p>
            </CardContent>
          </Card>
        )}

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 text-xl">Remember the Rules</CardTitle>
          </CardHeader>
          <CardContent className="text-amber-800">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900">Z-Score Formula</h4>
                <p className="text-sm">z = (x - μ) / σ</p>
              </div>
              <div className="bg-white p-3 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900">The ±2 Rule</h4>
                <p className="text-sm">|z| greater than 2 = outlier</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit04Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  )
}