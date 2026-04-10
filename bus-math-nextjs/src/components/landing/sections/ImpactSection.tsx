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
    <section className="py-16 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#FAFAFA] mb-3">
            Proven Results
          </h2>
          <p className="text-lg text-[#A0A0A0]">
            Measurable outcomes from classroom implementation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-[#1A2332] border border-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-[#C9A227]" />
              </div>
              <div className="text-4xl font-serif font-medium text-[#C9A227] mb-1">{stat.value}</div>
              <div className="text-sm text-[#A0A0A0]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
