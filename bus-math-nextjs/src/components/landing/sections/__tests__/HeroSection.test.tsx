/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { HeroSection } from "../HeroSection"

describe("HeroSection entry points", () => {
  it("offers a direct student entry and a distinct teacher entry", () => {
    render(<HeroSection />)

    expect(screen.getByRole("link", { name: /Start Learning/ })).toHaveAttribute("href", "/student")
    expect(screen.getByRole("link", { name: /For Teachers/ })).toHaveAttribute("href", "/teacher")
  })
})
