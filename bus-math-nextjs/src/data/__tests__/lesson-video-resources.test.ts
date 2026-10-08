import fs from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import { getLessonVideoResources } from "../lesson-video-resources"
import type { UnitId } from "@/types/glossary"

// This file was frozen after content review and before the production map changed.
// Never derive these expectations from getLessonVideoResources.
const audit = JSON.parse(fs.readFileSync(path.resolve("docs/lesson-video-audit.json"), "utf8"))

describe("reviewed decisions for all 80 lessons", () => {
  for (const row of audit.rows) {
    it(`implements the reviewed content for ${row.key}`, () => {
      const [unit, lesson] = row.key.split("/")
      const actual = getLessonVideoResources(unit as UnitId, Number(lesson.slice(-2)))
      expect({
        accounting: actual?.accounting ?? [],
        excel: actual?.excel ?? [],
        relatedLessons: actual && "relatedLessons" in actual ? actual.relatedLessons : [],
        note: actual && "note" in actual ? actual.note : "",
      }).toEqual({
        accounting: row.accounting,
        excel: row.excel,
        relatedLessons: row.relatedLessons,
        note: row.note,
      })
    })
  }
})
