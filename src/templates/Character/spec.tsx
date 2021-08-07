import { screen, waitFor } from '@testing-library/react'
import { character } from '../../mock/fixtures/characters'
import render from '../../mock/queryClientProvider'
import { server, rest } from '../../mock/server'

import Character from './index'

describe('Template Character', () => {
  const props = character
  it('should be able to render a template character', () => {
    render(<Character {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /character: rick sanchez/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', {
        name: /rick sanchez/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /rick sanchez/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/alive - human/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /episodes/i
      })
    ).toBeInTheDocument()
  })

  it('should be able to render a template character and episode', async () => {
    render(<Character {...props} />)

    await waitFor(() => {
      expect(
        screen.getByRole('article', {
          name: /card/i
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', {
          name: /pilot/i
        })
      ).toBeInTheDocument()
      expect(screen.getByText(/S01E01/)).toBeInTheDocument()
      expect(screen.getByText(/december 2, 2013/i)).toBeInTheDocument()
    })
  })

  //TODO:
  it('should be able to render a error message', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    render(<Character {...props} />)
  })
})
