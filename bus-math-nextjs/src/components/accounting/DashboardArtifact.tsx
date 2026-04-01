"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, AlertCircle, TrendingUp, Shield } from "lucide-react"

interface DashboardArtifactProps {
  onComplete?: (data: { executiveSummary: string; kpiSelection: string; riskStatement: string }) => void
}

export default function DashboardArtifact({ onComplete }: DashboardArtifactProps) {
  const [step, setStep] = useState<"summary" | "kpis" | "risks" | "review">("summary")
  const [executiveSummary, setExecutiveSummary] = useState("")
  const [kpiSelection, setKpiSelection] = useState("")
  const [riskStatement, setRiskStatement] = useState("")
  const [feedback, setFeedback] = useState<{ type: "success" | "info"; message: string } | null>(null)

  const validateSummary = () => {
    if (executiveSummary.length < 50) {
      setFeedback({ type: "info", message: "Tip: Your summary should capture the core decision in one sentence." })
      return false
    }
    setFeedback({ type: "success", message: "✓ Clear executive summary - captures the financial story!" })
    setTimeout(() => {
      setFeedback(null)
      setStep("kpis")
    }, 1500)
    return true
  }

  const validateKpis = () => {
    if (kpiSelection.length < 30) {
      setFeedback({ type: "info", message: "Tip: Explain why each KPI matters for the investment decision." })
      return false
    }
    setFeedback({ type: "success", message: "✓ Strong KPI rationale - ties metrics to business decisions!" })
    setTimeout(() => {
      setFeedback(null)
      setStep("risks")
    }, 1500)
    return true
  }

  const validateRisks = () => {
    if (riskStatement.length < 30) {
      setFeedback({ type: "info", message: "Tip: Name at least one key limitation or risk factor in your scenario." })
      return false
    }
    setFeedback({ type: "success", message: "✓ Good risk disclosure - builds investor credibility!" })
    setTimeout(() => {
      setFeedback(null)
      setStep("review")
    }, 1500)
    return true
  }

  const handleComplete = () => {
    if (onComplete) {
      onComplete({ executiveSummary, kpiSelection, riskStatement })
    }
  }

  return (
    <div className="space-y-6">
      {step === "summary" && (
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Part 1: Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <p className="text-sm text-blue-900 mb-2">
                <strong>Scenario:</strong> Sarah's angel investor has 30 seconds to review the dashboard before asking questions.
              </p>
              <p className="text-sm text-blue-900">
                <strong>Your task:</strong> Write one sentence that captures the financial story and the investment decision.
              </p>
            </div>

            <div>
              <Label htmlFor="summary">One-sentence executive summary</Label>
              <Input
                id="summary"
                type="text"
                placeholder="Example: Based on our scenario analysis, TechStart should pursue the Stretch plan because..."
                value={executiveSummary}
                onChange={(e) => setExecutiveSummary(e.target.value)}
                className="mt-2"
              />
              <p className="text-xs text-gray-500 mt-1">{executiveSummary.length} characters</p>
            </div>

            <Button onClick={validateSummary} className="w-full">
              Submit Summary
            </Button>

            {feedback && (
              <div className={`p-3 rounded border ${feedback.type === "success" ? "bg-green-50 border-green-200 text-green-900" : "bg-blue-50 border-blue-200 text-blue-900"}`}>
                <p className="text-sm flex items-center gap-2">
                  {feedback.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  {feedback.message}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {step === "kpis" && (
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Part 2: KPI Selection Rationale
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded border border-purple-200">
              <p className="text-sm text-purple-900 mb-2">
                <strong>Context:</strong> The investor wants to know which metrics prove the business can deliver returns.
              </p>
              <p className="text-sm text-purple-900">
                <strong>Your task:</strong> Explain why you selected these specific KPIs for the dashboard.
              </p>
            </div>

            <div>
              <Label htmlFor="kpis">Why these KPIs matter</Label>
              <Input
                id="kpis"
                type="text"
                placeholder="Example: I chose gross margin because it shows pricing power, and runway because..."
                value={kpiSelection}
                onChange={(e) => setKpiSelection(e.target.value)}
                className="mt-2"
              />
              <p className="text-xs text-gray-500 mt-1">{kpiSelection.length} characters</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep("summary")} variant="outline" className="flex-1">
                Back
              </Button>
              <Button onClick={validateKpis} className="flex-1">
                Submit KPI Rationale
              </Button>
            </div>

            {feedback && (
              <div className={`p-3 rounded border ${feedback.type === "success" ? "bg-green-50 border-green-200 text-green-900" : "bg-blue-50 border-blue-200 text-blue-900"}`}>
                <p className="text-sm flex items-center gap-2">
                  {feedback.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  {feedback.message}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {step === "risks" && (
        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Part 3: Risk & Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-amber-50 p-4 rounded border border-amber-200">
              <p className="text-sm text-amber-900 mb-2">
                <strong>Investor expectation:</strong> Sophisticated investors expect honest disclosure of what could go wrong.
              </p>
              <p className="text-sm text-amber-900">
                <strong>Your task:</strong> State at least one key limitation or risk factor in your analysis.
              </p>
            </div>

            <div>
              <Label htmlFor="risks">Risk disclosure statement</Label>
              <Input
                id="risks"
                type="text"
                placeholder="Example: One key limitation is that revenue projections assume a 20% customer retention rate..."
                value={riskStatement}
                onChange={(e) => setRiskStatement(e.target.value)}
                className="mt-2"
              />
              <p className="text-xs text-gray-500 mt-1">{riskStatement.length} characters</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep("kpis")} variant="outline" className="flex-1">
                Back
              </Button>
              <Button onClick={validateRisks} className="flex-1">
                Submit Risk Statement
              </Button>
            </div>

            {feedback && (
              <div className={`p-3 rounded border ${feedback.type === "success" ? "bg-green-50 border-green-200 text-green-900" : "bg-blue-50 border-blue-200 text-blue-900"}`}>
                <p className="text-sm flex items-center gap-2">
                  {feedback.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  {feedback.message}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {step === "review" && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Dashboard Artifact Complete
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white p-4 rounded border border-green-300 space-y-4">
              <div>
                <Label className="text-sm font-medium text-green-900">Executive Summary</Label>
                <p className="text-sm text-green-800 mt-1 bg-green-50 p-3 rounded">{executiveSummary}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-green-900">KPI Rationale</Label>
                <p className="text-sm text-green-800 mt-1 bg-green-50 p-3 rounded">{kpiSelection}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-green-900">Risk Disclosure</Label>
                <p className="text-sm text-green-800 mt-1 bg-green-50 p-3 rounded">{riskStatement}</p>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded border border-green-300">
              <p className="text-sm text-green-900">
                Your dashboard artifact demonstrates investor-ready communication: a clear story, defensible metrics, and honest risk disclosure.
              </p>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep("risks")} variant="outline" className="flex-1">
                Edit
              </Button>
              <Button onClick={handleComplete} className="flex-1">
                Complete
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}