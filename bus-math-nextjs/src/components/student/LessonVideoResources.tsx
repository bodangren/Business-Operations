import { getLessonVideoResources, type LessonVideo } from "@/data/lesson-video-resources"
import type { UnitId } from "@/types/glossary"

interface LessonVideoResourcesProps {
  unitId: UnitId
  lessonNumber: number
}

function timeLabel(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
}

function VideoReview({ video }: { video: LessonVideo }) {
  const parameters = new URLSearchParams({ rel: "0" })
  if (video.startSeconds !== undefined) parameters.set("start", String(video.startSeconds))
  if (video.endSeconds !== undefined) parameters.set("end", String(video.endSeconds))
  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}${
    video.startSeconds !== undefined ? `&t=${video.startSeconds}s` : ""
  }`

  return (
    <article className="space-y-3">
      <div className="space-y-1">
        <h4 className="font-semibold">{video.title}</h4>
        <p className="text-xs text-foreground/80">
          {video.channel}
          {video.startSeconds !== undefined ? ` • Start at ${timeLabel(video.startSeconds)}` : ""}
          {video.endSeconds !== undefined ? ` • Stop at ${timeLabel(video.endSeconds)}` : ""}
        </p>
        <p className="text-sm text-foreground/90">{video.focus}</p>
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
 * Show matched accounting videos and optional Excel review inside Learn.
 * @param props - The unit and lesson used to select videos.
 * @returns A video review block, or no content when no suitable video is selected.
 */
export default function LessonVideoResources({ unitId, lessonNumber }: LessonVideoResourcesProps) {
  const selection = getLessonVideoResources(unitId, lessonNumber)
  if (!selection || (selection.accounting.length === 0 && selection.excel.length === 0)) return null

  return (
    <div className="space-y-4 border-t border-border/60 pt-4">
      <h3 className="text-lg font-semibold">Video review</h3>
      {selection.accounting.map((video, index) => (
        <details key={`${video.videoId}-${video.startSeconds ?? 0}`} open={lessonNumber <= 4 && index === 0} className="space-y-3">
          <summary className="cursor-pointer text-sm font-medium text-primary">
            {index === 0 ? "Accounting review" : "More accounting support"}: {video.title}
          </summary>
          <div className="pt-2"><VideoReview video={video} /></div>
        </details>
      ))}
      {selection.excel.length > 0 && (
        <details className="space-y-3">
          <summary className="cursor-pointer text-sm font-medium text-primary">Optional Excel review</summary>
          <p className="pt-2 text-sm text-foreground/90">
            Missed class? Use these videos to review the Excel steps. Follow the class tutorial to build your workbook.
          </p>
          <div className="space-y-6">
            {selection.excel.map((video) => <VideoReview key={video.videoId} video={video} />)}
          </div>
        </details>
      )}
    </div>
  )
}
