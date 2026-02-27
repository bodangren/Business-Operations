"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Calculator } from "lucide-react";

const VARIABLE_COST = 880;
const FIXED_COSTS = 8100;

const OPTIONS = [
  { id: "value",    label: "Value Launch",   price: 1200 },
  { id: "balanced", label: "Balanced Core",  price: 1350 },
  { id: "premium",  label: "Premium Plus",   price: 1500 },
] as const;

type OptionId = (typeof OPTIONS)[number]["id"];

function correctValues(price: number) {
  const cm = price - VARIABLE_COST;
  const be = Math.ceil(FIXED_COSTS / cm);
  return { cm, be };
}

function tol(a: string, b: number): boolean {
  const n = Number(a.replace(/[$,]/g, "").trim());
  return Number.isFinite(n) && n === b;
}

export default function BreakEvenScenarioEntry() {
  // Part 1 — contribution margin
  const [cmInputs, setCmInputs] = useState<Record<OptionId, string>>({
    value: "", balanced: "", premium: ""
  });
  const [p1Checked, setP1Checked] = useState(false);
  const [p1Revealed, setP1Revealed] = useState(false);

  // Part 2 — break-even (unlocked once Part 1 passes)
  const [beInputs, setBeInputs] = useState<Record<OptionId, string>>({
    value: "", balanced: "", premium: ""
  });
  const [p2Checked, setP2Checked] = useState(false);
  const [p2Revealed, setP2Revealed] = useState(false);

  function cmOk(id: OptionId) {
    const opt = OPTIONS.find(o => o.id === id)!;
    return tol(cmInputs[id], correctValues(opt.price).cm);
  }
  function beOk(id: OptionId) {
    const opt = OPTIONS.find(o => o.id === id)!;
    return tol(beInputs[id], correctValues(opt.price).be);
  }

  const p1AllCorrect = OPTIONS.every(o => cmOk(o.id));
  const p2AllCorrect = OPTIONS.every(o => beOk(o.id));
  const p1Done = p1AllCorrect; // Part 2 unlocks when all CM are correct

  return (
    <div className="space-y-6">
      {/* ── Part 1: Contribution Margin ── */}
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Part 1 — Compute the Contribution Margin
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white border border-purple-200 rounded p-3 text-sm space-y-1">
            <p className="font-medium text-purple-900">Formula:</p>
            <p className="font-mono text-purple-800">CM ($) = Price − Variable Cost per Project</p>
            <p className="text-purple-600 text-xs">
              Variable cost is always $880. Enter the CM in dollars for each option.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-purple-100 text-purple-900">
                  <th className="text-left p-3">Option</th>
                  <th className="p-3 text-center">Price / Project</th>
                  <th className="p-3 text-center">Variable Cost</th>
                  <th className="p-3 text-center">Your CM ($)</th>
                </tr>
              </thead>
              <tbody>
                {OPTIONS.map(opt => {
                  const correct = correctValues(opt.price);
                  const ok = cmOk(opt.id);
                  return (
                    <tr key={opt.id} className="border-t border-purple-100 bg-white">
                      <td className="p-3 font-medium text-slate-900">{opt.label}</td>
                      <td className="p-3 text-center text-slate-700">${opt.price.toLocaleString()}</td>
                      <td className="p-3 text-center text-slate-500">$880</td>
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-slate-500">$</span>
                          <Input
                            type="number"
                            className="w-24 text-center"
                            placeholder="?"
                            value={cmInputs[opt.id]}
                            onChange={e => {
                              setCmInputs(prev => ({ ...prev, [opt.id]: e.target.value }));
                              setP1Checked(false);
                            }}
                          />
                          {p1Checked && (
                            ok
                              ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                              : <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                          )}
                          {p1Revealed && !ok && (
                            <span className="text-green-700 text-xs font-mono shrink-0">
                              ${correct.cm}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button
              onClick={() => setP1Checked(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Check Part 1
            </Button>
            {p1Checked && !p1AllCorrect && (
              <Button variant="outline" onClick={() => setP1Revealed(true)}>
                Show Answers
              </Button>
            )}
          </div>

          {p1Checked && p1AllCorrect && (
            <div className="bg-green-50 border border-green-200 rounded p-3 flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-green-800 font-medium">Part 1 correct — Part 2 is now unlocked.</p>
                <p className="text-green-700 text-sm mt-1">
                  These CM values are the key inputs for every calculation that follows. Higher price
                  → bigger CM → fewer projects needed to break even.
                </p>
              </div>
            </div>
          )}
          {p1Checked && !p1AllCorrect && !p1Revealed && (
            <p className="text-amber-700 text-sm">
              Double-check your subtraction: CM = Price − $880. Every cent matters.
            </p>
          )}
        </CardContent>
      </Card>

      {/* ── Part 2: Break-Even ── */}
      <Card className={`border-orange-200 ${p1Done ? "bg-orange-50" : "bg-gray-50 opacity-60"}`}>
        <CardHeader>
          <CardTitle className={`flex items-center gap-2 ${p1Done ? "text-orange-800" : "text-gray-500"}`}>
            <Calculator className="h-5 w-5" />
            Part 2 — Find the Break-Even for Each Option
            {!p1Done && (
              <span className="text-xs font-normal ml-2">(complete Part 1 first)</span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className={`space-y-4 ${!p1Done ? "pointer-events-none select-none" : ""}`}>
          <div className="bg-white border border-orange-200 rounded p-3 text-sm space-y-1">
            <p className="font-medium text-orange-900">Formula:</p>
            <p className="font-mono text-orange-800">
              Break-Even (projects) = ⌈Fixed Costs ÷ CM per Project⌉
            </p>
            <p className="text-orange-600 text-xs">
              Fixed costs = $8,100/month. Always round <strong>up</strong> — you cannot deliver
              a fraction of a project.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-orange-100 text-orange-900">
                  <th className="text-left p-3">Option</th>
                  <th className="p-3 text-center">Fixed Costs</th>
                  <th className="p-3 text-center">CM ($) from Part 1</th>
                  <th className="p-3 text-center">Your Break-Even (projects)</th>
                </tr>
              </thead>
              <tbody>
                {OPTIONS.map(opt => {
                  const correct = correctValues(opt.price);
                  const ok = beOk(opt.id);
                  const cmLabel = p1Done ? `$${correct.cm}` : "—";
                  return (
                    <tr key={opt.id} className="border-t border-orange-100 bg-white">
                      <td className="p-3 font-medium text-slate-900">{opt.label}</td>
                      <td className="p-3 text-center text-slate-500">$8,100</td>
                      <td className="p-3 text-center font-medium text-purple-700">{cmLabel}</td>
                      <td className="p-3">
                        <div className="flex items-center justify-center gap-2">
                          <Input
                            type="number"
                            className="w-24 text-center"
                            placeholder="?"
                            value={beInputs[opt.id]}
                            onChange={e => {
                              setBeInputs(prev => ({ ...prev, [opt.id]: e.target.value }));
                              setP2Checked(false);
                            }}
                          />
                          {p2Checked && (
                            ok
                              ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                              : <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                          )}
                          {p2Revealed && !ok && (
                            <span className="text-green-700 text-xs font-mono shrink-0">
                              {correct.be}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button
              onClick={() => setP2Checked(true)}
              disabled={!p1Done}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Check Part 2
            </Button>
            {p2Checked && !p2AllCorrect && (
              <Button variant="outline" onClick={() => setP2Revealed(true)}>
                Show Answers
              </Button>
            )}
          </div>

          {p2Checked && p2AllCorrect && (
            <div className="bg-green-50 border border-green-200 rounded p-3 space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-green-800 font-medium">
                  Part 2 correct — you&apos;ve mapped out all three break-even points.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm text-center mt-1">
                {OPTIONS.map(opt => (
                  <div key={opt.id} className="bg-white rounded border border-green-200 p-2">
                    <p className="font-medium text-green-900">{opt.label}</p>
                    <p className="text-green-700">BE = {correctValues(opt.price).be} projects</p>
                  </div>
                ))}
              </div>
              <p className="text-green-700 text-sm">
                Notice the pattern: higher price → larger CM → <strong>lower break-even</strong>.
                The break-even card below shows you why this matters for Sarah&apos;s decision.
              </p>
            </div>
          )}
          {p2Checked && !p2AllCorrect && !p2Revealed && (
            <p className="text-amber-700 text-sm">
              Divide $8,100 by the CM, then round up to the next whole number. Even 13.1 rounds to 14.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
