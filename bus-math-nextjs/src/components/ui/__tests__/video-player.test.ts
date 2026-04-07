/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { VideoPlayer } from "../video-player"

const video = {
  youtubeId: "IN4MBaOdLRY",
  title: "From Chaos to Control",
  duration: "4:30",
  description: "Sarah explains why clean books matter.",
  transcript: "This is the transcript.",
}

describe("VideoPlayer", () => {
  it("renders the iframe immediately without a manual load button", () => {
    render(React.createElement(VideoPlayer, { video }))

    const iframe = screen.getByTitle(video.title)

    expect(iframe).toBeTruthy()
    expect(iframe.getAttribute("src")).toContain(video.youtubeId)
    expect(screen.queryByRole("button", { name: /load video/i })).toBeNull()
  })

  it("toggles the transcript panel", () => {
    render(React.createElement(VideoPlayer, { video }))

    expect(screen.queryByText(video.transcript)).toBeNull()

    fireEvent.click(screen.getByRole("button", { name: /video transcript/i }))
    expect(screen.getByText(video.transcript)).toBeTruthy()

    fireEvent.click(screen.getByRole("button", { name: /video transcript/i }))
    expect(screen.queryByText(video.transcript)).toBeNull()
  })
})
