import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        secondary:
          "border-secondary bg-secondary text-secondary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        destructive:
          "border-destructive bg-destructive text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        outline:
          "border-input text-foreground bg-background",
        velocity:
          "velocity-gradient text-white border-transparent shadow-[0_2px_4px_rgba(99,91,255,0.2)]",
        accent:
          "border-accent bg-accent text-accent-foreground shadow-[0_1px_2px_rgba(0,212,255,0.2)]",
        stamp:
          "border border-primary/20 bg-primary/5 text-primary font-semibold tracking-wide px-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
