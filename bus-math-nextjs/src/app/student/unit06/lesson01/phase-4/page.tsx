
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpreadsheetWrapper, { SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper";

const messyCompetitorData2: SpreadsheetData = [
  [
    { value: "Competitor", readOnly: true },
    { value: "Service", readOnly: true },
    { value: "Price/hr", readOnly: true },
    { value: "Notes", readOnly: true },
  ],
  [
    { value: "Web Weavers" },
    { value: "Website Design" },
    { value: "$75.00" },
    { value: "" },
  ],
  [
    { value: "Creative Coders" },
    { value: "  Web Design  " },
    { value: 80 },
    { value: "" },
  ],
  [
    { value: "Web Weavers" },
    { value: "Website Design" },
    { value: "$75.00" },
    { value: "Duplicate" },
  ],
  [
    { value: "Digital Dreamers" },
    { value: "SEO Consulting" },
    { value: "$120" },
    { value: "" },
  ],
  [
    { value: "Creative Coders" },
    { value: "seo consulting" },
    { value: 125 },
    { value: "" },
  ],
];

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!

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
            <CardTitle className="text-2xl text-green-800">Independent Practice: Data Cleaning Challenge</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Now it's your turn to clean a new dataset. This time, you'll be working with data for consulting services.
            </p>
            <p>
              <strong>Your Task:</strong> Clean the data in the spreadsheet below. Remember to:
            </p>
            <ul className="list-disc pl-6">
              <li>Remove extra spaces.</li>
              <li>Standardize service names.</li>
              <li>Remove duplicate entries.</li>
              <li>Ensure all prices are numbers.</li>
            </ul>
          </CardContent>
        </Card>

        <SpreadsheetWrapper initialData={messyCompetitorData2} />
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
