import { screen } from '@testing-library/react'
import render from '../../mock/theme'

import Content from './index'

describe('<Content />', () => {
  it('should be able render a Content', () => {
    render(
      <Content>
        <p> This is a content test </p>
      </Content>
    )

    expect(screen.getByText(/this is a content test/i)).toBeInTheDocument()
  })
})
