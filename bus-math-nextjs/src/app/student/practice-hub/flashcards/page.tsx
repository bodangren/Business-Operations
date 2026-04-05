import { Suspense } from "react"
import FlashcardPlayer from "@/components/student/FlashcardPlayer"

export default function FlashcardsRoute() {
  return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>}>
      <FlashcardPlayer />
    </Suspense>
  )
}
