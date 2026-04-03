import type { Metadata } from "next"
import { indexRecords } from "@/data/index-records"
import { IndexFilter } from "@/components/glossary/IndexFilter"

export const metadata: Metadata = {
  title: "Subject Index — Math for Business Operations",
  description:
    "Find any glossary term, unit, lesson, or page by keyword. This replaces the old search.",
}

export default function IndexPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold">Subject Index</h1>
        <p className="text-muted-foreground text-base">
          This index replaces the old search bar. Type a keyword to find
          glossary terms, units, lessons, and key pages across the entire
          textbook.
        </p>
      </div>

      <IndexFilter records={indexRecords} />
    </div>
  )
}
