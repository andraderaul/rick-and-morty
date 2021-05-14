import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import render from '../../mock/theme'

import Button from './index'

describe('<Button/>', () => {
  it('should be able render a Button', () => {
    const title = 'Button'
    const onClick = jest.fn()
    const type = 'button'
    render(<Button title={title} onClick={onClick} type={type} />)
    expect(
      screen.getByRole('button', {
        name: /button/i
      })
    ).toBeInTheDocument()
  })

  it('should be able render a Button and simulate click', () => {
    const title = 'Button'
    const onClick = jest.fn()
    const type = 'button'
    render(<Button title={title} onClick={onClick} type={type} />)
    const nodeButton = screen.getByRole('button', {
      name: /button/i
    })
    expect(nodeButton).toBeTruthy()
    userEvent.click(nodeButton)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
