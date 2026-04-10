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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#0A192F] mb-3">
            Why This Works
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            A complete platform designed for real learning outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-[#FAFAFA] border border-[#E8E8E8] hover:border-[#C9A227] rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-10 h-10 bg-[#0A192F] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C9A227] transition-colors">
                <feature.icon className="h-5 w-5 text-[#FAFAFA] group-hover:text-[#0A192F] transition-colors" />
              </div>
              <h3 className="text-lg font-medium text-[#0A192F] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#666666] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
