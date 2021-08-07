import { LOCATIONS } from 'constants/endpoints'
import { getLocations, getLocationsById } from 'lib/location'
import { useQuery, useInfiniteQuery } from 'react-query'

export function useLocationQuery(id: string | number) {
  return useQuery(`${LOCATIONS}/${id}`, () => getLocationsById(id))
}

export function useLocationsQuery() {
  return useInfiniteQuery(LOCATIONS, getLocations, {
    getNextPageParam: (lastPage) =>
      lastPage.info.next ? lastPage.info.next.split('?')[1] : null
  })
}
