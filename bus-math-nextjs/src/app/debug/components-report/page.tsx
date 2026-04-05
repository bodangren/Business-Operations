'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RefreshCw, ExternalLink, Play } from 'lucide-react'

interface ComponentUsage {
  file: string
}

interface ComponentInfo {
  name: string
  path: string
  category: string
  usages: ComponentUsage[]
  totalUsages: number
}

interface ReportData {
  components: ComponentInfo[]
  lastGenerated: string
  stats: {
    totalComponents: number
    totalUsages: number
    categoryCounts: Record<string, number>
  }
}

export default function ComponentsReportPage() {
  const [reportData, setReportData] = useState<ReportData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRunningScript, setIsRunningScript] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadReportData = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const response = await fetch('/components-report.json')
      if (!response.ok) {
        throw new Error('Report data not found. Please run the component analysis script first.')
      }
      
      const data = await response.json()
      setReportData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load report data')
    } finally {
      setIsLoading(false)
    }
  }

  const runAnalysisScript = async () => {
    try {
      setIsRunningScript(true)
      setError(null)
      
      const response = await fetch('/api/analyze-components', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const result = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to run analysis')
      }
      
      await loadReportData()
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to run analysis script')
    } finally {
      setIsRunningScript(false)
    }
  }

  useEffect(() => {
    loadReportData()
  }, [])

  const groupedComponents = reportData?.components.reduce((acc, comp) => {
    if (!acc[comp.category]) {
      acc[comp.category] = []
    }
    acc[comp.category].push(comp)
    return acc
  }, {} as Record<string, ComponentInfo[]>) || {}

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin" />
              {isRunningScript ? 'Running analysis script...' : 'Loading component report...'}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto py-8 px-4">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-destructive">Error Loading Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{error}</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">To generate the report, run:</p>
                <code className="block bg-black text-green-400 p-2 rounded text-sm">
                  cd bus-math-nextjs && npm run analyze-components
                </code>
              </div>
              <Button onClick={loadReportData} className="mt-4">
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Badge variant="outline">Debug</Badge>
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-3xl font-bold">Custom Components Report</h1>
            <div className="flex gap-2">
              <Button 
                onClick={runAnalysisScript} 
                disabled={isRunningScript}
                variant="default"
              >
                {isRunningScript ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isRunningScript ? 'Running...' : 'Run Analysis'}
              </Button>
              <Button onClick={loadReportData} variant="outline" disabled={isRunningScript}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
        
        {reportData && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{reportData.stats.totalComponents}</div>
                <div className="text-sm text-muted-foreground">Total Components</div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{reportData.stats.totalUsages}</div>
                <div className="text-sm text-muted-foreground">Total Usages</div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{Object.keys(groupedComponents).length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">
                  {reportData.components.filter(c => c.usages.length === 0).length}
                </div>
                <div className="text-sm text-muted-foreground">Unused Components</div>
              </CardContent>
            </Card>
          </div>
        )}
        
        <p className="text-sm text-muted-foreground mb-8">
          Last generated: {reportData?.lastGenerated}
        </p>

        <div className="space-y-8">
          {Object.entries(groupedComponents)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([category, components]) => (
              <Card key={category} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category}
                    <Badge variant="secondary">
                      {components.length} component{components.length !== 1 ? 's' : ''}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {components
                      .sort((a, b) => b.totalUsages - a.totalUsages)
                      .map((component) => (
                        <div key={component.path} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{component.name}</h3>
                              <Badge variant={component.totalUsages > 0 ? "default" : "destructive"}>
                                {component.totalUsages} usage{component.totalUsages !== 1 ? 's' : ''}
                              </Badge>
                            </div>
                            <code className="text-xs text-muted-foreground">{component.path}</code>
                          </div>
                          
                          {component.usages.length > 0 ? (
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium">Used in:</h4>
                              <div className="space-y-1">
                                {component.usages.map((usage, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm">
                                    <ExternalLink className="w-3 h-4 text-muted-foreground" />
                                    <code className="bg-muted px-2 py-1 rounded text-xs">
                                      {usage.file}
                                    </code>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="text-sm text-destructive">
                              This component appears to be unused
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
