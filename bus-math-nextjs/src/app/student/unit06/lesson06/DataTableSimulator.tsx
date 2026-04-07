"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, Table2, ArrowRight, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DataTableSimulator() {
  const [step, setStep] = useState(1);
  const [columnInput, setColumnInput] = useState("");
  const [rowInput, setRowInput] = useState("");
  const [columnChecked, setColumnChecked] = useState(false);
  const [rowChecked, setRowChecked] = useState(false);

  const isColumnCorrect = columnInput.toUpperCase().includes("B5") || columnInput.includes("Price");
  const isRowCorrect = rowInput.toUpperCase().includes("B6") || rowInput.includes("Volume");

  return (
    <div className="space-y-6">
      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Table2 className="h-5 w-5" />
            Data Table Safe Rehearsal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-purple-700 italic">
            "Before you build in Excel, let's practice the setup logic in our simulator. 
            Think of this as a flight simulator—no crash risk, just learning."
          </p>

          {/* Step 1: Identify the Formula Cell */}
          <div className="bg-white p-4 rounded border border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={step >= 1 ? "default" : "outline"} className={step >= 1 ? "bg-purple-600" : ""}>Step 1</Badge>
              <h4 className="font-bold text-purple-900">Locate Your CVP Formula</h4>
            </div>
            
            <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs font-mono overflow-x-auto">
              <div className="grid grid-cols-4 gap-1 min-w-[360px]">
                <div className="text-slate-400"></div><div className="font-bold text-slate-600">A</div><div className="font-bold text-slate-600">B</div><div className="font-bold text-slate-600">C</div>
              </div>
              <div className="grid grid-cols-4 gap-1 min-w-[360px]">
                <div className="text-slate-400">4</div><div className="text-slate-600">Price</div><div className="bg-blue-50 p-1 border border-blue-300">$1,350</div><div></div>
              </div>
              <div className="grid grid-cols-4 gap-1 min-w-[360px]">
                <div className="text-slate-400">5</div><div className="text-slate-600">Volume</div><div className="bg-blue-50 p-1 border border-blue-300">24</div><div></div>
              </div>
              <div className="grid grid-cols-4 gap-1 min-w-[360px]">
                <div className="text-slate-400">6</div><div className="text-slate-600">Profit</div><div className="bg-green-50 p-1 border border-green-300 font-bold break-all">= (B4-880)*B5 - 12000</div><div></div>
              </div>
              <div className="grid grid-cols-4 gap-1 min-w-[360px] mt-2 pt-2 border-t border-slate-200">
                <div className="text-slate-400">8</div><div className="text-slate-600">Data Table Area</div><div></div><div></div>
              </div>
              <div className="grid grid-cols-4 gap-1 min-w-[360px]">
                <div className="text-slate-400">9</div><div className="bg-purple-50 p-1 border border-purple-300">$1,200</div><div></div><div></div>
              </div>
            </div>

            <div className="mt-3 flex items-start gap-2">
              <Info className="w-4 h-4 text-purple-600 mt-1" />
              <p className="text-xs text-purple-800">
                <strong>Critical:</strong> Your profit formula (B6) must be positioned <em>above</em> the prices and 
                to the <em>left</em> of where the results will appear. This is the anchor Excel needs.
              </p>
            </div>
          </div>

          {/* Step 2: Column Input Cell */}
          <div className="bg-white p-4 rounded border border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={step >= 2 ? "default" : "outline"} className={step >= 2 ? "bg-purple-600" : ""}>Step 2</Badge>
              <h4 className="font-bold text-purple-900">Identify the Column Input Cell</h4>
            </div>
            
            <p className="text-xs text-purple-800 mb-3">
              The Column Input Cell is the input in your CVP model that corresponds to the values down the first column. 
              Which cell in the model should Excel substitute for each price?
            </p>
            
            <div className="flex gap-2">
              <Input 
                className="bg-slate-800 border-slate-700 text-green-400 font-mono text-sm h-10"
                placeholder="Enter cell reference (e.g., B4)"
                value={columnInput}
                onChange={(e) => setColumnInput(e.target.value)}
              />
              <Button
                onClick={() => { setColumnChecked(true); setStep(2); }}
                className="bg-purple-600 hover:bg-purple-700 h-10"
              >
                Check
              </Button>
            </div>

            {columnChecked && (
              <div className={`p-3 rounded flex items-start gap-3 mt-3 ${isColumnCorrect ? "bg-green-900/30 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`}>
                {isColumnCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold">Correct!</p>
                      <p className="mt-1">B4 (Price) is the input that changes down the column. When Excel calculates each row, it substitutes the price from Column A into B4.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold">Not quite</p>
                      <p className="mt-1">Think about which input in your CVP model changes when you test different prices.</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Step 3: Row Input Cell (for two-variable) */}
          <div className="bg-white p-4 rounded border border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant={step >= 3 ? "default" : "outline"} className={step >= 3 ? "bg-purple-600" : ""}>Step 3</Badge>
              <h4 className="font-bold text-purple-900">Identify the Row Input Cell (Two-Variable)</h4>
            </div>
            
            <p className="text-xs text-purple-800 mb-3">
              Now imagine a two-variable table. The prices go across the top row. Which input in your CVP model 
              corresponds to those values?
            </p>
            
            <div className="flex gap-2">
              <Input 
                className="bg-slate-800 border-slate-700 text-green-400 font-mono text-sm h-10"
                placeholder="Enter cell reference (e.g., B5)"
                value={rowInput}
                onChange={(e) => setRowInput(e.target.value)}
              />
              <Button
                onClick={() => { setRowChecked(true); setStep(3); }}
                className="bg-purple-600 hover:bg-purple-700 h-10"
              >
                Check
              </Button>
            </div>

            {rowChecked && (
              <div className={`p-3 rounded flex items-start gap-3 mt-3 ${isRowCorrect ? "bg-green-900/30 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`}>
                {isRowCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold">Correct!</p>
                      <p className="mt-1">B5 (Volume) is the input that changes across the row. The two-variable table substitutes both Price (B4) and Volume (B5) for each combination.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold">Not quite</p>
                      <p className="mt-1">The values across the top represent a second input to your CVP model.</p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Bridge to Phase 4 */}
          <div className="bg-slate-900 p-5 rounded-lg border-t-4 border-purple-500 shadow-xl">
            <h4 className="text-purple-400 font-bold text-sm mb-3 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Ready for the Real Build
            </h4>
            <p className="text-slate-300 text-xs">
              You've practiced the logic. Now in <strong>Phase 4</strong>, you'll build real Data Tables in Excel.
              You'll create both a one-variable table (price sensitivity) and a two-variable matrix (price × volume).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
