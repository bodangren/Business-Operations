import { Suspense } from "react"
import FlashcardPlayer from "@/components/student/FlashcardPlayer"

export default function FlashcardsRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
      <FlashcardPlayer />
    </Suspense>
  )
}
