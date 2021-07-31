import { LOCATIONS } from '../constants/endpoints'
import { QueryFunctionContext } from 'react-query'
import { rest, server } from '../mock/server'
import { location, locations } from '../mock/fixtures/locations'
import { baseURL } from '../constants/endpoints'

import { getLocations, getLocationsById } from './location'

describe('locations', () => {
  beforeEach(() => {
    server.use(
      rest.get(`${baseURL}${LOCATIONS}`, (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(locations))
      }),
      rest.get(`${baseURL}${LOCATIONS}/1`, (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(location))
      })
    )
  })

  it('should return all locations', async () => {
    const data = await getLocations()
    expect(data).toEqual(locations)
  })

  it('should return all locations page 2', async () => {
    const data = await getLocations({ pageParam: 2 } as QueryFunctionContext)
    expect(data).toEqual(locations)
  })

  it('should return a location', async () => {
    const data = await getLocationsById(1)
    expect(data).toEqual(location)
  })
})
