"use client"

import { Button } from "../ui/Button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { UNITS } from "@/data/unit-registry"

export function CurriculumSection() {
  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-3xl font-light text-secondary md:text-4xl">
            Eight Units, One Vision
          </h2>
          <p className="text-lg font-light text-foreground/70">
            From basic ledgers to complex financial modeling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {UNITS.map((unit, index) => (
            <Link key={unit.unitId} href={unit.studentHref} className="block">
              <div className="group h-full overflow-hidden rounded-lg border border-border/70 bg-card shadow-[0_4px_6px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_20px_rgba(10,37,64,0.08)]">
                <div className="velocity-gradient px-4 py-3">
                  <span className="font-mono text-sm text-white">UNIT {(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 font-medium text-secondary transition-colors group-hover:text-primary">
                    {unit.title}
                  </h3>
                  <p className="line-clamp-2 text-sm font-light text-foreground/70">{unit.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/student">
            <Button variant="secondary" size="md" className="px-8">
              View Full Curriculum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
