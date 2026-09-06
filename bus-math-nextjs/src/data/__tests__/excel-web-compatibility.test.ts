import { readdirSync, readFileSync } from "node:fs"
import { extname, join, relative } from "node:path"
import { describe, expect, it } from "vitest"

const PROJECT_ROOT = process.cwd()
const SEARCH_ROOTS = [join(PROJECT_ROOT, "src"), join(PROJECT_ROOT, "public", "resources")]
const SEARCH_EXTENSIONS = new Set([".json", ".md", ".ts", ".tsx"])
const THIS_TEST = "src/data/__tests__/excel-web-compatibility.test.ts"
const LESSON_SIX_TUTORIAL = join(PROJECT_ROOT, "public", "resources", "unit02-lesson06-tutorial.md")
const FORBIDDEN_PATTERNS = [
  new RegExp("\\b" + "v" + "ba\\b", "i"),
  new RegExp("\\b" + "macro" + "s?\\b", "i"),
  new RegExp("\\." + "xls" + "m\\b", "i"),
  new RegExp("visual basic for " + "applications", "i"),
  new RegExp("visual " + "basic", "i"),
  new RegExp("\\b(?:action|no-code) " + "recorder\\b", "i"),
  new RegExp("record " + "actions?", "i"),
  new RegExp("start with (?:the )?" + "recorder", "i"),
]

function collectTextFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)

    if (entry.isDirectory()) {
      return collectTextFiles(path)
    }

    return SEARCH_EXTENSIONS.has(extname(entry.name)) ? [path] : []
  })
}

describe("Excel for the web course content", () => {
  it("does not require unsupported code or recorded automation", () => {
    const violations = SEARCH_ROOTS.flatMap(collectTextFiles)
      .filter((path) => relative(PROJECT_ROOT, path) !== THIS_TEST)
      .flatMap((path) => {
        const content = readFileSync(path, "utf8")
        const lines = content.split("\n")

        return lines.flatMap((line, index) =>
          FORBIDDEN_PATTERNS.some((pattern) => pattern.test(line))
            ? [`${relative(PROJECT_ROOT, path)}:${index + 1}`]
            : [],
        )
      })

    expect(violations).toEqual([])
  })

  it("explains how the period selector links to all five scenario inputs", () => {
    const tutorial = readFileSync(LESSON_SIX_TUTORIAL, "utf8")

    expect(tutorial).toContain("Inputs!B5:B9")
    expect(tutorial).toContain("Scenarios!$B$5:$F$7")
    expect(tutorial).toContain("MATCH(SelectedPeriod,Scenarios!$A$5:$A$7,0)")
  })
})
