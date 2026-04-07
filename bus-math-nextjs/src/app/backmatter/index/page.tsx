import type { Metadata } from "next"
import { indexRecords } from "@/data/index-records"
import { IndexFilter } from "@/components/glossary/IndexFilter"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Subject Index — Math for Business Operations",
  description:
    "Find any glossary term, unit, lesson, or page by keyword. This replaces the old search.",
}

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mb-8 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
          <Badge variant="outline">Reference</Badge>
          <h1 className="mt-3 text-balance text-3xl font-bold">Subject Index</h1>
          <p className="mt-2 max-w-3xl text-base text-muted-foreground">
            This index replaces the old search bar. Type a keyword to find
            glossary terms, units, lessons, and key pages across the entire
            textbook.
          </p>
        </div>

        <IndexFilter records={indexRecords} />
      </div>
    </div>
  )
}
