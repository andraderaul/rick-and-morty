import { QueryFunctionContext } from 'react-query'
import { location, locations } from '../mock/fixtures/locations'
import { server, rest } from '../mock/server'

import { getLocations, getLocationsById } from './location'

describe('locations', () => {
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

  it('should return an error when get locations', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    try {
      await getLocations()
    } catch (error) {
      expect(error.isAxiosError).toBe(true)
      expect(error.response.status).toBe(500)
    }
  })

  it('should return an error when get location', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    try {
      await getLocationsById(1)
    } catch (error) {
      expect(error.isAxiosError).toBe(true)
      expect(error.response.status).toBe(500)
    }
  })
})
