/** @vitest-environment jsdom */
import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { describe, expect, it } from "vitest"
import LessonVideoResources from "../LessonVideoResources"

describe("LessonVideoResources", () => {
  it("uses the selected chapter in the embed and the YouTube fallback link", () => {
    const { container } = render(<LessonVideoResources unitId="unit07" lessonNumber={4} />)
    const iframe = container.querySelector("iframe")
    expect(iframe).toHaveAttribute("loading", "lazy")
    expect(iframe?.getAttribute("src")).toContain("youtube-nocookie.com/embed/vGPn_Oo7UBQ")
    expect(iframe?.getAttribute("src")).toContain("start=2320")
    expect(screen.getByRole("link", { name: /Watch on YouTube/ })).toHaveAttribute(
      "href", "https://www.youtube.com/watch?v=vGPn_Oo7UBQ&t=2320s",
    )
    expect(screen.getByText(/Use this page for Specific Identification/)).toBeInTheDocument()
  })

  it("shows Excel review by default and labels it optional", () => {
    const { container } = render(<LessonVideoResources unitId="unit05" lessonNumber={5} />)
    const summary = screen.getByText("Optional Excel review")
    const disclosure = summary.closest("details")
    expect(disclosure).toHaveAttribute("open")
    expect(screen.getByText(/Follow the class tutorial/)).toBeInTheDocument()
    expect(container.querySelector("iframe")).toHaveAccessibleName()
  })

  it("shows the selected ratio segments by default", () => {
    const { container } = render(<LessonVideoResources unitId="unit07" lessonNumber={6} />)
    expect(container.querySelector("iframe")?.getAttribute("src")).toContain("start=661&end=686")
    expect(screen.getByText(/Stop at 11:26/)).toBeInTheDocument()
    for (const disclosure of container.querySelectorAll("details")) {
      expect(disclosure).toHaveAttribute("open")
    }
  })

  it("shows earlier lesson links by default", () => {
    const { container } = render(<LessonVideoResources unitId="unit07" lessonNumber={9} />)
    expect(container.querySelector("[data-earlier-reviews]")).toHaveAttribute("open")
  })

  it("renders no block when no suitable video is selected", () => {
    const { container } = render(<LessonVideoResources unitId="unit04" lessonNumber={2} />)
    expect(container).toBeEmptyDOMElement()
  })
})
