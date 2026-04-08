/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import ReviewSession from "../ReviewSession"
import { StudyDataProvider } from "@/contexts/StudyDataContext"
import * as storageModule from "@/lib/study/storage"
import * as srsModule from "@/lib/study/srs"
import { createEmptyLocalData } from "@/lib/study/storage-schema"

// Mock storage module to control test data
vi.mock("@/lib/study/storage")

describe("ReviewSession", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })
  it("renders loading state initially", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked(storageModule.loadStudyData).mockImplementation(() => null as any)
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("renders no due reviews state when there are no due entries", () => {
    const emptyData = createEmptyLocalData()
    vi.mocked(storageModule.loadStudyData).mockReturnValue(emptyData)
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    expect(screen.getByText("All caught up!")).toBeInTheDocument()
    expect(screen.getByText("You have no terms due for review right now. Check back later!")).toBeInTheDocument()
    expect(screen.getByText("Practice Flashcards")).toBeInTheDocument()
    expect(screen.getByText("Back to Hub")).toBeInTheDocument()
  })

  it("renders review card and allows flipping", () => {
    const data = createEmptyLocalData()
    data.study_state.due_review_snapshot = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    // Check front of card
    expect(screen.getByText("Term")).toBeInTheDocument()
    expect(screen.getByText("Accounting Equation")).toBeInTheDocument()
    // Flip card
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    expect(card).toBeInTheDocument()
    fireEvent.click(card)
    // Check back of card
    expect(screen.getByText("Definition")).toBeInTheDocument()
    expect(screen.getByText(/The fundamental relationship Assets = Liabilities \+ Equity/)).toBeInTheDocument()
  })

  it("displays rating buttons only when card is flipped", () => {
    const data = createEmptyLocalData()
    data.study_state.due_review_snapshot = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    // Check buttons are disabled initially
    const againButton = screen.getByText("Again")
    expect(againButton).toBeDisabled()
    const hardButton = screen.getByText("Hard")
    expect(hardButton).toBeDisabled()
    const goodButton = screen.getByText("Good")
    expect(goodButton).toBeDisabled()
    const easyButton = screen.getByText("Easy")
    expect(easyButton).toBeDisabled()
    // Flip card
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    fireEvent.click(card)
    // Now buttons should be enabled
    expect(againButton).not.toBeDisabled()
    expect(hardButton).not.toBeDisabled()
    expect(goodButton).not.toBeDisabled()
    expect(easyButton).not.toBeDisabled()
  })

  it("flips card with Enter and Space keys", () => {
    const data = createEmptyLocalData()
    data.study_state.due_review_snapshot = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    // Front of card is visible initially
    expect(screen.getByText("Term")).toBeInTheDocument()
    // Press Enter
    fireEvent.keyDown(card, { key: "Enter" })
    // Back of card should be visible
    expect(screen.getByText("Definition")).toBeInTheDocument()
    // Press Space
    fireEvent.keyDown(card, { key: " " })
    // Front of card should be visible again
    expect(screen.getByText("Term")).toBeInTheDocument()
  })

  it("advances to completion state after rating", async () => {
    const saveSpy = vi.spyOn(storageModule, "saveStudyData")
    const data = createEmptyLocalData()
    const dueEntries = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    data.study_state.due_review_snapshot = dueEntries
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    // Spy on getDueTerms to always return our dueEntries
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getDueTermsSpy = vi.spyOn(srsModule, "getDueTerms").mockReturnValue(dueEntries as any)
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    // First card
    expect(screen.getByText(/Card 1 of 1/)).toBeInTheDocument()
    // Flip and rate good
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    fireEvent.click(card)
    fireEvent.click(screen.getByText("Good"))
    // Check completion state
    await waitFor(() => expect(screen.getByText("Great work!")).toBeInTheDocument())
    expect(screen.getByText(/You reviewed/)).toBeInTheDocument()
    // Check save was called
    expect(saveSpy).toHaveBeenCalledTimes(1)
    // Restore getDueTerms
    getDueTermsSpy.mockRestore()
  })

  it("handles 'Again' rating", async () => {
    const saveSpy = vi.spyOn(storageModule, "saveStudyData")
    const data = createEmptyLocalData()
    const dueEntries = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    data.study_state.due_review_snapshot = dueEntries
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getDueTermsSpy = vi.spyOn(srsModule, "getDueTerms").mockReturnValue(dueEntries as any)
    
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    fireEvent.click(card)
    fireEvent.click(screen.getByText("Again"))
    await waitFor(() => expect(screen.getByText("Great work!")).toBeInTheDocument())
    expect(saveSpy).toHaveBeenCalledTimes(1)
    
    getDueTermsSpy.mockRestore()
  })

  it("handles 'Hard' rating", async () => {
    const saveSpy = vi.spyOn(storageModule, "saveStudyData")
    const data = createEmptyLocalData()
    const dueEntries = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    data.study_state.due_review_snapshot = dueEntries
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getDueTermsSpy = vi.spyOn(srsModule, "getDueTerms").mockReturnValue(dueEntries as any)
    
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    fireEvent.click(card)
    fireEvent.click(screen.getByText("Hard"))
    await waitFor(() => expect(screen.getByText("Great work!")).toBeInTheDocument())
    expect(saveSpy).toHaveBeenCalledTimes(1)
    
    getDueTermsSpy.mockRestore()
  })

  it("handles 'Good' rating", async () => {
    const saveSpy = vi.spyOn(storageModule, "saveStudyData")
    const data = createEmptyLocalData()
    const dueEntries = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    data.study_state.due_review_snapshot = dueEntries
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getDueTermsSpy = vi.spyOn(srsModule, "getDueTerms").mockReturnValue(dueEntries as any)
    
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    fireEvent.click(card)
    fireEvent.click(screen.getByText("Good"))
    await waitFor(() => expect(screen.getByText("Great work!")).toBeInTheDocument())
    expect(saveSpy).toHaveBeenCalledTimes(1)
    
    getDueTermsSpy.mockRestore()
  })

  it("handles 'Easy' rating", async () => {
    const saveSpy = vi.spyOn(storageModule, "saveStudyData")
    const data = createEmptyLocalData()
    const dueEntries = [
      {
        term_slug: "accounting-equation",
        scheduled_for: new Date().toISOString(),
        is_due: true,
        scheduler: {
          engine: "fsrs" as const,
          state: {
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
          },
        },
      },
    ]
    data.study_state.due_review_snapshot = dueEntries
    vi.mocked(storageModule.loadStudyData).mockReturnValue(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getDueTermsSpy = vi.spyOn(srsModule, "getDueTerms").mockReturnValue(dueEntries as any)
    
    render(
      <StudyDataProvider>
        <ReviewSession />
      </StudyDataProvider>
    )
    const card = screen.getByRole("button", { name: /Flashcard for/ })
    fireEvent.click(card)
    fireEvent.click(screen.getByText("Easy"))
    await waitFor(() => expect(screen.getByText("Great work!")).toBeInTheDocument())
    expect(saveSpy).toHaveBeenCalledTimes(1)
    
    getDueTermsSpy.mockRestore()
  })
})