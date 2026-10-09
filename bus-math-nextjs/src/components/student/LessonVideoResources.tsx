import { getLessonVideoResources, type LessonVideo } from "@/data/lesson-video-resources"
import type { UnitId } from "@/types/glossary"
import Link from "next/link"

interface LessonVideoResourcesProps {
  unitId: UnitId
  lessonNumber: number
}

function timeLabel(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
}

function VideoReview({ video, showTopic = false }: { video: LessonVideo; showTopic?: boolean }) {
  const parameters = new URLSearchParams({ rel: "0" })
  if (video.startSeconds !== undefined) parameters.set("start", String(video.startSeconds))
  if (video.endSeconds !== undefined) parameters.set("end", String(video.endSeconds))
  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}${
    video.startSeconds !== undefined ? `&t=${video.startSeconds}s` : ""
  }`

  return (
    <article data-video-resource={video.resourceId} className="space-y-3">
      <div className="space-y-1">
        {showTopic && <p data-video-topic className="text-sm font-medium">{video.topic}</p>}
        <h4 className="font-semibold">{video.title}</h4>
        <p data-video-time className="text-xs text-foreground/80">
          {video.channel}
          {video.startSeconds !== undefined ? ` • Start at ${timeLabel(video.startSeconds)}` : ""}
          {video.endSeconds !== undefined ? ` • Stop at ${timeLabel(video.endSeconds)}` : ""}
        </p>
        <p data-video-focus className="text-sm text-foreground/90">{video.focus}</p>
      </div>
      <div className="aspect-video overflow-hidden rounded-md bg-muted print:hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}?${parameters}`}
          title={`${video.title} — ${video.channel}${
            video.startSeconds !== undefined ? ` — ${timeLabel(video.startSeconds)}` : ""
          }`}
          className="h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium text-primary underline underline-offset-4">
        Watch on YouTube <span className="sr-only">: {video.title} (opens in a new tab)</span>
      </a>
    </article>
  )
}

/**
 * Show inspected segments and links to earlier lesson reviews.
 * @param props - The unit and lesson used to select videos.
 * @returns A video review block, or no content when no suitable video is selected.
 */
export default function LessonVideoResources({ unitId, lessonNumber }: LessonVideoResourcesProps) {
  const selection = getLessonVideoResources(unitId, lessonNumber)
  if (!selection) return null

  return (
    <div id="video-review" className="scroll-mt-20 space-y-4">
      <h3 className="text-lg font-semibold">Video review</h3>
      {selection.note && <p data-video-note className="text-sm text-foreground/90">{selection.note}</p>}
      {selection.accounting.map((video, index) => (
        <details open key={video.resourceId} data-accounting-review className="space-y-3">
          <summary className="cursor-pointer text-sm font-medium text-primary">
            {index === 0 ? "Accounting review" : "Accounting support"}: {video.topic}
          </summary>
          <div className="pt-2"><VideoReview video={video} /></div>
        </details>
      ))}
      {selection.excel.length > 0 && (
        <details open data-excel-review className="space-y-3">
          <summary className="cursor-pointer text-sm font-medium text-primary">Optional Excel review</summary>
          <p className="pt-2 text-sm text-foreground/90">
            Missed class? Use these videos to review the Excel steps. Follow the class tutorial to build your workbook.
          </p>
          <div className="space-y-6">
            {selection.excel.map((video) => <VideoReview key={video.resourceId} video={video} showTopic />)}
          </div>
        </details>
      )}
      {selection.relatedLessons.length > 0 && (
        <details open data-earlier-reviews className="space-y-3">
          <summary className="cursor-pointer text-sm font-medium text-primary">Review an earlier lesson</summary>
          <p className="pt-2 text-sm text-foreground/90">Use these reviews if you need help with a skill from an earlier lesson.</p>
          <ul className="space-y-3">
            {selection.relatedLessons.map((lesson) => (
              <li data-lesson-review key={`${lesson.unitId}-${lesson.lessonNumber}`}>
                <Link
                  href={`/student/${lesson.unitId}/lesson${String(lesson.lessonNumber).padStart(2, "0")}#video-review`}
                  className="text-sm font-medium text-primary underline underline-offset-4"
                >
                  Unit {Number(lesson.unitId.slice(-2))}, Lesson {lesson.lessonNumber}: {lesson.topic}
                </Link>
                <p className="text-sm text-foreground/90">{lesson.note}</p>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}
