import fs from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import ts from "typescript"
import { getSectionForLegacyPhase } from "@/lib/student-lesson"

const STUDENT_APP = path.join(process.cwd(), "src", "app", "student")
const STUDENT_COMPONENTS = path.join(process.cwd(), "src", "components", "student")

const CHECK_TICKET_MIN = 3
const CHECK_TICKET_MAX = 5

interface SourceFile {
  path: string
  relative: string
  text: string
}

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return [full]
  })
}

function collectTsx(dir: string): SourceFile[] {
  return walk(dir)
    .filter((file) => file.endsWith(".tsx"))
    .filter((file) => !file.split(path.sep).includes("__tests__"))
    .map((file) => ({
      path: file,
      relative: path.relative(process.cwd(), file),
      text: fs.readFileSync(file, "utf8"),
    }))
}

function lessonDirectories(): { unitId: string; lessonId: string; dir: string }[] {
  return fs
    .readdirSync(STUDENT_APP, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^unit\d+$/.test(entry.name))
    .flatMap((unit) =>
      fs
        .readdirSync(path.join(STUDENT_APP, unit.name), { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && /^lesson\d+$/.test(entry.name))
        .map((lesson) => ({
          unitId: unit.name,
          lessonId: lesson.name,
          dir: path.join(STUDENT_APP, unit.name, lesson.name),
        })),
    )
}

function phaseContentFiles(unitId: string, lessonId: string, phase: number): SourceFile {
  const file = path.join(STUDENT_APP, unitId, lessonId, `phase-${phase}`, "PhaseContent.tsx")
  return {
    path: file,
    relative: path.relative(process.cwd(), file),
    text: fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "",
  }
}

function countComprehensionChecks(text: string): number {
  return (text.match(/<ComprehensionCheck\b/g) ?? []).length
}

function resolveQuestionCount(text: string, filePath: string): number | null {
  const source = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)

  const findVariableInitializer = (name: string): ts.Expression | null => {
    let found: ts.Expression | null = null
    const visit = (node: ts.Node) => {
      if (found) return
      if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name) {
        if (node.initializer) found = node.initializer
        return
      }
      ts.forEachChild(node, visit)
    }
    visit(source)
    return found
  }

  const resolve = (node: ts.Expression): number | null => {
    if (ts.isArrayLiteralExpression(node)) {
      let total = 0
      for (const element of node.elements) {
        const count = ts.isSpreadElement(element) ? resolve(element.expression) : resolve(element)
        if (count === null) return null
        total += count
      }
      return total
    }
    if (ts.isObjectLiteralExpression(node)) return 1
    if (ts.isIdentifier(node)) {
      const initializer = findVariableInitializer(node.text)
      return initializer ? resolve(initializer) : null
    }
    const expressionText = node.getText(source)
    const slices = [...expressionText.matchAll(/\.slice\(\s*(\d+)\s*,\s*(\d+)\s*\)/g)]
    if (slices.length > 0) {
      const [, start, end] = slices[slices.length - 1]
      return Number(end) - Number(start)
    }
    const draw = expressionText.match(/draw\w+\(\s*(\d+)/)
    if (draw) return Number(draw[1])
    return null
  }

  let questions: ts.Expression | null = null
  const visit = (node: ts.Node) => {
    if (questions) return
    if (
      ts.isJsxAttribute(node) &&
      node.name.getText(source) === "questions" &&
      node.initializer &&
      ts.isJsxExpression(node.initializer)
    ) {
      questions = node.initializer.expression ?? null
      return
    }
    ts.forEachChild(node, visit)
  }
  visit(source)

  return questions ? resolve(questions) : null
}

describe("student assessment policy", () => {
  it("does not render ReflectionJournal on any student lesson or review route", () => {
    const sources = [...collectTsx(STUDENT_APP), ...collectTsx(STUDENT_COMPONENTS)]
    const offenders = sources
      .filter((source) => source.text.includes("ReflectionJournal"))
      .map((source) => source.relative)
    expect(offenders).toEqual([])
  })

  it("maps phases 1-4 onto Start, Learn, and Do", () => {
    expect(getSectionForLegacyPhase(1)).toBe("start")
    expect(getSectionForLegacyPhase(2)).toBe("learn")
    expect(getSectionForLegacyPhase(3)).toBe("do")
    expect(getSectionForLegacyPhase(4)).toBe("do")
  })

  it("does not render ComprehensionCheck in phase 1-4 content", () => {
    const offenders: string[] = []
    for (const { unitId, lessonId } of lessonDirectories()) {
      for (const phase of [1, 2, 3, 4]) {
        const source = phaseContentFiles(unitId, lessonId, phase)
        if (countComprehensionChecks(source.text) > 0) offenders.push(source.relative)
      }
    }
    expect(offenders).toEqual([])
  })

  it("does not render ComprehensionCheck in the launch hook component", () => {
    const launchHook = path.join(STUDENT_COMPONENTS, "Lesson01Phase1.tsx")
    const text = fs.readFileSync(launchHook, "utf8")
    expect(countComprehensionChecks(text)).toBe(0)
  })

  it("gives every standard lesson exactly one Check exit ticket", () => {
    const violations: string[] = []
    for (const { unitId, lessonId, dir } of lessonDirectories()) {
      const lessonNumber = Number(lessonId.replace("lesson", ""))
      if (lessonNumber < 1 || lessonNumber > 6) continue

      const contentFiles = walk(dir).filter(
        (file) => file.endsWith("PhaseContent.tsx") || file.endsWith("LessonContent.tsx"),
      )
      const total = contentFiles.reduce(
        (sum, file) => sum + countComprehensionChecks(fs.readFileSync(file, "utf8")),
        0,
      )
      if (total !== 1) violations.push(`${unitId}/${lessonId}: ${total}`)
    }
    expect(violations).toEqual([])
  })

  it("keeps every Check exit ticket between three and five questions", () => {
    const violations: string[] = []
    for (const { unitId, lessonId } of lessonDirectories()) {
      for (const phase of [5, 6]) {
        const source = phaseContentFiles(unitId, lessonId, phase)
        if (!source.text) continue
        const checks = countComprehensionChecks(source.text)
        if (checks === 0) continue
        if (checks > 1) {
          violations.push(`${source.relative}: ${checks} exit tickets`)
          continue
        }
        const count = resolveQuestionCount(source.text, source.path)
        if (count === null || count < CHECK_TICKET_MIN || count > CHECK_TICKET_MAX) {
          violations.push(`${source.relative}: ${count ?? "unresolved"} questions`)
        }
      }
    }
    expect(violations).toEqual([])
  })
})
