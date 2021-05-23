import { screen } from '@testing-library/react'
import render from '../../mock/theme'

import Hero from './index'

describe('<Hero />', () => {
  it('should be able render a Hero', () => {
    const { container } = render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /rick and morty/i
      })
    ).toBeInTheDocument()
    expect(
      container.querySelector('div > section > div > svg')
    ).toBeInTheDocument()
  })
})
