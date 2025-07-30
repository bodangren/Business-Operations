"use client";

import { useState } from "react";
import { 
  SpreadsheetWrapper, 
  spreadsheetTemplates, 
  getTemplateByUnit,
  createEmptySpreadsheet,
  exportToCSV,
  importFromCSV,
  type SpreadsheetData,
  type SpreadsheetTemplate 
} from "@/components/spreadsheet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SpreadsheetDebugPage() {
  const [currentData, setCurrentData] = useState<SpreadsheetData>(
    createEmptySpreadsheet(10, 6)
  );
  const [selectedTemplate, setSelectedTemplate] = useState<SpreadsheetTemplate | null>(null);

  const handleDataChange = (newData: SpreadsheetData) => {
    setCurrentData(newData);
    console.log("Spreadsheet data changed:", newData);
  };

  const loadTemplate = (template: SpreadsheetTemplate) => {
    console.log("Loading template:", template.name, template.data);
    setCurrentData(template.data);
    setSelectedTemplate(template);
  };

  const resetSpreadsheet = () => {
    setCurrentData(createEmptySpreadsheet(10, 6));
    setSelectedTemplate(null);
  };

  const exportData = () => {
    const csv = exportToCSV(currentData);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "spreadsheet-data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvString = e.target?.result as string;
        const importedData = importFromCSV(csvString);
        setCurrentData(importedData);
        setSelectedTemplate(null);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Spreadsheet Debug & Testing</h1>
        <p className="text-muted-foreground">
          Test the Excel-like spreadsheet functionality with curriculum templates
        </p>
      </div>

      {/* Current Template Info */}
      {selectedTemplate && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Current Template: {selectedTemplate.name}
              <Badge variant="secondary">Active</Badge>
            </CardTitle>
            <CardDescription>{selectedTemplate.description}</CardDescription>
          </CardHeader>
        </Card>
      )}

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Controls</CardTitle>
          <CardDescription>Manage spreadsheet data and templates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={resetSpreadsheet} variant="outline">
              Reset to Empty
            </Button>
            <Button onClick={exportData} variant="outline">
              Export to CSV
            </Button>
            <div>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileImport}
                className="hidden"
                id="csv-import"
              />
              <Button asChild variant="outline">
                <label htmlFor="csv-import" className="cursor-pointer">
                  Import CSV
                </label>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Template Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Curriculum Templates</CardTitle>
          <CardDescription>
            Load pre-built templates for different units
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(spreadsheetTemplates).map(([key, template]) => (
              <Card key={key} className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{template.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button
                    onClick={() => loadTemplate(template)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Load Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Unit-Based Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Unit-Specific Templates</CardTitle>
          <CardDescription>
            Templates organized by curriculum unit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((unitNumber) => {
              const templates = getTemplateByUnit(unitNumber);
              return (
                <div key={unitNumber} className="space-y-2">
                  <h4 className="font-medium text-sm">Unit {unitNumber}</h4>
                  {templates.length > 0 ? (
                    templates.map((template, index) => (
                      <Button
                        key={index}
                        onClick={() => loadTemplate(template)}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                      >
                        {template.name.split(" ")[0]}
                      </Button>
                    ))
                  ) : (
                    <p className="text-xs text-muted-foreground">No templates</p>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Main Spreadsheet */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Spreadsheet</CardTitle>
          <CardDescription>
            Excel-like interface with formula support. Try entering formulas like =SUM(A1:A5) or =B2*C2
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-auto">
            <SpreadsheetWrapper
              initialData={currentData}
              onChange={handleDataChange}
              className="min-h-[400px]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Data Preview (JSON)</CardTitle>
          <CardDescription>
            Current spreadsheet data structure for debugging - Total cells: {currentData.length} rows × {Math.max(...currentData.map(row => row.length), 0)} columns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs max-h-60">
            {JSON.stringify(currentData, null, 2)}
          </pre>
        </CardContent>
      </Card>

      {/* Feature Tests */}
      <Card>
        <CardHeader>
          <CardTitle>Feature Tests</CardTitle>
          <CardDescription>Test specific spreadsheet features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Formula Tests</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Try: =SUM(A1:A5)</li>
                <li>• Try: =AVERAGE(B1:B10)</li>
                <li>• Try: =IF(A1&gt;B1,"Greater","Less")</li>
                <li>• Try: =ROUND(A1*B1,2)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Read-Only Cells</h4>
              <p className="text-sm text-muted-foreground">
                Templates include read-only cells (shown with gray background).
                These cells cannot be edited directly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}