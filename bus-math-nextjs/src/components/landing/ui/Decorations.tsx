"use client"

import { cn } from "@/lib/utils"

interface GoldLineProps {
  className?: string
  type?: "horizontal" | "vertical"
  thickness?: "thin" | "medium" | "thick"
}

export function GoldLine({ className, type = "horizontal", thickness = "thin" }: GoldLineProps) {
  const thicknessClass = {
    thin: "h-px w-full border-t border-[#C9A227]",
    medium: "h-0.5 w-full border-t-2 border-[#C9A227]",
    thick: "h-1 w-full border-t-4 border-[#C9A227]",
  }

  const orientationClass = type === "vertical" ? "w-px h-full border-l border-[#C9A227]" : thicknessClass[thickness]

  return <div className={cn(orientationClass, className)} />
}

interface GrainOverlayProps {
  className?: string
  opacity?: number
}

export function GrainOverlay({ className, opacity = 0.03 }: GrainOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 mix-blend-multiply",
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity,
      }}
    />
  )
}

interface DataPointProps {
  className?: string
  color?: "gold" | "navy" | "excel-green" | "gray"
  size?: "xs" | "sm" | "md" | "lg"
}

export function DataPoint({ className, color = "gold", size = "sm" }: DataPointProps) {
  const colorClass = {
    gold: "bg-[#C9A227]",
    navy: "bg-[#0A192F]",
    "excel-green": "bg-[#21A366]",
    gray: "bg-[#666666]",
  }

  const sizeClass = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  return (
    <div
      className={cn(
        "rounded-full",
        colorClass[color],
        sizeClass[size],
        className
      )}
    />
  )
}

interface FormulaDecorationProps {
  formula: string
  className?: string
  animationDelay?: number
}

export function FormulaDecoration({ formula, className, animationDelay = 0 }: FormulaDecorationProps) {
  return (
    <div
      className={cn(
        "font-mono text-xs md:text-sm text-[#C9A227] opacity-60",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {formula}
    </div>
  )
}