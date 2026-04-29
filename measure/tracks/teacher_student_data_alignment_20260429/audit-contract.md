# Audit Contract: Teacher/Student Data Alignment

## Purpose
Deterministic check comparing student lesson metadata, teacher lesson-plan data, and unit milestone data to surface misalignments that could mislead teachers.

## Data Sources (in priority order)
1. `src/app/student/unitXX/lessonYY/lesson-data.ts` — student lesson titles, phases, routes
2. `src/data/unitXX.ts` — unit-level assessment milestones and criteria
3. `src/data/teacher/unitXX-lesson-plan.ts` — teacher daily lessons and activity blocks

## Fields Compared

### Per-Lesson (for each lesson number 1–N in the unit)
| Field | Student Source | Teacher Source | Severity |
|-------|---------------|---------------|----------|
| Lesson count | student lesson-data files | teacher dailyLessons.length | blocker if diff > 1 |
| Lesson title | lessonData.title | dailyLessons[].title | content-drift if different |
| Duration | lessonData.durationEstimateMinutes | dailyLessons[].duration | informational if diff > 5min |
| Phase count | lessonPhases.length | (teacher phases inferred from activities) | content-drift if diff > 1 |
| Phase names | lessonPhases[].phaseName | dailyLessons[].focus | content-drift if names diverge |
| Phase sequence | lessonPhases[].sequence | (sequence implied by order) | route-drift if phase order differs |

### Per-Unit (assessment milestones)
| Field | Student Source | Unit/Teacher Source | Severity |
|-------|---------------|---------------------|----------|
| Milestone count | (inferred from project phase pages) | unitXX.ts milestones.length | blocker if diff > 1 |
| Milestone day | (lesson number for project lessons) | milestones[].day | blocker if day doesn't correspond to lesson |
| Milestone title | (derived from project lesson titles) | milestones[].title | content-drift if different |
| Milestone criteria | (from project acceptance criteria) | milestones[].criteria | content-drift if criteria differ substantially |
| Rubric categories | (from project rubric if present) | unitXX.ts rubric[].name | content-drift if category names differ |
| Rubric weights | (from project rubric if present) | unitXX.ts rubric[].weight | blocker if weights differ by >5% |

## Known Acceptable Differences (Do Not Flag)
- `preparation`, `facilitationGuidance`, `checksForUnderstanding`, `watchFors`, `nextSteps` in teacher data are teacher-only operational fields — never present in student data.
- Teacher `dailyLessons[].activities` and `dailyLessons[].materials` are teacher-only — do not compare.
- Teacher `learningPlan.overview.phases` describes macro units, not 1:1 with student phases.
- Teacher `assessment.formative` and `assessment.feedback` strategies are teacher-only.
- Teacher `reflection.questions`, `reflection.dataCollection`, `reflection.nextUnitPrep` are teacher-only.
- `durationEstimateMinutes` in student data vs `duration` string in teacher data may differ by up to 5 minutes due to formatting differences.
- Student phase names like "Guided Practice" vs teacher focus like "Excel Build: Asset Register" describe the same phase conceptually.

## Severity Levels

### Blocker (must fix before Phase 2)
- Lesson count differs by more than 1 between student and teacher data
- Milestone day numbers in unit data don't correspond to any student lesson number
- Rubric weights differ by more than 5% between unit data and student rubric

### Content Drift (should fix in Phase 2+)
- Lesson title in teacher data doesn't match student lesson title
- Milestone title differs from the student lesson/project title it maps to
- Phase names are completely unrelated (not just wording difference)
- Milestone criteria text contradicts student project acceptance criteria

### Route Drift (fix in Phase 3+)
- Student advertises N phases but teacher describes a different phase structure
- Phase sequence order differs between student and teacher descriptions

### Informational (record only)
- Duration differs by ≤5 minutes (may be formatting difference)
- Minor wording differences in phase descriptions that still describe the same phase type

## Audit Output Format
```typescript
type Mismatch = {
  unit: string
  lesson?: number
  field: string
  severity: 'blocker' | 'content-drift' | 'route-drift' | 'informational'
  studentValue: string | number | null
  teacherValue: string | number | null
  note?: string
}

type AuditResult = {
  unit: string
  passed: boolean
  mismatches: Mismatch[]
  summary: { blockers: number; contentDrift: number; routeDrift: number; informational: number }
}
```

## Script Location
`measure/tracks/teacher_student_data_alignment_20260429/audit.ts` — run with `npx tsx` from repo root.