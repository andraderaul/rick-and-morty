import { screen, waitFor } from '@testing-library/react'
import { episode } from '../../mock/fixtures/episodes'
import render from '../../mock/queryClientProvider'
import { server, rest } from '../../mock/server'

import Episode from './index'

describe('Template Episode', () => {
  const props = episode
  it('should be able to render template episode', () => {
    render(<Episode {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /episode: pilot/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /pilot/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/s01e01/i)).toBeInTheDocument()
    expect(screen.getByText(/december 2, 2013/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /characters/i
      })
    ).toBeInTheDocument()
  })

  it('should be able to render a template episode and character', async () => {
    render(<Episode {...props} />)

    await waitFor(() => {
      expect(
        screen.getByRole('article', {
          name: /character/i
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('img', {
          name: /rick sanchez/i
        })
      ).toBeInTheDocument()
      expect(screen.getByText(/alive - human/i)).toBeInTheDocument()
      expect(screen.getByText(/last known location:/i)).toBeInTheDocument()
    })
  })

  //TODO:
  it('should be able to render a error message', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    render(<Episode {...props} />)
  })
})
