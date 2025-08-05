
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpreadsheetWrapper, { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";

const messyCompetitorData: SpreadsheetData = [
  [
    { value: "Competitor Name", readOnly: true },
    { value: "Product", readOnly: true },
    { value: "Price", readOnly: true },
    { value: "Notes", readOnly: true },
  ],
  [
    { value: "  Coffee Express " },
    { value: "Latte" },
    { value: " $4.50 " },
    { value: "" },
  ],
  [
    { value: "The Grind" },
    { value: "latte" },
    { value: 4.50 },
    { value: "Duplicate Entry" },
  ],
  [
    { value: "The Grind" },
    { value: "latte" },
    { value: 4.50 },
    { value: "" },
  ],
  [
    { value: "Java Junction" },
    { value: "Cappuccino" },
    { value: "$4.25" },
    { value: "" },
  ],
  [
    { value: "Coffee Express" },
    { value: "Drip Coffee" },
    { value: "$2.75" },
    { value: "" },
  ],
];

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">Guided Practice: Cleaning Competitor Data</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Real-world data is always messy. Before we can analyze it, we need to clean it up. The spreadsheet below contains some common data errors.
            </p>
            <p>
              <strong>Your Task:</strong> Clean the data in the spreadsheet. You will need to:
            </p>
            <ul className="list-disc pl-6">
              <li>Remove extra spaces from the competitor names and prices.</li>
              <li>Standardize the product names (e.g., 'Latte' and 'latte' should be the same).</li>
              <li>Remove the duplicate entry.</li>
              <li>Ensure all prices are numbers, not text.</li>
            </ul>
          </CardContent>
        </Card>

        <SpreadsheetWrapper initialData={messyCompetitorData} />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
