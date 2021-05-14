import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import render from '../../mock/theme'
import Back from './index'

describe('<Back/>', () => {
  it('should render Back', () => {
    render(<Back />)

    const backNode = screen.getByTestId('back')

    expect(backNode).toBeTruthy()
  })

  it('should render Back and simulate click', () => {
    render(<Back />)

    const backNode = screen.getByTestId('back')

    expect(backNode).toBeTruthy()
    userEvent.click(backNode)
  })
})
