/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Unit01PracticeTestPage from "@/app/student/unit01/practice-test/page"
import Unit02PracticeTestPage from "@/app/student/unit02/practice-test/page"
import Unit03PracticeTestPage from "@/app/student/unit03/practice-test/page"
import Unit04PracticeTestPage from "@/app/student/unit04/practice-test/page"
import Unit05PracticeTestPage from "@/app/student/unit05/practice-test/page"
import Unit06PracticeTestPage from "@/app/student/unit06/practice-test/page"
import Unit07PracticeTestPage from "@/app/student/unit07/practice-test/page"
import Unit08PracticeTestPage from "@/app/student/unit08/practice-test/page"
import { unit01ReviewAdapter } from "@/data/unit-review-adapters/unit01"
import { unit02ReviewAdapter } from "@/data/unit-review-adapters/unit02"
import { unit03ReviewAdapter } from "@/data/unit-review-adapters/unit03"
import { unit04ReviewAdapter } from "@/data/unit-review-adapters/unit04"
import { unit05ReviewAdapter } from "@/data/unit-review-adapters/unit05"
import { unit06ReviewAdapter } from "@/data/unit-review-adapters/unit06"
import { unit07ReviewAdapter } from "@/data/unit-review-adapters/unit07"
import { unit08ReviewAdapter } from "@/data/unit-review-adapters/unit08"

const PAGES = [
  { label: unit01ReviewAdapter.unitLabel, Page: Unit01PracticeTestPage },
  { label: unit02ReviewAdapter.unitLabel, Page: Unit02PracticeTestPage },
  { label: unit03ReviewAdapter.unitLabel, Page: Unit03PracticeTestPage },
  { label: unit04ReviewAdapter.unitLabel, Page: Unit04PracticeTestPage },
  { label: unit05ReviewAdapter.unitLabel, Page: Unit05PracticeTestPage },
  { label: unit06ReviewAdapter.unitLabel, Page: Unit06PracticeTestPage },
  { label: unit07ReviewAdapter.unitLabel, Page: Unit07PracticeTestPage },
  { label: unit08ReviewAdapter.unitLabel, Page: Unit08PracticeTestPage },
]

describe("unit practice-test routes", () => {
  it.each(PAGES)("$label renders the shared unit review", ({ label, Page }) => {
    render(<Page />)

    expect(
      screen.getByRole("heading", { level: 1, name: `${label} Review` }),
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Start Review" })).toBeInTheDocument()
  })

  it.each(PAGES)("$label removes the legacy phase shell and reflection journal", ({ Page }) => {
    render(<Page />)

    expect(screen.queryByText(/Phase \d+:/)).toBeNull()
    expect(screen.queryByRole("textbox")).toBeNull()
    expect(screen.queryByText(/Reflect on your learning journey/)).toBeNull()
  })
})
