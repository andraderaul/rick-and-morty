import { EPISODES } from '../constants/endpoints'
import { QueryFunctionContext } from 'react-query'
import { rest, server } from '../mock/server'
import { episode, episodes } from '../mock/fixtures/episodes'
import { baseURL } from '../constants/endpoints'

import { getEpisodes, getEpisodesById } from './episodes'

describe('episodes', () => {
  beforeEach(() => {
    server.use(
      rest.get(`${baseURL}${EPISODES}`, (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(episodes))
      }),
      rest.get(`${baseURL}${EPISODES}/1`, (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(episode))
      })
    )
  })

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
})
