"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Users, FileText } from "lucide-react"

interface ArtifactBuilderProps {
  onComplete?: (data: { rationale: string; explanation: string }) => void
}

export default function ArtifactBuilder({ onComplete }: ArtifactBuilderProps) {
  const [step, setStep] = useState<"rationale" | "explanation" | "review">("rationale")
  const [rationale, setRationale] = useState("")
  const [explanation, setExplanation] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackType, setFeedbackType] = useState<"success" | "info">("success")
  const [feedbackMessage, setFeedbackMessage] = useState("")

  const handleRationaleSubmit = () => {
    setShowFeedback(true)
    if (rationale.length > 50 && rationale.toLowerCase().includes("investor")) {
      setFeedbackType("success")
      setFeedbackMessage("✓ Good rationale! You've connected table structure to investor needs.")
      setTimeout(() => {
        setShowFeedback(false)
        setStep("explanation")
      }, 2000)
    } else {
      setFeedbackType("info")
      setFeedbackMessage("Tip: Connect your structure decision to Sarah's investor meeting context.")
    }
  }

  const handleExplanationSubmit = () => {
    setShowFeedback(true)
    if (explanation.length > 100) {
      setFeedbackType("success")
      setFeedbackMessage("✓ Excellent explanation! You've shown how structure supports trust.")
      setTimeout(() => {
        setShowFeedback(false)
        setStep("review")
      }, 2000)
    } else {
      setFeedbackType("info")
      setFeedbackMessage("Tip: Expand on how specific design choices (formatting, naming) build credibility.")
    }
  }

  const handleComplete = () => {
    if (onComplete) {
      onComplete({ rationale, explanation })
    }
  }

  return (
    <div className="space-y-6">
      {step === "rationale" && 
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Part 1: Why This Structure Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <p className="text-sm text-blue-900 mb-2">
                <strong>Context:</strong> Sarah meets with an angel investor next week. 
                He wants to see "clean books" but won't have time to review 
                every transaction. He needs to trust her system at a glance.
              </p>
              <p className="text-sm text-blue-900">
                <strong>Your task:</strong> Explain why your Excel Table structure 
                (columns, formatting, naming) builds that investor trust.
              </p>
            </div>

            <div>
              <Label htmlFor="rationale">Write your rationale (2-3 sentences)</Label>
              <Input
                id="rationale"
                placeholder="Example: I chose 6-column structure because..."
                value={rationale}
                onChange={(e) => setRationale(e.target.value)}
                className="mt-2"
              />
              <div className="flex justify-between mt-2">
                <p className="text-xs text-gray-600">Connect structure to investor trust</p>
                <p className="text-xs text-gray-600">{rationale.length}/200 characters</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Key points to include:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Consistent columns</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Currency formatting</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Clear table name</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Professional appearance</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Filter capability</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleRationaleSubmit} className="flex-1">
                Submit Rationale
              </Button>
            </div>

            {showFeedback && 
              <div className={`p-3 rounded border ${feedbackType === "success" ? "bg-green-50 border-green-200 text-green-900" : "bg-blue-50 border-blue-200 text-blue-900"}`}>
                <div className="flex items-start gap-2">
                  {feedbackType === "success" ? 
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                   : 
                    <Users className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  }
                  <p className="text-sm">{feedbackMessage}</p>
                </div>
              </div>
            }
          </CardContent>
        </Card>
      }

      {step === "explanation" && 
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Part 2: Structure Defense
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded border border-purple-200">
              <p className="text-sm text-purple-900 mb-2">
                <strong>Context:</strong> The investor is skeptical. He's seen many founders 
                with "spreadsheets full of numbers" that don't tell a clear story.
              </p>
              <p className="text-sm text-purple-900">
                <strong>Your task:</strong> Explain how your specific design choices 
                (formatting, naming, column order) signal serious financial control 
                and make Sarah's ledger immediately verifiable.
              </p>
            </div>

            <div>
              <Label htmlFor="explanation">Write your structure defense (3-4 sentences)</Label>
              <Input
                id="explanation"
                placeholder="Example: The currency formatting ensures values are immediately readable..."
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className="mt-2"
              />
              <div className="flex justify-between mt-2">
                <p className="text-xs text-gray-600">Be specific about formatting, naming, and verification</p>
                <p className="text-xs text-gray-600">{explanation.length}/300 characters</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Professional signals to emphasize:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Instant readability</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Scalability signal</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Error prevention</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Audit readiness</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Future formula foundation</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep("rationale")}
                variant="outline"
                className="flex-1"
              >
                Back
              </Button>
              <Button onClick={handleExplanationSubmit} className="flex-1">
                Submit Defense
              </Button>
            </div>

            {showFeedback && 
              <div className={`p-3 rounded border ${feedbackType === "success" ? "bg-green-50 border-green-200 text-green-900" : "bg-purple-50 border-purple-200 text-purple-900"}`}>
                <div className="flex items-start gap-2">
                  {feedbackType === "success" ? 
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                   : 
                    <Users className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  }
                  <p className="text-sm">{feedbackMessage}</p>
                </div>
              </div>
            }
          </CardContent>
        </Card>
      }

      {step === "review" && 
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Artifact Complete: Review Your Work
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded border border-green-300">
              <h3 className="font-semibold text-green-900 mb-3">Your Artifact Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-green-900">Part 1: Rationale</Label>
                  <p className="text-sm text-green-800 mt-1 bg-green-50 p-3 rounded">
                    {rationale}
                  </p>
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-green-900">Part 2: Structure Defense</Label>
                  <p className="text-sm text-green-800 mt-1 bg-green-50 p-3 rounded">
                    {explanation}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded border border-green-300">
              <p className="text-sm text-green-900 font-medium">
                This artifact demonstrates that you understand not just the mechanics of 
                Excel Tables, but why professional structure matters for investor trust 
                and business credibility.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep("explanation")}
                variant="outline"
                className="flex-1"
              >
                Edit Response
              </Button>
              <Button onClick={handleComplete} className="flex-1">
                Complete Artifact
              </Button>
            </div>
          </CardContent>
        </Card>
      }
    </div>
  )
}
