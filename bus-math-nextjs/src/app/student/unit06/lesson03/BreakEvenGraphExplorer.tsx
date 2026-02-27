"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, CheckCircle2, XCircle } from "lucide-react";
import { BreakEvenChart } from "@/components/charts/BreakEvenChart";

const FC = 8100;
const VC = 880;

const SCENARIOS = [
  { id: "value",    label: "Value Launch",   price: 1200, correctBE: 26 },
  { id: "balanced", label: "Balanced Core",  price: 1350, correctBE: 18 },
  { id: "premium",  label: "Premium Plus",   price: 1500, correctBE: 14 },
] as const;

type ScenarioId = (typeof SCENARIOS)[number]["id"];

export default function BreakEvenGraphExplorer() {
  const [activeId, setActiveId]   = useState<ScenarioId>("balanced");
  const [answers, setAnswers]     = useState<Record<ScenarioId, string>>({ value: "", balanced: "", premium: "" });
  const [checked, setChecked]     = useState<Record<ScenarioId, boolean>>({ value: false, balanced: false, premium: false });

  const active    = SCENARIOS.find(s => s.id === activeId)!;
  const vcRate    = VC / active.price;

  function isCorrect(id: ScenarioId) {
    return Number(answers[id]) === SCENARIOS.find(s => s.id === id)!.correctBE;
  }

  const allDone = SCENARIOS.every(s => checked[s.id] && isCorrect(s.id));

  return (
    <Card className="border-orange-200 bg-orange-50">
      <CardHeader>
        <CardTitle className="text-orange-800 flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Graph Reading: Identify the Break-Even Point
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-orange-700 text-sm leading-relaxed">
          Select a pricing scenario. The chart will update to show that option&apos;s revenue
          line and total-cost line. Find the point where the two lines{" "}
          <strong>cross</strong> — read its value on the horizontal axis. That is the
          break-even volume. Enter your reading below and check it.
        </p>

        {/* Scenario selector */}
        <div className="flex flex-wrap gap-2">
          {SCENARIOS.map(s => (
            <Button
              key={s.id}
              type="button"
              variant={activeId === s.id ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => setActiveId(s.id)}
            >
              {s.label}
              {checked[s.id] && isCorrect(s.id) && (
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              )}
            </Button>
          ))}
        </div>

        {/* Chart — key forces a clean remount when scenario changes */}
        <div className="bg-white rounded border border-orange-200 p-2">
          <p className="text-xs text-orange-600 px-2 mb-2">
            <strong>{active.label}</strong> — price{" "}
            {active.price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })},
            variable cost $880, fixed costs $8,100/month
          </p>
          <BreakEvenChart
            key={activeId}
            fixedCosts={FC}
            variableCostRate={vcRate}
            sellingPrice={active.price}
            interactive={false}
            maxUnits={30}
            hideBreakEven={true}
          />
        </div>

        {/* Answer entry */}
        <div className="bg-white border border-orange-200 rounded p-4 space-y-3">
          <p className="text-sm font-medium text-orange-900">
            For the <strong>{active.label}</strong> scenario: at how many projects do the
            Revenue and Total Costs lines cross?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Input
                type="number"
                className="w-28 text-center"
                placeholder="? projects"
                value={answers[activeId]}
                onChange={e => {
                  setAnswers(prev => ({ ...prev, [activeId]: e.target.value }));
                  setChecked(prev => ({ ...prev, [activeId]: false }));
                }}
              />
              <span className="text-sm text-slate-500">projects</span>
            </div>
            <Button
              onClick={() => setChecked(prev => ({ ...prev, [activeId]: true }))}
            >
              Check
            </Button>
            {checked[activeId] && isCorrect(activeId) && (
              <span className="flex items-center gap-1 text-green-700 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" /> Correct!
              </span>
            )}
            {checked[activeId] && !isCorrect(activeId) && (
              <span className="flex items-center gap-1 text-red-600 text-sm">
                <XCircle className="h-4 w-4" /> Look at the exact x-value where the two lines meet — round up if it falls between gridlines.
              </span>
            )}
          </div>
        </div>

        {/* Progress tracker */}
        <div className="grid grid-cols-3 gap-2 text-xs text-center">
          {SCENARIOS.map(s => (
            <div
              key={s.id}
              className={`rounded p-2 border ${
                checked[s.id] && isCorrect(s.id)
                  ? "bg-green-50 border-green-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <p className="font-medium text-gray-900">{s.label}</p>
              <p className="text-gray-600">
                {checked[s.id] && isCorrect(s.id)
                  ? `${s.correctBE} projects ✓`
                  : "—"}
              </p>
            </div>
          ))}
        </div>

        {allDone && (
          <div className="bg-green-50 border border-green-200 rounded p-4 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
              <p className="text-green-800 font-medium">
                All three scenarios identified correctly.
              </p>
            </div>
            <p className="text-green-700 text-sm">
              Notice the pattern: higher price → steeper revenue slope → the lines cross sooner
              → break-even is reached in fewer projects. The Break-Even explanation card below
              shows you the formula that produces exactly these crossing points.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
