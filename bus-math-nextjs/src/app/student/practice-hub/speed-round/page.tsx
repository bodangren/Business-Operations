import { Suspense } from "react"
import SpeedRoundGame from "@/components/student/SpeedRoundGame"

export default function SpeedRoundRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
      <SpeedRoundGame />
    </Suspense>
  )
}
