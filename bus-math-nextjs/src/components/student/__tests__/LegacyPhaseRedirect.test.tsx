/**
 * @vitest-environment jsdom
 */
import React from "react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

const { replaceMock } = vi.hoisted(() => ({ replaceMock: vi.fn() }))

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: replaceMock }),
}))

import { LegacyPhaseRedirect } from "../LegacyPhaseRedirect"

describe("LegacyPhaseRedirect", () => {
  afterEach(() => {
    replaceMock.mockClear()
  })

  it("links to the matching section anchor for a legacy phase route", () => {
    render(<LegacyPhaseRedirect legacyPath="/student/unit01/lesson01/phase-1" />)

    expect(screen.getByRole("link", { name: /Continue to Start/ })).toHaveAttribute(
      "href",
      "/student/unit01/lesson01/#start",
    )
  })

  it("maps phases 3 and 4 to the Do anchor", () => {
    render(<LegacyPhaseRedirect legacyPath="/student/unit03/lesson07/phase-4/" />)

    expect(screen.getByRole("link", { name: /Continue to Do/ })).toHaveAttribute(
      "href",
      "/student/unit03/lesson07/#do",
    )
  })

  it("maps phases 5 and 6 to the Check anchor", () => {
    render(<LegacyPhaseRedirect legacyPath="/student/unit02/lesson05/phase-6" />)

    expect(screen.getByRole("link", { name: /Continue to Check/ })).toHaveAttribute(
      "href",
      "/student/unit02/lesson05/#check",
    )
  })

  it("keeps the fallback link base-path safe in production", () => {
    vi.stubEnv("NODE_ENV", "production")
    try {
      render(<LegacyPhaseRedirect legacyPath="/student/unit01/lesson02/phase-2" />)

      expect(screen.getByRole("link", { name: /Continue to Learn/ })).toHaveAttribute(
        "href",
        "/Business-Operations/student/unit01/lesson02/#learn",
      )
    } finally {
      vi.unstubAllEnvs()
    }
  })

  it("falls back to the student hub for an unknown phase route", () => {
    render(<LegacyPhaseRedirect legacyPath="/student/unit01/lesson01/phase-9" />)

    expect(screen.getByRole("link", { name: /Back to Student Hub/ })).toHaveAttribute(
      "href",
      "/student",
    )
  })

  it("avoids a nested main landmark while keeping an accessible fallback", () => {
    const { container } = render(
      <LegacyPhaseRedirect legacyPath="/student/unit01/lesson01/phase-1" />,
    )

    expect(container.querySelector("main")).toBeNull()
    expect(
      screen.getByRole("heading", { name: /This lesson page has moved/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Continue to Start/ })).toBeInTheDocument()
  })
})
