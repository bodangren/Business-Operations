/** @vitest-environment jsdom */
import fs from "node:fs"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import type { UnitId } from "@/types/glossary"
import { readVideoPage, compareVideoPage } from "../../../../scripts/audit/lesson-video-content.mjs"

const audit = JSON.parse(fs.readFileSync("docs/lesson-video-audit.json", "utf8"))

function renderLesson(key: string) {
  const row = audit.rows.find((entry: { key: string }) => entry.key === key)
  const [unitId, lessonId] = key.split("/")
  const html = renderToStaticMarkup(<StudentLessonShell
    unitId={unitId as UnitId} lessonId={lessonId} lessonNumber={Number(lessonId.slice(-2))}
    unitLabel={unitId} lessonTitle={row.title} unitHref={`/student/${unitId}`}
    sections={row.section === "start" ? [{ id: "start", children: <p>Project task</p> }] : [
      { id: "start", children: <p>Start task</p> }, { id: "learn", children: <p>Worked example</p> },
      { id: "do", children: <p>Workbook task</p> }, { id: "check", children: <p>Exit ticket</p> },
    ]}
  />)
  return { row, html }
}

function mutate(html: string, change: (document: Document) => void) {
  const document = new DOMParser().parseFromString(html, "text/html")
  change(document)
  return document.documentElement.outerHTML
}

describe("independent content comparison and fault detection", () => {
  for (const key of ["unit01/lesson03", "unit02/lesson04", "unit03/lesson04", "unit04/lesson04", "unit05/lesson03", "unit06/lesson03", "unit07/lesson04", "unit08/lesson04"]) {
    it(`accepts the reviewed page and rejects missing, extra, and wrong video content in ${key}`, () => {
      const { row, html } = renderLesson(key)
      expect(compareVideoPage(readVideoPage(html), row)).toEqual([])
      const missing = mutate(html, (document) => document.querySelector("[data-video-resource]")!.remove())
      expect(compareVideoPage(readVideoPage(missing), row).length).toBeGreaterThan(0)
      const extra = mutate(html, (document) => {
        const article = document.querySelector("[data-video-resource]")!
        article.after(article.cloneNode(true))
      })
      expect(compareVideoPage(readVideoPage(extra), row).length).toBeGreaterThan(0)
      const wrong = mutate(html, (document) => {
        const frame = document.querySelector("[data-video-resource] iframe")!
        frame.setAttribute("src", frame.getAttribute("src")!.replace(/embed\/[\w-]{11}/, "embed/aaaaaaaaaaa"))
      })
      expect(compareVideoPage(readVideoPage(wrong), row).some((error: string) => error.includes("videoId"))).toBe(true)
    })
  }

  it("rejects wrong range, false focus, wrong role, duplicate title, and wrong section", () => {
    const { row, html } = renderLesson("unit03/lesson04")
    for (const change of [
      (document: Document) => {
        const frame = document.querySelector("iframe")!
        frame.setAttribute("src", frame.getAttribute("src")!.replace(/start=\d+/, "start=1"))
      },
      (document: Document) => { document.querySelector("[data-video-focus]")!.textContent = "This clip teaches the full Excel workbook." },
      (document: Document) => { document.querySelector("[data-accounting-review]")!.setAttribute("data-excel-review", "") },
      (document: Document) => { const title = document.querySelector("[data-video-resource] h4")!; title.after(title.cloneNode(true)) },
      (document: Document) => { document.getElementById("do")!.append(document.getElementById("video-review")!) },
    ]) expect(compareVideoPage(readVideoPage(mutate(html, change)), row).length).toBeGreaterThan(0)
  })

  it("rejects missing or wrong earlier-lesson links on a milestone page", () => {
    const { row, html } = renderLesson("unit08/lesson09")
    expect(compareVideoPage(readVideoPage(html), row)).toEqual([])
    const missing = mutate(html, (document) => document.querySelector("[data-lesson-review]")!.remove())
    expect(compareVideoPage(readVideoPage(missing), row).length).toBeGreaterThan(0)
    const wrong = mutate(html, (document) => document.querySelector("[data-lesson-review] a")!.setAttribute("href", "/student/unit01/lesson01"))
    expect(compareVideoPage(readVideoPage(wrong), row).length).toBeGreaterThan(0)
  })

  it("rejects an unplanned embed on a lesson with no suitable video", () => {
    const { row, html } = renderLesson("unit04/lesson02")
    expect(compareVideoPage(readVideoPage(html), row)).toEqual([])
    const extra = mutate(html, (document) => {
      const frame = document.createElement("iframe")
      frame.src = "https://www.youtube-nocookie.com/embed/W6JMFsVAzJI"
      document.getElementById("learn")!.append(frame)
    })
    expect(compareVideoPage(readVideoPage(extra), row).some((error: string) => error.includes("unaccounted"))).toBe(true)
  })
})
