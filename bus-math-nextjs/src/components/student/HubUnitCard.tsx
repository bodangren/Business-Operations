"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import StudyDueBadge from "@/components/student/StudyDueBadge"
import type { UnitId } from "@/types/glossary"

interface HubUnitCardProps {
  number: string
  title: string
  description: string
  href: string
  unitId: UnitId
}

export default function HubUnitCard({ number, title, description, href, unitId }: HubUnitCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="hover:shadow-md transition-shadow h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            Unit {number}: {title}
            <StudyDueBadge unitId={unitId} />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="text-sm text-primary flex items-center gap-1">
            Open unit <ArrowRight className="h-3 w-3" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
