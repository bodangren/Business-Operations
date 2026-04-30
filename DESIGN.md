---
version: 1.1.0
name: The Velocity Interface
colors:
  primary: "#635BFF"
  secondary: "#0A2540"
  accent: "#00D4FF"
  background: "#F6F9FC"
  foreground: "#424770"
  card: "#FFFFFF"
  destructive: "#E13D45"
  border: "#E6EBF1"
  muted: "#ADBDCC"
  gradient-start: "#635BFF"
  gradient-end: "#00D4FF"
typography:
  display:
    fontFamily: "Inter"
    fontWeight: 300
  body:
    fontFamily: "Inter"
    fontWeight: 300
  data:
    fontFamily: "IBM Plex Mono"
    fontWeight: 400
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
---

# Design: The Velocity Interface

## Overview
"The Velocity Interface" is a sophisticated, high-performance visual identity inspired by global financial infrastructure. It prioritizes clarity, elegance, and forward-motion. It rejects heavy, static containers in favor of light typography, vibrant gradients, and a sense of layered depth. It is professional enough for an audit, yet visually striking enough to inspire momentum.

## Colors
The palette is centered around a vibrant indigo-to-cyan gradient, grounded by deep slate neutrals and crisp white surfaces.

- **Primary (#635BFF):** Velocity Purple. A high-energy indigo that represents the core engine of business operations.
- **Secondary (#0A2540):** Infrastructure Slate. A deep, professional blue used for authoritative headings and structural weight.
- **Accent (#00D4FF):** Flow Cyan. A bright, technical blue used for success states, highlights, and the "future" end of gradients.
- **Background (#F6F9FC):** Cloud White. A light, airy neutral that allows components to breathe.
- **Foreground (#424770):** Deep Text. A soft yet legible blue-gray for body copy, reducing the harshness of pure black.
- **Card (#FFFFFF):** Elevated Surface. Pure white containers that float above the background using subtle shadows.
- **Destructive (#E13D45):** Alert Red. A vibrant red for critical errors and negative balances.
- **Border (#E6EBF1):** Hairline. Minimalist divisions that provide structure without visual noise.

## Typography
Typography is defined by its "weight-300 elegance." Thin, precise lines convey a sense of modern engineering and sophisticated data handling.

- **Display (Inter, 300):** Extra-light, large-scale headings that feel architectural and airy.
- **Body (Inter, 300):** Crisp, readable instructional text that maintains a high-end, editorial feel.
- **Data (IBM Plex Mono, 400):** A technical monospaced font for numerical precision, maintaining the "math" heritage of the project.

## Layout
A fluid 8px grid system that balances dense data with generous negative space.

- **Base (8px):** The fundamental unit of rhythm.
- **XS (4px):** Micro-spacing for tight groupings.
- **SM (8px):** Standard internal padding.
- **MD (16px):** Component and section spacing.
- **LG (32px):** Major layout divisions.
- **XL (64px):** Vertical transitions between learning phases.

## Elevation & Depth
Depth is created through subtle layering and shadows, reflecting a modern "SaaS" aesthetic rather than flat paper.

- **Level 0:** Background surface.
- **Level 1:** Cards with 0px 4px 6px rgba(0,0,0,0.04) shadow.
- **Level 2:** Hover states and active dialogs with increased shadow spread.

## Shapes
Geometric precision with soft edges. Corners are rounded enough to feel approachable but sharp enough to remain professional.

- **None (0px):** For specific full-width technical elements.
- **SM (4px):** Inputs and small buttons.
- **MD (8px):** Standard cards and large buttons.
- **LG (12px):** Feature containers and hero sections.
- **Full (9999px):** Pill-shaped badges and search bars.

## Components
- **Velocity Badges:** Interactive tags using the primary-to-accent gradient.
- **Glassmorphic Headers:** Semi-transparent navigation bars that blur the content beneath.
- **The Flow Line:** A 2px gradient line used as a decorative or structural element to guide the eye.

## Do's and Don'ts
- **Do** use `font-weight: 300` for almost all text.
- **Do** use gradients to draw attention to primary actions.
- **Do** use soft shadows instead of heavy borders.
- **Don't** use pure black (#000) for text; use Deep Text.
- **Don't** use sharp 0px corners; everything has a subtle radius.
- **Don't** clutter the UI; prioritize whitespace and "air."
