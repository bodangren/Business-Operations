"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, Info } from "lucide-react"

interface TableStructureSimulatorProps {
  onReset?: () => void
}

export default function TableStructureSimulator({ onReset }: TableStructureSimulatorProps) {
  const [currentStep, setCurrentStep] = useState<"structure" | "formatting" | "naming" | "complete">("structure")
  const [structureComplete, setStructureComplete] = useState(false)
  const [formattingComplete, setFormattingComplete] = useState(false)
  const [namingComplete, setNamingComplete] = useState(false)
  const [tableName, setTableName] = useState("")
  const [selectedFormatting, setSelectedFormatting] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackType, setFeedbackType] = useState<"success" | "error">("success")
  const [feedbackMessage, setFeedbackMessage] = useState("")

  const handleStructureCheck = () => {
    setShowFeedback(true)
    setFeedbackType("success")
    setFeedbackMessage("✓ Correct! Proper column structure: Date | Description | Account | Type | Debit | Credit")
    setStructureComplete(true)
  }

  const handleFormattingCheck = () => {
    setShowFeedback(true)
    if (selectedFormatting === "currency") {
      setFeedbackType("success")
      setFeedbackMessage("✓ Correct! Currency formatting ensures readability and professionalism")
      setFormattingComplete(true)
    } else {
      setFeedbackType("error")
      setFeedbackMessage("✗ Try again. Currency formatting is the professional standard for monetary values")
    }
  }

  const handleNamingCheck = () => {
    setShowFeedback(true)
    if (tableName.toLowerCase().includes("ledger") && tableName.length > 0) {
      setFeedbackType("success")
      setFeedbackMessage("✓ Correct! 'LedgerTable' is a clear, descriptive name for structured references")
      setNamingComplete(true)
    } else {
      setFeedbackType("error")
      setFeedbackMessage("✗ Try again. Table name should include 'Ledger' to be clear and descriptive")
    }
  }

  const reset = () => {
    setCurrentStep("structure")
    setStructureComplete(false)
    setFormattingComplete(false)
    setNamingComplete(false)
    setTableName("")
    setSelectedFormatting(null)
    setShowFeedback(false)
    if (onReset) onReset()
  }

  const moveToNextStep = () => {
    setShowFeedback(false)
    if (currentStep === "structure") {
      setCurrentStep("formatting")
    } else if (currentStep === "formatting") {
      setCurrentStep("naming")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex items-center gap-2 ${structureComplete ? "text-green-600" : "text-gray-400"}`}>
          {structureComplete ? <CheckCircle2 className="h-5 w-5" />` : <div className="h-5 w-5 rounded-full border border-current" />}
          <span className="font-medium">1. Column Structure</span>
        </div>
        <div className="h-px w-8 bg-gray-300" />
        <div className={`flex items-center gap-2 ${formattingComplete ? "text-green-600" : "text-gray-400"}`}>
          {formattingComplete ? <CheckCircle2 className="h-5 w-5" /> : <div className="h-5 w-5 rounded-full border border-current" />}
          <span className="font-medium">2. Formatting</span>
        </div>
        <div className="h-pxw-8 bg-gray-300" />
        <div className={`flex items-center gap-2 ${namingComplete ? "text-green-600" : "text-gray-400"}`}>
          {namingComplete ? <CheckCircle2 className="h-5 w-5" /> : <div className="h-5 w-5 rounded-full border border-current" />}
          <span className="font-medium">3. Naming</span>
        </div>
      </div>

      {currentStep === "structure" && (
        <Card className="border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  Step 1: Define the professional column structure for Sarah's ledger. A well-structured table has consistent, clear headers that make data easy to verify.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded border">
                <p className="text-sm font-medium text-gray-900 mb-2">What columns should Sarah's ledger table include?</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Date</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Description</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Account</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Type</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Debit</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Credit</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <Label className="font-medium text-gray-900">Why is consistent column order important?</Label>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={selectedFormatting === "readability" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSelectedFormatting("readability")}
                    >
                      Readability
                    </Button>
                    <Button
                      size="sm"
                      variant={selectedFormatting === "automation" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSelectedFormatting("automation")}
                    >
                      Automation
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-medium text-gray-900">What account types should be included?</Label>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">Asset</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">Liability</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">Equity</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">Revenue</span>
                    <span className="bg-gray-200 px-2 py-1 rounded text-xs">Expense</span>
                  </div>
                </div>
              </div>

              <Button onClick={handleStructureCheck} className="w-full">
                Check Column Structure
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === "formatting" && (
        <Card className="border-purple-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-purple-900">
                  Step 2: Apply professional formatting to the Debit and Credit columns. Consistent formatting makes values immediately readable and comparable.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded border">
                <p className="text-sm font-medium text-gray-900 mb-3">What formatting should apply to monetary columns?</p>
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium text-gray-900">Primary formatting: type:</Label>
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        variant={selectedFormatting === "currency" ? "default" : "outline"}
                        className="flex-1"
                        onClick={() => setSelectedFormatting("currency")}
                      >
                        Currency ($1,234.00)
                      </Button>
                      <Button
                        size="sm"
                        variant={selectedFormatting === "number" ? "default" : "outline"}
                        className="flex-1"
                        onClick={() => setSelectedFormatting("number")}
                      >
                        Number (1,234.00)
                     </Button>
                      <Button
                        size="sm"
                        variant={selectedFormatting === "general" ? "default" : "outline"}
                        className="flex-1"
                        onClick={() => setSelectedFormatting("general")}
                      >
                        General
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button onClick={handleFormattingCheck} className="w-full">
                Check Formatting Choice
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === "naming" && (
        <Card className="border-green-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-900">
                  Step 3: Give your Excel Table a clear, descriptive name. This name will be used in structured references like TableName[Column].
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="tableName">Name your table:</Label>
                  <Input
                    id="tableName"
                    placeholder="Enter table name..."
                    value={tableName}
                    onChange={(e) => set {e.target.value}}
                    className="mt-2"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Tip: Include "Ledger" to make the purpose clear. Avoid spaces (use CamelCase).
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded border">
                  <p className="text-sm font-medium text-gray-900 mb-2">Structured reference example:</p>
                  <code className="text-sm bg-white px-2 py-1 rounded">
                    {tableName || "LedgerTable"}[Debit]
                  </code>
                </div>
              </div>

              <Button onClick={handleNamingCheck} className="w-full">
                Check Table Name
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {showFeedback && (
        <div className={`p-4 rounded border ${feedbackType === "success" ? "bg-green-50 border-green-200 text-green-900" : "bg-red-50 border-red-200 text-red-900"}`}>
          <div className="flex items-start gap-2">
            {feedbackType === "success" ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="text-sm font-medium">{feedbackMessage}</p>
              {feedbackType === "success" && currentStep !== "naming" && (
                <Button
                  onClick={moveToNextStep}
                  className="mt-3"
                >
                  Continue to Next Step
                </Button>
              )}
              {feedbackType === "error" && (
                <Button
                  variant="outline"
                  onClick={() => setShowFeedback(false)}
                  className="mt-3"
                >
                  Try Again
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {namingComplete && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
              <div>
                <h3 className="text-lg font-semibold text-green-900">Practice Complete!</h3>
                <p className="text-sm text-green-800 mt-2">
                  You've mastered the three key steps for building Sarah's professional ledger table. You're ready to build the real Excel workbook in Phase 4.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium text-green-900">Column Structure</p>
                  <p className="text-green-700 mt-1">Date | Description | Account | Type | Debit | Credit</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium text-green-900">Formatting</p>
                  <p className="text-green-700 mt-1">Currency format for Debit/Credit columns</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium text-green-900">Table Name</p>
                  <p className="text-green-700 mt-1">LedgerTable for structured references</p>
                </div>
              </div>
              <Button variant="outline" onClick={reset} className="w-full">
                Reset Practice
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
