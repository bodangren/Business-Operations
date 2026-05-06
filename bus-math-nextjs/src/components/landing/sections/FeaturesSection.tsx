"use client"

import { BookOpen, Clock, BarChart3, Award, Target, Zap } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "80 Comprehensive Lessons",
    description: "Progressive curriculum from basic ledgers to complex financial modeling",
  },
  {
    icon: Clock,
    title: "Spaced Repetition",
    description: "FSRS-powered vocabulary review system for long-term retention",
  },
  {
    icon: BarChart3,
    title: "Real Business Projects",
    description: "Authentic scenarios with community connections and industry mentors",
  },
  {
    icon: Award,
    title: "Industry-Standard",
    description: "Professional assessment system with real-world evaluation criteria",
  },
  {
    icon: Target,
    title: "Excel Mastery",
    description: "Advanced spreadsheet skills: VBA, Power Query, automation",
  },
  {
    icon: Zap,
    title: "Interactive Learning",
    description: "T-accounts, simulations, drag-drop exercises, and more",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-3xl font-light text-secondary md:text-4xl">
            Why This Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light text-foreground/70">
            A complete platform designed for real learning outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group rounded-lg border border-border/70 bg-background p-6 shadow-[0_4px_6px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_20px_rgba(10,37,64,0.08)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary">
                <feature.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-secondary transition-colors group-hover:text-primary">{feature.title}</h3>
              <p className="text-sm font-light leading-relaxed text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
