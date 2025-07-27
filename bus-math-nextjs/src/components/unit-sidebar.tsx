"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface UnitSection {
  id: string
  title: string
  href: string
  progress?: number
}

interface UnitSidebarProps {
  unitNumber: number
  unitTitle: string
  sections: UnitSection[]
}

export function UnitSidebar({ unitNumber, unitTitle, sections }: UnitSidebarProps) {
  const pathname = usePathname()

  const isCurrentSection = (href: string) => {
    return pathname === href
  }

  const calculateOverallProgress = () => {
    if (sections.length === 0) return 0
    const totalProgress = sections.reduce((sum, section) => sum + (section.progress || 0), 0)
    return Math.round(totalProgress / sections.length)
  }

  return (
    <aside className="w-80 space-y-6">
      {/* Unit Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Unit Navigation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <nav>
            <ul className="space-y-1">
              <li>
                <Link
                  href={`/units/unit${unitNumber.toString().padStart(2, '0')}-${unitTitle.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname.endsWith('index') || pathname.split('/').pop() === `unit${unitNumber.toString().padStart(2, '0')}-${unitTitle.toLowerCase().replace(/\s+/g, '-')}`
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  Unit Overview
                </Link>
              </li>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <Link
                    href={section.href}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isCurrentSection(section.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {index + 1}. {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>

      <Separator />

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Progress</CardTitle>
          <div className="text-sm text-muted-foreground">
            Overall: {calculateOverallProgress()}% complete
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{section.title}</span>
                <span className="text-xs text-muted-foreground">
                  {section.progress || 0}%
                </span>
              </div>
              <Progress value={section.progress || 0} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Unit Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Unit {unitNumber}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm">
            <div className="font-medium">{unitTitle}</div>
            <div className="text-muted-foreground mt-1">
              {sections.length} sections • {calculateOverallProgress()}% complete
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}