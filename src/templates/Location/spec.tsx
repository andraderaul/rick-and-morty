import { screen, waitFor } from '@testing-library/react'
import { location } from '../../mock/fixtures/locations'
import render from '../../mock/queryClientProvider'
import { server, rest } from '../../mock/server'

import Location from './index'

describe('Template Location', () => {
  const props = location

  it('should be able to render a template location', () => {
    render(<Location {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /location: earth \(c-137\)/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /earth \(c-137\)/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/dimension c-137/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /characters/i
      })
    ).toBeInTheDocument()
  })

  it('should be able to render a template location and character', async () => {
    render(<Location {...props} />)
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

    render(<Location {...props} />)
  })
})
