"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XCircle, Grid3X3, Zap, Info } from "lucide-react";

const FIXED_COSTS = 8100;
const VARIABLE_COST = 880;

const PRICES = [1200, 1400, 1600];
const VOLUMES = [15, 20, 25];

export default function TableLogicSimulator() {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const calculateProfit = (price: number, volume: number) => {
    return (price - VARIABLE_COST) * volume - FIXED_COSTS;
  };

  const checkCell = (pIndex: number, vIndex: number) => {
    const val = inputs[`${pIndex}-${vIndex}`];
    if (!val) return false;
    const n = Number(val.replace(/[$,]/g, "").trim());
    return Math.abs(n - calculateProfit(PRICES[pIndex], VOLUMES[vIndex])) < 1;
  };

  const allCorrect = PRICES.every((_, pi) => 
    VOLUMES.every((_, vi) => checkCell(pi, vi))
  );

  return (
    <div className="space-y-6">
      <Card className="border-emerald-200 bg-emerald-50">
        <CardHeader>
          <CardTitle className="text-emerald-900 text-lg">
            Manual Matrix Assumptions (Keep These Numbers Visible)
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-emerald-900 space-y-2">
          <p>Use the exact TechStart defaults while you build the table in Excel Online:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Fixed Costs:</strong> $8,100 every month (office, salary, insurance, software)</li>
            <li><strong>Variable Cost Per Project:</strong> $880 (contractors, ads, tools)</li>
            <li><strong>Price Range:</strong> $1,200, $1,400, $1,600 in the demo — customize if needed, but keep them in column A</li>
            <li><strong>Volume Range:</strong> 15, 20, 25 projects across the top row (adjust if your scenario calls for it)</li>
            <li><strong>Profit formula:</strong> <code>(Price − 880) × Volume − 8,100</code> — this is what every interior cell should calculate.</li>
          </ul>
          <p className="text-xs text-emerald-700">
            These assumptions mirror the Get-Started model from Lesson 04. If you change them, write the new numbers in your workbook heading so Goal Seek + Dashboard stay aligned.
          </p>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Grid3X3 className="h-5 w-5" />
            Manual Logic Check: Building the Matrix
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-blue-700 italic">
            "Before Excel automates 50 scenarios, let's make sure we trust the math for 9."
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border bg-slate-50 text-slate-500 font-mono text-[10px]">Price ↓ | Vol →</th>
                  {VOLUMES.map(v => (
                    <th key={v} className="p-2 border bg-blue-100 text-blue-900 font-bold">{v} Projects</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICES.map((p, pi) => (
                  <tr key={p}>
                    <td className="p-2 border bg-blue-100 text-blue-900 font-bold text-center">${p.toLocaleString()}</td>
                    {VOLUMES.map((v, vi) => {
                      const id = `${pi}-${vi}`;
                      const isCorrect = checked && checkCell(pi, vi);
                      const showResult = revealed || (checked && isCorrect);
                      
                      return (
                        <td key={v} className="p-2 border relative group">
                          <div className="flex items-center gap-1">
                            {showResult ? (
                              <div className={`w-full text-center font-mono font-bold ${calculateProfit(p, v) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                ${calculateProfit(p, v).toLocaleString()}
                              </div>
                            ) : (
                              <Input 
                                className="h-8 text-xs text-center font-mono"
                                placeholder="Profit?"
                                value={inputs[id] || ""}
                                onChange={e => {
                                  setInputs(prev => ({ ...prev, [id]: e.target.value }));
                                  setChecked(false);
                                }}
                              />
                            )}
                            {checked && !showResult && <XCircle className="w-3 h-3 text-red-500 shrink-0" />}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={() => setChecked(true)}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={Object.keys(inputs).length < 9 && !revealed}
            >
              Verify Matrix
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setRevealed(true)}
              className="border-blue-200 text-blue-700"
            >
              Reveal All (Excel Simulation)
            </Button>
          </div>

          {(allCorrect || revealed) && (
            <div className="bg-green-50 border border-green-200 rounded p-4 space-y-3 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-2 text-green-800 font-bold">
                <Zap className="w-5 h-5" />
                Scenario Map Generated!
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                Notice the "Heat Map" forming. At <strong>$1,200</strong>, Sarah needs at least 25 projects to see green. 
                But at <strong>$1,600</strong>, she is profitable even at 15 projects. 
              </p>
              <div className="bg-white/50 p-2 rounded border border-green-100 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                <p className="text-[11px] text-slate-600">
                  In Excel, you don't type these 9 numbers. You link the corner to your profit formula, 
                  highlight the range, and Excel fills in all 9 (or 900) results instantly using the 
                  <strong> Data Table</strong> tool.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
