"use client"

import { Button } from "../ui/Button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { UNITS } from "@/data/unit-registry"

export function CurriculumSection() {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#0A192F] mb-3">
            Eight Units, One Vision
          </h2>
          <p className="text-lg text-[#666666]">
            From basic ledgers to complex financial modeling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {UNITS.map((unit, index) => (
            <Link key={unit.unitId} href={unit.studentHref} className="block">
              <div className="group bg-white border border-[#E8E8E8] hover:border-[#C9A227] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
                <div className="bg-gradient-to-r from-[#0A192F] to-[#1A2332] px-4 py-3">
                  <span className="text-[#C9A227] font-mono text-sm">UNIT {(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#0A192F] mb-2 group-hover:text-[#C9A227] transition-colors line-clamp-2">
                    {unit.title}
                  </h3>
                  <p className="text-sm text-[#666666] line-clamp-2">{unit.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/student">
            <Button variant="navy" size="md" className="px-8">
              View Full Curriculum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
