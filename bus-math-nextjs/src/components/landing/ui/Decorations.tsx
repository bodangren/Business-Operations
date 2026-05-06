"use client"

import { cn } from "@/lib/utils"

interface FlowLineProps {
  className?: string
  type?: "horizontal" | "vertical"
  thickness?: "thin" | "medium" | "thick"
}

export function FlowLine({ className, type = "horizontal", thickness = "thin" }: FlowLineProps) {
  const thicknessClass = {
    thin: "h-px w-full velocity-gradient",
    medium: "h-0.5 w-full velocity-gradient",
    thick: "h-1 w-full velocity-gradient",
  }

  const orientationClass = type === "vertical" ? "h-full w-px velocity-gradient" : thicknessClass[thickness]

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
  color?: "primary" | "secondary" | "excel-green" | "muted"
  size?: "xs" | "sm" | "md" | "lg"
}

export function DataPoint({ className, color = "primary", size = "sm" }: DataPointProps) {
  const colorClass = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    "excel-green": "bg-[#21A366]",
    muted: "bg-muted-foreground",
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
        "font-mono text-xs text-primary opacity-60 md:text-sm",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {formula}
    </div>
  )
}
