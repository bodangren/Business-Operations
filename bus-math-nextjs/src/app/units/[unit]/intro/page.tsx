import { UnitIntroduction } from "@/components/unit/UnitIntroduction"
import { unit01IntroData } from "@/data/unit01-intro"
import { unit02IntroData } from "@/data/unit02-intro"
import { unit03IntroData } from "@/data/unit03-intro"
import { UnitIntroductionData } from "@/types/sections"
import { notFound } from "next/navigation"

const unitIntroData: Record<string, UnitIntroductionData> = {
  'unit01-smart-ledger': unit01IntroData,
  'unit02-month-end-wizard': unit02IntroData,
  'unit03-three-statement-storyboard': unit03IntroData,
}

export async function generateStaticParams() {
  return [
    { unit: 'unit01-smart-ledger' },
    { unit: 'unit02-month-end-wizard' },
    { unit: 'unit03-three-statement-storyboard' },
    { unit: 'unit04-data-driven-cafe' },
    { unit: 'unit05-payday-simulator' },
    { unit: 'unit06-pricelab-challenge' },
    { unit: 'unit07-asset-inventory-tracker' },
    { unit: 'unit08-integrated-model-sprint' },
  ]
}

export default async function UnitIntroPage({
  params,
}: {
  params: Promise<{ unit: string }>
}) {
  const { unit } = await params
  const introData = unitIntroData[unit]
  
  if (!introData) {
    notFound()
  }

  return <UnitIntroduction {...introData} />
}