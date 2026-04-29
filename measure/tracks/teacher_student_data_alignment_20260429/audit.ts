import * as path from "path"
import * as fs from "fs"

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

function loadStudentLessonData(unit: number): { lessons: LessonData[]; phasesByLesson: Map<number, Phase[]> } {
  const lessons: LessonData[] = []
  const phasesByLesson = new Map<number, Phase[]>()
  const studentUnitDir = path.join(REPO_ROOT, `src/app/student/unit${String(unit).padStart(2, "0")}`)

  if (!fs.existsSync(studentUnitDir)) {
    return { lessons, phasesByLesson }
  }

  const lessonDirs = fs.readdirSync(studentUnitDir).filter((d) => /^lesson\d+$/.test(d))

  for (const dir of lessonDirs) {
    const lessonDataPath = path.join(studentUnitDir, dir, "lesson-data.ts")
    if (!fs.existsSync(lessonDataPath)) continue

    const content = fs.readFileSync(lessonDataPath, "utf8")
    const match = content.match(/export\s+const\s+lesson\d+Data\s*=\s*(\{[\s\S]*?\})\s*(?:as\s+const)?/)
    if (!match) continue

    try {
      const jsonStr = match[1]
        .replace(/\n\s*id:\s*"/g, '\n"id":"')
        .replace(/\n\s*title:\s*"/g, '\n"title":"')
        .replace(/\n\s*sequence:\s*/g, '\n"sequence":')
        .replace(/\n\s*unitId:\s*"/g, '\n"unitId":"')
        .replace(/\n\s*durationEstimateMinutes:\s*/g, '\n"durationEstimateMinutes":')
        .replace(/\n\s*rationale:\s*"/g, '\n"rationale":"')

      const idMatch = jsonStr.match(/"id"\s*:\s*"([^"]+)"/)
      const titleMatch = jsonStr.match(/"title"\s*:\s*"([^"]+)"/)
      const sequenceMatch = jsonStr.match(/"sequence"\s*:\s*(\d+)/)
      const unitIdMatch = jsonStr.match(/"unitId"\s*:\s*"([^"]+)"/)
      const durationMatch = jsonStr.match(/"durationEstimateMinutes"\s*:\s*(\d+)/)

      if (idMatch && titleMatch && sequenceMatch && unitIdMatch) {
        const lessonNum = parseInt(dir.replace("lesson", ""))
        const lesson: LessonData = {
          id: idMatch[1],
          title: titleMatch[1],
          sequence: parseInt(sequenceMatch[1]),
          unitId: unitIdMatch[1],
          durationEstimateMinutes: durationMatch ? parseInt(durationMatch[1]) : undefined,
        }
        lessons.push(lesson)

        const phasesMatch = content.match(/export\s+const\s+lesson\d+Phases\s*=\s*(\[[\s\S]*?\])/)
        if (phasesMatch) {
          const phases: Phase[] = []
          const phaseMatches = phasesMatch[1].matchAll(/\{[^}]*phaseName:\s*"([^"]+)"[^}]*sequence:\s*(\d+)/g)
          for (const m of phaseMatches) {
            phases.push({ id: "", phaseName: m[1], sequence: parseInt(m[2]) })
          }
          phasesByLesson.set(lessonNum, phases)
        }
      }
    } catch (e) {
      // skip malformed file
    }
  }

  return { lessons, phasesByLesson }
}

function loadUnitData(unit: number): { milestones: Milestone[]; rubric: RubricCriteria[] } {
  const unitPath = path.join(REPO_ROOT, `src/data/unit${String(unit).padStart(2, "0")}.ts`)
  if (!fs.existsSync(unitPath)) return { milestones: [], rubric: [] }

  const content = fs.readFileSync(unitPath, "utf8")

  const milestones: Milestone[] = []
  const milestoneMatches = content.matchAll(/id:\s*"([^"]+)"[^}]*day:\s*(\d+)[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"[^}]*criteria:\s*\[([\s\S]*?)\]/g)
  for (const m of milestoneMatches) {
    const criteriaStr = m[5]
    const criteria = criteriaStr.split(",").map((c) => c.trim().replace(/^"|"$/g, "")).filter(Boolean)
    milestones.push({ id: m[1], day: parseInt(m[2]), title: m[3], description: m[4], criteria })
  }

  const rubric: RubricCriteria[] = []
  const rubricMatches = content.matchAll(/name:\s*"([^"]+)"[^}]*weight:\s*"([^"]+)"[^}]*exemplary:\s*"([^"]+)"[^}]*proficient:\s*"([^"]+)"[^}]*developing:\s*"([^"]+)"/g)
  for (const m of rubricMatches) {
    rubric.push({ name: m[1], weight: m[2], exemplary: m[3], proficient: m[4], developing: m[5] })
  }

  return { milestones, rubric }
}

function loadTeacherLessonPlan(unit: number): { dailyLessons: { day: number; title: string; focus: string; duration: string }[]; milestones: Milestone[]; rubric: RubricCriteria[] } {
  const planPath = path.join(REPO_ROOT, `src/data/teacher/unit${String(unit).padStart(2, "0")}-lesson-plan.ts`)
  if (!fs.existsSync(planPath)) return { dailyLessons: [], milestones: [], rubric: [] }

  const content = fs.readFileSync(planPath, "utf8")

  const dailyLessons: { day: number; title: string; focus: string; duration: string }[] = []
  const dayMatches = content.matchAll(/day:\s*(\d+)[^}]*title:\s*"([^"]+)"[^}]*focus:\s*"([^"]+)"[^}]*duration:\s*"([^"]+)"/g)
  for (const m of dayMatches) {
    dailyLessons.push({ day: parseInt(m[1]), title: m[2], focus: m[3], duration: m[4] })
  }

  const milestones: Milestone[] = []
  const milestoneMatches = content.matchAll(/day:\s*(\d+)[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"[^}]*criteria:\s*\[([\s\S]*?)\]/g)
  for (const m of milestoneMatches) {
    const criteriaStr = m[4]
    const criteria = criteriaStr.split(",").map((c) => c.trim().replace(/^"|"$/g, "")).filter(Boolean)
    milestones.push({ day: parseInt(m[1]), title: m[2], description: m[3], criteria })
  }

  const rubric: RubricCriteria[] = []
  const rubricMatches = content.matchAll(/name:\s*"([^"]+)"[^}]*weight:\s*"([^"]+)"[^}]*exemplary:\s*"([^"]+)"[^}]*proficient:\s*"([^"]+)"[^}]*developing:\s*"([^"]+)"/g)
  for (const m of rubricMatches) {
    rubric.push({ name: m[1], weight: m[2], exemplary: m[3], proficient: m[4], developing: m[5] })
  }

  return { dailyLessons, milestones, rubric }
}

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
  const unit = parseInt(process.argv[2] ?? "8")
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