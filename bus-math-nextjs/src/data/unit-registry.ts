import type { UnitId } from "@/types/glossary"
import { unit01Data } from "@/data/unit01"
import { unit02Data } from "@/data/unit02"
import { unit03Data } from "@/data/unit03"
import { unit04Data } from "@/data/unit04"
import { unit05Data } from "@/data/unit05"
import { unit06Data } from "@/data/unit06"
import { unit07Data } from "@/data/unit07"
import { unit08Data } from "@/data/unit08"

export interface UnitMetadata {
  unitId: UnitId
  number: number
  title: string
  description: string
  studentHref: string
  teacherHref: string
  label: string
}

const rawData = [
  { data: unit01Data, unitId: "unit01" as const, number: 1 },
  { data: unit02Data, unitId: "unit02" as const, number: 2 },
  { data: unit03Data, unitId: "unit03" as const, number: 3 },
  { data: unit04Data, unitId: "unit04" as const, number: 4 },
  { data: unit05Data, unitId: "unit05" as const, number: 5 },
  { data: unit06Data, unitId: "unit06" as const, number: 6 },
  { data: unit07Data, unitId: "unit07" as const, number: 7 },
  { data: unit08Data, unitId: "unit08" as const, number: 8 },
] as const

export const UNITS: readonly UnitMetadata[] = rawData.map(({ data, unitId, number }) => ({
  unitId,
  number,
  title: data.title,
  description: data.description,
  studentHref: `/student/${unitId}`,
  teacherHref: `/teacher/${unitId}`,
  label: `Unit ${number}: ${data.title}`,
}))
