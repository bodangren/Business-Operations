import { describe, it, expect } from "vitest"
import { isDebugRouteBlocked } from "../middleware"

describe("isDebugRouteBlocked", () => {
  it("returns false for non-debug paths", () => {
    expect(isDebugRouteBlocked("/", "production")).toBe(false)
    expect(isDebugRouteBlocked("/student", "production")).toBe(false)
    expect(isDebugRouteBlocked("/unit01/lesson01", "production")).toBe(false)
  })

  it("returns true for /debug in production", () => {
    expect(isDebugRouteBlocked("/debug", "production")).toBe(true)
  })

  it("returns true for /debug subpaths in production", () => {
    expect(isDebugRouteBlocked("/debug/exercises", "production")).toBe(true)
    expect(isDebugRouteBlocked("/debug/charts", "production")).toBe(true)
    expect(isDebugRouteBlocked("/debug/accounting/page", "production")).toBe(true)
  })

  it("returns false for /debug in development", () => {
    expect(isDebugRouteBlocked("/debug", "development")).toBe(false)
    expect(isDebugRouteBlocked("/debug/exercises", "development")).toBe(false)
  })

  it("returns false for paths starting with /debug- (exact prefix match)", () => {
    expect(isDebugRouteBlocked("/debug-something", "production")).toBe(false)
    expect(isDebugRouteBlocked("/debugger", "production")).toBe(false)
  })

  it("returns false in test environment", () => {
    expect(isDebugRouteBlocked("/debug", "test")).toBe(false)
  })

  it("handles trailing slashes", () => {
    expect(isDebugRouteBlocked("/debug/", "production")).toBe(true)
    expect(isDebugRouteBlocked("/debug/exercises/", "production")).toBe(true)
  })
})
