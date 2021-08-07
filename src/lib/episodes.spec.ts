import { QueryFunctionContext } from 'react-query'
import { episode, episodes } from '../mock/fixtures/episodes'
import { server, rest } from '../mock/server'

import { getEpisodes, getEpisodesById } from './episodes'

describe('episodes', () => {
  it('should return all episodes', async () => {
    const data = await getEpisodes()
    expect(data).toEqual(episodes)
  })

  it('should return all episodes page 2', async () => {
    const data = await getEpisodes({ pageParam: 2 } as QueryFunctionContext)
    expect(data).toEqual(episodes)
  })

  it('should return an episode', async () => {
    const data = await getEpisodesById(1)
    expect(data).toEqual(episode)
  })

  it('should return an error when get episodes', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    try {
      await getEpisodes()
    } catch (error) {
      expect(error.isAxiosError).toBe(true)
      expect(error.response.status).toBe(500)
    }
  })

  it('should return an error when get episode', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    try {
      await getEpisodesById(1)
    } catch (error) {
      expect(error.isAxiosError).toBe(true)
      expect(error.response.status).toBe(500)
    }
  })
})
