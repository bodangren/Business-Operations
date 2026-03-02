"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Search, LayoutDashboard, Database, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SCENARIOS = [
  { name: "Base Case", price: 1350, volume: 24, profit: 3180 },
  { name: "Price Hike", price: 1600, volume: 24, profit: 9180 },
  { name: "High Volume", price: 1350, volume: 35, profit: 8350 },
  { name: "Downside", price: 1200, volume: 20, profit: -1700 },
];

export default function DashboardLookupSimulator() {
  const [selectedScenario, setSelectedScenario] = useState("");
  const [lookupFormula, setLookupFormula] = useState("");
  const [checked, setChecked] = useState(false);

  const scenarioData = SCENARIOS.find(s => s.name === selectedScenario);

  // Simplified check: needs to include XLOOKUP, the lookup value, and range hints
  const isCorrectFormula = (formula: string) => {
    const f = formula.toUpperCase().replace(/\s/g, "");
    return f.includes("XLOOKUP") && f.includes("A2") && f.includes("B5:B8") && f.includes("E5:E8");
  };

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard Connection Logic
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-blue-700 italic">
            "Sarah, your dashboard needs to 'reach into' your data table and pull the right numbers 
            based on which scenario name you type into the toggle cell."
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* The "Data Engine" */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Database className="w-3 h-3" />
                Scenario Data Engine (Range B5:E8)
              </h4>
              <div className="bg-white border rounded overflow-hidden shadow-sm">
                <table className="w-full text-[10px] border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b">
                      <th className="p-1 border-r text-slate-400">Row</th>
                      <th className="p-1 text-left">B (Name)</th>
                      <th className="p-1 text-right">C (Price)</th>
                      <th className="p-1 text-right">D (Vol)</th>
                      <th className="p-1 text-right bg-blue-50">E (Profit)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCENARIOS.map((s, i) => (
                      <tr key={s.name} className="border-b last:border-0">
                        <td className="p-1 border-r text-center text-slate-400">{i + 5}</td>
                        <td className="p-1 font-medium">{s.name}</td>
                        <td className="p-1 text-right text-slate-500">${s.price}</td>
                        <td className="p-1 text-right text-slate-500">{s.volume}</td>
                        <td className="p-1 text-right font-bold bg-blue-50/50">${s.profit.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* The "Dashboard Steering Wheel" */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <LayoutDashboard className="w-3 h-3" />
                Live Dashboard Toggle (Cell A2)
              </h4>
              <div className="bg-white p-4 border rounded-lg shadow-md border-blue-200">
                <label className="block text-[10px] font-bold text-blue-900 mb-1 uppercase">Select Scenario (Cell A2)</label>
                <select 
                  className="w-full p-2 border rounded text-sm mb-4 bg-blue-50 font-bold text-blue-900"
                  value={selectedScenario}
                  onChange={(e) => {
                    setSelectedScenario(e.target.value);
                    setChecked(false);
                  }}
                >
                  <option value="">-- Choose Toggle --</option>
                  {SCENARIOS.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>

                <div className="space-y-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase">Current Profit KPI Result</label>
                  <div className="h-12 flex items-center justify-center border-2 border-dashed rounded bg-slate-50 text-xl font-black text-slate-400">
                    {selectedScenario ? (
                      <span className={scenarioData!.profit >= 0 ? "text-green-600" : "text-red-600"}>
                        ${scenarioData!.profit.toLocaleString()}
                      </span>
                    ) : "??"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Formula Challenge */}
          <div className="bg-slate-900 p-5 rounded-lg border-t-4 border-blue-500 shadow-xl">
            <h4 className="text-blue-400 font-bold text-sm mb-3 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Write the Integration Formula
            </h4>
            <p className="text-slate-300 text-xs mb-4">
              To pull the <strong>Profit (Column E)</strong> based on the <strong>Toggle (Cell A2)</strong> 
              matching the <strong>Name (Column B)</strong>, what formula should Sarah use?
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  className="bg-slate-800 border-slate-700 text-green-400 font-mono text-sm h-10"
                  placeholder="=XLOOKUP(A2, ...)"
                  value={lookupFormula}
                  onChange={(e) => {
                    setLookupFormula(e.target.value);
                    setChecked(false);
                  }}
                />
                <Button 
                  onClick={() => setChecked(true)}
                  className="bg-blue-600 hover:bg-blue-700 h-10"
                >
                  Link Dashboard
                </Button>
              </div>

              {checked && (
                <div className={`p-3 rounded flex items-start gap-3 animate-in fade-in slide-in-from-top-1 ${isCorrectFormula(lookupFormula) ? "bg-green-900/30 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`}>
                  {isCorrectFormula(lookupFormula) ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <div className="text-xs">
                        <p className="font-bold">Dashboard Connected!</p>
                        <p className="mt-1">Excel now searches Column B for whatever is in A2, then returns the matching row from Column E.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 shrink-0" />
                      <div className="text-xs">
                        <p className="font-bold">Connection Failed</p>
                        <p className="mt-1 italic">Hint: =XLOOKUP(Lookup_Value, Lookup_Array, Return_Array)</p>
                        <p className="mt-1 font-mono text-[10px]">Lookup_Value: A2 | Names: B5:B8 | Profits: E5:E8</p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
