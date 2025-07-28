"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckSquare, Monitor, Download, ExternalLink } from "lucide-react"
import { Resource } from "@/types/unit"

interface PrerequisitesProps {
  prerequisites: {
    knowledge: string[]
    technology: string[]
    resources: Resource[]
  }
  differentiation?: {
    struggling: string[]
    advanced: string[]
    ell: string[]
  }
}

export function Prerequisites({ prerequisites, differentiation }: PrerequisitesProps) {
  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'download':
        return <Download className="h-4 w-4" />
      case 'external':
        return <ExternalLink className="h-4 w-4" />
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }
  
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Prerequisites & Preparation</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-blue-600" />
              Before You Begin
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Knowledge:</h4>
              <ul className="space-y-1">
                {prerequisites.knowledge.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Technology Requirements:</h4>
              <ul className="space-y-1">
                {prerequisites.technology.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <Monitor className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-green-600" />
              Downloads & Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {prerequisites.resources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm font-medium">{resource.title}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8"
                    onClick={() => resource.url && window.open(resource.url, '_blank')}
                    disabled={!resource.url}
                  >
                    {getResourceIcon(resource.type)}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {differentiation && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Differentiation & Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {differentiation.struggling.length > 0 && (
                <div>
                  <h4 className="font-medium text-yellow-700 mb-2">For Struggling Students:</h4>
                  <ul className="space-y-1">
                    {differentiation.struggling.map((support, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>{support}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {differentiation.advanced.length > 0 && (
                <div>
                  <h4 className="font-medium text-green-700 mb-2">For Advanced Students:</h4>
                  <ul className="space-y-1">
                    {differentiation.advanced.map((extension, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{extension}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {differentiation.ell.length > 0 && (
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">For English Language Learners:</h4>
                  <ul className="space-y-1">
                    {differentiation.ell.map((support, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{support}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  )
}