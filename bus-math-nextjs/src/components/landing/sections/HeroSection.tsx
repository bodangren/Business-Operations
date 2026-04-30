"use client"


import { Button } from "../ui/Button"
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
    <section className="relative bg-background overflow-hidden">
      {/* Velocity background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-accent/20 blur-[100px] rounded-full" />
      </div>
      
      {/* Content - compact and above the fold */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Main content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              NEW FOR 2026
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-secondary leading-[1.1] mb-6 tracking-tight">
              Master <span className="velocity-text-gradient">Business</span> Operations
            </h1>

            <p className="text-xl text-foreground/70 mb-8 leading-relaxed font-light max-w-lg">
              Sophisticated, project-based learning with real-world Excel applications. 
              Transform how you manage accounting and finance.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/student">
                <Button variant="gold" size="lg" className="px-10">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/student">
                <Button variant="outline" size="lg" className="px-10 border-border bg-white/50 backdrop-blur-sm shadow-sm">
                  Browse Units
                </Button>
              </Link>
            </div>

            {/* Quick stats - visible without scrolling */}
            <div className="grid grid-cols-4 gap-6 max-w-md">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NODE_ENV === 'production' ? '/Business-Operations' : ''}/hero.png`}
                alt="Business Operations Learning Platform"
                className="w-full h-auto opacity-95 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating elements for visual flair */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border/50 animate-bounce-slow">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle flow line */}
      <div className="flow-line opacity-20" />
    </section>
  )
}
