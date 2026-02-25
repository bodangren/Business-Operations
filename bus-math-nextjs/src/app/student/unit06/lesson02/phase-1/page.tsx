'use client'

import { useState } from "react";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, AlertTriangle, DollarSign, Lightbulb, Swords } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[0]; // Phase 1: Hook

// Only 2 questions — just enough to confirm the scenario was read.
// The "why does markup/margin matter" questions live in Phase 2 where they belong.
const comprehensionQuestions = [
  {
    id: "q1",
    question: "What happened to Sarah's profit margin even though her revenue grew?",
    answers: [
      "Her profit margin actually shrank — she was keeping less of each dollar earned",
      "Her profit margin improved because she had more revenue",
      "Her profit stayed exactly the same as the previous quarter",
      "She started making a loss on every single project",
    ],
    explanation:
      "Revenue grew from $12k to $15.8k — but profit dropped from $8k (67%) to $4.6k (29%). More money in, less money kept. That's the problem a bad pricing strategy creates.",
  },
  {
    id: "q2",
    question: "What was the root cause of Sarah's shrinking profit?",
    answers: [
      "She was pricing to cover costs — not to reflect the value she delivered",
      "She hired too many full-time employees too quickly",
      "Her clients refused to pay fair rates for her services",
      "She chose projects that were too small to be profitable",
    ],
    explanation:
      "Sarah's cost-plus pricing worked fine when she was solo, but once her expenses grew with the business, her simple cost-covering approach couldn't keep up. The lesson: price for value, not just cost recovery.",
  },
];

// ── Prediction component (client-side reveal) ─────────────────────────────────

type Prediction = "up" | "same" | "down" | null;

function PredictionCard() {
  const [prediction, setPrediction] = useState<Prediction>(null);
  const [revealed, setRevealed] = useState(false);

  const options: { id: Prediction; label: string; emoji: string }[] = [
    { id: "up", label: "Profit went up", emoji: "📈" },
    { id: "same", label: "Profit stayed the same", emoji: "➡️" },
    { id: "down", label: "Profit went down", emoji: "📉" },
  ];

  return (
    <Card className="border-yellow-300 bg-gradient-to-r from-yellow-50 to-amber-50">
      <CardHeader>
        <CardTitle className="text-yellow-800 flex items-center gap-2">
          <Lightbulb className="h-6 w-6" />
          Make Your Prediction First
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-yellow-900 leading-relaxed">
          Sarah's revenue grew from <strong>$12,000</strong> to <strong>$15,800</strong> — a 32% increase.
          She hired her first employee. Business looked great from the outside.
        </p>
        <p className="text-yellow-800 font-medium">
          Before you see the full numbers: what do you predict happened to her <em>profit</em>?
        </p>

        {!revealed && (
          <div className="flex flex-col sm:flex-row gap-3">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setPrediction(opt.id)}
                className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium transition-all text-sm ${
                  prediction === opt.id
                    ? "border-yellow-500 bg-yellow-100 text-yellow-900 shadow-md scale-105"
                    : "border-yellow-200 bg-white text-gray-700 hover:border-yellow-300"
                }`}
              >
                {opt.emoji} {opt.label}
              </button>
            ))}
          </div>
        )}

        {prediction && !revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
          >
            Reveal the Answer →
          </button>
        )}

        {revealed && (
          <div className="space-y-3 pt-2">
            <div
              className={`p-4 rounded-lg border-2 ${
                prediction === "down"
                  ? "bg-green-50 border-green-400"
                  : "bg-orange-50 border-orange-400"
              }`}
            >
              {prediction === "down" ? (
                <p className="font-semibold text-green-800">
                  ✅ Correct! Profit actually fell — from $8,000 (67% margin) to $4,600 (29% margin).
                  More revenue, less profit. That surprised most people.
                </p>
              ) : (
                <p className="font-semibold text-orange-800">
                  Not quite — profit actually <strong>fell</strong> from $8,000 (67% margin) to $4,600
                  (29% margin) even as revenue grew. That's exactly the kind of surprise bad pricing
                  creates.
                </p>
              )}
            </div>
            <p className="text-sm text-gray-600 italic">
              This is the puzzle we're solving today. Understanding markup vs. margin is the key to
              making sure growth actually means more money in Sarah's pocket.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Unit06Lesson02Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">

          {/* ── STEP 1: Revenue teaser — no profit numbers yet ── */}
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Sarah's Big Quarter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>
                TechStart Solutions was on a roll. Sarah Chen had just landed three major projects back-to-back:
                a complex e-commerce site for a growing retailer ($8,500), a social media strategy for a
                restaurant chain ($3,200), and SEO for a dental practice ($4,100). She had even hired Alex
                as her first full-time employee.
              </p>
              <p>
                By the end of the quarter, revenue had climbed from <strong>$12,000 to $15,800</strong> — a
                32% jump. Everything looked great from the outside.
              </p>
            </CardContent>
          </Card>

          {/* ── STEP 2: Prediction — students commit before seeing results ── */}
          <PredictionCard />

          {/* ── STEP 3: Turn and Talk — while everyone is curious ── */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk (3 minutes)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-3">
                Share your prediction and reasoning with a partner:
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>What did you predict — and why? Did your partner predict differently?</li>
                <li>
                  If revenue grew 32% but profit fell, what must have happened to Sarah's costs?
                </li>
                <li>
                  Have you ever seen a business (or person) earn more but feel like they have less? What
                  was going on?
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* ── STEP 4: Full numbers revealed ── */}
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <DollarSign className="h-6 w-6" />
                Sarah's Pricing Reality Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="font-semibold text-green-800 mb-2">Previous Quarter — Solo Work</p>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>Revenue: $12,000</li>
                    <li>Expenses: $4,000</li>
                    <li className="font-bold text-base pt-1">Profit: $8,000 (67% margin)</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <p className="font-semibold text-red-800 mb-2">Current Quarter — With Growth</p>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>Revenue: $15,800</li>
                    <li>Expenses: $11,200</li>
                    <li className="font-bold text-base pt-1">Profit: $4,600 (29% margin)</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Sarah realized her entire <strong>pricing strategy was wrong</strong>. She had been setting
                prices just to cover her costs and add a small buffer — not to reflect the real value
                TechStart Solutions provided. When expenses grew with the business, her cost-plus approach
                collapsed.
              </p>
            </CardContent>
          </Card>

          {/* ── STEP 5: Debate Spark ── */}
          <Card className="border-rose-200 bg-rose-50">
            <CardHeader>
              <CardTitle className="text-rose-800 flex items-center gap-2">
                <Swords className="h-5 w-5" />
                Debate Spark — Pick a Side
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-rose-800 leading-relaxed">
                Two advisors are arguing about how Sarah should fix her pricing. Pick one and be ready to
                defend your position:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
                  <p className="font-bold text-blue-900 mb-2">Advisor A — Raise Prices</p>
                  <p className="text-sm text-blue-800">
                    "Sarah is undercharging. Her services deliver real value — she should raise prices to
                    reflect that, even if she loses a few clients. Fewer projects at higher margins means
                    less stress and more profit."
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
                  <p className="font-bold text-orange-900 mb-2">Advisor B — Cut Costs</p>
                  <p className="text-sm text-orange-800">
                    "Raising prices is risky in a competitive market. Sarah should focus on running leaner —
                    cut unnecessary expenses, renegotiate supplier rates, and automate where possible. Lower
                    costs mean better margins without scaring off clients."
                  </p>
                </div>
              </div>
              <p className="text-sm text-rose-700 italic">
                There's no single right answer — the analysis tools in Phase 4 will help you build a data-driven
                case for whichever strategy you choose.
              </p>
            </CardContent>
          </Card>

          {/* ── STEP 6: Why This Matters ── */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 leading-relaxed">
                Understanding the difference between <strong>markup</strong> and <strong>margin</strong> isn't
                just about following formulas — it's about building a business that actually stays profitable
                as it grows. Sarah's story shows how even successful entrepreneurs make costly pricing mistakes.
                In today's lesson, you'll learn to avoid that mistake and set prices that reflect true value.
              </p>
            </CardContent>
          </Card>

          {/* ── STEP 7: Comprehension check — trimmed to 2 scenario questions only ── */}
          <ComprehensionCheck
            title="Quick Check: Sarah's Situation"
            description="Two questions about the scenario before we move to the concepts"
            questions={comprehensionQuestions}
            showExplanations={true}
          />
        </div>

        <PhaseFooter
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}
