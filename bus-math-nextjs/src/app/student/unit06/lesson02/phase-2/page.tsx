'use client'

import { useState } from "react";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, AlertCircle, BookOpen, DollarSign } from "lucide-react";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[1]; // Phase 2: Introduction

// ── Fill-in-the-blank data ────────────────────────────────────────────────────

const fillInBlankSentences = [
  {
    id: "1",
    text: "Markup looks at profit as a percentage of your {blank}.",
    answer: "cost",
    hint: "The original amount you paid to acquire or create the product/service",
    alternativeAnswers: ["costs"],
  },
  {
    id: "2",
    text: "Margin looks at profit as a percentage of your {blank}.",
    answer: "selling price",
    hint: "The final amount the customer pays for the product/service",
    alternativeAnswers: ["sales price", "revenue"],
  },
  {
    id: "3",
    text: "The markup formula is: ({blank} - Cost) ÷ Cost × 100%",
    answer: "Selling Price",
    hint: "What the customer pays minus what it cost you",
    alternativeAnswers: ["Sales Price", "Price"],
  },
  {
    id: "4",
    text: "The margin formula is: (Selling Price - Cost) ÷ {blank} × 100%",
    answer: "Selling Price",
    hint: "The denominator uses what the customer pays",
    alternativeAnswers: ["Sales Price", "Price"],
  },
  {
    id: "5",
    text: "If you buy a t-shirt for $10 and sell it for $20, the markup is {blank}%.",
    answer: "100",
    hint: "($20 - $10) ÷ $10 × 100% = $10 ÷ $10 × 100%",
    alternativeAnswers: ["100%", "one hundred"],
  },
  {
    id: "6",
    text: "If you buy a t-shirt for $10 and sell it for $20, the margin is {blank}%.",
    answer: "50",
    hint: "($20 - $10) ÷ $20 × 100% = $10 ÷ $20 × 100%",
    alternativeAnswers: ["50%", "fifty"],
  },
  {
    id: "7",
    text: "Businesses usually care more about {blank} because it tells them how much of each sales dollar they keep as profit.",
    answer: "margin",
    hint: "This percentage shows what portion of each dollar earned becomes profit",
    alternativeAnswers: ["margins"],
  },
  {
    id: "8",
    text: "Financial reports almost always use {blank} rather than markup.",
    answer: "margin",
    hint: "The standard way businesses report profitability to investors",
    alternativeAnswers: ["margins"],
  },
];

// ── Markup / Margin Visualizer ────────────────────────────────────────────────

function MarkupMarginVisualizer() {
  const cost = 100; // fixed so formulas stay readable
  const [price, setPrice] = useState(200);

  const profit = price - cost;
  const markup = cost > 0 ? ((profit / cost) * 100).toFixed(1) : "0";
  const margin = price > 0 ? ((profit / price) * 100).toFixed(1) : "0";

  // Bar chart: stacked cost + profit = selling price
  const barData = [
    {
      name: "Selling Price Breakdown",
      Cost: cost,
      Profit: Math.max(profit, 0),
    },
  ];

  // Pie chart: cost slice vs profit slice of revenue
  const profitPct = price > 0 ? Math.max((profit / price) * 100, 0) : 0;
  const costPct = 100 - profitPct;
  const pieData =
    profit > 0
      ? [
          { name: "Cost", value: parseFloat(costPct.toFixed(1)), fill: "#94a3b8" },
          { name: "Profit (Margin)", value: parseFloat(profitPct.toFixed(1)), fill: "#22c55e" },
        ]
      : [{ name: "Cost", value: 100, fill: "#ef4444" }];

  return (
    <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50">
      <CardHeader>
        <CardTitle className="text-indigo-800 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          See the Difference Live
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Slider */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-indigo-700">
            Sarah's hosting cost is fixed at <strong>$100</strong>. Drag the slider to change her selling price:
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 w-16">$101</span>
            <input
              type="range"
              min={101}
              max={500}
              step={1}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="flex-1 accent-indigo-600"
            />
            <span className="text-sm text-gray-500 w-16 text-right">$500</span>
          </div>
          <p className="text-center font-bold text-indigo-800 text-lg">
            Selling Price: ${price}
          </p>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-white rounded-lg p-3 border border-indigo-200">
            <p className="text-xs text-gray-500 mb-1">Cost</p>
            <p className="text-xl font-bold text-gray-800">${cost}</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-green-200">
            <p className="text-xs text-gray-500 mb-1">Profit</p>
            <p className={`text-xl font-bold ${profit >= 0 ? "text-green-700" : "text-red-600"}`}>
              ${profit}
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-indigo-200">
            <p className="text-xs text-gray-500 mb-1">Selling Price</p>
            <p className="text-xl font-bold text-indigo-800">${price}</p>
          </div>
        </div>

        {/* Charts side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar chart → Markup */}
          <div className="space-y-2">
            <div className="text-center">
              <p className="font-semibold text-gray-700 text-sm">Markup — profit vs. cost</p>
              <p className="text-3xl font-bold text-emerald-700">{markup}%</p>
              <p className="text-xs text-gray-500 mt-1">
                ${profit} profit ÷ ${cost} cost × 100
              </p>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart
                data={barData}
                margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" hide />
                <YAxis tick={{ fontSize: 10 }} domain={[0, Math.max(price + 20, 220)]} />
                <Tooltip
                  formatter={(v: number, name: string) => [`$${v}`, name]}
                />
                <Bar dataKey="Cost" stackId="a" fill="#94a3b8" name="Cost" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Profit" stackId="a" fill="#22c55e" name="Profit" radius={[4, 4, 0, 0]} />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-center text-gray-500">
              The green bar grows faster than the gray bar — markup accelerates as price rises.
            </p>
          </div>

          {/* Pie chart → Margin */}
          <div className="space-y-2">
            <div className="text-center">
              <p className="font-semibold text-gray-700 text-sm">Margin — profit slice of revenue</p>
              <p className="text-3xl font-bold text-green-700">{margin}%</p>
              <p className="text-xs text-gray-500 mt-1">
                ${profit} profit ÷ ${price} revenue × 100
              </p>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={72}
                  dataKey="value"
                  paddingAngle={2}
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-xs text-center text-gray-500">
              The green slice = how much of every revenue dollar Sarah keeps.
            </p>
          </div>
        </div>

        {/* Key insight callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800 font-medium flex items-start gap-2">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
            <span>
              Notice: markup always shows a <strong>larger percentage</strong> than margin for the same
              profit. At $200 price, markup is 100% but margin is only 50%. They{" "}
              <em>describe the same profit in completely different ways</em> — and confusing them can
              wreck a pricing strategy.
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Unit06Lesson02Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Story setup */}
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Core Concepts: Markup vs. Margin
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed text-blue-900">
                Sarah's big "aha!" moment was realizing she was pricing to cover costs, not for{" "}
                <em>value</em>. Part of that problem often comes from confusing two important business words:{" "}
                <strong>markup</strong> and <strong>margin</strong>. They both sound like they're about
                profit, but they measure it differently — and mixing them up can cost a business a lot of money.
              </p>
              <p className="text-blue-800 leading-relaxed">
                Let's use a simple example. Sarah buys website hosting services for a client at{" "}
                <strong>$100</strong> and charges the client <strong>$200</strong> for the complete setup.
                Same $100 profit — but watch what happens when we describe it two different ways.
              </p>
            </CardContent>
          </Card>

          {/* ── INTERACTIVE VISUALIZER ── */}
          <MarkupMarginVisualizer />

          {/* Fill in the blank — now BEFORE the formula reference cards */}
          <Card className="border-violet-200 bg-violet-50">
            <CardHeader>
              <CardTitle className="text-violet-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Test Yourself First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-violet-700 mb-4 leading-relaxed">
                Before reading the formulas below, see how much you already understand from the charts.
                Complete these sentences — the answers are all in the visualizer above.
              </p>
            </CardContent>
          </Card>

          <FillInTheBlank
            title="Markup vs. Margin: Fill in the Blanks"
            description="Use what you observed in the charts to complete each sentence"
            sentences={fillInBlankSentences}
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          {/* Formula reference — now AFTER the exercise as confirmation */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Formula Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Confirm your answers above with the official formulas:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h3 className="font-semibold mb-2 text-emerald-800">Markup Formula</h3>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                    Markup = (Selling Price − Cost) ÷ Cost × 100%
                  </p>
                  <p className="text-xs text-gray-600">Profit as % of what <strong>you paid</strong></p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h3 className="font-semibold mb-2 text-green-800">Margin Formula</h3>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                    Margin = (Selling Price − Cost) ÷ Selling Price × 100%
                  </p>
                  <p className="text-xs text-gray-600">Profit as % of what <strong>the customer pays</strong></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why margin matters — with investor framing */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Why Businesses Focus on Margin
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-indigo-700 leading-relaxed">
                Businesses usually care more about <strong>margin</strong> because it shows how much of each
                sales dollar they keep as profit. Financial reports almost always use margin — not markup —
                because it gives investors and managers a clearer picture of efficiency.
              </p>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">Sarah's $5,000 Website Project</h3>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• Cost to deliver: $2,000</li>
                  <li>• <strong>Markup:</strong> 150% — sounds huge, might worry a client if they knew</li>
                  <li>• <strong>Margin:</strong> 60% — tells Sarah she keeps 60¢ of every dollar earned</li>
                  <li className="pt-1 text-indigo-900 font-medium">
                    When Sarah pitches investors, they will ask for her gross <em>margin</em> — not her markup.
                    Investors think in margin.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
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
