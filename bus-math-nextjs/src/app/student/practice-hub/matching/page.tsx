import { Suspense } from "react"
import MatchingGame from "@/components/student/MatchingGame"

export default function MatchingRoute() {
  return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>}>
      <MatchingGame />
    </Suspense>
  )
}
