import * as path from "path"
import * as fs from "fs"
import ts from "typescript"

const REPO_ROOT = path.resolve(process.cwd(), "bus-math-nextjs")

type Severity = "blocker" | "content-drift" | "route-drift" | "informational"

interface Mismatch {
  unit: string
  lesson?: number
  field: string
  severity: Severity
  studentValue: string | number | null
  teacherValue: string | number | null
  note?: string
}

interface AuditResult {
  unit: string
  passed: boolean
  mismatches: Mismatch[]
  summary: { blockers: number; contentDrift: number; routeDrift: number; informational: number }
}

type LessonData = {
  id: string
  title: string
  sequence: number
  unitId: string
  learningObjectives?: string[]
  keyConcepts?: string[]
  durationEstimateMinutes?: number
  rationale?: string
  status?: string
}

type Phase = {
  id: string
  phaseName: string
  sequence: number
  description?: string
}

type Milestone = {
  id: string
  day: number
  title: string
  description: string
  criteria: string[]
}

type RubricCriteria = {
  name: string
  weight: string
  exemplary: string
  proficient: string
  developing: string
}

// ─── TypeScript Compiler API Helpers ─────────────────────────────────────────

function parseSourceFile(filePath: string): ts.SourceFile {
  const content = fs.readFileSync(filePath, "utf8")
  return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true)
}

function resolveExpression(node: ts.Node): ts.Node {
  if (ts.isAsExpression(node)) return resolveExpression(node.expression)
  if (ts.isParenthesizedExpression(node)) return resolveExpression(node.expression)
  return node
}

function extractString(node: ts.Node): string | null {
  const resolved = resolveExpression(node)
  if (ts.isStringLiteral(resolved) || ts.isNoSubstitutionTemplateLiteral(resolved)) {
    return resolved.text
  }
  return null
}

function extractNumber(node: ts.Node): number | null {
  const resolved = resolveExpression(node)
  if (ts.isNumericLiteral(resolved)) {
    return parseInt(resolved.text, 10)
  }
  if (ts.isPrefixUnaryExpression(resolved) && resolved.operator === ts.SyntaxKind.MinusToken && ts.isNumericLiteral(resolved.operand)) {
    return -parseInt(resolved.operand.text, 10)
  }
  return null
}

function extractBoolean(node: ts.Node): boolean | null {
  const resolved = resolveExpression(node)
  if (resolved.kind === ts.SyntaxKind.TrueKeyword) return true
  if (resolved.kind === ts.SyntaxKind.FalseKeyword) return false
  return null
}

function extractArrayLiteral(node: ts.Node): ts.Node[] {
  const resolved = resolveExpression(node)
  if (ts.isArrayLiteralExpression(resolved)) {
    return resolved.elements.slice()
  }
  return []
}

function extractStringArray(node: ts.Node): string[] {
  return extractArrayLiteral(node).map(extractString).filter((s): s is string => s !== null)
}

function getObjectPropertyNode(objectNode: ts.Node, key: string): ts.Node | undefined {
  const resolved = resolveExpression(objectNode)
  if (!ts.isObjectLiteralExpression(resolved)) return undefined
  for (const prop of resolved.properties) {
    if (ts.isPropertyAssignment(prop)) {
      const name = getPropertyName(prop)
      if (name === key) return prop.initializer
    }
    if (ts.isShorthandPropertyAssignment(prop)) {
      if (prop.name.text === key) return prop.name
    }
  }
  return undefined
}

function getObjectPropertyStringValue(objectNode: ts.Node, key: string): string | null {
  const value = getObjectPropertyNode(objectNode, key)
  return value ? extractString(value) : null
}

function getObjectPropertyNumberValue(objectNode: ts.Node, key: string): number | null {
  const value = getObjectPropertyNode(objectNode, key)
  return value ? extractNumber(value) : null
}

function getPropertyName(prop: ts.PropertyAssignment | ts.ShorthandPropertyAssignment): string | undefined {
  if (ts.isIdentifier(prop.name)) return prop.name.text
  if (ts.isStringLiteral(prop.name)) return prop.name.text
  if (ts.isNumericLiteral(prop.name)) return prop.name.text
  if (ts.isComputedPropertyName(prop.name)) {
    if (ts.isStringLiteral(prop.name.expression)) return prop.name.expression.text
  }
  return undefined
}

function findExportedVariable(sourceFile: ts.SourceFile, namePattern: RegExp): ts.VariableDeclaration | undefined {
  let found: ts.VariableDeclaration | undefined
  ts.forEachChild(sourceFile, (node) => {
    if (found) return
    if (!ts.isVariableStatement(node)) return
    if (!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export)) return
    for (const decl of node.declarationList.declarations) {
      if (ts.isIdentifier(decl.name) && namePattern.test(decl.name.text)) {
        found = decl
        return
      }
    }
  })
  return found
}

// ─── Data Loaders ────────────────────────────────────────────────────────────

function loadStudentLessonData(unit: number): { lessons: LessonData[]; phasesByLesson: Map<number, Phase[]> } {
  const lessons: LessonData[] = []
  const phasesByLesson = new Map<number, Phase[]>()
  const unitDir = path.join(REPO_ROOT, `src/app/student/unit${String(unit).padStart(2, "0")}`)

  if (!fs.existsSync(unitDir)) return { lessons, phasesByLesson }

  const lessonDirs = fs.readdirSync(unitDir).filter((d) => /^lesson\d+$/.test(d))

  for (const dir of lessonDirs) {
    const filePath = path.join(unitDir, dir, "lesson-data.ts")
    if (!fs.existsSync(filePath)) continue

    const lessonNum = parseInt(dir.replace("lesson", ""), 10)

    try {
      const sf = parseSourceFile(filePath)

      // Extract lesson data object
      const dataDecl = findExportedVariable(sf, new RegExp(`^lesson${String(lessonNum).padStart(2, "0")}Data$`))
      if (dataDecl?.initializer) {
        const obj = resolveExpression(dataDecl.initializer)
        const id = getObjectPropertyStringValue(obj, "id")
        const title = getObjectPropertyStringValue(obj, "title")
        const sequence = getObjectPropertyNumberValue(obj, "sequence")
        const unitId = getObjectPropertyStringValue(obj, "unitId")
        const duration = getObjectPropertyNumberValue(obj, "durationEstimateMinutes")

        if (id && title && sequence !== null && unitId) {
          lessons.push({
            id,
            title,
            sequence,
            unitId,
            durationEstimateMinutes: duration ?? undefined,
          })
        }
      }

      // Extract phases array
      const phasesDecl = findExportedVariable(sf, new RegExp(`^lesson${String(lessonNum).padStart(2, "0")}Phases$`))
      if (phasesDecl?.initializer) {
        const phases: Phase[] = []
        const elements = extractArrayLiteral(phasesDecl.initializer)
        for (const elem of elements) {
          const phaseName = getObjectPropertyStringValue(elem, "phaseName")
          const sequence = getObjectPropertyNumberValue(elem, "sequence")
          if (phaseName && sequence !== null) {
            phases.push({ id: "", phaseName, sequence })
          }
        }
        phasesByLesson.set(lessonNum, phases)
      }
    } catch {
      // skip malformed file
    }
  }

  return { lessons, phasesByLesson }
}

function loadUnitData(unit: number): { milestones: Milestone[]; rubric: RubricCriteria[] } {
  const unitPath = path.join(REPO_ROOT, `src/data/unit${String(unit).padStart(2, "0")}.ts`)
  if (!fs.existsSync(unitPath)) return { milestones: [], rubric: [] }

  const sf = parseSourceFile(unitPath)
  const dataDecl = findExportedVariable(sf, /^unit\d+Data$/)
  if (!dataDecl?.initializer) return { milestones: [], rubric: [] }

  const unitObj = resolveExpression(dataDecl.initializer)

  // Navigate to assessment.milestones
  const milestones: Milestone[] = []
  const assessmentNode = getObjectPropertyNode(unitObj, "assessment")
  if (assessmentNode) {
    const milestonesNode = getObjectPropertyNode(assessmentNode, "milestones")
    if (milestonesNode) {
      const elements = extractArrayLiteral(milestonesNode)
      for (const elem of elements) {
        const id = getObjectPropertyStringValue(elem, "id")
        const day = getObjectPropertyNumberValue(elem, "day")
        const title = getObjectPropertyStringValue(elem, "title")
        const description = getObjectPropertyStringValue(elem, "description")
        const criteriaNode = getObjectPropertyNode(elem, "criteria")
        const criteria = criteriaNode ? extractStringArray(criteriaNode) : []

        if (id && day !== null && title && description) {
          milestones.push({ id, day, title, description, criteria })
        }
      }
    }
  }

  // Navigate to assessment.rubric
  const rubric: RubricCriteria[] = []
  if (assessmentNode) {
    const rubricNode = getObjectPropertyNode(assessmentNode, "rubric")
    if (rubricNode) {
      const elements = extractArrayLiteral(rubricNode)
      for (const elem of elements) {
        const name = getObjectPropertyStringValue(elem, "name")
        const weight = getObjectPropertyStringValue(elem, "weight")
        const exemplary = getObjectPropertyStringValue(elem, "exemplary")
        const proficient = getObjectPropertyStringValue(elem, "proficient")
        const developing = getObjectPropertyStringValue(elem, "developing")

        if (name && weight && exemplary && proficient && developing) {
          rubric.push({ name, weight, exemplary, proficient, developing })
        }
      }
    }
  }

  return { milestones, rubric }
}

function loadTeacherLessonPlan(unit: number): { dailyLessons: { day: number; title: string; focus: string; duration: string }[]; milestones: Milestone[]; rubric: RubricCriteria[] } {
  const planPath = path.join(REPO_ROOT, `src/data/teacher/unit${String(unit).padStart(2, "0")}-lesson-plan.ts`)
  if (!fs.existsSync(planPath)) return { dailyLessons: [], milestones: [], rubric: [] }

  const sf = parseSourceFile(planPath)
  const dataDecl = findExportedVariable(sf, /^unit\d+LessonPlan$/)
  if (!dataDecl?.initializer) return { dailyLessons: [], milestones: [], rubric: [] }

  const planObj = resolveExpression(dataDecl.initializer)

  // Navigate to learningPlan.dailyLessons
  const dailyLessons: { day: number; title: string; focus: string; duration: string }[] = []
  const learningPlanNode = getObjectPropertyNode(planObj, "learningPlan")
  if (learningPlanNode) {
    const dailyLessonsNode = getObjectPropertyNode(learningPlanNode, "dailyLessons")
    if (dailyLessonsNode) {
      const elements = extractArrayLiteral(dailyLessonsNode)
      for (const elem of elements) {
        const day = getObjectPropertyNumberValue(elem, "day")
        const title = getObjectPropertyStringValue(elem, "title")
        const focus = getObjectPropertyStringValue(elem, "focus")
        const duration = getObjectPropertyStringValue(elem, "duration")

        if (day !== null && title && focus && duration) {
          dailyLessons.push({ day, title, focus, duration })
        }
      }
    }
  }

  // Navigate to assessment.milestones
  const milestones: Milestone[] = []
  const assessmentNode = getObjectPropertyNode(planObj, "assessment")
  if (assessmentNode) {
    const milestonesNode = getObjectPropertyNode(assessmentNode, "milestones")
    if (milestonesNode) {
      const elements = extractArrayLiteral(milestonesNode)
      for (const elem of elements) {
        const day = getObjectPropertyNumberValue(elem, "day")
        const title = getObjectPropertyStringValue(elem, "title")
        const description = getObjectPropertyStringValue(elem, "description")
        const criteriaNode = getObjectPropertyNode(elem, "criteria")
        const criteria = criteriaNode ? extractStringArray(criteriaNode) : []

        if (day !== null && title && description) {
          milestones.push({ id: "", day, title, description, criteria })
        }
      }
    }
  }

  // Navigate to assessment.rubric
  const rubric: RubricCriteria[] = []
  if (assessmentNode) {
    const rubricNode = getObjectPropertyNode(assessmentNode, "rubric")
    if (rubricNode) {
      const elements = extractArrayLiteral(rubricNode)
      for (const elem of elements) {
        const name = getObjectPropertyStringValue(elem, "name")
        const weight = getObjectPropertyStringValue(elem, "weight")
        const exemplary = getObjectPropertyStringValue(elem, "exemplary")
        const proficient = getObjectPropertyStringValue(elem, "proficient")
        const developing = getObjectPropertyStringValue(elem, "developing")

        if (name && weight && exemplary && proficient && developing) {
          rubric.push({ name, weight, exemplary, proficient, developing })
        }
      }
    }
  }

  return { dailyLessons, milestones, rubric }
}

// ─── Audit Logic ─────────────────────────────────────────────────────────────

function parseDurationMinutes(duration: string): number {
  const minMatch = duration.match(/(\d+)\s*min/i)
  if (minMatch) return parseInt(minMatch[1])
  return 0
}

function auditUnit(unit: number): AuditResult {
  const mismatches: Mismatch[] = []
  const unitLabel = `Unit ${unit}`

  const { lessons, phasesByLesson } = loadStudentLessonData(unit)
  const { milestones: unitMilestones, rubric: unitRubric } = loadUnitData(unit)
  const { dailyLessons, milestones: teacherMilestones, rubric: teacherRubric } = loadTeacherLessonPlan(unit)

  const studentLessonCount = lessons.length
  const teacherLessonCount = dailyLessons.length

  if (Math.abs(studentLessonCount - teacherLessonCount) > 1) {
    mismatches.push({
      unit: unitLabel,
      field: "lessonCount",
      severity: "blocker",
      studentValue: studentLessonCount,
      teacherValue: teacherLessonCount,
      note: `Student has ${studentLessonCount} lessons, teacher has ${teacherLessonCount} daily lessons`,
    })
  }

  for (const lesson of lessons.sort((a, b) => a.sequence - b.sequence)) {
    const lessonNum = lesson.sequence
    const teacherLesson = dailyLessons.find((d) => d.day === lessonNum)

    if (!teacherLesson) {
      mismatches.push({
        unit: unitLabel,
        lesson: lessonNum,
        field: "lessonTitle",
        severity: "content-drift",
        studentValue: lesson.title,
        teacherValue: null,
        note: `No teacher daily lesson found for day ${lessonNum}`,
      })
    } else {
      if (teacherLesson.title !== lesson.title) {
        mismatches.push({
          unit: unitLabel,
          lesson: lessonNum,
          field: "lessonTitle",
          severity: "content-drift",
          studentValue: lesson.title,
          teacherValue: teacherLesson.title,
        })
      }

      const studentDuration = lesson.durationEstimateMinutes ?? 0
      const teacherDuration = parseDurationMinutes(teacherLesson.duration)
      if (studentDuration > 0 && teacherDuration > 0 && Math.abs(studentDuration - teacherDuration) > 5) {
        mismatches.push({
          unit: unitLabel,
          lesson: lessonNum,
          field: "duration",
          severity: "informational",
          studentValue: studentDuration,
          teacherValue: teacherDuration,
          note: "Duration differs by >5 minutes",
        })
      }
    }
  }

  const studentMilestones = unitMilestones
  if (studentMilestones.length !== teacherMilestones.length) {
    mismatches.push({
      unit: unitLabel,
      field: "milestoneCount",
      severity: "blocker",
      studentValue: studentMilestones.length,
      teacherValue: teacherMilestones.length,
      note: "Unit data and teacher plan milestone counts differ",
    })
  }

  for (let i = 0; i < Math.min(studentMilestones.length, teacherMilestones.length); i++) {
    const sm = studentMilestones[i]
    const tm = teacherMilestones[i]
    if (sm.title !== tm.title) {
      mismatches.push({
        unit: unitLabel,
        field: "milestoneTitle",
        severity: "content-drift",
        studentValue: sm.title,
        teacherValue: tm.title,
        note: `Milestone ${i + 1} title differs`,
      })
    }
    if (sm.day !== tm.day) {
      mismatches.push({
        unit: unitLabel,
        field: "milestoneDay",
        severity: "blocker",
        studentValue: sm.day,
        teacherValue: tm.day,
        note: `Milestone ${i + 1} day differs`,
      })
    }
  }

  const studentRubricWeights = new Map(unitRubric.map((r) => [r.name, r.weight]))
  for (const tr of teacherRubric) {
    const srWeight = studentRubricWeights.get(tr.name)
    if (srWeight) {
      const sv = parseFloat(srWeight.replace("%", ""))
      const tv = parseFloat(tr.weight.replace("%", ""))
      if (!isNaN(sv) && !isNaN(tv) && Math.abs(sv - tv) > 5) {
        mismatches.push({
          unit: unitLabel,
          field: "rubricWeight",
          severity: "blocker",
          studentValue: srWeight,
          teacherValue: tr.weight,
          note: `Rubric "${tr.name}" weight differs by >5%`,
        })
      }
    }
  }

  const summary = {
    blockers: mismatches.filter((m) => m.severity === "blocker").length,
    contentDrift: mismatches.filter((m) => m.severity === "content-drift").length,
    routeDrift: mismatches.filter((m) => m.severity === "route-drift").length,
    informational: mismatches.filter((m) => m.severity === "informational").length,
  }

  return {
    unit: unitLabel,
    passed: summary.blockers === 0,
    mismatches,
    summary,
  }
}

if (require.main === module) {
  const unitArg = process.argv[2]

  if (unitArg === "all") {
    for (let u = 1; u <= 8; u++) {
      const result = auditUnit(u)
      console.log(`\n=== Audit Result: ${result.unit} ===`)
      console.log(`Passed: ${result.passed}`)
      console.log(`Blockers: ${result.summary.blockers}`)
      console.log(`Content Drift: ${result.summary.contentDrift}`)
      console.log(`Route Drift: ${result.summary.routeDrift}`)
      console.log(`Informational: ${result.summary.informational}`)
      if (result.mismatches.length > 0) {
        console.log("\n--- Mismatches ---")
        for (const m of result.mismatches) {
          console.log(`[${m.severity}] ${m.lesson ? `Lesson ${m.lesson} — ` : ""}${m.field}`)
          console.log(`  Student: ${m.studentValue ?? "(null)"}`)
          console.log(`  Teacher: ${m.teacherValue ?? "(null)"}`)
          if (m.note) console.log(`  Note: ${m.note}`)
        }
      }
    }
  } else {
    const unit = parseInt(unitArg ?? "8")
    const result = auditUnit(unit)

    console.log(`\n=== Audit Result: ${result.unit} ===`)
    console.log(`Passed: ${result.passed}`)
    console.log(`Blockers: ${result.summary.blockers}`)
    console.log(`Content Drift: ${result.summary.contentDrift}`)
    console.log(`Route Drift: ${result.summary.routeDrift}`)
    console.log(`Informational: ${result.summary.informational}`)
    console.log("\n--- Mismatches ---")
    for (const m of result.mismatches) {
      console.log(`[${m.severity}] ${m.lesson ? `Lesson ${m.lesson} — ` : ""}${m.field}`)
      console.log(`  Student: ${m.studentValue ?? "(null)"}`)
      console.log(`  Teacher: ${m.teacherValue ?? "(null)"}`)
      if (m.note) console.log(`  Note: ${m.note}`)
    }
  }
}
