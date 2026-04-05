import { Suspense } from "react"
import SpeedRoundGame from "@/components/student/SpeedRoundGame"

export default function SpeedRoundRoute() {
  return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>}>
      <SpeedRoundGame />
    </Suspense>
  )
}
