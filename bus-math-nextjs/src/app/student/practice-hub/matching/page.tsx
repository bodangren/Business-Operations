import { Suspense } from "react"
import MatchingGame from "@/components/student/MatchingGame"

export default function MatchingRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
      <MatchingGame />
    </Suspense>
  )
}
