import { render, cleanup } from '@testing-library/react'

import SingleExercisePage from './SingleExercisePage'

describe('SingleExercisePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SingleExercisePage />)
    }).not.toThrow()
  })
})
