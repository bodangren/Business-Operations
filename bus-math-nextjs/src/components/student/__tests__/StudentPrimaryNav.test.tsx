/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { StudentPrimaryNav } from "../StudentPrimaryNav"

describe("StudentPrimaryNav", () => {
  it("renders Today, Units, Practice, and Resources with no teacher links", () => {
    render(<StudentPrimaryNav />)

    const nav = screen.getByRole("navigation", { name: "Student" })
    const links = Array.from(nav.querySelectorAll("a"))

    expect(links.map((link) => link.textContent)).toEqual([
      "Today",
      "Units",
      "Practice",
      "Resources",
    ])

    for (const link of links) {
      expect(link.getAttribute("href")?.startsWith("/teacher")).toBe(false)
    }
  })
})
