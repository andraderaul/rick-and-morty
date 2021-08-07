import { QueryFunctionContext } from 'react-query'
import { location, locations } from '../mock/fixtures/locations'

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
})
