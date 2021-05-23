import { screen } from '@testing-library/react'
import render from '../../mock/theme'

import Layout from './index'

describe('<Layout />', () => {
  it('should be able render a Layout', () => {
    render(
      <Layout>
        <p> this is a testing layout </p>
      </Layout>
    )
    expect(screen.getByText(/this is a testing layout/i)).toBeInTheDocument()
  })
})
