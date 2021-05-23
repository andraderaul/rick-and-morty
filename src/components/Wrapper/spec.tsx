import { screen } from '@testing-library/react'
import render from '../../mock/theme'

import Wrapper from './index'

describe('<Wrapper />', () => {
  it('should be able render a Wrapper', () => {
    render(
      <Wrapper>
        <p> this is a testing wrapper</p>
      </Wrapper>
    )
    expect(screen.getByText(/this is a testing wrapper/i)).toBeInTheDocument()
  })
})
