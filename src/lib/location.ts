import { QueryFunctionContext } from 'react-query'
import api from 'services/api'
import { LOCATIONS } from 'constants/endpoints'
import { GET } from 'constants/verbs'
import LocationType from 'types/location'
import InfoType from 'types/info'

type ResponseLocation = {
  info: InfoType
  results: LocationType[]
}

export async function getLocations(
  context?: QueryFunctionContext
): Promise<ResponseLocation> {
  const params = context?.pageParam ? `?${context?.pageParam}` : ''

  const { data } = await api({
    method: GET,
    url: `${LOCATIONS}${params}`
  })

  return data
}

export async function getLocationsById(
  id: number | string
): Promise<LocationType> {
  const { data } = await api({
    method: GET,
    url: `${LOCATIONS}/${id}`
  })

  return data
}
