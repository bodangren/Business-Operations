"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Download,
  Upload,
  FileText,
  FileJson,
  CheckCircle2,
  AlertCircle,
  Clock,
  BarChart3,
} from "lucide-react"
import { loadStudyData } from "@/lib/study/storage"
import {
  exportSummaryCsv,
  exportSessionJsonFile,
  importAndSave,
  buildSessionExport,
} from "@/lib/study/export"
import { formatRelativeDate } from "@/lib/study/derived"
import type { LocalStudyData } from "@/lib/study/storage-schema"

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  return `${(bytes / 1024).toFixed(1)} KB`
}

export default function ExportPage() {
  const [data, setData] = useState<LocalStudyData | null>(null)
  const [csvExported, setCsvExported] = useState(false)
  const [jsonExported, setJsonExported] = useState(false)
  const [importStatus, setImportStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setData(loadStudyData())
  }, [])

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const exportPreview = buildSessionExport(data)
  const { sessions, study_state, reflections } = exportPreview

  const handleExportCsv = () => {
    exportSummaryCsv(data)
    setCsvExported(true)
    // Refresh data to get updated export history
    setData(loadStudyData())
  }

  const handleExportJson = () => {
    exportSessionJsonFile(data)
    setJsonExported(true)
    setData(loadStudyData())
  }

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      const text = ev.target?.result as string
      const result = importAndSave(text)
      if (result.ok) {
        setImportStatus({
          type: "success",
          message: `Imported ${result.mergedSessionCount} new session(s), ${result.mergedReflectionCount} new reflection(s).`,
        })
        setData(loadStudyData())
      } else {
        setImportStatus({ type: "error", message: result.error })
      }
      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
    reader.readAsText(file)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/student/practice-hub"
            className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Practice Hub
          </Link>
          <Badge variant="outline" className="mb-3 border-blue-400 text-blue-200">
            Export & Import
          </Badge>
          <h1 className="text-3xl font-bold text-white mb-2">Export Your Progress</h1>
          <p className="text-slate-300">
            Download your study data or restore from a previous export.
          </p>
        </div>

        {/* Export Preview */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">Data Preview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card>
              <CardContent className="pt-4 pb-3 text-center">
                <div className="text-2xl font-bold">{sessions.length}</div>
                <div className="text-xs text-muted-foreground mt-1">sessions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-3 text-center">
                <div className="text-2xl font-bold">
                  {study_state.aggregate_stats.total_questions_answered}
                </div>
                <div className="text-xs text-muted-foreground mt-1">questions answered</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-3 text-center">
                <div className="text-2xl font-bold">
                  {study_state.mastery_by_term.length}
                </div>
                <div className="text-xs text-muted-foreground mt-1">terms tracked</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 pb-3 text-center">
                <div className="text-2xl font-bold">{reflections.length}</div>
                <div className="text-xs text-muted-foreground mt-1">reflections</div>
              </CardContent>
            </Card>
          </div>

          {sessions.length > 0 && (
            <Card className="mt-3">
              <CardContent className="pt-3">
                <div className="text-xs text-muted-foreground mb-2">Sessions included:</div>
                {sessions.slice(0, 5).map((s) => (
                  <div
                    key={s.session_id}
                    className="flex items-center justify-between py-1.5 text-sm border-b last:border-0"
                  >
                    <span className="capitalize">
                      {s.activity.activity_type.replace(/-/g, " ")}
                    </span>
                    <span className="text-muted-foreground">
                      {s.results.items_correct}/{s.results.items_answered} correct ·{" "}
                      {formatRelativeDate(s.started_at)}
                    </span>
                  </div>
                ))}
                {sessions.length > 5 && (
                  <div className="text-xs text-muted-foreground pt-1.5">
                    +{sessions.length - 5} more session(s)
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </section>

        {/* Export Buttons */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">Download</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="hover:border-blue-400 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-base">Summary CSV</CardTitle>
                </div>
                <CardDescription>
                  One row per session — open in Excel, Google Sheets, or any spreadsheet app.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleExportCsv} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download summary.csv
                </Button>
                {csvExported && (
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Downloaded successfully
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="hover:border-blue-400 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <FileJson className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-base">Full Session JSON</CardTitle>
                </div>
                <CardDescription>
                  Complete data — sessions, mastery, SRS state, and reflections. Use for backup or restore.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleExportJson} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download session.json
                </Button>
                {jsonExported && (
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Downloaded successfully
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Import */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">Import / Restore</h2>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-base">Restore from session.json</CardTitle>
              </div>
              <CardDescription>
                Upload a previously exported session.json to restore progress. New sessions are merged — duplicates are skipped.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportFile}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer cursor-pointer"
              />
              {importStatus && (
                <div
                  className={`mt-3 flex items-center gap-2 text-sm ${
                    importStatus.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {importStatus.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  {importStatus.message}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Export History */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-white">Export History</h2>
          </div>
          <Card>
            <CardContent className="pt-2">
              {data.export_history.length === 0 ? (
                <p className="text-sm text-muted-foreground py-4 text-center">
                  No exports yet.
                </p>
              ) : (
                data.export_history
                  .slice()
                  .reverse()
                  .map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between py-2.5 border-b last:border-0"
                    >
                      <div>
                        <div className="text-sm font-medium">{entry.filename}</div>
                        <div className="text-xs text-muted-foreground">
                          {formatRelativeDate(entry.date)} · {formatBytes(entry.size_bytes)}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        .{entry.type}
                      </Badge>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>
        </section>

        {/* Footer nav */}
        <div className="flex gap-3 justify-center pt-4">
          <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
            <Link href="/student/practice-hub">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Practice Hub
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
            <Link href="/student/practice-hub/progress">
              <BarChart3 className="h-4 w-4 mr-2" />
              Progress Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
