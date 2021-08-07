import { baseURL, CHARACTERS, LOCATIONS, EPISODES } from 'constants/endpoints'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import * as fixtures from './fixtures'

const composeEndpoint = (endpoint: string) => `${baseURL}${endpoint}`

const composeEndpointWithId = (endpoint: string) =>
  composeEndpoint(`${endpoint}/:id`)

const handlers = [
  rest.get(composeEndpoint(CHARACTERS), async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.characters))
  }),
  rest.get(composeEndpointWithId(CHARACTERS), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.character))
  }),
  rest.get(composeEndpoint(LOCATIONS), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.locations))
  }),
  rest.get(composeEndpointWithId(LOCATIONS), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.location))
  }),
  rest.get(composeEndpoint(EPISODES), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.episodes))
  }),
  rest.get(composeEndpointWithId(EPISODES), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fixtures.episode))
  })
]

const server = setupServer(...handlers)
export { rest, server }
