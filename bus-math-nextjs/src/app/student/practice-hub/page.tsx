import { Suspense } from "react"
import PracticeHubHome from "@/components/student/PracticeHubHome"

export default function PracticeHubPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-16 text-center text-muted-foreground">Loading practice hub...</div>}>
      <PracticeHubHome />
    </Suspense>
  )
}
