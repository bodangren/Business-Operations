"use client"

import { Button } from "../ui/Button"
import { GoldLine } from "../ui/Decorations"
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const quickStats = [
  { icon: BookOpen, value: "80", label: "Lessons" },
  { icon: Users, value: "8", label: "Units" },
  { icon: Award, value: "100%", label: "Projects" },
  { icon: TrendingUp, value: "Excel", label: "Powered" },
]

export function HeroSection() {
  return (
    <section className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F5F5F0]" />
      
      {/* Content - compact and above the fold */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Main content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#0A192F] leading-tight mb-4">
              Master <span className="text-[#C9A227]">Business</span> Operations
            </h1>

            <p className="text-lg text-[#666666] mb-6 leading-relaxed">
              Interactive, project-based learning with real-world Excel applications. 
              Transform how you understand accounting, finance, and entrepreneurship.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/student">
                <Button variant="gold" size="md" className="px-6">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/student">
                <Button variant="navy" size="md" className="px-6">
                  Browse Units
                </Button>
              </Link>
            </div>

            {/* Quick stats - visible without scrolling */}
            <div className="grid grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-[#0A192F] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-5 w-5 text-[#C9A227]" />
                  </div>
                  <div className="text-2xl font-serif font-medium text-[#0A192F]">{stat.value}</div>
                  <div className="text-xs text-[#666666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Preview card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] rounded-lg opacity-60 blur-sm" />
            <div className="relative bg-white border border-[#E8E8E8] rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-serif font-medium text-[#0A192F] mb-4">
                Start Your Journey
              </h3>
              <div className="space-y-3">
                <Link href="/student/unit01" className="block">
                  <div className="group flex items-center gap-4 p-4 bg-[#FAFAFA] hover:bg-[#F5F5F0] border border-[#E8E8E8] hover:border-[#C9A227] rounded-lg transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-[#0A192F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A227] font-mono font-bold">01</span>
                    </div>
                    <div>
                      <div className="font-medium text-[#0A192F] group-hover:text-[#C9A227] transition-colors">Smart Ledger Launch</div>
                      <div className="text-sm text-[#666666]">Build self-auditing systems</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#C9A227] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
                
                <Link href="/student" className="block">
                  <div className="group flex items-center gap-4 p-4 bg-[#FAFAFA] hover:bg-[#F5F5F0] border border-[#E8E8E8] hover:border-[#C9A227] rounded-lg transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-[#0A192F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A192F] group-hover:text-[#C9A227] transition-colors">Practice Hub</div>
                      <div className="text-sm text-[#666666]">Review vocabulary & concepts</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#C9A227] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>

                <Link href="/backmatter/glossary" className="block">
                  <div className="group flex items-center gap-4 p-4 bg-[#FAFAFA] hover:bg-[#F5F5F0] border border-[#E8E8E8] hover:border-[#C9A227] rounded-lg transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-[#0A192F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-[#C9A227]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A192F] group-hover:text-[#C9A227] transition-colors">Bilingual Glossary</div>
                      <div className="text-sm text-[#666666]">200+ business terms</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#C9A227] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold line separator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoldLine thickness="thin" />
      </div>
    </section>
  )
}
