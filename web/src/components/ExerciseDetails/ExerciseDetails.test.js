import { render, cleanup } from '@testing-library/react'

import ExerciseDetails from './ExerciseDetails'

describe('ExerciseDetails', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ExerciseDetails />)
    }).not.toThrow()
  })
})
