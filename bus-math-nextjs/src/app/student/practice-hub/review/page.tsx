import { Suspense } from "react"
import ReviewSession from "@/components/student/ReviewSession"

export default function ReviewRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>}>
      <ReviewSession />
    </Suspense>
  )
}
