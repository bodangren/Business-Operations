import { JSDOM } from "jsdom"

const text = (element) => element?.textContent?.trim() ?? ""
const stamp = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
// Next.js adds the site base path and a slash before the lesson fragment.
// Keep the unit, lesson, and fragment unchanged for the content comparison.
const route = (href) => href
  ?.replace(/^\/Business-Operations(?=\/)/, "")
  .replace(/^(\/student\/unit\d{2}\/lesson\d{2})\/(?=#)/, "$1") ?? ""

/**
 * Read video content from the actual rendered lesson HTML.
 * @param html - The complete lesson HTML.
 * @returns The visible resource text, player ranges, review links, and placement.
 */
export function readVideoPage(html) {
  const document = new JSDOM(html).window.document
  const blocks = [...document.querySelectorAll('[id="video-review"]')]
  const accounting = []
  const excel = []
  for (const article of document.querySelectorAll("[data-video-resource]")) {
    const frame = article.querySelector("iframe")
    const src = frame?.getAttribute("src") ?? ""
    const url = new URL(src || "https://invalid.example")
    const isExcel = Boolean(article.closest("[data-excel-review]"))
    const summary = text(article.closest("details")?.querySelector("summary"))
    const row = {
      resourceId: article.getAttribute("data-video-resource"),
      videoId: url.pathname.split("/").pop(),
      title: text(article.querySelector("h4")),
      topic: isExcel ? text(article.querySelector("[data-video-topic]")) : summary.replace(/^Accounting (review|support): /, ""),
      focus: text(article.querySelector("[data-video-focus]")),
      time: text(article.querySelector("[data-video-time]")),
      startSeconds: Number(url.searchParams.get("start")),
      endSeconds: Number(url.searchParams.get("end")),
      src,
      watch: article.querySelector('a[target="_blank"]')?.getAttribute("href"),
      frameTitle: frame?.getAttribute("title"),
      section: article.closest("section[id]")?.id,
      headingCount: article.querySelectorAll("h4").length,
      collapsed: !article.closest("details")?.hasAttribute("open"),
    }
    ;(isExcel ? excel : accounting).push(row)
  }
  const relatedLessons = [...document.querySelectorAll("[data-lesson-review]")].map((item) => ({
    href: route(item.querySelector("a")?.getAttribute("href")),
    label: text(item.querySelector("a")),
    note: text(item.querySelector("p")),
    section: item.closest("section[id]")?.id,
  }))
  return {
    accounting, excel, relatedLessons,
    note: text(document.querySelector("[data-video-note]")),
    blockCount: blocks.length,
    section: blocks[0]?.closest("section[id]")?.id,
    resourceAtSectionStart: Boolean(blocks[0] && blocks[0].closest("section[id]")?.children[1] === blocks[0]),
    closedReviewCount: document.querySelectorAll("#video-review details:not([open])").length,
    existingVideoFrames: [...document.querySelectorAll('iframe[src*="youtube-nocookie.com"]')].filter((frame) => !frame.closest("[data-video-resource]")).map((frame) => ({src: frame.getAttribute("src"), title: frame.getAttribute("title"), section: frame.closest("section[id]")?.id})),
    youtubeFrames: document.querySelectorAll('iframe[src*="youtube-nocookie.com"]').length,
    excelDisclosure: text(document.querySelector("[data-excel-review] > summary")),
    visibleSections: [...document.querySelectorAll("section[id]")].map((section) => section.id),
  }
}

/**
 * Compare rendered page content with an independently reviewed decision.
 * @param actual - Content read from the rendered page.
 * @param expected - The frozen review row for this lesson.
 * @returns All content differences, with the affected resource and field.
 */
export function compareVideoPage(actual, expected) {
  const errors = []
  const check = (field, value, wanted) => {
    if (JSON.stringify(value) !== JSON.stringify(wanted)) errors.push(`${expected.key}: ${field}: expected ${JSON.stringify(wanted)}; got ${JSON.stringify(value)}`)
  }
  const hasResources = expected.accounting.length + expected.excel.length + expected.relatedLessons.length > 0
  check("block count", actual.blockCount, hasResources ? 1 : 0)
  check("placement", actual.section, hasResources ? expected.section : undefined)
  check("position before lesson instruction", actual.resourceAtSectionStart, hasResources && expected.resourcesAtSectionStart)
  check("closed reviews", actual.closedReviewCount, 0)
  check("section structure", actual.visibleSections, expected.section === "start" ? ["start"] : ["start", "learn", "do", "check"])
  check("unaccounted YouTube frames", actual.youtubeFrames, expected.accounting.length + expected.excel.length + (expected.existingVideoFrames?.length ?? 0))
  check("existing launch interviews", actual.existingVideoFrames, expected.existingVideoFrames ?? [])
  check("note", actual.note, expected.note)
  check("Excel role", actual.excelDisclosure, expected.excel.length ? "Optional Excel review" : "")
  for (const kind of ["accounting", "excel"]) {
    check(`${kind} resource count`, actual[kind].length, expected[kind].length)
    expected[kind].forEach((wanted, index) => {
      const row = actual[kind][index]
      if (!row) return
      for (const field of ["resourceId", "videoId", "title", "topic", "focus", "startSeconds", "endSeconds"]) check(`${kind}[${index}].${field}`, row[field], wanted[field])
      check(`${kind}[${index}].time`, row.time, `${wanted.channel} • Start at ${stamp(wanted.startSeconds)} • Stop at ${stamp(wanted.endSeconds)}`)
      check(`${kind}[${index}].src`, row.src, `https://www.youtube-nocookie.com/embed/${wanted.videoId}?rel=0&start=${wanted.startSeconds}&end=${wanted.endSeconds}`)
      check(`${kind}[${index}].watch`, row.watch, `https://www.youtube.com/watch?v=${wanted.videoId}&t=${wanted.startSeconds}s`)
      check(`${kind}[${index}].frameTitle`, row.frameTitle, `${wanted.title} — ${wanted.channel} — ${stamp(wanted.startSeconds)}`)
      check(`${kind}[${index}].section`, row.section, expected.section)
      check(`${kind}[${index}].title count`, row.headingCount, 1)
      check(`${kind}[${index}].collapsed`, row.collapsed, !expected.resourcesExpanded)
    })
  }
  check("earlier reviews", actual.relatedLessons, expected.relatedLessons.map((lesson) => ({
    href: `/student/${lesson.unitId}/lesson${String(lesson.lessonNumber).padStart(2, "0")}#video-review`,
    label: `Unit ${Number(lesson.unitId.slice(-2))}, Lesson ${lesson.lessonNumber}: ${lesson.topic}`,
    note: lesson.note,
    section: expected.section,
  })))
  return errors
}
