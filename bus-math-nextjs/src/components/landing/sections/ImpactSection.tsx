"use client"

import { TrendingUp, Target, Award, Users } from "lucide-react"

const stats = [
  { value: "90%", label: "Engagement", icon: TrendingUp },
  { value: "2x", label: "Retention", icon: Target },
  { value: "80+", label: "Lessons", icon: Award },
  { value: "100%", label: "Real-World", icon: Users },
]

export function ImpactSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="mb-3 text-3xl font-light text-secondary-foreground md:text-4xl">
            Proven Results
          </h2>
          <p className="text-lg font-light text-secondary-foreground/70">
            Measurable outcomes from classroom implementation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-white/5 shadow-[0_0_24px_rgba(99,91,255,0.18)]">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="velocity-text-gradient mb-1 text-4xl font-light">{stat.value}</div>
              <div className="text-sm font-light text-secondary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
