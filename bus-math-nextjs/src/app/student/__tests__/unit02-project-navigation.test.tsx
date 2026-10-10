// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import Lesson08 from '../unit02/lesson08/page'
import Lesson09 from '../unit02/lesson09/page'
import Lesson10 from '../unit02/lesson10/page'

afterEach(cleanup)
it.each([Lesson08, Lesson09, Lesson10])('provides working section links for each project milestone', Page => {
  render(<Page />)
  for (const section of ['start', 'learn', 'do', 'check']) {
    expect(document.getElementById(section)).not.toBeNull()
    const name = section[0].toUpperCase() + section.slice(1)
    const link = screen.getByRole('link', { name: new RegExp('^\\d ' + name + '$') })
    expect(link.getAttribute('href')).toBe('#' + section)
  }
})
