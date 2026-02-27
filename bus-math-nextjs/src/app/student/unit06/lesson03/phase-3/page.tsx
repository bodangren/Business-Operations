"use client";

import { useMemo, useState } from "react";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Store,
  Target,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import { lesson03Data, unit06Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[2]; // Guided Practice

// ── POS Setup Service scenario ───────────────────────────────────────────────
// Sarah is evaluating a second TechStart service line: POS system installation
// for local retailers. Same CVP framework, different cost structure and capacity.

const VC       = 320;   // variable cost per installation
const FC       = 4800;  // fixed costs per month (equipment, Alex's allocated hours, software)
const CAPACITY = 15;    // max installations per month (~10.5 hrs each in 160 hr/month)
const TARGET_PROFIT = 4000; // reverse-solve target

const OPTIONS = [
  { id: "basic",    label: "Basic Setup",    price: 560  },
  { id: "standard", label: "Standard Setup", price: 720  },
  { id: "premium",  label: "Premium Setup",  price: 950  },
] as const;

type OptionId = (typeof OPTIONS)[number]["id"];

// ── derived values ────────────────────────────────────────────────────────────
function cm(price: number)        { return price - VC; }
function cmRatio(price: number)   { return (cm(price) / price) * 100; }
function breakEven(price: number) { return Math.ceil(FC / cm(price)); }
function profit(price: number, units: number) { return cm(price) * units - FC; }

// ── helpers ──────────────────────────────────────────────────────────────────
function numEq(input: string, target: number, tol = 0): boolean {
  const n = Number(input.replace(/[$,%]/g, "").trim());
  return Number.isFinite(n) && Math.abs(n - target) <= tol;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 0,
  }).format(value);
}

// ── component ─────────────────────────────────────────────────────────────────
export default function Phase3Page() {
  // Step 1 — CM
  const [cmInputs,      setCmInputs]      = useState<Record<OptionId, string>>({ basic: "", standard: "", premium: "" });
  const [cmRatioInputs, setCmRatioInputs] = useState<Record<OptionId, string>>({ basic: "", standard: "", premium: "" });
  const [step1Checked,  setStep1Checked]  = useState(false);
  const [step1Revealed, setStep1Revealed] = useState(false);

  // Step 2 — BE (unlocked after step 1 passes)
  const [beInputs,      setBeInputs]      = useState<Record<OptionId, string>>({ basic: "", standard: "", premium: "" });
  const [step2Checked,  setStep2Checked]  = useState(false);
  const [step2Revealed, setStep2Revealed] = useState(false);

  // Step 3 — capacity check
  const [selectedId, setSelectedId] = useState<OptionId>("standard");

  // Step 4 — reverse solve
  const [targetInput,  setTargetInput]  = useState(`${TARGET_PROFIT}`);
  const [volumeInput,  setVolumeInput]  = useState(`${CAPACITY}`);

  // ── step 1 validation ────────────────────────────────────────────────────
  function cmOk(id: OptionId)      { return numEq(cmInputs[id],      cm(OPTIONS.find(o => o.id === id)!.price)); }
  function cmRatioOk(id: OptionId) { return numEq(cmRatioInputs[id], cmRatio(OPTIONS.find(o => o.id === id)!.price), 0.15); }
  const step1AllCorrect = OPTIONS.every(o => cmOk(o.id) && cmRatioOk(o.id));

  // ── step 2 validation ────────────────────────────────────────────────────
  function beOk(id: OptionId) { return numEq(beInputs[id], breakEven(OPTIONS.find(o => o.id === id)!.price)); }
  const step2AllCorrect = OPTIONS.every(o => beOk(o.id));
  const step1Done = step1AllCorrect;

  // ── step 3/4 derived ─────────────────────────────────────────────────────
  const optionSummaries = useMemo(
    () => OPTIONS.map(opt => ({
      ...opt,
      cm:               cm(opt.price),
      cmRatio:          cmRatio(opt.price),
      breakEven:        breakEven(opt.price),
      profitAtCapacity: profit(opt.price, CAPACITY),
    })),
    []
  );

  const selected    = optionSummaries.find(o => o.id === selectedId) ?? optionSummaries[1];
  const isFeasible  = selected.breakEven <= CAPACITY;
  const beRanking   = [...optionSummaries].sort((a, b) => a.breakEven - b.breakEven);

  const targetProfit  = Math.max(0, Number(targetInput)  || 0);
  const plannedVolume = Math.max(1, Math.floor(Number(volumeInput) || 1));
  const requiredUnits = Math.ceil((FC + targetProfit) / selected.cm);
  const requiredPrice = VC + (FC + targetProfit) / plannedVolume;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-6xl mx-auto space-y-8">

          {/* ── Scenario context ──────────────────────────────────────────── */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Store className="h-6 w-6" />
                New Service Line: POS System Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-green-700 leading-relaxed">
                Sarah has spotted an opportunity: local retailers are scrambling to install
                point-of-sale systems before the holiday rush. She&apos;s considering adding a{" "}
                <strong>POS Setup Service</strong> as a second TechStart offering — but only if
                the numbers make sense.
              </p>
              <p className="text-green-700 leading-relaxed">
                The cost structure is different from web design, and so is the capacity.
                Your job: run the same four-step CVP sequence on this new scenario and determine
                which pricing strategy is feasible.
              </p>
              <div className="bg-white p-4 rounded border border-green-200 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-green-900">
                    <strong>Variable cost / install:</strong> {formatCurrency(VC)}
                  </p>
                  <p className="text-green-600 text-xs mt-0.5">
                    hardware accessories, software license, travel, setup materials
                  </p>
                </div>
                <div>
                  <p className="text-green-900">
                    <strong>Monthly fixed costs:</strong> {formatCurrency(FC)}
                  </p>
                  <p className="text-green-600 text-xs mt-0.5">
                    Alex&apos;s allocated hours, specialist tools, service vehicle lease
                  </p>
                </div>
                <div>
                  <p className="text-green-900">
                    <strong>Capacity:</strong> {CAPACITY} installations / month
                  </p>
                  <p className="text-green-600 text-xs mt-0.5">
                    each install takes ~10.5 hrs; Alex has 160 hrs / month
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ══ STEP 1: Contribution Margin Sprint ════════════════════════ */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Step 1 — Contribution Margin Sprint
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-700 leading-relaxed">
                For each pricing tier, compute the contribution margin in dollars and as a
                percentage of price. The variable cost is {formatCurrency(VC)} per installation
                for all three options.
              </p>

              <div className="bg-white border border-blue-200 rounded p-3 text-sm space-y-1">
                <p className="font-mono text-blue-900">CM ($) = Price − {formatCurrency(VC)}</p>
                <p className="font-mono text-blue-900">CM (%) = CM ÷ Price × 100&nbsp;&nbsp;[1 decimal]</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-100 text-blue-900">
                      <th className="text-left p-3">Option</th>
                      <th className="p-3 text-center">Price / Install</th>
                      <th className="p-3 text-center">Variable Cost</th>
                      <th className="p-3 text-center">Your CM ($)</th>
                      <th className="p-3 text-center">Your CM (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPTIONS.map(opt => {
                      const correctCm    = cm(opt.price);
                      const correctRatio = cmRatio(opt.price);
                      return (
                        <tr key={opt.id} className="border-t border-blue-100 bg-white">
                          <td className="p-3 font-medium text-slate-900">{opt.label}</td>
                          <td className="p-3 text-center text-slate-700">{formatCurrency(opt.price)}</td>
                          <td className="p-3 text-center text-slate-500">{formatCurrency(VC)}</td>

                          {/* CM $ */}
                          <td className="p-3">
                            <div className="flex items-center justify-center gap-1">
                              <span className="text-slate-400">$</span>
                              <Input
                                type="number"
                                className="w-24 text-center"
                                placeholder="?"
                                value={cmInputs[opt.id]}
                                onChange={e => { setCmInputs(p => ({ ...p, [opt.id]: e.target.value })); setStep1Checked(false); }}
                              />
                              {step1Checked && (cmOk(opt.id)
                                ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                                : <XCircle     className="h-4 w-4 text-red-500 shrink-0" />)}
                              {step1Revealed && !cmOk(opt.id) && (
                                <span className="text-green-700 text-xs font-mono shrink-0">{correctCm}</span>
                              )}
                            </div>
                          </td>

                          {/* CM % */}
                          <td className="p-3">
                            <div className="flex items-center justify-center gap-1">
                              <Input
                                type="number"
                                step="0.1"
                                className="w-24 text-center"
                                placeholder="?"
                                value={cmRatioInputs[opt.id]}
                                onChange={e => { setCmRatioInputs(p => ({ ...p, [opt.id]: e.target.value })); setStep1Checked(false); }}
                              />
                              <span className="text-slate-400">%</span>
                              {step1Checked && (cmRatioOk(opt.id)
                                ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                                : <XCircle     className="h-4 w-4 text-red-500 shrink-0" />)}
                              {step1Revealed && !cmRatioOk(opt.id) && (
                                <span className="text-green-700 text-xs font-mono shrink-0">{correctRatio.toFixed(1)}</span>
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
                <Button onClick={() => setStep1Checked(true)}>Check Step 1</Button>
                {step1Checked && !step1AllCorrect && (
                  <Button variant="outline" onClick={() => setStep1Revealed(true)}>Show Answers</Button>
                )}
              </div>

              {step1Checked && step1AllCorrect && (
                <div className="bg-green-50 border border-green-200 rounded p-3 space-y-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-green-800 font-medium">Step 1 complete — Step 2 unlocked.</p>
                  </div>
                  <p className="text-green-700 text-sm">
                    Notice: same pattern as web design. Higher price → bigger CM, even though the
                    variable cost and price range are completely different.
                  </p>
                </div>
              )}
              {step1Checked && !step1AllCorrect && (
                <p className="text-amber-700 text-sm">
                  CM ($) = Price − {formatCurrency(VC)}. CM (%) = CM ÷ Price × 100, rounded to 1 decimal.
                </p>
              )}
            </CardContent>
          </Card>

          {/* ══ STEP 2: Break-Even Ladder ══════════════════════════════════ */}
          <Card className={`border-orange-200 ${step1Done ? "bg-orange-50" : "bg-gray-50 opacity-60"}`}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${step1Done ? "text-orange-800" : "text-gray-500"}`}>
                <ArrowRight className="h-5 w-5" />
                Step 2 — Break-Even Ladder
                {!step1Done && <span className="text-xs font-normal ml-2">(complete Step 1 first)</span>}
              </CardTitle>
            </CardHeader>
            <CardContent className={`space-y-4 ${!step1Done ? "pointer-events-none select-none" : ""}`}>
              <p className="text-orange-700 leading-relaxed">
                Using {formatCurrency(FC)}/month in fixed costs, compute how many installations
                each option needs to break even. Then rank them easiest to hardest.
              </p>

              <div className="bg-white border border-orange-200 rounded p-3 text-sm space-y-1">
                <p className="font-mono text-orange-900">
                  Break-Even = ⌈{formatCurrency(FC)} ÷ CM per Installation⌉ &nbsp; — round UP always
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orange-100 text-orange-900">
                      <th className="text-left p-3">Option</th>
                      <th className="p-3 text-center">Fixed Costs</th>
                      <th className="p-3 text-center">CM ($) — from Step 1</th>
                      <th className="p-3 text-center">Your Break-Even</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPTIONS.map(opt => {
                      const correctBe = breakEven(opt.price);
                      const cmLabel   = step1Done ? formatCurrency(cm(opt.price)) : "—";
                      return (
                        <tr key={opt.id} className="border-t border-orange-100 bg-white">
                          <td className="p-3 font-medium text-slate-900">{opt.label}</td>
                          <td className="p-3 text-center text-slate-500">{formatCurrency(FC)}</td>
                          <td className="p-3 text-center font-medium text-blue-700">{cmLabel}</td>
                          <td className="p-3">
                            <div className="flex items-center justify-center gap-1">
                              <Input
                                type="number"
                                className="w-24 text-center"
                                placeholder="?"
                                value={beInputs[opt.id]}
                                onChange={e => { setBeInputs(p => ({ ...p, [opt.id]: e.target.value })); setStep2Checked(false); }}
                              />
                              <span className="text-slate-500 text-xs">installs</span>
                              {step2Checked && (beOk(opt.id)
                                ? <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                                : <XCircle     className="h-4 w-4 text-red-500 shrink-0" />)}
                              {step2Revealed && !beOk(opt.id) && (
                                <span className="text-green-700 text-xs font-mono shrink-0">{correctBe}</span>
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
                  disabled={!step1Done}
                  className="bg-orange-600 hover:bg-orange-700"
                  onClick={() => setStep2Checked(true)}
                >
                  Check Step 2
                </Button>
                {step2Checked && !step2AllCorrect && (
                  <Button variant="outline" onClick={() => setStep2Revealed(true)}>Show Answers</Button>
                )}
              </div>

              {step2Checked && step2AllCorrect && (
                <div className="bg-green-50 border border-green-200 rounded p-3 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-green-800 font-medium">
                      Step 2 complete — Break-Even Ladder (easiest to hardest):
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm text-center">
                    {beRanking.map((opt, i) => (
                      <div key={opt.id} className="bg-white rounded border border-green-200 p-3">
                        <p className="text-xs text-green-600 uppercase tracking-wide mb-1">Rank {i + 1}</p>
                        <p className="font-semibold text-green-900">{opt.label}</p>
                        <p className="text-green-700 mt-1">BE: <strong>{opt.breakEven} installs</strong></p>
                      </div>
                    ))}
                  </div>
                  <p className="text-green-700 text-sm">
                    Proceed to Step 3 to test these against the {CAPACITY}-installation monthly ceiling.
                  </p>
                </div>
              )}
              {step2Checked && !step2AllCorrect && (
                <p className="text-amber-700 text-sm">
                  Divide {formatCurrency(FC)} by the CM from Step 1, then round up. Remember: even
                  7.1 installations rounds up to 8.
                </p>
              )}
            </CardContent>
          </Card>

          {/* ── Pause ────────────────────────────────────────────────────── */}
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Pause and Make Sense
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-emerald-900 font-medium">
                Based on break-even alone, which option would you eliminate — and why?
              </p>
              <p className="text-emerald-700 text-sm">
                Keep that in mind. Step 3 applies the {CAPACITY}-installation capacity ceiling.
              </p>
            </CardContent>
          </Card>

          {/* ══ STEP 3: Capacity Reality Check ═══════════════════════════ */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Step 3 — Capacity Reality Check
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-700 leading-relaxed">
                Alex can handle {CAPACITY} POS installations per month at most. Select each
                option to see whether its break-even is achievable within that ceiling.
              </p>
              <div className="flex flex-wrap gap-2">
                {optionSummaries.map(opt => (
                  <Button
                    key={opt.id}
                    type="button"
                    variant={selectedId === opt.id ? "default" : "outline"}
                    onClick={() => setSelectedId(opt.id)}
                  >
                    {opt.label}
                  </Button>
                ))}
              </div>
              <div className={`p-4 rounded border ${isFeasible ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <p className={`font-medium ${isFeasible ? "text-green-900" : "text-red-900"}`}>
                  {selected.label} requires {selected.breakEven} installations to break even.
                </p>
                <p className={`text-sm mt-1 ${isFeasible ? "text-green-800" : "text-red-800"}`}>
                  {isFeasible
                    ? `Feasible — ${CAPACITY - selected.breakEven} installations above break-even before hitting capacity. Profit at full capacity: ${formatCurrency(selected.profitAtCapacity)}.`
                    : `Not feasible — requires ${selected.breakEven - CAPACITY} more installations than Alex can deliver. This option cannot break even at current capacity.`}
                </p>
              </div>
              <p className="text-purple-800 text-sm">
                This is the same test you ran for web design — but the numbers are different.
                Same framework, new context.
              </p>
            </CardContent>
          </Card>

          {/* ══ STEP 4: Target-Profit Reverse Solve ═══════════════════════ */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Step 4 — Target-Profit Reverse Solve
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-indigo-700 leading-relaxed">
                Sarah wants the POS service to generate at least {formatCurrency(TARGET_PROFIT)}/month.
                Work backward: which option can hit that target within the {CAPACITY}-installation
                ceiling?
              </p>

              {/* Worked example */}
              <div className="bg-indigo-100 border border-indigo-300 rounded p-4 space-y-3">
                <p className="font-semibold text-indigo-900 text-sm">
                  Worked example — Basic Setup ({formatCurrency(560)}, CM = {formatCurrency(cm(560))}) with a {formatCurrency(TARGET_PROFIT)} target:
                </p>
                <div className="space-y-1 text-sm text-indigo-800 font-mono bg-white rounded p-3 border border-indigo-200">
                  <p>Required installs = ⌈(FC + Target) ÷ CM⌉</p>
                  <p>= ⌈({formatCurrency(FC)} + {formatCurrency(TARGET_PROFIT)}) ÷ {formatCurrency(cm(560))}⌉</p>
                  <p>= ⌈{formatCurrency(FC + TARGET_PROFIT)} ÷ {formatCurrency(cm(560))}⌉</p>
                  <p className="font-bold">= ⌈{((FC + TARGET_PROFIT) / cm(560)).toFixed(1)}⌉ = <span className="text-red-700">{Math.ceil((FC + TARGET_PROFIT) / cm(560))} installs — not feasible</span></p>
                </div>
                <p className="text-indigo-800 text-sm">
                  <strong>Now use the inputs below</strong> to test Standard and Premium Setup
                  options, or to find the required price at full {CAPACITY}-installation capacity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Solve A */}
                <div className="bg-white p-4 rounded border border-indigo-200 space-y-3">
                  <p className="text-sm font-medium text-indigo-900">Solve A — required volume at chosen price</p>
                  <div className="space-y-1">
                    <label className="text-xs text-indigo-700" htmlFor="targetInput">Target profit ($/month)</label>
                    <Input
                      id="targetInput"
                      type="number"
                      min={0}
                      step={500}
                      value={targetInput}
                      onChange={e => setTargetInput(e.target.value)}
                    />
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-indigo-600 text-xs">Selected option (from Step 3):</p>
                    <p className="font-medium text-indigo-900">
                      {selected.label} — CM = {formatCurrency(selected.cm)}
                    </p>
                    <p className="text-indigo-800">
                      Required installs:{" "}
                      <strong className={requiredUnits > CAPACITY ? "text-red-700" : "text-green-700"}>
                        {requiredUnits}
                      </strong>
                    </p>
                    {requiredUnits > CAPACITY
                      ? <p className="text-red-600 text-xs">Exceeds capacity by {requiredUnits - CAPACITY}. Try Premium Setup or lower the target.</p>
                      : <p className="text-green-600 text-xs">Within capacity ({CAPACITY - requiredUnits} installs to spare). ✓</p>
                    }
                  </div>
                </div>

                {/* Solve B */}
                <div className="bg-white p-4 rounded border border-indigo-200 space-y-3">
                  <p className="text-sm font-medium text-indigo-900">Solve B — required price at fixed volume</p>
                  <div className="space-y-1">
                    <label className="text-xs text-indigo-700" htmlFor="volumeInput">Planned monthly installs</label>
                    <Input
                      id="volumeInput"
                      type="number"
                      min={1}
                      max={CAPACITY}
                      step={1}
                      value={volumeInput}
                      onChange={e => setVolumeInput(e.target.value)}
                    />
                  </div>
                  <div className="text-sm space-y-1">
                    <p className="text-indigo-600 text-xs">Using target profit from Solve A: {formatCurrency(targetProfit)}</p>
                    <p className="text-indigo-800">
                      Required price:{" "}
                      <strong className="text-indigo-900">{formatCurrency(requiredPrice)}</strong>
                    </p>
                    <p className="text-xs text-indigo-600">
                      = {formatCurrency(VC)} + ({formatCurrency(FC + targetProfit)} ÷ {plannedVolume})
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-indigo-200 text-sm text-indigo-800">
                <strong>Same algebra, new context.</strong> The POS scenario shows why CVP isn&apos;t
                just a web-design tool — any service business with fixed costs, variable costs, and a
                price point can be modeled the same way. In Lesson 4, Goal Seek will automate these
                reverse solves for any scenario.
              </div>
            </CardContent>
          </Card>

          {/* ── Turn and Talk ──────────────────────────────────────────── */}
          <Card className="border-sky-200 bg-sky-50">
            <CardHeader>
              <CardTitle className="text-sky-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk (3 minutes)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sky-800">
                <li>Compare the POS scenario to web design: which service has the higher CM ratio at its top price? Why does that matter?</li>
                <li>Which pricing option would you recommend for the POS service — and what single number best justifies your choice?</li>
                <li>If Alex could add 5 more hours per month, how would that change the feasibility picture?</li>
              </ul>
            </CardContent>
          </Card>

          {/* ── Preview ─────────────────────────────────────────────────── */}
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Up: Independent Practice</h3>
              <p className="text-gray-700">
                In Phase 4 you&apos;ll build both the web design and POS scenarios into an Excel
                workbook, then write a pricing memo comparing which service line is the stronger
                investment for TechStart.
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
