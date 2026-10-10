import fs from "node:fs"
import path from "node:path"
import { createHash } from "node:crypto"
import ts from "typescript"

// Run from bus-math-nextjs. Inventory does not certify calculation correctness.
const root = process.cwd()
const rows = []
const sourceCache = new Map()

function readSource(relativePath) {
  if (!sourceCache.has(relativePath)) {
    const text = fs.readFileSync(path.join(root, relativePath), "utf8")
    sourceCache.set(relativePath, {
      text,
      ast: ts.createSourceFile(relativePath, text, ts.ScriptTarget.Latest, true),
    })
  }
  return sourceCache.get(relativePath)
}

function resolveImport(from, specifier) {
  const base = specifier.startsWith("@/")
    ? path.join(root, "src", specifier.slice(2))
    : specifier.startsWith(".")
      ? path.resolve(root, path.dirname(from), specifier)
      : null
  if (!base) return null
  for (const suffix of ["", ".ts", ".tsx", "/index.ts", "/index.tsx"]) {
    const candidate = base + suffix
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return path.relative(root, candidate)
    }
  }
  return null
}

function dependencies(startFiles) {
  const visited = new Set()
  const pending = [...startFiles]
  while (pending.length) {
    const file = pending.pop()
    if (visited.has(file) || !/\.tsx?$/.test(file)) continue
    // These files provide presentation and navigation, not practice answers.
    if (/^src\/components\/(ui|student)\//.test(file)) continue
    if (/^src\/lib\/(utils|student-navigation|lesson-sequence)\.ts$/.test(file)) continue
    visited.add(file)
    for (const statement of readSource(file).ast.statements) {
      if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier)) continue
      const resolved = resolveImport(file, statement.moduleSpecifier.text)
      if (resolved) pending.push(resolved)
    }
  }
  return [...visited].sort()
}

for (let unit = 1; unit <= 8; unit += 1) {
  for (let lesson = 1; lesson <= 10; lesson += 1) {
    const unitId = `unit${String(unit).padStart(2, "0")}`
    const lessonId = `lesson${String(lesson).padStart(2, "0")}`
    const directory = `src/app/student/${unitId}/${lessonId}`
    const route = `${directory}/page.tsx`
    if (!fs.existsSync(path.join(root, route))) throw new Error(`Missing route: ${route}`)
    const routeSource = readSource(route).text
    const phaseSources = [3, 4].map(phase => `${directory}/phase-${phase}/PhaseContent.tsx`)
      .filter(file => fs.existsSync(path.join(root, file)) && routeSource.includes(`phase-${file.includes("phase-3") ? 3 : 4}/PhaseContent`))
    const sources = phaseSources.length ? phaseSources : [route]
    rows.push({
      unit: unitId,
      lesson: lessonId,
      route,
      kind: phaseSources.length ? "guided-and-independent" : "single-page-activity",
      practiceSources: sources,
      dependencies: dependencies(sources),
      status: "inventoried; see reviewer report for verification",
    })
  }
}

const files = [...new Set(rows.flatMap(row => row.dependencies))].sort().map(file => {
  const { text } = readSource(file)
  return {
    file,
    sha256: createHash("sha256").update(text).digest("hex"),
    randomInputs: /Math\.random\(/.test(text),
    numericAnswerParsing: /parseFloat\(|parseInt\(/.test(text),
    spreadsheetPreview: /SpreadsheetWrapper/.test(text),
  }
})
const result = { scope: "Units 01–08, lessons 01–10; guided and independent practice", lessons: rows, files }
const output = process.argv[2]
if (output) {
  fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true })
  fs.writeFileSync(output, JSON.stringify(result, null, 2) + "\n")
}
console.log(JSON.stringify({ lessons: rows.length, practiceSources: rows.reduce((total, row) => total + row.practiceSources.length, 0), dependencyFiles: files.length, randomInputFiles: files.filter(file => file.randomInputs).length, output: output ?? null }))
