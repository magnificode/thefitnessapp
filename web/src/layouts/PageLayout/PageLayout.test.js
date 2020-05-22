import { render, cleanup } from '@testing-library/react'

import PageLayout from './PageLayout'

describe('PageLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PageLayout />)
    }).not.toThrow()
  })
})
