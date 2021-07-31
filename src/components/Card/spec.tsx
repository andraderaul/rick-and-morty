import { screen } from '@testing-library/react'
import render from '../../mock/theme'

import Card from './index'

describe('<Card />', () => {
  it('should render render a Card', () => {
    render(
      <Card title="Rick" informative="Live" subtitle="Sanchez" href="/link" />
    )

    expect(
      screen.getByRole('link', {
        name: /rick/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/live/i)).toBeInTheDocument()
    expect(screen.getByText(/sanchez/i)).toBeInTheDocument()
  })
})
