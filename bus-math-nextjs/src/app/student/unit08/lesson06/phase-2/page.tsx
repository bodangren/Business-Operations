import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, BookOpen } from "lucide-react";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[1];

const vocabSentences = [
  { id: "u08l06-v1", text: "Use {blank} to switch scenarios by name.", answer: "XLOOKUP", hint: "Exact-match, with IFNA for safety" },
  { id: "u08l06-v2", text: "Wrap XLOOKUP with {blank} to handle missing scenario names.", answer: "IFNA", hint: "Prevents #N/A on the dashboard" },
  { id: "u08l06-v3", text: "Dashboards stay stable when charts read from an Excel {blank}.", answer: "Table", alternativeAnswers: ["table", "structured table"], hint: "Structured references expand automatically" },
  { id: "u08l06-v4", text: "{blank} references look like Table[Column] and grow with the data.", answer: "Structured", alternativeAnswers: ["structured references"], hint: "Avoids fixed ranges" },
  { id: "u08l06-v5", text: "A {blank} links a driver cell to named ranges for Base/Stretch/Downside.", answer: "driver table", alternativeAnswers: ["driver", "driver table"], hint: "Centralize inputs by scenario" },
  { id: "u08l06-v6", text: "Use {blank} or INDEX/MATCH with exact match for scenario switching.", answer: "XLOOKUP", alternativeAnswers: ["INDEX/MATCH"], hint: "Never approximate match for IDs" },
  { id: "u08l06-v7", text: "{blank} catches stale AsOfDate or out-of-range rates.", answer: "Validation", alternativeAnswers: ["data validation", "error checks"], hint: "Professional reliability" },
  { id: "u08l06-v8", text: "Use {blank} to replace fragile pasted values in outputs.", answer: "links", alternativeAnswers: ["linked formulas"], hint: "No hard-coded numbers" }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📘 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                    <BookOpen className="h-6 w-6" /> From Model to Decision
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-slate-800">
                    To make decisions, investors need one clean view. Your model should let them switch <strong>Base, Stretch, and Downside</strong> 
                    with a single control. A <strong>driver table</strong> holds the inputs for each scenario. 
                    <strong>Named ranges</strong> and <strong>XLOOKUP with IFNA</strong> pull the right set by name.
                  </p>
                  <p className="text-slate-800">
                    Charts and KPI cards should update live. Use <strong>structured references</strong> to an Excel <strong>Table</strong> so ranges grow as months are added. 
                    Avoid hard-coded values. Document assumptions and keep inputs in one place.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">Professional Standards</h3>
                    <ul className="list-disc list-inside text-blue-800">
                      <li>No pasted numbers in output sheets—use links.</li>
                      <li>Exact-match lookups only for IDs and scenario names.</li>
                      <li>Validation flags errors: missing scenario, negative margin, rates over 100%, stale dates.</li>
                      <li>Charts point to tables, not fixed ranges.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <FillInTheBlank
                sentences={vocabSentences}
                title="Integration Vocabulary Warm‑Up"
                description="Fill each blank using integration terms used by analysts and consultants."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 text-base flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" /> Investor‑Ready Checklist (Preview)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-emerald-900">
                    <li>Scenario switch works by name with no errors</li>
                    <li>Dashboard KPIs: runway, margin, break‑even, cash coverage</li>
                    <li>All charts update when new data is added</li>
                    <li>Assumptions documented and easy to audit</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  );
}

