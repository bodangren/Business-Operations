import { describe, expect, it } from "vitest"
import { getLessonVideoResources } from "../lesson-video-resources"
import type { UnitId } from "@/types/glossary"

describe("lesson video selections", () => {
  it("uses Accounting Stuff for a covered concept and the backup for gross and net", () => {
    expect(getLessonVideoResources("unit01", 2)?.accounting[0].channel).toBe("Accounting Stuff")
    expect(getLessonVideoResources("unit05", 2)?.accounting[0].channel).toBe("The Finance Storyteller")
  })

  it("provides only public videos with valid chapter ranges", () => {
    for (let unit = 1; unit <= 8; unit += 1) {
      for (let lesson = 1; lesson <= 10; lesson += 1) {
        const selection = getLessonVideoResources(`unit0${unit}` as UnitId, lesson)
        for (const video of [...(selection?.accounting ?? []), ...(selection?.excel ?? [])]) {
          expect(video.videoId).toMatch(/^[\w-]{11}$/)
          expect(video.videoId).not.toBe("p3X0r1mq-X4") // Members-only tutorial.
          expect(video.focus.length).toBeGreaterThan(0)
          expect(video.startSeconds ?? 0).toBeGreaterThanOrEqual(0)
          if (video.endSeconds !== undefined) {
            expect(video.endSeconds).toBeGreaterThan(video.startSeconds ?? 0)
          }
        }
      }
    }
  })

  it("does not add new video tasks to project milestones or invent source coverage", () => {
    expect(getLessonVideoResources("unit01", 10)).toBeUndefined()
    expect(getLessonVideoResources("unit04", 2)).toBeUndefined()
    expect(getLessonVideoResources("unit06", 5)).toBeUndefined()
    expect(getLessonVideoResources("unit08", 6)?.accounting[0].focus).toMatch(/journal entries/i)
  })
})
